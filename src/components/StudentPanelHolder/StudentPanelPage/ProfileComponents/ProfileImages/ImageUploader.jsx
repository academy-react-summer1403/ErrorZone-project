import { useState } from "react";
import addImg from "../../../../../assets/images/Add/add.png";
import { toast } from "react-hot-toast";
import ImgCropper from "./ImageCropper";
import convertDataUrlToFile from "../../../../../core/utils/Images/dataURLToFileObj";

const ImageUploader = ({ handleImageUpload }) => {
	const [imgSrc, setImgSrc] = useState();
	const [Open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleCrop = async (data) => {
		const file = convertDataUrlToFile(data);
		await handleImageUpload(file);
		setLoading(false);
		setOpen(false);
	};

	const selectFile = (e) => {
		const img = e.target.files?.[0];
		if (!img) return;

		const reader = new FileReader();
		reader.addEventListener("load", () => {
			const imgElement = new Image();
			const imgURL = reader.result?.toString() || "";
			imgElement.src = imgURL;
			imgElement.addEventListener("load", (e) => {
				const { naturalWidth, naturalHeight } = e.currentTarget;
				if (naturalHeight < 250 && naturalWidth < 250) {
					toast.error("عکس شما نباید کمتر از 250 پیکسل باشد");
					return setImgSrc("");
				}
			});
			setImgSrc(imgURL);
			setOpen(true);
		});
		reader.readAsDataURL(img);
	};

	return (
		<>
			<div className="w-[189px] h-[189px] rounded-[16px]">
				<label
					htmlFor="Img"
					className=" w-[189px] h-[189px] rounded-[16px] mt-3 border-2 border-gray-500 flex items-center justify-center cursor-pointer   transition-all duration-300 text-gray-500 min-w-full aspect-square font-semibold flex-col gap-2 hover:bg-metricWhite/30"
				>
					<img src={addImg} className="w-8 h-8" />
					اضافه عکس
				</label>
				<input
					type="file"
					accept="image/*"
					id="Img"
					className="hidden"
					onChange={selectFile}
				/>
			</div>
			{imgSrc && Open && (
				<ImgCropper
					imgSrc={imgSrc}
					Open={Open}
					setOpen={setOpen}
					setDataUrl={handleCrop}
					setLoading={setLoading}
					loading={loading}
				/>
			)}
		</>
	);
};

export default ImageUploader;