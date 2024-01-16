document.addEventListener('DOMContentLoaded', function () {
  // Fetch and display YouTube profile information
  fetchDataAndDisplay();
});

async function fetchDataAndDisplay() {
  // Use fetch or another method to retrieve data from the YouTube profile
  const profileData = await fetchProfileData();

  // Display the data in the popup
  displayProfileData(profileData);
}

function fetchProfileData() {
  // Implement the logic to fetch data from the YouTube profile page
  // You might want to use XMLHttpRequest, fetch API, or other methods
}

function displayProfileData(data) {
  // Update the popup's HTML to display the retrieved data
  const profileInfoDiv = document.getElementById('profileInfo');
  profileInfoDiv.innerHTML = `
    <p>Join Date: ${data.joinDate}</p>
    <p>Subscribers Count: ${data.subscribersCount}</p>
    <!-- Add more information as needed -->
  `;
}
