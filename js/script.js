/*
	17.11.2013
	
	I'll need:
	
	1. Prototype for the products/components of the PC
	   Attributes: name, price, manufacturer, release date, description, warranty, type(e.g. 1 for mobo, 2 for hdd?

	   
	Each component will be stored in an array.
	Each customer will be stored in an array.

	Local storage - to remember customer choices in case of an accidental exit of the page...
	Wipe local storage when the customer has pressed the PAY button.
	
	Arrays for each component e.g. motherboard, hdd, graphics card, etc...
	
	18/11/2013

	To do:
	
	set that local storage contains the user picked pc parts
	
	change the name of the function that determines which option has been selected from the select box (currently: changeDescriptionText(selectBox))
	
	21/11/2013
	
	the application keeps track of the actual cost of the user chosen products
*/

// variables
var totalCost = 0;
var userProductList = new Array();
userProductList[0] = 0;
userProductList[1] = 0;
userProductList[2] = 0;
userProductList[3] = 0;
userProductList[4] = 0;
userProductList[5] = 0;

function printList()
{
	for (var i = 0; i < userProductList.length; i++)
	{
		console.log(userProductList[i]);
	}
}

function buildContent()
{
	createProducts();
	createTable();
	setDefaultValues();
	
}

function saveConfig()
{
	saveLocalStorage();
}

function setDefaultValues()
{
	recallValue();
}

function getNextProdType(currType)
{
	if (currType == ProductType.MOTHERBOARD)
		return ProductType.HDD;
	else if (currType == ProductType.HDD)
		return ProductType.CPU;
	else if (currType == ProductType.CPU)
		return ProductType.GPU;
	else if (currType == ProductType.GPU)
		return ProductType.PSU;
	else if (currType == ProductType.PSU)
		return ProductType.RAM;
	else
		return ProductType.MOTHERBOARD;
}

// finds the product by its ID
function getProductById(searchId)
{
	var product;
	var found = false;
	var i = 0;
	
	while(i < products.length && !found)
	{
		if (searchId == gapStr)
		{
			break;
		}
		else
		{
			if (products[i].id == searchId)
			{
				found = true;
				product = products[i];
			}
			i++;
		}
	}
	
	return product;
}

function getProductDescriptionById(searchId)
{
	var found = false;
	var productDescription;
	var i = 0;
	
	while (!found)
	{
		if (searchId == gapStr)
		{
			productDescription = "";
			break;
		}
		else
		{
			if (searchId == products[i].getID())
			{
				productDescription = products[i].getDescription();
				found = true;
			}
			i++;
		}
	}
	
	return productDescription;
}

/*
	Function changes the description text of a product that's selected from one of the drop-down boxes
	
	Each drop-down's item has an assigned 'value' which was assigned upon creation 
	This value acts as the ID op the product which will be used to find the actual product in the array

	variable 'selectBox' determines which type of product has the user chosen from (e.g. if from motherboard section then selectBox = 0)
*/
function updateConfigurationState(selectBoxProdType)
{
	var descriptionDiv = document.getElementById("description"); //get the description div
	var targetProdType = ProductType.MOTHERBOARD; //we start with the motherboard to check if it's equal to selectBox value
	
	var i = 0;
	var bLoop = false;
	
	while (bLoop == false)
	{
		if (selectBoxProdType == targetProdType)
		{
			var indexOption = document.getElementById(idNames[i]);
			var searchId = indexOption.value;
		
			// update the totals and show the user chosen product's description
			addToTotalsSummary(searchId, selectBoxProdType);
			descriptionDiv.innerHTML = getProductDescriptionById(searchId);
			
			bLoop = true;
		}
		else
		{
			targetProdType = getNextProdType(targetProdType);
			i++;
		}
	}
}

