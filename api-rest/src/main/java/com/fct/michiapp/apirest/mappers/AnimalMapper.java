package com.fct.michiapp.apirest.mappers;

import com.fct.michiapp.apirest.apimodels.AddAnimalRequest;
import com.fct.michiapp.apirest.apimodels.GetAnimalResponse;
import com.fct.michiapp.model.entities.Animal;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnimalMapper {
    GetAnimalResponse toAnimalApi(Animal a);
    Animal toAnimalRequest(AddAnimalRequest animal);
}