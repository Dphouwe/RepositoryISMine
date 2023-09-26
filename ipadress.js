// Function to get the user's IP address using a free IP geolocation service and log it to the console
function getIPAddress() {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            console.log('Your IPv6 address is:', data.ip);
        })
        .catch(error => {
            console.error('Error fetching IP address:', error);
        });
}

// Call the function to get and log the IP address to the console
getIPAddress();


// Function to get the user's IPv4 address and log it to the console
function getIPv4Address() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ipv4.icanhazip.com', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const ipv4Address = xhr.responseText.trim();
            console.log('Your IPv4 address is:', ipv4Address);
        } else {
            console.error('Error fetching IPv4 address:', xhr.statusText);
        }
    };

    xhr.onerror = function () {
        console.error('Network error while fetching IPv4 address');
    };

    xhr.send();
}

// Call the function to get and log the IPv4 address to the console
getIPv4Address();