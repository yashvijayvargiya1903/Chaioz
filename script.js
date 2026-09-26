const VISUALS={
  hot:'a beautiful ceramic cup of Indian chai, rich amber tea, visible steam, elegant café presentation',
  cold:'a premium chilled Indian café drink in a tall clear glass, ice cubes, creamy or colourful layers',
  coolers:'a sparkling fruit cooler in a tall elegant glass, ice, fresh fruit garnish and condensation',
  mocktails:'a sophisticated Indian-inspired mocktail in a tall premium glass, ice, mint and fresh fruit garnish',
  matcha:'a premium matcha latte in a clear glass or ceramic cup, smooth layered green matcha, elegant garnish',
  bowl:'a premium Indian Bombay bowl photographed from a three-quarter overhead angle, rice or chips, curry, salad and chutney',
  toastie:'a golden toasted Bombay sandwich, crisp bread, melted filling, cut open to show the centre',
  wrap:'a premium Indian street-food wrap cut diagonally, visible filling, fresh salad and chutney',
  street:'an appetizing Indian street-food platter, crispy textures, chutneys and café-style presentation',
  puff:'a golden flaky Indian puff pastry on a ceramic plate, crisp layers and visible savoury filling',
  sweet:'an elegant Indian milk-based dessert on a premium ceramic dessert plate, creamy texture and garnish',
  bites:'a premium Indian chai-time snack beside a warm cup of tea, bakery-style café presentation'
};
const imgSeed=q=>q.toLowerCase().replace(/[^a-z0-9]+/g,'-');
const IMG=(name,id='hot')=>{
  const prompt='premium photorealistic food photography for Chaioz North Adelaide, '+(VISUALS[id]||VISUALS.hot)+', specifically '+name+', warm cinematic editorial lighting, dark teal and cream luxury café palette, natural realistic food texture, appetizing, centered composition, premium restaurant advertising photograph, no text, no logo, no people';
  return 'https://image.pollinations.ai/prompt/'+encodeURIComponent(prompt)+'?width=700&height=500&nologo=true&seed='+encodeURIComponent(imgSeed(name));
};
const FALLBACK=(name,id='hot')=>{
  const icon={hot:'☕',cold:'🥤',coolers:'✧',mocktails:'✦',matcha:'🍵',bowl:'◉',toastie:'▣',wrap:'◌',street:'◆',puff:'◇',sweet:'✦',bites:'◒'}[id]||'☕';
  const safe=String(name).replace(/[&<>]/g,'');
  const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 500"><rect width="700" height="500" fill="#ead8c0"/><circle cx="350" cy="235" r="125" fill="#f7f1e7"/><text x="350" y="255" text-anchor="middle" font-size="92">'+icon+'</text><text x="350" y="410" text-anchor="middle" font-family="Georgia" font-size="25" fill="#103d39">'+safe+'</text></svg>';
  return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg);
};
const imageTag=(name,id,alt=name)=>'<img loading="lazy" decoding="async" src="'+IMG(name,id)+'" alt="'+esc(alt)+'" onerror="this.onerror=null;this.src=FALLBACK(this.alt,'+JSON.stringify(id)+')">';
const products=[
['hot','Hot Drinks','Karak Classic','$4.95','Customer Favourite','World famous traditional chai, freshly brewed with Chaioz spices.'],
['hot','Hot Drinks','Kesar Chai','$5.95','','Saffron-infused chai with a rich, fragrant finish.'],
['hot','Hot Drinks','Masala Chai','$4.95','','Classic masala chai with warming spices.'],
['hot','Hot Drinks','Ginger Chai','$4.95','','Bold chai with fresh ginger.'],
['hot','Hot Drinks','Pink Chai','$4.95','','Milky pink chai with vanilla and fragrant spices.'],
['hot','Hot Drinks','Karak Coffee','$4.95','','Creamy brewed coffee with Chaioz karak magic.'],
['hot','Hot Drinks','Hot Chocolate','$4.95','','Smooth, chocolatey and comforting.'],
['hot','Hot Drinks','Kashmiri Kahwa','$4.95','Customer Favourite','Green tea with saffron and aromatic spices.'],
['hot','Hot Drinks','Mint Tea','$4.95','','Refreshing herbal peppermint tea.'],
['hot','Hot Drinks','Vegan Chai','$5.95','','Classic or masala chai with oat or almond milk.'],
['cold','Cold Drinks','Iced Karak Coffee','$7.95','','Bold, strong coffee served chilled over ice.'],
['cold','Cold Drinks','Rabadi Falooda','$9.95','','Creamy thickened milkshake topped with crushed nuts.'],
['cold','Cold Drinks','Rose Falooda','$9.95','','Rose ice-cream milkshake topped with crushed nuts.'],
['cold','Cold Drinks','Aam Panna','$7.95','Customer Favourite','Tangy raw mango drink with a refreshing spiced finish.'],
['coolers','Coolers','Lemon Lime','$7.95','Customer Favourite','Light, fizzy and refreshing.'],
['coolers','Coolers','Blueberry','$7.95','','Chilled blueberry cooler.'],
['coolers','Coolers','Strawberry','$7.95','','Chilled strawberry cooler.'],
['mocktails','Mocktails','Tahitian Lime','$8.95','','Sparkling lime mojito with fresh mint.'],
['mocktails','Mocktails','Mango Mojito','$8.95','Customer Favourite','Mango spritz with fresh mint.'],
['mocktails','Mocktails','Watermelon Spritz','$8.95','','Sparkling watermelon and lime with mint.'],
['mocktails','Mocktails','Lychee Mojito','$8.95','','Tropical lychee with mint and citrus.'],
['matcha','Matcha','Pistachio Matcha','$8.95','','Grade-1 matcha with a pistachio blend.'],
['matcha','Matcha','Blueberry & White Chocolate','$8.95','Customer Favourite','Blueberry and white chocolate matcha blend.'],
['matcha','Matcha','Rose Falooda Matcha','$8.95','NEW','Rose falooda-inspired matcha.'],
['bowl','All Day Eats','Butter Chicken Bombay Bowl','$14.95','Customer Favourite','Creamy butter chicken with salad and chutney.'],
['bowl','All Day Eats','Paneer Makhani Bombay Bowl','$14.95','','Creamy paneer makhani with rice or fries.'],
['bowl','All Day Eats','Channa Masala Bombay Bowl','$13.95','','Spiced chickpea curry with rice or fries.'],
['toastie','All Day Eats','Paneer Sandwich','$13.95','Customer Favourite','Schezwan paneer and Chaioz spices in toasted bread.'],
['toastie','All Day Eats','Classic Bombay','$11.95','','Aloo potato with classic spices and green chutney.'],
['toastie','All Day Eats','Tandoori Chicken Melt','$12.95','Customer Favourite','Tandoori chicken, cheese and mayo toastie.'],
['toastie','All Day Eats','Chicken Classic','$13.95','','Pulled chicken with a Chaioz recipe.'],
['wrap','All Day Eats','Veg Twister','$11.95','','Crispy potato tikki, salad and cheesy sauce.'],
['wrap','All Day Eats','Paneer Makhani Wrap','$12.95','Customer Favourite','Paneer makhani cubes with salad and mayo.'],
['wrap','All Day Eats','Butter Chicken Wrap','$11.95','Customer Favourite','Pulled masala butter chicken in naan.'],
['wrap','All Day Eats','Tandoori Chicken Wrap','$12.95','','Tandoori chicken with onion and minty yoghurt chutney.'],
['street','Street Food','Masala Chips','$7.95','','Fries tossed in Chaioz masala sauce.'],
['street','Street Food','Honey Chilli Cauliflower','$11.95','Customer Favourite','Crispy cauliflower in sweet-spicy sauce.'],
['street','Street Food','Samosa Chaat','$11.95','','Samosa, chickpeas, yoghurt, chutneys and onion.'],
['street','Street Food','Veg Momos (5pcs)','$9.95','','Steamed vegetable dumplings with sweet chilli.'],
['street','Street Food','Cheesy Chips','$8.95','','Crispy fries in Chaioz cheesy sauce.'],
['street','Street Food','Aloo Tikki Sliders (2pcs)','$10.95','Customer Favourite','Mini spiced potato sliders.'],
['street','Street Food','Aloo Tikki Chaat','$11.95','','Spiced potato patties with yoghurt and chutneys.'],
['street','Street Food','Jalapeño Cheese Bites (6pcs)','$9.95','Customer Favourite','Crispy cheese bites with mild jalapeño.'],
['street','Street Food','Mix Pakode','$9.95','','Crispy vegetable fritters with Chaioz masala.'],
['street','Street Food','Samosa (2pcs)','$7.95','','Crispy potato and pea samosas.'],
['street','Street Food','Vada Pav','$9.95','','Mumbai-style potato fritter in a soft bun.'],
['street','Street Food','Chick-a Boom Bites','$9.95','','Crispy chicken bites.'],
['puff','Puff Patty','Aloo Puff Patty','$7.95','Customer Favourite','Flaky pastry filled with spiced potato masala.'],
['puff','Puff Patty','Paneer Puff Patty','$8.95','','Buttery puff pastry with spiced paneer.'],
['puff','Puff Patty','Chicken Puff Patty','$8.95','','Golden pastry filled with seasoned chicken mince.'],
['sweet','Sweet Things','Pistachio Milk Cake','$5.95','','Rich, creamy pistachio milk cake.'],
['sweet','Sweet Things','Rasmalai','$6.95','','Soft milk cakes in saffron-cardamom milk.'],
['sweet','Sweet Things','Gulab Jamun','$5.95','','Two golden dumplings soaked in sweet syrup.'],
['sweet','Sweet Things','Milk Cake','$4.95','','Thickened milk with flavoured sugar.'],
['bites','Chai Bites','Bun Maska','$4.95','','Soft bun with butter.'],
['bites','Chai Bites','Rusk / Toast','$1.95','','Crunchy baked bread for your chai.'],
['bites','Chai Bites','Cookies','$4.95','','Rich cookies in assorted varieties.'],
['bites','Chai Bites','Khari','$1.95','','Salted crispy Indian baked puff.']
];

