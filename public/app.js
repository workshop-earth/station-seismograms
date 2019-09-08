var stationData;
fetchData();
function fetchData(){
  var request = new XMLHttpRequest(),
      datapath  = './data.json';
  request.open('GET', datapath, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      console.log('Data received');
      stationData = JSON.parse(request.responseText);
      init();
    } else { console.log('Reached our target server, but it returned an error'); }
  };
  request.onerror = function() { console.log('There was a connection error of some sort'); };
  request.send();
}



function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};



function init() {

window.addEventListener('resize', debounce( function(){ sizeScale(); } ), 250);



let seismogramDataset;
let seismogramDataEast;
let seismogramDataNorth;
let seismogramDataZ;

function getGramDataAtIndex(index) {
	seismogramDataset = stationData.stations[index].seismograms;
	seismogramDataEast = seismogramDataset["east"];
	seismogramDataNorth = seismogramDataset["north"];
	seismogramDataZ = seismogramDataset["z"];
}

getGramDataAtIndex(0);

const stationID = document.querySelector('#stationID');
const vizHolder = document.querySelector('#vizHolder');
const vizStations = document.querySelector('#vizStations');
const vizGramEast = document.querySelector('#vizGramEast');
const vizGramNorth = document.querySelector('#vizGramNorth');
const vizGramZ = document.querySelector('#vizGramZ');
const vizGramXAxis = document.querySelector('#vizGramXAxis');

updateStationID(stationData.stations[0]);

function updateStationID(station) {
	stationID.innerHTML = station.id;
}

const svgStations = d3.select(vizStations)
			.append('svg')
			.attr('tabindex', '0');

const svgGramEast = d3.select(vizGramEast)
			.append('svg');

const svgGramNorth = d3.select(vizGramNorth)
			.append('svg');

const svgGramZ = d3.select(vizGramZ)
			.append('svg');

const svgGramXAxis = d3.select(vizGramXAxis)
			.append('svg');

const svgGramXAxisGroup = svgGramXAxis.append("g")
			.attr("class", "x axis");


let stationXEx;
let stationYEx;
let xDomainPad;
let yDomainPad;
var stationScale = {
	"x" : d3.scaleLinear(),
	"y": d3.scaleLinear()
}
function configStationDomain() {
	// Configure Stations map scale
	let stationXArr = stationData.stations.map(a => a.x).sort(function(a,b){ return a - b});
	stationXEx = d3.extent(stationXArr);

	let stationYArr = stationData.stations.map(a => a.y).sort(function(a,b){ return a - b});
	stationYEx = d3.extent(stationYArr);

	// Find a decent relative data delta to use as scale input padding
		// Keeps points nicely off the axis labels
	xDomainPad = (stationXArr[1] - stationXArr[0]) / 2;
	yDomainPad = (stationYArr[1] - stationYArr[0]) / 2;

	stationScale.x.domain([stationXEx[0] - xDomainPad, stationXEx[1] + xDomainPad]);
	stationScale.y.domain([stationYEx[1] + yDomainPad, stationYEx[0] - yDomainPad]);
}

configStationDomain();
var triSize = 15;
var mapPad = triSize * 2;
var triPoints = '-7.1,5.5 0.4,-7.6 7.8,5.5';

// Init stations map
let numTicks = 2;
let stationsAxisLeft = svgStations.append("g")
			.attr("class", "stations-axis y axis");

let stationsAxisBottom = svgStations.append("g")
			.attr("class", "stations-axis x axis");

var stationPoints = svgStations.selectAll('circle')
		.data(stationData.stations)
		.enter()
		.append('polygon').attr('points', triPoints)
		.attr('tabindex', '0')
		.attr('class', function(d, i) {
			let classes = 'station-point';
			if (i == 0) { classes += ' active'}
			return classes
		})
		.on('click', function(d){
			document.querySelectorAll('.station-point').forEach(function(point){
				if (point.classList.contains('active')) { point.classList.remove('active');}
			});
			this.classList.toggle('active');
			updateGramData(d);
		});

let cellSize = {
		stations: {
			height: null,
			width: null
		},
		gramEast: {
			height: null,
			width: null
		},
		gramNorth: {
			height: null,
			width: null
		},
		gramZ: {
			height: null,
			width: null
		},
		gramXAxis: {
			height: null,
			width: null,
			// Need the initial cell size for axis offset before spaning SVG across grid
			cell: vizGramXAxis.offsetHeight
		}
};

let pathEastReal = svgGramEast.append('path').attr('tabindex', '0');
let pathEastSim = svgGramEast.append('path').attr('tabindex', '0');
let pathNorthReal = svgGramNorth.append('path').attr('tabindex', '0');
let pathNorthSim = svgGramNorth.append('path').attr('tabindex', '0');
let pathZReal = svgGramZ.append('path').attr('tabindex', '0');
let pathZSim = svgGramZ.append('path').attr('tabindex', '0');

let axisEast = svgGramEast.append("g").attr("class", "y axis");
let axisNorth = svgGramNorth.append("g").attr("class", "y axis");
let axisZ = svgGramZ.append("g").attr("class", "y axis");

let gramPaddingSide = 50;
let gramPaddingTop = 10;


// Gram X Axis scale is shared across all grams
let gramScaleX;
function setGramScaleX() {
	// Analyze gram array values for all three seismograms before creating X scale
	let grams = ['east', 'north', 'z'];
	let xValsReal = [];
	let xValsSim = [];
	grams.forEach(function(gram){
		let gramValsReal = seismogramDataset[gram]["real"].map(function(arr){ return arr[0]; });
		let gramValsSim = seismogramDataset[gram]["sim"].map(function(arr){ return arr[0]; });
		Array.prototype.push.apply(xValsReal, gramValsReal);
		Array.prototype.push.apply(xValsSim, gramValsSim);
	});


	let xValsRealEx = d3.extent(xValsReal);
	let xValsSimEx = d3.extent(xValsSim);

	let xMin = d3.min([xValsRealEx[0], xValsSimEx[0]]);
	let xMax = d3.max([xValsRealEx[1], xValsSimEx[1]]);

	return d3.scaleLinear()
					.domain([xMin, xMax])
					.range([gramPaddingSide, cellSize['gramNorth'].width])

}

// Gram Y Axis scale is unique to each gram instance
function setGramScaleY(id) {
	let gramData = seismogramDataset[id];
	let cellName = 'gram' + id.charAt(0).toUpperCase() + id.slice(1);

	let yValsReal = gramData["real"].map(function(arr){ return arr[1]; });
	let yValsSim = gramData["sim"].map(function(arr){ return arr[1]; });
	let yValsRealEx = d3.extent(yValsReal);
	let yValsSimEx = d3.extent(yValsSim);

	let yPad = 1.25;
	let yMin = d3.min([yValsRealEx[0], yValsSimEx[0]]) * yPad;
	let yMax = d3.max([yValsRealEx[1], yValsSimEx[1]]) * yPad;

	return d3.scaleLinear()
					.domain([yMax, yMin])
					.range([gramPaddingTop, (cellSize[cellName].height - gramPaddingTop)])
					.nice()
}

sizeScale();

function generateGramLine(gramScaleY) {
	return d3.line()
				.x(function(d, i) { return gramScaleX(d[0]); })
				.y(function(d) { return gramScaleY(d[1]); })
				.curve(d3.curveCardinal)
}

function updateGramData(station) {
	var i = stationData.stations.findIndex(function(o) {
		return o.id == station.id;
	})
	getGramDataAtIndex(i);
	updateStationID(station);
	plotGrams()
}

function plotGrams(){
	gramScaleX = setGramScaleX();

	let gramEastScale = setGramScaleY('east');
	let gramNorthScale = setGramScaleY('north');
	let gramZScale = setGramScaleY('z');

	let easePath = d3.easeCubicInOut;
	let easeAxis = easePath;
	let durPath = 400;
	let durAxis = durPath;

	// Draw Seismograph East
	pathEastReal.datum(seismogramDataEast["real"])
			.attr('class', 'gram-line gram-line-real')
			.transition().duration(durPath).ease(easePath)
			.attr("d", generateGramLine(gramEastScale))
	pathEastSim.datum(seismogramDataEast["sim"])
			.attr('class', 'gram-line gram-line-sim')
			.transition().duration(durPath).ease(easePath)
			.attr("d", generateGramLine(gramEastScale))

	axisEast.attr("transform", "translate(" + gramPaddingSide + ",0)")
		.transition().duration(durAxis).ease(easeAxis)
		.call(
			d3.axisLeft(gramEastScale)
				.ticks(4)
				.tickSize(-(cellSize.gramEast.width - gramPaddingSide))
		);

	// Draw Seismograph North
	pathNorthReal.datum(seismogramDataNorth["real"])
			.attr('class', 'gram-line gram-line-real')
			.transition().duration(durPath).ease(easePath)
			.attr("d", generateGramLine(gramNorthScale))
	pathNorthSim.datum(seismogramDataNorth["sim"])
			.attr('class', 'gram-line gram-line-sim')
			.transition().duration(durPath).ease(easePath)
			.attr("d", generateGramLine(gramNorthScale))

	axisNorth.attr("transform", "translate(" + gramPaddingSide + ",0)")
		.transition().duration(durAxis).ease(easeAxis)
		.call(d3.axisLeft(gramNorthScale).ticks(4).tickSize(-(cellSize.gramNorth.width - gramPaddingSide)));


	// Draw Seismograph Z
	pathZReal.datum(seismogramDataZ["real"])
			.attr('class', 'gram-line gram-line-real')
			.transition().duration(durPath).ease(easePath)
			.attr("d", generateGramLine(gramZScale))
	pathZSim.datum(seismogramDataZ["sim"])
			.attr('class', 'gram-line gram-line-sim')
			.transition().duration(durPath).ease(easePath)
			.attr("d", generateGramLine(gramZScale))

	axisZ.attr("transform", "translate(" + gramPaddingSide + ",0)")
			.transition().duration(durAxis).ease(easeAxis)
			.call(d3.axisLeft(gramZScale).ticks(4).tickSize(-(cellSize.gramZ.width - gramPaddingSide)));


	// Generate one X Axis across all grams
	svgGramXAxisGroup.transition().duration(durAxis).ease(easeAxis)
									.call(d3.axisBottom(gramScaleX)
										.tickSize(-(cellSize.gramXAxis.height - gramPaddingTop * 2)));

									// Trying to address the last tick line overflowing the parent SVG
									// Handling with CSS but would rather keep overflow hidden
									// This doesn't work because it doesn't properly re-evaluate when ticks adjust to a different dataset scale
									// .call(function(){
									// 	let ticks = svgGramXAxisGroup.selectAll('.tick');
									// 	let last = ticks._groups[0][ticks._groups[0].length - 1];
									// 	let offset = -1;
									// 	last.querySelector('line').setAttribute('x1', offset);
									// 	last.querySelector('line').setAttribute('x2', offset);
									// 	last.setAttribute('text-anchor', 'end');
									// });
}

function sizeScale() {
	cellSize.stations.height	= vizStations.offsetHeight;
	cellSize.stations.width		= vizStations.offsetWidth;
	cellSize.gramEast.height	= vizGramEast.offsetHeight;
	cellSize.gramEast.width		= vizGramEast.offsetWidth;
	cellSize.gramNorth.height	= vizGramNorth.offsetHeight;
	cellSize.gramNorth.width	= vizGramNorth.offsetWidth;
	cellSize.gramZ.height			= vizGramZ.offsetHeight;
	cellSize.gramZ.width			= vizGramZ.offsetWidth;
	cellSize.gramXAxis.width	= vizGramXAxis.offsetWidth;

	// Make stations map square
	if (cellSize.stations.height > cellSize.stations.width) {
		cellSize.stations.height = cellSize.stations.width;
	} else if (cellSize.stations.height < cellSize.stations.width) {
		cellSize.stations.width = cellSize.stations.height;
	}

	svgStations.attr('height', cellSize.stations.height)
			.attr('width', cellSize.stations.width);

	svgGramEast.attr('height', cellSize.gramEast.height)
			.attr('width', cellSize.gramEast.width);

	svgGramNorth.attr('height', cellSize.gramNorth.height)
			.attr('width', cellSize.gramNorth.width);

	svgGramZ.attr('height', cellSize.gramZ.height)
			.attr('width', cellSize.gramZ.width);

	// Need the initial cell size for axis offset before spaning SVG across grid
	vizGramXAxis.style.gridRow = "1 / -1";
	cellSize.gramXAxis.height = vizGramXAxis.offsetHeight;
	svgGramXAxis.attr('height', cellSize.gramXAxis.height)
			.attr('width', cellSize.gramXAxis.width)

	stationScale.x.range([mapPad, cellSize.stations.width - mapPad]);
	stationScale.y.range([mapPad, cellSize.stations.height - mapPad]);

	stationsAxisLeft.call(d3.axisLeft(stationScale.y)
				.ticks(numTicks)
				.tickSize(-(cellSize.stations.width)))
			// Remove domain path around axis
			.call(g => g.select(".domain").remove())
			// Manipulate placement of text labels
			.call(g => g.selectAll("text")
				.attr('x', 8)
				.attr('dy', 4)
				.attr('text-anchor', 'start'))
			// Manipulate sizing of axis ticks
			.call(g => g.selectAll("line")
				.attr('x1', 30));


	stationsAxisBottom.attr("transform", "translate(0, " + cellSize.stations.height + ")")
			.call(d3.axisBottom(stationScale.x)
				.ticks(numTicks)
				.tickSize(-cellSize.stations.height))
			// Remove domain path around axis
			.call(g => g.select(".domain").remove())
			// Manipulate placement of text labels
			.call(g => g.selectAll("text")
				.attr('dy', -20)
				.attr('text-anchor', 'middle'))
			// Manipulate sizing of axis ticks
			.call(g => g.selectAll("line")
				.attr('y1', -35))


	stationPoints.attr('transform', function(d) {
									return 'translate(' + stationScale.x(d.x) + ' ' + stationScale.y(d.y) + ')'
								})
								.merge(stationPoints)
	stationPoints.exit().remove();

	svgGramXAxisGroup.attr("transform", "translate(0," + (cellSize.gramXAxis.height - cellSize.gramXAxis.cell) + ")");

	plotGrams();
}

}