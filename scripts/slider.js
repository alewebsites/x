var i = 0;
var txt = 'Your Company on the Internet';
var speed = 150;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(function() {
            document.getElementById("demo").innerHTML = ""; // Clear the text
            i = 0; // Reset the index
            typeWriter(); // Start again
        }, 5000); // 5000 milliseconds = 5 seconds
    }
}


window.onload = function() {
    typeWriter();
};
