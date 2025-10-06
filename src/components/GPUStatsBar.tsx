import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";

const GPUStatusBar: React.FC = () => {
  return (
    <div
      style={{
        width: "100%", // stays inside 40% parent width
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px 0",
      }}
    >
      <div
        style={{
          width: "100%", // makes inner container fit parent
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "12px",
          padding: "12px 16px",
          background: "linear-gradient(160deg,rgba(0, 0, 0, 1) 80%, rgba(115, 48, 6, 1) 100%)",
          boxSizing: "border-box",
        }}
      >
        {/* Active Users */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div style={{ color: "#f97316" }}>
            <FaUserAlt size={32} />
          </div>
          <div>
            <p
              style={{
                color: "#d1d5db",
                fontSize: "12px",
                marginBottom: "2px",
              }}
            >
              Active Users
            </p>
            <p
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "700",
                margin: 0,
              }}
            >
              705K
            </p>
          </div>
        </div>

        {/* Total Submits */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div style={{ color: "#f97316" }}>
            <IoIosGitBranch size={32} />
          </div>
          <div>
            <p
              style={{
                color: "#d1d5db",
                fontSize: "12px",
                marginBottom: "2px",
              }}
            >
              Total Submits
            </p>
            <p
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "700",
                margin: 0,
              }}
            >
              11K
            </p>
          </div>
        </div>

        {/* $GPU Distributed */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div style={{ color: "#f97316" }}>
            <FaDollarSign size={32} />
          </div>
          <div>
            <p
              style={{
                color: "#d1d5db",
                fontSize: "12px",
                marginBottom: "2px",
              }}
            >
              $GPU Distributed
            </p>
            <p
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "700",
                margin: 0,
              }}
            >
              1.1m
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPUStatusBar;
