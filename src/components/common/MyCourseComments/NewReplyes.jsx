import { MakeDatePersian } from "../../../core/utils/MakeDatePersian.js/MakeDatePersian";
import HandleAddReplyes from "./MyAddReply";

const NewReplyes = ({ reply }) => {
	return (
		<div className="flex flex-col gap-2 border-r-4 border-r-blue  rounded-sm pr-2">
			<div className="flex flex-col gap-5">
				<div className="flex items-center justify-between gap-3">
					<p className="text-metricGray3 text-xs  font-medium">
						{reply.author}
					</p>
					<span className="w-[7px] h-[7px] bg-metricGray3 rounded-full"></span>
					<p className="text-metricGray3 text-xs ">
						{MakeDatePersian(reply.insertDate)}
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className=" leading-none font-semibold">{reply.title}</h3>
					<p className="text-xs font-normal">{reply.describe}</p>
				</div>
			</div>
			<HandleAddReplyes />
		</div>
		
	);
};

export default NewReplyes;
