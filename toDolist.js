//Declared  global variables
let userinput = document.getElementById("userinput");
let addButton = document.getElementById("add");
let ul = document.querySelector("ul");

//Event click in add Button
addButton.onclick = (e) => {
	e.preventDefault();
	let itemList = userinput.value;

	//verified if the user input new activity
	if (itemList === '') {
		alert("Please input an activity to the list");
	} else {

		//create elements of the list
		let newli = document.createElement("li");
		let deleteButton = document.createElement("button");
		let checkBox = document.createElement("input");

		//building the list itemList elements
		newli.textContent = itemList;
		checkBox.type = "checkbox";
		deleteButton.textContent = "Delete";

		//appending things
		newli.appendChild(checkBox);
		newli.appendChild(deleteButton);
		ul.appendChild(newli);

		//set up delete event listener in same scope in which the button is created
		deleteButton.onclick = deleteIt;

		//set up checkBox event listener in same scope in which the checkBox is created 
		checkBox.onclick = checked;

	}

	//clean the text input with a empty value 
	document.getElementById("userinput").value = "";
};

//delete functionality
function deleteIt(e) {
	alert("Are you sure you want to delete this from your to do list?");
	let delItem = e.target.closest("li");
	delItem.remove();
}

//checked functionality
function checked(e) {
	// the item is moved to the bottom of the list 
	let newLi = this.parentElement; 
	
	//change the color of the list to green
	newLi.style.color = 'green';

	// change the textDecortion of the element newLi with a line over the text
	newLi.style.textDecoration = "line-through"; 

	//put the element newLi that was onclick in the checkbox in the botton of the list
	ul.appendChild(newLi); 
}