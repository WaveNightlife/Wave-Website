:root{
  --bg:#07070a;
  --panel:rgba(255,255,255,.06);
  --panel2:rgba(255,255,255,.04);
  --border:rgba(255,255,255,.10);
  --text:rgba(255,255,255,.92);
  --muted:rgba(255,255,255,.70);
  --dim:rgba(255,255,255,.52);
  --shadow: 0 28px 90px rgba(0,0,0,.65);
  --shadow2: 0 18px 60px rgba(0,0,0,.45);
  --radius:22px;
  --radius2:28px;
}

*{ box-sizing:border-box; }
html{ scroll-behavior:smooth; }
body{
  margin:0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  background: var(--bg);
  color: var(--text);
  overflow-x:hidden;
}
a{ color:inherit; text-decoration:none; }
.container{ width:min(1160px, calc(100% - 48px)); margin:0 auto; }

.bg{ position:fixed; inset:0; z-index:-2; }
.vignette{ position:absolute; inset:-20%;
  background: radial-gradient(60% 50% at 50% 20%, rgba(255,255,255,.06), rgba(0,0,0,0) 60%),
              radial-gradient(70% 60% at 50% 120%, rgba(0,0,0,.8), rgba(0,0,0,0) 60%);
  opacity:1;
}
.glow{ position:absolute; width:620px; height:620px; filter:blur(110px); border-radius:999px; opacity:.55; }
.g1{ left:-200px; top:-220px;
  background: radial-gradient(circle at 30% 30%, rgba(120,180,255,.95), rgba(120,180,255,0));
}
.g2{ right:-220px; bottom:-260px;
  background: radial-gradient(circle at 30% 30%, rgba(180,120,255,.95), rgba(180,120,255,0));
}
.noise{
  position:absolute; inset:0;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='260' height='260' filter='url(%23n)' opacity='.22'/%3E%3C/svg%3E");
  opacity:.08;
  mix-blend-mode:overlay;
  pointer-events:none;
}

/* NAV */
.top{
  position:sticky; top:0; z-index:20;
  background: rgba(7,7,10,.58);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255,255,255,.08);
}
.nav{
  display:flex; align-items:center; justify-content:space-between;
  padding: 14px 0;
  gap: 16px;
}
.brand{ display:flex; align-items:center; gap:10px; }
.logoMark{
  width:40px; height:40px; border-radius:14px;
  display:grid; place-items:center;
  font-weight:900;
  background: linear-gradient(135deg, rgba(255,255,255,.14), rgba(255,255,255,.05));
  border:1px solid rgba(255,255,255,.14);
  box-shadow: 0 10px 30px rgba(0,0,0,.35);
}
.logoMark.small{ width:34px; height:34px; border-radius:12px; }
.brandText{ display:flex; flex-direction:column; line-height:1.05; }
.brandName{ font-weight:900; letter-spacing:-0.02em; }
.brandTag{ font-size:12px; color:var(--dim); font-weight:700; }

.links{ display:none; gap:18px; }
.links a{ font-size:14px; color:rgba(255,255,255,.78); }
.links a:hover{ color:rgba(255,255,255,.98); }

.navCtas{ display:flex; gap:10px; align-items:center; }

/* Buttons */
.btn{
  display:inline-flex; align-items:center; justify-content:center;
  padding: 12px 16px;
  border-radius: 14px;
  border: 1px solid transparent;
  font-weight: 800;
  font-size: 14px;
  transition: transform .12s ease, filter .12s ease, opacity .12s ease;
  user-select:none;
}
.btn:hover{ transform: translateY(-1px); filter: brightness(1.02); }
.btn:active{ transform: translateY(0); opacity:.92; }

.btn.primary{
  background: rgba(255,255,255,.92);
  color: rgba(0,0,0,.92);
}
.btn.ghost{
  background: rgba(255,255,255,.06);
  border-color: rgba(255,255,255,.14);
  color: rgba(255,255,255,.92);
}
.btn.large{ padding: 13px 18px; border-radius: 16px; font-size: 14px; }

