console.log("checking")
var w = 500;
var h = 300;
var barPadding = 1;

function drawBarGraph(stepsData){



//Create scale functions

var yScale = d3.scale.linear()
.domain([0, d3.max(stepsData, function(d) { return d; })])
.range([0, h-15]); //how much we are letting the container fill 

//Create SVG element
var svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

  svg.selectAll("rect")
  .data(stepsData)
  .enter()
  .append("rect")
  .attr("x", function(d, i) {
    return i * (w / stepsData.length);
})
  .attr("y", function(d) {
    return h - yScale(d);
})
  .attr("width", w / stepsData.length - barPadding)
  .attr("height", function(d) {
    return d ;
})
  .attr("fill", function(d) {
    return "rgb(0, 0, " + d + ")";
});

  svg.selectAll("text")
  .data(stepsData)
  .enter()
  .append("text")
  .text(function(d) {
    return d;
})
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "gray")
  .attr("text-anchor", "middle")
  .attr("x", function(d, i){
    return i * (w / stepsData.length) + (w / stepsData.length - barPadding) / 2;
})
  .attr ("y", function(d){
  return h - yScale(d) + -2;  //      
});
};

function drawGroupedBarGraph(data){
nv.addGraph(function() {
    var chart = nv.models.multiBarChart()
      .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
      .rotateLabels(0)      //Angle to rotate x-axis labels.
      .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
      .groupSpacing(0.1)
      .showControls(false)
      .stacked(false)
      .x(function(d,i){return i;})
      .y(function(d,i){return d[i];});    //Distance between each group of bars.

    chart.xAxis
        .tickFormat(d3.format(',f'));

    chart.yAxis
        .tickFormat(d3.format(',.1f'));

    d3.select('#chart1 svg')
        .datum(data)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
});
};



/*
function drawStreamChart(data){
   var colors = d3.scale.category20();
   var keyColor = function(d, i) {return colors(d.key)};

   var chart;
   nv.addGraph(function() {
       chart = nv.models.stackedAreaChart()
           .useInteractiveGuideline(true)
           .x(function(d) { return d[0] })
           //.y(function(d) { return d[1] })
           .controlLabels({stacked: "Stacked"})
           .color(keyColor)
           .duration(300);

       chart.xAxis.tickFormat(function(d) { return d3.time.format('%x')(new Date(d)) });
       chart.yAxis.tickFormat(d3.format(',.2f'));

       d3.select('#chart1')
            .attr("width", w)
            .attr("height", h)
           .datum(data)
           .transition().duration(1000)
           .call(chart)
           .each('start', function() {
               setTimeout(function() {
                   d3.selectAll('#chart1 *').each(function() {
                       if(this.__transition__)
                           this.__transition__.duration = 1;
                   })
               }, 0)
           });

       nv.utils.windowResize(chart.update);
       return chart;
   });
}

*/
// function drawScatterplot(data){

// var dataset = data

// //Create scale functions
// var xScale = d3.scale.linear()
// .domain([0, d3.max(dataset, function(d) { return d[0]; })])
// .range([0, w]);

// var yScale = d3.scale.linear()
// .domain([0, d3.max(dataset, function(d) { return d[1]; })])
// .range([0, h]);

// //Create SVG element
// var svg = d3.select("body")
// .append("svg")
// .attr("width", w)
// .attr("height", h);

// svg.selectAll("circle")
// .data(dataset)
// .enter()
// .append("circle")
// .attr("cx", function(d) {
// 	return xScale(d[0]);
// })
// .attr("cy", function(d) {
// 	return yScale(d[1]);
// })
// .attr("r", function(d) {
// 	return Math.sqrt(h - d[1]);
// });

// svg.selectAll("text")
// .data(dataset)
// .enter()
// .append("text")
// .text(function(d) {
// 	return d[0] + "," + d[1];
// })
// .attr("x", function(d) {
// 	return xScale(d[0]);
// })
// .attr("y", function(d) {
// 	return yScale(d[1]);
// })
// .attr("font-family", "sans-serif")
// .attr("font-size", "11px")
// .attr("fill", "red");

// }











