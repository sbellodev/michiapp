
const serverHost = window.location.hostname === "localhost"
    ? process.env.REACT_APP_LOCAL_HOST
    : process.env.REACT_APP_SERVER_HOST;

// async function getUserAPI(id) {
//   const URL = `${serverHost}/api/user/${id}`;
//   return fetch(URL)
//     .then((res) => res.json())
//     .catch(() => console.error("GET error."));
// }

async function getUsersAPI(id) {
  const URL = `${serverHost}/api/usertimeline/${id}`;
  return fetch(URL)
    .then((res) => res.json())
    .catch(() => console.error("GET error."));
}

async function getUserLogin(userData) {
  const URL = `${serverHost}/api/userlogin/${userData.email}/${userData.password}`;
  return fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const user = data?.id;
      return user;
    })
    .catch(() => console.error("GET error."));
}

async function getChatsAPI(id) {
  const URL = `${serverHost}/api/userchats/${id}`;
  return fetch(URL)
    .then((res) => res.json())
    .catch(() => console.error("GET error."));
}

async function getChatAPI(id) {
  const URL = `${serverHost}/api/chat/${id}`;
  return fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const userid = data;
      return userid;
    })
    .catch(() => console.error("GET error."));
}

// revise
async function getMatchAPI(id) {
  const URL = `${serverHost}/michiapp/match/${id}`;
  return fetch(URL)
    .then((res) => res.json())
    .catch(() => console.error("GET error."));
}

async function getUserSettingsAPI(id) {
  const URL = `${serverHost}/api/usersettings/${id}`;
  return fetch(URL)
    .then((res) => res.json())
    .then((data) => data)
    .catch(() => console.error("GET error."));
}

async function getUserFiles(id) {
  const URL = `${serverHost}/api/userprofile/${id}`;
  return fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const uSettingsData = data;
      return uSettingsData;
    })
    .catch(() => console.error("GET error."));
}
// revise
async function getCityNamesAPI() {
  const URL = `${serverHost}/michiapp/getcitynames`;
  return fetch(URL)
    .then((res) => res.json())
    .catch(() => console.error("GET error."));
}

async function saveLike(userLikerId, userLikedId) {
  fetch(`${serverHost}/api/adduserlike`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        likerId: userLikerId,
        likedId: userLikedId,
    }),
  }).catch(() => console.error("POST Error."));
}

async function saveUser(data) {
  return fetch(`${serverHost}/api/adduser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      animalName: data.animal_name,
      cityId: data.cityId,
      email: data.email,
      password: data.password,
    }),
  }).catch(() => console.log("POST Error."));
}

async function saveUserSettings(data) {
  fetch(`${serverHost}/api/updateusersettings/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: data.id,
      name: data.name,
      animalName: data.animalName,
      cityId: data.cityId,
    }),
  }).catch(() => console.log("PUT Error."));
}

async function saveProfileImage(data) {
  fetch(`${serverHost}/api/addprofileimage/`, {
    method: "POST",
    body: data,
  }).catch(() => console.log("POST Error."));
}

async function saveMessage(userId, chatId, message) {
  return fetch(`${serverHost}/api/addmessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      chatId,
      message,
    }),
  }).catch(() => console.log("POST Error."));
}

async function deleteImage(id, userId) {
  fetch(`${serverHost}/api/deleteimage/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      userId
    }),
  }).catch(() => console.log("DELETE Error"));
}

export {
  getUsersAPI,
  getUserLogin,
  getChatAPI,
  getChatsAPI,
  getMatchAPI,
  getUserSettingsAPI,
  getUserFiles,
  getCityNamesAPI,
  saveLike,
  saveUser,
  saveUserSettings,
  saveProfileImage,
  saveMessage,
  deleteImage,
};
