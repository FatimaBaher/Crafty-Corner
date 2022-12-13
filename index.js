//grabbing elements
const createBtn =document.querySelector('#create-btn');

//Adding Event Listeners
createBtn.addEventListener(()=>{

})

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

