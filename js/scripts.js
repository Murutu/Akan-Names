function verifyDayValidity() {
    console.log("Verify day");
    var input= document.getElementById("day").value;
    console.log(input);
    if (!parseInt(input) || parseInt(input) <1 || parseInt (input) > 31) {
        alert("Please input a number between 1 and 31 for day");
        return undefined
    }
}