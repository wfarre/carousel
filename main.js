const items = document.querySelectorAll(".carousel__item");
let i = 0;

function autoCarousel(){
    if(i<=items.length-1){
        const input2 = items[i].getElementsByTagName("input");
        if(i === 0){
            const input1 = items[items.length-1].getElementsByTagName("input");
            input2[0].checked = true;
            input1[0].checked = false;
        } else{
            const input1 = items[i-1].getElementsByTagName("input");
            // console.log(input2[0]);
            input1[0].checked = false;
            input2[0].checked = true;
        }
        i++; 
    }
    if(i> items.length-1){
        i=0;
    }
    
}

items.forEach((item) => {
    item.addEventListener("click", (event)=>{
        const txt = event.target.className
        i= txt.substring(txt.length-1)-1;
        console.log(i);
    });
});

    setInterval(autoCarousel, 3000);
   

