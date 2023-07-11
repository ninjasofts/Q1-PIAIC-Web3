"use strict";
// Task 1
console.log("Task 1:");
console.log("Muhammad Ahmed Raza");
console.log(" - - - - - - - -"); //To Separate Tasks
// Task 2:
let user_name = "Ahmed";
console.log("Task 2:");
console.log(`Hello ${user_name}, would you like to learn some Python today?`);
console.log(" - - - - - - - -"); //To Separate Tasks
//Task 3:
let personName = "Muhammad Ahmed Raza";
console.log("Task 3:");
console.log("Lowercase Name: " + personName.toLowerCase());
console.log("Uppercase Name: " + personName.toUpperCase());
console.log("Titlecase Name: " + personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
console.log(" - - - - - - - -"); //To Separate Tasks
// Task 4:
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let famous_quote = "A person who never made a mistake never tried anything new.";
let author_name = "Albert Einstein";
console.log("Task 4:");
console.log(`${author_name} once said, "${famous_quote}"`);
console.log(" - - - - - - - -"); //To Separate Tasks
// Task 5:
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
console.log("Task 5:");
let famous_person = "Muhammad Ahmed Raza";
let message = "Self Expoloration is an ongoing process.";
console.log(`${famous_person} once said, ${message}`);
console.log(" - - - - - - - -"); //To Separate Tasks
//Task 6:
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log("Task 6:");
let person_name = "Muhammad Ahmed Raza";
console.log(`\t ${person_name} \t \n ${person_name}`); //with Tab Spaces and new line
console.log(" - - - - - - - -"); //To Separate Tasks
//Task 7:
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("Task 7:");
// Addition: 3 + 5 = 8
console.log("Addition: " + (3 + 5));
// Subtraction: 17 - 9 = 8
console.log("Subtraction: " + (17 - 9));
// Multiplication: 2 * 4 = 8
console.log("Multiplication: " + (2 * 4));
// Division: 32 / 4 = 8
console.log("Division: " + (32 / 4));
console.log(" - - - - - - - -"); //To Separate Tasks
//Task 8:
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log("Task 8:");
console.log(`${5 + 3} \n ${17 - 9} \n ${2 * 4} \n ${32 / 4}`);
console.log(" - - - - - - - -"); //To Separate Tasks
//Task 9:
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
console.log("Task 9:");
let a = 5;
console.log("My favorite number is: " + a);
console.log(" - - - - - - - -"); //To Separate Tasks
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
console.log("Task 10:");
// Adding Comments
// Program 1: Muhammad Ahmed Raza 11th July 2023
console.log("Salam, Pakistan!");
// Program 2: Prints the sum of two numbers
let num1 = 5;
let num2 = 3;
console.log("Sum: " + (num1 + num2));
console.log(" - - - - - - - -"); //To Separate Tasks
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log("Task 11:");
let friends = ["Usman", "Badar", "Faizan"];
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}
console.log(" - - - - - - - -"); //To Separate Tasks
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("Task 12:");
let friends_name = ["Usman", "Badar", "Faizan"];
for (let i = 0; i < friends_name.length; i++) {
    console.log("Salam, " + friends_name[i] + "!");
}
console.log(" - - - - - - - -"); //To Separate Tasks
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
console.log("Task 13");
let vehicles = ["Honda Vezel", "Revo", "Aqua"];
for (let i = 0; i < vehicles.length; i++) {
    console.log("I would love to own a " + vehicles[i]);
}
console.log(" - - - - - - - -"); //To Separate Tasks
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log("Task 14");
let guests = ["Usman", "Hassan", "Tahir Raza"];
for (let a = 0; a < guests.length; a++) {
    console.log("Assalam o alaikum " + guests[a] + " I would like to invite you to attend my dinner.");
}
console.log(" - - - - - - - -"); //To Separate Tasks
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
console.log("Task 15");
let notattending = guests[1];
console.log(notattending + " can't make it.");
guests[1] = "Badar";
for (let i = 0; i < guests.length; i++) {
    console.log("Dear " + guests[i] + ", you are invited to dinner. Please join us!");
}
console.log(" - - - - - - - -"); //To Separate Tasks
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
console.log("Task 16");
console.log("Good news! We found a bigger dinner table!");
guests.unshift("Ghazanfar");
guests.splice(2, 0, "Ahmed");
guests.push("Umer");
for (let i = 0; i < guests.length; i++) {
    console.log("Dear " + guests[i] + ", you are invited to dinner. Please join us!");
}
console.log(" - - - - - - - -"); //To Separate Tasks
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("Task 17");
console.log("Oh! We don't received Bigger Table yet, so we have to change the program. We can invite only 2 people tonight.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log("Sorry, " + removedGuest + ", we can't invite you to dinner.");
}
for (let i = 0; i < guests.length; i++) {
    console.log("Dear " + guests[i] + ", you are still invited to dinner. Please join us!");
}
for (let i = 0; i <= guests.length; i++) {
    guests.pop();
}
console.log("Guest list: " + guests);
console.log(" - - - - - - - -"); //To Separate Tasks
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Task 18");
let placesToVisit = ["Swat", "Karachi", "Bawalpur", "Neelum", "Chakwal"];
// Print the array in its original order
console.log("Original Order: " + placesToVisit);
// Print the array in alphabetical order without modifying the original list
let sortedAlphabetical = placesToVisit.slice().sort();
console.log("Alphabetical Order: " + sortedAlphabetical);
// Print the array in its original order
console.log("Original Order: " + placesToVisit);
// Print the array in reverse alphabetical order without modifying the original list
let sortedReverseAlphabetical = placesToVisit.slice().sort().reverse();
console.log("Reverse Alphabetical Order: " + sortedReverseAlphabetical);
// Print the array in its original order
console.log("Original Order: " + placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order: " + placesToVisit);
// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("Original Order: " + placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Alphabetical Order: " + placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("Reverse Alphabetical Order: " + placesToVisit);
console.log(" - - - - - - - -"); //To Separate Tasks
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("Task 19");
console.log("Total Guests in List now : " + guests.length);
console.log(" - - - - - - - -"); //To Separate Tasks
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
console.log("Task 20");
let mountains = ["Everest", "K2", "NangaParbat"];
console.log("Mountains: " + mountains);
let rivers = ["Sindh", "Chanab", "Jhelum"];
console.log("Rivers: " + rivers);
let countries = ["Pakistan", "China", "India", "Australia"];
console.log("Countries: " + countries);
let cities = ["Islamabad", "Kharian", "Dina", "Sydney"];
console.log("Cities: " + cities);
let languages = ["English", "Urdu", "Punjabi", "Arabic"];
console.log("Languages: " + languages);
console.log(" - - - - - - - -"); //To Separate Tasks
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
console.log("Task 21");
let student = {
    name: "Zeeshan",
    roll_number: "10",
    age: "10 years"
};
console.log(student.name);
console.log(student.roll_number);
console.log(student.age);
console.log(" - - - - - - - -"); //To Separate Tasks
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
console.log("Task 22");
let roll_numbers = [509, 510, 511];
console.log("Number at index 3: (intentional error) " + roll_numbers[3]);
console.log("Number at index 2: " + roll_numbers[2]);
console.log(" - - - - - - - -"); //To Separate Tasks
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
console.log("Task 23");
let car = 'Honda';
console.log("Is car == 'Honda'? I predict True.");
console.log(car == 'Honda');
console.log("Is car != 'Honda'? I predict False.");
console.log(car != 'Honda');
console.log("Is car != 'Toyota'? I predict True.");
console.log(car != 'Toyota');
console.log("Is car === 'Toyota'? I predict False.");
console.log(car === 'Toyota');
console.log("Is carstartsWith('Ho')? I predict True.");
console.log(car.startsWith('Ho'));
console.log("Is car startsWith('ho')? I predict False.");
console.log(car.startsWith('ho'));
console.log("Is car.includes('da')? I predict True.");
console.log(car.includes('da'));
console.log("Is car.includes('DA')? I predict False.");
console.log(car.includes('DA'));
console.log("Is car.length<9? I predict True.");
console.log(car.length < 9);
console.log("Is car.length>9? I predict False.");
console.log(car.length > 9);
console.log(" - - - - - - - -"); //To Separate Tasks
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
console.log("Task 24");
// Equality and inequality with strings
console.log("Is 'Pakistan' == 'Pakistan'? I predict True.");
console.log('Pakistan' == 'Pakistan');
console.log("Is 'apple'.length != 'banana'.length? I predict True.");
console.log('apple'.length != 'banana'.length);
console.log("Is 'apple' != 'apple'? I predict False.");
console.log('apple' != 'apple');
// Lower case function tests
console.log("Is 'SIGN' lowercase == 'sign'? I predict True.");
console.log('SIGN'.toLowerCase() == 'sign');
console.log("Is 'NinjaSofts' lowercase !== 'ninjasofts'? I predict False.");
console.log('NinjaSofts'.toLowerCase() !== 'ninjasofts');
// Numerical tests
console.log("Is 5 > 3? I predict True.");
console.log(5 > 3);
console.log("Is 10 < 2? I predict False.");
console.log(10 < 2);
console.log("Is 7 >= 7? I predict True.");
console.log(7 >= 7);
console.log("Is 4 <= 2? I predict False.");
console.log(4 <= 2);
console.log("Is 5 > 3 and 2 < 4? I predict True.");
console.log(5 > 3 && 2 < 4);
console.log("Is 5 > 3 or 2 > 4? I predict True.");
console.log(5 > 3 || 2 > 4);
let fruits = ['apple', 'banana', 'orange'];
console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple'));
console.log("Is 'guava' not in the fruits array? I predict True.");
console.log(!fruits.includes('guava'));
console.log(" - - - - - - - -"); //To Separate Tasks
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
console.log("Task 25");
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
console.log(" - - - - - - - -"); //To Separate Tasks
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
console.log("Task 26");
alien_color = 'red';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
console.log(" - - - - - - - -"); //To Separate Tasks
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
console.log("Task 27");
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
console.log(" - - - - - - - -"); //To Separate Tasks
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
console.log("Task 28");
let age = 14;
if (age < 2) {
    console.log("You are a Baby.");
}
else if (age > 2 && age < 4) {
    console.log("You are a toddler.");
}
else if (age > 4 && age < 13) {
    console.log("You are a Kid.");
}
else if (age > 13 && age < 20) {
    console.log("You are a Teenager.");
}
else if (age > 20 && age < 65) {
    console.log("You are an adult.");
}
else if (age > 65) {
    console.log("You are an elder.");
}
console.log(" - - - - - - - -"); //To Separate Tasks
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
console.log("Task 29");
let favorite_fruits = ["apple", "banana", "pineapple"];
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes('mango')) {
    console.log("You really like mangoes!");
}
if (favorite_fruits.includes('pineapple')) {
    console.log("You really like pineapples!");
}
if (favorite_fruits.includes('kiwi')) {
    console.log("You really like kiwis!");
}
console.log(" - - - - - - - -"); //To Separate Tasks
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
console.log("Task 30");
let usernames = ['admin', 'ahmed', 'sajid', 'khurram', 'badar'];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + usernames[i] + ", thank you for logging in again.");
    }
}
console.log(" - - - - - - - -"); //To Separate Tasks
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
console.log("Task 31");
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    while (usernames.length > 0) {
        usernames.pop();
    }
    console.log("We need to find some users!");
}
console.log(" - - - - - - - -"); //To Separate Tasks
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
console.log("Taks 32");
let current_users = ['Ahmed', 'Ali', 'Musa', 'Sara', 'Tania'];
let new_users = ['Bashir', 'Ali', 'Usman', 'Sara', 'Samia'];
for (let i = 0; i < new_users.length; i++) {
    let usernameExists = false;
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log("The username '" + new_users[i] + "' is already taken. Please enter a new username.");
    }
    else {
        console.log("The username '" + new_users[i] + "' is available.");
    }
}
console.log(" - - - - - - - -"); //To Separate Tasks
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
console.log("Taks 33");
let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numb.length; i++) {
    let number = numb[i];
    if (number === 1) {
        console.log(number + "st");
    }
    else if (number === 2) {
        console.log(number + "nd");
    }
    else if (number === 3) {
        console.log(number + "rd");
    }
    else {
        console.log(number + "th");
    }
}
console.log(" - - - - - - - -"); //To Separate Tasks
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("Taks 34");
let pizzas = ['Pepperoni', 'Margherita', 'Special'];
for (let i = 0; i < pizzas.length; i++) {
    console.log("I like " + pizzas[i] + " pizza.");
}
console.log("I really love pizza!");
console.log(" - - - - - - - -"); //To Separate Tasks
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log("Taks 35");
let animals = ['Dog', 'Cat', 'Horse'];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
console.log("");
for (let i = 0; i < animals.length; i++) {
    let animal = animals[i];
    console.log("A " + animal + " would make a great pet.");
}
console.log("");
console.log("Any of these animals would make a great pet!");
console.log(" - - - - - - - -"); //To Separate Tasks
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
console.log("Taks 36");
function make_shirt(size, message) {
    console.log("Size: " + size + ", Message: " + message);
}
make_shirt("L", "Ninja Softs!");
console.log(" - - - - - - - -"); //To Separate Tasks
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
console.log("Taks 37");
function make_shirt1(size = "L", message = "I love TypeScript") {
    console.log("Size: " + size + ", Message: " + message);
}
make_shirt1(); // Large shirt with default message
make_shirt1("M"); // Medium shirt with default message
make_shirt1("S", "Hello NinjaSofts!"); // Small shirt with custom message
console.log(" - - - - - - - -"); //To Separate Tasks
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
console.log("Taks 38");
function describe_city(city, country = "Pakistan") {
    console.log(city + " is in " + country);
}
describe_city("Karachi"); // Karachi is in Pakistan
describe_city("Lahore"); // Lahore is in Pakistan
describe_city("London", "England"); // Paris is in France
console.log(" - - - - - - - -"); //To Separate Tasks
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
console.log("Taks 39");
function city_country(city, country) {
    console.log(city + ", " + country);
}
city_country("Lahore", "Pakistan");
city_country("Sydney", "Australia");
city_country("Makkah", "SaudiArabia");
console.log(" - - - - - - - -"); //To Separate Tasks
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
console.log("Taks 40");
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Artist 1", "Album 1");
let album2 = make_album("Artist 2", "Album 2", 12);
let album3 = make_album("Artist 3", "Album 3", 8);
console.log(album1);
console.log(album2);
console.log(album3);
console.log(" - - - - - - - -"); //To Separate Tasks
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
console.log("Taks 41");
let magician = ["Akram", "Hamoon", "Nastoor"];
function show_magicians(name) {
    for (let i = 0; i < name.length; i++) {
        console.log(name[i]);
    }
}
show_magicians(magician);
console.log(" - - - - - - - -"); //To Separate Tasks
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
console.log("Taks 42");
function make_great(add_great) {
    for (let i = 0; i < add_great.length; i++) {
        add_great[i] += " the Great";
    }
    return add_great;
}
let greatMags = make_great(magician);
show_magicians(greatMags);
console.log(" - - - - - - - -"); //To Separate Tasks
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
console.log("Taks 43");
let orig_names = [];
for (let i = 0; i > magician.length; i++) {
    console.log(magician[i]);
}
let magicians = ["Magician 1", "Magician 2", "Magician 3"];
let newMagicians = make_great(magicians.slice());
show_magicians(magicians);
show_magicians(newMagicians);
console.log(" - - - - - - - -"); //To Separate Tasks
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
console.log("Taks 44");
function make_sandwich(...items) {
    console.log("Sandwich ingredients: " + items.join(", "));
}
make_sandwich("Bread", "Cheese");
make_sandwich("Bread", "Cheese", "Lettuce", "Tomato");
make_sandwich("Bread", "Turkey", "Mayonnaise", "Pickles");
console.log(" - - - - - - - -"); //To Separate Tasks
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
console.log("Taks 45");
function create_car(company, model, ...options) {
    let car = {
        manufacturer: company,
        model: model
    };
    for (let option of options) {
        let key = Object.keys(option)[0];
        let value = option[key];
        car[key] = value;
    }
    return car;
}
let newcar = create_car("Honda", "2023", { color: "Silver" }, { features: "navigation system" });
console.log(newcar);
console.log(" - - - - - - - -"); //To Separate Tasks
