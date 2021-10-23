

$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".description").val();
       var time = $(this).parent().attr("id");
       localStorage.setItem(value, time);
    })
    function hourLookup() {
        var currentHour = moment().hours();
        $(".time-block").each(function() {
            var hourBlock = parseInt($(this).attr("id").split("-")[1])
            console.log(hourBlock);
            if (hourBlock < currentHour) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
                
            
            } else if (hourBlock === currentHour) {
                $(this).addClass("present");
                $(this).removeClass("future");
                $(this).removeClass("past");
            } else {
                $(this).removeClass("present");
                $(this).addClass("future");
                $(this).removeClass("past");
            }

        })

    }
    hourBlock();

    function 
})