define(function () {
    var start = "BEGIN:VCARD\nVERSION:3.0";
    var end = "END:VCARD";

    var data = "";

    var init = function() {
        data = "";
    };

    var name = function (surname, lastname) {
        data += "N:" + lastname + ';' + surname;
        data += "\n";
    };

    var cell = function (cell) {
        data += "TEL;TYPE=CELL:" + cell;
        data += "\n";
    };

    var work = function (work) {
        data += "TEL;TYPE=WORK,VOICE:" + work;
        data += "\n";
    };

    var other = function (work) {
        data += "TEL;TYPE=OTHER:" + work;
        data += "\n";
    };

    var email = function (email) {
        data += "EMAIL;TYPE=PREF,INTERNET:" + email;
        data += "\n";
    };

    var get = function () {
        return start + '\n' + data + end;
    };

    return {
        init:init,
        name:name,
        cell:cell,
        work:work,
        other:other,
        email:email,
        get:get
    }
});