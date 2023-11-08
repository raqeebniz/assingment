const friends: string[] = ["Alice", "Bob", "Charlie", "Dave", "Eve"];
const message: string = "Hey {name}, how are you doing?";

for (const friend of friends) {
  const personalizedMessage: string = message.replace("{name}", friend);
  console.log(personalizedMessage);
}