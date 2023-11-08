let guestlist= ["Zia khan","irfan malik","Elon Musk"];
for (let i=0; i < guestlist.length; i++) {
    console.log(` Mr ${guestlist[i]} "Dearest brother, you are warmly invited to join us for a special dinner filled with love and laughter."`);

}
console.log(`we are sorry to inform you all that mr ${guestlist.pop()} will not join us today`)
guestlist.push("andrew tet")
for (let i=0; i < guestlist.length; i++) {
    console.log(` Mr ${guestlist[i]} "Dearest brother, you are warmly invited to join us for a special dinner filled with love and laughter."`);

}