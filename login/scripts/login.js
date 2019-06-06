function check(form) {
    username = new Array("gio1135", "members");
    password = new Array("admin1", "lifetabaccess");

	if(form.userid.value == username[0] && form.pswrd.value == password[0]) {
		location.replace('/old/past-events.html') /* The Administrator homepage */
	}
	else if(form.userid.value == username[1] && form.pswrd.value == password[1]) {
		location.replace('/old/past-events.html') /* The members homepage */
	}
	else if(form.userid.value == username[0]||form.userid.value == username[1]) {
		alert("Incorrect password")
	}
	else {
		alert("Incorrect username or password")
	}
}
