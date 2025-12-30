// Auto-save logic
const AutoSave = (() => {
  const collectFormData = () => {
    const data = {};
    document.querySelectorAll("input").forEach(input => {
      data[input.id] = input.value;
    });
    return data;
  };

const saveDraft = () => {
  const data = collectFormData();
  Storage.save(data);

  document.getElementById("autosaveStatus").textContent =
    "Last auto-saved at " + new Date().toLocaleTimeString();
};


  const restoreDraft = () => {
    const data = Storage.load();
    if (!data) return;

    Object.keys(data).forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = data[id];
    });
  };

  return {
    save: debounce(saveDraft, 800),
    restore: restoreDraft
  };
})();
