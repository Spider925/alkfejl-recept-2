/*console.log( $('li'))
console.log( $('[class|=col]') )
console.log( $('.list-group > .list-group-item') )
console.log( $('.list-group').children('.list-group-item') )
console.log( $('.list-group > .list-group-item:nth-child(1)') )
console.log( $('[id]') ) */

/*const $li = $('.list-group-item').eq(2)
console.log( $li.parent().prev().contents().filter(function () {
    return this.nodeType ===3 ;
}).text().trim() ) */

const $panels = $('.panel')
$panels.each(function() {
    const $panel = $(this)
    const db = $panel.find('.list-group-item').length
    $panel.find('.panel-heading span').before(` (${db}) `)
})

$headings = $('.panel-heading')
$headings.on('click', function () {
    const $ul = $(this).next()
    $ul.slideToggle()

})