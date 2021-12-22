package com.fct.michiapp.apirest.mappers;

import com.fct.michiapp.apirest.apimodels.GetChatUserResponse;
import com.fct.michiapp.model.entities.queries.ChatsData;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ChatUserMapper {
    List<GetChatUserResponse> toListChatUserApi(List<ChatsData> cu);
}
