package com.fct.michiapp.apirest.apimodels;

import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.io.Serializable;


public class GetUserResponse implements Serializable {
	private Integer id;
	private String name;
	private String animalName;
	private String imgArray;
	private String imgType;
	private Double distance;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAnimalName() {
		return animalName;
	}

	public void setAnimalName(String animalName) {
		this.animalName = animalName;
	}

	public String getImgArray() {
		return imgArray;
	}

	public void setImgArray(String imgArray) {
		this.imgArray = imgArray;
	}

	public String getImgType() {
		return imgType;
	}

	public void setImgType(String imgType) {
		this.imgType = imgType;
	}

	public Double getDistance() {
		return distance;
	}

	public void setDistance(Double distance) {
		this.distance = distance;
	}
}