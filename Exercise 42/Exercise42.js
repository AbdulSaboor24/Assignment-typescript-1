function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push("The Great ".concat(magician));
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
var magicianNames = ['David Copperfield', 'Harry Houdini', 'Shin Lim', 'David Blaine'];
var greatMagicians = make_great(magicianNames);
show_magicians(greatMagicians);
