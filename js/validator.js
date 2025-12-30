// Validation Engine using Closures
const Validator = (() => {
  const rules = {
    name: value =>
      value.length >= 3 || "Name must be at least 3 characters",

    email: value =>
      /\S+@\S+\.\S+/.test(value) || "Invalid email address",

    empId: value =>
      /^EMP\d{3}$/.test(value) || "Employee ID must be like EMP123",

    joinDate: value =>
      value !== "" || "Joining date is required"
  };

  return function validate(field, value) {
    return rules[field](value);
  };
})();
