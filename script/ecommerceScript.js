// Open and close dropdown
function toggleDropdown(element) {
	// console.log();
	// element.classList.add("open-sub-menu");
	if (element.nextElementSibling.classList.contains("h-0")) {
		element.nextElementSibling.classList.remove("h-0");
		element.nextElementSibling.classList.add("pt-4");
		element.nextElementSibling.classList.add("h-[100%]");
		element.nextElementSibling.classList.remove("invisible");
		element.nextElementSibling.classList.remove("opacity-0");
		element.children[1].children[0].classList.add("rotate-180");

		return;
	}
	element.nextElementSibling.classList.add("invisible");
	element.nextElementSibling.classList.remove("pt-4");
	element.nextElementSibling.classList.add("h-0");
	element.nextElementSibling.classList.remove("h-[100%]");
	element.nextElementSibling.classList.add("opacity-100");
	element.children[1].children[0].classList.remove("rotate-180");
}

// Navigation
document.querySelector(".hamburger").addEventListener("click", () => {
	document.querySelector(".navigation-menu").classList.toggle("hidden");
});
document.querySelector(".close-nav").addEventListener("click", () => {
	document.querySelector(".navigation-menu").classList.toggle("hidden");
});

// Active link logic

const links = document.querySelectorAll(".dashboard-links");
links.forEach((link) => {
	if (link.attributes.href.value == location.pathname) {
		link.children[0].classList.remove("text-slate-600");
		link.children[0].classList.add("text-blue-700", "bg-blue-100");
		console.log(
			(link.children[0].children[0].attributes.fill.value = "#1D4ED8")
		);
	}
});
// Chart Script
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
	type: "line",
	data: {
		labels: ["", "", "", "", "", "", "", "", ""],
		datasets: [
			{
				data: [20, 10, 35, 10, 50, 22, 45, 60, 20, 20],
				backgroundColor: ["rgba(29, 78, 216, 0.15)", "rgba(29, 78, 216, 0.1)"],
				borderColor: "#1D4ED8",
				borderWidth: 3,
				pointBackgroundColor: "#ffffff",
				fill: true,
				strokeColor: "#6366F1",
				tension: 0.5,
				pointRadius: 0,
			},
		],
	},
	options: {
		plugins: {
			legend: {
				display: false,
				align: "end",
				labels: {
					display: false,
					usePointStyle: true,
					pointStyle: "circle",
				},
			},
		},
		elements: {
			point: {
				radius: 4,
			},
		},
		generateLabels: {
			hidden: true,
		},
		legend: {
			display: false,
		},
		scales: {
			y: {
				grid: {
					display: false,
					drawBorder: false,
					drawOnChartArea: false,
				},
				beginAtZero: true,
				ticks: {
					display: false,
				},
			},
			x: {
				grid: {
					display: false,
					drawBorder: false,
					drawOnChartArea: false,
				},
			},
		},
	},
});

// Chart Script
var ctx = document.getElementById("myChart2").getContext("2d");
var myChart = new Chart(ctx, {
	type: "line",
	data: {
		labels: ["", "", "", "", "", "", "", "", ""],
		datasets: [
			{
				data: [20, 10, 35, 10, 50, 22, 45, 60, 20, 20],
				backgroundColor: ["rgba(29, 78, 216, 0.15)", "rgba(29, 78, 216, 0.1)"],
				borderColor: "#1D4ED8",
				borderWidth: 3,
				pointBackgroundColor: "#ffffff",
				fill: true,
				strokeColor: "#6366F1",
				tension: 0.5,
				pointRadius: 0,
			},
		],
	},
	options: {
		plugins: {
			legend: {
				display: false,
				align: "end",
				labels: {
					display: false,
					usePointStyle: true,
					pointStyle: "circle",
				},
			},
		},
		elements: {
			point: {
				radius: 4,
			},
		},
		generateLabels: {
			hidden: true,
		},
		legend: {
			display: false,
		},
		scales: {
			y: {
				grid: {
					display: false,
					drawBorder: false,
					drawOnChartArea: false,
				},
				beginAtZero: true,
				ticks: {
					display: false,
				},
			},
			x: {
				grid: {
					display: false,
					drawBorder: false,
					drawOnChartArea: false,
				},
			},
		},
	},
});

// Chart Script
var ctx = document.getElementById("myChart3").getContext("2d");
var myChart = new Chart(ctx, {
	type: "line",
	data: {
		labels: ["", "", "", "", "", "", "", "", ""],
		datasets: [
			{
				data: [20, 10, 35, 10, 50, 22, 45, 60, 20, 20],
				backgroundColor: ["rgba(29, 78, 216, 0.15)", "rgba(29, 78, 216, 0.1)"],
				borderColor: "#1D4ED8",
				borderWidth: 3,
				pointBackgroundColor: "#ffffff",
				fill: true,
				strokeColor: "#6366F1",
				tension: 0.5,
				pointRadius: 0,
			},
		],
	},
	options: {
		plugins: {
			legend: {
				display: false,
				align: "end",
				labels: {
					display: false,
					usePointStyle: true,
					pointStyle: "circle",
				},
			},
		},
		elements: {
			point: {
				radius: 4,
			},
		},
		generateLabels: {
			hidden: true,
		},
		legend: {
			display: false,
		},
		scales: {
			y: {
				grid: {
					display: false,
					drawBorder: false,
					drawOnChartArea: false,
				},
				beginAtZero: true,
				ticks: {
					display: false,
				},
			},
			x: {
				grid: {
					display: false,
					drawBorder: false,
					drawOnChartArea: false,
				},
			},
		},
	},
});

