import instance from "../../interceptor";

export const GetSecurityInfoApi = async () => {
	try {
		const result = await instance.get("/SharePanel/GetSecurityInfo");
		return result;
	} catch (error) {
		return error;
	}
};
export const EditSecurityApi = async (obj) => {
	try {
		const result = await instance.put("/SharePanel/EditSecurity", obj);
		return result;
	} catch (error) {
		return error;
	}
};

export const ChangeRecoveryApi = async (configue) => {
	try {
		const result = await instance.get("/SharePanel/ChangeRecovery/" + configue);
		return result;
	} catch (error) {
		return error;
	}
};