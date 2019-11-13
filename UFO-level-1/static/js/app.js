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



// // Console.log the weather data from data.js
// console.log(data);

// // // Step 1: Loop Through `data` and console.log each weather report object
// data.forEach(function(ufoSighting) {
//   console.log(ufoSighting);
// });

// // // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// data.forEach(function(ufoSighting) {
//   console.log(ufoSighting);
//   var row = tbody.append("tr");
// });

// // // Step 3:  Use `Object.entries` to console.log each weather report value
// data.forEach(function(ufoSighting) {
//   console.log(ufoSighting);
//   var row = tbody.append("tr");

//   Object.entries(ufoSighting).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// // data.forEach(function(ufoSighting) {
// //   console.log(ufoSighting);
// //   var row = tbody.append("tr");

// //   Object.entries(ufoSighting).forEach(function([key, value]) {
// //     console.log(key, value);
// //     // Append a cell to the row for each value
// //     // in the weather report object
// //     var cell = row.append("td");
// //   });
// // });

// // // Step 5: Use d3 to update each cell's text with
// // // weather report values (weekday, date, high, low)
// function displayData(data) {

//   tbody.html("")

//   data.forEach(function(ufoSighting) {
//     console.log(ufoSighting);
//     var row = tbody.append("tr");
//     Object.entries(ufoSighting).forEach(function([key, value]) {
//       console.log(key, value);
//       // Append a cell to the row for each value
//       // in the sightings report object
//       var cell = row.append("td");
//       cell.html(value);
//     });
//   });
// }

// displayData(tableData)


// filterBtn.on("click", function() {
// d3.event.preventDefault();

//   tbody.html("");

//   //d3.event.preventDefault();
//   var callValue = d3.dateInput.property("value");
//   console.log(callValue);

//   var filteredData = tableData.filter(ufoSighting => 
//     ufoSighting.datetime === callValue);

  
// data(filteredData);
// });

