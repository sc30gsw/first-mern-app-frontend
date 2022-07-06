import { Chat, Notifications, Search } from "@mui/icons-material";
import React from "react";
import "./Topbar.css";

export const Topbar = () => {
	return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<span className="logo">First MERN</span>
			</div>
			<div className="topbarCenter">
				<div className="searchbar">
					<Search className="searchIcon" />
					<input type="text" className="searchInput" placeholder="投稿を検索" />
				</div>
			</div>
			<div className="topbarRight">
				<div className="topbarItemIcons">
					<div className="topbarIconItem">
						<Chat />
						<span className="topbarIconBadge">1</span>
					</div>
					<div className="topbarIconItem">
						<Notifications />
						<span className="topbarIconBadge">2</span>
					</div>
					<img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
				</div>
			</div>
		</div>
	);
};