/* Mobile */
.menuBtn{
  display:flex; flex-direction:column; gap:6px;
  border:0; background:transparent; padding:8px; cursor:pointer;
}
.menuBtn span{ width:22px; height:2px; border-radius:999px; background: rgba(255,255,255,.78); }
.mobileMenu{
  border-top: 1px solid rgba(255,255,255,.08);
  background: rgba(7,7,10,.72);
  backdrop-filter: blur(16px);
}
.mobileInner{ padding: 14px 0 18px; display:grid; gap:10px; }
.mLink{
  padding: 12px 12px;
  border-radius: 14px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.10);
  color: rgba(255,255,255,.90);
}
.mCtas{ display:flex; gap:10px; flex-wrap:wrap; margin-top:4px; }

/* HERO */
.hero{
  position:relative;
  padding: 84px 0 0;
}
.heroMedia{
  position:absolute; inset:0; z-index:-1;
  overflow:hidden;
}
.heroScrim{
  position:absolute; inset:0;
  background:
    radial-gradient(90% 70% at 50% 20%, rgba(0,0,0,0), rgba(0,0,0,.78) 70%),
    linear-gradient(180deg, rgba(0,0,0,.30), rgba(0,0,0,.92));
}
.filmGrid{
  position:absolute; inset:-20%;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  transform: rotate(-6deg);
  opacity:.90;
}
.filmTile{
  height: 220px;
  border-radius: 22px;
  border: 1px solid rgba(255,255,255,.10);
  background: linear-gradient(135deg, rgba(255,255,255,.14), rgba(255,255,255,.03));
  box-shadow: 0 20px 60px rgba(0,0,0,.55);
  position:relative;
  overflow:hidden;
}
.filmTile::after{
  content:"";
  position:absolute; inset:-40%;
  background: radial-gradient(circle at 30% 30%, rgba(120,180,255,.35), rgba(0,0,0,0) 55%),
              radial-gradient(circle at 70% 60%, rgba(180,120,255,.30), rgba(0,0,0,0) 58%);
  transform: rotate(12deg);
  opacity:.9;
}
.t2::after{ opacity:.75; }
.t3::after{ opacity:.55; }
.t4::after{ opacity:.70; }
.t5::after{ opacity:.60; }
.t6::after{ opacity:.80; }
.t7::after{ opacity:.62; }
.t8::after{ opacity:.72; }
.t9::after{ opacity:.58; }

.heroGrid{
  display:grid;
  gap: 34px;
  align-items: center;
  padding-bottom: 46px;
}
.pill{
  display:inline-flex;
  align-items:center;
  gap:10px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.12);
  color: var(--muted);
  font-size: 13px;
  font-weight: 750;
}
.liveDot{
  width:8px; height:8px; border-radius:50%;
  background: rgba(255,255,255,.65);
  box-shadow: 0 0 18px rgba(255,255,255,.25);
}
h1{
  margin: 16px 0 10px;
  font-size: clamp(40px, 6vw, 68px);
  line-height: 1.04;
  letter-spacing: -0.03em;
}
.subhead{
  margin:0;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.6;
  max-width: 62ch;
}
.ctaRow{ display:flex; gap:12px; flex-wrap:wrap; margin-top: 22px; }
.microRow{ margin-top: 14px; color: var(--dim); font-size: 13px; display:flex; gap:10px; flex-wrap:wrap; }
.micro{ font-weight:800; color: rgba(255,255,255,.86); }
.micro.dim{ font-weight:700; color: var(--dim); }
.sep{ opacity:.35; padding: 0 4px; }

.credRow{
  margin-top: 18px;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.cred{
  border-radius: 18px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.10);
  padding: 12px 12px;
}
.credTop{ font-size: 13px; font-weight: 900; }
.credBot{ font-size: 12px; color: var(--dim); margin-top: 2px; }

