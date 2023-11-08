var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Duniya = ["canada", "barlin", "makah", "australia", "belgium"];
console.log(Duniya);
console.log(__spreadArray([], Duniya, true).sort());
console.log(Duniya);
console.log(__spreadArray([], Duniya, true).reverse());
console.log(Duniya);
console.log(Duniya.reverse());
console.log(Duniya.reverse());
console.log(Duniya.sort());
console.log(__spreadArray([], Duniya, true).sort().reverse());
