<script>
  function toggleMenu() {
    var menu = document.querySelector('.mobile-menu');
    var button = document.querySelector('.mobile-menu-open');

    menu.classList.toggle('visible');
    // Зміна іконки кнопки
    button.innerHTML = menu.classList.contains('visible')
      ? '<svg class="menu-icon" viewBox="0 0 24 24"><path d="M12 9l8 8H4z"></path></svg> Закрити меню'
      : '<svg class="menu-icon" viewBox="0 0 24 24"><path d="M12 15l-8-8h16z"></path></svg> Відкрити меню';
  }
</script>
