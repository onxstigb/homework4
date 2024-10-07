function initListeners() {
  $("#loginBtn").click(function () {
    $("#loginModal").fadeIn();
  });

  $(".close").click(function () {
    $("#loginModal").fadeOut();
  });

  $(window).click(function (event) {
    if ($(event.target).is("#loginModal")) {
      $("#loginModal").fadeOut();
    }
  });

  $("#loginForm").submit(function (event) {
    var username = $("#username").val();
    var password = $("#password").val();

    if (username && password) {
      alert("Signed in as " + username);
    } else {
      alert("Please enter both username and password");
    }
  });
}

$(document).ready(function () {
  initListeners();
});
