
const script = document.createElement("script")

script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"

script.type= "text/javascript"

script.onreadystatechange = handler

script.onload = handler

document.getElementsByTagName("head")[0].appendChild(script)

function handler(){

console.log('second try change 37')

var headerq = $('div.announcement-bar')

var headerw = headerq

var ptags = $('h2')

var tags2 = ptags

var heading3 = $('h3')

var productdescription = $('div.product__description')


array1 = productdescription.children('h3')

var maptest = $.map(array1, function(item, index){
    return `<div>${item.innerHTML}</div>`
});

var tabheadings = maptest.join('')


console.log(tabheadings)

function run(){


   var newdiv = productdescription.before(`<div>${tabheadings}</div>`).css({'background-color': 'green', 'color': 'red', 'display': 'flex'})

newdiv.css(({'background-color': 'blue', 'color': 'orange', 'display': 'flex'}))
    //productdescription.children().remove()
}

run()
}
