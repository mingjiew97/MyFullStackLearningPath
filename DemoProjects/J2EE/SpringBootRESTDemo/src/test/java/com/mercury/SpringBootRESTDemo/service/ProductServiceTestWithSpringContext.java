package com.mercury.SpringBootRESTDemo.service;

import com.mercury.SpringBootRESTDemo.bean.Product;
import com.mercury.SpringBootRESTDemo.dao.ProductDao;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import static org.mockito.Mockito.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ProductServiceTestWithSpringContext {

    @Autowired
    ProductService productService;

    @MockBean
    ProductDao productDao;

    @Before
    public void setup() {
        List<Product> products = new ArrayList<>();
        products.add(new Product("Test", "Test", 88, 888, ""));
        when(productDao.findAll()).thenReturn(products);
    }

    @Test
    public void test() {
        List<Product> products = productService.getProducts();
        assertThat(products.get(0).getName()).isEqualTo("Test");
    }

}
