window.onscroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $("#navlinks").addClass("font-link-shrink");
    $("#navlinks").removeClass("font-link");
    $("#brand").addClass("font-shrink");
    $("#brand").removeClass("font");
  } else {
    $("#navlinks").addClass("font-link");
    $("#navlinks").removeClass("font-link-shrink");
    $("#brand").addClass("font");
    $("#brand").removeClass("font-shrink");
  }
};
$(".nav-link").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

$("#brand").on("click", () => {
  $(".navbar-collapse").collapse("hide");
});

const sendMessage = (event) => {
  //fetch from the api
  event.preventDefault();
  let firstName = document.getElementById("first-name").value;
  let secondName = document.getElementById("second-name").value;
  let companyName = document.getElementById("company-name").value;
  let emailAddress = document.getElementById("email-address").value;
  let message = document.getElementById("message").value;
  var clientData = {
    first_name: firstName,
    second_name: secondName,
    company_name: companyName,
    email_address: emailAddress,
    message: message,
  };
  console.log(JSON.stringify(clientData));
  return fetch(`https://myportfolioapi123.herokuapp.com/client/message`, {
    method: "POST",

    body: JSON.stringify(clientData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 200) {
        $("#failure").addClass("d-none");
        $("#failure").removeClass("d-block");
        $("#success").addClass("d-block");
        $("#success").removeClass("d-none");
      } else {
        $("#success").removeClass("d-block");
        $("#success").addClass("d-none");
        $("#failure").addClass("d-block");
        $("#failure").removeClass("d-none");
      }
      setTimeout(() => {
        console.log("hello");
        $("#success").removeClass("d-block");
        $("#failure").removeClass("d-block");
        $("#success").addClass("d-none");
        $("#failure").addClass("d-none");
      }, 3000);
      setTimeout(() => {
        location.reload();
      }, 3000);
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

$("#send").click(sendMessage);
