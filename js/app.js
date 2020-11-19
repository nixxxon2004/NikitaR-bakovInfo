console.log("Hello, World!")
// задать переменные / declare a variable
let name = "Nikita Rõbakov";
let age = 16;
let city  =  "Tallinn";
let commentary =  "";   
let drivingLicense = "";
//console.log("Charatcer: ",name,".Age",age,".City:",city);
console.log(`Character: ${name} . Age:${age}. City: ${city}.`)
console.log(`character ${name} ${commentary}`)

if(age < 18) {
    drivingLicense= `${name} is too young to drive a car.`;
} else {
    drivingLicense= `${name} is old to enough to drive a car.`;
}

console.log(drivingLicense);

const html = `
 <ul>
 <li> Name:${name}</li>
 <li> Age:${age}</li>
 <li> City:${city}</li>
 <li> ${drivingLicense}</li>
 </ul>

`;

document.body.innerHTML = html;