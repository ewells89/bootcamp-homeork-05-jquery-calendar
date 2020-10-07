

$(document).ready(function(){
    console.log("test");

    // Variable Declarations

    var hourBlocks = ["9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM"];
    var container = $(".container");
    var currentTime = moment().format('HH');
        console.log(currentTime);

    // Display Today's Date using Moment.js
    function getDate(){
        var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
        // console.log(currentDay);
        $("#currentDay").text(currentDay);
    }

    // Create the Daily Planner with Office Hour Blocks
    function displayCalendar(){
        for(var i=0; i < hourBlocks.length; i++){
            var elRow = $("<div>").addClass("time-block row");
            var elHour = $("<div>" + hourBlocks[i] + "</div>").addClass("hour col-md-1");
            var elText = $("<textarea>").addClass("col-md-10");
            var elSave = $("<div>").addClass("saveBtn col-md-1");

            // Variable to parse the hourBlock array strings into moment.js format so they can be used for calculations
            var parsedTime = moment(hourBlocks[i], "h a")
                // console.log(parsedTime);

            container.append(elRow);
            elRow.append(elHour);
            elRow.append(elText);
            elRow.append(elSave);

            // Logic to Determine Formatting Based on Current Time
            if(parsedTime >currentTime){
                $(elText).attr("class","past col-md-10");
            }else if(parsedTime === currentTime){
                $(elText).attr("class", "current col-md-10");
            }
            else{
                $(elText).attr("class","future col-md-10");
            } 
        }   
    }

    getDate();
    displayCalendar();

})