/* Device mock */
.heroDevice{ position:relative; justify-self:center; width:min(440px, 100%); }
.device{
  border-radius: 30px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.12);
  box-shadow: var(--shadow);
  overflow:hidden;
}
.deviceTop{
  display:flex; align-items:center; justify-content:space-between;
  padding: 14px 14px 12px;
  border-bottom: 1px solid rgba(255,255,255,.10);
  background: rgba(0,0,0,.18);
}
.cam{
  width:10px; height:10px; border-radius:50%;
  background: rgba(255,255,255,.18);
  box-shadow: inset 0 0 0 2px rgba(0,0,0,.25);
}
.deviceTitle{ display:flex; flex-direction:column; align-items:center; line-height:1.05; }
.dtMain{ font-weight: 900; letter-spacing:-0.02em; }
.dtSub{ font-size: 12px; color: var(--dim); font-weight: 700; }
.chip{
  font-size: 12px;
  font-weight: 850;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.12);
}
.deviceBody{ padding: 14px; display:grid; gap: 12px; }
.signalRow{ display:flex; align-items:center; justify-content:space-between; gap: 10px; }
.signalLabel{ font-size: 12px; color: var(--dim); font-weight: 800; }
.signalPills{ display:flex; gap: 8px; flex-wrap:wrap; }
.sigBtn{
  cursor:pointer;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.05);
  color: rgba(255,255,255,.88);
  padding: 7px 10px;
  border-radius: 999px;
  font-weight: 900;
  font-size: 12px;
  opacity: .88;
  transition: transform .12s ease, opacity .12s ease, background .12s ease;
}
.sigBtn:hover{ transform: translateY(-1px); opacity:1; }
.sigBtn.active{
  background: rgba(255,255,255,.14);
  border-color: rgba(255,255,255,.18);
  opacity: 1;
}

.feed{ display:grid; gap: 10px; }
.feedCard{
  display:grid;
  grid-template-columns: 52px 1fr auto;
  gap: 10px;
  align-items:center;
  padding: 10px;
  border-radius: 18px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.10);
}
.thumb{
  width:52px; height:52px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(255,255,255,.18), rgba(255,255,255,.03));
  position:relative;
  overflow:hidden;
}
.thumb::after{
  content:"";
  position:absolute; inset:-30%;
  background: radial-gradient(circle at 30% 30%, rgba(120,180,255,.35), rgba(0,0,0,0) 58%),
              radial-gradient(circle at 70% 60%, rgba(180,120,255,.32), rgba(0,0,0,0) 60%);
  transform: rotate(12deg);
  opacity:.8;
}
.metaTop{ font-weight: 900; font-size: 13px; }
.metaBot{ color: var(--dim); font-size: 12px; margin-top: 2px; }
.tag{
  font-size: 11px;
  font-weight: 950;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.14);
  background: rgba(255,255,255,.05);
  letter-spacing: .06em;
  opacity:.92;
}
.tag.hot{ box-shadow: 0 0 22px rgba(255,255,255,.12); }
.tag.low{ opacity:.70; }

.deviceFoot{
  display:flex;
  gap: 10px;
  padding-top: 6px;
}
.tab{
  height: 6px;
  flex:1;
  border-radius: 999px;
  background: rgba(255,255,255,.12);
}
.tab.active{ background: rgba(255,255,255,.32); }

.floating{
  position:absolute;
  padding: 12px 12px;
  border-radius: 18px;
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(255,255,255,.16);
  box-shadow: var(--shadow2);
  backdrop-filter: blur(14px);
  width: 170px;
}
.fTitle{ font-weight: 950; font-size: 13px; }
.fText{ color: var(--muted); font-size: 12px; margin-top: 3px; }
.f1{ left: -16px; top: 92px; transform: rotate(-2deg); }
.f2{ right: -16px; top: 168px; transform: rotate(2deg); }

.marquee{
  border-top: 1px solid rgba(255,255,255,.08);
  border-bottom: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.02);
  overflow:hidden;
}
.marqueeInner{
  display:flex; gap: 14px;
  padding: 12px 0;
  white-space: nowrap;
  font-weight: 900;
  letter-spacing: .02em;
  color: rgba(255,255,255,.72);
  animation: marquee 18s linear infinite;
}
@keyframes marquee {
  0%{ transform: translateX(0); }
  100%{ transform: translateX(-50%); }
}

