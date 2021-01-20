$(document).ready(function(){

  
  
    $('li').on('click', function(){
      console.log('clickecd');
        var item = $(this).text().replace(/ /g, "-");
        $.ajax({
          type: 'DELETE',
          url: '/delete/' + item,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
    });
  
  });