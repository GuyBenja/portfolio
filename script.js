(function(){
  // === i18n ===
  const I18N = {
    EN: { nav_about:"About", nav_skills:"Skills", nav_projects:"Projects", nav_contact:"Contact",
      hero_title:"Backend & Full-Stack Developer",
      hero_sub:"Software developer with experience in Backend services and Web/Mobile apps, System Design, OOP and Agile.",
      cta_projects:"View Projects", cta_email:"Contact Me",
      about_title:"About",
      about_body:"I am a passionate software developer with a strong drive to create innovative solutions...",
      skills_title:"Skills", projects_title:"Projects", contact_title:"Contact",
      contact_intro:"Leave your details and I’ll get back to you.",
      contact_info_title:"Contact Information", contact_location:"Center District, Israel",
      near_desc:"A research-driven learning tool that helps users choose the most context-appropriate near-synonym...",
      fin_desc:"A clean marketing landing page for independent pension advisors...",
      p3_desc:"Coming soon.",
      btn_view_video:"Watch Video", btn_view_code:"View Code", btn_view_poster:"View Poster",
      btn_live_demo:"Live Demo", btn_send:"Send Message"
    },
    HE: { nav_about:"עליי", nav_skills:"כישורים", nav_projects:"פרויקטים", nav_contact:"יצירת קשר",
      hero_title:"מפתח Backend ו-Full-Stack",
      hero_sub:"מפתח תוכנה עם ניסיון בשירותי Backend ואפליקציות Web/Mobile, תכנון מערכות, OOP ו-Agile.",
      cta_projects:"ראה פרויקטים", cta_email:"דברו איתי",
      about_title:"קצת עליי",
      about_body:"אני מפתח תוכנה בעל תשוקה אמיתית ליצירת פתרונות חדשניים...",
      skills_title:"כישורים", projects_title:"פרויקטים", contact_title:"יצירת קשר",
      contact_intro:"השאירו פרטים ונחזור אליכם בהקדם.",
      contact_info_title:"פרטי התקשרות", contact_location:"מחוז המרכז, ישראל",
      near_desc:"כלי לימוד מחקרי המסייע למשתמשים לבחור את המילה הכמעט-נרדפת...",
      fin_desc:"דף נחיתה שיווקי נקי עבור יועצים פנסיוניים עצמאיים...",
      p3_desc:"בקרוב",
      btn_view_video:"צפייה בסרטון", btn_view_code:"צפייה בקוד", btn_view_poster:"צפייה בפוסטר",
      btn_live_demo:"דמו חי", btn_send:"שלח הודעה"
    }
  };

  const map = { 'a[href="#about"]':'nav_about', 'a[href="#skills"]':'nav_skills',
                'a[href="#projects"]':'nav_projects','a[href="#contact"]':'nav_contact' };
  Object.entries(map).forEach(([sel,key])=>{
    const el=document.querySelector(sel); if(el) el.setAttribute('data-i18n',key);
  });

  const langBtn=document.getElementById('langToggle');
  const scope=document.querySelector('main.fade-scope');
  let lang=localStorage.getItem('lang')||'EN';

  function translateAll(){
    document.documentElement.lang=lang==='EN'?'en':'he';
    document.documentElement.dir=lang==='EN'?'ltr':'rtl';
    langBtn.textContent=(lang==='EN')?'EN':'HE';
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key=el.getAttribute('data-i18n');
      if(I18N[lang][key]) el.textContent=I18N[lang][key];
    });
  }
  function applyLangWithFade(){
    if(!scope){translateAll();return;}
    scope.classList.add('fade-out');
    setTimeout(()=>{translateAll();scope.classList.remove('fade-out');},300);
  }
  applyLangWithFade();
  langBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    lang=(lang==='EN')?'HE':'EN';
    localStorage.setItem('lang',lang);
    applyLangWithFade();
  });
})();

// === Hamburger menu logic ===
(function(){
  const menuBtn=document.getElementById('menuToggle');
  const navPanel=document.getElementById('primaryNav');
  const backdrop=document.getElementById('menuBackdrop');
  if(!menuBtn||!navPanel||!backdrop) return;

  function openMenu(){
    navPanel.classList.add('open');
    document.body.classList.add('no-scroll');
    menuBtn.setAttribute('aria-expanded','true');
    menuBtn.classList.add('is-open');
    backdrop.hidden=false;
    trapFocus(navPanel);
  }
  function closeMenu(){
    navPanel.classList.remove('open');
    document.body.classList.remove('no-scroll');
    menuBtn.setAttribute('aria-expanded','false');
    menuBtn.classList.remove('is-open');
    backdrop.hidden=true;
    releaseFocus();
  }
  function toggleMenu(){ navPanel.classList.contains('open')?closeMenu():openMenu(); }

  menuBtn.addEventListener('click',e=>{e.preventDefault();toggleMenu();});
  backdrop.addEventListener('click',closeMenu);
  navPanel.addEventListener('click',e=>{ if(e.target.tagName==='A') closeMenu(); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeMenu(); });

  window.addEventListener('resize',()=>{ if(window.innerWidth>=769) closeMenu(); });

  /*=== Focus Trap ===*/
  let focusables = [], firstEl=null, lastEl=null;
  function trapFocus(scope){
    focusables = [...scope.querySelectorAll('a, button, input, textarea, [tabindex]:not([tabindex="-1"])')].filter(el=>!el.disabled && el.offsetParent!==null);
    firstEl = focusables[0]; lastEl = focusables[focusables.length-1];
    (firstEl||menuBtn)?.focus();
    document.addEventListener('keydown', loopFocus);
  }
  function releaseFocus(){ document.removeEventListener('keydown', loopFocus); }
  function loopFocus(e){
    if(e.key!=='Tab' || focusables.length===0) return;
    if(e.shiftKey && document.activeElement===firstEl){ e.preventDefault(); lastEl.focus(); }
    else if(!e.shiftKey && document.activeElement===lastEl){ e.preventDefault(); firstEl.focus(); }
  }
})();

// Note: The above code implements internationalization (i18n) for English and Hebrew languages,
// allowing users to toggle between languages with a fade effect. It also manages a responsive
// hamburger menu for navigation on smaller screens, ensuring accessibility and usability.