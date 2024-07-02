async function get_data() {
    
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data);
    console.log(data["slip"]);
    console.log(data["slip"]["id"]);
    console.log(data["slip"]["advice"]);
    document.getElementById("texto").innerHTML= data["slip"]["advice"];
    //consejo Object.keys(object1)[0]
    document.getElementById("consejo").innerHTML= Object.keys(data["slip"])[1].toUpperCase() + " #"+ (data["slip"]["id"]).toString();
  }

get_data();