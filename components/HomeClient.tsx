"use client";

import { useCallback, useState } from "react";
import { Header } from "./Header";
import { Brand } from "./Brand";
import { ScreenshotLightbox } from "./ScreenshotLightbox";
import { project, screenshots, type ScreenshotKey } from "@/lib/data";

const themes = {
  kingdom: { label: "Kingdom", number: "01", description: "Cinematic wallpapers, glass panels and spacious app collections put the things you watch front and center.", variants: [["kingdom-day", "Mountain"], ["kingdom-night", "Sunset"]] },
  tide: { label: "Tide", number: "02", description: "A calm, airy home screen with an oversized clock, waves and a floating shelf of apps. The same launcher, a different mood.", variants: [["tide-day", "Waves"], ["tide-bing", "Bing photo"], ["tide-earth", "Earth View"]] },
} as const;
type ThemeName = keyof typeof themes;
function Capture({ id, onOpen, priority = false }: { id: ScreenshotKey; onOpen: (id: ScreenshotKey) => void; priority?: boolean }) {
  const shot = screenshots[id];
  return <>
    {/* Self-hosted optimized screenshots prevent GitHub hotlink failures. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={shot.src} alt={shot.alt} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined} />
    <button className="screen-open" aria-label={`Expand ${shot.label} screenshot`} onClick={() => onOpen(id)} type="button">⤢</button>
  </>;
}

export function HomeClient() {
  const [hero, setHero] = useState<ScreenshotKey>("kingdom-night");
  const [theme, setTheme] = useState<ThemeName>("tide");
  const [variant, setVariant] = useState<ScreenshotKey>("tide-day");
  const [lightbox, setLightbox] = useState<ScreenshotKey | null>(null);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const changeTheme = (name: ThemeName) => { setTheme(name); setVariant(themes[name].variants[0][0]); };

  return <>
    <div className="site"><Header /><main>
      <section className="hero" id="home"><div className="container hero-layout">
        <div className="hero-copy"><div className="eyebrow">For Android TV &amp; Google TV</div><h1>Your TV.<em>Your Haven.</em></h1>
          <p className="hero-lead">A calmer home for everything you watch. Your apps, your collections, your favorite games, and a screen that finally feels like yours.</p>
          <div className="hero-actions"><a className="btn btn-primary" href="#experience">Explore the launcher <span aria-hidden="true">↗</span></a><a className="btn" href="#install">Get Haven <span aria-hidden="true">↓</span></a></div>
          <div className="hero-minor"><span>No sponsored rows</span><span>Made for the remote</span><span>Open source</span></div>
        </div>
        <div className="tv-unit"><div className="tv-frame"><div className="tv-screen"><Capture id={hero} onOpen={setLightbox} priority /></div></div><div className="tv-stand" aria-hidden="true" />
          <div className="tv-bottom"><div><strong>THE ACTUAL HAVEN HOME SCREEN</strong><p>{screenshots[hero].label}</p></div><div className="chips">{(["kingdom-night","kingdom-day"] as const).map((key)=><button className="chip" type="button" key={key} aria-pressed={hero === key} onClick={()=>setHero(key)}>{key === "kingdom-night" ? "Sunset" : "Mountain"}</button>)}</div></div>
        </div>
      </div></section>
      <div className="ribbon"><div className="container ribbon-inner"><span>Kingdom &amp; Tide themes</span><span>Glass-style controls</span><span>Live TV &amp; Watch Now</span><span>Made to be personal</span></div></div>
      <section className="section" id="experience"><div className="container">
        <div className="section-top"><div><div className="eyebrow">01 / The look and feel</div><h2>Two ways to<br/>feel at home.</h2></div><p>Choose a bold, cinematic layout or something quieter. These are screenshots from the actual launcher, not recreated marketing illustrations.</p></div>
        <div className="theme-toolbar"><div className="segment">{(["kingdom", "tide"] as const).map((key)=><button key={key} type="button" aria-pressed={theme === key} onClick={()=>changeTheme(key)}>{key === "kingdom" ? "✧" : "≋"} &nbsp; {themes[key].label}</button>)}</div><div className="variants" aria-label="Choose wallpaper variation">{themes[theme].variants.map(([key,label])=><button key={key} className="variant" type="button" aria-pressed={variant === key} onClick={()=>setVariant(key)}>{label}</button>)}</div></div>
        <div className="theme-main"><div className="theme-photo"><Capture id={variant} onOpen={setLightbox}/><span className="photo-label">{screenshots[variant].label.replace(" • ", " / ")}</span></div><div className="theme-info"><div><div className="index">{themes[theme].number}</div><h3>{themes[theme].label}</h3><p>{themes[theme].description}</p></div><div className="foot">Choose a theme or wallpaper above to explore the real Haven screenshots.</div></div></div>
        <div className="subline"><strong>More wallpaper possibilities</strong></div>
        <div className="photo-grid">
          <article className="photo-card"><div className="still"><Capture id="tide-bing" onOpen={setLightbox}/></div><div className="copy"><div className="inline-mark">Bing photography</div><h3>A different backdrop.</h3><p>Bring scenic photography onto your TV while keeping Tide&apos;s minimal layout.</p></div></article>
          <article className="photo-card"><div className="still"><Capture id="tide-earth" onOpen={setLightbox}/></div><div className="copy"><div className="inline-mark">Google Earth View</div><h3>A whole new perspective.</h3><p>Satellite views and landscapes make even an idle TV feel personal.</p></div></article>
        </div>
      </div></section>
      <section className="section" id="features"><div className="container">
        <div className="section-top"><div><div className="eyebrow">02 / The little details</div><h2>Feels like it<br/>belongs on TV.</h2></div><p>Not another crowded dashboard. Haven gives you fast controls and thoughtful personalization without burying everything in endless menus.</p></div>
        <div className="showcase-row"><div className="showcase-copy"><div className="eyebrow">Quick Settings</div><h3>Everything<br/>within reach.</h3><p>Switch themes, adjust motion, configure DNS, change wallpapers, and access TV controls without hunting through system menus.</p><div className="shelf"><span>TV controls</span><span>Wallpaper</span><span>DNS</span><span>Day &amp; night</span></div><div className="mini-caption">Actual screenshot from docs/screenshots</div></div><div className="showcase-img"><Capture id="quick" onOpen={setLightbox}/></div></div>
        <div className="hairline" />
        <div className="showcase-row reverse"><div className="showcase-copy"><div className="eyebrow">Appearance &amp; Personalize</div><h3>Make it<br/>your own.</h3><p>Choose how Haven looks and behaves from one cohesive settings experience. Theme, wallpaper and layout controls feel native to the rest of your TV.</p><div className="shelf"><span>Kingdom or Tide</span><span>Motion</span><span>Appearance</span></div><div className="mini-caption">Actual screenshot from docs/screenshots</div></div><div className="showcase-img"><Capture id="settings" onOpen={setLightbox}/></div></div>
        <div className="showcase-row collection-row"><div className="showcase-copy"><div className="eyebrow">Your apps, your layout</div><h3>Collections<br/>that make sense.</h3><p>Move the apps you love into collections that work for you, like Streaming, Sports, Live TV and Tools. Rearrange your shelves and keep everything organized.</p><div className="shelf"><span>Custom collections</span><span>Reorder apps</span><span>Hide clutter</span></div><div className="mini-caption">Actual Haven Collections settings capture</div></div><div className="showcase-img"><Capture id="collections" onOpen={setLightbox}/></div></div>
      </div></section>
      <section className="section section-alt" id="entertainment"><div className="container">
        <div className="story-head"><div className="eyebrow">03 / Beyond your apps</div><h2>More to watch.<br/>More to follow.</h2><p>Haven keeps the content and teams you care about closer to your home screen. Each feature below is shown with its own real screenshot.</p></div>
        <div className="entertainment-big"><div className="art"><Capture id="watchnow" onOpen={setLightbox}/></div><div className="copy"><div className="eyebrow">Watch Now</div><h3>Pick up right<br/>where you are.</h3><p>Open a single drawer for the next thing worth watching. Get your favorite NBA team&apos;s upcoming game and browse the schedule. Compatible apps can also contribute Continue Watching and Live Channels rows.</p><div className="motif">Real Watch Now capture</div></div></div>
        <div className="stories"><article className="story-card"><div className="visual"><Capture id="nba-game" onOpen={setLightbox}/></div><div className="copy"><div className="eyebrow">NBA / Games</div><h3>Follow the matchup.</h3><p>Browse today&apos;s games and open a matchup to see its status, teams, watch actions and available detail tabs.</p></div></article><article className="story-card"><div className="visual"><Capture id="nba-schedule" onOpen={setLightbox}/></div><div className="copy"><div className="eyebrow">NBA / Your team</div><h3>Keep the season close.</h3><p>Select a favorite team to explore its upcoming and previous games without leaving Haven.</p></div></article></div>
      </div></section>
      <section className="section" id="install"><div className="container">
        <div className="section-top"><div><div className="eyebrow">04 / Installation</div><h2>A new home.<br/>Your setup.</h2></div><p>Haven is built for Android TV and Google TV. The APK is available on GitHub, with installation information in the project repository.</p></div>
        <div className="install-grid"><div className="install-step"><span>01 / Download</span><h3>Get the APK.</h3><p>Download the official release directly from Haven&apos;s GitHub release asset.</p></div><div className="install-step"><span>02 / Install</span><h3>Put it on your TV.</h3><p>Install the APK through your preferred sideloading method, or use ADB as documented in the README.</p></div><div className="install-step"><span>03 / Personalize</span><h3>Make it yours.</h3><p>Pick Kingdom or Tide, choose a wallpaper, and organize your collections.</p></div></div>
        <div className="final-cta"><div className="cta-intro"><div className="eyebrow">Your screen, your rules</div><h2>Come home<br/>to Haven.</h2><p>A beautiful, ad-free home for the things you love watching, built with Android TV and Google TV in mind.</p></div><div className="cta-download"><div className="cta-download-head"><div><strong>Get Haven on your TV</strong><small>Android TV &amp; Google TV</small></div><span className="cta-version">{project.version}</span></div><div className="cta-actions"><a className="btn btn-primary" href={project.download}>↓ &nbsp; Download Haven {project.version} APK</a><a className="btn btn-secondary" href={project.releases} target="_blank" rel="noopener noreferrer">View GitHub release ↗</a></div><p className="install-detail">Downloaded directly from GitHub. <a href={project.install} target="_blank" rel="noopener noreferrer" style={{textDecoration:"underline"}}>Read installation notes</a>.</p></div></div>
      </div></section>
    </main><footer className="container"><Brand/><div className="footer-note">Haven TV Launcher • Free and open source</div><div className="footer-links"><a href="#home">Back to top ↑</a><a href={project.repository} target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></footer></div>
    <ScreenshotLightbox active={lightbox} onClose={closeLightbox}/>
  </>;
}
