function init(){
    readTheFile();
    }
    window.onload = init();

    function readTheFile(){
        //lägger in en fil som man läser av. gör en array av det
          document.getElementsByTagName("input")[0].addEventListener('change', (event) => {
              const file = event.target.files[0];
        
              if (file) {
                const reader = new FileReader();
        
                reader.onload = (event) => {
                  const content = event.target.result;
        
                  lines = content.split('\n');
        
                  console.log(lines);
                    lines + 1;
                    console.log(lines);
                  // Call the function to process and sum the numbers
                  //checkAmount();
                };
        
                reader.readAsText(file);
              } else {
                console.log('No file selected');
              }
            });
        }


        function checkAmount(){

            if(red > 12 || green > 13 || blue > 14){

            }
        }

        

        