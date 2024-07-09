const btn=document.querySelector(".btn")
const sidebar=document.querySelector(".sidebar")
const bts=document.querySelector(".bts")
console.log(sidebar)
bts.style.display='none'
btn.addEventListener("click",function(){
sidebar.style.display = 'block'
bts.style.display='block'

})
bts.addEventListener("click",function(){
    bts.style.display='none'
    sidebar.style.display="none"
    btn.style.display="block"
})