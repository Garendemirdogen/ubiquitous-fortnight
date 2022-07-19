var citiesArray;

var APIKey = "ae2dcc589707f61a832c268641e09317";
var city = $("#search").val();

// Save the name of the city
var array = [];
if (localStorage.getItem("cities")) {
  JSON.parse(localStorage.getItem("cities")).map((item) => array.push(item));
  array.push(city);
  localStorage.setItem("cities", JSON.stringify(array));
} else {
  array.push(city);
  console.log(array);
  localStorage.setItem("cities", JSON.stringify(array));
}
console.log(localStorage.getItem("cities"));
