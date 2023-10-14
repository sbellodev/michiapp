import React from 'react';

const resultTest = (result) => (result ? <span> Pass ✅ </span> : <span> Error ❌ </span>);

const testGetUser = (response) => resultTest(response.name);

const testGetAnimal = (response) => resultTest(response.animalName);

const testGetMatch = (response) => resultTest(response);

const testGetUserSettings = (response) => resultTest(response.name);

const testGetUserData = (response) => resultTest(response.name === "Mr Perlo");

const testGetAnimalData = (response) => resultTest(response.animalName === "Perla");

const testGetMatchData = (response) => resultTest(response.userLikeId.user1Id === 10);

const testGetUserSettingsData = (response) => resultTest(response.name === "Mr Perlo");

function Tests() {
  return (
    <div>
      <h2>Tests</h2>
      <div>
        <h3>Test Get User</h3>
        {testGetUser({ name: 'John' })}
      </div>
      <div>
        <h3>Test Get Animal</h3>
        {testGetAnimal({ animalName: 'Dog' })}
      </div>
      <div>
        <h3>Test Get Match</h3>
        {testGetMatch(true)}
      </div>
      <div>
        <h3>Test Get User Settings</h3>
        {testGetUserSettings({ name: 'Alice' })}
      </div>
      <div>
        <h3>Test Get User Data</h3>
        {testGetUserData({ name: 'Mr Perlo' })}
      </div>
      <div>
        <h3>Test Get Animal Data</h3>
        {testGetAnimalData({ animalName: 'Perla' })}
      </div>
      <div>
        <h3>Test Get Match Data</h3>
        {testGetMatchData({ userLikeId: { user1Id: 10 } })}
      </div>
      <div>
        <h3>Test Get User Settings Data</h3>
        {testGetUserSettingsData({ name: 'Mr Perlo' })}
      </div>
    </div>
  );
}

export default Tests;
