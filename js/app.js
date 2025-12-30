// App bootstrap & event wiring
document.addEventListener("DOMContentLoaded", () => {
  AutoSave.restore();
});

const form = document.getElementById("onboardingForm");

form.addEventListener("input", (e) => {
  const input = e.target;
  if (!input.id) return;

  const result = Validator(input.id, input.value);
  const errorEl = input.nextElementSibling;

  errorEl.textContent = result === true ? "" : result;

  AutoSave.save();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  document.querySelectorAll("input").forEach(input => {
    const result = Validator(input.id, input.value);
    const errorEl = input.nextElementSibling;

    errorEl.textContent = result === true ? "" : result;
    if (result !== true) valid = false;
  });

  if (!valid) return alert("Please fix validation errors");

  alert("Form submitted successfully!");
  Storage.clear();
  form.reset();
});

function showStorage() {
  alert(localStorage.getItem("onboardingForm"));
}
