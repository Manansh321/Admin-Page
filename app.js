    // Add event listener to the navbar toggle button
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    // Toggle the navbar collapse
    document.querySelector('.navbar-collapse').classList.toggle('collapse');
  });
  
  // Add event listener to the tickets tab
  document.querySelector('#tickets-tab').addEventListener('click', function() {
    // Show the tickets content
    document.querySelector('.tickets-content').classList.remove('d-none');
    // Hide the other contents
    document.querySelectorAll('.content').forEach(function(content) {
      if (content !== document.querySelector('.tickets-content')) {
        content.classList.add('d-none');
      }
    });
  });
  
  // Add event listener to the clients tab
  document.querySelector('#clients-tab').addEventListener('click', function() {
    // Show the clients content
    document.querySelector('.clients-content').classList.remove('d-none');
    // Hide the other contents
    document.querySelectorAll('.content').forEach(function(content) {
      if (content !== document.querySelector('.clients-content')) {
        content.classList.add('d-none');
      }
    });
  });
  
  // Add event listener to the agents tab
  document.querySelector('#agents-tab').addEventListener('click', function() {
    // Show the agents content
    document.querySelector('.agents-content').classList.remove('d-none');
    // Hide the other contents
    document.querySelectorAll('.content').forEach(function(content) {
      if (content !== document.querySelector('.agents-content')) {
        content.classList.add('d-none');
      }
    });
  });