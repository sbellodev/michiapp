package com.fct.michiapp.apirest.apimodels;

public class AddAnimalRequest {
    private Integer userId;
    private String animalName;

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public void setAnimalName(String animalName) {
        this.animalName = animalName;
    }
    public String getAnimalName() {
        return animalName;
    }
}
