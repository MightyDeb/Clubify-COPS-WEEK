const faqs=document.querySelectorAll(".question_answer");
faqs.forEach(function(element){
  element.addEventListener('click',function(e){
    const data= e.currentTarget;
    let x=data.innerHTML;
    let result = x.includes("add");
    if(result){
      const arr=x.split("add");
      data.innerHTML=arr[0]+"remove"+arr[1];
    }else{
      const arr=x.split("remove");
      data.innerHTML=arr[0]+"add"+arr[1];
    }
    data.classList.toggle("show-text");
  })
}
)
