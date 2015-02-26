
	/*
	 * Area for my Good viz style objects: fonts, colors etc
	 */
	
var myTextStyle = {
	fontName : 'Times-Roman',
	fontSize : 18,
	bold : true,
	italic : true,
	color : '#871b47', // The color of the text.
	auraColor : '#d799ae', // The color of the text outline.
	opacity : 0.8 // The transparency of the text.
}

      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      
      google.load('visualization','1.0',{'packages':['corechart']});
      
      google.setOnLoadCallback(drawChart);
      function drawChart() {
      	
      	var arraysData = [];
      	//use a for loop to make an array of arrays out of relevant JSON data
      	
      	for(var i=0;i<jsonFREDData.observations.length; i++){
      		
      		var itemArray = [];
      		itemArray.push(jsonFREDData.observations[i].date);
      		itemArray.push(Number(jsonFREDData.observations[i].value));
      		
      		arraysData.push(itemArray); //push data from small list to bigger list
      	}

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows(arraysData);

        // Set chart options
        var options = {'title':'Eating Too Much Pizza',
                       'width':400,
                       'height':300,
                       'hAxis':{
                       		'textStyle': {
                       			fontName: 'Times-Roman',
      							fontSize: 18,
     							bold: true,
      							italic: true,
      							color: '#871b47',     // The color of the text.
      							auraColor: '#d799ae', // The color of the text outline.
      							opacity: 0.8          // The transparency of the text.
                       			}//end textStyle
                       		}//end of hAxis
                       }//end of var options;

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }