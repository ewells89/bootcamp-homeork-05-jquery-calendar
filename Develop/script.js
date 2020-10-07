

$(document).ready(function(){
    console.log("test");

    // Variable Declarations

    var hourBlocks = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];
    var container = $(".container");

    // Display Today's Date using Moment.js
    function getDate(){
        var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
        // console.log(currentDay);
        $("#currentDay").text(currentDay);
    }

    // Create the Daily Planner with Office Hour Blocks
    function displayCalendar(){

        for(var i=0; i < hourBlocks.length; i++){
            var elRow = $("<div>");
            var elHour = $("<div>");
            var elText = $("<textarea>");
            var elSave = $("<div>");

            
            elRow.attr("class", "time-block row");
            elHour.attr("class","hour col-md-1");
            elText.attr("class","col-md-10");
            elSave.attr("class","saveBtn col-md-1");

            elHour.text(hourBlocks[i]);

            container.append(elRow);
            elRow.append(elHour);
            elRow.append(elText);
            elRow.append(elSave);
            

        }   
    }
    getDate();
    displayCalendar();

})