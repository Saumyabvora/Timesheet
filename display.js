function loadTimesheetData() {
  fetch('timesheet.json')
    .then(response => response.json())
    .then(data => updateTable(data.timesheetData))
    .catch(error => console.error('Error:', error));
}

function updateTable(data) {
  const timeSlots = ["9-10", "10-11", "11-12", "12-1", "1-2", "2-3", "3-4", "4-5"];
  const tableBody = document.querySelector("#timesheetTable tbody");

  // Clear the table body
  tableBody.innerHTML = '';

  for (let i = 0; i < timeSlots.length; i++) {
    const row = document.createElement('tr');

    // Create the time slot cell
    const timeSlotCell = document.createElement('td');
    timeSlotCell.textContent = timeSlots[i];
    row.appendChild(timeSlotCell);

    // Create the task cells
    for (let j = 0; j < 5; j++) {
      const taskCell = document.createElement('td');
      const taskData = data.find(item => item.day === (j + 1) && item.timeSlot === timeSlots[i]);
      taskCell.textContent = taskData ? taskData.activity : '';
      row.appendChild(taskCell);
    }

    tableBody.appendChild(row);
  }
}

// Load the timesheet data when the page is loaded
loadTimesheetData();
