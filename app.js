
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
