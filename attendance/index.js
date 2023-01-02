let totalcount=document.getElementById("COUNT")
let saveEL=document.getElementById("save-el")
let c=0
function increment(){
    c=c+1
    totalcount.innerText=c
}
function save(){
    let countstr= c + "-"
    saveEL.innerText += countstr
    totalcount.innerText=0
    c=0
}
let rn=Math.random*6
console.log(rn)
let person={
    name : "Asfia",
    age : 21,
    country : "India"

}
function logData(){
    let ans=person.name + " is " + person.age + " years old and lives in " + person.country
     return ans;
}
logData()