/* Sections */
.section{ padding: 72px 0; }
.section.alt{ background: rgba(255,255,255,.02); border-top: 1px solid rgba(255,255,255,.06); border-bottom: 1px solid rgba(255,255,255,.06); }
.sectionHead{ margin-bottom: 18px; }
h2{
  margin:0 0 8px;
  font-size: clamp(24px, 3.2vw, 38px);
  letter-spacing: -0.02em;
}
.lead{
  margin:0;
  color: var(--muted);
  line-height: 1.65;
  max-width: 78ch;
}
.muted{ color: var(--muted); }
.dim{ color: var(--dim); }

/* Feature grid */
.featureGrid{
  display:grid;
  gap: 14px;
  margin-top: 18px;
}
.featureCard{
  border-radius: var(--radius);
  background: var(--panel2);
  border: 1px solid rgba(255,255,255,.10);
  padding: 18px;
  position:relative;
  overflow:hidden;
}
.featureCard h3{ margin: 10px 0 8px; font-size: 16px; letter-spacing:-0.01em; }
.featureCard p{ margin:0; color: var(--muted); line-height: 1.6; }

.icon{
  width: 44px; height: 44px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.06);
  position:relative;
  overflow:hidden;
}
.icon::after{
  content:"";
  position:absolute; inset:-40%;
  background: radial-gradient(circle at 30% 30%, rgba(120,180,255,.45), rgba(0,0,0,0) 58%),
              radial-gradient(circle at 70% 60%, rgba(180,120,255,.38), rgba(0,0,0,0) 60%);
  transform: rotate(10deg);
  opacity:.8;
}
.i2::after{ opacity:.65; }
.i3::after{ opacity:.55; }

.featureCard.wide{
  padding: 18px;
  border-radius: var(--radius2);
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.12);
}
.wideTop{
  display:flex;
  justify-content:space-between;
  gap: 14px;
  align-items:flex-start;
}
.wideTop h3{ margin:0 0 6px; font-size: 18px; }
.wideBottom{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 14px;
}
.miniStat{
  border-radius: 18px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.10);
  padding: 12px;
}
.msTop{ font-weight: 950; font-size: 13px; }
.msBot{ color: var(--dim); font-size: 12px; margin-top: 2px; }

/* Preview section */
.previewGrid{
  display:grid;
  gap: 14px;
  margin-top: 18px;
}
.previewPanel{
  border-radius: var(--radius2);
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.12);
  overflow:hidden;
  box-shadow: var(--shadow2);
}
.previewHeader{
  padding: 16px;
  display:flex;
  justify-content:space-between;
  gap: 12px;
  align-items:center;
  border-bottom: 1px solid rgba(255,255,255,.10);
  background: rgba(0,0,0,.18);
}
.phLeft{ display:flex; gap: 12px; align-items:center; }
.pulse{
  width: 10px; height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,.65);
  box-shadow: 0 0 18px rgba(255,255,255,.25);
}
.phTitle{ font-weight: 950; letter-spacing:-0.01em; }
.phSub{ font-size: 12px; color: var(--dim); margin-top: 2px; }

.seg{
  display:flex;
  gap: 6px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.10);
  padding: 4px;
  border-radius: 999px;
}
.segBtn{
  border:0;
  cursor:pointer;
  background: transparent;
  color: rgba(255,255,255,.82);
  font-weight: 900;
  font-size: 12px;
  padding: 8px 10px;
  border-radius: 999px;
  opacity:.85;
}
.segBtn.active{
  background: rgba(255,255,255,.12);
  opacity: 1;
}

.momentGrid{
  padding: 16px;
  display:grid;
  gap: 12px;
  grid-template-columns: repeat(2, 1fr);
}
.moment{
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.04);
  overflow:hidden;
  position:relative;
  min-height: 160px;
}
.moment::after{
  content:"";
  position:absolute; inset:-40%;
  background: radial-gradient(circle at 30% 30%, rgba(120,180,255,.40), rgba(0,0,0,0) 58%),
              radial-gradient(circle at 70% 60%, rgba(180,120,255,.34), rgba(0,0,0,0) 60%);
  transform: rotate(12deg);
  opacity:.85;
}
.momentMeta{
  position:absolute; left: 12px; right: 12px; bottom: 12px;
  display:flex; justify-content:space-between; align-items:flex-end;
  gap: 10px;
}
.mmLeft{ display:flex; flex-direction:column; gap: 2px; }
.mmTitle{ font-weight: 950; font-size: 13px; }
.mmSub{ color: var(--dim); font-size: 12px; }
.mmTag{
  font-weight: 950;
  font-size: 11px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.14);
  background: rgba(255,255,255,.05);
  letter-spacing:.06em;
  opacity:.92;
}

