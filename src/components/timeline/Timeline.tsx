import React from "react";
import { Post } from "../post/Post";
import { Share } from "../share/Share";
import "./Timeline.css";
import { Posts } from "../../dummyData";
import { FC } from "react";

export const Timeline = () => {
	return (
		<div className="timelline">
			<div className="timelineWrapper">
				<Share />
				{Posts.map((post) => (
					<Post post={post} key={post.id} />
				))}
			</div>
		</div>
	);
};
