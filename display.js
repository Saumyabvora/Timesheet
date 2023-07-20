function loadTimesheetData() {
  fetch("C:\\Users\\svora\\Timesheet\\timesheet.json")
    .then((response) => response.json())
    .then((data) => updateTable(data))
    .catch((error) => console.error("Error:", error));
}

function updateTable(data) {
  const timeSlots = [
    "9-10",
    "10-11",
    "11-12",
    "12-1",
    "1-2",
    "2-3",
    "3-4",
    "4-5",
  ];
  const tableBody = document.querySelector("#timesheetTable tbody");

  // Clear the table body
  tableBody.innerHTML = "";

  for (let i = 0; i < timeSlots.length; i++) {
    const row = document.createElement("tr");

    // Create the time slot cell
    const timeSlotCell = document.createElement("td");
    timeSlotCell.textContent = timeSlots[i];
    row.appendChild(timeSlotCell);

    // Create the task cells for each day
    for (let j = 0; j < 5; j++) {
      const taskCell = document.createElement("td");
      const activity = getActivity(data, timeSlots[i], j);
      taskCell.textContent = activity || "";
      row.appendChild(taskCell);
    }

    tableBody.appendChild(row);
  }
}

function getActivity(data, timeSlot, dayIndex) {
  const entry = data.find(
    (item) => item.timeSlot === timeSlot && item.dayIndex === dayIndex
  );
  return entry ? entry.activity : "";
}

// Load the timesheet data when the page is loaded
loadTimesheetData();
