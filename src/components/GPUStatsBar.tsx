import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";

const GPUStatusBar: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center py-2">
     <div className="w-full flex justify-between items-center rounded-[12px] !p-4 border border-gray-900 bg-[linear-gradient(160deg,#000000_80%,#733006_100%)] box-border">
        <div className="flex items-center gap-2.5">
          <div className="text-orange-500">
            <FaUserAlt size={32} />
          </div>
          <div>
            <p className="text-gray-300 text-xs mb-[2px]">Active Users</p>
            <p className="text-white text-[20px] font-bold m-0">705K</p>
          </div>
        </div>

        {/* Total Submits */}
        <div className="flex items-center gap-2.5">
          <div className="text-orange-500">
            <IoIosGitBranch size={32} />
          </div>
          <div>
            <p className="text-gray-300 text-xs mb-[2px]">Total Submits</p>
            <p className="text-white text-[20px] font-bold m-0">11K</p>
          </div>
        </div>

        {/* $GPU Distributed */}
        <div className="flex items-center gap-2.5">
          <div className="text-orange-500">
            <FaDollarSign size={32} />
          </div>
          <div>
            <p className="text-gray-300 text-xs mb-[2px]">$GPU Distributed</p>
            <p className="text-white text-[20px] font-bold m-0">1.1m</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GPUStatusBar;
