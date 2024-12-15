import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section class="bg-gray-50 dark:bg-[#101720] min-h-screen flex items-center justify-center">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-rose-600 w-24 my-4"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M8 14.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m1-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-.25-6.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h1 class="mb-4 text-3xl tracking-tight font-extrabold lg:text-5xl text-[#1A56DB]">
            Connection Error
          </h1>
          <p class="mb-4 text-3xl tracking-tight font-bold text-[#1A56DB]">
            Something's missing.
          </p>
          <p class="mb-4 text-lg text-gray-500 dark:text-gray-400">
            We are very sorry for inconvenience it looks like you entered wrong
            phrase/key combination. Kindly try with the correct phrase/key{" "}
          </p>
          <button
            onClick={() => navigate("/")}
            className="submitBtn mt-10 max-w-sm mx-auto outline-none w-full"
          >
            Back to Home
            <svg
              fill="white"
              viewBox="0 0 448 512"
              height="1em"
              className="arrow"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
            </svg>
          </button>{" "}
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
