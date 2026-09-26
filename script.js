const modal=document.getElementById('modal');const modalContent=document.getElementById('modalContent');const mobileMenu=document.getElementById('mobileMenu');
const menuHTML=`
<span class="modal-kicker">Chaioz / menu</span>
<h2>Pick your <em>chai.</em></h2>
<p class="modal-note">A demo menu based on Chaioz's publicly listed categories and menu items. Prices can change; the order button below sends guests to the current online ordering page.</p>
<div class="modal-menu-grid">
<div><strong>Masala Chai</strong><span>Slow-brewed Indian chai · $3.90</span></div>
<div><strong>Pink Chai</strong><span>Fragrant, creamy and gently spiced</span></div>
<div><strong>Bun Maska</strong><span>Soft bun with butter · $4.95</span></div>
<div><strong>Samosa</strong><span>Potato, onion and peas · from $3.95</span></div>
<div><strong>Vada Pav</strong><span>Fried potato fritter, pav and chutneys · $6.95</span></div>
<div><strong>Samosa Chaat</strong><span>Chutneys, yoghurt, chickpeas and herbs</span></div>
<div><strong>Paneer Bites</strong><span>Crispy paneer with mint chutney · $7.95</span></div>
<div><strong>Milk Cake</strong><span>Thickened milk and flavoured sugar</span></div>
</div>
<div class="modal-actions"><a class="primary-btn" href="https://chaiozonline.com.au/" target="_blank" rel="noopener">Order online ↗</a><a class="ghost-btn" href="#visit" data-close>Visit Chaioz</a></div>`;
const launchHTML=`
<span class="modal-kicker">Chaioz / new</span>
<h2>Fresh from the <em>fusion counter.</em></h2>
<p class="modal-note">Chaioz's public September 2026 posts introduced a run of desi-inspired matcha creations.</p>
<div class="modal-launch">
<div class="launch-chip">01<strong>Rasmalai<br>Matcha</strong></div>
<div class="launch-chip">02<strong>Rose Falooda<br>Matcha</strong></div>
<div class="launch-chip">03<strong>Blueberry<br>Matcha</strong></div>
</div>
<div class="modal-actions"><a class="primary-btn" href="https://www.instagram.com/chaioz_aus/" target="_blank" rel="noopener">See @chaioz_aus ↗</a></div>`;
const rewardsHTML=`
<span class="modal-kicker">Chaioz / rewards</span>
<h2>Keep the chai <em>coming.</em></h2>
<p class="modal-note">The current Chaioz site describes a rewards program where every $1 earns 1 point, with points redeemable for free chai and money off. This demo button is intentionally non-transactional.</p>
<div class="modal-actions"><a class="primary-btn" href="https://www.chaioz.com.au/" target="_blank" rel="noopener">Open Chaioz ↗</a></div>`;
function openModal(type){modalContent.innerHTML=type==='menu'?menuHTML:type==='launch'?launchHTML:rewardsHTML;modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');}
function closeModal(){modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');}
document.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>openModal(b.dataset.open)));
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',closeModal));
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
mobileMenu?.addEventListener('click',()=>{document.querySelector('.desktop-nav')?.classList.toggle('mobile-visible')});
document.querySelectorAll('.desktop-nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.desktop-nav')?.classList.remove('mobile-visible')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id&&id!=='#'){const target=document.querySelector(id);if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});closeModal();}}}));
