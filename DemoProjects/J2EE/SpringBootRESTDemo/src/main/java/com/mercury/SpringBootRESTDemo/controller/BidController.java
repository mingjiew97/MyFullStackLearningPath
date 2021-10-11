//package com.mercury.SpringBootRESTDemo.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.mercury.SpringBootRESTDemo.pgbean.Bid;
//import com.mercury.SpringBootRESTDemo.service.BidService;
//
//@RestController
//public class BidController {
//
//	@Autowired
//	BidService bidService;
//
//	@GetMapping("/bids")
//	public List<Bid> getBids() {
//		return bidService.getBids();
//	}
//
//	@PostMapping("/bids")
//	public void saveBid(@RequestBody Bid bid) {
//		bidService.saveBid(bid);
//	}
//
//}
