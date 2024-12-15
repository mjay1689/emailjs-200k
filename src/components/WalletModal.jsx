import React, { useState, useEffect } from "react";
import { Modal, Button, Card, Alert, Avatar } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const WalletModal = (props) => {
//   const [openModal, setOpenModal] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsSearching(true);
    }, 3000);
  });

  return (
    <Modal show={props.openModal} onClose={props.close()}>
      <Modal.Header>Terms of Service</Modal.Header>
      <Modal.Body>
        <div className="flex flex-col gap-4">
          {isSearching ? (
            <Alert color="failure" icon={HiInformationCircle}>
              <div className="flex items-center justify-between">
                <span className="font-medium">Error connecting...</span>
                <button
                  type="button"
                  className="ms-10 rounded-lg border border-cyan-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-cyan-700 hover:bg-cyan-800 hover:text-white focus:ring-4 focus:ring-cyan-300 "
                >
                  Connect Manually
                </button>
              </div>
            </Alert>
          ) : (
            <Alert color="info">
              <div className="flex item-start gap-3 text-base">
                <span className="font-medium">Connecting...</span>
                <AiOutlineLoading3Quarters className="animate-spin mt-1" />
              </div>
            </Alert>
          )}

          <Card href="#" className="">
            <div className="flex items-center justify-between">
              <div className="">
                <h4 className="text-xl font-semibold">Trust wallet</h4>
                <small>Easy-to-use browser extension</small>
              </div>

              <Avatar img="assets/ime.jpeg" status="online" />
            </div>
          </Card>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button color="gray" onClick={props.close()}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WalletModal;
