// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


function faisal()
{
    var names = document.getElementById("inputName4").value ;


    console.log(names);

    return false;
}