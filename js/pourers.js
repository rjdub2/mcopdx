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
                hyphenName = pourer.firstName.replace(' ', '-').replace(' ', '-') + '-' + pourer.lastName;

            card += '<div class="card mco-card shadow">';
            card += '<div class="mco-img">';
            card += '<img src="./img/pourers/' + hyphenName + '-thumb.jpg" class="card-img-top">';
            if (pourer.bio) {
                card += '<div class="mco-bio">';
                pourer.bio.forEach(function (paragraph) {
                    card += '<p>';
                    card += paragraph;
                    card += '</p>';
                });
                card += '</div>';
            }
            card += '</div>';
            card += '<div class="card-body  bg-purple">';
            card += '<h5 class="card-title">' + pourer.firstName + ' ' + pourer.lastName + '</h5>';
            card += '</div>';
            card += '</div>';

            $('#pourer-deck').append(card);

        });
    });