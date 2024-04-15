const faqs=document.querySelectorAll(".question_answer");
faqs.forEach(function(element){
  element.addEventListener('click',function(e){
    const data= e.currentTarget;
    data.classList.toggle("show-text");
  })
}
)
