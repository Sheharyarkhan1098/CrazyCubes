import React from "react";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { injected } from "./connectors";
import Web3 from 'web3'

const Footer = () => {
  // const { active, account, library, connector, activate, deactivate } =
  //   useWeb3React();

  // async function connect() {
  //   try {
  //     await activate(injected);
  //   } catch (ex) {
  //     console.log(ex);
  //   }
  // }

  // async function disconnect() {
  //   try {
  //     deactivate();
  //   } catch (ex) {
  //     console.log(ex);
  //   }
  // }

  // function getLibrary(provider) {
  //   return new Web3(provider)
  // }
  // return (
  //   <Web3ReactProvider getLibrary={getLibrary}>
  //   <div className="flex flex-col items-center justify-center">
  //     <button
  //       onClick={connect}
  //       className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800"
  //     >
  //       Connect to MetaMask
  //     </button>
  //     {active ? (
  //       <span>
  //         Connected with <b>{account}</b>
  //       </span>
  //     ) : (
  //       <span>Not connected</span>
  //     )}
  //     <button
  //       onClick={disconnect}
  //       className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800"
  //     >
  //       Disconnect
  //     </button>
  //   </div>
  //   </Web3ReactProvider>
  // );
  // Modern DApp Browsers
  if (window.ethereum) {
    let web3 = new Web3(window.ethereum);
    try {
      window.ethereum.enable().then(function () {
        // User has allowed account access to DApp...
      });
    } catch (e) {
      // User has denied account access to DApp...
    }
  }
  // Legacy DApp Browsers
  else if (window.web3) {
    let web3 = new Web3(window.web3.currentProvider);
  }
  // Non-DApp Browsers
  else {
    alert('You have to install MetaMask !');
  }
  return (<h2>hello</h2>)
};

export default Footer;
