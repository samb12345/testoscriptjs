
console.log('second try change')

const header = $('header.site-header').parent()

header.prepend('<div>This is from the github script!!!<div>').css({'background-color': 'blue', 'text-align': 'center'})