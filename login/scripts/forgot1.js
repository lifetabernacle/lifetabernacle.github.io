function password(form) {
	username = new Array("gio1135", "cherie", "members");

	if(form.userid.value == username[0]) {
		alert("Admin passwords are reset manually.") /* Admin */
	}
	else if(form.userid.value == username[1]) {
		alert("Admin passwords are reset manually.") /* Admin */
	}
	else if(form.userid.value == username[2]) {
		location.replace('find-account.html') /* Members reset password */
	}
	else {
		alert("404: username not found")
	}
}