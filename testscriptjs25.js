
const script = document.createElement("script")

script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"

script.type= "text/javascript"

script.onreadystatechange = handler

script.onload = handler

document.getElementsByTagName("head")[0].appendChild(script)

function handler(){

console.log('second try change 25')

var headerq = $('div.announcement-bar')

var headerw = headerq

var ptags = $('h2')

var tags2 = ptags

var heading3 = $('h3')

var productdescription = $('div.product__description')


array1 = productdescription.children('h3')

var maptest = $.map(array1, function(item, index){
    return item
});

console.log(maptest)

function run(){

    

    headerw.prepend('<div><div> <button> Tab 1 </button> <button> Tab 2 </button> <button> Tab 3 </button> <button> Tab 4</button> </div> <div> Tab 1: content </div> <div> Tab 2: content </div> <div> Tab 3: content </div> <div> Tab 4: content </div> </div>').css({'text-align': 'center'})

    productdescription.prepend(`<div>${maptest}</div>`)

};

run()
}
