$(document).ready(function(){
    console.log("test");

    // Variable Declarations

    var hourBlocks = ["9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM"];
    var container = $(".container");
    var currentTime = moment().format('HH');
        console.log("CurrentTime:" + currentTime);
   

    // FUNCTIONS

    // Display Today's Date using Moment.js
    function getDate(){
        var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');

        console.log("currentDay:" + currentDay);
        $("#currentDay").text(currentDay);
    }

    // Create the Daily Planner with Office Hour Blocks
    function displayCalendar(){
        for(var i=0; i < hourBlocks.length; i++){
            var elRow = $("<div>").addClass("time-block row");
            var elHour = $("<div>" + hourBlocks[i] + "</div>").addClass("hour col-md-1");
            var elText = $("<textarea>").addClass("col-md-10");
            var elSave = $("<button>").addClass("saveBtn col-md-1");
            var elSaveIcon = $("<i>").addClass("far fa-save")

            // Variable to parse the hourBlock array strings into moment.js format so they can be used for calculations
            var parsedTime = moment(hourBlocks[i], "h m a")  
                console.log(parsedTime);

            // Append elements 
            container.append(elRow);
            elRow.append(elHour);
            elRow.append(elText);
            elRow.append(elSave);
            elSave.append(elSaveIcon);

            // Logic to Determine Formatting Based on Current Time
            if(parsedTime < currentTime){   // FEEDBACK REQUEST: parsing is giving me a date/time stamp from moment but the if statement logic doesn't seem to be calculating correctly. Not sure why this is happening.
                $(elText).attr("class","past col-md-10");
            }else if(parsedTime === currentTime){
                $(elText).attr("class", "current col-md-10");
            }
            else{
                $(elText).attr("class","future col-md-10");
            } 
        

        }   
        getTasks();

        // Store Tasks Entered by User to Local Storage
        function storeTask(){
            localStorage.setItem("tasks", JSON.stringify({
                hour: $(elHour).text(),         // FEEDBACK REQUEST: my hour selector logic is incorrect. this is causing issues with getTasks(). I couldn't figure this out.
                task: $("textarea").val()
            }));
        }

        // Retrieve Tasks Entered by User from Local Storage
        function getTasks(){
            if (localStorage.getItem("tasks") !== null) {
                var tasks = JSON.parse(localStorage.getItem("tasks"));
               
                if ($(elHour).text() === tasks.hour) {
                    // $(elHour).text(tasks.hour);
                    $("textarea").text(tasks.task);         // FEEDBACK REQUEST: the task is being assigned to every slot bc my storeTask() selector is wrong. I couldn't figure this out.
                }
            };
        }

        // Event Listener for Clicks
        $(".saveBtn").click(function(){
            console.log("click!");
            
            storeTask();
        })



    }


    getDate();

    displayCalendar();

})