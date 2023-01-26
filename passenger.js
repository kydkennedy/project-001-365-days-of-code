/*function for incrementing the passenger count by 1 each time the button with id "add-Passenger" is clicked
# when the button is clicked, the function will add 1 to the passenger count
# the passenger count display will be updated to reflect the new passenger count value where id="passenger-count"
*/

function addPassenger() {
    //get current passenger count value
    let passengerCount = document.getElementById("passenger-count").innerHTML;
    //increment passenger count by 1 on click for button with id="add-Passenger"
    passengerCount++;
    //update passenger count display to reflect new passenger count value
    document.getElementById("passenger-count").innerHTML = passengerCount;

};

// need to display day of the month where id="dayNum"
//need to display month where id="month"
//need to display year where id="year"

function showDate(){
    //get current date
    const currentDate = new Date();
    //get day of the month
    let dayNum = currentDate.getDate();
    //get month
    let month = currentDate.getMonth() + 1;
    let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //get year
    let year = currentDate.getFullYear();
    //get day of the week
    let weekDay = currentDate.getDay().toString();
    let weekDayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //display day of the month
    document.getElementById("dayNum").innerHTML = dayNum;

    //display month
    document.getElementById("month").innerHTML = monthName[month];
 
    //display year
    document.getElementById("year").innerHTML = year;

    //display day of the week
    document.getElementById("weekDay").innerHTML = weekDayName[weekDay];

    console.log(dayNum);
}

function showTime(){
    //get current time
    const currentTime = new Date();
    //get hours
    let hours = currentTime.getHours();
    //get minutes
    let minutes = currentTime.getMinutes();
    //display time where id="displayTime"
    document.getElementById("displayTime").innerHTML = hours + ":" + minutes;

}