.sidePanel{
  display:grid;
  gap: 14px;
}
.sideCard{
  border-radius: var(--radius2);
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.12);
  padding: 18px;
}
.sideCard.callout{
  box-shadow: var(--shadow2);
}
.sideKicker{
  color: var(--dim);
  font-weight: 900;
  font-size: 12px;
  letter-spacing:.08em;
  text-transform: uppercase;
}
.sideTitle{
  margin-top: 10px;
  font-weight: 950;
  font-size: 18px;
  letter-spacing:-0.01em;
}
.sideText{
  margin: 8px 0 0;
  color: var(--muted);
  line-height: 1.65;
}

/* Steps / CTA band */
.steps{
  margin-top: 18px;
  display:grid;
  gap: 12px;
}
.step{
  border-radius: var(--radius2);
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.10);
  padding: 16px;
  display:flex;
  gap: 14px;
  align-items:flex-start;
}
.stepNum{
  width: 36px; height: 36px;
  border-radius: 14px;
  display:grid; place-items:center;
  font-weight: 950;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.12);
}
.stepTitle{ font-weight: 950; }
.stepText{ margin-top: 4px; color: var(--muted); line-height: 1.6; }

.ctaBand{
  margin-top: 18px;
  border-radius: 30px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.12);
  padding: 20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap: 14px;
  box-shadow: var(--shadow2);
}
.ctaKicker{
  color: var(--dim);
  font-weight: 950;
  font-size: 12px;
  letter-spacing:.08em;
  text-transform: uppercase;
}
.ctaTitle{
  margin-top: 10px;
  font-weight: 950;
  font-size: 20px;
  letter-spacing:-0.01em;
}
.ctaText{
  margin-top: 6px;
  color: var(--muted);
  line-height: 1.6;
  max-width: 60ch;
}
.ctaBtns{ display:flex; gap: 10px; flex-wrap:wrap; }

/* FAQ */
.faqGrid{ display:grid; gap: 12px; margin-top: 18px; }
.faq{
  border-radius: var(--radius2);
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.10);
  padding: 14px 16px;
}
.faq summary{
  cursor:pointer;
  font-weight: 950;
  outline:none;
}
.faq p{ margin: 10px 0 0; color: var(--muted); line-height:1.65; }

/* Footer */
.footer{
  padding: 34px 0 22px;
  border-top: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.02);
}
.footGrid{
  display:flex;
  justify-content:space-between;
  gap: 18px;
  align-items:flex-start;
  flex-wrap:wrap;
}
.footBrand{ display:flex; gap: 10px; align-items:center; }
.footMeta{ margin-top: 10px; color: var(--dim); display:flex; gap: 10px; flex-wrap:wrap; }
.footRight{ display:flex; gap: 16px; flex-wrap:wrap; color: rgba(255,255,255,.78); }
.footRight a:hover{ color: rgba(255,255,255,.98); }
.footBottom{ margin-top: 18px; color: var(--dim); }

/* Reveal anim */
.reveal{ opacity:0; transform: translateY(14px); transition: opacity .6s ease, transform .6s ease; }
.reveal.show{ opacity:1; transform: translateY(0); }

@media (min-width: 920px){
  .links{ display:flex; }
  .menuBtn{ display:none; }
  .heroGrid{ grid-template-columns: 1.15fr .85fr; }
  .featureGrid{ grid-template-columns: repeat(3, 1fr); }
  .featureCard.wide{ grid-column: 1 / -1; }
  .previewGrid{ grid-template-columns: 1.35fr .65fr; align-items:start; }
  .steps{ grid-template-columns: repeat(3, 1fr); }
  .momentGrid{ grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 520px){
  .credRow{ grid-template-columns: 1fr; }
  .floating{ display:none; }
  .ctaBand{ flex-direction:column; align-items:flex-start; }
  .momentGrid{ grid-template-columns: 1fr; }
}
