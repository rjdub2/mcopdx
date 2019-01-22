//load JSON and populate pourers
$.getJSON('pourers.json')
    .done(function (data) {
        $.each(data, function (r, pourer) {
            var name = "",
                bio = "";

            name += '<li>';
            name += '<a id="' + pourer.name.replace(' ', '-') + '" class="mco-link local" href="#">';
            name += pourer.name;
            name += '</a>';
            name += '<li>';

            bio += '<li id="' + pourer.name.replace(' ', '-') + '" class="bio">';
            pourer.bio.forEach(function (paragraph) {
                bio += '<p>';
                bio += paragraph;
                bio += '</p>'
            });
            bio += '</li>';

            $('#pourer-list').append(name + bio);
        });
    });
