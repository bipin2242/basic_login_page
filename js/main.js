 /*
       * This function will validate the username and password entered by the user
       */
 function validateForm() {
    var username = document.getElementById("username").value;
    // console.log(username);
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
      alert("Login successful!");
      event.target.submit(); // This line of code will manually submit the form which we had prevented earlier
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }

  /**
   * This function will check the password strength.
   *
   * The strength of the password is measured as per the following criteria:
   * - lowercase characters
   * - uppercase characters
   * - numbers
   * - special characters
   * - length is greater than or equal to 6
   *
   * The password strength will be displayed as per the following criteria:
   * - Weak: 0-2 criteria met
   * - Medium: 3 criteria met
   * - Strong: 4-5 criteria met
   */
  function checkPasswordStrength() {
    var password = document.getElementById("password").value;
    var passwordStrength = document.getElementById("password-strength");
    let i = 0;

    if (password.match(/[a-z]+/)) {
      // This line of code will check if the password contains lowercase characters
      i++;
    }
    if (password.match(/[A-Z]+/)) {
      // This line of code will check if the password contains uppercase characters
      i++;
    }
    if (password.match(/[0-9]+/)) {
      // This line of code will check if the password contains numbers
      i++;
    }
    if (password.match(/[!@#$%^&*]+/)) {
      // This line of code will check if the password contains special characters
      i++;
    }
    if (password.length >= 6) {
      // This line of code will check if the password length is greater than or equal to 6
      i++;
    } else {
      // This line of code will disable the submit button until the password length is greater than or equal to 6
      document.getElementById("btn-submit").disabled = true;
    }

    console.log(i);

     if(i <= 2) {
         passwordStrength.innerHTML = "Weak";
         passwordStrength.style.color = "red";
     } else if(i <= 3) {
         passwordStrength.innerHTML = "Medium";
         passwordStrength.style.color = "orange";
         document.getElementById("btn-submit").disabled = false;
     } else {
         passwordStrength.innerHTML = "Strong";
         passwordStrength.style.color = "green";
         document.getElementById("btn-submit").disabled = false;
     }

     if(password.length == 0) {
         passwordStrength.innerHTML = "";
         document.getElementById("btn-submit").disabled = true;
     }
  }

  function countrySelected() {
    var selectElement = document.getElementById("countrySelect");
    var citySelectElement = document.getElementById("citySelect");
    var selectedCountry = selectElement.value;

    // Clear existing options in the citySelect element
    citySelectElement.innerHTML = "";

    // Add cities based on the selected country
    switch (selectedCountry) {
      case "usa":
        addOption(citySelectElement, "new-york", "New York");
        addOption(citySelectElement, "los-angeles", "Los Angeles");
        addOption(citySelectElement, "chicago", "Chicago");
        break;
      case "nepal":
        addOption(citySelectElement, "kathmandu", "Kathmandu");
        addOption(citySelectElement, "pokhara", "Pokhara");
        addOption(citySelectElement, "illam", "Illam");
        break;
      case "china":
        addOption(citySelectElement, "beijin", "Beijin");

        break;
      // Add cases for more countries as needed
      default:
        // Default case, no cities added
        break;
    }
  }

  function addOption(selectElement, value, text) {
    var option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.add(option);
  }