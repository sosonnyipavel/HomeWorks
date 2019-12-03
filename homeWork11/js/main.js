let age = document.getElementById("ages");
function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser.apply(age, ["Timur", "Batruha"]);