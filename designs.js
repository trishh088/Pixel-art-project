$(function(){
  var rows,columns,color;
  color=$('#colorPicker').val();

  $('#submit').on('click',function(event){
    event.preventDefault();
    makeGrid(rows,columns);
  });

  function makeGrid(){
      $('#pixel_canvas').children().remove();
      rows=$('#input_width').val();
      columns=$('#input_height').val();
      var i=0;
      while(i<columns){
          $('#pixel_canvas').append('<tr></tr>');
          for(var j=0;j<rows;j++){
              $('tr').last().append('<td></td>');
            }
            i++;
        }
      }

      // for colouring the page
      $('#colorPicker').on('change',function(){
        color=$(this).val();
      });

          $('#pixel_canvas').on('mouseenter','td',function(){
            $(this).toggleClass('active');
          }).on('mouseleave','td',function(){
            $(this).toggleClass('active');
          });
          $('#pixel_canvas').on('click','td',function(){
            $(this).css('background',color);
            });
// to add a single column
            $('#add_column').on('click',function(){
                      $('#pixel_canvas').append('<tr></tr>');
                      var newcolumn=$('#pixel_canvas').children().last();
                      for(var i=0;i<rows;i++){
                          newcolumn.append('<td></td>');
                      }
                      columns++;
                    });

                    //to remove a single column
                    $("#remove_column").on('click',function(){
                        $('#pixel_canvas').children().last().remove();
                        columns--;
                    });

                    // to add a single new row
                    $('#add_row').on('click',function(){
                      $('tr').append('<td></td>');
                      rows++;
                    });

                    // to remove a single row
                    $('#remove_row').on('click',function(){
                      var i=0;
                      var removeRow=$('#pixel_canvas').children().first();
                      while(i<columns){
                        removeRow.children().last().remove();
                        removeRow=removeRow.next();
                        i++;
                      }
                      rows--;
                    });

                    //Start Afresh
                    $('#refresh').on('click',function(){
                        $('#pixel_canvas').empty();
                    });

                    $('#brush').on('click', function(){

        $('td').hover(function () {
       $('#pixel_canvas').css("background-color", color);

         console.log('1');
    });
                      // document.getElementById("pixel_canvas").addEventListener("mouseover", paint());
                      // console.log("it works");
                     })
    //                 var paint = function () {
    //                   // $( this ).find( "#pixel_canvas" ).css('background',color);
    //                   // $('#pixel_canvas').css('background',color);
    //                   $('td').hover(function () {
    //     $('#pixel_canvas').css("background-color", color);
    // });
    //
    //                 }
    });
