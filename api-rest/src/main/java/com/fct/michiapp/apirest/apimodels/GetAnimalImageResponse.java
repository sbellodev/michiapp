package com.fct.michiapp.apirest.apimodels;

import java.io.Serializable;


public class GetAnimalImageResponse implements Serializable {
	private Integer id;
	private Integer userId;
	private String imgEncoded;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		id = id;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getImgEncoded() {
		return imgEncoded;
	}

	public void setImgEncoded(String imgEncoded) {
		this.imgEncoded = imgEncoded;
	}
}