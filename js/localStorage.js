var localStorageUsed = false;

function recallValue()
{
	var firstName = localStorage.getItem("firstName");
	var secondName = localStorage.getItem("secondName");
	var address = localStorage.getItem("address");
	var email = localStorage.getItem("email");
	var telephone = localStorage.getItem("telephone");
	var country = localStorage.getItem("country");
	var state = localStorage.getItem("state");

	var userMobo = localStorage.getItem("userMobo");
	var userHdd = localStorage.getItem("userHdd");
	var userCpu = localStorage.getItem("userCpu");
	var userGpu= localStorage.getItem("userGpu");
	var userPsu = localStorage.getItem("userPsu");
	var userRam = localStorage.getItem("userRam");
	
	var description = localStorage.getItem("description");
	var total = localStorage.getItem("total");
	
	document.getElementById("firstName").value = firstName;
	document.getElementById("secondName").value = secondName;
	document.getElementById("address").value = address;
	document.getElementById("email").value = email;
	document.getElementById("telephone").value = telephone;
	document.getElementById("country").value = country;
	document.getElementById("state").value = state;
	
	document.getElementById("description").innerHTML = description;
	document.getElementById("totalCost").innerHTML = total;
	
	var items = document.getElementsByClassName("priceItem");
	items[0].innerHTML = userMobo;
	items[1].innerHTML = userHdd;
	items[2].innerHTML = userCpu;
	items[3].innerHTML = userGpu;
	items[4].innerHTML = userPsu;
	items[5].innerHTML = userRam;
}

function resetLocalStorage()
{
	localStorage.setItem("firstName", "");
	localStorage.setItem("secondName", "");
	localStorage.setItem("address", "");
	localStorage.setItem("email", "");
	localStorage.setItem("telephone", "");
	localStorage.setItem("country", "");
	localStorage.setItem("state", "");
	
	localStorage.setItem("userMobo", emptyStr);
	localStorage.setItem("userHdd", emptyStr);
	localStorage.setItem("userCpu", emptyStr);
	localStorage.setItem("userGpu", emptyStr);
	localStorage.setItem("userPsu", emptyStr);
	localStorage.setItem("userRam", emptyStr);
	
	localStorage.setItem("description", "");
	localStorage.setItem("total", emptyStr);
	
	recallValue();
}

function saveLocalStorage()
{
	//(firstName, secondName, address, email, telephone, country, state);
	
	localStorage.setItem("firstName", document.getElementById("firstName").value);
	localStorage.setItem("secondName", document.getElementById("secondName").value);
	localStorage.setItem("address", document.getElementById("address").value);
	localStorage.setItem("email", document.getElementById("email").value);
	localStorage.setItem("telephone", document.getElementById("telephone").value);
	localStorage.setItem("country", document.getElementById("country").value);
	localStorage.setItem("state", document.getElementById("state").value);

	var items = document.getElementsByClassName("priceItem");
	localStorage.setItem("userMobo", items[0].innerHTML);
	localStorage.setItem("userHdd", items[1].innerHTML);
	localStorage.setItem("userCpu", items[2].innerHTML);
	localStorage.setItem("userGpu", items[3].innerHTML);
	localStorage.setItem("userPsu", items[4].innerHTML);
	localStorage.setItem("userRam", items[5].innerHTML);

	localStorage.setItem("description", document.getElementById("description").innerHTML);
	localStorage.setItem("total", document.getElementById("totalCost").innerHTML);
}
