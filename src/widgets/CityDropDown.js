import React from "react";
import styled from "styled-components";

function CityDropDown({ citiesList, userSettings, changeFormData }) {
    const citiesListSorted = citiesList.sort((a, b) => a.name.localeCompare(b.name));
    return (
      <CityContainer
        name="city"
        value={citiesListSorted.cityId}
        onChange={(e) => changeFormData({ ...userSettings, cityId: e.target.value })}
      >
        {citiesListSorted.map((city, i) => (
          <option key={city.id} value={city.id}>
            {i === 0 ? userSettings.cityName : city.name}
          </option>
        ))}
      </CityContainer>
    );
}

CityDropDown.propTypes = {
citiesList: () => {}, // Add any other necessary validations
userSettings: () => {},
changeFormData: () => {}
};

CityDropDown.defaultProps = {
citiesList: () => {}, // Add any other necessary validations
userSettings: () => {},
changeFormData: () => {}
}

const CityContainer = styled.select`
  font-size: 18px;
  color: gray;
`;

export default CityDropDown;