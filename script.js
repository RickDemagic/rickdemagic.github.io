*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:'Poppins',sans-serif;
background:#f4f7fb;
color:#1e293b;
line-height:1.6;
overflow-x:hidden;
}

.container{
width:90%;
max-width:1100px;
margin:auto;
}

.center-text{
text-align:center;
max-width:700px;
margin:auto;
}

/* NAV */

nav{
position:fixed;
width:100%;
top:0;
background:rgba(255,255,255,0.9);
backdrop-filter:blur(10px);
padding:18px 0;
box-shadow:0 4px 20px rgba(0,0,0,0.05);
z-index:1000;
}

.nav-wrapper{
display:flex;
justify-content:space-between;
align-items:center;
}

.logo{
font-weight:800;
font-size:18px;
}

.nav-links a{
text-decoration:none;
margin-left:30px;
color:#1e293b;
font-weight:500;
transition:0.3s;
}

.nav-links a:hover{
color:#16a34a;
}

/* HERO */

.hero{
position:relative;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
color:white;
overflow:hidden;
}

.hero-bg{
position:absolute;
top:0;
left:0;
width:100%;
height:120%;
background:url('hero.jpg') center/cover no-repeat;
transform:translateY(0);
will-change:transform;
}

.hero-overlay{
position:absolute;
inset:0;
background:linear-gradient(rgba(0,60,40,0.6),rgba(0,0,0,0.7));
}

.hero-content{
position:relative;
z-index:3;
max-width:850px;
padding:20px;
opacity:0;
transform:translateY(40px);
transition:all 1.2s ease;
}

.hero-content.active{
opacity:1;
transform:translateY(0);
}

.hero h1{
font-size:52px;
font-weight:800;
margin-bottom:25px;
}

.hero p{
font-size:22px;
margin-bottom:35px;
}

.cta-button{
display:inline-block;
padding:15px 35px;
background:#22c55e;
color:white;
text-decoration:none;
border-radius:8px;
font-weight:600;
transition:0.3s;
}

.cta-button:hover{
background:#16a34a;
transform:translateY(-3px);
}

/* SECTIONS */

.section{
padding:120px 0;
}

.section h2{
text-align:center;
margin-bottom:60px;
font-size:32px;
}

.services{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:30px;
}

.card{
background:white;
padding:35px;
border-radius:14px;
box-shadow:0 15px 35px rgba(0,0,0,0.06);
opacity:0;
transform:translateY(40px);
transition:all 0.8s ease;
}

.card.visible{
opacity:1;
transform:translateY(0);
}

/* CONTACT */

.kontakt-section{
background:#eef2f7;
}

.contact-form{
max-width:600px;
margin:auto;
}

.contact-form input,
.contact-form textarea{
width:100%;
padding:16px;
margin-bottom:18px;
border:1px solid #cbd5e1;
border-radius:10px;
font-size:15px;
}

.contact-form button{
width:100%;
padding:16px;
border:none;
background:#2563eb;
color:white;
border-radius:10px;
font-size:16px;
cursor:pointer;
transition:0.3s;
}

.contact-form button:hover{
background:#1e40af;
}

footer{
background:#0f172a;
color:white;
text-align:center;
padding:40px 0;
}
