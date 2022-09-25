import requestService from "../services/requestService";
import config from "../config";

const resourceUrl = `${config.getApiUrl()}/users`;

const getReqUsers = (request) => requestService.get(resourceUrl + "/", {}, request);
const getUser = (userId) => requestService.get(resourceUrl + `/get/${userId}`);
const updtUser = (item) => requestService.update(resourceUrl + "/update", item);
const crtUser = (item) => requestService.create(resourceUrl + "/create", item);

export { getUser, updtUser, crtUser, getReqUsers };
