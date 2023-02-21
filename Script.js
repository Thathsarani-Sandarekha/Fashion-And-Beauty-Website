//Checks the Form validations

function validateForm() {
  let name = document.forms["Newsletter"]["name"].value;
  let email = document.forms["Newsletter"]["Email"].value;

  let x = Newsletter.name.value;
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (name == "" && email == "") {
     alert("Please fill out the Form");
     return false;
  } else if (name == "") {
     alert("Name must be filled out");
     return false;

  } else if (email == "") {
     alert("Email must be filled out");
     return false;

  } else if (!email.match(mailFormat)) {
     alert("Invalid email address")
  }

  if (name != "" && email != "" && email.match(mailFormat)) {
     alert("Dear " + x + " , you have successfully subscribed for a personalized newsletter ");
     return true;
  }
}

//To  change the background ccolor through a dropdown

function changeColor(event) {
  var color = event.value;
  document.getElementsByTagName('body')[0].style.backgroundColor = color;
}


//To  change the font ccolor through a dropdown

function colorFont(event) {
  var color = event.value;
  document.getElementsByClassName("Main")[0].style.color = color;
  document.getElementsByClassName("h2")[0].style.color = color;
}

  //To scroll to the top of the page
  
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myBtn.style.display = "block";
      } 
      else {
          myBtn.style.display = "none";
      }
  }
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

 