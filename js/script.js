window.onload = () => {
	window.setInterval(() => {
		const date = new Date();
		const hours = MySetTimeFormat(date.getHours());
		const minutes = MySetTimeFormat(date.getMinutes());
		const seconds = MySetTimeFormat(date.getSeconds());
		const clock = hours + ":" + minutes + ":" + seconds;
		const calendarTime = document.querySelector(".clock");
		calendarTime.innerHTML = clock;

		const PmAm = document.getElementById("pm-am")
		if (hours < 12) { PmAm.innerHTML = "AM"; } else { PmAm.innerHTML = "PM"; }

		const dayToday = document.querySelector(".time__data");
		const day = `${MySetDaysOfTheWeek(date.getDay())}, ${MySetMonth(date.getMonth())} ${date.getDate()} ${date.getFullYear()}`;
		console.log(day);
		dayToday.innerHTML = day;

	}, 1000)
}

const date = new Date();
const calendarMonthYear = document.querySelector(".calendar__month");
const monthYear = `${MySetMonth(date.getMonth())} ${date.getFullYear()}`;
calendarMonthYear.innerHTML = monthYear;

const buttonUp = document.querySelector(".up");
const buttonDown = document.querySelector(".down");
buttonUp.addEventListener("click", () => {
	date.setMonth((date.getMonth()) - 1)
	calendarMonthYear.innerHTML = `${MySetMonth(date.getMonth())} ${date.getFullYear()}`;
})
buttonDown.addEventListener("click", () => {
	date.setMonth((date.getMonth()) + 1)
	calendarMonthYear.innerHTML = `${MySetMonth(date.getMonth())} ${date.getFullYear()}`;
})

function MySetTimeFormat(date) {
	let time = date;
	return (time < 10) ? time = "0" + time : time;
}

function MySetDaysOfTheWeek(date) {
	const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	return (daysOfTheWeek[date - 1]);
}

function MySetMonth(date) {
	const masMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return (masMonth[date]);
}
