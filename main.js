document
  .getElementById("timesheetForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Show the loading text
    document.getElementById("loading").style.display = "block";

    var day = document.getElementById("day").value;
    var timeSlot = document.getElementById("timeSlot").value;
    var activity = document.getElementById("activity").value;

    var data = {
      day: day,
      timeSlot: timeSlot,
      activity: activity,
    };

    fetch("C:\\Users\\svora\\Timesheet\\timesheet.json", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsonData) => {
        jsonData.push(data);
        return fetch("C:\\Users\\svora\\Timesheet\\timesheet.json", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData),
        });
      })
      .then(() => {
        // Hide the loading text
        document.getElementById("loading").style.display = "none";
        // Redirect to the display page
        window.location.href = "display.html";
      })
      .catch((error) => {
        console.error("Error:", error);
        // Hide the loading text
        document.getElementById("loading").style.display = "none";
      });
  });
