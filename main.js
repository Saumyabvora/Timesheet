document.getElementById('timesheetForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Show the loading text
    document.getElementById('loading').style.display = 'block';

    var day = document.getElementById('day').value;
    var timeSlot = document.getElementById('timeSlot').value;
    var activity = document.getElementById('activity').value;

    var data = {
        "day": day,
        "timeSlot": timeSlot,
        "activity": activity
    };  

    fetch('https://script.google.com/a/macros/guidewire.com/s/AKfycbweNIGMJ_e3Grwk_wi0RNRsJFkdn_EYLli-3EQpvKrG8NVL1RDQjFrgTKF0W03n_aK5/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(text => {
        console.log(text);
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
