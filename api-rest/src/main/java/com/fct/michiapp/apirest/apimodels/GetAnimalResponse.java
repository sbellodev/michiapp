package com.fct.michiapp.apirest.apimodels;

import java.io.Serializable;


public class GetAnimalResponse implements Serializable {
	private String animalName;
	private String imgEncoded;

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
}