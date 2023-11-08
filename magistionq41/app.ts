function showMagicians(magicianNames: string[]): void {
    for (const name of magicianNames) {
      console.log(name);
    }
  }
  
  // Create an array of magician's names
  const magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
  // Call the function to show the magicians
  showMagicians(magicians);
