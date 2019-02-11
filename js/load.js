//load JSON and populate pourers
$.getJSON('pourers.json')
    .done(function (data) {
        $.each(data, function (r, pourer) {
            var card = "",
                modal = "",
                hyphenName = pourer.name.replace(' ', '-').replace(' ', '-');

            // card += '<div class="col">'
            card += '<a href="#" class="pourer-link" data-toggle="modal" data-target="#' + hyphenName + '">';
            card += '<div class="card">';
            card += '<img src="./img/pourers/' + hyphenName + '-thumb.jpg" class="card-img-top">';
            card += '<div class="card-body">'
            card += '<h5 class="card-title">' + pourer.name + '</h5>';
            card += '</div>';
            card += '</div>';
            card += '</a>';
            // card += '</div>';

            $('#pourer-deck').append(card);

            
            //to do
            // modal += '<li id="' + pourer.name.replace(' ', '-') + '" class="bio">';

            // modal += '</li>';
            modal += '<div class="modal fade" id="' + hyphenName + '" tabindex="-1" role="dialog" aria-labelledby="' + hyphenName + 'Label" aria-hidden="true">';
            modal += '<div class="modal-dialog" role="document">';
            modal += '<div class="modal-content">';
            modal += '<div class="modal-header">';
            modal += '<h5 class="modal-title" id="exampleModalLabel">' + pourer.name + '</h5>';
            modal += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
            modal += '<span aria-hidden="true">&times;</span>';
            modal += '</button>';
            modal += '</div>';
            modal += '<div class="modal-body">';
            pourer.bio.forEach(function (paragraph) {
                        modal += '<p>';
                        modal += paragraph;
                        modal += '</p>'
                    });
             modal += '</div>';
             modal += '</div>';
             modal += '</div>';
             modal += '</div>';

            $('#pourer-modals').append(modal);
        });
    });