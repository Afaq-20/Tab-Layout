const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")

const html = document.getElementById("html")
const css = document.getElementById("css")
const java = document.getElementById("java")

btn1.addEventListener("click",()=>{
    btn3.style.color = "black"
    btn2.style.color = "black"
    btn1.style.color = "orange"
    html.style.transform = "translate(0px)"
    css.style.transform = "translate(100%)"
    java.style.transform = "translate(100%)"
})
btn2.addEventListener("click",()=>{
    btn1.style.color = "black"
    btn2.style.color = "orange"
    btn3.style.color = "black"
    css.style.transform = "translate(0px)"
    java.style.transform = "translate(100%)"
    html.style.transform = "translate(100%)"
})
btn3.addEventListener("click",()=>{
    btn1.style.color = "black"
    btn2.style.color = "black"
    btn3.style.color = "orange"
    html.style.transform = "translate(100%)"
    css.style.transform = "translate(100%)"
    java.style.transform = "translate(0px)"
})

