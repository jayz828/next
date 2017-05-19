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



    // START XML REQUEST

    var xhr = new XMLHttpRequest();
    xhr.open("GET","../js/sample.json",true);
    xhr.responseType = "text";
    xhr.send();

    xhr.onload = function() {
        if (xhr.status === 200) {
            var myStuff = JSON.parse(xhr.responseText);

        }
        console.log(myStuff);
        getNextGoal(myStuff);
    }

    //
    //         for (i = 0; i <myStuff.presidents.length; i++) {
    //             console.log(myStuff.presidents[i].first);
    //             console.log(myStuff.presidents[i].last);
    //             console.log(myStuff.vicepresidents[i].first);
    //             console.log(myStuff.vicepresidents[i].last);
    //         }

     // END REQUEST
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

    function getNextGoal(data) {
        // console.log(data["May"]["day"]["1"]);

        var goal = 130;

        var total = 0
        var keyTotal = 0;


        // iterate through the days key in the month
        // var data = {a: 1, b: 2};
        for (var key in data["May"]["day"]) {
            if (data["May"]["day"].hasOwnProperty(key)) {
                var val = data["May"]["day"][key];
                total += val;
                keyTotal +=1;
            }
        }

        console.log(total);
        console.log(keyTotal);
        keyTotal += 1;
        var targetGoal = (130 * keyTotal) - total.toFixed(2);
        console.log(targetGoal.toFixed(2));

        // var targetGoal = 130 * keyTotal;
        // console.log(total);


    };


})();