import { Client } from "@stomp/stompjs";
const server_host =
  window.location.hostname === "localhost"
    ? "localhost:8080"
    : "michiapp.herokuapp.com";

const WebClient = (user) => {
console.log(server_host)
  return new Client({
      brokerURL: "ws://" +server_host+ "/michiapp/michisocket",
      connectHeaders: {
        login: "user-" + user
      },
      debug: function (str) {},
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });
}

WebClient.onStompError = function (frame) {
  // Will be invoked in case of error encountered at Broker
  // Bad login/passcode typically will cause an error
  // Complaint brokers will set `message` header with a brief message. Body may contain details.
  // Compliant brokers will terminate the connection after any error
  console.log("Broker reported error: " + frame.headers["message"]);
  console.log("Additional details: " + frame.body);
};
export { WebClient };
