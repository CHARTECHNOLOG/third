function auth() {
  var email = document.forms["myform"]["uemail"].value;
  var pass = document.forms["myform"]["pass"].value;
  if (email == "samson@gmail.com" && pass == "123456") {
    window.location.href = "question.html";
    alert("Login Successfully");
  } else {
    alert("Wrong Credientials");
  }
}

function author() {
  var question = document.getElementById("question").value;

  if (question == "dada") {
    window.location.href = "home.html";
    alert("correct input");
  } else {
    alert("incorrect input value");
    return;
  }
}
