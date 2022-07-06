import React from "react";
import { Post } from "../post/Post";
import { Share } from "../share/Share";
import "./Timeline.css";

export const Timeline = () => {
	return (
		<div className="timelline">
			<div className="timelineWrapper">
				<Share />
				<Post />
			</div>
		</div>
	);
};
