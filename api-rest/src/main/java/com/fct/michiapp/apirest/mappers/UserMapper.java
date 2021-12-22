package com.fct.michiapp.apirest.mappers;

import com.fct.michiapp.apirest.apimodels.AddUserRequest;
import com.fct.michiapp.apirest.apimodels.GetUserResponse;
import com.fct.michiapp.model.entities.Users;
import com.fct.michiapp.model.entities.queries.UserAnimalData;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    Users toUserRequest(AddUserRequest u);//
    List<GetUserResponse> toListUserAnimalDataApi(List<UserAnimalData> u);
}
