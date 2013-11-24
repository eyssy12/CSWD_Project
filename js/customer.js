
var customers = new Array();

function Customer(firstName, secondName, address, email, telephone, country, state)
{
	this.firstName = firstName;
	this.secondName = secondName;
	this.address = address;
	this.email = email;
	this.telephone = telephone;
	this.country = country;
	this.state = state;
}

Customer.prototype.getName = function()
{
	return this.firstName + " " + this.secondName;
}
