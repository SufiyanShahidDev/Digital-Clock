
function showDateTime() {
    let now = new Date();

    let days = [
        "Sun",
        "Mon",
        "Tues",
        "Wed",
        "Thur",
        "Fri",
        "Sat"
    ];

    let dayName = days[now.getDay()];

    let months = [
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
        "Nov",
        "Dec"
    ];

    monName = months[now.getMonth()];

    currentDate = now.getDate();
    currentYear = now.getFullYear();

    document.getElementById("date").innerHTML = `${currentDate} ${monName}, ${dayName} ${currentYear}`;

    let hours = now.getHours() % 12;
    let min = now.getMinutes();
    let sec = now.getSeconds();


};

showDateTime();

setInterval(showDateTime, 1000);