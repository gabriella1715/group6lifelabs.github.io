function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page-section');
  pages.forEach(page => page.style.display = 'none');
  
  // Show selected page
  document.getElementById(pageId).style.display = 'block';
  
  // Hide menu after selection
  document.getElementById('menu').style.display = 'none';
}