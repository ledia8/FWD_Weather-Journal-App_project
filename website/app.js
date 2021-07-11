/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+ 1+'.'+ d.getDate()+'.'+ d.getFullYear();

const apiKey = "bc588237d60453c472a120f03732c6bd";

const generatButton = document.getElementById("generate");
generatButton.addEventListener('click', async ()=>{
    const zipCodeValue = document.getElementById("zip").value;//querySelector("#zip").vlue
    const feelings = document.getElementById("feelings").value;
    if(!zipCodeValue){
        alert("Enter Zip code!");
    }
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCodeValue}&appid=${apiKey}&units=metric`);
    const data = await res.json();
    const temp = data.main.temp;
    console.log(temp);

    await fetch('/saveprojectData', {
        method:"POST",
        credentials:"same-origin",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({
            date : newDate,
            temp: temp,
            feelings: feelings
        })
    });


});
// const data2 = await res2.JSON();
// console.log(data2);