import React from 'react';
import GpuBannerContent from './GpuBannerContent';
import GPUBlog from './GPUBlog';

const GPUContent: React.FC = () => {
  const marqueeItems = [
    "Earn 50000 drops with Astra Quest Now",
    "nVidia RTX 6087 is now available in dApp",
    "Block Rate has been doubled now",
  ];

  const repeatedItems = Array(10).fill(marqueeItems).flat();

  return (
    <>
      <div className="bg-black !m-5 p-[10px]! border border-black rounded-[9px] overflow-hidden relative">
        <div className="w-full overflow-hidden relative">
          <div className="inline-block whitespace-nowrap animate-marquee">
            {repeatedItems.map((item, idx) => (
              <span key={idx} className="inline-block text-white text-[14px] mr-[6px]">
                {item} <span className="text-gray-400 ml-[10px]">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="!m-5">
        <GpuBannerContent />
      </div>

      <div className="bg-black !m-5 p-[10px]! border border-black rounded-[9px] flex flex-wrap items-center justify-around text-white box-border">
        {[
          { state: "Our Datacenter in Glance", gpus: "4,254", badge: "99.9% Uptime" },
          { state: "United States", gpus: "508GPUs" },
          { state: "United Kingdom", gpus: "354GPUs" },
          { state: "United Arab Emirates", gpus: "154GPUs" },
          { state: "Australia", gpus: "104GPUs" },
          { state: "Spain", gpus: "21GPUs" },
        ].map((item, idx) => (
          <div key={idx} className="relative flex flex-col gap-[7px]! px-[10px]!">
            {idx === 0 && (
              <>
                <h4 className="text-[22px] font-medium">{item.gpus}</h4>
                <button className="bg-gray-700 text-white rounded px-2 py-1 text-xs">{item.badge}</button>
              </>
            )}
            {idx !== 0 && (
              <>
                <p className="text-[11px] text-[#c2c2c2]">{item.state}</p>
                <h4 className="text-[22px] font-medium">{item.gpus}</h4>
              </>
            )}
            {idx !== 0 && (
              <span className="absolute left-[-10px] text-gray-400 text-[20px]">{idx !== 1 ? '|' : ''}</span>
            )}
          </div>
        ))}
      </div>

      <div className="!m-5">
        <GPUBlog />
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-block;
            animation: marquee 50s linear infinite;
          }
        `}
      </style>
    </>
  );
};

export default GPUContent;
