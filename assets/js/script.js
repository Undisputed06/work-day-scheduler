
//Grab current day 
$("#currentDay").text(moment().format("dddd, MMMM Do"));

$(document).ready(function() {
    loadEvents()
})
    // save button was clicked
    $(".saveBtn").click(function() {
        // get form values
        var eventText = $(this).siblings(".description").val().trim();
        // console.log(eventText)
        var eventTime = $(this).siblings(".hour").text();
        // console.log(eventTime)
        
        //set persistent storage
        localStorage.setItem(eventTime, eventText)

        
    
});
    //Grab values from local storage and display 
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

    //Change time block based off of time of event
    var colorPastPresentFuture = function() {
        var currentHour= moment().hour();

        //Grab hour value. strip off AM and PM to compare to current hour
        $(".time-block").each(function() {
            var eventHour = parseInt($(this).children(".hour")
            .text()
            .replace("AM","")
            .replace("PM",""))
            
            //test eventHour var
            // console.log(eventHour)
            
            
            //If hours is less than 9 increase value by 12 for military time
            if (eventHour < 9) {
                eventHour += 12
            }


            if (eventHour < currentHour){
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else if (eventHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present")
                $(this).removeClass("future")
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present")
                $(this).addClass("future")
            }

        })
        
     


    }

colorPastPresentFuture();
