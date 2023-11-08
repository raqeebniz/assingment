function make_shirt(size:string = "large",massage:string = "i love typescript"){
    console.log(`size: ${size}  ${massage}`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Hello world");