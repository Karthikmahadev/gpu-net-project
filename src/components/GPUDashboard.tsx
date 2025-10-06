import React, { useState, useEffect, Suspense } from "react";
import "./components.css";
import { PiUserCircleDuotone } from "react-icons/pi";
import { IoMdMenu } from "react-icons/io";
const GPUSidebar = React.lazy(() => import("./GPUSidebar"));
const GPUContent = React.lazy(() => import("./GPUContent"));
const GPUSocialContent = React.lazy(() => import("./GPUSocialContent"));

const GPUDashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1068);

  useEffect(() => {
    const handleResize = () => {
      const desktopView = window.innerWidth >= 1068;
      setIsDesktop(desktopView);
      setIsSocialOpen(desktopView); 
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isDesktop && (
        <div
          className="mobile-topbar flex items-center justify-between px-4 py-3 bg-black text-white"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
            backgroundColor: "black",
          }}
        >
          {!isSocialOpen && (
            <button
              className="mobile-menu-btn"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <IoMdMenu color="white" size={20} />
            </button>
          )}
          <div className="gpusidebar-logo" style={{ margin: "0 auto" }}>
            <img src="gpulogo.png" alt="GPU Logo" />
          </div>

          <button
            className="mobile-social-btn"
            onClick={() => setIsSocialOpen(!isSocialOpen)}
          >
            <PiUserCircleDuotone color="white" size={20} />
          </button>
        </div>
      )}
      <div className="gpudashboard w-full flex">
        <div className={`sidebar-container ${isSidebarOpen ? "open" : ""}`}>
          <Suspense fallback={<div>Loading Sidebar...</div>}>
            <GPUSidebar onClose={() => setIsSidebarOpen(false)} />
          </Suspense>
        </div>

        <div className="content-container">
          <Suspense fallback={<div>Loading Content...</div>}>
            <GPUContent />
          </Suspense>
        </div>

        <div
          className={`social-container ${
            isDesktop || isSocialOpen ? "open" : ""
          }`}
        >
          <Suspense fallback={<div>Loading Social...</div>}>
            <GPUSocialContent
              onClose={() => {
                if (!isDesktop) setIsSocialOpen(false);
              }}
            />
          </Suspense>
        </div>
      </div>
      {isSidebarOpen && !isDesktop && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {isSocialOpen && !isDesktop && (
        <div
          className="social-overlay"
          onClick={() => setIsSocialOpen(false)}
        ></div>
      )}
    </>
  );
};

export default GPUDashboard;
