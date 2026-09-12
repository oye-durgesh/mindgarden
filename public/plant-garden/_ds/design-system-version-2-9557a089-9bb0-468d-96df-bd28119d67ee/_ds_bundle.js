/* @ds-bundle: {"format":3,"namespace":"BackWithBrainDesignSystem_9557a0","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"SectionTab","sourcePath":"components/core/SectionTab.jsx"},{"name":"TraitChip","sourcePath":"components/core/TraitChip.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"59bbfc6e4950","components/core/Button.jsx":"b5a8bc0002b2","components/core/Card.jsx":"9dbe18cfd1b1","components/core/SectionTab.jsx":"53384e4a0a6c","components/core/TraitChip.jsx":"eeb9dc3dbca1","ui_kits/bwb-app/CelebrationScreen.jsx":"4650d701d727","ui_kits/bwb-app/HomeScreen.jsx":"e71a900a3f22","ui_kits/bwb-app/PlayerScreen.jsx":"0878edb4eedb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BackWithBrainDesignSystem_9557a0 = window.BackWithBrainDesignSystem_9557a0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small section/status pill. Soft tinted fill in the section colour, darkest
 * step for text — never pure black. Use for program labels, counts, statuses.
 */
function Badge({
  children,
  section = 'detox',
  tone = 'soft',
  style,
  ...rest
}) {
  const ramp = {
    detox: ['#F1E8FB', '#4A1D75', '#8439C9'],
    eap: ['#FBF1E0', '#8E591C', '#E8A04C'],
    sleep: ['#ECF1F8', '#2E4368', '#5B7FB8'],
    move: ['#EEF3EB', '#4F6346', '#9DB890'],
    reset: ['#FAEEEA', '#88452F', '#E0856B'],
    streak: ['#F7F0DF', '#6E531E', '#C49A4C']
  }[section] || ['#F1E8FB', '#4A1D75', '#8439C9'];
  const [tint, ink, solid] = ramp;
  const styles = tone === 'solid' ? {
    background: solid,
    color: '#FFFFFF'
  } : {
    background: tint,
    color: ink
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 24,
      padding: '0 11px',
      borderRadius: 999,
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: '0.01em',
      ...styles,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BackWithBrain primary action component.
 * Pill by default, sentence-case label, never bold. Light theme renders a
 * dark gradient pill; dark theme renders section-tinted glass. Reward uses
 * gold glass in both themes.
 */
function Button({
  children,
  variant = 'primary',
  section = 'detox',
  theme = 'light',
  size = 'mobile',
  shape = 'pill',
  disabled = false,
  loading = false,
  onClick,
  style,
  ...rest
}) {
  const sectionBase = {
    detox: '#8439C9',
    eap: '#E8A04C',
    sleep: '#5B7FB8',
    move: '#9DB890',
    reset: '#E0856B',
    streak: '#C49A4C'
  }[section] || '#8439C9';
  const height = size === 'web' ? 48 : 52;
  const radius = shape === 'pill' ? 999 : 16;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height,
    padding: '0 26px',
    borderRadius: radius,
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    fontWeight: 500,
    fontSize: 15,
    letterSpacing: '0.005em',
    cursor: disabled || loading ? 'default' : 'pointer',
    border: '1px solid transparent',
    transition: 'transform 160ms cubic-bezier(.22,.61,.36,1), box-shadow 160ms ease, background 160ms ease',
    opacity: disabled ? 0.4 : 1,
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: theme === 'dark' ? {
      background: 'rgba(168,143,208,0.18)',
      border: '1px solid rgba(184,160,224,0.40)',
      color: '#F2EEFA',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      boxShadow: '0 8px 28px rgba(132,57,201,0.30), inset 0 1px 0 rgba(255,255,255,0.12)'
    } : {
      background: 'linear-gradient(180deg,#3A2D5C,#241A3E)',
      color: '#F2EEFA',
      boxShadow: '0 8px 24px rgba(36,26,62,0.35), inset 0 1px 0 rgba(255,255,255,0.12)'
    },
    reward: {
      background: 'rgba(240,200,104,0.16)',
      border: '1px solid rgba(240,200,104,0.45)',
      color: theme === 'dark' ? '#FFE9B0' : '#7A5A18',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      boxShadow: '0 6px 24px rgba(224,176,80,0.25), inset 0 1px 0 rgba(255,255,255,0.20)'
    },
    secondary: {
      background: 'transparent',
      border: `1.5px solid ${sectionBase}`,
      color: sectionBase
    },
    tertiary: {
      background: 'transparent',
      color: theme === 'dark' ? '#A8A4B5' : '#6B6770',
      padding: '0 12px'
    }
  };
  const [pressed, setPressed] = React.useState(false);
  const pressStyle = pressed && !disabled && !loading ? {
    transform: 'scale(0.96)'
  } : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled || loading,
    onClick: onClick,
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    style: {
      ...base,
      ...variants[variant],
      ...pressStyle,
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement(Spinner, {
    color: variants[variant].color
  }) : children);
}
function Spinner({
  color
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      border: `2px solid ${color}`,
      borderTopColor: 'transparent',
      display: 'inline-block',
      animation: 'bwb-spin 0.7s linear infinite'
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes bwb-spin{to{transform:rotate(360deg)}}'));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Soft warm surface container. Light = white with warm border + gentle shadow;
 * dark = #211E2C. Set `glass` for a frosted feature surface (purple/gold/blue/neutral).
 */
function Card({
  children,
  theme = 'light',
  glass = null,
  padding = 20,
  radius = 16,
  style,
  ...rest
}) {
  const glassRecipes = {
    neutral: {
      bg: 'rgba(255,255,255,0.12)',
      bd: 'rgba(255,255,255,0.25)',
      glow: '0 8px 32px rgba(0,0,0,0.20)'
    },
    purple: {
      bg: 'rgba(168,143,208,0.18)',
      bd: 'rgba(184,160,224,0.40)',
      glow: '0 8px 30px rgba(132,57,201,0.35)'
    },
    gold: {
      bg: 'rgba(240,200,104,0.16)',
      bd: 'rgba(240,200,104,0.45)',
      glow: '0 6px 24px rgba(224,176,80,0.30)'
    },
    blue: {
      bg: 'rgba(141,163,196,0.18)',
      bd: 'rgba(141,163,196,0.40)',
      glow: '0 8px 28px rgba(91,127,184,0.30)'
    }
  };
  let surface;
  if (glass && glassRecipes[glass]) {
    const g = glassRecipes[glass];
    surface = {
      background: g.bg,
      border: `1px solid ${g.bd}`,
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      boxShadow: `${g.glow}, inset 0 1px 0 rgba(255,255,255,0.30)`,
      color: theme === 'dark' ? '#E8E5F0' : '#3D3A44'
    };
  } else if (theme === 'dark') {
    surface = {
      background: '#211E2C',
      border: '1px solid #332F40',
      boxShadow: '0 4px 16px rgba(0,0,0,0.30)',
      color: '#E8E5F0'
    };
  } else {
    surface = {
      background: '#FFFFFF',
      border: '1px solid #E0D6C8',
      boxShadow: '0 4px 16px rgba(36,26,62,0.08)',
      color: '#3D3A44'
    };
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: radius,
      padding,
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      ...surface,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionTab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Section tab — the fixed dark pill that sits top-left of every brand-book
 * slide and content surface. Dark jamun `#241A3E`, white Jakarta label.
 */
function SectionTab({
  children,
  number,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 34,
      padding: '0 16px',
      borderRadius: 999,
      background: '#241A3E',
      color: '#F2EEFA',
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      letterSpacing: '0.02em',
      boxShadow: '0 4px 14px rgba(36,26,62,0.25)',
      ...style
    }
  }, rest), number != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#C9A86A',
      fontVariantNumeric: 'tabular-nums'
    }
  }, number), children);
}
Object.assign(__ds_scope, { SectionTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionTab.jsx", error: String((e && e.message) || e) }); }

// components/core/TraitChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Personality trait chip — a soft rounded chip used for the brand's five
 * traits (warm / clear / science / encouraging / confident) and similar
 * tag groups. Optional leading dot in the section colour.
 */
function TraitChip({
  children,
  theme = 'light',
  accent = '#8439C9',
  dot = true,
  style,
  ...rest
}) {
  const dark = theme === 'dark';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 36,
      padding: '0 16px',
      borderRadius: 999,
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      background: dark ? '#211E2C' : '#FFFFFF',
      border: `1px solid ${dark ? '#332F40' : '#E0D6C8'}`,
      color: dark ? '#E8E5F0' : '#3D3A44',
      boxShadow: dark ? 'none' : '0 2px 8px rgba(36,26,62,0.05)',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: accent,
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { TraitChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TraitChip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/bwb-app/CelebrationScreen.jsx
try { (() => {
// BWB app — Celebration moment. Aurora + glass gold checkmark, no-hype copy,
// glass streak pill, gold-glass claim button.
function CelebrationScreen({
  onDone
}) {
  const {
    Button
  } = window.BackWithBrainDesignSystem_9557a0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      background: 'var(--mesh-aurora)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--d-text-1)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 28px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: celebGrain
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 116,
      height: 116,
      borderRadius: '50%',
      marginBottom: 26,
      background: 'var(--glass-gold-bg)',
      border: '1px solid var(--glass-gold-border)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      boxShadow: 'var(--glass-gold-glow), inset 0 1px 0 rgba(255,255,255,0.3)',
      display: 'grid',
      placeItems: 'center',
      animation: 'bwb-pop 0.6s cubic-bezier(.22,.61,.36,1)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-check",
    style: {
      fontSize: 48,
      color: '#FFE9B0'
    }
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '500 28px/1.2 var(--font-serif)',
      margin: '0 0 10px'
    }
  }, "Done ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, "\uD83C\uDF31")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--d-text-2)',
      margin: '0 0 26px',
      maxWidth: 250,
      lineHeight: 1.5
    }
  }, "That's 12 days of showing up for yourself."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 30,
      padding: '11px 20px',
      borderRadius: 999,
      background: 'var(--glass-gold-bg)',
      border: '1px solid var(--glass-gold-border)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      boxShadow: 'var(--glass-gold-glow)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-leaf",
    style: {
      fontSize: 18,
      color: '#FFE9B0'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 15,
      color: '#FFE9B0'
    }
  }, "12 day streak")), /*#__PURE__*/React.createElement(Button, {
    variant: "reward",
    theme: "dark",
    onClick: onDone
  }, "Claim your streak \u2726")), /*#__PURE__*/React.createElement("style", null, `@keyframes bwb-pop{0%{transform:scale(0.4);opacity:0}60%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}}`));
}
const celebGrain = {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  opacity: 0.05,
  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
};
window.CelebrationScreen = CelebrationScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/bwb-app/CelebrationScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/bwb-app/HomeScreen.jsx
try { (() => {
// BWB app — Home / Today screen. Warm cream mesh, greeting, streak plant,
// hero detox card with progress ring, program list, bottom nav.
function HomeScreen({
  onOpenPlayer
}) {
  const {
    Badge,
    Card,
    SectionTab
  } = window.BackWithBrainDesignSystem_9557a0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      background: 'var(--mesh-light)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-1)',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: grainStyle
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '54px 22px 100px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(SectionTab, null, "Today"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      color: 'var(--deepgold-600)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-leaf",
    style: {
      fontSize: 18
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 15
    }
  }, "12"))), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '500 27px/1.2 var(--font-serif)',
      margin: '0 0 4px'
    }
  }, "Good morning, Aanya"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-2)',
      margin: '0 0 24px'
    }
  }, "A few minutes for your mind. Whenever you're ready."), /*#__PURE__*/React.createElement(Card, {
    padding: 20,
    radius: 24,
    style: {
      marginBottom: 16,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    section: "detox"
  }, "Daily detox"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '500 20px/1.25 var(--font-serif)',
      margin: '12px 0 6px'
    }
  }, "Clear the noise"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--text-2)',
      margin: 0,
      maxWidth: 180
    }
  }, "15 min \xB7 a science-backed reset for a busy head.")), /*#__PURE__*/React.createElement(ProgressRing, {
    pct: 0.4
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenPlayer,
    style: primaryPill
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-play",
    style: {
      fontSize: 15
    }
  }), "Start today's detox")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-2)',
      margin: '20px 4px 12px'
    }
  }, "Your programs"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(ProgramRow, {
    icon: "moon",
    section: "sleep",
    title: "Wind down",
    meta: "Sleep \xB7 8 min"
  }), /*#__PURE__*/React.createElement(ProgramRow, {
    icon: "heart",
    section: "eap",
    title: "Guided support",
    meta: "EAP \xB7 when you need it"
  }), /*#__PURE__*/React.createElement(ProgramRow, {
    icon: "hand-heart",
    section: "move",
    title: "Gratitude",
    meta: "Move \xB7 5 min"
  }), /*#__PURE__*/React.createElement(ProgramRow, {
    icon: "wind",
    section: "reset",
    title: "Quick reset",
    meta: "Calm \xB7 2 min"
  }))), /*#__PURE__*/React.createElement(BottomNav, {
    active: "today",
    onPlay: onOpenPlayer
  }));
}
function ProgressRing({
  pct
}) {
  const r = 26,
    c = 2 * Math.PI * r;
  return /*#__PURE__*/React.createElement("svg", {
    width: "64",
    height: "64",
    viewBox: "0 0 64 64",
    style: {
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "32",
    r: r,
    fill: "none",
    stroke: "var(--jamun-50)",
    strokeWidth: "6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "32",
    r: r,
    fill: "none",
    stroke: "var(--jamun-400)",
    strokeWidth: "6",
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: c * (1 - pct),
    transform: "rotate(-90 32 32)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "32",
    y: "37",
    textAnchor: "middle",
    fontSize: "14",
    fontWeight: "500",
    fontFamily: "var(--font-sans)",
    fill: "var(--jamun-600)"
  }, Math.round(pct * 100), "%"));
}
function ProgramRow({
  icon,
  section,
  title,
  meta
}) {
  const tint = {
    sleep: ['var(--sleep-50)', 'var(--sleep-600)'],
    eap: ['var(--eap-50)', 'var(--eap-600)'],
    move: ['var(--move-50)', 'var(--move-600)'],
    reset: ['var(--reset-50)', 'var(--reset-600)']
  }[section];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 16,
      padding: '13px 16px',
      boxShadow: '0 2px 8px rgba(36,26,62,0.05)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      flex: 'none',
      background: tint[0],
      display: 'grid',
      placeItems: 'center',
      color: tint[1]
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `ph ph-${icon}`,
    style: {
      fontSize: 22
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 500
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-3)',
      marginTop: 2
    }
  }, meta)), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-right",
    style: {
      fontSize: 18,
      color: 'var(--text-3)'
    }
  }));
}
function BottomNav({
  active,
  onPlay
}) {
  const Item = ({
    icon,
    label,
    id
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      color: active === id ? 'var(--jamun-600)' : 'var(--text-3)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `${active === id ? 'ph-fill' : 'ph'} ph-${icon}`,
    style: {
      fontSize: 23
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5
    }
  }, label));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 78,
      background: 'rgba(255,255,255,0.86)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderTop: '1px solid var(--border-soft)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px 14px'
    }
  }, /*#__PURE__*/React.createElement(Item, {
    icon: "house",
    label: "Today",
    id: "today"
  }), /*#__PURE__*/React.createElement(Item, {
    icon: "chart-line-up",
    label: "Progress",
    id: "progress"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onPlay,
    style: navCircle
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-play",
    style: {
      fontSize: 24,
      color: '#fff'
    }
  })), /*#__PURE__*/React.createElement(Item, {
    icon: "users-three",
    label: "Team",
    id: "team"
  }), /*#__PURE__*/React.createElement(Item, {
    icon: "user",
    label: "You",
    id: "you"
  }));
}
const grainStyle = {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  opacity: 0.04,
  mixBlendMode: 'multiply',
  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
};
const primaryPill = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  width: '100%',
  height: 52,
  marginTop: 18,
  border: 'none',
  cursor: 'pointer',
  borderRadius: 999,
  background: 'linear-gradient(180deg,#3A2D5C,#241A3E)',
  color: '#F2EEFA',
  fontFamily: 'var(--font-sans)',
  fontWeight: 500,
  fontSize: 15,
  boxShadow: '0 8px 24px rgba(36,26,62,0.35), inset 0 1px 0 rgba(255,255,255,0.12)'
};
const navCircle = {
  width: 58,
  height: 58,
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  background: 'linear-gradient(135deg,#9B52D8,#7331B8)',
  margin: '0 14px',
  boxShadow: '0 6px 22px rgba(132,57,201,0.4)',
  flex: 'none',
  marginTop: -22,
  display: 'grid',
  placeItems: 'center'
};
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/bwb-app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/bwb-app/PlayerScreen.jsx
try { (() => {
// BWB app — Player screen. Aurora dark mesh, glass player card, neutral-glass
// transport controls, frosted breathing guidance.
function PlayerScreen({
  onBack,
  onComplete
}) {
  const [playing, setPlaying] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      background: 'var(--mesh-aurora)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--d-text-1)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: auroraGrain
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '54px 22px 34px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 'auto'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: ghostIcon
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down",
    style: {
      fontSize: 22
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      letterSpacing: '0.04em',
      color: 'var(--d-text-2)'
    }
  }, "DAILY DETOX"), /*#__PURE__*/React.createElement("button", {
    style: ghostIcon
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-dots-three",
    style: {
      fontSize: 22
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      margin: '20px 0 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 196,
      height: 196,
      borderRadius: '50%',
      background: 'var(--glass-purple-bg)',
      border: '1px solid var(--glass-purple-border)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      boxShadow: 'var(--glass-purple-glow), inset 0 1px 0 rgba(255,255,255,0.3)',
      display: 'grid',
      placeItems: 'center',
      animation: playing ? 'bwb-breathe 7s ease-in-out infinite' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 21px/1.3 var(--font-serif)',
      color: '#F2EEFA',
      opacity: 0.92
    }
  }, "Breathe in"))), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '500 23px/1.25 var(--font-serif)',
      margin: '0 0 6px',
      textAlign: 'center'
    }
  }, "Clear the noise"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--d-text-2)',
      margin: '0 0 22px',
      textAlign: 'center'
    }
  }, "Why it works \xB7 your mind isn't fragile, it's untrained."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 22,
      fontSize: 11,
      color: 'var(--d-text-2)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "5:48"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 4,
      borderRadius: 2,
      background: 'rgba(255,255,255,0.14)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '62%',
      height: '100%',
      borderRadius: 2,
      background: 'linear-gradient(90deg,#C9A86A,#9B6BD0)'
    }
  })), /*#__PURE__*/React.createElement("span", null, "9:20")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: ghostIcon
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-arrow-counter-clockwise",
    style: {
      fontSize: 24
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPlaying(p => !p),
    style: glassPlay
  }, /*#__PURE__*/React.createElement("i", {
    className: `ph-fill ph-${playing ? 'pause' : 'play'}`,
    style: {
      fontSize: 28,
      color: '#F2EEFA'
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onComplete,
    style: ghostIcon
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-check",
    style: {
      fontSize: 24
    }
  })))), /*#__PURE__*/React.createElement("style", null, `
        @keyframes bwb-breathe { 0%,100%{transform:scale(0.86)} 50%{transform:scale(1.04)} }
      `));
}
const auroraGrain = {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  opacity: 0.05,
  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
};
const ghostIcon = {
  width: 44,
  height: 44,
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  background: 'rgba(255,255,255,0.06)',
  color: 'var(--d-text-1)',
  display: 'grid',
  placeItems: 'center'
};
const glassPlay = {
  width: 76,
  height: 76,
  borderRadius: '50%',
  cursor: 'pointer',
  background: 'var(--glass-neutral-bg)',
  border: '1px solid var(--glass-neutral-border)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  boxShadow: 'var(--glass-neutral-glow), inset 0 1px 0 rgba(255,255,255,0.3)',
  display: 'grid',
  placeItems: 'center'
};
window.PlayerScreen = PlayerScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/bwb-app/PlayerScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionTab = __ds_scope.SectionTab;

__ds_ns.TraitChip = __ds_scope.TraitChip;

})();
