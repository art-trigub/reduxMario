import requestService from "../services/requestService";
import config from "../config";

const resourceUrl = `http://localhost:8082/auth`;

const authorize = params => requestService.create(resourceUrl + '/login', params);
const getAuthUser = () => requestService.get(resourceUrl + '/me');
const registerUser = params => requestService.create(resourceUrl + '/register', params);
const resetPassword = params => requestService.create(resourceUrl + '/reset-password', params);
const getSocialRedirectUrl = params => requestService.get(resourceUrl + `/social/${params.provider}/redirect`);
const socialLogin = params => {
	return requestService.get(resourceUrl + `/social/${params.provider}/callback?`, {}, { code: params.code });
};
const confirmEmail = params => requestService.update(resourceUrl + '/confirm-email', params);


export {
	authorize,
	getAuthUser,
	registerUser,
	resetPassword,
	getSocialRedirectUrl,
	socialLogin,
	confirmEmail
};