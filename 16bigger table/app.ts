let guestlist= ["Zia khan","irfan malik","Elon Musk"];
for (let i=0; i < guestlist.length; i++) {
    console.log(` Mr ${guestlist[i]} "Dearest brother, you are warmly invited to join us for a special dinner filled with love and laughter."`);

}
console.log(`we are sorry to inform you all that mr ${guestlist.pop()} will not join us today`)
guestlist.push("andrew tet")
for (let i=0; i < guestlist.length; i++) {
    console.log(` Mr ${guestlist[i]} "Dearest brother, you are warmly invited to join us for a special dinner filled with love and laughter."`);

}

console.log(`i have got awesome news from the restuarant the we have got a new bigger table for three more people`);
//we need to add thee people at start in the middle and in the last
guestlist.splice(0,0,"Ajmal")
guestlist.splice(2,0,"aftab murgi wala")
guestlist.push("baber azam")

for (let i=0; i < guestlist.length; i++) {
    console.log(` Mr ${guestlist[i]} "Dearest brother, you are warmly invited to join us for a special dinner filled with love and laughter."`);
}