console.log("checking")
var w = 500;
var h = 300;
var barPadding = 1;

function drawBarGraph(stepsData){



//Create scale functions

var yScale = d3.scale.linear()
.domain([0, d3.max(stepsData, function(d) { return d; })])
.range([0, h-15]); //how much we are letting the container fill 

//Create SVG element
var svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

  svg.selectAll("rect")
  .data(stepsData)
  .enter()
  .append("rect")
  .attr("x", function(d, i) {
    return i * (w / stepsData.length);
})
  .attr("y", function(d) {
    return h - yScale(d);
})
  .attr("width", w / stepsData.length - barPadding)
  .attr("height", function(d) {
    return d ;
})
  .attr("fill", function(d) {
    return "rgb(0, 0, " + d + ")";
});

  svg.selectAll("text")
  .data(stepsData)
  .enter()
  .append("text")
  .text(function(d) {
    return d;
})
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "gray")
  .attr("text-anchor", "middle")
  .attr("x", function(d, i){
    return i * (w / stepsData.length) + (w / stepsData.length - barPadding) / 2;
})
  .attr ("y", function(d){
  return h - yScale(d) + -2;  //      
});
};

function drawGroupedBarGraph(data){
nv.addGraph(function() {
    var chart = nv.models.multiBarChart()
      .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
      .rotateLabels(0)      //Angle to rotate x-axis labels.
      .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
      .groupSpacing(0.1)
      .showControls(false)
      .stacked(false)
      .x(function(d,i){return i;})
      .y(function(d,i){return d[i];});    //Distance between each group of bars.

    chart.xAxis
        .tickFormat(d3.format(',f'));

    chart.yAxis
        .tickFormat(d3.format(',.1f'));

    d3.select('#chart1 svg')
        .datum(data)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
});
};



/*
function drawStreamChart(data){
   var colors = d3.scale.category20();
   var keyColor = function(d, i) {return colors(d.key)};

   var chart;
   nv.addGraph(function() {
       chart = nv.models.stackedAreaChart()
           .useInteractiveGuideline(true)
           .x(function(d) { return d[0] })
           //.y(function(d) { return d[1] })
           .controlLabels({stacked: "Stacked"})
           .color(keyColor)
           .duration(300);

       chart.xAxis.tickFormat(function(d) { return d3.time.format('%x')(new Date(d)) });
       chart.yAxis.tickFormat(d3.format(',.2f'));

       d3.select('#chart1')
            .attr("width", w)
            .attr("height", h)
           .datum(data)
           .transition().duration(1000)
           .call(chart)
           .each('start', function() {
               setTimeout(function() {
                   d3.selectAll('#chart1 *').each(function() {
                       if(this.__transition__)
                           this.__transition__.duration = 1;
                   })
               }, 0)
           });

       nv.utils.windowResize(chart.update);
       return chart;
   });
}

*/
// function drawScatterplot(data){

// var dataset = data

// //Create scale functions
// var xScale = d3.scale.linear()
// .domain([0, d3.max(dataset, function(d) { return d[0]; })])
// .range([0, w]);

// var yScale = d3.scale.linear()
// .domain([0, d3.max(dataset, function(d) { return d[1]; })])
// .range([0, h]);

// //Create SVG element
// var svg = d3.select("body")
// .append("svg")
// .attr("width", w)
// .attr("height", h);

// svg.selectAll("circle")
// .data(dataset)
// .enter()
// .append("circle")
// .attr("cx", function(d) {
// 	return xScale(d[0]);
// })
// .attr("cy", function(d) {
// 	return yScale(d[1]);
// })
// .attr("r", function(d) {
// 	return Math.sqrt(h - d[1]);
// });

// svg.selectAll("text")
// .data(dataset)
// .enter()
// .append("text")
// .text(function(d) {
// 	return d[0] + "," + d[1];
// })
// .attr("x", function(d) {
// 	return xScale(d[0]);
// })
// .attr("y", function(d) {
// 	return yScale(d[1]);
// })
// .attr("font-family", "sans-serif")
// .attr("font-size", "11px")
// .attr("fill", "red");

// }



