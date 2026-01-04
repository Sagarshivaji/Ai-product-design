// Simulated dynamic update
let employeeCount = 120;

setTimeout(() => {
  employeeCount += 3;
  document.getElementById("empCount").textContent = employeeCount;
}, 2000);

// Example AI alert action
document.querySelector(".ai-box button").addEventListener("click", () => {
  alert(
    "AI Insight:\n\n• Burnout risk based on overtime\n• Low leave usage\n• High workload\n\nRecommended: Manager review"
  );
});
