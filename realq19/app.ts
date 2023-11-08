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

for (var i=0; i < guestlist.length; i++) {
    console.log(` Mr ${guestlist[i]} "Dearest brother, you are warmly invited to join us for a special dinner filled with love and laughter."`);
}
console.log("we are realy sorry with a sad news the bigger table is not arive on time so we have only 2 people's table");



do{

    console.log(`We are really sorry ${guestlist.pop()} you cannot join us for the dinner`);
}while(guestlist.length>2);
for (let i=0; i < guestlist.length; i++) {
console.log(` Mr ${guestlist[i]} "Dear brother, you are still invited on over dinner party."`);    
}

do{
    
    guestlist.pop();
    }while(guestlist.length>0);

let x = guestlist.length;
console.log(x)