console.log("checking")
var w = 500;
var h = 300;
var barPadding = 1;

function drawBarGraph(stepsData){



//Create scale functions

var yScale = d3.scale.linear()
.domain([0, d3.max(stepsData, function(d) { return d; })])
.range([0, h-15]); //how much we are letting the container fill 

//Create SVG element
var svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

  svg.selectAll("rect")
  .data(stepsData)
  .enter()
  .append("rect")
  .attr("x", function(d, i) {
    return i * (w / stepsData.length);
})
  .attr("y", function(d) {
    return h - yScale(d);
})
  .attr("width", w / stepsData.length - barPadding)
  .attr("height", function(d) {
    return d ;
})
  .attr("fill", function(d) {
    return "rgb(0, 0, " + d + ")";
});

  svg.selectAll("text")
  .data(stepsData)
  .enter()
  .append("text")
  .text(function(d) {
    return d;
})
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "gray")
  .attr("text-anchor", "middle")
  .attr("x", function(d, i){
    return i * (w / stepsData.length) + (w / stepsData.length - barPadding) / 2;
})
  .attr ("y", function(d){
  return h - yScale(d) + -2;  //      
});
};

function drawGroupedBarGraph(data){
nv.addGraph(function() {
    var chart = nv.models.multiBarChart()
      .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
      .rotateLabels(0)      //Angle to rotate x-axis labels.
      .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
      .groupSpacing(0.1)
      .showControls(false)
      .stacked(false)
      .x(function(d,i){return i;})
      .y(function(d,i){return d[i];});    //Distance between each group of bars.

    chart.xAxis
        .tickFormat(d3.format(',f'));

    chart.yAxis
        .tickFormat(d3.format(',.1f'));

    d3.select('#chart1 svg')
        .datum(data)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
});
};



/*
function drawStreamChart(data){
   var colors = d3.scale.category20();
   var keyColor = function(d, i) {return colors(d.key)};

   var chart;
   nv.addGraph(function() {
       chart = nv.models.stackedAreaChart()
           .useInteractiveGuideline(true)
           .x(function(d) { return d[0] })
           //.y(function(d) { return d[1] })
           .controlLabels({stacked: "Stacked"})
           .color(keyColor)
           .duration(300);

       chart.xAxis.tickFormat(function(d) { return d3.time.format('%x')(new Date(d)) });
       chart.yAxis.tickFormat(d3.format(',.2f'));

       d3.select('#chart1')
            .attr("width", w)
            .attr("height", h)
           .datum(data)
           .transition().duration(1000)
           .call(chart)
           .each('start', function() {
               setTimeout(function() {
                   d3.selectAll('#chart1 *').each(function() {
                       if(this.__transition__)
                           this.__transition__.duration = 1;
                   })
               }, 0)
           });

       nv.utils.windowResize(chart.update);
       return chart;
   });
}

*/
// function drawScatterplot(data){

// var dataset = data

// //Create scale functions
// var xScale = d3.scale.linear()
// .domain([0, d3.max(dataset, function(d) { return d[0]; })])
// .range([0, w]);

// var yScale = d3.scale.linear()
// .domain([0, d3.max(dataset, function(d) { return d[1]; })])
// .range([0, h]);

// //Create SVG element
// var svg = d3.select("body")
// .append("svg")
// .attr("width", w)
// .attr("height", h);

// svg.selectAll("circle")
// .data(dataset)
// .enter()
// .append("circle")
// .attr("cx", function(d) {
// 	return xScale(d[0]);
// })
// .attr("cy", function(d) {
// 	return yScale(d[1]);
// })
// .attr("r", function(d) {
// 	return Math.sqrt(h - d[1]);
// });

// svg.selectAll("text")
// .data(dataset)
// .enter()
// .append("text")
// .text(function(d) {
// 	return d[0] + "," + d[1];
// })
// .attr("x", function(d) {
// 	return xScale(d[0]);
// })
// .attr("y", function(d) {
// 	return yScale(d[1]);
// })
// .attr("font-family", "sans-serif")
// .attr("font-size", "11px")
// .attr("fill", "red");

// }




