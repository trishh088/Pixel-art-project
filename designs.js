'use strict';

const colorPicker = document.getElementById('colorPicker');
const form = document.getElementById("sizePicker");
const table = document.getElementById('pixel_canvas');
let rows;
let columns;
let color;
var grid = '';


//When size is submitted by the user, call makeGrid()
function makeGrid(row, columns) {

  for (var i = 0; i < rows; i++) {
    grid += `<tr>`;
    for (var j = 0; j < columns; j++) {
      grid += `<td>&nbsp;</td>`;
    }
    grid += `</tr>`;
  }
  //console.log(grid);
  table.innerHTML = grid;
  addListeners();
  //event.preventDefault();

}

function updateColorPicker(event) {
  color = document.getElementById("colorPicker").value;

}

function updateBoxColor(event) {
  var box = document.getElementById(this.id);
  box.style.backgroundColor = color;
}

function addListeners() {
  var boxes = document.getElementsByTagName("td");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", updateBoxColor, false);
  }
}

form.addEventListener("submit", function(event) {
	event.preventDefault();
	  rows = document.getElementById('input_height').value;
	  columns = document.getElementById('input_width').value;
	  makeGrid(rows, columns);
}
, false);

colorPicker.addEventListener("change", updateColorPicker, false);



// adding a single column
      function addRow(){
        $('tr').append('<td>');

      }

      $('#add_row').on('click',function(){
            addRow();
          });



                $('#refresh').on('click',function(){
var refresh= parseInt(rows,columns);
           grid = '';
          makeGrid(refresh);
        });

        function addColumn(){
          // $('td').append("</td>&nbsp;<tr><td>&nbsp;</td>");
        }
        console.log(addColumn);

                $('#add_column').on('click',function(){
                  // rows = $('#input_width').val()


                   var newcolumns =  '';

                  makeGrid(newcolumns,columns);
                   addColumn();

                    });
