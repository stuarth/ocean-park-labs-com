/* global React, ReactDOM, useReveal, Nav, Hero, Proof, Practice, Work, Lab, Approach, About, Contact, Footer,
   useTweaks, TweaksPanel, TweakSection, TweakColor, TweakText, TweakRadio */
const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "name": "Stuart Hinson",
  "email": "stuart@oceanparklabs.com",
  "accent": "240",
  "headline": "Twenty years turning hard technology into <em>outcomes.</em>",
  "density": "regular"
}/*EDITMODE-END*/;

const ACCENTS = [
  { label: "Ocean", value: "240" },
  { label: "Glacier", value: "220" },
  { label: "Forest", value: "168" },
  { label: "Tide", value: "200" },
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();

  // drive accent hue + density on :root
  useEffect(() => {
    document.documentElement.style.setProperty("--acc-h", t.accent);
    const gut = t.density === "compact" ? "clamp(24px,5vw,80px)" : t.density === "comfy" ? "clamp(32px,7vw,140px)" : "clamp(28px,6vw,110px)";
    document.documentElement.style.setProperty("--gutter", gut);
  }, [t.accent, t.density]);

  return (
    <React.Fragment>
      <Nav name={t.name} />
      <main>
        <Hero headline={t.headline} />
        <Proof />
        <div className="wrap"><hr className="divider" /></div>
        <Practice />
        <Work />
        <Lab />
        <Approach />
        <About name={t.name} />
        <Contact name={t.name} email={t.email} />
        <Footer name={t.name} />
      </main>

      <TweaksPanel>
        <TweakSection label="Brand" />
        <TweakText label="Name" value={t.name} onChange={(v) => setTweak("name", v)} />
        <TweakText label="Contact email" value={t.email} onChange={(v) => setTweak("email", v)} />
        <TweakSection label="Atmosphere" />
        <TweakColorHue value={t.accent} onChange={(v) => setTweak("accent", v)} />
        <TweakRadio label="Spacing" value={t.density} options={["compact", "regular", "comfy"]} onChange={(v) => setTweak("density", v)} />
        <TweakSection label="Copy" />
        <TweakText label="Hero headline" value={t.headline} onChange={(v) => setTweak("headline", v)} placeholder="HTML ok, e.g. <em>outcomes.</em>" />
      </TweaksPanel>
    </React.Fragment>
  );
}

/* custom swatch control: maps accent hues to visible colors */
function TweakColorHue({ value, onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ fontFamily: "var(--mono, monospace)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.7 }}>Accent</div>
      <div style={{ display: "flex", gap: 8 }}>
        {ACCENTS.map((a) => (
          <button
            key={a.value}
            title={a.label}
            onClick={() => onChange(a.value)}
            style={{
              flex: 1, height: 34, cursor: "pointer", borderRadius: 2,
              border: value === a.value ? "2px solid #fff" : "1px solid rgba(255,255,255,0.25)",
              background: `oklch(0.62 0.09 ${a.value})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