const cats=[
['all','All items'],['hot','Hot drinks'],['cold','Cold drinks'],['coolers','Coolers'],['mocktails','Mocktails'],['matcha','Matcha'],['bowl','Bombay bowls'],['toastie','Toasties'],['wrap','Wraps'],['street','Street food'],['puff','Puff patties'],['sweet','Sweet things'],['bites','Chai bites']
];
const nav=document.getElementById('categoryNav'), sections=document.getElementById('productSections');
const cart=JSON.parse(localStorage.getItem('chaioz-demo-cart')||'[]');cart.forEach(x=>{if(!x.cat){const p=products.find(y=>y[2]===x.name);if(p)x.cat=p[0]}});let orderType='pickup';
const money=v=>'$'+v.toFixed(2);
const num=p=>parseFloat(p[3].replace('$',''));
const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
function categoryMarkup(active='all'){return cats.map(([id,label])=>'<button class="cat-btn '+(active===id?'active':'')+'" data-cat="'+id+'"><span>'+({all:'✦',hot:'☕',cold:'◐',coolers:'✧',mocktails:'◉',matcha:'✿',bowl:'◫',toastie:'▣',wrap:'◌',street:'◆',puff:'◇',sweet:'✦',bites:'◒'}[id])+'</span>'+label+'<span class="count">'+(id==='all'?products.length:products.filter(p=>p[0]===id).length)+'</span></button>').join('')}
function renderNav(active='all'){const markup=categoryMarkup(active);nav.innerHTML=markup;const mobile=document.getElementById('mobileCategoryNav');if(mobile)mobile.innerHTML=markup}
function renderProducts(filter='all'){renderNav(filter);const groups=filter==='all'?cats.slice(1):cats.filter(c=>c[0]===filter);sections.innerHTML=groups.map(([id,label])=>{const ps=products.filter(p=>p[0]===id);if(!ps.length)return '';return '<section class="section" id="sec-'+id+'"><div class="section-title"><h2>'+label+'</h2><span>'+ps.length+' items</span></div><div class="products">'+ps.map((p,i)=>card(p,i)).join('')+'</div></section>'}).join('');sections.querySelectorAll('.add').forEach(b=>b.onclick=()=>addItem(b.dataset.name))}

