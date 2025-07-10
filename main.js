let slide = document.getElementsByClassName("slide");
let slideContainer = document.querySelector(".slide-container")
let container = document.querySelector(".container");
let pre = document.querySelector(".pre");
let next = document.querySelector(".next");
let dot = document.getElementsByClassName("dot");
var slideIndex = 1;
showSlide(slideIndex);
slideContainer.addEventListener('mouseover',()=>
{
    container.classList.add("container-background");
})
pre.addEventListener('mouseover',()=>
{
    container.classList.add("container-background");
})
next.addEventListener('mouseover',()=>
{
    container.classList.add("container-background"); 
})
slideContainer.addEventListener('mouseout',()=>
{
    container.classList.remove("container-background");
})
function selectDot(n)
{
    for(let i = 0 ; i < dot.length;i++)
    {
        dot[i].classList.remove("dot-active");
    }
    console.log(dot[n]);
    dot[n - 1].classList.add("dot-active");
    for(let i = 0 ; i < slide.length;i++)
    {
        slide[i].classList.add("hide");
    }
    slide[n - 1].classList.remove("hide");
    slideIndex = n  ;
}
function controlling(n)
{
    slideIndex += n ;
    showSlide(slideIndex);
}
function showSlide(n)
{
    if(n > slide.length)
    {
        slideIndex = 1 ;
    }
    if(n < 1)
    {
        slideIndex = slide.length;
    }
    for(let i = 0 ; i < slide.length;i++)
    {
        slide[i].classList.add("hide");
        dot[i].classList.remove("dot-active")
    }
    slide[slideIndex - 1].classList.remove("hide");
    dot[slideIndex - 1].classList.add("dot-active");
}