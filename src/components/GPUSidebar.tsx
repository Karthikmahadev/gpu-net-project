// GPUSidebar.tsx
import React from 'react'
import "./components.css"
import { FaCopyright, FaTwitter } from "react-icons/fa6";
import GPUMenu from './GPUMenu';
import { FaTelegramPlane } from "react-icons/fa";
import { GiSurroundedEye } from "react-icons/gi";
import { FaRegCopyright } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { useWallet } from './WalletContext';
import { ConnectButton } from '@rainbow-me/rainbowkit';

interface GPUSidebarProps {
    onClose?: () => void;
}

const GPUSidebar: React.FC<GPUSidebarProps> = ({ onClose }) => {
    const { address, isConnected, balance } = useWallet()
    return (
        <>
            <div className='gpusidebar h-full'>
                 <button className="mobile-close-btn" onClick={onClose}>×</button>

                <div className='gpusidebar-logo'>
                    <img src='gpulogo.png' alt='GPU Logo' />
                </div>

                 <div className="gpu-wallet-section flex flex-col items-center mt-4">
        <ConnectButton />
        {isConnected && (
          <div className="text-white mt-2 text-center">
            <p>Address: {address?.slice(0, 6)}...{address?.slice(-4)}</p>
            <p>Balance: {balance} ETH</p>
          </div>
        )}
      </div>

                <div className='gpu-wallet-balance flex items-center'>
                    <div className='gpu-wallet-left text-white'>
                        <p className='gpu-wallet-left-heading font-line'>Wallet Balance</p>
                        <h2 className='gpu-wallet-left-heading '>
                            <span><FaCopyright style={{ color: "gray" }} size={20} /> 3900</span>.98
                        </h2>
                    </div>
                    <div className='gpu-wallet-right'>
                        <button className='gpu-wallet-right-button'>+</button>
                    </div>
                </div>

                <div>
                    <GPUMenu />
                </div>

                <div className='total-gpu-sidebar-bottom'>
                    <div className='gpu-sidebar-bottom'>
                        <div><FaTelegramPlane size={20} style={{color:"white"}}/></div>
                        <div><FaTwitter size={20} style={{color:"white"}}/></div>
                        <div><FaInstagram size={20} style={{color:"white"}}/></div>
                        <div><FaDiscord size={20} style={{color:"white"}}/></div>
                    </div>
                    <div>
                        <button className='allsystems'>
                            <GiSurroundedEye size={20} style={{color:"white"}}/>
                            All Systems Operational
                        </button>
                        <p className='allrights'>
                            <FaRegCopyright size={15} style={{color:"white"}} />
                            <span style={{color:"white",fontSize:"14px"}}>&nbsp;2025</span>
                            <span style={{color:"gray",fontSize:"11px"}}>All Rights Reserved</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GPUSidebar;