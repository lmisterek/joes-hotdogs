document.body.onload = createPage();

/* This function creates the page and adds all of the elements to the page */
function createPage() {

	menu = [];
	menu['Hotdog'] = 4;
	menu['Fries'] = 3.5;
	menu['Soda'] = 1.5;
	menu['Sauerkraut'] = 1;

	ids = [];

	for ( item in menu ) {

		ids.push("num" + item);

	}

	buildForm(menu);

}

Object.keys(menu).forEach(function(item, index, arr) {

	document.getElementById(item).addEventListener("change", function() {

		var total = changeTotal();
		updateTotal(total);

	});

});


function changeTotal() {

	var total = 0;
	var num_items = 0;

	Object.keys(menu).forEach(function(item, index, arr) {

		num_items = document.getElementById("num" + item).value;

		total = total + menu[item]*parseInt(num_items);

	});

	return total.toFixed(2);
}

function updateTotal(total) {

	document.getElementById("total").value = total;
}