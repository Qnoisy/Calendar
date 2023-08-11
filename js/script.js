window.onload = () => {
	window.setInterval(() => {
		const date = new Date();
		const hours = SetTimeFormat(date.getHours());
		const minutes = SetTimeFormat(date.getMinutes());
		const seconds = SetTimeFormat(date.getSeconds());
		const clock = hours + ":" + minutes + ":" + seconds;
		const calendarTime = document.querySelector(".clock");
		calendarTime.innerHTML = clock;

		const PmAm = document.getElementById("pm-am")
		if (hours < 12) { PmAm.innerHTML = "AM"; } else { PmAm.innerHTML = "PM"; }

		const dayToday = document.querySelector(".time__data");
		const day = `${SetDaysOfTheWeek(date.getDay())}, ${SetMonth(date.getMonth())} ${date.getDate()} ${date.getFullYear()}`;
		console.log(day);
		dayToday.innerHTML = day;

	}, 1000)
}

function SetTimeFormat(date) {
	let time = date;
	return (time < 10) ? time = "0" + time : time;
}

function SetDaysOfTheWeek(date) {
	const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	return (daysOfTheWeek[date - 1]);
}

function SetMonth(date) {
	const masMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return (masMonth[date]);
}
