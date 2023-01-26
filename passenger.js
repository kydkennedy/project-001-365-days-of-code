//function for incrementing the passenger count by 1 each time the button with id "add-Passenger" is clicked
//when the button is clicked, the function will add 1 to the passenger count
//the passenger count display will be updated to reflect the new passenger count value where id="passenger-count"

function addPassenger() {
    //get current passenger count value
    let passengerCount = document.getElementById("passenger-count").innerHTML;
    //increment passenger count by 1 on click for button with id="add-Passenger"
    passengerCount++;
    //update passenger count display to reflect new passenger count value
    document.getElementById("passenger-count").innerHTML = passengerCount;

}