console.log("checking")
var w = 500;
var h = 300;
var barPadding = 1;

function drawBarGraph(stepsData){



//Create scale functions

var yScale = d3.scale.linear()
.domain([0, d3.max(stepsData, function(d) { return d; })])
.range([0, h-15]); //how much we are letting the container fill 

//Create SVG element
var svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

  svg.selectAll("rect")
  .data(stepsData)
  .enter()
  .append("rect")
  .attr("x", function(d, i) {
    return i * (w / stepsData.length);
})
  .attr("y", function(d) {
    return h - yScale(d);
})
  .attr("width", w / stepsData.length - barPadding)
  .attr("height", function(d) {
    return d ;
})
  .attr("fill", function(d) {
    return "rgb(0, 0, " + d + ")";
});

  svg.selectAll("text")
  .data(stepsData)
  .enter()
  .append("text")
  .text(function(d) {
    return d;
})
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "gray")
  .attr("text-anchor", "middle")
  .attr("x", function(d, i){
    return i * (w / stepsData.length) + (w / stepsData.length - barPadding) / 2;
})
  .attr ("y", function(d){
  return h - yScale(d) + -2;  //      
});
};

function drawGroupedBarGraph(data){
nv.addGraph(function() {
    var chart = nv.models.multiBarChart()
      .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
      .rotateLabels(0)      //Angle to rotate x-axis labels.
      .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
      .groupSpacing(0.1)
      .showControls(false)
      .stacked(false)
      .x(function(d,i){return i;})
      .y(function(d,i){return d[i];});    //Distance between each group of bars.

    chart.xAxis
        .tickFormat(d3.format(',f'));

    chart.yAxis
        .tickFormat(d3.format(',.1f'));

    d3.select('#chart1 svg')
        .datum(data)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
});
};



/*
function drawStreamChart(data){
   var colors = d3.scale.category20();
   var keyColor = function(d, i) {return colors(d.key)};

   var chart;
   nv.addGraph(function() {
       chart = nv.models.stackedAreaChart()
           .useInteractiveGuideline(true)
           .x(function(d) { return d[0] })
           //.y(function(d) { return d[1] })
           .controlLabels({stacked: "Stacked"})
           .color(keyColor)
           .duration(300);

       chart.xAxis.tickFormat(function(d) { return d3.time.format('%x')(new Date(d)) });
       chart.yAxis.tickFormat(d3.format(',.2f'));

       d3.select('#chart1')
            .attr("width", w)
            .attr("height", h)
           .datum(data)
           .transition().duration(1000)
           .call(chart)
           .each('start', function() {
               setTimeout(function() {
                   d3.selectAll('#chart1 *').each(function() {
                       if(this.__transition__)
                           this.__transition__.duration = 1;
                   })
               }, 0)
           });

       nv.utils.windowResize(chart.update);
       return chart;
   });
}

*/
// function drawScatterplot(data){

// var dataset = data

// //Create scale functions
// var xScale = d3.scale.linear()
// .domain([0, d3.max(dataset, function(d) { return d[0]; })])
// .range([0, w]);

// var yScale = d3.scale.linear()
// .domain([0, d3.max(dataset, function(d) { return d[1]; })])
// .range([0, h]);

// //Create SVG element
// var svg = d3.select("body")
// .append("svg")
// .attr("width", w)
// .attr("height", h);

// svg.selectAll("circle")
// .data(dataset)
// .enter()
// .append("circle")
// .attr("cx", function(d) {
// 	return xScale(d[0]);
// })
// .attr("cy", function(d) {
// 	return yScale(d[1]);
// })
// .attr("r", function(d) {
// 	return Math.sqrt(h - d[1]);
// });

// svg.selectAll("text")
// .data(dataset)
// .enter()
// .append("text")
// .text(function(d) {
// 	return d[0] + "," + d[1];
// })
// .attr("x", function(d) {
// 	return xScale(d[0]);
// })
// .attr("y", function(d) {
// 	return yScale(d[1]);
// })
// .attr("font-family", "sans-serif")
// .attr("font-size", "11px")
// .attr("fill", "red");

// }






























