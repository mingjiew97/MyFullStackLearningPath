package com.mercury.SpringBootRESTDemo.service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.List;

import javax.servlet.ServletContext;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.mercury.SpringBootRESTDemo.bean.Product;
import com.mercury.SpringBootRESTDemo.dao.ProductDao;
import com.mercury.SpringBootRESTDemo.http.Response;

@Service
public class ProductService {
	
	private final Logger LOGGER = LoggerFactory.getLogger(ProductService.class);

	@Autowired
	ProductDao productDao;

	@Autowired
	PdfService pdfService;

	// add products list into cache
	@Cacheable("productsList")
	public List<Product> getProducts() {
		return productDao.findAll();
	}
	
	public List<Product> getProductsByPageAndSize(int page, int size) {
		return productDao.findAll(PageRequest.of(page, size)).getContent();
	}

	// remove products list from cache for updating.
	@CacheEvict(value = "productsList", allEntries = true)
	public Response saveProduct(Product product) {
		try {
			productDao.save(product);
			return new Response(true);
		} catch (Exception e) {
			LOGGER.error(e.getMessage());
			return new Response(false);
		}
	}

	// add retrieved product into cache.
	@Cacheable(value = "products", key = "#id")
	public Product getProduct(int id) {
		return productDao.findById(id).get();
	}

	// cache moved to dao for updating purpose
	public Response updateProduct(Product product) {
		try {
			Product p = productDao.getOne(product.getId());
			p.setName(product.getName());
			p.setBrand(product.getBrand());
			p.setPrice(product.getPrice());
			p.setStock(product.getStock());
			p.setImage(product.getImage());
			productDao.save(p);
			return new Response(true);
		} catch (Exception e) {
			return new Response(false);
		}
	}

	// remove from cache.
	@CacheEvict(value = "products", key = "#id")
	public Response deleteProduct(int id) {
		try {
			productDao.deleteById(id);
			return new Response(true);
		} catch (Exception e) {
			return new Response(false);
		}
	}
	
	public void generateProductsReportLocally() {
		String name = "src/main/resources/public/reports/products/" + LocalDate.now().toString()+".pdf";
		Path path = Paths.get(name);
		try{
			if(!Files.exists(path.getParent())) {
				Files.createDirectories(path.getParent());
			}
			Files.write(path, pdfService.getProductsRaw());
		} catch(Exception e) {
			e.printStackTrace();
		}
	}

}
