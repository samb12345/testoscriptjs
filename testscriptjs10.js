
console.log('second try change 10')

var header3 = $('div.announcement-bar')

var header4 = header3

function run(){

    header4.prepend('<div>This is from the github script!!!<div>').css({'background-color': 'blue', 'text-align': 'center'})
}

run()