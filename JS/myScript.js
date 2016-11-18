function closeMenu() {
    document.getElementsByClassName("hamburgerClicked")[0].className = "hamburger";
    document.getElementsByClassName("headerMenuOpened")[0].className = "headerMenu";
    document.getElementsByClassName("hamburger")[0].setAttribute('onclick', 'openMenu()');

};

function openMenu() {
    document.getElementsByClassName("hamburger")[0].className = "hamburgerClicked";
    document.getElementsByClassName("headerMenu")[0].className = "headerMenuOpened";
    document.getElementsByClassName("hamburgerClicked")[0].setAttribute('onclick', 'closeMenu()');
};

function headerMenu() {
    if ($(window).width() > 800) {
        closeMenu();
    }
}

function showClientComment() {

    document.getElementsByClassName("clientComments")[0].className = "clientCommentsShown";
    document.getElementsByClassName("hideClientComments")[0].className = "showClientComments";
    document.getElementsByClassName("clientImage")[0].setAttribute('onclick', 'hideClientComment()');
};

function hideClientComment() {
    document.getElementsByClassName("clientCommentsShown")[0].className = "clientComments";
    document.getElementsByClassName("showClientComments")[0].className = "hideClientComments";
    document.getElementsByClassName("clientImage")[0].setAttribute('onclick', 'showClientComment()');
};

function validateInputFields() {

    var nameInput = document.getElementsByClassName("name")[0].value;
    if (nameInput == null || nameInput == "") {
        alert("Name field cannot be empty!");
    }
    if (/^[a-zA-Z0-9]/.test(nameInput)) {
        alert("Numbers not allowed in Name field!");
    }
    var emailInput = document.getElementsByClassName("email")[0].value;
    if (emailInput == null || emailInput == "") {
        alert("E-mail field cannot be empty!");
    }
    var positionOfAt = emailInput.lastIndexOf('@');
    var positionOfDot = emailInput.lastIndexOf('.');
    if (((emailInput.indexOf('@') != positionOfAt) && (positionOfAt != -1)) || ((emailInput.indexOf('.') != positionOfDot) && (positionOfDot != -1)) || (positionOfDot < positionOfAt) && ((emailInput.length - positionOfDot) < 2)) {
        alert("Please enter a valid e-mail id!");
    }
    var helpInput = document.getElementsByClassName("help")[0].value;
    if (helpInput == null || helpInput == "") {
        alert("Help field cannot be empty!");
    }
};
$(window).resize(function() {
    headerMenu();
});
$(document).ready(function() {
    headerMenu();
    SearchText();
});

/*function SearchText() {
    $("#searchBox").autocomplete({
        source: function(request, response) {
            $.ajax({
                type: "GET",
                contentType: "application/json; charset=utf-8",
                //url: "https://api.myjson.com/bins/ncsk",
                url: "https://jsonblob.com/580c6a43e4b0bcac9f836680",
                //url: "js/autocompletejson",
                //xhrFields: {
                //withCredentials: false
                //},
                data: "{'" + document.getElementById('searchBox').value + "'}",
                dataType: "json",
                success: function(data) {
                    if (data != null) {
                        console.log(document.getElementById('searchBox').value);
                        response(data.d);
                    }
                },
                error: function(e) {
                    console.log(e.message);
                }
            });
        }
    });
}*/

 $( function() {
    var searchThisSite = [
      "Analytics",
      "Bums On The Saddle",
      "Clients",
      "Contact Us",
      "Design",
      "Facebook",
      "Google+",
      "Grouppo PAM",
      "Marketing",
      "Natural Markets Food Group",
      "Our Strengths",
      "Shop Direct",
      "Strategy",
      "Twitter",
      "WorkerThoughts",
      "JavaScript"
    ];
    $( "#searchBox" ).autocomplete({
      source: searchThisSite
    });
  } );