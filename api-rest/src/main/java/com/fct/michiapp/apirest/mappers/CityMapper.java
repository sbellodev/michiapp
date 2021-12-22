package com.fct.michiapp.apirest.mappers;


import com.fct.michiapp.apirest.apimodels.GetCityResponse;
import com.fct.michiapp.model.entities.City;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CityMapper {
    List<GetCityResponse> toListCityApi(List<City> u);
}
