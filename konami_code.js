const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  
  let index = 0;
  document.body.addEventListener("keydown", (e) => {
    const key = e.key;
    console.log(key)
    
    if (key === codes[index]){
      index++;
      console.log(`index ${index}`)
    
      if (index === codes.length){
        alert("Congrats!");
        index = 0;
              console.log(`indexx ${index}`)
      }

    }
    else{
      index = 0;
      console.log(`index ${index}`)


    }
  })
  
}
  
  
  // function onKeyHandler(e){
    
  // }
