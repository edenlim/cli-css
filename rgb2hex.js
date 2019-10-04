//Literally copy and paste
module.exports.converter = (r,g,b) => {
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    var r = componentToHex(r);
    var g = componentToHex(g);
    var b = componentToHex(b);
    var reply = "#"+r+g+b;
    return reply.toUpperCase();
};

//I have no idea how this formula works
module.exports.hsl = (r, g, b) => {
    r = r / 255,
    g = g / 255,
    b = b / 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var lum = (max + min) / 2;
    var hue;
    var sat;
    if (max == min) {
        hue = 0;
        sat = 0;
    } else {
        var c = max - min;
        sat = c / (1 - Math.abs(2 * lum - 1));
        switch(max) {
            case r:
                break;
            case g:
                hue = (b - r) / c + 2;
                break;
            case b:
                hue = (r - g) / c + 4;
                break;
        }
    }
    hue = Math.round(hue * 60);
    sat = Math.round(sat * 100);
    lum = Math.round(lum * 100);
    return `[Hue: ${hue}, Saturation: ${sat}, Luminosity: ${lum}]`;
}