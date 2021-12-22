package com.fct.michiapp.model.entities;

import lombok.Data;

import javax.persistence.*;


@Entity
@Data
public class AnimalImage {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name = "user_id")
	private Integer userId;
	@Column(name = "img_name")
	private String animalImg;
	@Column(name = "img_encoded")
	private String imgEncoded;
	@Column(name = "img_type")
	private String imgType;

	public AnimalImage() {
	}
	public AnimalImage(Integer userId, String animalImg, String imgEncoded, String imgType) {
		this.userId = userId;
		this.animalImg = animalImg;
		this.imgEncoded = imgEncoded;
		this.imgType = imgType;
	}
}