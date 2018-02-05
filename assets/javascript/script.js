$(document).ready(function() {
    var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length - 9, 9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        }
    };
    var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");

    //Add a single click listener to all of the #numbers a, except for #clear or #clearall that:
    $("#numbers > a").not("#clear,#clearall").click(function() {

        //Takes the .html() of the number button and appends that to number.
        number += $(this).text();

        //Sets the .text() of totaldiv to number.
        totaldiv.text(number);

        // Call testNumLength, passing in number as the parameter.
        testNumLength(number);
    });
});