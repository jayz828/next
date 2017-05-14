/**
 * Created by jasonnatividad on 5/13/17.
 */


(function(){

    var currentDate = new Date();


    var listOfMonths = ['January', 'February', 'March', 'April', 'May',
                        'June', 'July', 'August', 'September', 'October',
                         'November', 'December'];

    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];

    // var calendarGrid = ['day-0','day-1','day-3','day-4','day-5','day-6','day-7'];

    var currentMonth = listOfMonths[currentDate.getMonth()];

    var currentDay = weekdays[currentDate.getDay()];

    var currentYear = currentDate.getFullYear();





    // alert(firstOfTheMonth);

    getFirstDay();

    updateCalendar(currentMonth, currentYear);



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

        var firstDay = weekdays[firstOfTheMonth.getDay()];

        var placeDay = document.getElementById('day-' + firstOfTheMonth.getDay());

        placeDay.innerHTML = 1;

    };



})();