import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="grid place-content-center py-10 bg-gray-50 dark:bg-[#101720]">
      <p className="text-[12px] xl:text-sm text-gray-900 dark:text-gray-300">
        Wallet connect{" "}
        <span>
          {currentYear} {""}
        </span>{" "}
        All rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
