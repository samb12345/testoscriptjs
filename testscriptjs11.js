
const script = document.createElement("script")

script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"

script.type= "text/javascript"

script.onreadystatechange = handler

script.onload = handler

document.getElementsByTagName("head")[0].appendChild(script)

function handler(){

console.log('second try change 11')

var headerq = $('div.announcement-bar')

var headerw = headerq

function run(){

    headerw.prepend('<div>This is from the github script!!!<div>').css({'background-color': 'blue', 'text-align': 'center'})
}

run()
}
