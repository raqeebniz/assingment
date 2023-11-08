"use strict";
const friends = ["Alice", "Bob", "Charlie", "Dave", "Eve"];
const message = "Hey {name}, how are you doing?";
for (const friend of friends) {
    const personalizedMessage = message.replace("{name}", friend);
    console.log(personalizedMessage);
}
