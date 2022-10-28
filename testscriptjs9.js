
console.log('second try change 9')

var header = $('div.announcement-bar')

var header1 = header

function run(){

    header1.prepend('<div>This is from the github script!!!<div>').css({'background-color': 'blue', 'text-align': 'center'})
}

run()