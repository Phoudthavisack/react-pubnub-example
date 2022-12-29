import React, { useEffect, useState } from "react";
// import PubNub from "pubnub";
import { usePubNub } from "pubnub-react";

export default function HomePage() {
  const pubnub = usePubNub();
  const [channels] = useState(["lailaolab-channel"]);
  const [message, setMessage] = useState([]);
  const [value, setValue] = useState("");
  const sendMessage = async () => {
    if (value) {
      pubnub
        .publish({ channel: channels[0], message: value })
        .then(() => setValue(""));
    }
  };
  const handleMessage = (e) => {
    setMessage((prev) => [e.message, ...prev]);
  };
  useEffect(() => {
    pubnub.addListener({ message: handleMessage });
    pubnub.subscribe({ channels });
  }, [pubnub]);
  return (
    <div>
      <input
        placeholder="message"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={sendMessage}>send</button>
      <div>
        {message.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </div>
    </div>
  );
}
