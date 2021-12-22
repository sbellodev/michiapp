package com.fct.michiapp.apirest.mappers;

import com.fct.michiapp.apirest.apimodels.GetUserLikeResponse;
import com.fct.michiapp.model.entities.UserLike;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserLikeMapper {
    List<GetUserLikeResponse> toListUserLikeApi(List<UserLike> likes);
}
