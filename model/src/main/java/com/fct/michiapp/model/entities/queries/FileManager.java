package com.fct.michiapp.model.entities.queries;

import lombok.Data;

import javax.persistence.Column;

@Data
public class FileManager {

    private Integer id;
    private Integer userId;
    private String animalImg;
    private byte[] bytes;
    private String img_encoded;
    private String img_type;

    public FileManager(Integer id, Integer userId, String animalImg, byte[] bytes, String img_encoded, String img_type) {
        this.id = id;
        this.userId = userId;
        this.animalImg = animalImg;
        this.bytes = bytes;
        this.img_encoded = img_encoded;
        this.img_type = img_type;
    }
}
