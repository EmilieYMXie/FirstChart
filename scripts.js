// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {
	'packages' : ['corechart']
});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

google.load('visualization', '1.0', {
	'packages' : ['corechart']
});

google.setOnLoadCallback(drawChart);
function drawChart() {

	var arraysData = [];
	//use a for loop to make an array of arrays out of relevant JSON data

	for (var i = 0; i < jsonFREDData.observations.length; i++) {

		var itemArray = [];
		itemArray.push(new Date(jsonFREDData.observations[i].date));
		//added (new Date()) when dealing with dates, have to add new Date, with numbers it's just Numbers'
		itemArray.push(Number(jsonFREDData.observations[i].value));

		arraysData.push(itemArray);
		//push data from small list to bigger list
	}

	// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('date', 'Date');
	//date is it's own data type'
	data.addColumn('number', 'Slices');
	data.addColumn({type:'string', role:'annotation'}); // annotation role col.
	data.addRows(arraysData);

	var formatter = new google.visualization.DateFormat({
		pattern : 'MMM d,y'
	});
	//reformat our data
	formatter.format(data, 0);

	var hAxisLabelFormat = 'MMM d, y';
	// Set chart options
	var options = {
		'title' : 'Eating Too Much Pizza',
		'width' : 700,
		'height' : 500,
		'hAxis' : {
			'title' : 'Horizontal Axis Title',
			'gridlines' : {},
		}, //end of hAxis
		'vAxis' : {}//end of vAxis

	};
	//end of var options;
//end of var hAxisLabelFormat


options.hAxis.format = hAxisLabelFormat;
options.hAxis.textStyle = myTextStyle;
console.log(options.hAxis.textStyle);
//Making hAxis (horizontal axis) have the text style of my var myTextStyles

options.vAxis.textStyle = myTextStyle;
console.log(options.vAxis.textstyle);
//Do the same for vAxis (vertical axis)

options.hAxis.gridlines = axisGridlines;
console.log(options.hAxis.gridlines);

options.vAxis.gridlines = axisGridlines;
console.log(options.vAxis.gridlines);

// Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
chart.draw(data, options);
};//end of drawChart function