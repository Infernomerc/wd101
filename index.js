document.addEventListener("DOMContentLoaded", function () {
    // Assuming your date input element has id="dob"
    var dobInput = document.getElementById("dob");

    dobInput.addEventListener("blur", function () {
        var dobValue = new Date(dobInput.value);
        var currentDate = new Date();
        var age = currentDate.getFullYear() - dobValue.getFullYear();

        if (age < 18 || age > 55) {
            alert("Please enter a valid date of birth between ages 18 and 55.");
            dobInput.value = ""; // Clear the input field
        }
    });

    // Assuming your form and table elements have id="registrationForm" and "dataTable" respectively
    var registrationForm = document.getElementById("registrationForm");
    var dataTable = document.getElementById("dataTable");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Your form submission logic here

        // Example: Append data to the table
        var newRow = dataTable.insertRow();
        newRow.insertCell().textContent = document.getElementById("name").value;
        newRow.insertCell().textContent = document.getElementById("email").value;
        newRow.insertCell().textContent = document.getElementById("password").value;
        newRow.insertCell().textContent = document.getElementById("dob").value;
        newRow.insertCell().textContent = document.getElementById("terms").checked ? "Yes" : "No";
    });
});
