var guestlist = ["Zia khan", "irfan malik", "Elon Musk"];
for (var i_1 = 0; i_1 < guestlist.length; i_1++) {
    console.log(" Mr ".concat(guestlist[i_1], " \"Dearest brother, you are warmly invited to join us for a special dinner filled with love and laughter.\""));
}
console.log("we are sorry to inform you all that mr ".concat(guestlist.pop(), " will not join us today"));
guestlist.push("andrew tet");
for (var i_2 = 0; i_2 < guestlist.length; i_2++) {
    console.log(" Mr ".concat(guestlist[i_2], " \"Dearest brother, you are warmly invited to join us for a special dinner filled with love and laughter.\""));
}
console.log("i have got awesome news from the restuarant the we have got a new bigger table for three more people");
//we need to add thee people at start in the middle and in the last
guestlist.splice(0, 0, "Ajmal");
guestlist.splice(2, 0, "aftab murgi wala");
guestlist.push("baber azam");
for (var i = 0; i < guestlist.length; i++) {
    console.log(" Mr ".concat(guestlist[i], " \"Dearest brother, you are warmly invited to join us for a special dinner filled with love and laughter.\""));
}
console.log("we are realy sorry with a sad news the bigger table is not arive on time so we have only 2 people's table");
do {
    console.log("We are really sorry ".concat(guestlist.pop(), " you cannot join us for the dinner"));
} while (guestlist.length > 2);
for (var i_3 = 0; i_3 < guestlist.length; i_3++) {
    console.log(" Mr ".concat(guestlist[i_3], " \"Dear brother, you are still invited on over dinner party.\""));
}
do {
    guestlist.pop();
} while (guestlist.length > 0);
var x = guestlist.length;
console.log(x);
