function create (n) {

    let container = document.querySelector(".container");

    container.innerHTML="";

    let containerWidth= getComputedStyle(container).getPropertyValue("width");
    let squareWidth=`calc(${containerWidth}/${n})`;
    let squareHeight=`calc(${containerWidth}/${n})`;


    for (let i=0; i<n*n; i++){


    let item=document.createElement("div");
    item.classList.add("item");
    item.style.width=squareWidth;
    item.style.height=squareHeight; 
    // let red= Math.floor(Math.random()*256);
    // let green= Math.floor(Math.random()*256);
    // let blue= Math.floor(Math.random()*256);
    // let opacity=0.1;
    

    item.addEventListener("mouseenter", () =>{
       
        // if (opacity<=1){
            
        // progressiveDarkening(red, green, blue, opacity, item);
        // opacity+=0.1;

        // }

        item.style.backgroundColor="blue";
    })

    container.appendChild(item);
    
    }

}


create(75);


let button = document.querySelector(".reset");

button.addEventListener("click", ()=>{

    
    let numSquares= prompt("Please enter the size of the grid (1-100)");
    

     if(numSquares !=null && numSquares>0 && numSquares<=100){
        
        create(numSquares);

     }
    
  })


// function progressiveDarkening(red, green, blue, opacity, item){


//         item.style.backgroundColor=`rgb(${red} ${green} ${blue} / ${opacity})`;

//     }








 

   





