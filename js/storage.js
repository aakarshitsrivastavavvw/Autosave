// LocalStorage abstraction
const Storage = (() => {
  const KEY = "onboardingForm";

  const save = (data) => {
    localStorage.setItem(KEY, JSON.stringify(data));
  };

  const load = () => {
    return JSON.parse(localStorage.getItem(KEY));
  };

  const clear = () => {
    localStorage.removeItem(KEY);
  };

  return { save, load, clear };
})();
