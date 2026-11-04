const products=[
{id:1,name:"Chargeur Samsung 45W PD",cat:"accessoires",price:null,icon:"🔌",desc:"Chargeur rapide USB-C."},
{id:2,name:"Écouteurs Bluetooth HOCO",cat:"accessoires",price:null,icon:"🎧",desc:"Écouteurs sans fil."},
{id:3,name:"Câble de charge",cat:"accessoires",price:null,icon:"🔗",desc:"Câbles pour téléphone."},
{id:4,name:"Écouteurs filaires",cat:"accessoires",price:null,icon:"🎵",desc:"Écouteurs pour téléphone."},
{id:5,name:"Haut-parleur Bluetooth",cat:"accessoires",price:null,icon:"🔊",desc:"Son portable."},
{id:6,name:"Chargeurs téléphone",cat:"accessoires",price:null,icon:"⚡",desc:"Plusieurs modèles selon disponibilité."},

{id:7,name:"Alpha",cat:"streaming",price:110,icon:"🟠",desc:"Prix mis à jour selon votre dernière correction."},
{id:8,name:"Sonic + Diwan",cat:"streaming",price:65,icon:"📺",desc:"Offre avec option Diwan."},
{id:9,name:"Avatar + Diwan",cat:"streaming",price:65,icon:"🎬",desc:"Offre avec option Diwan."},
{id:10,name:"ESIPTV",cat:"streaming",price:60,icon:"▶️",desc:"Abonnement streaming."},
{id:11,name:"Sonic",cat:"streaming",price:55,icon:"📺",desc:"Abonnement streaming."},
{id:12,name:"NOVA",cat:"streaming",price:55,icon:"✨",desc:"Abonnement streaming."},
{id:13,name:"MATADOR",cat:"streaming",price:50,icon:"🐂",desc:"Abonnement streaming."},
{id:14,name:"MMTV",cat:"streaming",price:50,icon:"📺",desc:"Abonnement streaming."},
{id:15,name:"SAMTV",cat:"streaming",price:50,icon:"📺",desc:"Abonnement streaming."},
{id:16,name:"24TV",cat:"streaming",price:50,icon:"📺",desc:"Abonnement streaming."},
{id:17,name:"Prince",cat:"streaming",price:50,icon:"👑",desc:"Abonnement streaming."},
{id:18,name:"Phoenix",cat:"streaming",price:45,icon:"🔥",desc:"Abonnement streaming."},
{id:19,name:"Fox",cat:"streaming",price:45,icon:"🦊",desc:"Abonnement streaming."},

{id:20,name:"Shahid VIP — 3 mois",cat:"streaming",price:60,icon:"🟢",desc:"Abonnement 3 mois."},
{id:21,name:"Shahid VIP — 12 mois",cat:"streaming",price:150,icon:"🟢",desc:"Abonnement 12 mois."},
{id:22,name:"Netflix 1 écran — 4 mois",cat:"streaming",price:80,icon:"🔴",desc:"Formule 1 écran."},
{id:23,name:"Netflix 1 écran — 5 mois",cat:"streaming",price:90,icon:"🔴",desc:"Formule 1 écran."},
{id:24,name:"Netflix 1 écran — 6 mois",cat:"streaming",price:110,icon:"🔴",desc:"Formule 1 écran."},
{id:25,name:"Netflix 1 écran — 13 mois",cat:"streaming",price:220,icon:"🔴",desc:"Formule 1 écran."},
{id:26,name:"Netflix 5 écrans — 45 jours",cat:"streaming",price:80,icon:"🔴",desc:"Formule 5 écrans."},
{id:27,name:"Netflix 5 écrans — 2 mois",cat:"streaming",price:95,icon:"🔴",desc:"Formule 5 écrans."},
{id:28,name:"Netflix 5 écrans — 3 mois",cat:"streaming",price:134,icon:"🔴",desc:"Formule 5 écrans."},
{id:29,name:"Netflix 5 écrans — 4 mois",cat:"streaming",price:170,icon:"🔴",desc:"Formule 5 écrans."},
{id:30,name:"Netflix 5 écrans — 6 mois",cat:"streaming",price:260,icon:"🔴",desc:"Formule 5 écrans."},

{id:31,name:"Récepteurs satellite",cat:"recepteurs",price:null,icon:"📡",desc:"Plusieurs modèles selon disponibilité."},
{id:32,name:"Service récepteur",cat:"recepteurs",price:null,icon:"🛰️",desc:"Vente et service patch selon modèle."},
{id:33,name:"Recharge Orange",cat:"orange",price:null,icon:"🟠",desc:"Recharge selon montant demandé."},
{id:34,name:"Forfaits Orange",cat:"orange",price:null,icon:"📶",desc:"Forfaits selon offre disponible."},
{id:35,name:"Internet Orange",cat:"orange",price:null,icon:"🌐",desc:"Services internet Orange."},
{id:36,name:"Carte SIM / eSIM Orange",cat:"orange",price:null,icon:"📱",desc:"Selon éligibilité et disponibilité."}
];
let cart=[{id:14,name:"Samsat 20-25 Mini + abonnement NOVA 12 mois inclus — avec clé Wi-Fi",cat:"recepteurs",price:70,icon:"📡",desc:"Récepteur Samsat 20-25 Mini avec abonnement NOVA 12 mois inclus, avec clé Wi-Fi."},
{id:15,name:"Samsat 20-25 Mini + abonnement NOVA 12 mois inclus — sans clé Wi-Fi",cat:"recepteurs",price:60,icon:"📡",desc:"Récepteur Samsat 20-25 Mini avec abonnement NOVA 12 mois inclus, sans clé Wi-Fi."},
{id:16,name:"Ecosat Fun 40 Lite + abonnement MATADOR 12 mois inclus — avec clé Wi-Fi",cat:"recepteurs",price:70,icon:"📡",desc:"Récepteur Ecosat Fun 40 Lite avec abonnement MATADOR 12 mois inclus, avec clé Wi-Fi."},
{id:17,name:"Ecosat Fun 40 Lite + abonnement MATADOR 12 mois inclus — sans clé Wi-Fi",cat:"recepteurs",price:60,icon:"📡",desc:"Récepteur Ecosat Fun 40 Lite avec abonnement MATADOR 12 mois inclus, sans clé Wi-Fi."}
];let filter="all";
const grid=document.getElementById("productGrid");
function money(n){return n===null?"Prix sur demande":n===0?"Sur demande":n.toFixed(2)+" DT"}
function render(){const q=document.getElementById("search").value.toLowerCase();const list=products.filter(p=>(filter==="all"||p.cat===filter)&&(p.name.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q)));grid.innerHTML=list.map(p=>`<article class="product"><div class="productPic"><small>${p.cat.toUpperCase()}</small>${p.icon}</div><div class="productInfo"><span class="category">${p.cat}</span><h3>${p.name}</h3><p class="productDesc">${p.desc}</p><span class="price">${money(p.price)}</span><button class="add" onclick="addToCart(${p.id})">Ajouter +</button></div></article>`).join("")||"<p>Aucun résultat.</p>";}
function addToCart(id){const p=products.find(x=>x.id===id);const item=cart.find(x=>x.id===id);item?item.qty++:cart.push({...p,qty:1});renderCart();}
function renderCart(){document.getElementById("cartCount").textContent=cart.reduce((s,x)=>s+x.qty,0);document.getElementById("cartItems").innerHTML=cart.length?cart.map(x=>`<div class="cartLine"><span><b>${x.name}</b><br>${x.qty} × ${money(x.price)}</span><span><b>${x.price===null?"À confirmer":money(x.price*x.qty)}</b><br><button onclick="removeItem(${x.id})">Supprimer</button></span></div>`).join(""):'<p class="empty">Votre panier est vide.</p>';const totalKnown=cart.every(x=>x.price!==null);document.getElementById("total").textContent=totalKnown?money(cart.reduce((s,x)=>s+x.price*x.qty,0)):"À confirmer";}
function removeItem(id){cart=cart.filter(x=>x.id!==id);renderCart();}
document.querySelectorAll(".cat").forEach(b=>b.addEventListener("click",()=>{document.querySelector(".cat.active").classList.remove("active");b.classList.add("active");filter=b.dataset.filter;render();}));
document.getElementById("search").addEventListener("input",render);
const cartEl=document.getElementById("cart"),overlay=document.getElementById("overlay");
function toggleCart(open){cartEl.classList.toggle("open",open);overlay.classList.toggle("show",open);}
document.getElementById("cartOpen").onclick=()=>toggleCart(true);document.getElementById("cartClose").onclick=()=>toggleCart(false);overlay.onclick=()=>toggleCart(false);
document.getElementById("checkout").onclick=()=>{if(!cart.length){alert("Votre panier est vide.");return;}const lines=cart.map(x=>`- ${x.name} x${x.qty} : ${x.price===null?"Prix à confirmer":money(x.price*x.qty)}`).join("%0A");const total=cart.every(x=>x.price!==null)?money(cart.reduce((s,x)=>s+x.price*x.qty,0)):"à confirmer";const msg=`Bonjour DJO GSM, je souhaite commander :%0A${lines}%0A%0ATotal estimé : ${total}%0AMerci de confirmer la disponibilité.`;window.open("https://wa.me/21655534713?text="+msg,"_blank");};
document.getElementById("menuBtn").onclick=()=>document.getElementById("nav").classList.toggle("show");
document.getElementById("year").textContent=new Date().getFullYear();render();renderCart();
