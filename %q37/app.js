function make_shirt(size, massage) {
    if (size === void 0) { size = "large"; }
    if (massage === void 0) { massage = "i love typescript"; }
    console.log("size: ".concat(size, "  ").concat(massage));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Hello world");
