// Es6 fat arrow function
// function number (){
//     return 10;
// }
// function number (n){
//     return 10;
// }

// let number = () => 10;
// let number = () => console.log(10);
// let number = () => 10;
  
// number()

 var javaScript = {
    name: "JavaScript",
    libraries: ["React", "Angular", "Vue"],
    printLibraries: function (){
        // 
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`))
    }
}

javaScript.printLibraries(); 
