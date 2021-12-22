package com.fct.michiapp.model.entities.queries;


import lombok.Data;

import java.util.List;
@Data
public class ChatsData {

    private Integer id;
    private Integer otherId;
    private String animalName;
    private String imgEncoded;
    private String imgType;
    private String message;
    private String createdAt;

    public ChatsData(Integer id, Integer otherId, String animalName, String imgEncoded, String imgType, String message, String createdAt) {
        this.id = id;
        this.otherId = otherId;
        this.animalName = animalName;
        this.imgEncoded = imgEncoded;
        this.imgType = imgType;
        this.message = message;
        this.createdAt = createdAt;
    }
}
