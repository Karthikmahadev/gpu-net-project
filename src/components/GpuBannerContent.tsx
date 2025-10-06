import React from "react";
import GPUStatusBar from "./GPUStatsBar";
import ChartCard from "./ChartCard";

const GpuBannerContent: React.FC = () => {
  return (
  <div className="flex !m-5 gap-4 max-[1100px]:flex-col min-[1101px]:flex-row">
      <div className="w-[20%] max-[1100px]:w-full !m-5">
        <div className="relative w-[30%] max-[1100px]:w-full">
          <h1 className="text-white leading-[1.4] font-bold text-2xl min-[1600px]:text-[2rem]">
            <span className="text-[#ff6600] opacity-30 blur-[1.5px] scale-105 [text-shadow:_0_0_12px_rgba(255,102,0,0.5)]">All </span>
            <span className="text-[#ff6600] [text-shadow:_0_0_8px_rgba(255,102,0,0.8)] whitespace-nowrap">
              In One
            </span>
            <div className="flex items-center gap-2">
              <span className="text-2xl text-white min-[1600px]:text-[2rem]">→</span>
              <span className="text-3xl font-black text-white min-[1600px]:text-[3rem]">GPU</span>
            </div>
            <span className="text-[#ff6600] [text-shadow:_0_0_8px_rgba(255,102,0,0.8)]">Ecosystem</span>
            <span className="block text-[#ff6600] opacity-30 blur-[1.5px] scale-105 [text-shadow:_0_0_12px_rgba(255,102,0,0.5)]">
              Super
            </span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-[50%] max-[1100px]:w-full">
        <GPUStatusBar />
        <div className="flex items-center justify-between w-full gap-[5px]">
          <div className="flex justify-start items-center gap-[1px]">
            {[1, 2, 3].map((_, i) => (
              <img
                key={i}
                src="https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg"
                className="h-[30px] w-[30px] rounded-full"
              />
            ))}
          </div>
          <div className="flex-1 text-center">
            <p className="text-white m-0 font-medium">Join 11K+ Subnets earning</p>
          </div>

          <div>
            <span className="text-[#ff8228] font-bold">400K $GPUs</span>
          </div>
        </div>
        <div className="pt-[15px]">
          <hr className="border-gray-500" />
        </div>
        <div className="flex flex-row justify-between gap-[114px] max-[1100px]:gap-5">
          <h3 className="text-lg font-semibold text-white">Try Astra</h3>
          <p className="text-sm leading-relaxed text-gray-200">
            Generate image & video and chat with industry’s best trained LLM with exclusive partnership with ByteDance
          </p>
        </div>
      </div>

      <div className="w-[30%] max-[1100px]:w-full">
        <ChartCard />
      </div>
    </div>
  );
};

export default GpuBannerContent;
