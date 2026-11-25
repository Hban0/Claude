"use client";

import { useState } from "react";
import {
  Activity, Bell, ChevronDown, ChevronRight, CircleHelp, Crown, Flame, Gift,
  Gamepad2, Home, Menu, Search, ShieldCheck, Sparkles, Trophy, Wallet,
  Zap, Radio, Star, UserRound, X
} from "lucide-react";

const hotGames = [
  { name: "Sweet Bonanza", studio: "Pragmatic Play", color: "pink", icon: "🍬", tag: "POPULAIRE" },
  { name: "Gates of Olympus", studio: "Pragmatic Play", color: "gold", icon: "⚡", tag: "HOT" },
  { name: "Sugar Rush", studio: "Pragmatic Play", color: "purple", icon: "🍭", tag: "NOUVEAU" },
  { name: "Wanted Dead or a Wild", studio: "Hacksaw Gaming", color: "red", icon: "🤠", tag: "HOT" },
  { name: "Aviator", studio: "Spribe", color: "blue", icon: "✈️", tag: "LIVE" }
];
const categories = [
  { label: "Machines à sous", icon: Gamepad2 },
  { label: "Live Casino", icon: Radio },
  { label: "Jeux originaux", icon: Sparkles },
  { label: "Jeux de table", icon: Star },
  { label: "Jeux rapides", icon: Zap },
  { label: "Promotions", icon: Gift }
];
const nav = [
  { label: "Accueil", icon: Home, active: true },
  { label: "Événements", icon: Trophy },
  { label: "Jeux chauds", icon: Flame },
  { label: "Machines à sous", icon: Gamepad2 },
  { label: "Jeux en direct", icon: Radio },
  { label: "Club VIP", icon: Crown },
  { label: "Bonus Hub", icon: Gift },
  { label: "Mon profil", icon: UserRound }
];

