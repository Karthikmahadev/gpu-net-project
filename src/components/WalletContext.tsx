// src/context/WalletContext.tsx
import {
  useAccount,
  useBalance,
} from 'wagmi';
import { createContext, useContext, type ReactNode } from 'react';

type WalletContextType = {
  address?: string;
  isConnected: boolean;
  balance?: string;
};

const WalletContext = createContext<WalletContextType>({
  isConnected: false,
});

export const WalletProviderContext = ({ children }: { children: ReactNode }) => {
  const { address, isConnected } = useAccount();
  const { data } = useBalance({ address });

  return (
    <WalletContext.Provider
      value={{
        address,
        isConnected,
        balance: data?.formatted,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
