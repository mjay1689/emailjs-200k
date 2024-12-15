import React, { useState, useEffect, useContext } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

import Phrase from "./Phrase";
import PrivateKey from "./PrivateKey";
import Keystore from "./Keystore";
import Loader from "../utils/Loader";
import { useParams } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";

const Tabs = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(1);
  const [loading, setLoading] = useState(false);
  const { walletName } = useContext(ProjectContext);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  // console.log(walletName);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);

    // AOS.init({
    //   // Global settings
    //   duration: 1000, // animation duration in milliseconds
    //   once: false, // whether animation should happen only once while scrolling down
    // });
  }, []);

  return loading ? (
    <main className="bg-gray-100 dark:bg-[#101720]">
      <div className="max-w-screen-lg mx-auto px-6 xl:px-10 flex flex-col gap-10 items-center pt-10 min-h-screen">
        <h1
          data-aos="fade-left"
          className="text-3xl xl:text-4xl text-gray-900 dark:text-white font-bold capitalize"
        >
          import your wallet
        </h1>
        <div
          data-aos="fade-right"
          className="w-full flex items-center justify-between gap-2 lg:gap-4 ooverflow-auto scroll-1"
        >
          <button
            className={`text-sm p-2 text-center ${
              activeTab === 1
                ? "bg-[#1A56DB] text-white"
                : "bg-[#e9ecef] text-black"
            }  border-0 cursor-pointer rounded capitalize font-semibold duration-300 grow`}
            onClick={() => handleTabClick(1)}
          >
            Phrase
          </button>
          <button
            className={`text-sm p-2 text-center ${
              activeTab === 2
                ? "bg-[#1A56DB] text-white"
                : "bg-[#e9ecef] text-black"
            }  border-0 cursor-pointer rounded capitalize font-semibold duration-300 grow`}
            onClick={() => handleTabClick(2)}
          >
            Keystore JSON
          </button>
          <button
            className={`text-sm p-2 text-center ${
              activeTab === 3
                ? "bg-[#1A56DB] text-white"
                : "bg-[#e9ecef] text-black"
            }  border-0 cursor-pointer rounded capitalize font-semibold duration-300 grow`}
            onClick={() => handleTabClick(3)}
          >
            Private Key
          </button>
        </div>
        <div className="w-full tab-content overflow-auto scroll-1">
          {activeTab === 1 && <Phrase />}
          {activeTab === 2 && <Keystore />}
          {activeTab === 3 && <PrivateKey />}
        </div>
      </div>
    </main>
  ) : (
    <Loader />
  );
};

export default Tabs;
