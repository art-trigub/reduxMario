import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import IconButton from "@material-ui/core/IconButton";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import Button from "@material-ui/core/Button";

function ImgCrop({ setPhotoImg, handleClose, item, setImgFile }) {
	const { t } = useTranslation();
	const [upImg, setUpImg] = useState();
	const imgRef = useRef(null);
	const previewCanvasRef = useRef(null);
	const [crop, setCrop] = useState({
		unit: "px",
		width: 100,
		height: 100,
		aspect: 1 / 1,
		circularCrop: true,
	});
	const [completedCrop, setCompletedCrop] = useState(null);

	const pixelRatio = 4;

	function getResizedCanvas(canvas, newWidth, newHeight) {
		const tmpCanvas = document.createElement("canvas");
		tmpCanvas.width = newWidth;
		tmpCanvas.height = newHeight;

		const ctx = tmpCanvas.getContext("2d");
		ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, newWidth, newHeight);

		return tmpCanvas;
	}

	function generateDownload(previewCanvas, crop, upImg) {
		if (!crop || !previewCanvas) {
			return;
		}

		const canvas = getResizedCanvas(previewCanvas, crop.width, crop.height);

		const url = previewCanvas.toDataURL();

		const blobBin = atob(url.split(",")[1]);
		const array = [];
		for (var i = 0; i < blobBin.length; i++) {
			array.push(blobBin.charCodeAt(i));
		}
		var fileBlob = new Blob([new Uint8Array(array)], { type: "image/png" });

		const file = new File([fileBlob], `${item.firstName}_${item.lastName}.png`, {
			type: "image/png",
		});

		setPhotoImg(window.URL.createObjectURL(file));

		setImgFile(file);

		handleClose();
	}

	const onSelectFile = (e) => {
		if (e.target.files && e.target.files.length > 0) {
			const reader = new FileReader();
			reader.addEventListener("load", () => setUpImg(reader.result));
			reader.readAsDataURL(e.target.files[0]);
		}
	};

	const onLoad = useCallback((img) => {
		imgRef.current = img;
	}, []);

	useEffect(() => {
		if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
			return;
		}

		const image = imgRef.current;
		const canvas = previewCanvasRef.current;
		const crop = completedCrop;

		const scaleX = image.naturalWidth / image.width;
		const scaleY = image.naturalHeight / image.height;
		const ctx = canvas.getContext("2d");

		console.log(image.naturalWidth);
		console.log(image.width);

		canvas.width = crop.width * pixelRatio;
		canvas.height = crop.height * pixelRatio;

		ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
		ctx.imageSmoothingEnabled = false;

		ctx.drawImage(
			image,
			crop.x * scaleX,
			crop.y * scaleY,
			crop.width * scaleX,
			crop.height * scaleY,
			0,
			0,
			crop.width,
			crop.height
		);
	}, [completedCrop]);

	return (
		<div className="App" style={{ maxWidth: "50vw" }}>
			<div>
				<label htmlFor="photo">
					<input
						style={{ display: "none" }}
						id="photo"
						name="photo"
						type="file"
						accept="image/*"
						onChange={onSelectFile}
					/>
					<IconButton color="secondary" variant="contained" component="span">
						<AttachFileIcon />
					</IconButton>
				</label>
			</div>
			<ReactCrop
				src={upImg}
				onImageLoaded={onLoad}
				crop={crop}
				onChange={(c) => setCrop(c)}
				onComplete={(c) => setCompletedCrop(c)}
			/>
			<div>
				<canvas
					ref={previewCanvasRef}
					style={{
						width: completedCrop?.width ?? 0,
						height: completedCrop?.height ?? 0,
					}}
				/>
			</div>

			<Button
				type="button"
				disabled={!completedCrop?.width || !completedCrop?.height}
				onClick={() => generateDownload(previewCanvasRef.current, completedCrop, upImg)}
			>
				{t("upload")}
			</Button>
		</div>
	);
}

export default ImgCrop;
