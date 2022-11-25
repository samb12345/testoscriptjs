
const script = document.createElement("script")

script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"

script.type= "text/javascript"

script.onreadystatechange = handler

script.onload = handler

document.getElementsByTagName("head")[0].appendChild(script)



function handler(){

    $('head').append('<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/samb12345/testoscriptjs/script9.css">');

console.log('second try change 71')

var headerq = $('div.announcement-bar')

var headerw = headerq

var ptags = $('h2')

var tags2 = ptags

var heading3 = $('h3')



var productdescription = $('div.product__description')


array1 = productdescription.children('h3')

var maptest = $.map(array1, function(item, index){
    if(index==0){
         return `<div class="tabs__toggle is-active">${item.innerHTML}</div>`
        } else {
            return `<div class="tabs__toggle">${item.innerHTML}</div>`
        }

});




var tabheadings = maptest.join('')


array2 = productdescription.children('p')

var maptest2 = $.map(array2, function(item, index){
    if(index==0){
       return `<div class="tabs__content is-active"><div class="tabs__title">${item.innerHTML}</div></div>`
    } else {
        return `<div class="tabs__content"><div class="tabs__title">${item.innerHTML}</div></div>`
    }
});




var tabcontent = maptest2.join('')


var tabheadingdiv = `<div class="tabs"><div class="tabs__head">${tabheadings}</div><div class="tabs__body">${tabcontent}</div></div>`



function run(){


    
    productdescription.replaceWith(tabheadingdiv)
    
    console.log(tabheadingdiv)
  
}

run()



//tabs functionality


let tabs = document.querySelectorAll('.tabs__toggle'),
contents = document.querySelectorAll('.tabs__content');

tabs.forEach((tab,index) => {
    tab.addEventListener('click', ()=>{
        contents.forEach((content)=>{
            content.classList.remove('is-active');
        })
        tabs.forEach((tab)=>{
            tab.classList.remove('is-active');
        })

        contents[index].classList.add('is-active')
        tabs[index].classList.add('is-active')

    })
})


//tabs functionality




}
