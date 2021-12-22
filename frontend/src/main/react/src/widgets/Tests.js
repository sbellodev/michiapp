const resultTest = (result) =>
  result ? <span> Pass ✅ </span> : <span> Error ❌ </span>;

const testGetUser = (response) => resultTest(response.name);

const testGetAnimal = (response) => resultTest(response.animalName);

const testGetMatch = (response) => {
  return resultTest(response);
};

const testGetUserSettings = (response) => resultTest(response.name);

const testGetUserData = (response) => resultTest(response.name === "Mr Perlo");

const testGetAnimalData = (response) =>
  resultTest(response.animalName === "Perla");

const testGetMatchData = (response) => {
  return resultTest(response.userLikeId.user1Id === 10);
};

const testGetUserSettingsData = (response) =>
  resultTest(response.name === "Mr Perlo");

export {
  testGetUser,
  testGetAnimal,
  testGetMatch,
  testGetUserSettings,
  testGetUserData,
  testGetAnimalData,
  testGetMatchData,
  testGetUserSettingsData,
};
