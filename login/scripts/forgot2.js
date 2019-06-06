function account(form) {
	aaaaa = new Array("Giovanni", "Cherie", "name3", "name4", "name5", "name6", "name7", "name8", "name9");/* People's names who can reset members password */

	if(form.name.value == aaaaa[0] {
		alert("You'r password is 'admin'") /* Change this to your password */
	}
	else if(form.name.value == aaaaa[1] || form.name.value == aaaaa[2] || form.name.value == aaaaa[3] || form.name.value == aaaaa[4] || form.name.value == aaaaa[5] || form.name.value == aaaaa[6] || form.name.value == aaaaa[7] || form.name.value == aaaaa[8]) {
		alert("You'r password is 'lifetabaccess'") /* Change this to your password */
	}
	else {
		alert("Name doesn't exist. Submit first name with first letter capitalized.")
	}
}