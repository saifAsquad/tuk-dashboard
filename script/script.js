let notification = document.getElementById("notification");
let flag = true;
const dropdownHandler = () => {
	if (flag) {
		notification.classList.remove("hidden");
		flag = false;
	} else {
		flag = true;
		notification.classList.add("hidden");
	}
};
// Progress bar
// Delivered
var i = 0;
if (i == 0) {
	i = 1;
	let elem = document.getElementById("delivered");

	let text = document.getElementById("percentageDelivered");
	var width = 0;
	var id = setInterval(frame, 30);
	function frame() {
		if (width >= 50) {
			i = 0;
		} else {
			width++;
			elem.style.width = width + "%";
			text.innerHTML = width + "%";
		}
	}
}
// Reported
var a = 0;
if (a == 0) {
	a = 1;
	var elem = document.getElementById("reported");
	let text = document.getElementById("percentageReported");
	var width = 0;
	var id = setInterval(frameTwo, 30);
	function frameTwo() {
		if (width >= 80) {
			a = 0;
		} else {
			width++;
			elem.style.width = width + "%";
			text.innerHTML = width + "%";
		}
	}
}
// Ordered
var b = 0;
if (b == 0) {
	b = 1;
	var elem = document.getElementById("Ordered");
	let text = document.getElementById("percentageOrdered");
	var width = 0;
	var id = setInterval(frameTwo, 30);
	function frameTwo() {
		if (width >= 43) {
			b = 0;
		} else {
			width++;
			elem.style.width = width + "%";
			text.innerHTML = width + "%";
		}
	}
}

const myBarChart = new Chart(document.getElementById("chartjs-1"), {
	type: "bar",
	data: {
		labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		datasets: [
			{
				label: "Project 1",
				barThickness: 9,
				borderRadius: 25,
				fill: false,
				backgroundColor: "#3B82F6",
				data: [60, 70, 80, 40, 60, 80, 70, 65, 50],
			},
			{
				label: "Project 2",
				barThickness: 9,
				borderRadius: 25,
				fill: false,
				backgroundColor: "#BFDBFE",
				fillColor: "red",
				data: [80, 90, 100, 60, 80, 90, 95, 100, 85],
			},
			{
				label: "Project 3",
				barThickness: 9,
				borderRadius: 25,
				fill: false,
				backgroundColor: "#1D4ED8",
				data: [50, 60, 70, 60, 40, 70, 60, 50, 40],
			},
		],
	},
	options: {
		// responsive: true,
		// mantainAspectRatio: true,
		plugins: {
			tooltip: {
				padding: 20,
				backgroundColor: "#3B82F6",
				usePointStyle: true,
				caretSize: 5,
				caretPadding: 12,
				boxWidth: 20,
				callbacks: {
					labelPointStyle: function () {
						return {
							pointStyle: "circle",
							padding: 10,
						};
					},
				},
			},

			legend: {
				display: false,
			},
		},
		scales: {
			y: {
				ticks: {
					// forces step size to be 50 units
					color: "#9CA3AF",

					font: {
						size: 12,
						lineHeight: 2,
					},

					stepSize: 20,
				},
				grid: {
					display: false,
				},
			},
			x: {
				ticks: {
					color: "#9CA3AF",
				},
				grid: {
					display: false,
				},
			},
		},
		legend: {
			position: false,
		},
	},
});

let toggler = document.getElementById("svgIcon");
function tableInteract(element) {
	var single = element.parentElement.parentElement;
	// var toggler=
	element.classList.toggle("border");
	// var check = element.nextElementSibling;
	single.classList.toggle("bg-blue-100");
	// toggler.classList.toggle("border");-
}

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

// Table checkbox
const ele = document.querySelectorAll(".check-func");
document.querySelector(".check-main").addEventListener("change", (e) => {
	if (e.target.checked == true) {
		ele.forEach((e) => {
			e.checked = true;
		});
		return;
	}
	ele.forEach((e) => {
		e.checked = false;
	});
});

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