function card(p,i){const [id,cat,name,price,badge,desc]=p;return '<article class="product"><div class="product-img"><img loading="lazy" src="'+IMG(name,id)+'" alt="'+esc(name)+'" onerror="this.onerror=null;this.src=FALLBACK(this.alt,'+JSON.stringify(id)+')">'+(badge?'<span class="badge">'+esc(badge)+'</span>':'')+'</div><div class="product-body"><h3 class="product-name">'+esc(name)+'</h3><p class="product-desc">'+esc(desc)+'</p><div class="product-foot"><span class="price">'+price+'</span><button class="add" data-name="'+esc(name)+'">+</button></div></div></article>'}
function addItem(name){const p=products.find(x=>x[2]===name);if(!p)return;const found=cart.find(x=>x.name===name);if(found)found.qty++;else cart.push({name,qty:1,price:num(p),image:IMG(name,p[0]),cat:p[0]});save();openCart();}
function save(){localStorage.setItem('chaioz-demo-cart',JSON.stringify(cart));renderCart();}
function change(name,delta){const x=cart.find(i=>i.name===name);if(!x)return;x.qty+=delta;if(x.qty<=0)cart.splice(cart.indexOf(x),1);save();}
function renderCart(){const count=cart.reduce((a,b)=>a+b.qty,0),total=cart.reduce((a,b)=>a+b.qty*b.price,0);document.getElementById('cartCount').textContent=count;document.getElementById('mobileCartCount').textContent=count;document.getElementById('cartTotal').textContent=money(total);document.getElementById('subtotal').textContent=money(total);document.getElementById('checkoutBtn').disabled=!count;const box=document.getElementById('cartItems');box.innerHTML=count?cart.map(x=>'<div class="cart-row"><div class="cart-thumb"><img loading="lazy" src="'+x.image+'" alt="'+esc(x.name)+'" onerror="this.onerror=null;this.src=FALLBACK(this.alt,'+JSON.stringify(x.cat||'hot')+')"></div><div><div class="cart-name">'+esc(x.name)+'</div><div class="cart-meta">'+money(x.price)+' each</div><div class="qty"><button data-minus="'+esc(x.name)+'">−</button><span>'+x.qty+'</span><button data-plus="'+esc(x.name)+'">+</button></div></div><div class="row-price">'+money(x.price*x.qty)+'</div></div>').join(''):'<div class="empty"><span>☕</span><strong>Your bag is empty</strong><small>Add something warm, crisp or sweet.</small></div>';box.querySelectorAll('[data-minus]').forEach(b=>b.onclick=()=>change(b.dataset.minus,-1));box.querySelectorAll('[data-plus]').forEach(b=>b.onclick=()=>change(b.dataset.plus,1));}
function openCart(){document.getElementById('cartPanel').classList.add('open')}
function closeCart(){document.getElementById('cartPanel').classList.remove('open')}
function checkout(){const total=cart.reduce((a,b)=>a+b.qty*b.price,0);document.getElementById('modalCard').innerHTML='<button class="modal-close" onclick="closeModal()">×</button><span class="eyebrow">CHECKOUT · '+orderType.toUpperCase()+'</span><h2>Make it yours.</h2><form class="form" id="checkoutForm"><label>Name<input required id="custName" placeholder="Your name"></label><label>Mobile<input required id="custPhone" inputmode="tel" placeholder="04xx xxx xxx"></label><label>When<select id="when"><option>ASAP · 15–25 min</option><option>In 30 minutes</option><option>In 45 minutes</option></select></label><label>Notes<textarea id="notes" placeholder="Allergies, table note, special request…"></textarea></label><div style="display:flex;justify-content:space-between;padding:8px 0;font-size:12px"><b>Order total</b><b>'+money(total)+'</b></div><button class="confirm">Place demo order →</button></form>';document.getElementById('modal').classList.add('open');document.getElementById('checkoutForm').onsubmit=e=>{e.preventDefault();const id='CHZ-'+Math.floor(100000+Math.random()*899999);document.getElementById('modalCard').innerHTML='<div class="success"><div class="check">✓</div><span class="eyebrow">ORDER RECEIVED</span><h2>Chai is on the way.</h2><div class="order-id">'+id+'</div><p>Demo order confirmed for <b>'+esc(document.getElementById('custName').value)+'</b>.<br>'+esc(orderType)+' · '+money(total)+'</p><button class="confirm" onclick="closeModal()">Back to menu</button></div>';cart.length=0;save();}};
function closeModal(){document.getElementById('modal').classList.remove('open');}
const catalog=document.getElementById('catalog');
const pages=['home','story','menu','gallery','community','visit'];
const siteNav=document.getElementById('siteNav');
const mobileSiteNav=document.getElementById('mobileSiteNav');

