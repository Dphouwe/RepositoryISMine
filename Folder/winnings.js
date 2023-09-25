document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json") // Assuming your JSON file is in the same directory
        .then(response => response.json())
        .then(data => {
            const ticketList = document.getElementById("ticket-list");

            data.forEach(ticket => {
                const ticketDiv = document.createElement("div");
                ticketDiv.classList.add("ticket");
                ticketDiv.innerHTML = `
                    <strong>Ticket #</strong> ${ticket.ticketNumber}<br>
                    <strong>City</strong>: ${ticket.city}<br>
                    <strong>Amount</strong>: ${ticket.amount}
                `;
                ticketList.appendChild(ticketDiv);
            });
        })
        .catch(error => console.error("Error loading JSON file:", error));
});
