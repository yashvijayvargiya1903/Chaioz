const IMG=(q)=>'https://image.pollinations.ai/prompt/'+encodeURIComponent('premium photorealistic Indian cafe food photography, Chaioz North Adelaide, '+q+', warm cinematic editorial lighting, dark teal and cream palette, appetizing, clean premium restaurant advertising, no text, no logo')+'?width=600&height=420&nologo=true&seed='+encodeURIComponent(q);
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
const cart=JSON.parse(localStorage.getItem('chaioz-demo-cart')||'[]'); let orderType='pickup';
const money=v=>'$'+v.toFixed(2);
const num=p=>parseFloat(p[3].replace('$',''));
const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
function renderNav(active='all'){nav.innerHTML=cats.map(([id,label])=>'<button class="cat-btn '+(active===id?'active':'')+'" data-cat="'+id+'"><span>'+({all:'✦',hot:'☕',cold:'◐',coolers:'✧',mocktails:'◉',matcha:'✿',bowl:'◫',toastie:'▣',wrap:'◌',street:'◆',puff:'◇',sweet:'✦',bites:'◒'}[id])+'</span>'+label+'<span class="count">'+(id==='all'?products.length:products.filter(p=>p[0]===id).length)+'</span></button>').join('')}
function renderProducts(filter='all'){renderNav(filter); const groups=filter==='all'?cats.slice(1):cats.filter(c=>c[0]===filter); sections.innerHTML=groups.map(([id,label])=>{const ps=products.filter(p=>p[0]===id);if(!ps.length)return '';return '<section class="section" id="sec-'+id+'"><div class="section-title"><h2>'+label+'</h2><span>'+ps.length+' items</span></div><div class="products">'+ps.map((p,i)=>card(p,i)).join('')+'</div></section>'}).join('');sections.querySelectorAll('.add').forEach(b=>b.onclick=()=>addItem(b.dataset.name));}
function card(p,i){const [id,cat,name,price,badge,desc]=p;return '<article class="product"><div class="product-img"><img loading="lazy" src="'+IMG(name)+'" alt="'+esc(name)+'">'+(badge?'<span class="badge">'+esc(badge)+'</span>':'')+'</div><div class="product-body"><h3 class="product-name">'+esc(name)+'</h3><p class="product-desc">'+esc(desc)+'</p><div class="product-foot"><span class="price">'+price+'</span><button class="add" data-name="'+esc(name)+'">+</button></div></div></article>'}
function addItem(name){const p=products.find(x=>x[2]===name);if(!p)return;const found=cart.find(x=>x.name===name);if(found)found.qty++;else cart.push({name,qty:1,price:num(p),image:IMG(name)});save();openCart();}
function save(){localStorage.setItem('chaioz-demo-cart',JSON.stringify(cart));renderCart();}
function change(name,delta){const x=cart.find(i=>i.name===name);if(!x)return;x.qty+=delta;if(x.qty<=0)cart.splice(cart.indexOf(x),1);save();}
function renderCart(){const count=cart.reduce((a,b)=>a+b.qty,0),total=cart.reduce((a,b)=>a+b.qty*b.price,0);document.getElementById('cartCount').textContent=count;document.getElementById('mobileCartCount').textContent=count;document.getElementById('cartTotal').textContent=money(total);document.getElementById('subtotal').textContent=money(total);document.getElementById('checkoutBtn').disabled=!count;const box=document.getElementById('cartItems');box.innerHTML=count?cart.map(x=>'<div class="cart-row"><div class="cart-thumb"><img src="'+x.image+'" alt=""></div><div><div class="cart-name">'+esc(x.name)+'</div><div class="cart-meta">'+money(x.price)+' each</div><div class="qty"><button data-minus="'+esc(x.name)+'">−</button><span>'+x.qty+'</span><button data-plus="'+esc(x.name)+'">+</button></div></div><div class="row-price">'+money(x.price*x.qty)+'</div></div>').join(''):'<div class="empty"><span>☕</span><strong>Your bag is empty</strong><small>Add something warm, crisp or sweet.</small></div>';box.querySelectorAll('[data-minus]').forEach(b=>b.onclick=()=>change(b.dataset.minus,-1));box.querySelectorAll('[data-plus]').forEach(b=>b.onclick=()=>change(b.dataset.plus,1));}
function openCart(){document.getElementById('cartPanel').classList.add('open')}
function closeCart(){document.getElementById('cartPanel').classList.remove('open')}
function checkout(){const total=cart.reduce((a,b)=>a+b.qty*b.price,0);document.getElementById('modalCard').innerHTML='<button class="modal-close" onclick="closeModal()">×</button><span class="eyebrow">CHECKOUT · '+orderType.toUpperCase()+'</span><h2>Make it yours.</h2><form class="form" id="checkoutForm"><label>Name<input required id="custName" placeholder="Your name"></label><label>Mobile<input required id="custPhone" inputmode="tel" placeholder="04xx xxx xxx"></label><label>When<select id="when"><option>ASAP · 15–25 min</option><option>In 30 minutes</option><option>In 45 minutes</option></select></label><label>Notes<textarea id="notes" placeholder="Allergies, table note, special request…"></textarea></label><div style="display:flex;justify-content:space-between;padding:8px 0;font-size:12px"><b>Order total</b><b>'+money(total)+'</b></div><button class="confirm">Place demo order →</button></form>';document.getElementById('modal').classList.add('open');document.getElementById('checkoutForm').onsubmit=e=>{e.preventDefault();const id='CHZ-'+Math.floor(100000+Math.random()*899999);document.getElementById('modalCard').innerHTML='<div class="success"><div class="check">✓</div><span class="eyebrow">ORDER RECEIVED</span><h2>Chai is on the way.</h2><div class="order-id">'+id+'</div><p>Demo order confirmed for <b>'+esc(document.getElementById('custName').value)+'</b>.<br>'+esc(orderType)+' · '+money(total)+'</p><button class="confirm" onclick="closeModal()">Back to menu</button></div>';cart.length=0;save();}};
function closeModal(){document.getElementById('modal').classList.remove('open');}
nav.onclick=e=>{const b=e.target.closest('.cat-btn');if(b)renderProducts(b.dataset.cat)};
document.querySelectorAll('[data-category]').forEach(b=>b.onclick=()=>renderProducts(b.dataset.category));
document.getElementById('viewCartBtn').onclick=openCart;document.getElementById('mobileCartBtn').onclick=openCart;document.getElementById('closeCart').onclick=closeCart;document.getElementById('checkoutBtn').onclick=checkout;
document.querySelectorAll('.type').forEach(b=>b.onclick=()=>{document.querySelectorAll('.type').forEach(x=>x.classList.remove('active'));b.classList.add('active');orderType=b.dataset.type});
document.getElementById('clearBtn').onclick=()=>{cart.length=0;save()};
document.getElementById('searchBtn').onclick=()=>{const q=prompt('Search Chaioz menu');if(!q)return;const hit=products.filter(p=>(p[2]+' '+p[5]).toLowerCase().includes(q.toLowerCase()));sections.innerHTML='<section class="section"><div class="section-title"><h2>Search results</h2><span>'+hit.length+' items</span></div><div class="products">'+hit.map((p,i)=>card(p,i)).join('')+'</div></section>';sections.querySelectorAll('.add').forEach(b=>b.onclick=()=>addItem(b.dataset.name))};
renderProducts();renderCart();