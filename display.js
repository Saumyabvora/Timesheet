function loadTimesheetData() {
    // Updated to fetch from the Google Apps Script web app
    fetch("https://script.google.com/a/macros/guidewire.com/s/AKfycbweNIGMJ_e3Grwk_wi0RNRsJFkdn_EYLli-3EQpvKrG8NVL1RDQjFrgTKF0W03n_aK5/exec")      
      .then(response => response.json())
      .then(data => updateTable(data))
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
        // You might need to adjust how you access your data based on its structure
        taskCell.textContent = data[j][i] || '';  // Use the task data or an empty string if there's no data
        row.appendChild(taskCell);
      }
      
      tableBody.appendChild(row);
    }
  }
  
  // Load the timesheet data when the page is loaded
  loadTimesheetData();
  