import requestService from "./requestService";

import config from "../config";

const resourceUrl = `${config.getApiUrl()}`;

export default {
	async upload(file, type) {
		let formData = new FormData();

		formData.append("file", file);
		formData.append("type", type);

		const response = await requestService.create(
			resourceUrl + "/files",
			formData
		);

		return response.data;
	},

	async getFile(name) {
		const response = await requestService.get("/files", name);
		return response?.data?.data;
	},
};
