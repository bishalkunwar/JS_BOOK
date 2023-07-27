
// About the performance in JavaScript.


// JavaScript’s client-side scripting capabilities can make applications more dynamic and interactive, but it also increases the chance of inefficiencies in code. T

// Use fast DOM travesal with document.getElementById()
// Given the availability of JQuery, it is much easier to produce highly specific selectors based on a combination of tag names, classes, and CSS3.

// Use fast DOM traversal with document.getElementById().
// Given the availability of jQuery, it is much easier to produce highly specific selectors based on a combination of tag names, classes, and CSS3. You need to be aware that this approach involves several iterations while jQuery loops through each of DOM elements and tries to find a match. You can improve DOM traversal speeds by picking a specific element by ID

// example of bad practice vs good practice
// bad case consideration:- jQuery will need to iterate until it finds the right element
// let button = jQuery('body div.dialog>div.close-button:nth-child(4)')[0];

// this above code makes use of jQuery to manipulate the DOM but instead this we can use getElementById method which the document object provides.DOM
// the better optimized way is to use document.getElementById.
// let button = document.getElementById('dialog-close-button');


// JavaScript Loading>>>
// if we load our stylesheet and JS files it can have the perveived speed of a page if the user can see some content even before the JavaScript takes in it’s a much better experience when a browser encounters a script tag it stops what it’s doing completely to download and run the script if we put our scripts at the top of the page that means it’s downloading our JavaScript files first and then later getting down to parse our HTML body this means while our scripts are downloading there is no content for the user to see now if we put our scripts at the bottom of the page instead by the time, our script starts loading there’s at least some content on the page making the page seem to have loaded faster. An alternative is to use defer in the script tag. The defer attribute specifies that the script should be executed after the page has finished parsing, but it only works for external scripts.

// example of placing script at the end

// placing script at the end:
{/* <html>
    <head>
        <title>My Page</title>
    </head>
    <body>
        <div id="user-greeting">Welcome back, user</div>
        <script type="text/javascript" src="my-script.js"></script>
    </body>
</html>
  
// using defer:
<script type="text/javascript" src="path/to/script2.js" defer></script> */}

// >> it is always good to use switch over the nested if else statements because when our code base gets bigger  a switch statement is usually more efficient than a set of nested ifs. This is because ‘switch’ statements can be optimized more easily during compilation.
// >> Get rid of unnecessary loops and calls made inside loops. 
// > a switch statement is usually more efficient than a set of nested ifs. This is because ‘switch’ statements can be optimized more easily during compilation.
// .push adds an item to array at last index, .pop() removes the last element, .shift() removes the first one element from an array.


// Minimize your code as much as you can

