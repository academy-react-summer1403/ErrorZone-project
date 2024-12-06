import http from "../../services/interceptor";

export const checkExpired = async () => {
	const users = JSON.parse(localStorage.getItem("users"));
	const newusers = [];
	if (users) {
		for (var item of users) {
			try {
				const apiResult = await http.get(
					"/SharePanel/GetProfileInfo",
					{
						headers: {
							Authorization: "Bearer " + item.token,
						},
					}
				);
				Boolean(apiResult) && newusers.push(item);
			} catch (error) {
				console.log(
					error.code === "ERR_NETWORK",
					error,
					"error From Expired Account "
				);
			}
			
		}
		localStorage.setItem("users", JSON.stringify(newusers));
	}
	return false;
};