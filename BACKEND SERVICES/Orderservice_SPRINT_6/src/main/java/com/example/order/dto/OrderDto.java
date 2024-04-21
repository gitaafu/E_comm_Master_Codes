package com.example.order.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDto {
	private Long orderId;
	private Long paymentId;

	private String buyerName;
	private String email;
	private String deliveryAddress;
	private Long phoneNo;
	private List<OrderItemDto> items;
	private Long totalOrderAmount;
	private String status;

	@CreationTimestamp
	@Column(name = "created_at", nullable = false, updatable = false)
	private LocalDateTime createdAt;

	@UpdateTimestamp
	@Column(name = "updated_at",nullable = false, updatable = false)
	private LocalDateTime updatedAt;
}
