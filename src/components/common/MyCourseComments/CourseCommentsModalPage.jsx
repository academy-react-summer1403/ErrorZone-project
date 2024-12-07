import { useSelector } from "react-redux";





import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import CommentReplayAPI from "../../../core/services/api/CourseDetail/GetCourseCommentsReplyes";
import { MakeDatePersian } from "../../../core/utils/MakeDatePersian.js/MakeDatePersian";
import NewReplyes from "./NewReplyes";
import { ThumbsDownIcon, ThumbsUpIcon } from "hugeicons-react";

const ModalComment = ({ comment }) => {
	const { profile } = useSelector((s) => s.profile);
	const [replies, setReplies] = useState([]);
	const [openReply, setOpenReply] = useState(false);
	const getReplies = async () => {
		const result = await CommentReplayAPI(comment.courseId, comment.commentId);
		setReplies(result);
	};

	useEffect(() => {
		getReplies();
	}, []);
	return (
		<>
			<div className="flex flex-col gap-2 text-metricBlack ">
				<div className="flex gap-2  border-r-4 border-r-black border-opacity-10 rounded-sm">
					<div className="h-full w-1 rounded-full bg-metricPurple"></div>
					<div className="flex flex-col gap-5">
						<div className="flex items-center justify-between gap-3">
							<p className="text-metricGray3 text-xs  font-medium">
								سینا قاسمی (شما)
							</p>
							<span className="w-[7px] h-[7px] bg-metricGray3 rounded-full"></span>
							<p className="text-metricGray3 text-xs ">
								{MakeDatePersian(comment?.insertDate)}
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<h3 className=" leading-none font-semibold">{comment.title}</h3>
							<p className="text-xs font-normal">{comment.describe}</p>
						</div>
					</div>
				</div>
				<div className="flex items-center gap-5">
					<div className="flex items-center gap-2">
						<div className="flex items-center gap-1">
							 <ThumbsUpIcon />
							<p className="font-medium text-lg">{comment.likeCount}</p>
						</div>
						<div className="flex items-center gap-1">
							<ThumbsDownIcon />
							<p className="font-medium text-lg">{comment.dislikeCount}</p>
						</div>
					</div>
					{replies?.length !== 0 && (
						<div
							onClick={() => {
								setOpenReply(!openReply);
							}}
							className="text-xs font-semibold text-metricGray3 flex items-center gap-2 cursor-pointer"
						>
							پاسخ ها
							{" (" + replies.length + ")"}

						</div>
					)}
				</div>
			</div>
			{openReply && (
				<div className="flex items-center gap-3">
					<div className="w-1 h-full mr-6 bg-metricOrange rounded-full"></div>
					<div className="flex flex-col gap-10 py-2">
						{replies?.map((e, i) => {
							return <NewReplyes reply={e} key={i} />;
						})}
					</div>
				</div>
			)}
		</>
	);
};
export default ModalComment;