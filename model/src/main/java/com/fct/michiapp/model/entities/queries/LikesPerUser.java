package com.fct.michiapp.model.entities.queries;

public class LikesPerUser {

    private Integer userId;

    private Integer numLikes;

    public LikesPerUser(Integer userId, Integer numLikes) {
        this.userId = userId;
        this.numLikes = numLikes;
    }

    public Integer getNumLikes() {
        return this.numLikes;
    }
}
