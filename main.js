const button = document.querySelector("button");
const contaire = document.getElementById("container")
const input = document.querySelector("input");

button.addEventListener("click",(eo) => {
    eo.preventDefault()
    const task = `
    <div class="task">
    <span><i class="fa-solid fa-star icon"></i></span>
    <p class="task-text">${input.value}</p>

    <div>
       <span><i class="fa-solid fa-trash icon"></i></span>
       <span><i class="fa-regular fa-face-angry icon"></i></span> 
    </div>
    
</div>`

 contaire.innerHTML+=task

 input.value="  "

})
contaire.addEventListener("click",(eo) => {
    if (eo.target.className=="fa-solid fa-trash icon"){
        eo.target.parentElement.parentElement.parentElement.remove();
    }

    else if (eo.target.className =="fa-regular fa-face-angry icon"){
      eo.target.style.display="none"

      const heart= `<span> <i class="fa-solid fa-heart"></i> </span> `

     eo.target.parentElement.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.add("finish")              
       eo.target.parentElement.innerHTML+=heart
    }

    else if (eo.target.className=="fa-solid fa-heart"){

    eo.target.parentElement.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.remove("finish")              

    eo.target.style.display="none"
    const adAngry= `<span><i class="fa-regular fa-face-angry icon"></i></span>`
    eo.target.parentElement.parentElement.innerHTML+=adAngry

    }
    else if (eo.target.className == "fa-solid fa-star icon"){
    eo.target.classList.add("orange")

    contaire.prepend(eo.target.parentElement.parentElement)

   }else if(eo.target.className=="fa-solid fa-star icon orange"){
    eo.target.classList.remove("orange");
    contaire.append(eo.target.parentElement.parentElement)

   }
})