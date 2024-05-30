/*
* Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in
* lowercase, uppercase, and titlecase.
*/
var personName = "Aftab Hussain";
console.log(personName.toLocaleLowerCase());
console.log(personName.toLocaleUpperCase());
console.log(personName.toLocaleLowerCase().replace(/(^|\s)\S/g, function (word) { return word.toUpperCase(); }));
