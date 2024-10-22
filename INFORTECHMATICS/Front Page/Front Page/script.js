document.addEventListener("DOMContentLoaded", function() {
    // Select all the nav items by their IDs
    const home = document.getElementById("home");
    const about = document.getElementById("about");
    const services = document.getElementById("services");
    const contact = document.getElementById("contact");
  
    // Function to change color to green when hovered
    function changeColorOnHover(item) {
      item.addEventListener('mouseover', function() {
        item.style.color = "green";
      });
  
      item.addEventListener('mouseout', function() {
        item.style.color = "black"; // Reset to default when mouse leaves
      });
    }
  
    // Apply the hover effect to each nav item
    changeColorOnHover(home);
    changeColorOnHover(about);
    changeColorOnHover(services);
    changeColorOnHover(contact);
  });
  