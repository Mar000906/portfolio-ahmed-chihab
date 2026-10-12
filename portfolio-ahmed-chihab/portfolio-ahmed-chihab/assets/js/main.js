const translations = {
  en: {
    nav_home:"Home",nav_skills:"Skills",nav_experience:"Experience",nav_projects:"Projects",nav_about:"About",nav_contact:"Contact",recruit:"Hire Me",
    hero_badge:"Ahmed Chihab — Finance & BI Analyst",hero_line1:"Finance & BI Analyst",hero_line2:"Reporting & Dashboards",
    hero_lead:"I help teams turn financial and operational data into reliable reports and decision-making dashboards, using Power BI, SQL, Python and Excel to monitor KPIs, track SLAs and support decision-making.",
    contact_job:"Contact me about a role / mission",download_cv:"Download my CV",available:"AVAILABLE",footer_blurb:"Financial and operational data, made clear and decision-ready.",footer_nav:"Navigation",
    skill_badge:"Skills & Areas of Expertise",skill_title:"My Core Expertise for Your Missions & Teams",skill_sub:"For a junior BI, reporting or data analysis role, here are my key skills.",
    exp_badge:"Professional Experience",exp_title:"My Experience",exp_sub:"Operational reporting, dashboards and data quality in industry, and administrative reporting in the public sector.",
    projects_badge:"Academic & Personal Projects",projects_title:"My Projects",projects_sub:"Data analysis projects covering finance, sales, CRM and FinTech.",
    about_badge:"Profile & Data Philosophy",about_title:"About Me",contact_badge:"Contact & Opportunities",contact_title:"Let's Discuss an Opportunity",
    contact_sub:"Looking for a Finance & BI Analyst for a role, internship or mission? Contact me by message, phone or LinkedIn."
  }
};
function setLanguage(lang){
  document.documentElement.lang = lang === 'en' ? 'en' : 'fr';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;
    if(lang==='en' && translations.en[key]) el.textContent=translations.en[key];
    else if(el.dataset.fr) el.textContent=el.dataset.fr;
  });
  document.querySelectorAll('[data-lang-toggle]').forEach(b=>{b.textContent=lang==='en'?'EN · FR':'FR · EN';b.setAttribute('aria-label',lang==='en'?'Switch to French':'Switch to English')});
  localStorage.setItem('portfolio-language',lang);
}
document.addEventListener('DOMContentLoaded',()=>{
  const saved=localStorage.getItem('portfolio-language');
  if(saved==='en') setLanguage('en');
  document.querySelectorAll('[data-lang-toggle]').forEach(b=>b.addEventListener('click',()=>setLanguage(document.documentElement.lang==='fr'?'en':'fr')));
  const burger=document.querySelector('.burger'), navWrap=document.querySelector('.nav-wrap');
  if(burger&&navWrap){burger.addEventListener('click',()=>{const open=navWrap.classList.toggle('open');burger.setAttribute('aria-expanded',String(open));document.body.style.overflow=open?'hidden':'';});navWrap.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navWrap.classList.remove('open');burger.setAttribute('aria-expanded','false');document.body.style.overflow='';}));}
  const revealEls=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});revealEls.forEach(el=>observer.observe(el));}else revealEls.forEach(el=>el.classList.add('visible'));
  document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
    const filter=btn.dataset.filter;
    document.querySelectorAll('[data-category]').forEach(card=>card.classList.toggle('hidden',filter!=='all'&&card.dataset.category!==filter));
  }));
  const form=document.querySelector('#contact-form');
  if(form){form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;
    const d=new FormData(form), name=d.get('name').trim(), email=d.get('email').trim(), company=d.get('company').trim(), type=d.get('type'), message=d.get('message').trim();
    const subject=`[Portfolio] Opportunité - ${type} - ${name}`;
    const body=`Bonjour Ahmed,\n\n${message}\n\nNom : ${name}\nEmail : ${email}\nEntreprise : ${company||'Non précisée'}\nType d'opportunité : ${type}`;
    const success=document.querySelector('#form-success');success.style.display='block';success.textContent='Votre application e-mail va s’ouvrir avec le message prérempli. Vous pourrez vérifier puis envoyer votre e-mail.';
    window.location.href=`mailto:ahmadog333@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });}
});
