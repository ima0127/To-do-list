
    const boton = document.querySelector(".fa-plus");
    const ul = document.querySelector("ul");
    const empty = document.querySelector(".empty");
    const input = document.querySelector("#entrada");
    boton.addEventListener("click", function(){

        if(input.value !== ""){
            crearElementos();
        }
        input.value = "";
        input.focus();
    })
        
    
    
 function crearElementos(){
     empty.classList.add("empty-close")
     const text = input.value;

     const li =  document.createElement("li");
     const p = document.createElement("p");
     p.textContent = text;
     li.appendChild(p);
     li.appendChild(addDeleteBtn());
     ul.appendChild(li);
 }

 function addDeleteBtn(){
     const btnDelete = document.createElement("button");

     btnDelete.textContent = "x";
     btnDelete.classList.add("styleDelete");

     btnDelete.addEventListener("click", (e) =>{
         const item = e.target.parentElement;
         ul.removeChild(item);

         const items = document.querySelectorAll("li");

         if(items.length === 0){
             empty.classList.remove("empty-close");
         }
     });
     return btnDelete;
 }






   



    




