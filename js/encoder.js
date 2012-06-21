define(function () {

    var encode = function (text) {
        return encodeURIComponent(text);
    };

    return {
        encode:encode
    }
});
