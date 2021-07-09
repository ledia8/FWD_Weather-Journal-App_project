/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const apiKey = "bc588237d60453c472a120f03732c6bd";

const generatButton = document.getElementById("generate");
generatButton.addEventListener('click', async ()=>{
    const zipCodeValue = document.getElementById("zip").value;//querySelector("#zip").vlue
    if(!zipCodeValue){
        alert("Enter Zip code!");
    }
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCodeValue}&appid=${apiKey}&units=metric`);
    const data = await res.json();
    const temp = data.main.temp;
    console.log(data);
    console.log(temp);
});