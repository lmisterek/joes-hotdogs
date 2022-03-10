/* purpose:  builds a menu form from an array of items
** arg:  an associative array containing menu items and the price
** return: void
*/
function buildForm(menu) {


	const newForm = document.createElement('form');
	newForm.id = 'menu';
	document.getElementById('container').appendChild(newForm);

	for ( item in menu ) {

		/* function-object and class code code */	
		if( menu.length > 0) {

			food = menu[item].name
			price = menu[item].price 

		}
		/* associative code */ 
		else if ( menu.length == 0) {

			food = item;
			price = menu[item].toFixed(2);

		}
		/* simple-object */
		else if ( menu.length === undefined ) {

			food = item;
			price = menu[item].toFixed(2);

		}

		newDivId = startRow(food);

		var label = document.createElement('label');
		label.htmlFor = food.toLowerCase();
		label.classList.add("col-sm-2", "col-form-label");
		label.innerHTML = food;
		document.getElementById(newDivId).appendChild(label);

		var price_label = document.createElement('label');
		price_label.classList.add("col-sm-2", "col-form-label");
		price_label.innerHTML = "$" + price;
		document.getElementById(newDivId).appendChild(price_label);

		createInput(newDivId, food);

	}

	lastRow();

}

/* purpose:  creates two labels for the row, the name of the item and the price of the item
** 			 and sets various attributes of the input element
** arg:  the id of the div for the row and the name of the menu item
** return: void
*/
function createInput(id, item) {

	var nextDiv = document.createElement('div');
	nextDiv.classList.add("col-sm-8");
	var input = document.createElement('input');
	input.setAttribute("type", "number");
	input.setAttribute("min", "0");
	input.setAttribute("max", "100");
	input.setAttribute("value", "0");
	input.setAttribute("id", "num" + item);
	nextDiv.appendChild(input);
	document.getElementById(newDivId).appendChild(nextDiv);
}

/* purpose:  this builds the last row of the form where the total will be located		 
** arg:  none
** return: void
*/
function lastRow() {

	lastDivId = startRow("last-row");
	var label = document.createElement('label');
	label.htmlFor = "Total";
	label.classList.add("col-sm-4", "col-form-label");
	label.innerHTML = "Total";
	document.getElementById(lastDivId).appendChild(label);

	var div = document.createElement('div');
	div.classList.add("col-sm-8");
	div.id="total_amt";
	document.getElementById(lastDivId).appendChild(div);

	var input = document.createElement('input');
	input.setAttribute("type", "text");
	input.id = "total";
	input.readOnly = true;
	document.getElementById(div.id).appendChild(input);

}

/* purpose:  creates a new row in the form and adds the name of the element to the id
** arg:  an element from the menu
** return: the id of the new div
*/
function startRow(element) {

	const newDiv = document.createElement('div');
	newDiv.id = element;
	document.getElementById('menu').appendChild(newDiv);
	document.getElementById(newDiv.id).classList.add("form-group", "row");
	return newDiv.id;

}




