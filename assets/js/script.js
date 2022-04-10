var events = {}

//Grab current day 
$("#currentDay").text(moment().format("dddd, MMMM Do"));


    // save button was clicked
    $(".saveBtn").click(function() {
        // get form values
        var eventText = $(this).siblings(".description").val().trim();
        console.log(eventText)
        var eventTime = $(this).siblings(".hour").text();
        console.log(eventTime)
        
        //set persistent storage
        localStorage.setItem(eventTime, JSON.stringify(eventText))
    
});
    var loadEvents = function() {
            $("#nine .description").val(localStorage.getItem("9AM"))
            $("#ten .description").val(localStorage.getItem("10AM"))
            $("#eleven .description").val(localStorage.getItem("11AM"))
            $("#twelve .description").val(localStorage.getItem("12PM"))
            $("#one .description").val(localStorage.getItem("1PM"))
            $("#two .description").val(localStorage.getItem("2PM"))
            $("#three .description").val(localStorage.getItem("3PM"))
            $("#four .description").val(localStorage.getItem("4PM"))
            $("#five .description").val(localStorage.getItem("5PM"))
    }
    
loadEvents();


    // if nothing in localStorage, create a new object to track all task status arrays
