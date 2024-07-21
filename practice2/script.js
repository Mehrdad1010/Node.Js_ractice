

$(document).ready(function(){
    $.getJSON('link2', function(data){
        for (const key in data) {
            let number_row = parseInt(key)+1
            $("#tabel_body").append(`<tr id="row_${number_row}"></tr>`)
            $(`#row_${number_row}`).append(`<th scope="row">${number_row}</th>`)
            $(`#row_${number_row}`).append(`<th>${data[key]["user_id"]}</th>`)
            $(`#row_${number_row}`).append(`<th>${data[key]["email"]}</th>`)
            $(`#row_${number_row}`).append(`<th>${data[key]["name"]}</th>`)
            $(`#row_${number_row}`).append(`<th>${data[key]["given_name"]}</th>`)
            $(`#row_${number_row}`).append(`<th>${data[key]["family_name"]}</th>`)
            $(`#row_${number_row}`).append(`<th>${data[key]["nickname"]}</th>`)
            $(`#row_${number_row}`).append(`<th>${data[key]["last_ip"]}</th>`)
         };
    });
});



