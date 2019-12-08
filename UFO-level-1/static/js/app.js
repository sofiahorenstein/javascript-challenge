// Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page and then 
// adds new rows of data for each UFO sighting.

// Make sure you have a column for date/time, city, state, country, shape, 
// and comment at the very least.

// Use a date form in your HTML document and 
// write JavaScript code that will listen for events and search 
// through the date/time column to find rows that match user input.

// Get a reference to the table body

// from data.js
var tableData = data;

var tbody = d3.select("tbody");

function displayData(data) {

  tbody.html("")

  data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.html(value);
    });
  });
}

displayData(tableData)

  //Select the button

var button = d3.select("#filter-btn");

var dateInput = d3.select("#datetime");

function clickSelect() {
    d3.event.preventDefault();
    console.log(dateInput.property("value"));

    var filteredData = tableData.filter(ufoSighting => 
      ufoSighting.datetime === dateInput.property("value"));

      displayData(filteredData);
}
dateInput.on("change", clickSelect) 





