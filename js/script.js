// Get the modal
var modal1 = document.getElementById('workModal1');
var modal2 = document.getElementById('workModal2');
var modal3 = document.getElementById('workModal3');
var modal4 = document.getElementById('workModal4');

// Get the button that opens the modal
var thumb1 = document.getElementById("project1");
var thumb2 = document.getElementById("project2");
var thumb3 = document.getElementById("project3");
var thumb4 = document.getElementById("project4");

// Get the <span> element that closes the modal
var span1 = document.getElementById("close1")[0];
var span2 = document.getElementById("close2")[0];
var span3 = document.getElementById("close3")[0];
var span4 = document.getElementById("close4")[0];

// When the user clicks the thumnail, open the modal
thumb1.onclick = function() {
    modal1.style.display = "block";
};
thumb2.onclick = function() {
    modal2.style.display = "block";
};
thumb3.onclick = function() {
    modal3.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
};
span2.onclick = function() {
    modal2.style.display = "none";
};
span3.onclick = function() {
    modal3.style.display = "none";
};
span4.onclick = function() {
    modal4.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    else if (event.target == modal2) {
        modal2.style.display = "none";
    }
    else if (event.target == modal3) {
        modal3.style.display = "none";
    }
    else if (event.target == modal3) {
        modal4.style.display = "none";
    }
};
