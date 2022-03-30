const form = document.getElementById("booking-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;

  console.log("Thank You, Your Form Is Submitted !!");
  console.log("Patients' Full Name : ", fullName);
  console.log("Patients' Email ID  : ", email);
});

