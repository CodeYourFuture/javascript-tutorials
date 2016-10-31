// Enter code below
var me={ 
	currentAge:30,
	maxAge:99,
	estimatedAmount:10
}
function lifetimeSupply(){
	var lifeSpan=(me.maxAge-me.currentAge); // number of years till death 
	var numDays=(lifeSpan*365); //calculate the number of days till i die 
	var totalEat=(numDays*me.estimatedAmount);
	return "You will need " + totalEat + " to last you until the ripe old age of " + me.maxAge;
}