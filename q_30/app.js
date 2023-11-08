/// <reference lib="es2016" />
var admin = ["Admin", "jack", "jhon", "micky", "alexander"];
for (var i = 0; i < admin.length; i++) {
    if (admin[i] == "Admin") {
        console.log("Hello ".concat(admin[i], ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(admin[i], " thank you for logging in again."));
    }
}
