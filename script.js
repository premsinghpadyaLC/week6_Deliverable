 function showSection(id) {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach(section => {
    section.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}

// Show first section by default
document.addEventListener("DOMContentLoaded", () => {
  showSection("flowchart");
});
