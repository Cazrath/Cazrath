// Interactivity for Cazrath full mockup (single-page behavior)
(function(){
  const cBtn = document.getElementById('cButton');
  const loginModal = document.getElementById('loginModal');
  const loginForm = document.getElementById('loginForm');
  const cancelLogin = document.getElementById('cancelLogin');
  const userMenu = document.getElementById('userMenu');
  const panelArea = document.getElementById('panelArea');
  const toast = document.getElementById('toast');

  let loggedIn = false;

  function show(el){ if(el) el.classList.remove('hidden'); }
  function hide(el){ if(el) el.classList.add('hidden'); }
  function showToast(msg, ms=2200){
    toast.textContent = msg; show(toast);
    setTimeout(()=> hide(toast), ms);
  }

  // Show login modal or menu on cButton click
  cBtn.addEventListener('click', (e)=>{
    if(!loggedIn){
      show(loginModal);
      document.getElementById('password').focus();
    } else {
      const expanded = cBtn.getAttribute('aria-expanded') === 'true';
      if(expanded){ hide(userMenu); cBtn.setAttribute('aria-expanded','false'); }
      else{ show(userMenu); cBtn.setAttribute('aria-expanded','true'); }
    }
  });

  cancelLogin.addEventListener('click', ()=> hide(loginModal));

  // Login check
  loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    const u = document.getElementById('username').value.trim();
    const p = document.getElementById('password').value;
    if(u === 'Cazrath' && p === 'Ayesha'){
      loggedIn = true;
      hide(loginModal);
      showToast('Welcome back, Cazrath.');
      // show dashboard by default
      navigateTo('dashboard');
    } else {
      showToast('Login failed. Check username/password.');
      document.getElementById('password').value = '';
      document.getElementById('password').focus();
    }
  });

  // menu actions
  userMenu.addEventListener('click', (e)=>{
    const btn = e.target.closest('button');
    if(!btn) return;
    const action = btn.dataset.action;
    hide(userMenu); cBtn.setAttribute('aria-expanded','false');
    if(action === 'logout'){
      loggedIn = false;
      navigateTo('logoutPage');
      showToast('Logged out.');
      return;
    }
    switch(action){
      case 'showDashboard': navigateTo('dashboard'); break;
      case 'showCustomize': navigateTo('customize'); break;
      case 'showFragments': navigateTo('fragments'); break;
      case 'showMalzreth': navigateTo('malzreth'); break;
      case 'showSettings': navigateTo('settings'); break;
    }
  });

  // simple navigation
  function navigateTo(id){
    // hide homepage and all pages, then show target page
    document.getElementById('homepage').classList.add('hidden');
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.add('hidden'));
    const target = document.getElementById(id);
    if(target) target.classList.remove('hidden');
    // small panel to show context
    if(id !== 'logoutPage') {
      panelArea.innerHTML = '<strong>Quick Panel</strong><div style="margin-top:8px;color:var(--muted)">Opened: '+id+'</div>';
      show(panelArea);
      setTimeout(()=> hide(panelArea), 9000);
    }
  }

  // Save identity edits
  document.getElementById('saveIdentity')?.addEventListener('click', ()=>{
    const v = document.getElementById('editVein').value;
    const a = document.getElementById('editAge').value;
    const q = document.getElementById('editQuote').value;
    // update homepage block
    const rows = document.querySelectorAll('.identity .row span');
    if(rows.length >= 2){
      rows[0].textContent = v;
      rows[1].textContent = a;
    }
    document.querySelector('.quote').textContent = q;
    showToast('Identity saved.');
  });

  // Fragments form
  const fragForm = document.getElementById('fragmentForm');
  const fragList = document.getElementById('fragmentList');
  fragForm?.addEventListener('submit', (e)=>{
    e.preventDefault();
    const t = document.getElementById('fragTitle').value.trim();
    const c = document.getElementById('fragContent').value.trim();
    if(!t || !c){ showToast('Fill title and content.'); return; }
    const li = document.createElement('li');
    li.textContent = t + ' — ' + (c.length>120? c.slice(0,120)+'…': c);
    fragList.prepend(li);
    fragForm.reset();
    showToast('Fragment uploaded.');
  });

  // click outside menu closes it
  document.addEventListener('click', (e)=>{
    if(!userMenu.contains(e.target) && e.target !== cBtn){
      hide(userMenu); cBtn.setAttribute('aria-expanded','false');
    }
  });

  // initial - homepage visible
  navigateTo('homepage');
})();
