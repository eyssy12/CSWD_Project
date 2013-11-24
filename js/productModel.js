
var products = new Array();

// enums for Products
var ProductType =
{
	MOTHERBOARD: 0,
	HDD: 1,
	CPU: 2,
	GPU: 3,
	PSU: 4,
	RAM:	5,
}

function Product(name, manufacturer, releaseDate, description, id, price, warranty, type)
{
	this.name = name;
	this.manufacturer = manufacturer;
	this.releaseDate = releaseDate;
	this.description = description;
	this.id = id;
	this.price = price;
	this.warranty = warranty;
	this.type = type;
}

Product.prototype.getID = function()
{
	return this.id;
}

Product.prototype.getDescription = function()
{
	return this.description;
}

Product.prototype.getType = function()
{
	return this.type;
}

Product.prototype.getPrice = function()
{
	return this.price;
}

// creating some default products
// realistically you would have a database of them
function createProducts()
{
	var name, manufacturer, releaseDate, description; // strings
	var id, price, warranty, type; // integers

	var currentTime = new Date();
	var newProduct;
	
	// http://motherboard.findthebest.com/l/419/ASRock-H67M-GE-HT-B3
	name = "ASRock H67M-GE/HT (B3)";
	manufacturer = "Intel";
	releaseDate = "23.05.2013"
	description = "ASRock H67M-GE/HT (B3)";
	id = 10;
	price = 245.65;
	warranty = 2;
	type = ProductType.MOTHERBOARD;

	newProduct = new Product(name, manufacturer, releaseDate, description, id, price, warranty, type);
	products.push(newProduct);
	
	// http://motherboard.findthebest.com/l/409/ASRock-X79-Extreme6-GB
	name = "ASRock X79 Extreme6/GB";
	manufacturer = "Intel";
	releaseDate = "28.06.2012"
	description = "ASRock X79 Extreme6/GB";
	id = 13;
	price = 120.00;
	warranty = 2;
	type = ProductType.MOTHERBOARD;

	newProduct = new Product(name, manufacturer, releaseDate, description, id, price, warranty, type);
	products.push(newProduct);

	// http://motherboard.findthebest.com/l/644/ASUS-Z9PE-D8-WS
	name = "ASUS Z9PE-D8 WS";
	manufacturer = "Intel";
	releaseDate = "26.04.2011"
	description = "ASUS Z9PE-D8 WS";
	id = 5;
	price = 300.00;
	warranty = 2;
	type = ProductType.MOTHERBOARD;

	newProduct = new Product(name, manufacturer, releaseDate, description, id, price, warranty, type);
	products.push(newProduct);

	//----------------------------------------------------------------------------------------------
	
	name = "Caviar Blue 320GB 7200rpm";
	manufacturer = "Western Digital";
	releaseDate = "21.02.2012";
	description = "Caviar Blue 320GB 7200rpm";
	id = 26;
	price = 43.00;
	warranty = 3;
	type = ProductType.HDD;
	
	newProduct = new Product(name, manufacturer, releaseDate, description, id, price, warranty, type);
	products.push(newProduct);
	
	name = "ST500DM002 500GB 7200rpm";
	manufacturer = "Seagate";
	releaseDate = "08.08.2012";
	description = "ST500DM002 500GB 7200rpm";
	id = 27;
	price = 57.68;
	warranty = 2;
	type = ProductType.HDD;
	
	newProduct = new Product(name, manufacturer, releaseDate, description, id, price, warranty, type);
	products.push(newProduct);
	
	name = "ST1000DM003 1TB 7200rpm";
	manufacturer = "Seagate";
	releaseDate = "10.06.2012";
	description = "ST1000DM003 1TB 7200rpm";
	id = 28;
	price = 68.17;
	warranty = 2;
	type = ProductType.HDD;
	
	newProduct = new Product(name, manufacturer, releaseDate, description, id, price, warranty, type);
	products.push(newProduct);
	
	//----------------------------------------------------------------------------------------------
	
	// http://processors.findthebest.com/l/120/Intel-i7-3930K
	name = "i7-3930K";
	manufacturer = "Intel";
	releaseDate = "11.11.2012"
	description = "i7-3930K";
	id = 17;
	price = 518.15;
	warranty = 1;
	type = ProductType.CPU;
	
	newProduct = new Product(name, manufacturer, releaseDate, description, id, price, warranty, type);
	products.push(newProduct);
	
	// http://processors.findthebest.com/l/315/AMD-FX-8150
	name = "FX-8150";
	manufacturer = "AMD";
	releaseDate = "16.05.2011"
	description = "FX-8150";
	id = 18;
	price = 143;
	warranty = 2;
	type = ProductType.CPU;
	
	newProduct = new Product(name, manufacturer, releaseDate, description, id, price, warranty, type);
	products.push(newProduct);
	
	// http://processors.findthebest.com/l/867/AMD-FX-4130
	name = "FX-4130";
	manufacturer = "AMD";
	releaseDate = "08.12.2011"
	description = "FX-4130";
	id = 19;
	price = 93.15;
	warranty = 1;
	type = ProductType.CPU;
	
	newProduct = new Product(name, manufacturer, releaseDate, description, id, price, warranty, type);
	products.push(newProduct);
	
	//----------------------------------------------------------------------------------------------
	
	// http://graphics-cards.findthebest.com/l/701/Sapphire-Tech-Sapphire-HD-Radeon-6950-2GB
	name = "AMD Radeon 6950 2GB";
	manufacturer = "Sapphire Tech";
	releaseDate = "05.03.2012"
	description = "AMD Radeon 6950 2GBs";
	id = 20;
	price = 250.99;
	warranty = 1;
	type = ProductType.GPU;
	
	newProduct = new Product(name, manufacturer, releaseDate, description, id, price, warranty, type);
	products.push(newProduct);
	
	// http://graphics-cards.findthebest.com/l/727/ASUS-GTX650-DC-1GD5
	name = "GTX650-DC-1GD5";
	manufacturer = "ASUS";
	releaseDate = "08.07.2011";
	description = "GTX650-DC-1GD5";
	id = 21;
	price = 125;
	warranty = 2;
	type = ProductType.GPU;
	
	newProduct = new Product(name, manufacturer, releaseDate, description, id, price, warranty, type);
	products.push(newProduct);
	
	// http://graphics-cards.findthebest.com/l/814/EVGA-GeForce-GTX-760-Dual-FTW-4GB-w-EVGA-ACX-Cooler
	name = "GeForce GTX 760 Dual FTW 4GB";
	manufacturer = "EVGA";
	releaseDate = "31.10.2013";
	description = "GeForce GTX 760 Dual FTW 4GB";
	id = 22;
	price = 320.00;
	warranty = 1;
	type = ProductType.GPU;
	
	newProduct = new Product(name, manufacturer, releaseDate, description, id, price, warranty, type);
	products.push(newProduct);
	
	//----------------------------------------------------------------------------------------------
	
	name = "TX 750 Watt ATX/EPS";
	manufacturer = "Corsair";
	releaseDate = "18.06.2013";
	description = "TX 750 Watt ATX/EPS";
	id = 29;
	price = 89.99;
	warranty = 1;
	type = ProductType.PSU;
	
	newProduct = new Product(name, manufacturer, releaseDate, description, id, price, warranty, type);
	products.push(newProduct);
	
	name = "ModXStream Pro 700W";
	manufacturer = "OCZ";
	releaseDate = "30.05.2012";
	description = "ModXStream Pro 700W";
	id = 30;
	price = 71.99;
	warranty = 2;
	type = ProductType.PSU;
	
	newProduct = new Product(name, manufacturer, releaseDate, description, id, price, warranty, type);
	products.push(newProduct);
	
	name = "Enthusiast Series 850-Watt";
	manufacturer = "Corsair";
	releaseDate = "13.07.2013";
	description = "Enthusiast Series 850-Watt";
	id = 31;
	price = 119.22;
	warranty = 2;
	type = ProductType.PSU;
	
	newProduct = new Product(name, manufacturer, releaseDate, description, id, price, warranty, type);
	products.push(newProduct);
	
	//----------------------------------------------------------------------------------------------
	
	name = "Vengence 16GB";
	manufacturer = "Corsair";
	releaseDate = "27.01.2013";
	description = "Vengence 16GB";
	id = 23;
	price = 105.00;
	warranty = 1;
	type = ProductType.RAM;
	
	newProduct = new Product(name, manufacturer, releaseDate, description, id, price, warranty, type);
	products.push(newProduct);
	
	name = "HyperX 8GB";
	manufacturer = "Kingston";
	releaseDate = "11.12.2012";
	description = "HyperX 8GB";
	id = 24;
	price = 55.55;
	warranty = 2;
	type = ProductType.RAM;
	
	newProduct = new Product(name, manufacturer, releaseDate, description, id, price, warranty, type);
	products.push(newProduct);
	
	name = "JetRAM 8GB";
	manufacturer = "Transcend";
	releaseDate = "10.06.2012";
	description = "JetRAM 8GB";
	id = 25;
	price = 70.00;
	warranty = 1;
	type = ProductType.RAM;
	
	newProduct = new Product(name, manufacturer, releaseDate, description, id, price, warranty, type);
	products.push(newProduct);
	

}
