document.addEventListener("DOMContentLoaded", function () {
  function updateTime() {
    const now = new Date();
    const utcTime = now.toISOString().split("T")[1].split(".")[0];
    const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });

    document.getElementById("current-time").textContent = utcTime;
    document.getElementById("current-day").textContent = dayOfWeek;
  }

  updateTime();
  setInterval(updateTime, 1000);
});
