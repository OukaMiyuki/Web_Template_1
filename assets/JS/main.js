$(document).ready( () =>{
    $nav = $('.nav'); //get items with nav class
    $toggleCollapse = $('.toggle-collapse'); //get items with toggle-collapse class

    $toggleCollapse.click( ()=> {
        $nav.toggleClass('collapse');
    })
});