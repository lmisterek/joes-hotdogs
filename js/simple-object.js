document.body.onload = createPage();

/* This function creates the page and adds all of the elements to the page */
function createPage() {

	const menu = {

		Hotdog: 4,
		Fries: 3.5,
		Soda: 1.5,
		SauerKraut: 1
	}

	ids = [];

	for ( item in menu ) {

		ids.push("num" + item);

	}

	buildForm(menu);

	/* Add event listener */
	Object.keys(menu).forEach(function(item, index, arr) {

		console.log(item);

		document.getElementById(item).addEventListener("change", function() {

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

		num_items = document.getElementById("num" + item).value;

		total = total + menu[item]*parseInt(num_items);

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

