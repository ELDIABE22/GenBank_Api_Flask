import { logout } from './token.js';

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const sidebarOpen = document.getElementById('sidebar-open');
  const sidebarClose = document.getElementById('sidebar-close');
  const contentDashboard = document.getElementById('content-dashboard');
  const signOut = document.getElementById('sign-out');
  const buttons = document.querySelectorAll('.btn[data-path]');

  const currentPath = window.location.pathname;

  // Hace visible el contenido con una transición suave
  document.body.style.opacity = '1';

  // Botón activo
  buttons.forEach((button) => {
    const buttonPath = button.getAttribute('data-path');
    console.log(buttonPath);

    if (currentPath === buttonPath) {
      button.classList.remove('outline');
    } else {
      button.classList.add('outline');
    }
  });

  // Escuchar cambios de tamaño de pantalla
  window.addEventListener('resize', () => {
    if (window.innerWidth < 1280) {
      sidebar.classList.add('-translate-x-full');
      sidebarOpen.classList.replace('hidden', 'inline');
      contentDashboard.classList.remove('ml-[280px]');
    } else {
      sidebar.classList.remove('-translate-x-full');
      sidebarOpen.classList.replace('inline', 'hidden');
      contentDashboard.classList.add('ml-[280px]');
    }
  });

  sidebarOpen.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
    sidebarOpen.classList.replace('inline', 'hidden');
    contentDashboard.classList.toggle('ml-[280px]');
  });

  sidebarClose.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
    sidebarOpen.classList.replace('hidden', 'inline');
    contentDashboard.classList.remove('ml-[280px]');
  });

  signOut.addEventListener('click', () => {
    logout();
  });
});
