//package com.mercury.SpringBootRESTDemo.service;
//
//import java.util.List;
//
//import javax.transaction.Transactional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.mercury.SpringBootRESTDemo.pgbean.Bid;
//import com.mercury.SpringBootRESTDemo.pgdao.BidDao;
//
//@Service
//@Transactional
//public class BidService {
//
//	@Autowired
//	BidDao bidDao;
//
//	public List<Bid> getBids() {
//		return bidDao.findAll();
//	}
//
//	public void saveBid(Bid bid) {
//		bidDao.save(bid);
//	}
//
//}
