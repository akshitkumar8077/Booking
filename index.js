const makeRequest = async (postObject) => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  return await fetch(url, {
    method: "POST",
    body: JSON.stringify(postObject),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};
const form = document.getElementById("booking-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;

  console.log("Thank You, Your Form Is Submitted !!");
  console.log("Patients' Full Name : ", fullName);
  console.log("Patients' Email ID  : ", email);

  const date = new Date(form.elements["date"].value);
  const data = {
    fullName: form.elements["fullName"].value,
    email: form.elements["email"].value,
    doctor: form.elements["doctor"].value,
    location: form.elements["location"].value,
    date: date,
  };

  makeRequest(data).then((res) => console.log(res));
});
