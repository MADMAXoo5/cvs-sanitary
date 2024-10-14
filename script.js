// Get the Category button, Sidebar, Overlay, and Close button elements
const categoryBtn = document.getElementById("category-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-btn");

// Function to open the sidebar
function openSidebar() {
  sidebar.style.width = "250px"; // Set the sidebar width to 250px
  overlay.style.display = "block"; // Display the overlay
}

// Function to close the sidebar
function closeSidebar() {
  sidebar.style.width = "0"; // Set the sidebar width to 0px
  overlay.style.display = "none"; // Hide the overlay
}

// Open sidebar when the "Category" button is clicked
categoryBtn.addEventListener("click", openSidebar);

// Close sidebar when the close button is clicked
closeBtn.addEventListener("click", closeSidebar);

// Close sidebar when clicking outside (on the overlay)
overlay.addEventListener("click", closeSidebar);
