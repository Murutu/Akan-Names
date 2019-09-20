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

function calculateAkanName() {
    document.getElementById("result").innerText = "";
    console.log("Calculating Akan");
    var day = checkVadility();
    if (!day) {
        console.log("day is invalid")
        return;
    }
}

var month =verifyMonthValidity();
if (!month) {
    console.log("month is ivnalid");
    return;
}

var year =checkYearValidity();
if (!month) {
    console.log("year is invalid");
    return;
}

var gender =checkGenderVadility();
if (!gender) {
    console.log("gender is invalid");
    return;
}
console.log("Day",day,"Month",month,"Year",year,"Gender", gender);

var cc = Math.floor(year/100);
var yy = year % 100;
var names = {
    m: {
        0: "Kwasi",
        1: "Kwadwo",
        2: "Kwabena",
        3: "Kwaku",
        4: "Yao",
        5: "Kofi",
        6: "Kwamena",
      },
      f: {
          0: "Akosua",
          1: "Adwoa",
          2: "Abena",
          3: "Akua",
          4: "Yaa",
          5: "Afua",
          6: "Amma",
    }
} ;

var dayOfWeek =
((Math.floor(cc / 4)-(2 * cc)-1) + (Math.floor(5 * yy / 4)) + Math.floor ((26 * (month + 1)) / 10) + day) % 7;
console.log("day of week is", dayOfWeek);
var result = names[gender][dayOfWeek]
document.getElementById("result").innerText="Akan name is:" + result;
