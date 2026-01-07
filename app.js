
function showDateTime() {
    let now = new Date();
    // console.log(now);

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
    // console.log(dayName);

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

    let monName = months[now.getMonth()];
    // console.log(monName);

    let currentDate = now.getDate();
    let currentYear = now.getFullYear();

    document.getElementById("date").innerHTML = `${currentDate} ${monName}, ${dayName} ${currentYear}`;

    // let hours = now.getHours();

    let hours = now.getHours() % 13;
    let min = now.getMinutes();
    let sec = now.getSeconds();

    document.getElementById("time").innerHTML = `${hours}:${min}:${sec}`;

};

showDateTime();

setInterval(showDateTime, 1000);