// Chart Script
var ctx = document.getElementById("myChart4").getContext("2d");
var myChart = new Chart(ctx, {
	type: "line",
	data: {
		labels: ["", "", "", "", "", "", "", "", ""],
		datasets: [
			{
				data: [20, 10, 35, 10, 50, 22, 45, 60, 20, 20],
				backgroundColor: ["rgba(29, 78, 216, 0.15)", "rgba(29, 78, 216, 0.1)"],
				borderColor: "#1D4ED8",
				borderWidth: 3,
				pointBackgroundColor: "#ffffff",
				fill: true,
				strokeColor: "#6366F1",
				tension: 0.5,
				pointRadius: 0,
			},
		],
	},
	options: {
		plugins: {
			legend: {
				display: false,
				align: "end",
				labels: {
					display: false,
					usePointStyle: true,
					pointStyle: "circle",
				},
			},
		},
		elements: {
			point: {
				radius: 4,
			},
		},
		generateLabels: {
			hidden: true,
		},
		legend: {
			display: false,
		},
		scales: {
			y: {
				grid: {
					display: false,
					drawBorder: false,
					drawOnChartArea: false,
				},
				beginAtZero: true,
				ticks: {
					display: false,
				},
			},
			x: {
				grid: {
					display: false,
					drawBorder: false,
					drawOnChartArea: false,
				},
			},
		},
	},
});

// Main Chart Script
const chartMain = new Chart(document.getElementById("my-chart-main"), {
	type: "line",
	data: {
		labels: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"June",
			"July",
			"Aug",
			"Sep",
			"Oct",
		],
		datasets: [
			{
				borderColor: "#1D4ED8",
				data: [8, 40, 22, 35, 25, 0, 45, 32, 50, 40, 30, 20, 60, 40, 60, 50],
				fill: false,
				borderWidth: 4,
				pointBorderWidth: "0",
				backgroundColor: "#171717",
				lineTension: 0.5,
				pointHoverRadius: "0",
				pointStyle: "rectRounded",
				pointBorderWidth: "0",
				pointBorderColor: "#ffffff",
				pointRadius: "0",
				pointHoverRadius: "0",
				pointHoverBorderWidth: "0",
				pointHoverBackgroundColor: "#171717",
				pointHoverBorderColor: "#FFFFFF",
			},
			{
				borderColor: "#E2E8F0",
				data: [0, 60, 40, 60, 18, 40, 2, 35, 25, 60, 45, 32, 50, 40, 30],
				fill: false,
				borderWidth: 4,
				pointBorderWidth: "0",
				backgroundColor: "#171717",
				lineTension: 0.5,
				pointHoverRadius: "0",
				pointStyle: "rectRounded",
				pointBorderWidth: "0",
				pointBorderColor: "#ffffff",
				pointRadius: "0",
				pointHoverRadius: "0",
				pointHoverBorderWidth: "0",
				pointHoverBackgroundColor: "#171717",
				pointHoverBorderColor: "#FFFFFF",
			},
		],
	},
	options: {
		maintainAspectRatio: false,
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			hover: {
				mode: "nearest",
				intersect: true,
			},
			tooltip: {
				mode: "index",
				intersect: false,
				titleFont: {
					size: 12,
				},
				bodyFont: {
					size: 20,
				},

				displayColors: false,

				padding: 20,
				width: 40,
				backgroundColor: "#ffffff",
				pointRadius: "0",
				caretSize: 0,
				caretPadding: 12,
				boxWidth: 20,
				titleColor: "#A3A3A3",
				bodyColor: "#171717",
				callbacks: {
					title: function (tooltipItem, data) {
						return "Net profit";
					},
					label: function (tooltipItem, data) {
						return "$57,400";
					},
					labelPointStyle: function () {
						return {
							pointStyle: "circle",
							pointRadius: "0",
							padding: 0,
						};
					},
				},
			},
		},
		scales: {
			beginAtZero: false,
			y: {
				grid: {
					display: true,
					drawBorder: false,
				},
				ticks: {
					stepSize: 20,
					beginAtZero: false,
					font: {
						size: 16,
						lineHeight: 2,
					},
					callback: function (value, index, values) {
						if (value == 0) {
							return "20k    ";
						}
						return value + 20 + "k    ";
					},
				},
			},
			x: {
				grid: {
					display: false,
				},
				ticks: {
					font: {
						size: 16,
						lineHeight: 2,
					},
				},
			},
		},
	},
});

// Chart dropdown
document.querySelector(".dropdown-one").addEventListener("click", function () {
	document.querySelector(".dwy").classList.toggle("openit");
});
// Chart dropdown
document.querySelectorAll(".cr").forEach((e) => {
	e.addEventListener("click", function (e1) {
		document.querySelector(".dropbtn-one1").textContent = e1.target.textContent;
	});
});

// Table interaction
function showDiv() {
	const val = document.getElementById("handleClick").style.display;
	console.log(val);
	if (val === "block") {
		document.getElementById("handleClick").style.display = "none";
		return;
	}
	document.getElementById("handleClick").style.display = "block";
}

// Overview Interaction
function toggleOverview() {
	document.querySelector(".overview-interaction").classList.toggle("hidden");
}
