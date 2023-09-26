async function fetchDataAndDisplay() {
    try {
        const response = await fetch('data.json'); // Load the JSON file
        const data = await response.json();
        
        // Get the HTML element where you want to display the data
        const userData = document.getElementById('userData');

        // Loop through the data array and create HTML elements for each item
        data.forEach(item => {
            const ticketDiv = document.createElement('div');
            ticketDiv.classList.add('ticket'); // Optional, if you want to apply CSS styles
            ticketDiv.innerHTML = `
                <p>Ticket Number: ${item.ticketNumber}</p>
                <p>City: ${item.city}</p>
                <p>Amount: ${item.amount}</p>
            `;
            userData.appendChild(ticketDiv);
        });
    } catch (error) {
        console.error('Error fetching or displaying data:', error);
    }
}

window.addEventListener('load', fetchDataAndDisplay);