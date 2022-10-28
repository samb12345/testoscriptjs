
console.log('second try change 8')

var header = $('div.announcement-bar')

function run(){

    header.prepend('<div>This is from the github script!!!<div>').css({'background-color': 'blue', 'text-align': 'center'})
}

run()