export default function HomePage() {
  const [balance, setBalance] = useState(10000);
  const [activeTab, setActiveTab] = useState("Casino");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [notice, setNotice] = useState("");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  const demoAction = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2600);
  };

  return (
    <main className="app-shell">
      <header className="topbar">
        <button className="icon-button mobile-only" aria-label="Ouvrir le menu" onClick={() => setMobileMenu(!mobileMenu)}><Menu size={21}/></button>
        <a className="brand" href="#"><span className="brand-mark">A</span><span className="brand-copy"><b>ADA</b><small>GAMES</small></span></a>
        <div className="main-tabs">
          {["Casino", "Sports"].map(tab => <button key={tab} className={activeTab === tab ? "tab active" : "tab"} onClick={() => { setActiveTab(tab); demoAction(tab === "Sports" ? "ADA Sports : aperçu des événements simulés" : "Bienvenue sur ADA Games"); }}>{tab === "Sports" ? <Trophy size={16}/> : <Gamepad2 size={16}/>} {tab}</button>)}
        </div>
        <div className="top-actions">
          <div className="balance-pill"><span className="coin">A</span><b>{balance.toLocaleString("fr-BE", { minimumFractionDigits: 2 })}</b><small>ADA</small><ChevronDown size={15}/></div>
          <button className="btn btn-green" onClick={() => demoAction("Les dépôts en argent réel ne sont pas disponibles sur cette démo.")}>Ajouter des crédits</button>
          <button className="btn btn-outline" onClick={() => demoAction("Le portefeuille ADA est un portefeuille de démonstration.")}><Wallet size={16}/> Wallet</button>
          <button className="icon-button" aria-label="Notifications" onClick={() => demoAction("Aucune nouvelle notification.")}><Bell size={19}/></button>
          <div className="avatar">A</div>
        </div>
      </header>

      <div className="layout">
        <aside className={mobileMenu ? "sidebar open" : "sidebar"}>
          <div className="side-heading">EXPLORER ADA <button className="icon-button mobile-only" onClick={() => setMobileMenu(false)} aria-label="Fermer"><X size={18}/></button></div>
          {nav.map(({label, icon: Icon, active}) => <button key={label} className={active ? "nav-item selected" : "nav-item"} onClick={() => { setSelected(label); setMobileMenu(false); demoAction(label + " — section de démonstration"); }}><Icon size={18}/><span>{label}</span>{label === "Bonus Hub" && <em>NEW</em>}</button>)}
          <div className="sidebar-promo"><div className="promo-orb">✦</div><b>ADA VIP CLUB</b><p>Progressez et découvrez les avantages de chaque niveau.</p><button onClick={() => demoAction("Le programme VIP sera activé dans une prochaine version.")}>Découvrir <ChevronRight size={14}/></button></div>
          <div className="side-foot"><ShieldCheck size={15}/> Démo sécurisée · crédits fictifs</div>
        </aside>

        <section className="content">
          <div className="ticker"><div className="ticker-icon"><Gift size={20}/></div><div><b>LE BONUS ADA EST À L’HONNEUR</b><span>Explorez les jeux et découvrez l'expérience ADA — sans argent réel.</span></div><button onClick={() => demoAction("Les promotions sont uniquement illustratives.")}>Découvrir <ChevronRight size={15}/></button><button className="ticker-close" aria-label="Fermer" onClick={e => e.currentTarget.parentElement?.classList.add("hidden")}><X size={17}/></button></div>

          <div className="hero">
            <div className="hero-copy"><div className="eyebrow"><Sparkles size={14}/> BIENVENUE DANS L’UNIVERS ADA</div><h1>Play your game.<br/><span>Own the moment.</span></h1><p>Le sport et le gaming réunis dans une expérience nouvelle génération.</p><div className="hero-buttons"><button className="btn btn-primary" onClick={() => setActiveTab("Casino")}>Explorer ADA <ChevronRight size={17}/></button><button className="btn btn-glass" onClick={() => {setActiveTab("Sports"); demoAction("Bienvenue dans ADA Sports.");}}>ADA Sports <Trophy size={16}/></button></div><div className="hero-dots"><i/><i/><i/></div></div>
            <div className="hero-art"><div className="halo halo-one"/><div className="halo halo-two"/><div className="hero-crown">♛</div><div className="floating-chip chip-one">A</div><div className="floating-chip chip-two">✦</div><div className="floating-card">♠</div><div className="hero-orbit">ADA</div></div>
          </div>

          <div className="category-grid">{categories.map(({label, icon: Icon}) => <button key={label} className="category" onClick={() => {setSelected(label); demoAction(label + " : contenu de démonstration");}}><span><Icon size={21}/></span><b>{label}</b></button>)}</div>

          {activeTab === "Sports" ? <section className="section"><div className="section-head"><div><span className="section-kicker">ADA SPORTS</span><h2>Événements à découvrir</h2></div><span className="demo-tag">SIMULATION</span></div><div className="sports-card"><div className="sports-league">⚽ LIGUE ADA · MATCH FICTIF</div><div className="match"><div><span className="team-badge">A</span><b>FC ADA</b></div><strong>VS</strong><div><span className="team-badge alt">N</span><b>FC NOVA</b></div></div><div className="odds">{["1 · 1.72","N · 3.40","2 · 4.20"].map(o => <button key={o} onClick={() => demoAction("Cote illustrative sélectionnée : " + o)}>{o}</button>)}</div><p>Match, équipes et cotes entièrement fictifs. Aucune mise réelle.</p></div></section> : <><section className="section"><div className="section-head"><div><span className="section-kicker">SÉLECTION ADA</span><h2><Flame size={21}/> Jeux chauds</h2></div><button className="text-link" onClick={() => demoAction("Catalogue complet bientôt disponible.")}>Voir tout <ChevronRight size={15}/></button></div><div className="game-grid">{hotGames.filter(g => g.name.toLowerCase().includes(search.toLowerCase())).map(game => <button key={game.name} className={"game-card " + game.color} onClick={() => demoAction(game.name + " est un aperçu visuel, le jeu n'est pas encore activé.")}><span className="game-tag">{game.tag}</span><span className="game-art">{game.icon}</span><b>{game.name}</b><small>{game.studio}</small></button>)}</div></section><section className="section"><div className="section-head"><div><span className="section-kicker">EN DIRECT</span><h2><Radio size={21}/> Live Casino</h2></div><span className="live-label"><i/> APERÇU</span></div><div className="live-grid">{[{n:"Roulette",e:"🎡"},{n:"Blackjack",e:"🂡"},{n:"Baccarat",e:"♠"},{n:"Crazy Time",e:"🎯"}].map(item => <button className="live-card" key={item.n} onClick={() => demoAction(item.n + " : table de démonstration bientôt disponible.")}><span>{item.e}</span><b>{item.n}</b><small>TABLE DE DÉMO</small></button>)}</div></section></>}

          <div className="section search-section"><label htmlFor="game-search"><Search size={17}/></label><input id="game-search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher un jeu dans ADA…"/></div>
          <footer>ADA © 2026 · Plateforme de démonstration · Aucun argent réel · <a href="#">Jeu responsable</a></footer>
        </section>

        <aside className="rightbar">
          <div className="panel wallet-panel"><div className="panel-head"><span>VALEUR DU PORTEFEUILLE</span><Wallet size={17}/></div><div className="wallet-value">{balance.toLocaleString("fr-BE", {minimumFractionDigits:2})} <small>ADA</small></div><p>≈ {balance.toLocaleString("fr-BE")} crédits fictifs</p><div className="wallet-actions"><button onClick={() => setBalance(v => v + 1000)}>+ 1 000 crédits démo</button><button onClick={() => setBalance(10000)}>Réinitialiser</button></div></div>
          <div className="panel vip-panel"><div className="panel-head"><span>VOTRE PROGRESSION VIP</span><Crown size={17}/></div><div className="vip-row"><div className="vip-gem">◆</div><div><b>Rookie I</b><small>Niveau de départ</small></div><strong>1.83%</strong></div><div className="progress"><i/></div><small className="muted">Progression illustrative</small></div>
          <div className="panel event-panel"><div className="panel-head"><span><Activity size={16}/> ÉVÉNEMENT EN VEDETTE</span><span className="sim-tag">SIMULÉ</span></div><div className="event-league">Ligue ADA · Match fictif</div><div className="event-team"><span className="team-badge">A</span> FC ADA <b>1</b></div><div className="event-team"><span className="team-badge alt">N</span> FC NOVA <b>0</b></div><div className="event-time">58’ · Score fictif</div></div>
          <div className="panel wins-panel"><div className="panel-head"><span><Trophy size={16}/> ACTIVITÉ RÉCENTE</span></div><div className="empty-state"><Sparkles size={23}/><b>Votre aventure commence ici</b><span>Les statistiques de démonstration apparaîtront ici.</span></div></div>
          <div className="responsible"><ShieldCheck size={16}/><span>Crédits fictifs uniquement.<br/>Aucun dépôt ou retrait réel.</span></div>
        </aside>
      </div>
      <nav className="mobile-nav"><button><Home/>Menu</button><button><Gamepad2/>Casino</button><button><Crown/>VIP</button><button><Trophy/>Sports</button><button><CircleHelp/>Plus</button></nav>
      {notice && <div className="toast" role="status">{notice}</div>}
    </main>
  );
}
