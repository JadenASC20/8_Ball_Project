/*
    Welcome to the 8Ball Project: Today your gonna learn more about Random Numbers
    and Arrays. Im going to introduce one more element before you get started with
    the project, thats User Input. User input with node is a little tricky because
    its not a prompt. Its used when you output the code ex. {node ask8ball.js hello} the word
    'hello' was an input
*/

/*
To start user input, write:

var userInput = process.argv[2];

what the following code does when run is that it passes an arguement to Javascript


---------- WHAT IS PROCESS.ARGV ? ----------
process.argv[] is an array that contains command line arguements. 

The first one is node (process.argv[0]), the seccond one is the name of the JS file (process.argv[1]). The next
are any additional command line arguements. 

When we write: {node ask8ball.js} in the command line

the 'node' is the first arguement
the 'ask8ball.js' is the second one

So when your referencing user input, you have to use process.argv[2], since it tells the program that what ever
occurs after is to be counted as User Input
----------------------------------------------------
*/

var userInput = process.argv[2];
console.log("Input:", userInput); //this just prints it on the command line

//now if you run this command only {node ask8ball.js} you should get {undefined}
//^^^ that is because you havent given any additional arguements for it to be used as a User Input

//now try again this time writing something afterwards {node ask8ball.js hello_world}

//Great now that we know how it works delete/comment the code line 33-34. We can use multiple inputs, just add additional arguements to the code

// var firstinput = process.argv[2];
// var secondinput = process.argv[3];
// var thirdinput = process.argv[4];

// console.log("Input A", firstinput);
// console.log("Input B", secondinput);
// console.log("Input C", thirdinput);

//when run this code will accept three inputs from the user and prints them out. (Afterwards delete or comment back out)


//Congrats now that you understand how user input works we can move on to the project
//************************************************************************************



//8 Ball Project

/*
Write a 8 ball program that will accept user Input as a question and calls a Random Number list array index
and returns it as an answer
*/

/* Example Run -------------------------------

$ node ask8ball.js will_I_become_a_millionaire
Output: Yes

$ node ask8ball.js should_I_order_chipotle
Output: Ask again later

-----------------------------------------------

These are just examples since the answers are random and will be different. Try your best and let me know if you
have any questions

*/

//code goes here `

















// ONLY VIEW IF YOUR HAVING TROUBLE

/* Hint: Whenever the program is run it will use a Random number system for a random value. It will then use that value
as an index to an array filled with different answers. That is printed back into the console */


//BONUS: Try adding multiple inputs to your 8 ball that will give multiple answers back in return



