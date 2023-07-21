//load JSON and populate pourers
$.getJSON('pourers.json')
    .done(function (data) {
        data.sort(function(a,b){
            if(a.lastName < b.lastName) { return -1; }
            if(a.lastName > b.lastName) { return 1; }
            return 0;
        });
        $.each(data, function (r, pourer) {
            var card = "",
                modal = "",
                hyphenName = pourer.firstName.replace(' ', '-').replace(' ', '-') + '-';

            card += '<div class="card mco-card shadow">';
            card += '<div class="mco-img">';
            card += '<img src="./img/pourers/' + pourer.firstName + '.jpg" class="card-img-top">';
            if (pourer.bio) {
                card += '<div class="mco-bio mco-scroll">';
                pourer.bio.forEach(function (paragraph) {
                    card += '<p>';
                    card += paragraph;
                    card += '</p>';
                });
                card += '</div>';
            }
            card += '</div>';
            card += '<div class="card-body  bg-purple">';
            card += '<h5 class="card-title">' + pourer.firstName;
            if (pourer.bio) {
                card += '<i class="fas fa-info-circle mco-info float-right"></i>';
            }
            card += '</h5>';
            card += '</div>';
            card += '</div>';

            $('#pourer-deck').append(card);

        });
    });