import Router from "./Router";
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import uuid from "react-uuid";
const pubnub = new PubNub({
  publishKey: "pub-c-7d9c1e28-dc58-48e9-8266-43bd0a456724",
  subscribeKey: "sub-c-95b5a853-e675-479f-af5f-f27c6c0a1203",
  uuid: uuid(),
});
function App() {
  return (
    <PubNubProvider client={pubnub}>
      <Router />
    </PubNubProvider>
  );
}

export default App;
