import requestService from "../services/requestService";
import config from "../config";

const resourceUrl = `${config.getApiUrl()}/department`;

const getAllDepartments = () => requestService.get(resourceUrl + "/role-department");

export { getAllDepartments };