/*
	After a user has chosen a product, get the product objects price and update the totals
*/
function addToTotalsSummary(searchId, prodType)
{
	var items = document.getElementsByClassName("priceItem");
	var price;
	
	for (var i = 0; i < items.length; i++)
	{
		if (i === prodType)
		{
			if (searchId == gapStr)
			{
				console.log("gap selected - value set to 0");
				items[i].innerHTML = emptyStr;
				price = 0;
			}
			else
			{
				var product = getProductById(searchId);
				price = product.getPrice();
				
				items[i].innerHTML = price.toFixed(2) + "$";
			}
			
			updateTotalCost(price, i);
		}
	}
}

function updateTotalCost(price, indexLocation)
{
	// total cost has to be reset to 0 so that we can update the total cost properly
	totalCost = 0
	
	// we substitute the user chosen product with the new product and its price
	userProductList[indexLocation] = price;
	
	// get the new cost based on the stored values
	for (var i = 0; i < userProductList.length; i++)
	{
		totalCost += userProductList[i];
	}
	
	var totalCostDiv = document.getElementById("totalCost");
	totalCostDiv.innerHTML = totalCost.toFixed(2) + "$"; 
}



function processPurchase()
{
	//firstName, secondName, address, email, telephone, country
	
	var firstName = document.getElementById("firstName").value;
	var secondName = document.getElementById("secondName").value;
	var address = document.getElementById("address").value;
	var email = document.getElementById("email").value;
	var telephone = document.getElementById("telephone").value;
	var country = document.getElementById("country").value;
	var state = document.getElementById("state").value;
	
	if (!checkCustomerDetails())
	{
		console.log("Invalid data");
	}
	else
	{
		console.log("Valid!");
		
		var newCustomer = new Customer(firstName, secondName, address, email, telephone, country, state);
		customers.push(newCustomer);
		
		resetLocalStorage();
	}
}

function checkCustomerDetails()
{
	var obj = document.getElementsByClassName("customerInput");
	
	var input;
	var i = 0;
	var isValid = true;
	
	while (i < obj.length && isValid)
	{
		input = obj[i].value.length;
		
		if (input == 0)
		{
			isValid = false;
		}
		
		i++;
	}
	
	return isValid;
}

function displayCustomers()
{
	if (customers.length == 0)
	{
		console.log("No customers to display");
	}
	else
	{
		for (var i = 0; i < customers.length; i++)
		{
			console.log(customers[i]);
		}
	}
}

function createTable()
{
	if (products.length == 0)
	{
		var message = document.getElementById("wrapper");
		
		message.innerHTML = "Apologies - we are out of products to display!!!";
	}
	else
	{
		var table = document.getElementById("components");
		var currProdType = ProductType.MOTHERBOARD;
		
		for (var i = 0; i < idNames.length; i++)
		{
			var currId = idNames[i];
			var select = document.createElement("select");
			
			select.setAttribute("id", currId);
			select.setAttribute("onChange", "updateConfigurationState("+i+");");
			
			//adds label to the select box
			var newLabel = document.createElement("Label");
			var text = componentNames[i];
			newLabel.innerHTML = text;
			table.appendChild(newLabel);
			
			var tr = document.createElement("tr"); //add a new table row

			// first choice of each select box will contain nothing
			var gap = document.createElement("option");
			gap.setAttribute("value", gapStr);
			gap.innerHTML = "";
			select.appendChild(gap);
			
			var firstTime = true;
			var option, name, price;

			for (var j = 0; j < products.length; j++)
			{
				if (products[j].type === currProdType)
				{
					option = document.createElement("option");
					name = products[j].name;
					price = products[j].price;
					
					option.setAttribute("value", products[j].id);
					option.innerHTML = name + "  " + price.toFixed(2) + "$";
					select.appendChild(option);
					
					tr.appendChild(select); // add the drop-down box to the table cell
				}
			}
			
			table.appendChild(tr); //add the table row that contains the drop-down box to the table
			currProdType = getNextProdType(currProdType);
		}
	}
}

function printAllProducts()
{
	if (products.length == 0)
	{
		console.log("No products in the list");
	}
	else
	{
		for (var i = 0; i < products.length; i++)
		{
			console.log(products[i]);
		}
	}
}

