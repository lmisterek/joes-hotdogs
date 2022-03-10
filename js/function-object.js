document.body.onload = createPage();

/* This function creates the page and adds all of the elements to the page */
function createPage() {

	function Item(name, price)
	{
		this.name = name;
		this.price = price;
	}

	var item1 = new Item("Hotdog", 4);
	var item2 = new Item("Fries", 3.5);
	var item3 = new Item("Soda", 1.5);
	var item4 = new Item("SauerKraut", 1);


	var menu = new Array(item1, item2, item3, item4);

	ids = [];

	for ( item in menu ) {

		ids.push("num" + item.name);

	}

	buildForm(menu);

	/* Add event listener */
	Object.keys(menu).forEach(function(item, index, arr) {

		document.getElementById(menu[item].name).addEventListener("change", function() {

			var total = changeTotal(menu);
			updateTotal(total);

		});

	});

}

/* purpose:  This function calculates the total of all the items from the menu
** arg:  none
** return: a decimal value, total to two decimal places
*/
function changeTotal(menu) {

	var total = 0;
	var num_items = 0;

	Object.keys(menu).forEach(function(item, index, arr) {

		num_items = document.getElementById("num" + menu[item].name).value;

		total = total + menu[item].price*parseInt(num_items);

	});

	return total.toFixed(2);
}

/* purpose:  This function prints the total to the Total input
** arg:  none
** return: none
*/
function updateTotal(total) {

	document.getElementById("total").value = total;
}

