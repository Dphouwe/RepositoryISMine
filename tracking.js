// Function to log data to the console
function logData(data) {
console.log(data);
}

// Gather browser and system information
const browserInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
};

// Display the browser and system information
logData("Browser and System Information:");
logData(browserInfo);

// You can add more data tracking or system information gathering here

// Example: Track screen resolution
const screenResolution = {
    width: window.screen.width,
    height: window.screen.height,
};
logData("Screen Resolution:");
logData(screenResolution);

// Example: Track the current URL
logData("Current URL:");
logData(window.location.href);