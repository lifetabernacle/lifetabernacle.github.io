function newuser(form) {
	registercode = new Array("907362", "0045"); /* 1st code for admin, 2nd one for members code*/

	if(form.code.value == registercode[0]) {
		alert("Admin usernames and passwords are created manually. The member site username is 'members' and the password is 'lifetabaccess'") /* When you enter admin code */
	}
	else if(form.code.value == registercode[1]) {
		alert("Username: 'members', password: 'lifetabaccess'") /* Member username and password*/
	}
	else {
		alert("Incorrect code. Retry or ask for a new code.")/* No such user */
	}
}