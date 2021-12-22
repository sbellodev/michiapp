package com.fct.michiapp.model.entities.queries;

import lombok.Data;

@Data
public class UserAnimalData {

    private Integer id;
    private String name;
    private String animalName;
    private String imgIdArray;
    private String imgArray;
    private String imgType;
    private Float distance;

    public UserAnimalData(Integer id, String name, String animalName, String imgArray, String imgType, Float distance) {
        this.id = id;
        this.name = name;
        this.animalName = animalName;
        this.imgArray = imgArray;
        this.imgType = imgType;
        this.distance = distance;
    }

    public UserAnimalData(Integer id, String name, String animalName, String imgIdArray, String imgArray, String imgType) {
        this.id = id;
        this.name = name;
        this.animalName = animalName;
        this.imgIdArray = imgIdArray;
        this.imgArray = imgArray;
        this.imgType = imgType;
    }
}
