package com.fct.michiapp.apirest.apimodels;

import javax.persistence.Column;
import java.io.Serializable;


public class GetChatUserResponse implements Serializable {
	private Integer id;
	private Integer otherId;
	private String animalName;
	private String imgEncoded;
	private String imgType;
	private String message;
	private String createdAt;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getOtherId() {
		return otherId;
	}

	public void setOtherId(Integer otherId) {
		this.otherId = otherId;
	}

	public String getAnimalName() {
		return animalName;
	}

	public void setAnimalName(String animalName) {
		this.animalName = animalName;
	}

	public String getImgEncoded() {
		return imgEncoded;
	}

	public void setImgEncoded(String imgEncoded) {
		this.imgEncoded = imgEncoded;
	}

	public String getImgType() {
		return imgType;
	}

	public void setImgType(String imgType) {
		this.imgType = imgType;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}
}
