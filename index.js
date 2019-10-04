//Define process.Argavark as an array, because it literally is.
let arr = process.argv;

//Declaration to access other Javascript files
const hex = require("./hex2rgb");
const rgb = require("./rgb2hex");

//Define an object to access RGB and Hex
const obj={
    rgb: rgb,
    hex: hex,
}

//Let user specify which color scheme they are inputting (rgb or hex) in the 3rd Element
//HSL will always be HSL
let chosenFunction = obj[arr[2]]["converter"];
let hsl = obj[arr[2]]["hsl"];


//Let value1 be the 4th Element, value2 be the 5th Element, and value3 be the 6th Element.
//Doesn't matter even if value2 and value3 is not assigned for hex
let value1 = arr[3];
let value2 = arr[4];
let value3 = arr[5];

//Just to show them which function is being run


//Call the appropriate conversion. Hex converter returned an object, so we have to extract the information out.
if(obj[arr[2]] === hex){
    console.log(`rgb( ${chosenFunction(value1)["r"]}, ${chosenFunction(value1)["g"]}, ${chosenFunction(value1)["b"]} )`)
    console.log(`${hsl(value1)}`)
} else if (obj[arr[2]] === rgb){
    //Values must be in INT!!!
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    value3 = parseInt(value3);
    console.log(`${chosenFunction(value1,value2,value3)}`)
    console.log(`${hsl(value1,value2,value3)}`);
}