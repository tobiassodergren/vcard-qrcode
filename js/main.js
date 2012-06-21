require(["jquery", "vcard", "encoder", "ui.form", "underscore-min", "jquery-ui-1.8.21.custom.min", "jquery.dom.form_params.min"], function ($, vcard, encoder, form) {

    $('#form').submit(function (event) {

        vcard.init();

        var data = $('#form').formParams();
        var size;

        if (!_.isEmpty(data.surname) && !_.isEmpty(data.lastname)) vcard.name(data.surname, data.lastname);
        if (!_.isEmpty(data.cell)) vcard.cell(data.cell);
        if (!_.isEmpty(data.work)) vcard.work(data.work);
        if (!_.isEmpty(data.other)) vcard.other(data.other);
        if (!_.isEmpty(data.email)) vcard.email(data.email);
        if (!_.isEmpty(data.size)) size=data.size;

        var encodedData = encoder.encode(vcard.get());

        var imageUrl = "https://chart.googleapis.com/chart?cht=qr&chs="+size+"x"+size+"&chld=H|0&chl=" + encodedData;

        $("#qrcode-link").html(imageUrl);
        $("#qrcode").attr("src", imageUrl);

        $("#result").removeClass("ui-helper-hidden");

        event.preventDefault();
    });

    // Style
    form.style($('#form'));

});