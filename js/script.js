(() => {
  const balance = document.getElementById('balanceAmount');
  const balanceToggle = document.getElementById('balanceToggle');
  const searchInput = document.getElementById('searchInput');
  const transactionRows = [...document.querySelectorAll('.transaction-row')];
  const emptyState = document.getElementById('emptyState');
  const toastElement = document.getElementById('appToast');
  const toastMessage = document.getElementById('toastMessage');
  const themeToggle = document.getElementById('themeToggle');
  const appToast = window.bootstrap ? bootstrap.Toast.getOrCreateInstance(toastElement, { delay: 2600 }) : null;
  let balanceVisible = true;

  const savedTheme = localStorage.getItem('payflow-theme');
  if (savedTheme === 'dark') document.body.dataset.theme = 'dark';
  updateThemeButton();

  function updateThemeButton() {
    const isDark = document.body.dataset.theme === 'dark';
    themeToggle.innerHTML = `<i class="bi ${isDark ? 'bi-sun' : 'bi-moon-stars'}"></i>`;
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    themeToggle.title = isDark ? 'Switch to light theme' : 'Switch to dark theme';
  }

  function showToast(message) {
    toastMessage.textContent = message;
    if (appToast) appToast.show();
  }

  balanceToggle.addEventListener('click', () => {
    balanceVisible = !balanceVisible;
    balance.textContent = balanceVisible ? balance.dataset.balance : '••••••••';
    balanceToggle.innerHTML = `<i class="bi ${balanceVisible ? 'bi-eye' : 'bi-eye-slash'}"></i>`;
    balanceToggle.setAttribute('aria-label', balanceVisible ? 'Hide balance' : 'Show balance');
    balanceToggle.title = balanceVisible ? 'Hide balance' : 'Show balance';
  });

  themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    if (nextTheme === 'light') delete document.body.dataset.theme;
    else document.body.dataset.theme = nextTheme;
    localStorage.setItem('payflow-theme', nextTheme);
    updateThemeButton();
  });

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;
    transactionRows.forEach((row) => {
      const matches = row.dataset.search.includes(query);
      row.classList.toggle('d-none', !matches);
      if (matches) visibleCount += 1;
    });
    emptyState.classList.toggle('d-none', visibleCount !== 0);
  });

  document.querySelectorAll('[data-action]').forEach((button) => {
    button.addEventListener('click', () => showToast(`${button.dataset.action} is a demo action. No money will be moved.`));
  });

  document.querySelectorAll('[data-toast]').forEach((button) => {
    button.addEventListener('click', () => showToast(button.dataset.toast));
  });

  document.querySelectorAll('[data-scan]').forEach((button) => {
    button.addEventListener('click', () => {
      const scanModal = document.getElementById('scanModal');
      if (window.bootstrap && scanModal) bootstrap.Modal.getOrCreateInstance(scanModal).show();
    });
  });

  document.querySelectorAll('.nav-item').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelector('.nav-item.active')?.classList.remove('active');
      button.classList.add('active');
      const target = document.getElementById(button.dataset.target);
      if (button.dataset.target === 'profile') {
        showToast('Your profile is ready to explore.');
        return;
      }
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.getElementById('notificationButton')?.addEventListener('click', () => showToast('You’re all caught up on notifications.'));

  const observedSections = ['home', 'payments', 'history', 'rewards']
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      const active = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!active) return;
      document.querySelectorAll('.nav-item').forEach((button) => {
        button.classList.toggle('active', button.dataset.target === active.target.id);
      });
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, .1, .35] });
    observedSections.forEach((section) => observer.observe(section));
  }
})();