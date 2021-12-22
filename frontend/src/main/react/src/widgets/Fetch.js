const server_host =
  window.location.hostname === "localhost"
    ? "http://localhost:8080"
    : "https://michiapp.herokuapp.com";

/* GET API
 *
 */
async function getUserAPI(id) {
  const URL = server_host + "/michiapp/user/" + id;
  return fetch(URL)
    .then((res) => res.json())
    .catch(() => console.error("GET error."));
}

async function getUsersAPI(id) {
  const URL = server_host + "/michiapp/users/" + id;
  return fetch(URL)
    .then((res) => res.json())
    .catch(() => console.error("GET error."));
}

async function getUserLogin(data) {
  const URL =
    server_host + "/michiapp/userlogin/" + data.email + "/" + data.password;
  return fetch(URL)
    .then((res) => res.text())
    .then((data) => {
      var user = data;
      return user;
    })
    .catch(() => console.error("GET error."));
}

async function getAnimalAPI(id) {
  const URL = server_host + "/michiapp/animal/" + id;
  return fetch(URL)
    .then((res) => res.json())
    .catch(() => console.error("GET error."));
}

async function getChatsAPI(id) {
  const URL = server_host + "/michiapp/chats/" + id;
  return fetch(URL)
    .then((res) => res.json())
    .catch(() => console.error("GET error."));
}

async function getChatAPI(id) {
  const URL = server_host + "/michiapp/chat/" + id;
  return fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      var userid = data;
      return userid;
    })
    .catch(() => console.error("GET error."));
}

async function getMatchAPI(id) {
  const URL = server_host + "/michiapp/match/" + id;
  return fetch(URL)
    .then((res) => res.json())
    .catch(() => console.error("GET error."));
}

async function getUserSettingsAPI(id) {
  const URL = server_host + "/michiapp/usersettings/" + id;
  return fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      var uSettingsData = data;
      return uSettingsData;
    })
    .catch(() => console.error("GET error."));
}
async function getUserFiles(id) {
  const URL = server_host + "/michiapp/userfiles/" + id;
  return fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      var uSettingsData = data;
      return uSettingsData;
    })
    .catch(() => console.error("GET error."));
}

async function getCityNamesAPI() {
  const URL = server_host + "/michiapp/getcitynames";
  return fetch(URL)
    .then((res) => res.json())
    .catch(() => console.error("GET error."));
}

/* POST/PUT API
 *
 */
async function saveLike(u_id, ur_id) {
  fetch(server_host + "/michiapp/adduserlike", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userLikeId: {
        user1Id: u_id,
        user2Id: ur_id,
      },
    }),
  }).catch(() => console.error("POST Error."));
}

async function saveUser(data) {
  return fetch(server_host + "/michiapp/adduser", {
    method: "POST",
    headers: {
      Accept: "application/json",
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
  fetch(server_host + "/michiapp/addusersettings", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: data.id,
      name: data.name,
      animalName: data.animalName,
      cityId: data.cityId,
    }),
  }).catch(() => console.log("POST Error."));
}

async function saveProfileImage(data) {
  fetch(server_host + "/michiapp/addprofileimage", {
    method: "POST",
    body: data,
  }).catch((err) => console.log("POST Error."));
}

async function saveMessage(u_id, chat_id, message) {
  return fetch(server_host + "/michiapp/addmessage", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: u_id,
      chatroomId: chat_id,
      message: message,
    }),
  }).catch(() => console.log("POST Error."));
}

/* DELETE API
 *
 */
async function deleteImage(id, user_id) {
  fetch(server_host + "/michiapp/deleteimage", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      userId: user_id
    }),
  }).catch(() => console.log("DELETE Error"));
}

export {
  getUserAPI,
  getUsersAPI,
  getUserLogin,
  getAnimalAPI,
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
