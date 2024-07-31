import React, { useState } from 'react';
import algosdk from 'algosdk';

const algodToken = 'YOUR_ALGOD_TOKEN';
const algodServer = 'https://testnet-algorand.api.purestake.io/ps2';
const algodPort = ''; // leave blank

const App = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState(null);

  const checkBalance = async () => {
    const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

    try {
      const accountInfo = await algodClient.accountInformation(walletAddress).do();
      setBalance(accountInfo.amount / 1e6); // Convert from microAlgos to Algos
    } catch (error) {
      console.error('Error fetching balance:', error);
      setBalance('Error fetching balance');
    }
  };

  return (
    <div className="app">
      <h1>Check Your Algorand Wallet Balance</h1>
      <input
        type="text"
        placeholder="Enter your wallet address"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
      />
      <button onClick={checkBalance}>Check Balance</button>
      {balance !== null && (
        <div>
          <h2>Balance:</h2>
          <p>{balance} ALGO</p>
        </div>
      )}
    </div>
  );
};

export default App;
