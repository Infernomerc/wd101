document.addEventListener("DOMContentLoaded", function () {
    var registrationForm = document.getElementById("registrationForm");
    var dataTable = document.querySelector("table tbody");

    // Load existing data from web storage
    var existingData = JSON.parse(localStorage.getItem("registrationData")) || [];
    renderTable(existingData);

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var dob = document.getElementById("dob").value;
        var terms = document.getElementById("terms").checked;

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        var age = calculateAge(new Date(dob));
        if (age < 18 || age > 55) {
            alert("Please enter a valid date of birth between ages 18 and 55.");
            return;
        }

        // Add the new entry to the table
        var newRow = dataTable.insertRow();
        newRow.insertCell().textContent = name;
        newRow.insertCell().textContent = email;
        newRow.insertCell().textContent = password;
        newRow.insertCell().textContent = dob;
        newRow.insertCell().textContent = terms ? "Yes" : "No";

        // Add the new entry to the data array
        var newData = {
            name: name,
            email: email,
            password: password,
            dob: dob,
            terms: terms
        };
        existingData.push(newData);

        // Save the updated data to web storage
        localStorage.setItem("registrationData", JSON.stringify(existingData));

        // Clear the form fields
        registrationForm.reset();
    });

    function isValidEmail(email) {
        // Use a simple regex for email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function calculateAge(birthdate) {
        var currentDate = new Date();
        var age = currentDate.getFullYear() - birthdate.getFullYear();
        return age;
    }

    function renderTable(data) {
        // Clear existing table rows
        dataTable.innerHTML = "";

        // Render each entry in the table
        data.forEach(function (entry) {
            var newRow = dataTable.insertRow();
            newRow.insertCell().textContent = entry.name;
            newRow.insertCell().textContent = entry.email;
            newRow.insertCell().textContent = entry.password;
            newRow.insertCell().textContent = entry.dob;
            newRow.insertCell().textContent = entry.terms ? "Yes" : "No";
        });
    }
});
