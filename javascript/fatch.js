import fetch from "node-fetch";

async function covidInfo(){
 
    const response= await fetch("https://api.covid19api.com/summary")

    const data=await response.json();
    const global =data.Global;
    const allCountries = data.Countries
    const myanmar = allCountries.find(c=> c.Country==="Myanmar")

    console.log("Global :", global , "Myanmar",myanmar);
    
}


covidInfo()


   