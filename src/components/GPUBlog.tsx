import React, { useState } from 'react';
import { IoHardwareChip } from "react-icons/io5";

interface GPU {
  heading: string;
  hashcode: string;
  processor: string;
  storageType: string;
  gpuRam: string;
  vCPU: number;
  cpuRam: string;
  pricePerHour: number;
}

const GPUBlog = () => {
  const initialBlogs: GPU[] = [
    { heading: "H100 PCIe", hashcode: "#124852", processor: "AMD EPYTCTM 9554", storageType: "NVMe", gpuRam: "80 GB", vCPU: 48, cpuRam: "64 GB", pricePerHour: 0.45 },
    { heading: "A100 PCIe", hashcode: "#124853", processor: "Intel Xeon", storageType: "SATA", gpuRam: "40 GB", vCPU: 32, cpuRam: "32 GB", pricePerHour: 0.35 },
    { heading: "RTX 4090", hashcode: "#124854", processor: "AMD Ryzen", storageType: "NVMe", gpuRam: "24 GB", vCPU: 16, cpuRam: "32 GB", pricePerHour: 0.55 },
    { heading: "RTX 3080", hashcode: "#124855", processor: "Intel Xeon", storageType: "SATA", gpuRam: "12 GB", vCPU: 8, cpuRam: "16 GB", pricePerHour: 0.25 },
    { heading: "H100 PCIe", hashcode: "#124856", processor: "AMD EPYTCTM 9554", storageType: "NVMe", gpuRam: "80 GB", vCPU: 48, cpuRam: "64 GB", pricePerHour: 0.48 },
    { heading: "RTX 3060", hashcode: "#124857", processor: "AMD Ryzen", storageType: "SATA", gpuRam: "8 GB", vCPU: 8, cpuRam: "16 GB", pricePerHour: 0.15 },
    { heading: "A40 PCIe", hashcode: "#124858", processor: "Intel Xeon", storageType: "NVMe", gpuRam: "48 GB", vCPU: 24, cpuRam: "48 GB", pricePerHour: 0.40 },
    { heading: "RTX 4070", hashcode: "#124859", processor: "AMD Ryzen", storageType: "NVMe", gpuRam: "12 GB", vCPU: 16, cpuRam: "32 GB", pricePerHour: 0.30 },
  ];

  const [blogs, setBlogs] = useState<GPU[]>(initialBlogs);

  const handleSort = (type: "Storage" | "GPU") => {
    let sortedBlogs = [...blogs];
    if (type === "Storage") {
      sortedBlogs.sort((a, b) => (b.storageType > a.storageType ? 1 : -1));
    } else if (type === "GPU") {
      sortedBlogs.sort((a, b) => parseInt(b.gpuRam) - parseInt(a.gpuRam));
    }
    setBlogs(sortedBlogs);
  };

  return (
    <div className="p-[20px]! w-full box-border bg-transparent">
      <div className="flex justify-between items-center mb-[30px]! flex-wrap gap-[15px]!">
        <p className="text-white text-[24px] font-semibold m-0!">
          Latest added GPUs
        </p>

        <div className="flex items-center gap-[12px]! flex-wrap">
          {["Storage", "GPU"].map((btn, i) => (
            <button
              key={i}
              onClick={() => handleSort(btn as "Storage" | "GPU")}
              className="py-[10px]! px-[20px]! rounded-[8px] border border-[#333] text-[#c2c2c2] bg-[#0a0a0a] cursor-pointer text-[14px]"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      <div className="gpublog-entire-blogs gap-[20px]! w-full max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {blogs.map((item, index) => (
          <div
            key={index}
            className="border border-[#222] bg-[#0a0a0a] rounded-[12px] p-[20px]! flex flex-col text-white gap-[12px]! min-w-0 box-border"
          >

            <h3 className="text-[24px] font-semibold m-0! mb-[4px]!">
              {item.heading}
            </h3>
            <p className="text-[#666] text-[14px] m-0! mb-[8px]!">
              {item.hashcode}
            </p>

            <div className="flex items-center gap-[8px]! bg-[#1a1a1a] py-[10px]! px-[12px]! rounded-[8px] mb-[8px]!">
              <div className="bg-[#ff6b35] p-[6px]! rounded-[6px] flex items-center justify-center shrink-0">
                <IoHardwareChip size={18} color="white" />
              </div>
              <span className="text-[14px] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                {item.processor}
              </span>
            </div>

            <div className="flex flex-col gap-[8px]! mb-[8px]!">
              {[
                ["Storage Type", item.storageType],
                ["GPU RAM", item.gpuRam],
                ["vCPU", item.vCPU],
                ["CPU RAM", item.cpuRam],
              ].map(([label, value], i) => (
                <div key={i} className="flex justify-between gap-[10px]!">
                  <span className="text-[#888] text-[14px]">{label}</span>
                  <span className="text-[14px] font-medium">{value}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-[8px]! mt-[8px]! mb-[12px]!">
              {["x1", "x2", "x4", "x8"].map((multiplier, idx) => (
                <button
                  key={idx}
                  className={`flex-1 py-[10px]! px-[5px]! rounded-[8px] border border-[#333] text-[14px] font-semibold cursor-pointer min-w-0 ${
                    multiplier === "x2"
                      ? "bg-[#e8e8e8] text-black"
                      : "bg-[#1a1a1a] text-white"
                  }`}
                >
                  {multiplier}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-[8px]! mb-[12px]!">
              <div className="w-[24px] h-[24px] rounded-full border-2 border-white flex items-center justify-center text-[16px] font-bold shrink-0">
                $
              </div>
              <span className="text-[18px] font-medium">
                ${item.pricePerHour.toFixed(2)}/ Per Hour
              </span>
            </div>
            <button className="py-[14px]! rounded-[8px] border-none bg-white text-black cursor-pointer text-[16px] font-semibold w-full">
              Rent Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GPUBlog;
