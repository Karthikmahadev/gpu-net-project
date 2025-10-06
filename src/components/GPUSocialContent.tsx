
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { SlFeed } from "react-icons/sl";
import MessageContent from "./MessageContent";
import "./components.css";

interface GPUSocialContentProps {
  onClose?: () => void;
}

const GPUSocialContent: React.FC<GPUSocialContentProps> = ({ onClose }) => {
  return (
    <div className="gpusocial-wrapper">
      
      <button className="mobile-social-close-btn" onClick={onClose}>
        ×
      </button>

      <div className="gpusocialcontent">
        <button className="profile-btn">
          <FaUserCircle color="white" /> Profile | 0x78..0478
        </button>
        <div className="feed-btn-wrapper">
          <button className="feed-btn">
            <SlFeed color="white" /> Feed
          </button>
        </div>
      </div>

      <div className="gpu-full-social-media-section">
        <MessageContent />
      </div>
    </div>
  );
};

export default GPUSocialContent;
