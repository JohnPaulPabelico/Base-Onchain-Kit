'use client';

import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownLink,
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance,
} from '@coinbase/onchainkit/identity';
import { NFTMintCard } from "@coinbase/onchainkit/nft";
import { NFTMedia } from "@coinbase/onchainkit/nft/view";
import {
  NFTCreator,
  NFTCollectionTitle,
  NFTQuantitySelector,
  NFTAssetCost,
  NFTMintButton,
} from "@coinbase/onchainkit/nft/mint";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans dark:bg-background dark:text-white bg-white text-black">
      <header className="pt-4 pr-4">
        <div className="flex justify-end">
          <div className="wallet-container">
            <Wallet>
              <ConnectWallet>
                <Avatar className="h-6 w-6" />
                <Name />
              </ConnectWallet>
              <WalletDropdown>
                <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                  <Avatar />
                  <Name />
                  <Address />
                  <EthBalance />
                </Identity>
                <WalletDropdownLink
                  icon="wallet"
                  href="https://keys.coinbase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wallet
                </WalletDropdownLink>
                <WalletDropdownDisconnect />
              </WalletDropdown>
            </Wallet>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
      <div>
          <NFTMintCard contractAddress="0x38a2272eB0Dc8EaC9f341F42e779C4d81F416D1F">
            <NFTCreator />
            <NFTMedia />
            <NFTCollectionTitle />
            <NFTAssetCost />
            <NFTQuantitySelector />
            <NFTMintButton />
          </NFTMintCard>
        </div>
      </main>
    </div>
  );
}
