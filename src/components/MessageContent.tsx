import React from 'react';
import { MdAttachFile } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineHeart, AiOutlineMessage, AiOutlineEye } from "react-icons/ai";

const MessageContent = () => {
    const posts = [
        {
            id: 1,
            author: "Stephen Smith",
            time: "20 min",
            role: "Software Developer | Boston University",
            content: "Just conquered algorithms & data structures 🎉 Time for a breather. Suggestions for binge-worthy shows? 🍿",
            tags: "#StudyBreak #NetflixTime",
            likes: 12,
            comments: 3,
            views: "457K",
            reactions: ["👍", "❤️", "😮", "😂", "🔥"],
            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"
        },
        {
            id: 2,
            contentdata: "Boost received 178 votes from Flaco Moon",
            likes: 12,
            comments: 3,
            views: "457K",
            reactions: ["👍", "❤️", "😮", "😂", "🔥"],
        },
        {
            id: 3,
            author: "Reza Ghasale",
            time: "2h",
            role: "Prompt Engineer | VentusTech",
            image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600",
            likes: 12,
            comments: 3,
            views: "457K",
            reactions: ["👍", "❤️", "😮", "😂", "🔥"],
            avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100"
        },
        {
            id: 4,
            contentdata: "2108.25$GPU bought at $0.17",
            likes: 12,
            comments: 3,
            views: "457K",
            reactions: ["👍", "❤️", "😮", "😂", "🔥"],
        }
    ];

    return (
        <div className="message-content-wrapper">
            {/* Post Input */}
            <div className="post-input-container">
                <div className="post-input-top">
                    <img 
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"
                        alt="User"
                        className="post-avatar"
                    />
                    <input
                        type="text"
                        placeholder="What's happening?"
                        className="post-input"
                    />
                </div>
                <div className="post-input-bottom">
                    <div className="input-actions">
                        <button><MdAttachFile /></button>
                        <button>GIF</button>
                    </div>
                    <button className="post-btn">Post Now</button>
                </div>
            </div>

            {/* Posts */}
            {posts.map((post) => (
                <div key={post.id} className="post-card">
                    {post.avatar && (
                        <div className="post-header">
                            <div className="post-user-info">
                                <img src={post.avatar} alt={post.author} className="post-avatar" />
                                <div>
                                    <div className="post-author-line">
                                        <span className="post-author">{post.author}</span>
                                        <span className="post-time">{post.time}</span>
                                    </div>
                                    <div className="post-role">{post.role}</div>
                                </div>
                            </div>
                            <button className="dots-btn"><HiDotsHorizontal /></button>
                        </div>
                    )}

                    {post.content && <p className="post-text">{post.content}</p>}
                    {post.tags && <p className="post-tags">{post.tags}</p>}
                    {post.image && <img src={post.image} alt="Post" className="post-image" />}
                    {post.contentdata && <p className="post-extra">{post.contentdata}</p>}

                    <div className="post-footer">
                        <div className="post-actions">
                            <button><AiOutlineHeart /> {post.likes}</button>
                            <button><AiOutlineMessage /> {post.comments}</button>
                            <div className="reactions">
                                {post.reactions.map((emoji, i) => (
                                    <span key={i}>{emoji}</span>
                                ))}
                            </div>
                        </div>
                        <div className="views"><AiOutlineEye /> {post.views}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MessageContent;
