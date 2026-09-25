document.querySelectorAll("#year").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});
