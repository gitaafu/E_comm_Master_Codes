package com.example.dto;

import lombok.Data;

@Data
public class CartDto {

    private Long cartId;
	private Long seller_id;
    private String sellerEmailID;
	private Long productId;
	private String name;
	private String email;
	private String description;
   	private String thumbnail;
    private double price;
    private int quantity;
    private String category;
    private String subcategory1;
    private String subcategory2;
    private Long totalproductPrice;
    
	
}