function renderSiteNav(active='home'){
  const markup=['home','story','menu','gallery','community','visit'].map((id,i)=>{
    const labels={home:'Home',story:'Our story',menu:'Menu',gallery:'Gallery',community:'Community',visit:'Visit us'};
    return '<button class="site-btn '+(active===id?'active':'')+'" data-page="'+id+'"><span>0'+(i+1)+'</span>'+labels[id]+'</button>';
  }).join('');
  siteNav.innerHTML=markup;
  mobileSiteNav.innerHTML=markup;
}
function showPage(page, updateHash=true){
  if(!pages.includes(page)) page='home';
  pages.forEach(id=>document.getElementById('page-'+id).classList.toggle('hidden-page',id!==page));
  renderSiteNav(page);
  if(page==='menu'){renderProducts('all');document.getElementById('menuState').textContent='BROWSE';}
  else {document.getElementById('menuState').textContent='EXPLORE';}
  catalog.scrollTo({top:0,behavior:'smooth'});
  if(updateHash) history.replaceState(null,'','#'+page);
  document.getElementById('categoryDrawer').classList.remove('open');
}
function chooseCategory(cat){
  showPage('menu');
  renderProducts(cat);
  document.getElementById('menuState').textContent=cat==='all'?'BROWSE':(cats.find(x=>x[0]===cat)||['', 'Browse'])[1].toUpperCase();
  requestAnimationFrame(()=>catalog.scrollTo({top:0,behavior:'smooth'}));
  requestAnimationFrame(()=>{const target=document.getElementById('sec-'+cat);if(cat!=='all'&&target)target.scrollIntoView({block:'start',behavior:'smooth'});});
  document.getElementById('categoryDrawer').classList.remove('open');
}
function bindPageButtons(root=document){
  root.querySelectorAll('[data-page]').forEach(b=>b.onclick=()=>showPage(b.dataset.page));
}
nav.onclick=e=>{const b=e.target.closest('.cat-btn');if(b)chooseCategory(b.dataset.cat)};
document.getElementById('mobileCategoryNav').onclick=e=>{const b=e.target.closest('.cat-btn');if(b)chooseCategory(b.dataset.cat)};
siteNav.onclick=e=>{const b=e.target.closest('[data-page]');if(b)showPage(b.dataset.page)};
mobileSiteNav.onclick=e=>{const b=e.target.closest('[data-page]');if(b)showPage(b.dataset.page)};
bindPageButtons();
document.querySelectorAll('[data-category]').forEach(b=>b.onclick=()=>chooseCategory(b.dataset.category));
document.getElementById('mobileCatsBtn').onclick=()=>document.getElementById('categoryDrawer').classList.add('open');
document.getElementById('closeCategories').onclick=()=>document.getElementById('categoryDrawer').classList.remove('open');
document.getElementById('categoryDrawerBg').onclick=()=>document.getElementById('categoryDrawer').classList.remove('open');
window.addEventListener('hashchange',()=>showPage((location.hash||'#home').slice(1),false));

document.getElementById('viewCartBtn').onclick=openCart;document.getElementById('mobileCartBtn').onclick=openCart;document.getElementById('closeCart').onclick=closeCart;document.getElementById('checkoutBtn').onclick=checkout;
document.querySelectorAll('.type').forEach(b=>b.onclick=()=>{document.querySelectorAll('.type').forEach(x=>x.classList.remove('active'));b.classList.add('active');orderType=b.dataset.type});
document.getElementById('clearBtn').onclick=()=>{cart.length=0;save()};
document.getElementById('searchBtn').onclick=()=>{const q=prompt('Search Chaioz menu');if(!q)return;const hit=products.filter(p=>(p[2]+' '+p[5]).toLowerCase().includes(q.toLowerCase()));sections.innerHTML='<section class="section"><div class="section-title"><h2>Search results</h2><span>'+hit.length+' items</span></div><div class="products">'+hit.map((p,i)=>card(p,i)).join('')+'</div></section>';sections.querySelectorAll('.add').forEach(b=>b.onclick=()=>addItem(b.dataset.name))};
renderSiteNav((location.hash||'#home').slice(1));showPage((location.hash||'#home').slice(1),false);renderCart();