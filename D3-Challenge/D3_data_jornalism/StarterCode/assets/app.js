// @TODO: YOUR CODE HERE!
  

var svgHeight = 500;
var svgWidth = 750;


var margin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 100
};


var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;


var svg = d3.select("#scatter")
    .append("div")
    .classed("chart", true)
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);


var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);


d3.csv("./assets/data/data.csv").then(function(importedData) {
    importedData.forEach(function(data) {
        data.healthcare = +data.healthcare;
        