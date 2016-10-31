// Enter code below
function calculateAge(yearOfBirth){
	var date = new Date().getFullYear();
	var age = ( date - yearOfBirth );
	return age;
}