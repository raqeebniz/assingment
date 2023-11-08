var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    var ordinal = "";
    if (number === 1) {
        ordinal = "st";
    }
    else if (number === 2) {
        ordinal = "nd";
    }
    else if (number === 3) {
        ordinal = "rd";
    }
    else if (number === 4) {
        ordinal = "th";
    }
    else if (number === 5) {
        ordinal = "th";
    }
    else if (number === 6) {
        ordinal = "th";
    }
    else if (number === 7) {
        ordinal = "th";
    }
    else if (number === 8) {
        ordinal = "th";
    }
    else if (number === 9) {
        ordinal = "th";
    }
    console.log(number, ordinal);
}
