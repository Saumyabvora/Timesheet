document.getElementById('timesheetForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Show the loading text
    document.getElementById('loading').style.display = 'block';
  
    var day = document.getElementById('day').value;
    var timeSlot = document.getElementById('timeSlot').value;
    var activity = document.getElementById('activity').value;
  
    var data = {
      "day": parseInt(day),
      "timeSlot": timeSlot,
      "activity": activity
    };
  
    fetch('timesheet.json')
      .then(response => response.json())
      .then(timesheetData => {
        timesheetData.push(data);
        return fetch('timesheet.json', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ timesheetData })
        });
      })
      .then(() => {
        // Hide the loading text
        document.getElementById('loading').style.display = 'none';
        // Redirect to the display page
        window.location.href = 'display.html';
      })
      .catch(error => {
        console.error('Error:', error);
        // Hide the loading text
        document.getElementById('loading').style.display = 'none';
      });
  });
  