/*
* Stripping Names: Store a person’s name,
* and include some whitespace characters at the beginning and end of the name.
* Use "\t" (tab) and "\n" (new line) at least once.
* Print the name once, so the whitespace around the name is displayed.
* Then print the name after stripping the white spaces.
*/
var name_with_whitespace = "\t\n Aftab \n\t";
console.log("Name with whitespace characters ".concat(name_with_whitespace));
console.log("Name without whitespace characters ".concat(name_with_whitespace.trim()));
