$(function(){
  var rows,columns,color,flag;
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

    //                 $('#brush').on('click', function(){
    //                     $('td').hover(function () {
    //    $(this).css("background-color", color);
    // });


                    //  })

                     $('#brush').on('click', function(){
                       flag =1;
                             if ( flag == 1 ) {
                             $('td').hover(function () {
                                 $(this).css("background-color", color);
                             flag = 2;
                             console.log('1a');
                         });
                             }

                             else {
                             //$(this).css("background-color", 'red');
                             $('#pixel_canvas').on('click','td',function(){
                               $(this).css('background-color',color);
                               });
                             flag = 1;
                             console.log('1');
                         }
                           });







                     // to paint the whole canvas with a color
                     $('#background').on('click', function(){                      
                     $('#pixel_canvas').css("background-color", color);
                     });

  });
