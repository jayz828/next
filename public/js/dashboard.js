/**
 * Created by jasonnatividad on 5/13/17.
 */


(function(){

    var currentDate = new Date();

    // Test dates below
    // var currentDate = new Date(2017, 7,1);


    var listOfMonths = ['January', 'February', 'March', 'April', 'May',
                        'June', 'July', 'August', 'September', 'October',
                         'November', 'December'];

    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];

    // var calendarGrid = ['day-0','day-1','day-3','day-4','day-5','day-6','day-7'];

    var currentMonth = listOfMonths[currentDate.getMonth()];

    var currentDay = weekdays[currentDate.getDay()];

    var currentYear = currentDate.getFullYear();

    var calendarGrids = document.querySelectorAll("#calendar-grid span");


    // var numdays = daysInMonth(1,2017);

    // alert(numdays);

    // alert(firstOfTheMonth);

    getFirstDay();

    updateCalendar(currentMonth, currentYear);



    console.log(calendarGrids);


    // Update page with current month and year

    function updateCalendar(month, year) {

        var monthSpan = document.getElementById('current-month');
        var yearSpan = document.getElementById("current-year");

        monthSpan.innerHTML = month;
        yearSpan.innerHTML = year;


    };

    function getFirstDay() {

        // Place the first of the month.
        var firstOfTheMonth = new Date(currentYear,currentDate.getMonth(), 1);


        var totalDays = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate();

        alert(firstOfTheMonth);

        alert(totalDays);

        var firstDay = weekdays[firstOfTheMonth.getDay()];

        // var placeDay = document.getElementById('day-' + firstOfTheMonth.getDay());
        //
        // placeDay.innerHTML = 1;

        calendarGrids[firstOfTheMonth.getDay()].innerHTML = 1;

        for (var i = 2; i < totalDays  + 1; i++) {
            calendarGrids[firstOfTheMonth.getDay() + i -1].innerHTML = i;
        };




    };



    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    };

    function getNextGoal() {

    };



})();