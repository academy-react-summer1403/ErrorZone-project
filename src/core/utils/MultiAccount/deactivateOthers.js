export const deactivateOtherUsers = (id) => {
	console.log(id);
	const users = JSON.parse(localStorage.getItem("users"));
	if (users) {
		for (let item of users) {
			if (item.id != id) {
				item.isActive = false;
			} else if (item.id == id) {
				item.isActive = true;
			}
		}
	}
	console.log(users);
	localStorage.setItem("users", JSON.stringify(users));
};