function verifyDayValidity() {
    console.log("Verify day");
    var input= document.getElementById("day").value;
    console.log(input);
    if (!parseInt(input) || parseInt(input) <1 || parseInt (input) > 31) {
        alert("Please input a number between 1 and 31 for day");
        return undefined;
    } else {
        return parseInt(input);
    }
}

function verifyDayValidity() {
    console.log("Verify month");
    var input = document.getElementById("month").value;
    console.log (input);
    if (!parseInt(input) || parseInt(input) <1 || parseInt (input) >12) {
        alert(" Please input a number between 1 and 12 for month");
        return undefined;
    } else {
        return parseInt(input);
    }
}

function verifyYearValidity() {
    console.log("Verify year");
    var input = document.getElementById("year").value;
    console.log (input && input.length == 4) {
        return parseInt(input);
    } else {
        alert("Please input a four digit number for year");
        return undefined;
    }
}

function verifyGenderVadility() {
    var input =document.getElementById("gender").value;
    if (input == "m" || input == "f") {
        return input;
    } else {
        alert(" Please input m or f for gender");
        return undefined;
    }
}

function