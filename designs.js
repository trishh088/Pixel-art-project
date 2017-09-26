$(function () {
    var rows, columns, color, flag;
    color = $('#colorPicker')
        .val();

    $('#submit')
        .on('click', function (event) {
            event.preventDefault();
            makeGrid(rows, columns);
        });

    function makeGrid() {
        $('#pixel_canvas')
            .children()
            .remove();
        rows = $('#input_width')
            .val();
        columns = $('#input_height')
            .val();
        var i = 0;
        while (i < columns) {
            $('#pixel_canvas')
                .append('<tr></tr>');
            for (var j = 0; j < rows; j++) {
                $('tr')
                    .last()
                    .append('<td></td>');
            }
            i++;
        }
    }

    // for colouring the page
    $('#colorPicker')
        .on('change', function () {
            color = $(this)
                .val();
        });

    $('#pixel_canvas')
        .on('mouseenter', 'td', function () {
            $(this)
                .toggleClass('active');
        })
        .on('mouseleave', 'td', function () {
            $(this)
                .toggleClass('active');
        });
    $('#pixel_canvas')
        .on('click', 'td', function () {
            $(this)
                .css('background', color);
        });
    // to add a single column
    $('#add_column')
        .on('click', function () {
            $('#pixel_canvas')
                .append('<tr></tr>');
            var newcolumn = $('#pixel_canvas')
                .children()
                .last();
            for (var i = 0; i < rows; i++) {
                newcolumn.append('<td></td>');
            }
            columns++;
        });

    //to remove a single column
    $("#remove_column")
        .on('click', function () {
            $('#pixel_canvas')
                .children()
                .last()
                .remove();
            columns--;
        });

    // to add a single new row
    $('#add_row')
        .on('click', function () {
            $('tr')
                .append('<td></td>');
            rows++;
        });

    // to remove a single row
    $('#remove_row')
        .on('click', function () {
            var i = 0;
            var removeRow = $('#pixel_canvas')
                .children()
                .first();
            while (i < columns) {
                removeRow.children()
                    .last()
                    .remove();
                removeRow = removeRow.next();
                i++;
            }
            rows--;
        });

    //Start Afresh
    $('#refresh')
        .on('click', function () {
            $('#pixel_canvas')
                .empty();
                //sets the input parameters to default
                $("#input_height")
                    .val("1");
                    $("#input_width")
                        .val("1");
                        //sets the background colour to default
                        color = $("#pixel_canvas")
                            .css('background', "white");
        });

    // for painting the canvas with on and off paint function
    function onhover() {
        $('td')
            .on('mouseover', function () {
                $(this)
                    .css("background-color", color);
            });
    }

    function offHover() {
        $('td')
            .off('mouseover');
    }

    $('.brush')
        .on('click', toggle);


    function toggle() {
        if ($("#1")
            .val() == "OFF") {
            $("#1")
                .val("ON");
            onhover();
            $(".brush")
                .text("Brush OFF");
        } else if ($("#1")
            .val() == "ON") {
            $("#1")
                .val("OFF");
            offHover();
            $(".brush")
                .text("Brush");
        }
    }
    // to paint the whole canvas with a color
    $('#background')
        .on('click', function () {
            $('#pixel_canvas')
                .css("background-color", color);
        });

});
