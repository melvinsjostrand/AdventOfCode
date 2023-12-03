let lines;
let sum = 0;
let total;
function init(){
readTheFile();
}
window.onload = init();




function readTheFile(){
  //lägger in en fil som man läser av. gör en array av det
    document.getElementById('fileInput').addEventListener('change', (event) => {
        const file = event.target.files[0];
  
        if (file) {
          const reader = new FileReader();
  
          reader.onload = (event) => {
            const content = event.target.result;
  
            lines = content.split('\n');
  
            console.log(lines);
  
            // Call the function to process and sum the numbers
            readFile();
          };
  
          reader.readAsText(file);
        } else {
          console.log('No file selected');
        }
      });

}

function readFile(){
    lines.forEach(string => {
        //lägger alla siffror i en array
        let number = string.match(/\d/g);
  
        if (number) {
          let firstNumber = number[0];
          let lastNumber = number[number.length - 1];
          //gör om så att det är en int och sedan addera ihop dem.
          total = parseInt(firstNumber + lastNumber);
          
          sum += total;
          console.log("String " + string);
          console.log("First number " + firstNumber);
          console.log("Last number " + lastNumber);
          console.log("total " + total);
        } else { 
          console.log("No numbers found in the string: " + string);
        }
      });
      placeItem();
      console.log("totala summan av alla " + sum);
      
}

function placeItem(){
let totalPlace = document.getElementsByTagName("div")[0];

totalPlace.innerHTML = "totala summan av alla " + sum;
}