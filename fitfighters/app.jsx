const { Button, AppBar, BottomNav, Card, MenuRow, Badge, SectionBadge, SECTION_TYPES, Chip, TextField } = window.FitFightersDesignSystem_4614fc;

// FitFighters mobile — combined screens + orchestrator. Auto-assembled from ui_kits/mobile screens.

// ── Login.jsx ───────────────────────────────────────────────────
// Autenticación aprobada (opción D): portada con imagen + tres accesos,
// formulario de correo y registro sobre el fondo claro de la app.

// Superficies claras estándar (mismas que el detalle de rutina aprobado).
const APP_LIGHT = {
  "--ff-surface": "#FFFFFF",
  "--ff-surface-2": "#F1F1F1",
  "--ff-border": "#E2E2E2",
  "--ff-text": "#141414",
  "--ff-text-2": "#5C5C5C",
  "--ff-text-3": "#8E8E8E",
  "--ff-red-light": "#CC2800",
  "--ff-primary-container": "rgba(255,50,0,0.10)",
};
const APP_LIGHT_BG = { "--ff-bg": "rgba(255,255,255,0.90)" };
// La barra inferior sigue siendo oscura: dentro de una pantalla clara recupera su rampa.
const DARK_NAV_CONTEXT = {
  "--ff-surface": "#1A1A1A", "--ff-surface-2": "#222222", "--ff-border": "#2A2A2A",
  "--ff-text": "#F0F0F0", "--ff-text-2": "#B5B5B5", "--ff-text-3": "#888888",
};
// Superficies sobre imagen: blanco translúcido, texto blanco.
const ON_IMAGE = {
  "--ff-bg": "transparent",
  "--ff-surface": "rgba(255,255,255,0.10)",
  "--ff-surface-2": "rgba(255,255,255,0.16)",
  "--ff-border": "rgba(255,255,255,0.28)",
  "--ff-text": "#FFFFFF",
  "--ff-text-2": "rgba(255,255,255,0.78)",
  "--ff-text-3": "rgba(255,255,255,0.55)",
};

const LOGIN_IMG = "assets/login-bg.png";

function LoginLinkRow({ onRegister, tone = "light" }) {
  return (
    <p style={{ textAlign: "center", fontFamily: "var(--font-body)", fontSize: 13, color: tone === "light" ? "var(--ff-text-2)" : "rgba(255,255,255,.75)", margin: "16px 0 0" }}>
      ¿No tienes cuenta? <span onClick={onRegister} style={{ color: tone === "light" ? "var(--ff-red-light)" : "#fff", fontWeight: 600, cursor: "pointer" }}>Regístrate</span>
    </p>
  );
}

// D · Sobre la B, pero sin formulario: tres accesos y nada más.
function LoginChoiceScreen({ onLogin, onRegister }) {
  const btn = {
    display: "flex", alignItems: "center", justifyContent: "center", gap: 10, width: "100%", height: 50,
    borderRadius: 10, cursor: "pointer", fontFamily: "var(--font-display)", fontSize: 14, letterSpacing: "-.2px",
  };
  // Las redes van primero y sólidas en blanco: el contraste más alto posible sobre la foto.
  const solid = { ...btn, background: "#FFFFFF", border: "none", color: "#101010", fontSize: 14.5 };
  const ghost = { ...btn, background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.28)", color: "#fff", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" };
  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "#0F0F0F" }} data-screen-label="Login D">
      <img src={LOGIN_IMG} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.58) 45%, rgba(0,0,0,0.86) 100%)" }} />
      <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 20px 30px" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingBottom: 24 }}>
          <img src={window.__resources?.ffLogoBrand || "assets/logos/ff_logo_brand.svg"} style={{ width: 220 }} alt="FitFighters" />
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.85)", margin: "14px 0 0", letterSpacing: ".02em" }}>Entrena de forma inteligente.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <button onClick={onLogin} style={solid}>
            <span style={{ width: 17, height: 17, display: "block", background: "#101010", WebkitMaskImage: `url(${window.__resources?.icGoogle || "assets/icons/ic_google.svg"})`, maskImage: `url(${window.__resources?.icGoogle || "assets/icons/ic_google.svg"})`, WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat" }} />
            Continuar con Google
          </button>
          <button onClick={onLogin} style={solid}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.9c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.3-.1-2.6.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.8.9-3.5 2.2-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7 1.3 0 1.6.7 2.7.7 1.1 0 1.9-1.1 2.6-2.1.5-.7.8-1.4 1-2-.1 0-2-.8-2-3.7zM14.3 5.9c.6-.7 1-1.7.9-2.7-.9.1-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .1 2-.5 2.5-1.2z" /></svg>
            Continuar con Apple
          </button>
          <button onClick={onLogin} style={{ ...ghost, marginTop: 4 }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><polyline points="3 7 12 13 21 7" /></svg>
            Ingresar con correo
          </button>
        </div>
        <LoginLinkRow onRegister={onRegister} tone="dark" />
      </div>
    </div>
  );
}


// Campo blanco tipo "filled" de Material: 56px de alto, el label vive dentro de la
// superficie blanca y se eleva al escribir. Sin borde; el foco se marca en verde.
function WhiteField({ label, value, onChange, password, type = "text", supportingText, error }) {
  const [focused, setFocused] = React.useState(false);
  const [reveal, setReveal] = React.useState(false);
  const floated = focused || (value != null && String(value).length > 0);
  const accent = error ? "var(--ff-error)" : focused ? "var(--ff-green)" : null;
  return (
    <div>
      <div style={{ position: "relative", height: 56, borderRadius: 8, background: "#FFFFFF", padding: "0 14px", display: "flex", alignItems: "flex-end", boxShadow: accent ? `inset 0 -2px 0 ${accent}` : "none" }}>
        <span style={{ position: "absolute", left: 14, top: floated ? 8 : "50%", transform: floated ? "none" : "translateY(-50%)", fontFamily: "var(--font-body)", fontSize: floated ? 11 : 15, color: error ? "var(--ff-error)" : focused ? "var(--ff-green)" : "var(--ff-text-3)", pointerEvents: "none", transition: "all .15s ease" }}>{label}</span>
        <input
          value={value}
          type={password && !reveal ? "password" : type}
          onChange={(e) => onChange && onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ flex: 1, minWidth: 0, background: "transparent", border: "none", outline: "none", color: "var(--ff-text)", fontFamily: "var(--font-body)", fontSize: 15, height: 32, padding: 0, marginBottom: 6 }}
        />
        {password && (
          <button type="button" onClick={() => setReveal(r => !r)} aria-label={reveal ? "Ocultar" : "Mostrar"} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, marginBottom: 4, display: "flex", opacity: 0.6 }}>
            <span style={{ width: 20, height: 20, display: "block", background: "var(--ff-text-2)", WebkitMaskImage: `url(${window.__resources?.[reveal ? "visibilityOff" : "visibilityOn"] || `assets/icons/${reveal ? "visibility_off" : "visibility_on"}.svg`})`, maskImage: `url(${window.__resources?.[reveal ? "visibilityOff" : "visibilityOn"] || `assets/icons/${reveal ? "visibility_off" : "visibility_on"}.svg`})`, WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat" }} />
          </button>
        )}
      </div>
      {supportingText ? (
        <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: error ? "var(--ff-error)" : "var(--ff-text-3)", margin: "6px 14px 0" }}>{supportingText}</p>
      ) : null}
    </div>
  );
}

// App bar claro con la marca centrada.
function BrandAppBar({ onBack }) {
  return (
    <header style={{ position: "relative", display: "flex", alignItems: "center", height: 56, padding: "0 6px", flexShrink: 0, background: "transparent" }}>
      <CircleIconBtn kind="back" onClick={onBack} />
    </header>
  );
}

function LoginEmailScreen({ onLogin, onBack, onRegister }) {
  const [email, setEmail] = React.useState("eduardo@gmail.com");
  const [pwd, setPwd] = React.useState("FitFighters1");
  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)", ...APP_LIGHT_BG, ...APP_LIGHT }} data-screen-label="Login D · correo">
      <BrandAppBar onBack={onBack} />
      <div style={{ flex: 1, overflowY: "auto", padding: "10px 20px 24px" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--ff-text)", letterSpacing: "-.4px", margin: "0 0 8px" }}>Ingresar con correo</h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ff-text-2)", lineHeight: 1.6, margin: "0 0 24px" }}>Usa el correo con el que creaste tu cuenta.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <WhiteField label="Correo electrónico" value={email} onChange={setEmail} type="email" />
          <WhiteField label="Contraseña" value={pwd} onChange={setPwd} password />
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: 600, color: "var(--ff-red-light)", cursor: "pointer" }}>Olvidé mi contraseña</span>
        </div>
      </div>
      <div style={{ flexShrink: 0, padding: "12px 20px 28px", background: "linear-gradient(to top, var(--ff-bg) 75%, transparent)" }}>
        <Button variant="primary" fullWidth onClick={onLogin}>Iniciar sesión</Button>
        <LoginLinkRow onRegister={onRegister} />
      </div>
    </div>
  );
}

// Registro · misma identidad clara que el resto del flujo tras la portada.
function RegisterScreen({ onBack, onRegister }) {
  const [name, setName] = React.useState("Eduardo");
  const [lastName, setLastName] = React.useState("Ramírez");
  const [email, setEmail] = React.useState("eduardo@gmail.com");
  const [pwd, setPwd] = React.useState("FitFighters1");
  const [confirm, setConfirm] = React.useState("FitFighters1");
  const mismatch = confirm.length > 0 && pwd !== confirm;
  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)", ...APP_LIGHT_BG, ...APP_LIGHT }} data-screen-label="Registro">
      <BrandAppBar onBack={onBack} />
      <div style={{ flex: 1, overflowY: "auto", padding: "10px 20px 24px" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--ff-text)", letterSpacing: "-.4px", margin: "0 0 8px" }}>Crear cuenta</h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ff-text-2)", lineHeight: 1.6, margin: "0 0 24px" }}>Dos minutos y empiezas a entrenar.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <WhiteField label="Nombre(s)" value={name} onChange={setName} />
          <WhiteField label="Apellido(s)" value={lastName} onChange={setLastName} />
          <WhiteField label="Correo electrónico" value={email} onChange={setEmail} type="email" />
          <WhiteField label="Contraseña" value={pwd} onChange={setPwd} password supportingText="Mínimo 8 caracteres" />
          <WhiteField label="Confirmar contraseña" value={confirm} onChange={setConfirm} password error={mismatch} supportingText={mismatch ? "Las contraseñas no coinciden" : ""} />
        </div>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ff-text-3)", lineHeight: 1.6, margin: "18px 2px 0" }}>
          Al crear tu cuenta aceptas los <strong style={{ color: "var(--ff-text-2)", fontWeight: 500 }}>Términos</strong> y el <strong style={{ color: "var(--ff-text-2)", fontWeight: 500 }}>Aviso de privacidad</strong> de FitFighters.
        </p>
      </div>
      <div style={{ flexShrink: 0, padding: "12px 20px 28px", background: "linear-gradient(to top, var(--ff-bg) 75%, transparent)" }}>
        <Button variant="primary" fullWidth onClick={onRegister}>Crear cuenta</Button>
      </div>
    </div>
  );
}


// Registro · confirmación. Estado terminal claro: la cuenta existe pero falta
// confirmar el correo, así que el CTA lleva al buzón y el acceso queda secundario.
function RegisterDoneScreen({ email = "eduardo@gmail.com", onLogin }) {
  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)", ...APP_LIGHT_BG, ...APP_LIGHT }} data-screen-label="Registro · cuenta creada">
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 28px 8px", textAlign: "center" }}>
        <div style={{ width: 76, height: 76, borderRadius: "50%", background: "rgba(46,207,122,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 26 }}>
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#1FA860" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 12.5 9.5 18 20 6.5" /></svg>
        </div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--ff-text)", letterSpacing: "-.4px", margin: "0 0 10px" }}>Cuenta creada</h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ff-text-2)", lineHeight: 1.6, margin: 0, maxWidth: 268 }}>Tu cuenta se creó correctamente. Confirma tu correo para poder iniciar sesión.</p>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 24, padding: "12px 16px", borderRadius: 12, background: "var(--ff-surface)", border: "1px solid var(--ff-border)" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ff-text-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><polyline points="3 7 12 13 21 7" /></svg>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--ff-text)" }}>{email}</span>
        </div>
      </div>
      <div style={{ flexShrink: 0, padding: "12px 20px 28px", background: "linear-gradient(to top, var(--ff-bg) 75%, transparent)" }}>
        <Button variant="primary" fullWidth onClick={onLogin}>Abrir mi correo</Button>
        <p style={{ textAlign: "center", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ff-text-2)", margin: "16px 0 0" }}>
          <span onClick={onLogin} style={{ color: "var(--ff-red-light)", fontWeight: 600, cursor: "pointer" }}>Ya lo confirmé · iniciar sesión</span>
        </p>
      </div>
    </div>
  );
}


window.LoginScreen = LoginChoiceScreen;
window.LoginEmailScreen = LoginEmailScreen;
window.RegisterScreen = RegisterScreen;

// ── Onboarding.jsx ───────────────────────────────────────────────
// FitFighters mobile — Onboarding wizard: datos personales, experiencia,
// grupos musculares (solo si Intermedio/Avanzado), objetivo, lugar y días.

function ExperienceLevelOptionCard({ description, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%", textAlign: "left", cursor: "pointer",
        borderRadius: "var(--radius-lg)", padding: "16px",
        background: selected ? "var(--ff-primary-container)" : "var(--ff-surface)",
        border: `1px solid ${selected ? "var(--ff-red)" : "var(--ff-border)"}`,
      }}
    >
      <span style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500, color: selected ? "var(--ff-red-light)" : "var(--ff-text)", lineHeight: 1.4 }}>{description}</span>
    </button>
  );
}

// Solo se muestra la frase en lenguaje natural — sin etiquetas técnicas de nivel.
const EXPERIENCE_LEVELS = [
  { value: "beginner", description: "Estoy comenzando." },
  { value: "intermediate", description: "Llevo menos de 2 años entrenando de forma regular." },
  { value: "advanced", description: "Llevo más de 2 años entrenando de forma regular." },
];

const MUSCLE_GROUPS = [
  { value: "full_body", label: "Cuerpo entero" },
  { value: "glutes", label: "Glúteos" },
  { value: "quads", label: "Cuádriceps" },
  { value: "hamstrings", label: "Femorales" },
  { value: "chest", label: "Pecho" },
  { value: "back", label: "Espalda" },
  { value: "shoulders", label: "Hombros" },
  { value: "arms", label: "Brazos" },
];

const FITNESS_GOALS = [
  { value: "weight_loss", label: "Bajar de peso / Perder grasa" },
  { value: "tone_body", label: "Definir / Tonificar" },
  { value: "muscle_gain", label: "Aumentar musculatura" },
  { value: "health", label: "Mejorar mi salud" },
];

const UNIT_SYSTEMS = [
  { value: "metric", label: "Métrico (kg, cm)" },
  { value: "imperial", label: "Inglés (lb, in)" },
];

// Rangos válidos por sistema de unidades (paridad con Constants.kt / PersonalInfoValidator.kt).
const MEASUREMENT_RANGES = {
  metric: { height: { min: 120, max: 230, unit: "cm" }, weight: { min: 30, max: 250, unit: "kg" } },
  imperial: { height: { min: 47.2, max: 90.5, unit: "in" }, weight: { min: 66, max: 550, unit: "lb" } },
};

function outOfRange(value, range) {
  if (!value) return null;
  const n = parseFloat(value);
  if (Number.isNaN(n) || n < range.min || n > range.max) return range;
  return null;
}

const TRAINING_PLACES = [
  { value: "gym", label: "Gimnasio" },
  { value: "home", label: "Casa" },
];

const TRAINING_DAYS = [
  { value: "monday", label: "Lunes" },
  { value: "tuesday", label: "Martes" },
  { value: "wednesday", label: "Miércoles" },
  { value: "thursday", label: "Jueves" },
  { value: "friday", label: "Viernes" },
  { value: "saturday", label: "Sábado" },
  { value: "sunday", label: "Domingo" },
];

function OnboardingStepShell({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "8px 16px 0" }}>
      <img src={window.__resources?.ffMark || "assets/logos/ff_mark.svg"} style={{ width: 56, height: 56, marginBottom: 8 }} alt="" />
      {children}
    </div>
  );
}

// ── O2 · Onboarding aprobado con la paleta clara ─────────────────
// Misma estructura, mismos pasos y mismos controles que el onboarding aprobado: lo único
// que cambia es la paleta (tarjetas blancas sobre fondo claro, rojo como único acento) y
// el respiro del paso de datos personales, donde género y sistema de unidades venían
// pegados uno debajo del otro.
const O2_SHEET = { ...APP_LIGHT_BG, ...APP_LIGHT };

const O2_LEVELS = [
  { value: "beginner", description: "Estoy comenzando." },
  { value: "intermediate", description: "Llevo menos de 2 años entrenando de forma regular." },
  { value: "advanced", description: "Llevo más de 2 años entrenando de forma regular." },
];
const O2_MUSCLES = ["Cuerpo entero", "Glúteos", "Piernas", "Espalda", "Pecho", "Brazos", "Hombros", "Abdomen"];
const O2_GOALS = ["Bajar de peso / Perder grasa", "Definir / Tonificar", "Ganar músculo", "Mejorar mi salud"];
const O2_UNITS = [{ value: "metric", label: "Métrico (kg, cm)" }, { value: "imperial", label: "Inglés (lb, in)" }];
const O2_PLACES = ["Gimnasio", "Casa"];
const O2_WEEK = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

function O2LevelCard({ description, selected, onClick }) {
  return (
    <button onClick={onClick} style={{ width: "100%", textAlign: "left", padding: "16px 18px", borderRadius: 14, cursor: "pointer", background: "var(--ff-surface)",
      border: selected ? "1.5px solid var(--ff-red)" : "1px solid var(--ff-border)", fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.45,
      color: selected ? "var(--ff-red-light)" : "var(--ff-text)" }}>{description}</button>
  );
}

// El onboarding usa el mismo campo del login y el registro.
function O2Field(props) {
  return <WhiteField {...props} />;
}

// Una sola manera de mostrar la selección en todo el onboarding: borde y letra en rojo.
function O2Choice({ children, selected, onClick, height = 52 }) {
  return (
    <button onClick={onClick} style={{ width: "100%", minHeight: height, padding: "12px 16px", borderRadius: 14, cursor: "pointer", background: "#FFFFFF",
      border: selected ? "1.5px solid var(--ff-red)" : "1px solid var(--ff-border)", fontFamily: "var(--font-body)", fontSize: 14, fontWeight: selected ? 600 : 500, lineHeight: 1.4,
      color: selected ? "var(--ff-red-light)" : "var(--ff-text)" }}>{children}</button>
  );
}

// Filtro de planes con la misma convención de selección que el onboarding.
function PlanFilterChip({ children, selected, onClick }) {
  return (
    <button onClick={onClick} style={{ height: 38, padding: "0 16px", borderRadius: 14, cursor: "pointer", background: "#FFFFFF",
      border: selected ? "1.5px solid var(--ff-red)" : "1px solid var(--ff-border)", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: selected ? 600 : 500,
      color: selected ? "var(--ff-red-light)" : "var(--ff-text)" }}>{children}</button>
  );
}

function O2Shell({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "8px 16px 0" }}>
      <img src={window.__resources?.ffMark || "assets/logos/ff_mark.svg"} style={{ width: 56, height: 56, marginBottom: 8 }} alt="" />
      {children}
    </div>
  );
}

function O2Onboarding({ step = 0, level = "advanced", seedPlace = "Gimnasio", seedHeight = "178", seedWeight = "82", onBack, onComplete }) {
  const [sIdx, setSIdx] = React.useState(step);
  const [gender, setGender] = React.useState("M");
  const [birth, setBirth] = React.useState("1994-06-12");
  const [unit, setUnit] = React.useState("metric");
  const [height, setHeight] = React.useState(seedHeight);
  const [weight, setWeight] = React.useState(seedWeight);
  const [exp, setExp] = React.useState(level);
  const [muscles, setMuscles] = React.useState(["Glúteos", "Espalda"]);
  const [goal, setGoal] = React.useState("Definir / Tonificar");
  const [place, setPlace] = React.useState(seedPlace);
  const [days, setDays] = React.useState(["Lunes", "Martes", "Jueves", "Viernes"]);

  const order = exp === "advanced"
    ? ["personal", "measures", "experience", "muscle", "objective", "place", "days"]
    : ["personal", "measures", "experience", "objective", "place", "days"];
  const key = order[Math.min(sIdx, order.length - 1)];
  const isLast = key === "days";
  const toggle = (list, set, v) => set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);
  const ranges = MEASUREMENT_RANGES[unit];
  const badHeight = outOfRange(height, ranges.height);
  const badWeight = outOfRange(weight, ranges.weight);
  const valid = key === "days" ? days.length >= 3 && days.length <= 6
    : key === "muscle" ? muscles.length > 0
    : key === "personal" ? !!gender && birth.length > 0
    : key === "measures" ? height.length > 0 && weight.length > 0 && !badHeight && !badWeight
    : true;

  const eyebrow = { fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ff-text-3)", margin: "0 0 10px" };
  const h1 = { fontFamily: "var(--font-display)", fontSize: 19, color: "var(--ff-text)", margin: "8px 0 4px" };
  const sub = { fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ff-text-2)", margin: "0 0 20px", textAlign: "center" };

  let content = null;
  if (key === "personal") {
    content = (
      <O2Shell>
        <h1 style={{ ...h1, margin: "8px 0 26px" }}>Datos personales</h1>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 26 }}>
          <O2Field label="Fecha de nacimiento" type="date" value={birth} onChange={setBirth} supportingText="Edad mínima: 14 años." />
          <div>
            <p style={eyebrow}>Género</p>
            <div style={{ display: "flex", gap: 10 }}>
              <O2Choice selected={gender === "M"} onClick={() => setGender("M")}>Hombre</O2Choice>
              <O2Choice selected={gender === "F"} onClick={() => setGender("F")}>Mujer</O2Choice>
            </div>
          </div>
        </div>
      </O2Shell>
    );
  } else if (key === "measures") {
    content = (
      <O2Shell>
        <h1 style={{ ...h1, margin: "8px 0 26px" }}>Medidas</h1>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 26 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <O2Field label={unit === "metric" ? "Altura (cm)" : "Altura (in)"} type="number" value={height} onChange={setHeight}
              error={!!badHeight} supportingText={badHeight ? `Ingresa una estatura entre ${badHeight.min} y ${badHeight.max} ${badHeight.unit}.` : ""} />
            <O2Field label={unit === "metric" ? "Peso (kg)" : "Peso (lb)"} type="number" value={weight} onChange={setWeight}
              error={!!badWeight} supportingText={badWeight ? `Ingresa un peso entre ${badWeight.min} y ${badWeight.max} ${badWeight.unit}.` : ""} />
          </div>
          <div>
            <p style={eyebrow}>Sistema de unidades</p>
            <div style={{ display: "flex", gap: 10 }}>
              {O2_UNITS.map((u) => (
                <O2Choice key={u.value} selected={unit === u.value} onClick={() => setUnit(u.value)}>{u.label}</O2Choice>
              ))}
            </div>
          </div>
        </div>
      </O2Shell>
    );
  } else if (key === "experience") {
    content = (
      <O2Shell>
        <h1 style={h1}>Nivel de experiencia</h1>
        <p style={sub}>¿Actualmente estás entrenando de forma regular?</p>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
          {O2_LEVELS.map((l) => <O2LevelCard key={l.value} description={l.description} selected={exp === l.value} onClick={() => setExp(l.value)} />)}
        </div>
      </O2Shell>
    );
  } else if (key === "muscle") {
    content = (
      <O2Shell>
        <h1 style={{ ...h1, margin: "8px 0 12px" }}>Grupos musculares</h1>
        <p style={{ ...sub, fontSize: 13, lineHeight: 1.5 }}>Se recomienda elegir un grupo muscular de la parte inferior y uno de la parte superior del cuerpo</p>
        <div style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {O2_MUSCLES.map((m) => <O2Choice key={m} selected={muscles.includes(m)} onClick={() => toggle(muscles, setMuscles, m)}>{m}</O2Choice>)}
        </div>
      </O2Shell>
    );
  } else if (key === "objective") {
    content = (
      <O2Shell>
        <h1 style={h1}>Objetivo</h1>
        <p style={sub}>¿Cuál es tu objetivo principal?</p>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
          {O2_GOALS.map((g) => <O2Choice key={g} selected={goal === g} onClick={() => setGoal(g)}>{g}</O2Choice>)}
        </div>
      </O2Shell>
    );
  } else if (key === "place") {
    content = (
      <O2Shell>
        <h1 style={h1}>Lugar de entrenamiento</h1>
        <p style={sub}>¿En qué lugar entrenarás principalmente?</p>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
          {O2_PLACES.map((p) => <O2Choice key={p} selected={place === p} onClick={() => setPlace(p)}>{p}</O2Choice>)}
        </div>
        {place === "Casa" && (
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ff-text-3)", margin: "16px 0 0", textAlign: "center", lineHeight: 1.4 }}>Para entrenar en casa necesitas por lo menos un par de mancuernas</p>
        )}
      </O2Shell>
    );
  } else {
    content = (
      <O2Shell>
        <h1 style={h1}>Días de entrenamiento</h1>
        <p style={{ ...sub, margin: "0 0 4px" }}>Selecciona los días que vas a entrenar</p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-3)", margin: "0 0 20px", textAlign: "center" }}>(Mínimo 3 días. Máximo 6 días)</p>
        <div style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {O2_WEEK.map((d) => <O2Choice key={d} selected={days.includes(d)} onClick={() => toggle(days, setDays, d)}>{d}</O2Choice>)}
        </div>
      </O2Shell>
    );
  }

  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)", ...O2_SHEET }} data-screen-label={"Onboarding O2 · " + key}>
      <div style={{ display: "flex", alignItems: "center", height: 56, padding: "0 6px", flexShrink: 0 }}>
        <CircleIconBtn kind="back" onClick={() => (sIdx === 0 ? onBack && onBack() : setSIdx((n) => n - 1))} />
      </div>
      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "0 0 110px" }}>{content}</div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "12px 16px 28px", background: "linear-gradient(to top, var(--ff-bg) 75%, transparent)" }}>
        <Button variant="primary" fullWidth disabled={!valid} onClick={() => (isLast ? onComplete && onComplete() : setSIdx((n) => Math.min(order.length - 1, n + 1)))}>{isLast ? "Finalizar" : "Siguiente"}</Button>
      </div>
    </div>
  );
}

window.OnboardingScreen = O2Onboarding;
window.O2Onboarding = O2Onboarding;

// ── RecommendedProgram.jsx ───────────────────────────────────────
// FitFighters mobile — Post-onboarding recommended program (SelectedProgramScreen, ONBOARDING mode).

function RecommendedProgramScreen({ onContinue }) {
  const p = window.FF_DATA.recommendedProgram || { name: "Programa recomendado", description: "" };
  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)", ...APP_LIGHT_BG, ...APP_LIGHT }} data-screen-label="Programa recomendado">
      <div style={{ width: "100%", height: 200, flexShrink: 0, position: "relative", background: "linear-gradient(135deg, rgba(255,50,0,.12) 0%, rgba(255,154,60,.08) 60%, rgba(46,207,122,.07) 100%)" }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="rgba(20,20,20,0.3)" strokeWidth="1.6"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" fill="rgba(20,20,20,0.3)" stroke="none" /></svg>
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, var(--ff-bg) 100%)" }} />
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "20px 20px 110px" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ff-red-light)", margin: "0 0 8px" }}>Programa recomendado</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--ff-text)", margin: "0 0 14px", letterSpacing: "-.3px" }}>{p.name}</h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ff-text-2)", lineHeight: 1.65, margin: 0 }}>{p.description}</p>
      </div>

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "16px 20px 28px", background: "linear-gradient(to top, var(--ff-bg) 75%, transparent)" }}>
        <Button variant="primary" onClick={onContinue}>Continuar</Button>
      </div>
    </div>
  );
}

window.RecommendedProgramScreen = RecommendedProgramScreen;

// ── WorkoutList.jsx ─────────────────────────────────────────────
// FitFighters mobile — Workout (home) screen: program header + status-action banner + today's sections.
// The banner shown here is dictated by the backend's `statusAction` field (see STATUS_ACTIONS keys below).

const FF_ICONS = {
  bolt: (c) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>,
  info: (c) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>,
  users: (c) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  calendar: (c) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
  star: (c) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
  download: (c) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>,
  arrowRight: (c) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>,
  clock: (c) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
  list: (c) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>,
};

const FF_TONES = {
  danger: { bg: "var(--ff-action-danger-bg)", border: "var(--ff-action-danger-border)", iconBg: "rgba(255,50,0,0.15)", color: "var(--ff-red)" },
  info: { bg: "var(--ff-action-info-bg)", border: "var(--ff-action-info-border)", iconBg: "rgba(80,130,220,0.15)", color: "#5082DC" },
  success: { bg: "var(--ff-action-success-bg)", border: "var(--ff-action-success-border)", iconBg: "rgba(46,207,122,0.12)", color: "var(--ff-green)" },
  neutral: { bg: "var(--ff-surface)", border: "var(--ff-border)", iconBg: "rgba(200,160,32,0.12)", color: "#C8A020" },
  muted: { bg: "var(--ff-surface)", border: "var(--ff-border)", iconBg: "rgba(136,136,136,0.12)", color: "var(--ff-text-3)" },
};

// One entry per backend `statusAction`. 'none' and 'tutorial' are handled outside this map.
const STATUS_ACTIONS = {
  preload: {
    ...FF_TONES.success,
    title: "Tu próximo programa se está preparando",
    desc: "Al terminar esta semana, tu próxima generación estará lista para que sigas entrenando sin interrupciones.",
    cta: null,
    icon: FF_ICONS.download(FF_TONES.success.color),
  },
  has_credits: {
    ...FF_TONES.info,
    title: "Tienes beneficios disponibles",
    desc: "Tienes créditos en tu cuenta. Visita nuestro sitio web para utilizarlos.",
    cta: null,
    icon: FF_ICONS.info(FF_TONES.info.color),
  },
  load_program: {
    ...FF_TONES.danger,
    title: "Tu próximo programa está listo",
    desc: "Continúa para cargar tu nueva generación y no perder el ritmo.",
    cta: "Cargar programa",
    icon: FF_ICONS.arrowRight(FF_TONES.danger.color),
  },
  last_week: {
    ...FF_TONES.success,
    title: "¡Última semana de tu programa!",
    desc: "Has llegado a la semana final. ¡Sigue así para completarlo con éxito!",
    cta: null,
    icon: FF_ICONS.star(FF_TONES.success.color),
  },
  invitation: {
    ...FF_TONES.info,
    title: "Última semana en tu nivel gratuito",
    desc: "Termina esta semana entrenando en modalidad gratuita. Visita fitfighters.com para unirte a una nueva generación y seguir entrenando.",
    cta: "Visitar sitio web",
    icon: FF_ICONS.users(FF_TONES.info.color),
  },
  ready_available: {
    ...FF_TONES.danger,
    title: "Tu siguiente programa está listo",
    desc: "Ya puedes adelantar el inicio de tu próximo programa.",
    cta: "Comenzar ahora",
    icon: FF_ICONS.bolt(FF_TONES.danger.color),
  },
  ready_unavailable: {
    ...FF_TONES.muted,
    title: "Tu próximo programa ya está preparado",
    desc: "Podrás adelantarlo en 3 días, cuando comience tu nueva generación.",
    cta: null,
    icon: FF_ICONS.clock(FF_TONES.muted.color),
  },
  future_subscription: {
    ...FF_TONES.neutral,
    title: "Tu próxima generación inicia pronto",
    desc: "Estás suscrito y tu nueva generación comenzará el 1 de julio de 2026.",
    cta: null,
    icon: FF_ICONS.calendar(FF_TONES.neutral.color),
  },
  select_next_program: {
    ...FF_TONES.danger,
    title: "Elige tu próximo programa",
    desc: "Tu generación avanzó y no se seleccionó un programa automáticamente. Elige uno para continuar entrenando.",
    cta: "Elegir programa",
    icon: FF_ICONS.list(FF_TONES.danger.color),
  },
};

const MONTHS_ES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
function formatShortDate(iso, dayOffset) {
  const dt = new Date(iso + "T00:00:00");
  dt.setDate(dt.getDate() + dayOffset);
  return `${dt.getDate()} ${MONTHS_ES[dt.getMonth()]}`;
}

function DualProgressBar({ user, plan }) {
  return (
    <div style={{ position: "relative", height: 6, borderRadius: 3, background: "var(--ff-surface-2)", overflow: "hidden" }}>
      {/* Plan progress — behind, muted red */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: plan + "%", background: "rgba(255,50,0,0.28)", borderRadius: 3 }} />
      {/* User progress — front, brand red */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: user + "%", background: "var(--ff-red)", borderRadius: 3 }} />
    </div>
  );
}

// ── Routine detail block/exercise system — paridad con FFSectionCard.kt / ExerciseItem.kt ──

function fmtCountdown(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function RIRBadge({ rir }) {
  const failure = rir === 0;
  return (
    <span style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 600, color: failure ? "#fff" : "var(--ff-red-light)", background: failure ? "var(--ff-red)" : "var(--ff-primary-container)", borderRadius: 4, padding: "2px 6px", whiteSpace: "nowrap" }}>
      {failure ? "Al fallo" : `RIR ${rir}`}
    </span>
  );
}

function ExerciseDescriptionView({ desc }) {
  if (!desc) return null;
  const col = { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 3, flexShrink: 0 };
  const num = { fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 600, color: "var(--ff-text)", lineHeight: 1.1 };
  const unit = { fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ff-text-3)" };
  const isFailure = desc.kind === "failure" || (desc.kind === "repeats" && !desc.reps) || (desc.kind === "time" && !parseFloat(desc.time));
  if (isFailure) {
    return (
      <div style={col}>
        <span style={num}>máx</span>
        <span style={unit}>reps</span>
        <RIRBadge rir={0} />
      </div>
    );
  }
  if (desc.kind === "repeats") {
    return (
      <div style={col}>
        <span style={num}>{desc.reps}</span>
        <span style={unit}>{desc.reps === 1 ? "rep" : "reps"}</span>
        {desc.rir !== undefined && desc.rir !== null && <RIRBadge rir={desc.rir} />}
      </div>
    );
  }
  if (desc.kind === "time") {
    return (
      <div style={col}>
        <span style={num}>{desc.time}</span>
        <span style={unit}>{desc.unit}</span>
      </div>
    );
  }
  if (desc.kind === "stripset") {
    return (
      <div style={col}>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "var(--ff-text-2)", textAlign: "right" }}>{desc.reps.join(" · ")}</span>
        <span style={unit}>reps</span>
        {desc.rir !== undefined && desc.rir !== null && <RIRBadge rir={desc.rir} />}
      </div>
    );
  }
  if (desc.kind === "emom") {
    return (
      <div style={col}>
        <span style={num}>{desc.initial}</span>
        <span style={unit}>rep inicial</span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ff-red-light)" }}>+{desc.increment} / min</span>
      </div>
    );
  }
  return null;
}

function RoutineExerciseRow({ ex, isLast, onTap }) {
  return (
    <div>
      <div onClick={onTap} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 16px", cursor: onTap ? "pointer" : "default" }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--ff-surface-2)", flexShrink: 0, overflow: "hidden" }}>
          {ex.img ? <img src={ex.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : null}
        </div>
        <span style={{ flex: 1, minWidth: 0, fontFamily: "var(--font-display)", fontSize: 14, color: "var(--ff-text)", lineHeight: 1.3 }}>{ex.name}</span>
        <ExerciseDescriptionView desc={ex.desc} />
      </div>
      {ex.rest && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 16px", background: "var(--ff-surface-2)", borderTop: "1px solid var(--ff-border)", borderBottom: "1px solid var(--ff-border)" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--ff-text-3)" }}>Descanso</span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "var(--ff-text-2)" }}>{ex.rest}</span>
        </div>
      )}
      {!isLast && !ex.rest && <div style={{ borderTop: "1px solid var(--ff-border)" }} />}
    </div>
  );
}

function BlockCountdownStrip({ label, value, color }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", background: `linear-gradient(to right, color-mix(in srgb, ${color} 8%, transparent), transparent)`, borderBottom: "1px solid var(--ff-border)" }}>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ff-text-2)" }}>{label}</span>
      <span style={{ fontFamily: "var(--font-display)", fontSize: 14, color }}>{value}</span>
    </div>
  );
}

function BlockInfoStrip({ block, color }) {
  const rows = [];
  if (block.type === "fortime" && block.hint) {
    rows.push(<div key="hint" style={{ padding: "10px 16px", background: "var(--ff-surface-2)", borderBottom: "1px solid var(--ff-border)" }}><span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ff-text-2)" }}>{block.hint}</span></div>);
  }
  if (block.type === "amrap" && block.totalTimeSeconds) {
    rows.push(<BlockCountdownStrip key="amrap" label="Tiempo total" value={fmtCountdown(block.totalTimeSeconds)} color={color} />);
  }
  if (block.type === "cardio" && block.totalTimeSeconds) {
    rows.push(<BlockCountdownStrip key="cardio" label="Duración total" value={fmtCountdown(block.totalTimeSeconds)} color={color} />);
  }
  if (block.type === "emom") {
    const value = block.repsIncrement ? `↑ +${block.repsIncrement} reps / min` : "hasta el fallo";
    rows.push(<BlockCountdownStrip key="emom" label="En el minuto" value={value} color="var(--ff-green)" />);
  }
  if ((block.type === "cycle" || block.type === "stripset") && block.restBetweenSeriesSeconds) {
    rows.push(
      <div key="seriesrest" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", background: "var(--ff-surface-2)", borderBottom: "1px solid var(--ff-border)" }}>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ff-text-2)" }}>Descanso entre series</span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "var(--ff-text)" }}>{block.restBetweenSeriesSeconds} seg.</span>
      </div>
    );
  }
  return rows.length ? <>{rows}</> : null;
}

function RoutineSectionCard({ block, defaultOpen, onExerciseTap }) {
  const [open, setOpen] = React.useState(!!defaultOpen);
  const color = (SECTION_TYPES[block.type] || SECTION_TYPES.cycle).color;
  const meta = block.type === "fortime" ? (block.rounds ? `${block.rounds} rondas` : null) : (block.series ? `${block.series} series` : null);
  return (
    <div style={{ background: "var(--ff-surface)", border: "1px solid var(--ff-border)", borderRadius: 16, overflow: "hidden" }}>
      <div onClick={() => setOpen(o => !o)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", cursor: "pointer" }}>
        <SectionBadge type={block.type} label={block.name} />
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {meta && <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ff-text-2)" }}>{meta}</span>}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ff-text-2)" strokeWidth="2" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .25s" }}><polyline points="6 9 12 15 18 9" /></svg>
        </div>
      </div>
      <div style={{ borderTop: "1px solid var(--ff-border)" }} />
      {!open && (
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ff-text-2)", margin: 0, padding: "10px 16px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {block.exercises.map(e => e.name.split(" ").slice(0, 3).join(" ")).join(" · ")}
        </p>
      )}
      {open && (
        <div>
          <BlockInfoStrip block={block} color={color} />
          {block.exercises.map((ex, i) => <RoutineExerciseRow key={i} ex={ex} isLast={i === block.exercises.length - 1} onTap={onExerciseTap ? () => onExerciseTap(ex) : undefined} />)}
        </div>
      )}
    </div>
  );
}

function RoutineRestStrip({ block }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, border: "1px solid var(--ff-border)", borderRadius: 16, padding: "13px 16px" }}>
      <div style={{ width: 34, height: 34, borderRadius: 10, background: "var(--ff-surface-2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--ff-text-2)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 7 12 12 15 14" /></svg>
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--ff-text)", margin: 0 }}>Descanso entre bloques</p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-3)", margin: "2px 0 0" }}>Recupérate antes del siguiente bloque</p>
      </div>
      <span style={{ fontFamily: "var(--font-display)", fontSize: 15, color: "var(--ff-text-2)" }}>{fmtCountdown(block.timeSeconds)}</span>
    </div>
  );
}

// Confirmar reinicio del plan gratuito de 4 semanas (recarga desde la semana 1).
function ResetPlanDialog({ onDismiss, onConfirm }) {
  return (
    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.6)", display: "flex", alignItems: "flex-end", zIndex: 20 }} onClick={onDismiss}>
      <div onClick={e => e.stopPropagation()} style={{ width: "100%", background: "var(--ff-surface)", borderTop: "1px solid var(--ff-border)", borderRadius: "20px 20px 0 0", padding: "22px 16px 28px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ width: 36, height: 4, borderRadius: 2, background: "var(--ff-border)", margin: "0 auto 4px" }} />
        <div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 17, color: "var(--ff-text)", margin: "0 0 6px" }}>¿Reiniciar tu plan gratuito?</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ff-text-2)", lineHeight: 1.5, margin: 0 }}>Tu progreso actual se perderá y volverás a la semana 1 de tus 4 semanas gratuitas.</p>
        </div>
        <button onClick={onConfirm} style={{ width: "100%", padding: "14px 16px", borderRadius: 12, border: "none", background: "var(--ff-red)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 14, cursor: "pointer" }}>Reiniciar desde la semana 1</button>
        <button onClick={onDismiss} style={{ width: "100%", padding: "14px 16px", borderRadius: 12, border: "1px solid var(--ff-border)", background: "transparent", color: "var(--ff-text-2)", fontFamily: "var(--font-display)", fontSize: 14, cursor: "pointer" }}>Cancelar</button>
      </div>
    </div>
  );
}

function ActionCard({ card, onDismiss }) {
  return (
    <div style={{ borderRadius: 14, padding: "14px 16px", background: card.bg, border: `0.5px solid ${card.border}`, display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: card.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          {card.icon}
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500, color: "var(--ff-text)", margin: "0 0 3px", lineHeight: 1.3 }}>{card.title}</p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-2)", margin: 0, lineHeight: 1.45 }}>{card.desc}</p>
        </div>
        <button onClick={onDismiss} style={{ background: "none", border: "none", cursor: "pointer", padding: 2, color: "var(--ff-text-3)", flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
      </div>
      {card.cta && (
        <button style={{ width: "100%", padding: "10px 16px", background: "var(--ff-red)", borderRadius: 10, border: "none", fontFamily: "var(--font-display)", fontSize: 13, color: "#fff", cursor: "pointer" }}>{card.cta}</button>
      )}
    </div>
  );
}

function TutorialScreen({ tab, onTab }) {
  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)" }} data-screen-label="Workout — Tutorial">
      <AppBar variant="logo" />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 28px 96px", textAlign: "center", gap: 18 }}>
        <div style={{ width: 64, height: 64, borderRadius: 16, background: "var(--ff-primary-container)", border: "1px solid rgba(255,50,0,.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src="assets/ff_mark.svg" alt="FitFighters" style={{ width: 30, height: 34 }} />
        </div>
        <div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--ff-text)", lineHeight: 1.3, letterSpacing: "-.3px", margin: "0 0 10px" }}>Bienvenido a FitFighters</h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ff-text-2)", lineHeight: 1.5, margin: "0 auto", maxWidth: 280 }}>Aún no tienes un programa de entrenamiento activo. Te invitamos a contestar algunas preguntas para sugerirte el mejor plan de entrenamiento para ti.</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <div style={{ padding: "12px 16px", background: "linear-gradient(to top, var(--ff-bg) 70%, transparent)" }}>
          <Button variant="primary">Comenzar tutorial</Button>
        </div>
        <BottomNav active={tab} onChange={onTab} />
      </div>
    </div>
  );
}

// FitFighters mobile — Work-in-progress placeholder for sections not built yet.
function WipScreen({ title = "Próximamente", onBack }) {
  const [scrolled] = useBarScroll();
  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)", ...APP_LIGHT_BG, ...APP_LIGHT }} data-screen-label="En construcción">
      <FloatingTopBar title={title} onBack={onBack} scrolled={scrolled} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 32px 80px", textAlign: "center", gap: 20 }}>
        <div style={{ width: 72, height: 72, borderRadius: 18, background: "var(--ff-primary-container)", border: "1px solid rgba(255,50,0,.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--ff-red)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
        <div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--ff-text)", lineHeight: 1.35, letterSpacing: "-.3px", margin: "0 0 12px" }}>Estamos trabajando en esta sección</h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ff-text-2)", lineHeight: 1.6, margin: "0 auto", maxWidth: 290 }}>
            Queremos que tengas la mejor experiencia dentro de FitFighters, así que le estamos dedicando el tiempo que se merece. Gracias por tu paciencia y por seguir formando parte de esta gran comunidad.
          </p>
        </div>
        <Badge variant="neutral">En construcción</Badge>
      </div>
    </div>
  );
}
window.WipScreen = WipScreen;

// Row for one day of the week's routine
function WeekDayRow({ item, isLast, onClick, rowRef }) {
  const { day, routine, type, status, date } = item;
  const isRest = type === "rest";
  const isToday = status === "today";
  const isDone = status === "done";
  const tappable = !isRest;

  let indicator;
  if (isRest) {
    indicator = (
      <div style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--ff-surface-2)", border: "1px solid var(--ff-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--ff-text-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
      </div>
    );
  } else if (isDone) {
    indicator = (
      <div style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(46,207,122,0.14)", border: "1px solid rgba(46,207,122,0.35)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--ff-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
      </div>
    );
  } else if (isToday) {
    indicator = (
      <div style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--ff-red)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff"><polygon points="5 3 19 12 5 21 5 3" /></svg>
      </div>
    );
  } else {
    indicator = (
      <div style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--ff-surface-2)", border: "1px solid var(--ff-border)", flexShrink: 0 }} />
    );
  }

  return (
    <div
      ref={rowRef}
      onClick={tappable ? onClick : undefined}
      style={{
        display: "flex", alignItems: "center", gap: 13, padding: "14px 16px",
        borderTop: isLast ? "none" : "1px solid var(--ff-border)",
        cursor: tappable ? "pointer" : "default",
        background: isToday ? "var(--ff-primary-container)" : "transparent",
        borderLeft: isToday ? "3px solid var(--ff-red)" : "3px solid transparent",
      }}
    >
      {indicator}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: isToday ? "var(--ff-red-light)" : "var(--ff-text-3)" }}>{day} · {date}</span>
          {isToday && (
            <span style={{ fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700, letterSpacing: ".08em", color: "#fff", background: "var(--ff-red)", padding: "1px 6px", borderRadius: 999 }}>HOY</span>
          )}
        </div>
        <p style={{ fontFamily: "var(--font-display)", fontSize: 14, lineHeight: 1.25, letterSpacing: "-.2px", margin: "3px 0 0", color: isRest ? "var(--ff-text-3)" : (isDone ? "var(--ff-text-2)" : "var(--ff-text)") }}>{routine}</p>
      </div>
      {tappable && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ff-text-3)" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}><polyline points="9 18 15 12 9 6" /></svg>
      )}
    </div>
  );
}

function WorkoutScreen({ onSelectDay, tab, onTab, bannerVariant = null }) {
  const d = window.FF_DATA;
  const p = d.program;
  const totalWeeks = p.totalWeeks || 1;
  const [selectedWeek, setSelectedWeek] = React.useState(p.week);
  const [cardDismissed, setCardDismissed] = React.useState(false);
  const [todayVisible, setTodayVisible] = React.useState(true);
  const [resetDialogOpen, setResetDialogOpen] = React.useState(false);
  const [justReset, setJustReset] = React.useState(false);

  const card = (bannerVariant && bannerVariant !== "none" && bannerVariant !== "tutorial") ? STATUS_ACTIONS[bannerVariant] : null;

  // Días de la semana seleccionada: la semana actual trae su estado real desde el
  // backend (done/today/upcoming por día); las demás semanas se derivan — pasadas
  // quedan completadas, futuras quedan pendientes. Los descansos no cambian.
  const week = (d.weekTemplate || []).map((item, i) => {
    let status;
    if (selectedWeek === p.week) status = item.status;
    else if (selectedWeek < p.week) status = "done";
    else status = "upcoming";
    const weekOffset = selectedWeek - p.week;
    const date = formatShortDate(p.weekStartDate, weekOffset * 7 + i);
    return { ...item, status, week: selectedWeek, date };
  });

  const scrollRef = React.useRef(null);
  const todayRef = React.useRef(null);

  // Show "Ir a hoy" only when today's row is scrolled out of view.
  React.useEffect(() => {
    const root = scrollRef.current;
    const target = todayRef.current;
    if (!root || !target) return;
    const obs = new IntersectionObserver(
      ([entry]) => setTodayVisible(entry.isIntersecting),
      { root, threshold: 0.6 }
    );
    obs.observe(target);
    return () => obs.disconnect();
  }, []);

  React.useEffect(() => {
    const root = scrollRef.current;
    if (root) root.scrollTo({ top: 0 });
  }, [selectedWeek]);

  const scrollToToday = () => {
    const root = scrollRef.current;
    const target = todayRef.current;
    if (!root || !target) return;
    root.scrollTo({ top: target.offsetTop - 120, behavior: "smooth" });
  };

  if (bannerVariant === "tutorial") {
    return <TutorialScreen tab={tab} onTab={onTab} />;
  }

  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)" }} data-screen-label="Workout">
      <AppBar variant="logo" />
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "4px 16px 96px" }}>
        {justReset && (
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(46,207,122,0.1)", border: "0.5px solid rgba(46,207,122,.3)", borderRadius: 12, padding: "10px 14px", marginBottom: 14 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ff-green)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text)" }}>Tu plan se reinició. ¡Vamos con la semana 1!</span>
          </div>
        )}
        {/* Program header */}
        <div style={{ background: "var(--ff-surface)", border: "1px solid var(--ff-border)", borderRadius: 16, padding: 18, marginBottom: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ff-text-3)", textTransform: "uppercase", letterSpacing: ".1em", margin: "0 0 6px" }}>{p.generation}</p>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--ff-text)", lineHeight: 1.2, letterSpacing: "-.3px", margin: 0 }}>{p.name}</h1>
            </div>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "var(--ff-red-light)", background: "var(--ff-primary-container)", border: "1px solid rgba(255,50,0,.25)", padding: "4px 10px", borderRadius: 999, whiteSpace: "nowrap" }}>Nivel {p.level}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", margin: "16px 0 8px" }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-2)" }}>Semana {p.week}</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text)", fontWeight: 600 }}>{p.userProgress}%</span>
          </div>
          <DualProgressBar user={p.userProgress} plan={p.planProgress} />
          {/* Legend */}
          <div style={{ display: "flex", gap: 16, marginTop: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 8, height: 8, borderRadius: 2, background: "var(--ff-red)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ff-text-2)" }}>Tu avance {p.userProgress}%</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 8, height: 8, borderRadius: 2, background: "rgba(255,50,0,0.28)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ff-text-3)" }}>Plan {p.planProgress}%</span>
            </div>
          </div>
          {p.isFreePlan && (
            <button onClick={() => setResetDialogOpen(true)} style={{ display: "flex", alignItems: "center", gap: 6, width: "100%", justifyContent: "center", marginTop: 14, padding: "10px 12px", borderRadius: 10, border: "1px solid var(--ff-border)", background: "var(--ff-surface-2)", color: "var(--ff-text-2)", fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 500, cursor: "pointer" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg>
              Reiniciar plan gratuito (semana 1)
            </button>
          )}
        </div>

        {/* Week selector — plan puede tener 4 a 8 semanas; el usuario navega cualquiera */}
        <div style={{ display: "flex", gap: 6, marginBottom: 16, overflowX: "auto", paddingBottom: 2 }}>
          {Array.from({ length: totalWeeks }, (_, i) => i + 1).map((w) => (
            <button key={w} onClick={() => setSelectedWeek(w)} style={{ padding: "5px 14px", borderRadius: 999, border: "1px solid", flexShrink: 0, borderColor: selectedWeek === w ? "var(--ff-red)" : "var(--ff-border)", background: selectedWeek === w ? "var(--ff-primary-container)" : "transparent", color: selectedWeek === w ? "var(--ff-red-light)" : "var(--ff-text-3)", fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
              Semana {w}{w === p.week ? " · actual" : ""}
            </button>
          ))}
        </div>

        {/* Action card — banner determinado por el backend (suscripción/generación); no siempre está */}
        {!cardDismissed && card && <div style={{ marginBottom: 16 }}><ActionCard card={card} onDismiss={() => setCardDismissed(true)} /></div>}

        {/* Weekly routine list */}
        <p style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--ff-text)", margin: "0 2px 4px" }}>{selectedWeek === p.week ? "Tu semana" : `Semana ${selectedWeek}`}</p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ff-text-2)", margin: "0 2px 14px" }}>Toca un día para ver su rutina</p>

        <div style={{ background: "var(--ff-surface)", border: "1px solid var(--ff-border)", borderRadius: 16, overflow: "hidden" }}>
          {week.map((item, i) => (
            <WeekDayRow
              key={item.day}
              item={item}
              isLast={i === 0}
              rowRef={item.status === "today" ? todayRef : undefined}
              onClick={() => onSelectDay && onSelectDay(item)}
            />
          ))}
        </div>
      </div>

      {/* Floating "Ir a hoy" — only when today's row is off-screen */}
      {selectedWeek === p.week && !todayVisible && (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 74, display: "flex", justifyContent: "center", pointerEvents: "none" }}>
          <button
            onClick={scrollToToday}
            style={{ pointerEvents: "auto", display: "flex", alignItems: "center", gap: 8, padding: "10px 18px", borderRadius: 999, background: "var(--ff-red)", border: "none", color: "#fff", fontFamily: "var(--font-display)", fontSize: 13, cursor: "pointer", boxShadow: "0 8px 24px rgba(0,0,0,.5)" }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>
            Ir a hoy
          </button>
        </div>
      )}

      {resetDialogOpen && (
        <ResetPlanDialog
          onDismiss={() => setResetDialogOpen(false)}
          onConfirm={() => { setResetDialogOpen(false); setSelectedWeek(1); setJustReset(true); }}
        />
      )}

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <BottomNav active={tab} onChange={onTab} />
      </div>
    </div>
  );
}

window.WorkoutScreen = WorkoutScreen;

// ── WorkoutList.jsx (v2) ────────────────────────────────────────
// Workout aprobado (W5, 19 ago 2026): header del programa sin calendario, fila de
// "Rutinas anteriores", card grande de hoy y lista de las próximas rutinas.
// Incluye la vista aparte de rutinas anteriores (filtro completadas/pendientes),
// el empty state sin plan y las dos hojas de tutorial.

const WORKOUT_HERO = "https://d3gfgejixr95u4.cloudfront.net/app/production/routines/1691718103462.jpg";

// Glifos reales de la app enmascarados a color (mismo patrón que BottomNav / TextField).
function MaskIcon({ name, resKey, size = 20, color = "#fff", src }) {
  const url = src || window.__resources?.[resKey] || `assets/icons/${name}.svg`;
  return <span style={{ width: size, height: size, display: "block", background: color, WebkitMaskImage: `url(${url})`, maskImage: `url(${url})`, WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskPosition: "center", maskPosition: "center" }} />;
}

// Encabezado del programa sin imagen: la foto se reserva para la rutina.
function ProgramHeaderFlat() {
  const p = window.FF_DATA.program;
  return (
    <div style={{ padding: "0 18px 16px" }}>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ff-text-3)", textTransform: "uppercase", letterSpacing: ".12em", margin: "0 0 6px" }}>{p.generation}</p>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 21, color: "var(--ff-text)", lineHeight: 1.2, letterSpacing: "-.4px", margin: 0 }}>{p.name}</h1>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "var(--ff-red-light)", background: "var(--ff-primary-container)", border: "1px solid rgba(255,50,0,.25)", padding: "4px 10px", borderRadius: 999, whiteSpace: "nowrap", flexShrink: 0 }}>Nivel {p.level}</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", margin: "16px 0 8px" }}>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-2)" }}>Semana {p.week} de {p.totalWeeks}</span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "var(--ff-text)" }}>{p.userProgress}% de tu plan</span>
      </div>
      <DualProgressBar user={p.userProgress} plan={p.planProgress} />
    </div>
  );
}

function InitialsAvatar({ name = "Emmanuel Navarro", size = 40 }) {
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  return (
    <button aria-label={"Perfil de " + name} style={{ width: size, height: size, borderRadius: 999, border: "1px solid var(--ff-border)", background: "var(--ff-surface-2)", color: "var(--ff-text)", fontFamily: "var(--font-display)", fontSize: 13, letterSpacing: "-.2px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{initials}</button>
  );
}

// Barra inferior blanca con el mismo difuminado que los footers de CTA:
// el contenido se desvanece bajo la barra en vez de cortarse con una línea.
function TwoTabBar({ active = "workout", onChange }) {
  const pill = "var(--ff-red)";
  const label = "var(--ff-red)";
  const tabs = [
    { id: "workout", label: "Workout", icon: "ic_workout", res: "icWorkout" },
    { id: "chat", label: "Chat", icon: "ic_chat", res: "icChat" },
  ];
  return (
    <nav style={{ display: "flex", flexShrink: 0, paddingTop: 28, paddingBottom: 8, marginTop: -28, position: "relative", zIndex: 2, background: "linear-gradient(to top, #FFFFFF 0%, #FFFFFF 62%, rgba(255,255,255,0) 100%)" }}>
      {tabs.map((t) => {
        const sel = active === t.id;
        return (
          <button key={t.id} onClick={() => onChange && onChange(t.id)} style={{ flex: 1, height: 64, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5, background: "none", border: "none", cursor: "pointer" }}>
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 28, padding: "0 20px", borderRadius: 999, background: sel ? pill : "transparent" }}>
              <MaskIcon name={t.icon + (sel ? "_filled" : "_outlined")} resKey={t.res + (sel ? "Filled" : "Outlined")} size={20} color={sel ? "#fff" : "var(--ff-text-3)"} />
            </span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: sel ? 700 : 500, color: sel ? label : "var(--ff-text-3)" }}>{t.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

function PendingRow({ onOpen, note }) {
  return (
    <button onClick={onOpen} style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "var(--ff-surface)", border: "1px solid var(--ff-border)", borderRadius: 12, cursor: "pointer", textAlign: "left" }}>
      <span style={{ width: 34, height: 34, borderRadius: 999, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--ff-primary-container)" }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--ff-red-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></svg>
      </span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, color: "var(--ff-text)" }}>Rutinas anteriores</span>
        <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-2)", marginTop: 2 }}>{note || "Completadas y pendientes de tu plan"}</span>
      </span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ff-text-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
    </button>
  );
}

function RoutineListItem({ item, mins, blocks, onOpen }) {
  const p = window.FF_DATA.program;
  return (
    <div onClick={onOpen} style={{ display: "flex", gap: 12, alignItems: "center", padding: 10, background: "var(--ff-surface)", border: "1px solid var(--ff-border)", borderRadius: 14, cursor: "pointer" }}>
      <img src={p.routineImg || WORKOUT_HERO} alt="" style={{ width: 66, height: 66, borderRadius: 10, objectFit: "cover", flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "var(--ff-text-3)", textTransform: "uppercase", letterSpacing: ".12em", margin: "0 0 4px" }}>{item.day} · {item.date}</p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 14.5, fontWeight: 600, color: "var(--ff-text)", margin: "0 0 4px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.routine}</p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-2)", margin: 0 }}>{mins} min · {blocks} bloques</p>
      </div>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ff-text-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginRight: 4 }}><polyline points="9 18 15 12 9 6" /></svg>
    </div>
  );
}

// Vista aparte "Rutinas anteriores": un filtro entre pendientes y completadas.
// El progreso de una rutina no se guarda: solo se marca hecha o pendiente.
function PastRoutinesScreen({ onBack, onSelectDay, demoMenu, demoSnack, initialFilter, demoUndone, todayDone }) {
  const p = window.FF_DATA.program;
  const blockCount = (window.FF_DATA.routineDetailBlocks || []).filter(b => b.type !== "rest").length;
  const mins = estimateRoutineMinutes(window.FF_DATA.routineDetailBlocks || []);
  const template = (window.FF_DATA.weekTemplate || []).filter(x => x.type !== "rest");
  const [filter, setFilter] = React.useState(initialFilter || "done");
  // Desmarcar: una rutina completada vuelve a pendiente en un toque, con opción de
  // deshacer desde el snackbar. No hay diálogo de confirmación. Si la desmarcada es
  // la de hoy, vuelve a ser el hero de Workout.
  const [undone, setUndone] = React.useState(demoUndone ? { "auto": true } : {});
  const [menuItem, setMenuItem] = React.useState(demoMenu ? "auto" : null);
  const [snack, setSnack] = React.useState(demoSnack ? { routine: "Fuerza de tren superior" } : null);
  const keyOf = (x) => x.week + "-" + x.date;
  // Cada rutina anterior guarda la semana del plan a la que pertenece.
  const past = (offsets) => offsets.map((off, i) => {
    const item = template[i % template.length];
    return { ...item, date: formatShortDate(p.weekStartDate, off), week: p.week + Math.floor(off / 7) };
  });
  const pending = past([-9, -6, -2]);
  const week0 = window.FF_DATA.weekTemplate || [];
  const todayIdx = Math.max(0, week0.findIndex(x => x.status === "today"));
  const todayItem = { ...(week0[todayIdx] || template[0]), date: formatShortDate(p.weekStartDate, todayIdx), week: p.week, isToday: true };
  const done = (todayDone ? [todayItem] : []).concat(past([-14, -12, -9, -5, -3]));
  const isUndone = (x) => undone[keyOf(x)] || (undone.auto && x === done[0]);
  const doneList = done.filter(x => !isUndone(x));
  const pendingList = pending.concat(done.filter(isUndone));
  const list = filter === "pending" ? pendingList : doneList;
  const menuTarget = menuItem === "auto" ? doneList[0] : menuItem;
  const unmark = (item) => {
    setUndone(prev => ({ ...prev, [keyOf(item)]: true }));
    setMenuItem(null);
    setSnack({ routine: item.routine, key: keyOf(item), isToday: !!item.isToday });
  };
  const undoUnmark = () => {
    setSnack(null);
    if (snack && snack.key) setUndone(prev => { const next = { ...prev }; delete next[snack.key]; return next; });
  };
  // Agrupadas por semana, de la más reciente a la más antigua.
  const groups = [];
  list.slice().sort((a, b) => b.week - a.week).forEach((item) => {
    const g = groups.find(x => x.week === item.week);
    if (g) g.items.push(item); else groups.push({ week: item.week, items: [item] });
  });
  const chip = (id, label) => (
    <button key={id} onClick={() => setFilter(id)} style={{ flex: 1, height: 36, borderRadius: 999, cursor: "pointer", border: "1px solid", borderColor: filter === id ? "rgba(255,50,0,.25)" : "var(--ff-border)", background: filter === id ? "var(--ff-primary-container)" : "var(--ff-surface)", color: filter === id ? "var(--ff-red-light)" : "var(--ff-text-2)", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600 }}>{label}</button>
  );
  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)", ...APP_LIGHT_BG, ...APP_LIGHT }} data-screen-label="Rutinas anteriores">
      <header style={{ display: "flex", alignItems: "center", gap: 4, height: 56, padding: "0 6px", flexShrink: 0 }}>
        <CircleIconBtn kind="back" onClick={onBack} />
      </header>
      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "4px 16px 24px" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 21, color: "var(--ff-text)", letterSpacing: "-.4px", margin: "0 0 16px" }}>Rutinas anteriores</h1>
        <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
          {chip("done", "Completadas")}
          {chip("pending", "Pendientes")}
        </div>
        {filter === "pending" ? (
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start", background: "rgba(46,207,122,0.10)", border: "1px solid rgba(46,207,122,0.30)", borderRadius: 12, padding: "14px 16px", marginBottom: 18 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ff-green)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ff-text)", lineHeight: 1.6, margin: 0 }}>No importa si te saltaste algunos días. Lo que construye resultados es la constancia, no la perfección: haz la que sigue y continúa tu plan.</p>
          </div>
        ) : (
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ff-text-2)", lineHeight: 1.6, margin: "0 0 18px", maxWidth: 320 }}>Todo esto ya lo hiciste. Cada rutina completada es constancia acumulada.</p>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {groups.map((g) => (
          <div key={g.week} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "var(--ff-text-3)", textTransform: "uppercase", letterSpacing: ".12em", margin: "0 2px" }}>Semana {g.week}</p>
            {g.items.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", padding: 10, background: "var(--ff-surface)", border: "1px solid var(--ff-border)", borderRadius: 14 }}>
              <img src={p.routineImg || WORKOUT_HERO} alt="" style={{ width: 66, height: 66, borderRadius: 10, objectFit: "cover", flexShrink: 0, filter: filter === "done" ? "saturate(0.85)" : "saturate(0.6)" }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: item.isToday ? "var(--ff-red-light)" : "var(--ff-text-3)", textTransform: "uppercase", letterSpacing: ".12em", margin: "0 0 4px" }}>{item.isToday ? "Hoy" : item.day} · {item.date}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 14.5, fontWeight: 600, color: "var(--ff-text)", margin: "0 0 4px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.routine}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-2)", margin: 0 }}>{mins} min · {blockCount} bloques</p>
              </div>
              {filter === "pending" ? (
                <button onClick={() => onSelectDay && onSelectDay(item)} style={{ flexShrink: 0, height: 36, padding: "0 14px", borderRadius: 999, border: "1px solid var(--ff-border)", background: "var(--ff-surface-2)", color: "var(--ff-text)", fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: 600, cursor: "pointer" }}>Hacer rutina</button>
              ) : (
                <div style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 2 }}>
                  <span style={{ width: 28, height: 28, borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(46,207,122,0.12)" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--ff-green)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <button type="button" aria-label="Más opciones" onClick={() => setMenuItem(item)} style={{ width: 32, height: 44, display: "flex", alignItems: "center", justifyContent: "center", background: "none", border: "none", cursor: "pointer" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--ff-text-3)"><circle cx="12" cy="5" r="1.7" /><circle cx="12" cy="12" r="1.7" /><circle cx="12" cy="19" r="1.7" /></svg>
                  </button>
                </div>
              )}
            </div>
            ))}
          </div>
          ))}
        </div>
      </div>
      {menuTarget && (
        <div style={{ position: "absolute", inset: 0, zIndex: 30, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <div onClick={() => setMenuItem(null)} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
          <div style={{ position: "relative", background: "var(--ff-surface)", borderRadius: "32px 32px 0 0", padding: "10px 0 22px" }}>
            <div style={{ width: 38, height: 4, borderRadius: 999, background: "var(--ff-border)", margin: "0 auto 14px" }} />
            <p style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--ff-text)", letterSpacing: "-.3px", margin: "0 20px 2px" }}>{menuTarget.routine}</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--ff-text-2)", margin: "0 20px 12px" }}>{menuTarget.day} · {menuTarget.date} · Semana {menuTarget.week}</p>
            <button type="button" onClick={() => unmark(menuTarget)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "15px 20px", background: "none", border: "none", borderTop: "1px solid var(--ff-border)", cursor: "pointer", textAlign: "left" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ff-text)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><polyline points="3 3 3 8 8 8" /></svg>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 14.5, fontWeight: 600, color: "var(--ff-text)" }}>Marcar como pendiente</span>
                <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-2)", marginTop: 2 }}>{menuTarget.isToday ? "Vuelve a ser tu rutina de hoy" : "Vuelve a tu lista de pendientes"}</span>
              </span>
            </button>
            <button type="button" onClick={() => { setMenuItem(null); onSelectDay && onSelectDay(menuTarget); }} style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "15px 20px", background: "none", border: "none", borderTop: "1px solid var(--ff-border)", cursor: "pointer", textAlign: "left" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ff-text)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polygon points="6 4 20 12 6 20 6 4" /></svg>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 14.5, fontWeight: 600, color: "var(--ff-text)" }}>Repetir rutina</span>
                <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-2)", marginTop: 2 }}>Entrénala otra vez sin cambiar tu plan</span>
              </span>
            </button>
          </div>
        </div>
      )}
      {snack && (
        <div style={{ position: "absolute", left: 16, right: 16, bottom: 18, zIndex: 20, display: "flex", alignItems: "center", gap: 12, padding: "13px 14px 13px 16px", background: "var(--ff-surface-2)", border: "1px solid var(--ff-border)", borderRadius: 12, boxShadow: "0 12px 28px rgba(0,0,0,0.5)" }}>
          <p style={{ flex: 1, minWidth: 0, fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ff-text)", lineHeight: 1.4, margin: 0 }}>{snack.isToday ? snack.routine + " vuelve a ser tu rutina de hoy." : snack.routine + " volvió a pendientes."}</p>
          <button type="button" onClick={undoUnmark} style={{ flexShrink: 0, height: 32, padding: "0 12px", borderRadius: 999, border: "none", background: "none", color: "var(--ff-red-light)", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Deshacer</button>
        </div>
      )}
    </div>
  );
}

// Bottom sheet de semanas: la actual y las siguientes; las pasadas quedan atenuadas.
function WeekSheet({ p, value, onPick, onClose }) {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 30, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
      <div style={{ position: "relative", background: "var(--ff-surface)", borderRadius: "32px 32px 0 0", padding: "10px 0 22px", maxHeight: "70%", overflowY: "auto" }}>
        <div style={{ width: 38, height: 4, borderRadius: 999, background: "var(--ff-border)", margin: "0 auto 14px" }} />
        <p style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--ff-text)", letterSpacing: "-.3px", margin: "0 20px 4px" }}>Ver otra semana</p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--ff-text-2)", margin: "0 20px 12px" }}>Te quedan {p.totalWeeks - p.week + 1} semanas de tu plan.</p>
        {Array.from({ length: p.totalWeeks - p.week + 1 }, (_, i) => p.week + i).map((w) => {
          const sel = w === value;
          return (
            <button key={w} onClick={() => onPick(w)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "14px 20px", background: sel ? "var(--ff-primary-container)" : "transparent", border: "none", borderTop: "1px solid var(--ff-border)", cursor: "pointer", textAlign: "left" }}>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 14.5, fontWeight: 600, color: sel ? "var(--ff-red-light)" : "var(--ff-text)" }}>Semana {w}</span>
                <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-2)", marginTop: 2 }}>{w === p.week ? "Semana actual" : "Próxima"}</span>
              </span>
              {sel && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ff-red-light)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function WeekPill({ week, onClick }) {
  return (
    <button onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 6, height: 30, padding: "0 12px", borderRadius: 999, border: "1px solid var(--ff-border)", background: "var(--ff-surface)", color: "var(--ff-text-2)", fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: 600, cursor: "pointer" }}>
      Semana {week}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
    </button>
  );
}

function WorkoutListScreen({ onSelectDay, todayRest, todayDone, initialWeek, sheetOpen }) {
  const p = window.FF_DATA.program;
  const blockCount = (window.FF_DATA.routineDetailBlocks || []).filter(b => b.type !== "rest").length;
  const mins = estimateRoutineMinutes(window.FF_DATA.routineDetailBlocks || []);
  const template = window.FF_DATA.weekTemplate || [];
  const todayIdx = Math.max(0, template.findIndex(x => x.status === "today"));
  // Solo las rutinas por realizar, de hoy en adelante, con su fecha real.
  const upcoming = [];
  for (let offset = (todayRest || todayDone) ? 1 : 0; upcoming.length < 6 && offset < 21; offset++) {
    const i = todayIdx + offset;
    const item = template[i % template.length];
    if (item.type === "rest") continue;
    upcoming.push({ ...item, date: formatShortDate(p.weekStartDate, i), status: offset === 0 ? "today" : "upcoming" });
  }
  const first = upcoming[0];
  const rest = (todayRest || todayDone) ? upcoming : upcoming.slice(1);
  const todayDate = formatShortDate(p.weekStartDate, todayIdx);
  const todayName = (template[todayIdx] || {}).day;
  const doneRoutine = ((template[todayIdx] || {}).routine) || (first && first.routine);
  const [week, setWeek] = React.useState(initialWeek || p.week);
  const [sheet, setSheet] = React.useState(!!sheetOpen);
  const isCurrent = week === p.week;
  // Semana distinta a la actual: la lista son sus días de entrenamiento, sin card de hoy.
  const weekRoutines = template
    .map((item, i) => ({ ...item, date: formatShortDate(p.weekStartDate, (week - p.week) * 7 + i) }))
    .filter(x => x.type !== "rest");
  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)", ...APP_LIGHT_BG, ...APP_LIGHT }} data-screen-label={todayDone ? "Workout W5 · hoy completado" : "Workout W5"}>
      <header style={{ display: "flex", alignItems: "center", height: 56, padding: "0 16px", flexShrink: 0 }}>
        <InitialsAvatar />
      </header>
      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "0 16px 20px" }}>
        <div style={{ background: "var(--ff-surface)", border: "1px solid var(--ff-border)", borderRadius: 16, padding: "16px 0 18px", marginBottom: 12 }}>
          <ProgramHeaderFlat />
        </div>
        <div style={{ marginBottom: 18 }}>
          <PendingRow onOpen={() => {}} note={todayDone && isCurrent ? "La rutina de hoy ya está guardada aquí" : undefined} />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, margin: "0 2px 10px" }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: 15, color: "var(--ff-text)", margin: 0 }}>{isCurrent ? "Hoy" : "Próximas rutinas"}</p>
          <WeekPill week={week} onClick={() => setSheet(true)} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {!isCurrent ? (
            <React.Fragment>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ff-text-2)", lineHeight: 1.6, margin: "0 2px 2px" }}>Estás viendo una semana distinta a la actual.</p>
              {weekRoutines.map((item, i) => <RoutineListItem key={i} item={item} mins={mins} blocks={blockCount} onOpen={() => onSelectDay && onSelectDay(item)} />)}
              <button onClick={() => setWeek(p.week)} style={{ marginTop: 4, height: 44, borderRadius: 10, border: "1px solid var(--ff-border)", background: "var(--ff-surface)", color: "var(--ff-text)", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Volver a la semana actual</button>
            </React.Fragment>
          ) : todayDone ? (
            <div style={{ position: "relative", minHeight: 230, borderRadius: 16, overflow: "hidden", background: "#0F0F0F", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <img src="assets/entrenamiento_completado.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.90) 100%)" }} />
              <div style={{ position: "relative", padding: "20px 18px 18px", display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, height: 24, padding: "0 10px", borderRadius: 999, background: "rgba(46,207,122,0.18)", border: "1px solid rgba(46,207,122,0.35)", marginBottom: 10 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--ff-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 10.5, fontWeight: 700, color: "var(--ff-green)", textTransform: "uppercase", letterSpacing: ".12em" }}>Completada</span>
                  </span>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: ".12em", margin: "0 0 6px" }}>Hoy · {todayName} {todayDate}</p>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "#fff", letterSpacing: "-.3px", lineHeight: 1.2, margin: "0 0 8px" }}>Terminaste tu entrenamiento de hoy</h2>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.80)", lineHeight: 1.6, margin: 0, maxWidth: 280 }}>{doneRoutine} queda guardada en tus rutinas anteriores. Hidrátate, come bien y descansa.</p>
                </div>
                <button onClick={() => {}} style={{ width: "100%", height: 48, borderRadius: 10, border: "1px solid rgba(255,255,255,0.35)", background: "rgba(255,255,255,0.08)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 14, letterSpacing: "-.2px", cursor: "pointer" }}>Ver resumen</button>
              </div>
            </div>
          ) : todayRest ? (
            <div style={{ position: "relative", minHeight: 200, borderRadius: 16, overflow: "hidden", background: "#0F0F0F", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <img src="assets/rest.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.55)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.50) 45%, rgba(0,0,0,0.85) 100%)" }} />
              <div style={{ position: "relative", padding: "20px 18px 18px" }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: ".12em", margin: "0 0 6px" }}>Hoy · {todayName} {todayDate}</p>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "#fff", letterSpacing: "-.3px", margin: "0 0 8px" }}>Día de descanso</h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.80)", lineHeight: 1.6, margin: 0, maxWidth: 260 }}>Recúpera bien: el descanso es parte del entrenamiento.</p>
              </div>
            </div>
          ) : (
          <div style={{ position: "relative", minHeight: 230, borderRadius: 16, overflow: "hidden", background: "#0F0F0F", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <img src={p.routineImg || WORKOUT_HERO} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.88) 100%)" }} />
            <div style={{ position: "relative", padding: "20px 18px 18px", display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: ".12em", margin: "0 0 6px" }}>Hoy · {first.day} {first.date}</p>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "#fff", letterSpacing: "-.3px", lineHeight: 1.2, margin: "0 0 8px" }}>{first.routine}</h2>
                <div style={{ display: "flex", gap: 14 }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.80)" }}>{mins} min aprox.</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.80)" }}>{blockCount} bloques</span>
                </div>
              </div>
              <button onClick={() => onSelectDay && onSelectDay(first)} style={{ width: "100%", height: 48, borderRadius: 10, border: "none", background: "#FFFFFF", color: "#101010", fontFamily: "var(--font-display)", fontSize: 14, letterSpacing: "-.2px", cursor: "pointer" }}>Ver rutina</button>
            </div>
          </div>
          )}
          {isCurrent && <p style={{ fontFamily: "var(--font-display)", fontSize: 15, color: "var(--ff-text)", margin: "8px 2px 0" }}>Tus próximas rutinas</p>}
          {isCurrent && rest.map((item, i) => <RoutineListItem key={i} item={item} mins={mins} blocks={blockCount} onOpen={() => onSelectDay && onSelectDay(item)} />)}
        </div>
      </div>
      <TwoTabBar active="workout" tone="dark" onChange={() => {}} />
      {sheet && <WeekSheet p={p} value={week} onPick={(w) => { setWeek(w); setSheet(false); }} onClose={() => setSheet(false)} />}
    </div>
  );
}

// W5 · sin plan cargado: el workout queda callado, solo una card blanca lo explica.
function WorkoutEmptyScreen({ onStartTutorial }) {
  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)", ...APP_LIGHT_BG, ...APP_LIGHT }} data-screen-label="Workout W5 · sin plan">
      <header style={{ display: "flex", alignItems: "center", height: 56, padding: "0 16px", flexShrink: 0 }}>
        <InitialsAvatar />
      </header>
      <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 16px 40px" }}>
        <div style={{ background: "var(--ff-surface)", border: "1px solid var(--ff-border)", borderRadius: 16, padding: "30px 20px", textAlign: "center" }}>
          <span style={{ width: 72, height: 72, borderRadius: 20, margin: "0 auto 18px", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--ff-primary-container)" }}>
            <img src={window.__resources?.ffMark || "assets/logos/ff_mark.svg"} alt="" style={{ width: 36 }} />
          </span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--ff-text)", lineHeight: 1.3, letterSpacing: "-.3px", margin: "0 0 8px" }}>Bienvenido a FitFighters</h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ff-text-2)", lineHeight: 1.6, margin: "0 auto", maxWidth: 240 }}>Cuando tengas un plan activo aparecerá aquí.</p>
        </div>
      </div>
      <TwoTabBar active="workout" tone="dark" onChange={() => {}} />
    </div>
  );
}

// Tutorial · se presenta desde el workout como hoja de abajo hacia arriba.
// Dos estados: usuario nuevo y usuario que regresa porque su plan terminó.
function TutorialSheetScreen({ onStart, onClose, returning }) {
  const copy = returning ? {
    img: "assets/tutorial_regreso.png",
    eyebrow: "Tu plan terminó",
    title: "Actualicemos tu plan",
    body: "Completaste tu programa. Revisemos tus datos y tus objetivos para armarte el siguiente plan al nivel que ya alcanzaste.",
    points: ["Ya avanzaste: tu nivel se ajusta", "Menos de 2 minutos", "Tu nueva rutina queda lista para hoy"],
    cta: "Actualizar mi plan",
  } : {
    img: "assets/tutorial.png",
    eyebrow: "Empieza aquí",
    title: "Armemos tu plan de entrenamiento",
    body: "Te haremos unas preguntas sobre tu experiencia, tus objetivos y los días que puedes entrenar. Con eso te sugerimos el programa y el nivel que mejor van contigo.",
    points: ["Menos de 2 minutos", "Puedes cambiar de plan después", "Tu rutina queda lista para hoy"],
    cta: "Comenzar tutorial",
  };
  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "#0F0F0F", ...ON_IMAGE }} data-screen-label="Tutorial">
      <img src={copy.img} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.88) 100%)" }} />
      <div style={{ height: 56, flexShrink: 0 }} />
      <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 20px 30px" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.72)", textTransform: "uppercase", letterSpacing: ".12em", margin: "0 0 10px" }}>{copy.eyebrow}</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 25, color: "#fff", lineHeight: 1.2, letterSpacing: "-.5px", margin: "0 0 12px" }}>{copy.title}</h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.84)", lineHeight: 1.6, margin: "0 0 22px", maxWidth: 320, textWrap: "pretty" }}>{copy.body}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
          {copy.points.map((t) => (
            <div key={t} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ff-green)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.86)" }}>{t}</span>
            </div>
          ))}
        </div>
        <Button variant="primary" fullWidth onClick={onStart}>{copy.cta}</Button>
      </div>
    </div>
  );
}

window.WorkoutListScreen = WorkoutListScreen;
window.PastRoutinesScreen = PastRoutinesScreen;
window.WorkoutEmptyScreen = WorkoutEmptyScreen;
window.TutorialSheetScreen = TutorialSheetScreen;

// ── WorkoutDetail.jsx ───────────────────────────────────────────
// FitFighters mobile — Detalle de rutina (aprobado 17 ago 2026, variante "header plano · CTA en footer").
// Header a sangre con imagen de la rutina + overlay negro, barra flotante que colapsa,
// tarjetas blancas con headers rojos y un solo CTA "Iniciar rutina" en el footer.

// Instrucciones de rutina — pasan a data.js cuando el backend las entregue.
const ROUTINE_INSTRUCTIONS = {
  general: "Realiza la siguiente serie de ejercicios. Recuerda trabajar con una excelente técnica. Usa los parámetros de trabajo como las repeticiones o tiempo de ejecución como una referencia, pero siempre lo más importante será respetar las RIR que se mencionan en cada serie. También usa los intervalos de descanso como una referencia, lo importante es que estés completamente recuperado y listo para la siguiente serie de ejercicio.",
  bySection: {
    cycle: "Realiza el siguiente ejercicio. Recuerda trabajar con una excelente técnica y cerca del fallo muscular. Usa los parámetros de trabajo como las repeticiones o tiempo de ejecución como una referencia, pero siempre lo más importante será respetar las RIR que se mencionan en cada serie.",
    stripset: "Realiza las series seguidas, sin descanso entre ellas, bajando el peso en cada cambio de repeticiones. Mantén una excelente técnica y llega cerca del fallo muscular en la última serie.",
    fortime: "Completa todas las rondas lo más rápido posible, sin sacrificar la técnica. Descansa solo lo necesario para poder seguir moviéndote.",
    amrap: "Haz la mayor cantidad de rondas posibles en el tiempo indicado. Busca un ritmo constante que puedas sostener hasta el final, no salgas al máximo.",
    emom: "Cada minuto en punto realiza las repeticiones indicadas. El tiempo que te sobre dentro del minuto es tu descanso, así que cuida la técnica para ganarlo.",
    cardio: "Mantén un ritmo constante durante todo el tiempo indicado. Si necesitas bajar la intensidad, hazlo sin detenerte por completo.",
  },
};

// Superficies claras del detalle: tarjetas blancas con texto negro sobre el fondo de la app.
const ROUTINE_DETAIL_SURFACES = {
  "--ff-bg": "rgba(255,255,255,0.90)",
  "--ff-surface": "#FFFFFF",
  "--ff-surface-2": "#F2F2F2",
  "--ff-border": "#E2E2E2",
  "--ff-text": "#101010",
  "--ff-text-2": "#4A4A4A",
  "--ff-text-3": "#8E8E8E",
  "--ff-red-light": "#CC2800",
  "--ff-primary-container": "rgba(255,50,0,0.10)",
};

function InstructionNote({ text, color, tint, divider = true }) {
  return (
    <div style={{ padding: "11px 16px 13px", background: tint ? `linear-gradient(to right, color-mix(in srgb, ${color} 8%, transparent), transparent)` : "transparent", borderBottom: divider ? "1px solid var(--ff-border)" : "none" }}>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--ff-text-2)", lineHeight: 1.55, margin: 0, textWrap: "pretty" }}>{text}</p>
    </div>
  );
}

// Meta de la derecha: cada tipo de bloque muestra su magnitud al mismo nivel (series / rondas / duración).
function blockMetaV2(block) {
  if (block.type === "fortime") return block.rounds ? `${block.rounds} rondas` : null;
  if (block.type === "emom") return block.minutesTotal ? `${block.minutesTotal} min` : null;
  if (block.type === "amrap" || block.type === "cardio") return block.totalTimeSeconds ? fmtCountdown(block.totalTimeSeconds) : null;
  return block.series ? `${block.series} series` : null;
}

function RoutineSectionCardRed({ block, open, onToggle, instruction, onExerciseTap }) {
  const meta = blockMetaV2(block);
  return (
    <div style={{ background: "var(--ff-surface)", border: "1px solid var(--ff-border)", borderRadius: 16, overflow: "hidden" }}>
      <div onClick={onToggle} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, padding: "12px 14px 12px 16px", background: "var(--ff-red)", cursor: "pointer" }}>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 11.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#fff" }}>{block.name}</span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {meta && <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,.9)" }}>{meta}</span>}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .25s" }}><polyline points="6 9 12 15 18 9" /></svg>
        </div>
      </div>
      {open && (
        <div>
          {instruction && <InstructionNote text={instruction} color="var(--ff-red)" tint />}
          {block.exercises.map((ex, i) => <RoutineExerciseRow key={i} ex={ex} isLast={i === block.exercises.length - 1} onTap={onExerciseTap ? () => onExerciseTap(ex) : undefined} />)}
        </div>
      )}
    </div>
  );
}

// Duración estimada de la rutina: trabajo + descansos, redondeada a 5 min.
function estimateRoutineMinutes(blocks) {
  const seconds = blocks.reduce((total, b) => {
    const n = (b.exercises || []).length;
    if (b.type === "rest") return total + (b.timeSeconds || 0);
    if (b.type === "amrap" || b.type === "cardio") return total + (b.totalTimeSeconds || 0);
    if (b.type === "emom") return total + (b.minutesTotal || 0) * 60;
    if (b.type === "fortime") return total + (b.rounds || 1) * n * 40;
    const series = b.series || 1;
    return total + series * (n * 45 + (b.restBetweenSeriesSeconds || 0));
  }, 0);
  return Math.max(5, Math.round(seconds / 60 / 5) * 5);
}

// Los bloques de tipo cycle se numeran por tipo: "Ciclo 1", "Ciclo 2"…
function numberCycleBlocks(blocks) {
  let n = 0;
  return blocks.map((b) => {
    if (b.type !== "cycle") return b;
    n += 1;
    return { ...b, name: "Ciclo " + n };
  });
}

function WorkoutDetailScreen({ item, onBack, onStart, blocksOverride, onExerciseTap }) {
  const d = window.FF_DATA;
  const ins = d.routineInstructions || ROUTINE_INSTRUCTIONS;
  const day = item || { day: "Hoy", routine: d.program.day };
  const isDone = day.status === "done";
  const blocks = numberCycleBlocks(blocksOverride || d.routineDetailBlocks || []);
  const [closed, setClosed] = React.useState({});
  const [scrollY, setScrollY] = React.useState(0);
  const collapsed = scrollY > 96;
  const cta = isDone ? "Repetir rutina" : "Iniciar rutina";
  const heroImg = d.program.routineImg || "https://d3gfgejixr95u4.cloudfront.net/app/production/routines/1691718103462.jpg";

  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)", ...ROUTINE_DETAIL_SURFACES }} data-screen-label="Detalle rutina">
      {/* Barra flotante sobre la imagen; al hacer scroll se vuelve sólida y recoge el título. */}
      <header style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 5, display: "flex", alignItems: "center", height: 56, padding: "0 12px 0 6px", gap: 8, pointerEvents: "none", background: collapsed ? "var(--ff-bg)" : "transparent", backdropFilter: collapsed ? "blur(12px)" : "none", WebkitBackdropFilter: collapsed ? "blur(12px)" : "none", borderBottom: collapsed ? "1px solid var(--ff-border)" : "1px solid transparent", transition: "background .2s ease, border-color .2s ease" }}>
        <span style={{ pointerEvents: "auto" }}><CircleIconBtn kind="back" onClick={onBack} onMedia={!collapsed} /></span>
        <span style={{ flex: 1, minWidth: 0, fontFamily: "var(--font-display)", fontSize: 15, color: "var(--ff-text)", letterSpacing: "-.2px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", opacity: collapsed ? 1 : 0, transform: collapsed ? "translateY(0)" : "translateY(8px)", transition: "opacity .2s ease, transform .2s ease" }}>{day.routine}</span>
      </header>

      <div onScroll={(e) => setScrollY(e.currentTarget.scrollTop)} style={{ flex: 1, overflowY: "auto", padding: "0 16px 78px" }}>
        {/* Header a sangre: imagen de la rutina con overlay negro, título e instrucción general centrados. */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", minHeight: 281, margin: "0 -16px 16px", padding: "64px 20px 24px", overflow: "hidden" }}>
          {heroImg && (
            <img src={heroImg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${scrollY * 0.35}px) scale(1.12)`, transformOrigin: "top center", willChange: "transform" }} />
          )}
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.40)" }} />
          <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "#fff", lineHeight: 1.15, letterSpacing: "-.5px", margin: "0 0 14px" }}>{day.routine}</h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.88)", lineHeight: 1.6, margin: 0, textWrap: "pretty" }}>{ins.general}</p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {blocks.map((b, i) => b.type === "rest"
            ? <RoutineRestStrip key={i} block={b} />
            : <RoutineSectionCardRed
                key={i}
                block={b}
                open={!closed[i]}
                onToggle={() => setClosed(c => ({ ...c, [i]: !c[i] }))}
                instruction={ins.bySection[b.type]}
                onExerciseTap={onExerciseTap ? (ex) => onExerciseTap(ex, i) : undefined}
              />)}
        </div>
      </div>

      <div style={{ flexShrink: 0, padding: "16px 16px 26px", background: "linear-gradient(to top, var(--ff-bg) 80%, transparent)", marginTop: -44, position: "relative", zIndex: 2 }}>
        <Button variant="primary" onClick={onStart}>{cta}</Button>
      </div>
    </div>
  );
}

window.WorkoutDetailScreen = WorkoutDetailScreen;

// ── Barra superior flotante ───────────────────────────────────────
// Regla del diseño: la barra nace transparente con el control flotando; solo se vuelve
// sólida y muestra el título cuando el contenido scrollea y el usuario baja.
function useBarScroll() {
  const [scrolled, setScrolled] = React.useState(false);
  const onScroll = (e) => { const s = e.currentTarget.scrollTop > 6; setScrolled((p) => (p === s ? p : s)); };
  return [scrolled, onScroll];
}

function CircleIconBtn({ kind = "back", onClick, onMedia, plain }) {
  const stroke = onMedia ? "#fff" : "var(--ff-text)";
  return (
    <button onClick={onClick} aria-label={kind === "close" ? "Cerrar" : "Atrás"} style={{ width: 40, height: 40, borderRadius: "50%", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0,
      background: plain ? "transparent" : onMedia ? "rgba(0,0,0,0.45)" : "rgba(20,20,20,0.06)", backdropFilter: onMedia ? "blur(6px)" : "none", WebkitBackdropFilter: onMedia ? "blur(6px)" : "none", transition: "background .2s ease" }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {kind === "close" ? <g><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></g> : <path d="M19 12H5M12 5l-7 7 7 7" />}
      </svg>
    </button>
  );
}

function FloatingTopBar({ title, onBack, onClose, scrolled }) {

  return (
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 6, height: 56, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 12px",
      background: scrolled ? "var(--ff-bg)" : "transparent", borderBottom: scrolled ? "1px solid var(--ff-border)" : "1px solid transparent", transition: "background .2s ease, border-color .2s ease" }}>
      {onBack ? <CircleIconBtn kind="back" onClick={onBack} plain={scrolled} /> : <span style={{ width: 40, flexShrink: 0 }} />}
      <span style={{ fontFamily: "var(--font-display)", fontSize: 15, color: "var(--ff-text)", letterSpacing: "-.2px", opacity: scrolled ? 1 : 0, transition: "opacity .2s ease", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</span>
      {onClose ? <CircleIconBtn kind="close" onClick={onClose} plain={scrolled} /> : <span style={{ width: 40, flexShrink: 0 }} />}
    </div>
  );
}

// ── ExerciseDetail.jsx ────────────────────────────────────────────
// FitFighters mobile — Exercise detail: video, muscles, instructions. Paridad con ExerciseDetailScreen.kt.

// Sin app bar: el video sube al tope y el volver flota encima.
function MediaBackBtn({ onBack }) {
  return (
    <div style={{ position: "absolute", top: 14, left: 14, zIndex: 3 }}>
      <CircleIconBtn kind="back" onClick={onBack} onMedia />
    </div>
  );
}

function getExerciseInfo(name) {
  return (window.FF_DATA.exerciseLibrary || {})[name] || { muscles: [], instructions: [], videoUrl: null };
}

function ExerciseDetailScreen({ exercise, onBack, onChangeExercise }) {
  const ex = exercise || { name: "Ejercicio", img: null };
  const info = getExerciseInfo(ex.name);
  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)", ...APP_LIGHT_BG, ...APP_LIGHT }} data-screen-label="Detalle de ejercicio">
      <div style={{ width: "100%", paddingTop: "56.25%", background: "#000", position: "relative", flexShrink: 0, overflow: "hidden" }}>
        <MediaBackBtn onBack={onBack} />
        <div style={{ position: "absolute", inset: 0 }}>
          {info.videoUrl ? (
            <video key={info.videoUrl} src={info.videoUrl} poster={ex.img} controls loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
          ) : ex.img ? (
            <img src={ex.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          ) : (
            <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--ff-text-3)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-3)" }}>Video no disponible</span>
            </div>
          )}
        </div>
      </div>

      <div style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
        <div style={{ padding: "18px 16px 8px", display: "flex", flexDirection: "column", gap: 18 }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--ff-text)", margin: 0, lineHeight: 1.3, letterSpacing: "-.3px", textWrap: "pretty" }}>{ex.name}</h1>
          {info.muscles.length > 0 && (
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--ff-text)", margin: "0 0 6px" }}>Músculos</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ff-text-2)", margin: 0, lineHeight: 1.5 }}>{info.muscles.join(", ")}</p>
            </div>
          )}
          {info.instructions.length > 0 && (
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--ff-text)", margin: "0 0 8px" }}>Instrucciones</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {info.instructions.map((step, i) => (
                  <p key={i} style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ff-text-2)", margin: 0, lineHeight: 1.5 }}>{i + 1}. {step}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div style={{ flexShrink: 0, padding: "12px 16px 28px", background: "linear-gradient(to top, var(--ff-bg) 75%, transparent)" }}>
        <Button variant="primary" onClick={onChangeExercise}>Cambiar ejercicio</Button>
      </div>
    </div>
  );
}

window.ExerciseDetailScreen = ExerciseDetailScreen;

// ── ChangeExercise.jsx ────────────────────────────────────────────
// FitFighters mobile — Change exercise: player up top, alternatives list below, tap-to-preview then confirm.

function ChangeExerciseCarousel({ items, activeIdx, onPick, scrollRef }) {
  const CARD = 132, GAP = 12;
  const onScroll = (e) => {
    const el = e.currentTarget;
    const idx = Math.round(el.scrollLeft / (CARD + GAP));
    if (idx !== activeIdx && idx >= 0 && idx < items.length) onPick(idx, true);
  };
  return (
    <div
      ref={scrollRef}
      onScroll={onScroll}
      style={{ display: "flex", gap: GAP, overflowX: "auto", scrollSnapType: "x mandatory", padding: "0 16px 4px", scrollbarWidth: "none", flexShrink: 0 }}
    >
      {items.map((it, i) => {
        const active = i === activeIdx;
        return (
          <div key={it.name} onClick={() => onPick(i)} style={{ width: CARD, flexShrink: 0, scrollSnapAlign: "center", cursor: "pointer" }}>
            <div style={{ width: CARD, height: 94, borderRadius: 12, overflow: "hidden", background: "var(--ff-surface-2)", border: active ? "2px solid var(--ff-red)" : "1px solid var(--ff-border)", opacity: active ? 1 : 0.55, position: "relative" }}>
              {it.img ? <img src={it.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : null}
              {i === 0 && (
                <span style={{ position: "absolute", top: 6, left: 6, fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 700, letterSpacing: ".08em", color: "#fff", background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 999, padding: "2px 7px" }}>ACTUAL</span>
              )}
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: active ? "var(--ff-text)" : "var(--ff-text-3)", margin: "6px 0 0", lineHeight: 1.3, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{it.name}</p>
          </div>
        );
      })}
    </div>
  );
}

function ChangeExerciseCues({ item, tone = "dark" }) {
  const cues = item.cues || (window.FF_DATA.exerciseCues || {})[item.name] || (item.instructions || []).slice(0, 2);
  if (!cues || !cues.length) return null;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      {cues.slice(0, 3).map((c, i) => (
        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
          <span style={{ width: 4, height: 4, borderRadius: "50%", background: tone === "dark" ? "var(--ff-text-3)" : "rgba(255,255,255,.5)", marginTop: 7, flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: tone === "dark" ? "var(--ff-text-2)" : "rgba(255,255,255,.8)", lineHeight: 1.45 }}>{c}</span>
        </div>
      ))}
    </div>
  );
}

function ChangeExerciseScreen({ exercise, onBack, onConfirm, poolOverride }) {
  const ex = exercise || { name: "Ejercicio", img: null };
  const info = getExerciseInfo(ex.name);
  const pool = poolOverride || window.FF_DATA.changeExercisePool || [];
  const relatedPool = pool.filter(p => p.name !== ex.name);
  const items = [{ name: ex.name, img: ex.img, videoUrl: info.videoUrl, muscles: info.muscles, instructions: info.instructions }, ...relatedPool];
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [playKey, setPlayKey] = React.useState(0);
  const railRef = React.useRef(null);
  const preview = items[activeIdx] || items[0];
  const selected = activeIdx > 0 ? items[activeIdx] : null;

  // Deslizar el carrusel cambia el reproductor; tocar una tarjeta lo centra y reproduce su video.
  const pick = (i, fromScroll) => {
    setActiveIdx(i);
    setPlayKey((k) => k + 1);
    if (!fromScroll && railRef.current) railRef.current.scrollTo({ left: i * 144, behavior: "smooth" });
  };

  const emptyState = (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 10, padding: "8px 20px 20px" }}>
      <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--ff-surface-2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ff-text-3)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
      </div>
      <p style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--ff-text)", margin: 0 }}>No hay ejercicios disponibles</p>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ff-text-3)", margin: 0, lineHeight: 1.5, maxWidth: 260 }}>No encontramos alternativas para este ejercicio por ahora.</p>
    </div>
  );

  const cta = (
    <Button variant="primary" disabled={!selected} onClick={() => selected && onConfirm(selected)}>
      {selected ? `Cambiar a ${selected.name}` : "Selecciona un ejercicio"}
    </Button>
  );

  const media = (fit) => (
    preview.videoUrl ? (
      <video key={preview.videoUrl + playKey} src={preview.videoUrl} poster={preview.img} controls autoPlay loop muted playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: fit, display: "block" }} />
    ) : preview.img ? (
      <img src={preview.img} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
    ) : null
  );

  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)", ...APP_LIGHT_BG, ...APP_LIGHT }} data-screen-label="Cambiar ejercicio">
      <div style={{ width: "100%", paddingTop: "56.25%", background: "#000", position: "relative", flexShrink: 0, minHeight: 0, overflow: "hidden" }}>
        <MediaBackBtn onBack={onBack} />
        {media("contain")}
      </div>

      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "14px 16px 8px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--ff-text)", margin: 0, lineHeight: 1.3 }}>{preview.name}</p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-3)", margin: 0 }}>
            {(preview.muscles && preview.muscles.length ? preview.muscles.join(", ") : "Sin grupo muscular")}{activeIdx === 0 ? " · Ejercicio actual" : ""}
          </p>
        </div>
        <ChangeExerciseCues item={preview} />
      </div>

      {items.length > 1 ? (
        <div style={{ flexShrink: 0, paddingTop: 4 }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ff-text-3)", margin: "0 16px 8px" }}>Ejercicios relacionados</p>
          <ChangeExerciseCarousel items={items} activeIdx={activeIdx} onPick={pick} scrollRef={railRef} />
        </div>
      ) : emptyState}

      <div style={{ flexShrink: 0, padding: "14px 16px 28px", background: "linear-gradient(to top, var(--ff-bg) 75%, transparent)" }}>{cta}</div>
    </div>
  );
}

window.ChangeExerciseScreen = ChangeExerciseScreen;

// ── Profile.jsx ─────────────────────────────────────────────────
// FitFighters mobile — Profile screen.

function ProfileIcon(children) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{children}</svg>;
}

function ProfileSectionLabel({ children }) {
  return <p style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ff-text-3)", margin: "20px 2px 8px" }}>{children}</p>;
}

function ProfileScreen({ tab, onTab, onEditProfile, onChangePassword, onChangeProgram, onGenerations, onClose }) {
  const [scrolled, onScroll] = useBarScroll();
  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)", ...APP_LIGHT_BG, ...APP_LIGHT }} data-screen-label="Perfil">
      <FloatingTopBar title="Perfil" onClose={onClose} scrolled={scrolled} />
      <div onScroll={onScroll} style={{ flex: 1, overflowY: "auto", padding: "64px 16px 90px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "12px 0 20px" }}>
          <div style={{ position: "relative", flexShrink: 0 }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--ff-surface-2)", border: "2px solid var(--ff-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ff-text-2)" }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></svg>
            </div>
            <button onClick={onEditProfile} style={{ position: "absolute", bottom: 0, right: 0, width: 22, height: 22, background: "var(--ff-red)", borderRadius: "50%", border: "2px solid var(--ff-bg)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 0 }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
            </button>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 17, color: "var(--ff-text)", margin: 0 }}>Eduardo García</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-2)", margin: "3px 0 10px" }}>eduardo@gmail.com</p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              <Badge>Novatos gym</Badge>
              <Badge>Nivel 3</Badge>
              <Badge tone="active" dot>Activo</Badge>
            </div>
          </div>
        </div>

        {/* Subscription */}
        <ProfileSectionLabel>Suscripción</ProfileSectionLabel>
        <Card style={{ borderColor: "rgba(46,207,122,0.3)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 10, padding: "28px 20px" }}>
          <Badge tone="active" dot>Activo</Badge>
          <p style={{ fontFamily: "var(--font-display)", fontSize: 15, color: "var(--ff-text)", margin: 0, lineHeight: 1.4 }}>
            Gestiona tu plan en <span style={{ color: "var(--ff-red-light)" }}>fitfighters.com</span>
          </p>
        </Card>

        {/* Past generations */}
        <Card padding="0" style={{ marginTop: 12 }}>
          <MenuRow
            icon={ProfileIcon(<><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>)}
            label="Generaciones anteriores"
            onClick={onGenerations}
          />
        </Card>

        {/* Account */}
        <ProfileSectionLabel>Cuenta</ProfileSectionLabel>
        <Card padding="0">
          <MenuRow icon={ProfileIcon(<><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></>)} label="Editar perfil" onClick={onEditProfile} />
          <MenuRow icon={ProfileIcon(<><polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></>)} label="Modificar o cambiar plan" divider onClick={onChangeProgram} />
          <MenuRow icon={ProfileIcon(<><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>)} label="Cambiar contraseña" sublabel="Solo cuentas con correo" divider onClick={onChangePassword} />
        </Card>

        {/* Support */}
        <ProfileSectionLabel>Soporte</ProfileSectionLabel>
        <Card padding="0">
          <MenuRow icon={ProfileIcon(<><polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2" /></>)} label="Escribir reseña" />
          <MenuRow icon={ProfileIcon(<><circle cx="12" cy="12" r="10" /><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12" y2="17" /></>)} label="Preguntas frecuentes" divider />
        </Card>

        {/* Session */}
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--ff-border)" }}>
          <Card padding="0">
            <MenuRow icon={ProfileIcon(<><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></>)} label="Cerrar sesión" destructive showChevron={false} />
            <MenuRow icon={ProfileIcon(<><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" /></>)} label="Eliminar cuenta" sublabel="Esta acción es permanente" destructive showChevron={false} divider />
          </Card>
        </div>

        <p style={{ textAlign: "center", fontFamily: "var(--font-body)", fontSize: 10, color: "var(--ff-text-3)", padding: 16 }}>FitFighters v2.0.0</p>
      </div>

      <div style={{ ...DARK_NAV_CONTEXT, position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <BottomNav active={tab} onChange={onTab} />
      </div>
    </div>
  );
}

window.ProfileScreen = ProfileScreen;

// ── Trainer.jsx ─────────────────────────────────────────────────
// FitFighters mobile — Virtual trainer. Supports all 7 section block types with real per-type
// timing behavior: reps-vs-time Cycle, count-up For time, countdown+rounds AMRAP, sequence
// Stripset, looping EMOM, dual-timer Cardio (traditional/interval), and both Rest variants
// (standalone section rest vs. inter-exercise overlay).

// Los tabs están siempre visibles durante el ejercicio activo. Salir del tab "Ejercicio"
// pausa automáticamente (para no perder segundos en bloques por tiempo); volver no reanuda.
const PAUSE_TABS = [
  { id: "ejercicio", label: "Ejercicio" },
  { id: "cola", label: "Cola" },
  { id: "instrucciones", label: "Instrucciones" },
];

function fmtClock(totalSeconds) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const pad = (n) => String(n).padStart(2, "0");
  return h > 0 ? `${pad(h)}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}

// ── Per-block run engine ──────────────────────────────────────────
// `run` holds the mutable playback state for the CURRENT block. `makeRun` builds it fresh
// whenever the block changes; `tickRun` advances it by one second; `startStepInRun` /
// `advanceStep` move the step cursor for manually-advanced types (cycle/stripset).

function startStepInRun(run, stepIdx) {
  const step = run.steps[stepIdx];
  return { ...run, stepIdx, phase: "active", timeRemaining: step.mode === "time" ? step.timeSeconds : 0 };
}

function advanceStep(block, run, nextBlock) {
  if (run.stepIdx >= run.steps.length - 1) { nextBlock(); return run; }
  if (block.restBetweenSeconds) return { ...run, phase: "rest", restRemaining: block.restBetweenSeconds };
  return startStepInRun(run, run.stepIdx + 1);
}

function makeRun(block) {
  if (block.type === "rest") return { remaining: block.timeSeconds };
  if (block.type === "cycle") {
    const steps = [];
    for (let s = 1; s <= block.series; s++) {
      block.exercises.forEach((e, exIdx) => steps.push({ exIdx, serie: s, mode: e.mode, reps: e.reps, timeSeconds: e.timeSeconds }));
    }
    return startStepInRun({ steps }, 0);
  }
  if (block.type === "stripset") {
    const seqLen = block.exercises[0].sequence.length;
    const steps = [];
    for (let i = 0; i < seqLen; i++) {
      block.exercises.forEach((e, exIdx) => steps.push({ exIdx, serie: i + 1, mode: "reps", reps: e.sequence[i] }));
    }
    return startStepInRun({ steps }, 0);
  }
  if (block.type === "fortime") {
    const steps = [];
    for (let r = 1; r <= block.rounds; r++) {
      block.exercises.forEach((e, exIdx) => steps.push({ exIdx, round: r }));
    }
    return { steps, stepIdx: 0, phase: "active", elapsed: 0 };
  }
  if (block.type === "amrap") return { phase: "active", remaining: block.totalTimeSeconds, stepIdx: 0, roundsCompleted: 0 };
  if (block.type === "emom") return { phase: "active", minuteIdx: 1, secondsLeft: 60 };
  if (block.type === "cardio") {
    if (block.mode === "traditional") return { phase: "active", blockRemaining: block.totalTimeSeconds };
    return { phase: "interval-work", blockRemaining: block.totalTimeSeconds, intervalIdx: 0, phaseRemaining: block.intervals[0].workSeconds };
  }
  return {};
}

function tickRun(block, run, nextBlock) {
  if (!run) return run;
  if (block.type === "rest") {
    const remaining = run.remaining - 1;
    if (remaining <= 0) { nextBlock(); return run; }
    return { ...run, remaining };
  }
  if (run.phase === "rest") {
    const restRemaining = run.restRemaining - 1;
    if (restRemaining <= 0) return startStepInRun(run, run.stepIdx + 1);
    return { ...run, restRemaining };
  }
  switch (block.type) {
    case "cycle":
    case "stripset": {
      const step = run.steps[run.stepIdx];
      if (step.mode === "time") {
        const timeRemaining = run.timeRemaining - 1;
        if (timeRemaining <= 0) return advanceStep(block, run, nextBlock);
        return { ...run, timeRemaining };
      }
      return run;
    }
    case "fortime":
      return { ...run, elapsed: run.elapsed + 1 };
    case "amrap": {
      const remaining = run.remaining - 1;
      if (remaining <= 0) { nextBlock(); return run; }
      return { ...run, remaining };
    }
    case "emom": {
      const secondsLeft = run.secondsLeft - 1;
      if (secondsLeft <= 0) return { ...run, minuteIdx: run.minuteIdx + 1, secondsLeft: 60 };
      return { ...run, secondsLeft };
    }
    case "cardio": {
      const blockRemaining = run.blockRemaining - 1;
      if (blockRemaining <= 0) { nextBlock(); return run; }
      if (block.mode === "traditional") return { ...run, blockRemaining };
      const phaseRemaining = run.phaseRemaining - 1;
      if (phaseRemaining <= 0) {
        if (run.phase === "interval-work") {
          const restSecs = block.intervals[run.intervalIdx].restSeconds || 0;
          if (restSecs > 0) return { ...run, blockRemaining, phase: "interval-rest", phaseRemaining: restSecs };
        }
        const nextIdx = (run.intervalIdx + 1) % block.intervals.length;
        return { ...run, blockRemaining, intervalIdx: nextIdx, phase: "interval-work", phaseRemaining: block.intervals[nextIdx].workSeconds };
      }
      return { ...run, blockRemaining, phaseRemaining };
    }
    default:
      return run;
  }
}

function currentExerciseInfo(block, run) {
  if (block.type === "rest") return { name: "Descanso", img: block.img, instructions: block.instructions, videoUrl: null };
  if (block.type === "cycle" || block.type === "stripset" || block.type === "fortime") return block.exercises[run.steps[run.stepIdx].exIdx];
  if (block.type === "amrap") return block.exercises[run.stepIdx % block.exercises.length];
  if (block.type === "emom") return block.exercise;
  if (block.type === "cardio") return block.mode === "traditional" ? block.exercise : block.intervals[run.intervalIdx];
  return {};
}

function getDisplay(block, run) {
  const type = block.type;
  if (type === "cycle") {
    const step = run.steps[run.stepIdx];
    const panel = [{ v: step.serie, l: "Serie" }, { v: block.series, l: "Total" }];
    if (step.mode === "time") return { big: fmtCountdown(run.timeRemaining), label: "Tiempo", panel };
    if (step.mode === "failure" || !step.reps) return { big: "Al fallo", bigSize: 38, label: "Hasta no poder más", panel };
    return { big: step.reps, label: "Repeticiones", panel };
  }
  if (type === "stripset") {
    const step = run.steps[run.stepIdx];
    const ex = block.exercises[step.exIdx];
    return { big: step.reps, label: "Repeticiones", panel: [{ v: step.serie, l: "Serie" }, { v: ex.sequence.length, l: "Total" }] };
  }
  if (type === "fortime") {
    const step = run.steps[run.stepIdx];
    const ex = block.exercises[step.exIdx];
    return {
      big: ex.reps, label: "Repeticiones",
      timer: { v: fmtCountdown(run.elapsed), l: "Tiempo" },
      panel: [{ v: step.round, l: "Ronda" }, { v: block.rounds, l: "Total" }],
    };
  }
  if (type === "amrap") {
    const ex = block.exercises[run.stepIdx % block.exercises.length];
    const isTime = !ex.reps;
    return {
      big: isTime ? fmtCountdown(ex.timeSeconds) : ex.reps, label: isTime ? "Tiempo" : "Repeticiones",
      timer: { v: fmtCountdown(run.remaining), l: "Restante" },
      panel: [{ v: run.roundsCompleted, l: "Rondas" }, { v: `${(run.stepIdx % block.exercises.length) + 1}/${block.exercises.length}`, l: "Ejercicio" }],
    };
  }
  if (type === "emom") {
    const reps = block.repsInitial + block.repsIncrement * (run.minuteIdx - 1);
    return {
      big: fmtCountdown(run.secondsLeft), label: "Tiempo",
      panel: [{ v: reps, l: "Repeticiones" }, { v: run.minuteIdx - 1, l: "Min. completados" }],
    };
  }
  if (type === "cardio") {
    if (block.mode === "traditional") return { big: fmtCountdown(run.blockRemaining), label: "Tiempo restante" };
    const iv = block.intervals[run.intervalIdx];
    const isRestPhase = run.phase === "interval-rest";
    if (isRestPhase) return { big: fmtCountdown(run.phaseRemaining), label: "Descanso", timer: { v: fmtCountdown(run.blockRemaining), l: "Bloque" }, isRestPhase: true };
    if (iv.reps) return { big: iv.reps, label: "Repeticiones", timer: { v: fmtCountdown(run.blockRemaining), l: "Bloque" } };
    return { big: fmtCountdown(run.phaseRemaining), label: "Tiempo", timer: { v: fmtCountdown(run.blockRemaining), l: "Bloque" } };
  }
  return {};
}

function blockPrimary(block) {
  if (block.type === "rest") return { name: "Descanso entre secciones", img: block.img, meta: `${fmtCountdown(block.timeSeconds)}` };
  if (block.type === "emom") return { name: block.exercise.name, img: block.exercise.img, meta: `EMOM · ${block.minutesTotal} min` };
  if (block.type === "cardio" && block.mode === "traditional") return { name: block.exercise.name, img: block.exercise.img, meta: `Cardio · ${fmtCountdown(block.totalTimeSeconds)}` };
  if (block.type === "cardio") return { name: block.name, img: block.intervals[0].img, meta: `Cardio intervalos · ${fmtCountdown(block.totalTimeSeconds)}` };
  if (block.type === "amrap") return { name: block.name, img: block.exercises[0].img, meta: `AMRAP · ${fmtCountdown(block.totalTimeSeconds)}` };
  if (block.type === "fortime") return { name: block.name, img: block.exercises[0].img, meta: `${block.rounds} rondas · for time` };
  if (block.type === "stripset") return { name: block.exercises[0].name, img: block.exercises[0].img, meta: `${block.exercises[0].sequence.length} series · stripset` };
  return { name: block.exercises[0].name, img: block.exercises[0].img, meta: `${block.exercises.length > 1 ? block.exercises.length + " ejercicios · " : ""}${block.series} series` };
}

// Título en la cola: nombre del primer ejercicio + "+ N más".
function queueTitle(block) {
  const list = block.exercises || block.intervals || (block.exercise ? [block.exercise] : []);
  if (!list.length) return blockPrimary(block).name;
  const extra = list.length - 1;
  return extra > 0 ? `${list[0].name} + ${extra} más` : list[0].name;
}

function blockExpandList(block) {
  if (block.type === "cardio" && block.mode === "interval") return block.intervals.map((iv) => ({ name: iv.name, img: iv.img, meta: `${iv.workSeconds}s trabajo / ${iv.restSeconds}s desc.` }));
  if (block.exercises) return block.exercises.map((e) => ({ name: e.name, img: e.img, meta: e.reps ? `${e.reps} reps` : e.sequence ? e.sequence.join("-") : e.timeSeconds ? fmtCountdown(e.timeSeconds) : "Al fallo" }));
  return [];
}

function TrainerTabBar({ active, onChange, color }) {
  return (
    <div style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.1)", flexShrink: 0 }}>
      {PAUSE_TABS.map(t => (
        <button key={t.id} onClick={() => onChange(t.id)} style={{ flex: 1, padding: "10px 0", background: "none", border: "none", borderBottom: active === t.id ? `2px solid ${color}` : "2px solid transparent", color: active === t.id ? "#fff" : "rgba(255,255,255,.45)", fontFamily: "var(--font-body)", fontSize: 12, letterSpacing: ".04em", textTransform: "uppercase", cursor: "pointer" }}>{t.label}</button>
      ))}
    </div>
  );
}

function TrainerThumb({ img, size }) {
  return (
    <div style={{ width: size, height: size, borderRadius: 8, overflow: "hidden", background: "var(--ff-surface-2, #1a1a1a)", flexShrink: 0 }}>
      {img ? <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : null}
    </div>
  );
}

function QueueRestLine({ rest }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 0 12px 26px" }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--ff-section-rest, #6B7A8D)" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="9" /><polyline points="12 8 12 12 15 14" /></svg>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,.45)", lineHeight: 1.4 }}>Descanso · {fmtCountdown(rest.timeSeconds)} — viaja con este bloque</span>
    </div>
  );
}

function TrainerQueueRow({ block, rest, isExpanded, onToggleExpand, onPostpone, onDragStart, onDragOver, onDrop }) {
  const primary = blockPrimary(block);
  const primaryImg = primary.img;
  const expandList = blockExpandList(block);
  const canExpand = expandList.length > 1;
  return (
    <div draggable onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop} style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 0" }}>
        <span style={{ cursor: "grab", color: "rgba(255,255,255,.35)", display: "flex", flexShrink: 0 }} title="Arrastra para reordenar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="6" r="1.5" /><circle cx="15" cy="6" r="1.5" /><circle cx="9" cy="12" r="1.5" /><circle cx="15" cy="12" r="1.5" /><circle cx="9" cy="18" r="1.5" /><circle cx="15" cy="18" r="1.5" /></svg>
        </span>
        <div onClick={canExpand ? onToggleExpand : undefined} style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", gap: 10, cursor: canExpand ? "pointer" : "default" }}>
          <TrainerThumb img={primaryImg} size={52} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ marginBottom: 4 }}><SectionBadge type={block.type} /></div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "#fff", margin: 0, lineHeight: 1.3, overflowWrap: "anywhere", textWrap: "pretty" }}>{queueTitle(block)}</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,.45)", margin: "2px 0 0", textTransform: "uppercase", letterSpacing: ".03em" }}>{primary.meta}</p>
          </div>
          {canExpand && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="2" style={{ flexShrink: 0, transform: isExpanded ? "rotate(180deg)" : "none", transition: "transform .2s" }}><polyline points="6 9 12 15 18 9" /></svg>}
        </div>
        <button onClick={onPostpone} title="Posponer para el final de la cola" style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, padding: 0 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.65)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><polyline points="12 8 12 12 15 14" /></svg>
        </button>
      </div>
      {isExpanded && canExpand && (
        <div style={{ padding: "0 0 12px 26px", display: "flex", flexDirection: "column", gap: 10 }}>
          {expandList.map((it, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <TrainerThumb img={it.img} size={42} />
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="2" style={{ flexShrink: 0 }}><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,.7)", flex: 1, minWidth: 0, lineHeight: 1.4 }}>{it.name}</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,.4)", flexShrink: 0 }}>{it.meta}</span>
            </div>
          ))}
        </div>
      )}
      {rest && <QueueRestLine rest={rest} />}
    </div>
  );
}

function TrainerQueueTab({ queue, expandedId, onToggleExpand, onPostpone, onReorder }) {
  const dragIndex = React.useRef(null);
  if (queue.length === 0) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 10, padding: "36px 4px" }}>
        <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
        </div>
        <p style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "#fff", margin: 0 }}>No hay ejercicios disponibles</p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,.4)", margin: 0, lineHeight: 1.5, maxWidth: 240 }}>Ya completaste todos los bloques de esta rutina.</p>
      </div>
    );
  }
  // El descanso no es un elemento independiente: queda pegado al bloque que lo precede
  // y se mueve con él al reordenar. Un descanso al inicio de la cola pertenece al bloque en curso.
  const groups = [];
  let leadingRest = null;
  queue.forEach((b) => {
    if (b.type === "rest") {
      if (groups.length) groups[groups.length - 1].rest = b;
      else leadingRest = b;
      return;
    }
    groups.push({ block: b, rest: null });
  });
  const flatten = (gs) => [...(leadingRest ? [leadingRest.id] : []), ...gs.flatMap((g) => (g.rest ? [g.block.id, g.rest.id] : [g.block.id]))];
  const dropAt = (to) => {
    const from = dragIndex.current;
    dragIndex.current = null;
    if (from === null || from === to) return;
    const gs = groups.slice();
    const [moved] = gs.splice(from, 1);
    gs.splice(to, 0, moved);
    onReorder(flatten(gs));
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {leadingRest && <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingTop: 12 }}><QueueRestLine rest={leadingRest} /></div>}
      {groups.map((g, i) => (
        <TrainerQueueRow
          key={g.block.id}
          block={g.block}
          rest={g.rest}
          isExpanded={expandedId === g.block.id}
          onToggleExpand={() => onToggleExpand(expandedId === g.block.id ? null : g.block.id)}
          onPostpone={() => onPostpone(g.block.id)}
          onDragStart={() => { dragIndex.current = i; }}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => dropAt(i)}
        />
      ))}
    </div>
  );
}

// Instrucciones en formato resumido: claves cortas escritas para el entrenador.
// Sin claves autoradas, mostramos las 2 primeras instrucciones completas (nunca cortadas).
function TrainerInstructionsTab({ exercise, onWatchVideo }) {
  const ex = exercise || {};
  const authored = ex.cues || (window.FF_DATA.exerciseCues || {})[ex.name];
  const isCue = !!(authored && authored.length);
  const instructions = isCue ? authored.slice(0, 3) : (ex.instructions || []).slice(0, 2);
  const muscles = ex.muscles || [];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <p style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "#fff", margin: 0, textAlign: "center" }}>{ex.name}</p>
      {muscles.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
          {muscles.map((m) => (
            <span key={m} style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: ".06em", textTransform: "uppercase", color: "rgba(255,255,255,.6)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 999, padding: "3px 9px" }}>{m}</span>
          ))}
        </div>
      )}
      {instructions.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {instructions.map((step, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,.4)", marginTop: 7, flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: isCue ? 13 : 12.5, color: "rgba(255,255,255,.72)", lineHeight: isCue ? 1.45 : 1.4 }}>{step}</span>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,.4)", margin: 0, textAlign: "center", padding: "20px 0" }}>Sin instrucciones para este bloque.</p>
      )}
      <div style={{ marginTop: 4, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,.5)", margin: 0, textAlign: "center" }}>¿Aún tienes problemas? Ve el video explicativo</p>
        <button onClick={onWatchVideo} style={{ width: "100%", padding: 12, borderRadius: 10, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="#fff"><polygon points="6 4 20 12 6 20 6 4" /></svg>
          Ver video
        </button>
      </div>
    </div>
  );
}

function TrainerVideoScreen({ exercise, onClose }) {
  const ex = exercise || {};
  return (
    <div style={{ position: "absolute", inset: 0, background: "#000", zIndex: 50, display: "flex", flexDirection: "column" }} data-screen-label="Video explicativo">
      <div style={{ flex: 1, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {ex.videoUrl ? (
          <video key={ex.videoUrl} src={ex.videoUrl} poster={ex.img} controls playsInline style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} onEnded={onClose} />
        ) : (
          <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,.5)" }}>Video no disponible</span>
        )}
        <div style={{ position: "absolute", top: 14, left: 14, zIndex: 3 }}><CircleIconBtn kind="close" onClick={onClose} onMedia /></div>
        <div style={{ position: "absolute", top: 14, right: 14, display: "flex", alignItems: "center", gap: 6, background: "rgba(0,0,0,0.55)", borderRadius: 999, padding: "4px 10px", border: "1px solid rgba(255,255,255,0.15)" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2" /></svg>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 9, letterSpacing: ".06em", textTransform: "uppercase", color: "rgba(255,255,255,.7)" }}>Pantalla completa</span>
        </div>
      </div>
      <p style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "#fff", textAlign: "center", margin: 0, padding: "12px 20px 20px", background: "#000" }}>{ex.name}</p>
    </div>
  );
}

function TrainerPanelItem({ value, label }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0 22px" }}>
      <span style={{ fontFamily: "var(--font-display)", fontSize: 26, color: "#fff", lineHeight: 1 }}>{value}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 9, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,.4)", marginTop: 3 }}>{label}</span>
    </div>
  );
}

function TrainerCtrlBtn({ children, label, primary, danger, color, onClick }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <button
        onClick={onClick}
        style={{
          width: primary ? 56 : 44, height: primary ? 56 : 44, borderRadius: "50%",
          background: primary ? color : danger ? "rgba(255,50,0,0.12)" : "rgba(255,255,255,0.08)",
          border: `1px solid ${primary ? color : danger ? "rgba(255,50,0,0.25)" : "rgba(255,255,255,0.12)"}`,
          display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
        }}
      >{children}</button>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 9, textTransform: "uppercase", letterSpacing: ".04em", color: danger ? "rgba(255,92,92,.7)" : "rgba(255,255,255,.4)" }}>{label}</span>
    </div>
  );
}

function ConfirmDialog({ title, message, cancelLabel, confirmLabel, danger, onCancel, onConfirm }) {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 70, background: "rgba(0,0,0,0.65)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 300, background: "#161616", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 16, padding: 20, display: "flex", flexDirection: "column", gap: 14 }}>
        <p style={{ fontFamily: "var(--font-display)", fontSize: 15, color: "#fff", margin: 0 }}>{title}</p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,.6)", margin: 0, lineHeight: 1.5 }}>{message}</p>
        <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
          <button onClick={onCancel} style={{ flex: 1, padding: 12, borderRadius: 10, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 13, cursor: "pointer" }}>{cancelLabel}</button>
          <button onClick={onConfirm} style={{ flex: 1, padding: 12, borderRadius: 10, background: danger ? "rgba(255,50,0,0.15)" : "var(--ff-primary,#FF3200)", border: danger ? "1px solid rgba(255,50,0,0.35)" : "none", color: danger ? "var(--ff-error,#FF5C5C)" : "#fff", fontFamily: "var(--font-display)", fontSize: 13, cursor: "pointer" }}>{confirmLabel}</button>
        </div>
      </div>
    </div>
  );
}

function CountdownModal({ n, color, exerciseName }) {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 80, background: "rgba(0,0,0,0.72)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 260, background: "#161616", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 16, padding: "26px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.5)" }}>Prepárate</span>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 76, color, lineHeight: 1.1 }}>{n}</span>
        {exerciseName && <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,.55)", textAlign: "center" }}>{exerciseName}</span>}
      </div>
    </div>
  );
}

function InterRestOverlay({ seconds, nextName, onSkip }) {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 30, background: "rgba(10,10,10,0.86)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, padding: 24, textAlign: "center" }}>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ff-section-rest, #6B7A8D)" }}>Descanso entre ejercicios</span>
      <span style={{ fontFamily: "var(--font-display)", fontSize: 56, color: "#fff", lineHeight: 1 }}>{fmtCountdown(seconds)}</span>
      {nextName && <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,.5)", maxWidth: 220 }}>Sigue: {nextName}</span>}
      <button onClick={onSkip} style={{ marginTop: 6, padding: "8px 18px", borderRadius: 999, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontFamily: "var(--font-body)", fontSize: 12, cursor: "pointer" }}>Saltar descanso</button>
    </div>
  );
}

function TrainerScreen({ onExit, onFinish, initialBlockIndex = 0, initialPaused = false, initialPauseTab = "pausa", lockBlock = false, demoInterRest = false, holdPreroll = false }) {
  const blocks = window.FF_DATA.trainerBlocks;
  const [blockIdx, setBlockIdx] = React.useState(initialBlockIndex);
  const [paused, setPaused] = React.useState(initialPaused);
  const [pauseTab, setPauseTab] = React.useState(initialPauseTab === "pausa" ? "ejercicio" : initialPauseTab);
  const [sessionElapsed, setSessionElapsed] = React.useState(0);
  const [run, setRun] = React.useState(() => {
    const r = makeRun(blocks[initialBlockIndex]);
    return demoInterRest ? { ...r, phase: "rest", restRemaining: blocks[initialBlockIndex].restBetweenSeconds } : r;
  });
  const [queue, setQueue] = React.useState(() => blocks.slice(initialBlockIndex + 1));
  const [expandedBlockId, setExpandedBlockId] = React.useState(null);
  const [showVideo, setShowVideo] = React.useState(false);
  const [confirmExit, setConfirmExit] = React.useState(false);
  const [confirmStop, setConfirmStop] = React.useState(false);
  const [preroll, setPreroll] = React.useState(blocks[initialBlockIndex].type === "rest" || demoInterRest ? null : 3);
  const transitionLock = React.useRef(false);

  const block = blocks[blockIdx];

  // Consultar Cola o Instrucciones pausa el bloque; volver a "Ejercicio" no reanuda solo.
  const selectTab = (t) => {
    if (t !== "ejercicio") setPaused(true);
    setPauseTab(t);
  };

  const goToBlock = (i) => {
    if (lockBlock) { setRun(makeRun(blocks[blockIdx])); setPreroll(blocks[blockIdx].type === "rest" ? null : 3); return; }
    if (transitionLock.current) return;
    transitionLock.current = true;
    if (i >= blocks.length) { onFinish(); return; }
    setBlockIdx(i);
  };
  const nextBlock = () => goToBlock(blockIdx + 1);

  React.useEffect(() => {
    setRun(makeRun(block));
    setPreroll(block.type === "rest" ? null : 3);
    setQueue(blocks.slice(blockIdx + 1));
    transitionLock.current = false;
  }, [blockIdx]);

  // Global session clock — runs start to finish; only a user pause stops it.
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setSessionElapsed((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [paused]);

  // Per-block engine heartbeat — drives every timer/loop/auto-cut described per section type.
  React.useEffect(() => {
    if (paused || preroll === null || holdPreroll) return;
    const t = setInterval(() => setPreroll((n) => (n > 1 ? n - 1 : null)), 1000);
    return () => clearInterval(t);
  }, [paused, preroll === null]);

  React.useEffect(() => {
    if (paused || preroll !== null) return;
    const t = setInterval(() => setRun((prev) => {
      const next = tickRun(block, prev, nextBlock);
      if (demoInterRest && next.phase !== "rest") return { ...makeRun(block), phase: "rest", restRemaining: block.restBetweenSeconds };
      return next;
    }), 1000);
    return () => clearInterval(t);
  }, [paused, blockIdx, preroll === null]);

  // Posponer mueve el bloque al final junto con su descanso.
  const postponeBlock = (id) => setQueue((q) => {
    const i = q.findIndex((x) => x.id === id);
    if (i < 0) return q;
    const take = q[i + 1] && q[i + 1].type === "rest" ? 2 : 1;
    const copy = q.slice();
    const moved = copy.splice(i, take);
    return [...copy, ...moved];
  });
  const reorderQueue = (ids) => setQueue((q) => ids.map((id) => q.find((x) => x.id === id)).filter(Boolean));

  const color = (SECTION_TYPES[block.type] || SECTION_TYPES.cycle).color;
  const isSectionRest = block.type === "rest";
  const isInterRest = run.phase === "rest";
  const isResting = isSectionRest || isInterRest || run.phase === "interval-rest";

  const curInfo = currentExerciseInfo(block, run);

  const onSiguiente = () => {
    if (block.type === "cycle" || block.type === "stripset") setRun((r) => advanceStep(block, r, nextBlock));
    else if (block.type === "fortime") setRun((r) => { if (r.stepIdx >= r.steps.length - 1) { nextBlock(); return r; } return { ...r, stepIdx: r.stepIdx + 1 }; });
    else if (block.type === "amrap") setRun((r) => { const ni = r.stepIdx + 1; const wrapped = ni % block.exercises.length === 0; return { ...r, stepIdx: ni, roundsCompleted: wrapped ? r.roundsCompleted + 1 : r.roundsCompleted }; });
    else if (isSectionRest) nextBlock();
    else nextBlock();
  };
  const onAnterior = () => {
    if (block.type === "cycle" || block.type === "stripset") setRun((r) => (r.stepIdx > 0 ? startStepInRun(r, r.stepIdx - 1) : r));
    else if (block.type === "fortime") setRun((r) => (r.stepIdx > 0 ? { ...r, stepIdx: r.stepIdx - 1 } : r));
  };
  const anteriorEnabled = (block.type === "cycle" || block.type === "stripset") ? run.stepIdx > 0 : (block.type === "fortime" ? run.stepIdx > 0 : false);
  const siguienteLabel = (block.type === "cycle" || block.type === "stripset" || block.type === "fortime") ? "Siguiente" : (block.type === "amrap" ? "Ronda" : (isSectionRest ? "Saltar" : "Sección"));

  const prerollShown = holdPreroll ? 3 : preroll;
  const nextBlockPrimary = blockIdx + 1 < blocks.length ? blockPrimary(blocks[blockIdx + 1]) : null;
  const display = !isSectionRest ? getDisplay(block, run) : null;
  const numberColor = display && display.isRestPhase ? "var(--ff-section-rest, #6B7A8D)" : color;

  const pauseNow = () => { setPaused(true); setPauseTab("ejercicio"); };
  const resume = () => { setPaused(false); setPauseTab("ejercicio"); if (block.type !== "rest") setPreroll(3); };
  const askExit = () => setConfirmExit(true);
  const askStop = () => setConfirmStop(true);

  return (
    <div style={{ position: "relative", height: "100%", background: "#0a0a0a", display: "flex", flexDirection: "column", overflow: "hidden" }} data-screen-label="Entrenador">
      {/* Video */}
      <div style={{ position: "relative", width: "100%", paddingTop: "56.25%", background: "#111", overflow: "hidden", flexShrink: 0 }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${curInfo.img})`, backgroundSize: "cover", backgroundPosition: "center", filter: (isResting || paused) ? "saturate(.35) brightness(.55)" : "none", transition: "filter .3s" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,.45) 0%, transparent 35%, transparent 60%, rgba(0,0,0,.6) 100%)" }} />
        <button onClick={askExit} style={{ position: "absolute", top: 10, left: 6, width: 44, height: 44, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        {/* Global session clock — never resets, keeps running through rests and section changes */}
        <div style={{ position: "absolute", top: 14, left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: 6, background: "rgba(0,0,0,0.5)", borderRadius: 999, padding: "4px 10px" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="2"><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></svg>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,.85)" }}>{fmtClock(sessionElapsed)}</span>
        </div>
        {/* Block type badge */}
        <div style={{ position: "absolute", top: 14, right: 14, background: `color-mix(in srgb, ${color} 15%, transparent)`, borderRadius: 999, padding: "3px 9px", border: `1px solid color-mix(in srgb, ${color} 30%, transparent)` }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 9, letterSpacing: ".1em", textTransform: "uppercase", color }}>{(SECTION_TYPES[block.type] || SECTION_TYPES.cycle).label}</span>
        </div>
        {paused && (
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 13, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.85)" }}>En pausa</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
        {/* Tabs siempre visibles, también con el ejercicio en curso */}
        <TrainerTabBar active={pauseTab} onChange={selectTab} color={color} />

        <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column", minHeight: 0, padding: "14px 20px 16px", overflowY: pauseTab === "ejercicio" ? "hidden" : "auto" }}>
          {pauseTab === "ejercicio" && !paused && isInterRest && !isSectionRest && (
            <InterRestOverlay seconds={run.restRemaining} nextName={block.exercises[run.steps[run.stepIdx + 1].exIdx].name} onSkip={() => setRun((r) => startStepInRun(r, r.stepIdx + 1))} />
          )}

          {pauseTab === "ejercicio" && isSectionRest && (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, gap: 14, minHeight: 0 }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 15, color: "#fff", textAlign: "center", margin: 0 }}>Descanso entre secciones</p>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1, justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 60, color: "var(--ff-section-rest, #6B7A8D)", lineHeight: 1 }}>{fmtCountdown(run.remaining)}</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>Tiempo restante</span>
                {nextBlockPrimary && <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,.45)", textAlign: "center", margin: "12px 0 0" }}>Próximo: {nextBlockPrimary.name}</p>}
                {!paused && <button onClick={nextBlock} style={{ marginTop: 14, padding: "8px 18px", borderRadius: 999, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontFamily: "var(--font-body)", fontSize: 12, cursor: "pointer" }}>Saltar descanso</button>}
              </div>
            {paused ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Button variant="primary" onClick={resume}>Reanudar</Button>
                <button onClick={askStop} style={{ width: "100%", padding: 13, borderRadius: 10, background: "rgba(255,50,0,0.12)", border: "1px solid rgba(255,50,0,0.3)", color: "var(--ff-error)", fontFamily: "var(--font-display)", fontSize: 13, cursor: "pointer" }}>Finalizar entrenamiento</button>
              </div>
            ) : (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40 }}>
                  <TrainerCtrlBtn label="Pausar" primary color={color} onClick={pauseNow}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
                  </TrainerCtrlBtn>
                  <TrainerCtrlBtn label="Saltar" color={color} onClick={nextBlock}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><polygon points="5 4 15 12 5 20 5 4" /><line x1="19" y1="5" x2="19" y2="19" /></svg>
                  </TrainerCtrlBtn>
                </div>
            )}
            </div>
          )}

          {pauseTab === "ejercicio" && !isSectionRest && (
            <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: 14, minHeight: 0 }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 15, color: "#fff", lineHeight: 1.35, textAlign: "center", margin: 0 }}>{isInterRest ? "Descanso entre ejercicios" : curInfo.name}</p>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1, justifyContent: "center" }}>
                {isInterRest ? (
                  <>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 60, color: "var(--ff-section-rest, #6B7A8D)", lineHeight: 1 }}>{fmtCountdown(run.restRemaining)}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>Descanso</span>
                  </>
                ) : (
                  <>
                    {display.timer && (
                      <div style={{ display: "flex", alignItems: "baseline", gap: 7, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 999, padding: "5px 14px", marginBottom: 10 }}>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "#fff", lineHeight: 1 }}>{display.timer.v}</span>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 9, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,.45)" }}>{display.timer.l}</span>
                      </div>
                    )}
                    <span style={{ fontFamily: "var(--font-display)", fontSize: display.bigSize || 60, color: numberColor, lineHeight: 1, textShadow: paused ? "none" : `0 0 40px color-mix(in srgb, ${numberColor} 35%, transparent)` }}>{display.big}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>{display.label}</span>
                    {display.panel && (
                      <div style={{ display: "flex", alignItems: "center", alignSelf: "center", background: "rgba(255,255,255,0.05)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)", padding: "8px 0", marginTop: 10 }}>
                        {display.panel.map((p, i) => (
                          <React.Fragment key={i}>
                            {i > 0 && <div style={{ width: 1, height: 30, background: "rgba(255,255,255,0.1)" }} />}
                            <TrainerPanelItem value={p.v} label={p.l} />
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            {paused ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Button variant="primary" onClick={resume}>Reanudar</Button>
                <button onClick={askStop} style={{ width: "100%", padding: 13, borderRadius: 10, background: "rgba(255,50,0,0.12)", border: "1px solid rgba(255,50,0,0.3)", color: "var(--ff-error)", fontFamily: "var(--font-display)", fontSize: 13, cursor: "pointer" }}>Finalizar entrenamiento</button>
              </div>
            ) : (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <TrainerCtrlBtn label="Anterior" color={color} onClick={onAnterior}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={anteriorEnabled ? "#fff" : "rgba(255,255,255,.25)"} strokeWidth="2"><polygon points="19 20 9 12 19 4 19 20" /><line x1="5" y1="19" x2="5" y2="5" /></svg>
                  </TrainerCtrlBtn>
                  <TrainerCtrlBtn label="Pausar" primary color={color} onClick={pauseNow}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
                  </TrainerCtrlBtn>
                  <TrainerCtrlBtn label={siguienteLabel} color={color} onClick={onSiguiente}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><polygon points="5 4 15 12 5 20 5 4" /><line x1="19" y1="5" x2="19" y2="19" /></svg>
                  </TrainerCtrlBtn>
                  <TrainerCtrlBtn label="Sonido" color={color}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>
                  </TrainerCtrlBtn>
                </div>
            )}
            </div>
          )}

          {pauseTab === "cola" && (
            <TrainerQueueTab queue={queue} expandedId={expandedBlockId} onToggleExpand={setExpandedBlockId} onPostpone={postponeBlock} onReorder={reorderQueue} />
          )}
          {pauseTab === "instrucciones" && <TrainerInstructionsTab exercise={curInfo} onWatchVideo={() => setShowVideo(true)} />}
        </div>
      </div>
      {!paused && prerollShown !== null && <CountdownModal n={prerollShown} color={color} exerciseName={curInfo.name} />}
      {showVideo && <TrainerVideoScreen exercise={curInfo} onClose={() => setShowVideo(false)} />}
      {confirmExit && (
        <ConfirmDialog
          title="¿Salir del entrenador?"
          message="Perderás el progreso de esta sesión si sales ahora."
          cancelLabel="Cancelar" confirmLabel="Salir" danger
          onCancel={() => setConfirmExit(false)}
          onConfirm={onExit}
        />
      )}
      {confirmStop && (
        <ConfirmDialog
          title="¿Finalizar entrenamiento?"
          message="Verás el resumen con tu progreso hasta este punto."
          cancelLabel="Seguir entrenando" confirmLabel="Finalizar" danger
          onCancel={() => setConfirmStop(false)}
          onConfirm={onFinish}
        />
      )}
    </div>
  );
}

window.TrainerScreen = TrainerScreen;
// Alias propio: el bundle del design system también publica window.TrainerScreen y gana
// la resolución, así que el borrador monta el entrenador aprobado por este nombre.
window.FFApprovedTrainerScreen = TrainerScreen;

// ── TrainerImmersive.jsx ────────────────────────────────────────
// Reproductor inmersivo (P2 · aprobado 31 ago 2026): video 16:9 a sangre con fondo
// ambiental desenfocado, número héroe dentro de un anillo de progreso teñido por el
// color de la sección, barra de posición en la rutina sobre el transporte y cola por
// secciones. Convive con TrainerScreen hasta que se retire el entrenador con tabs.

// ── Catálogo del borrador ────────────────────────────────────────
// Propuesta de superficies claras: el fondo sigue en #0F0F0F y todo lo demás se construye
// con blanco translúcido encima. Al ser blanco y no gris opaco, cada capa se aclara sin
// ensuciarse y el rojo de marca sigue siendo el único color fuerte.
const LIGHT_SURFACES = {
  "--ff-surface": "rgba(255,255,255,0.07)",
  "--ff-surface-2": "rgba(255,255,255,0.12)",
  "--ff-border": "rgba(255,255,255,0.16)",
  "--ff-text-2": "rgba(255,255,255,0.72)",
  "--ff-text-3": "rgba(255,255,255,0.45)",
  "--ff-navbar": "rgba(255,255,255,0.05)",
};

function fmtClockR6(total) {
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const mm = String(m).padStart(2, "0");
  return h ? `${h}:${mm}:${String(s).padStart(2, "0")}` : `${mm}:${String(s).padStart(2, "0")}`;
}

function R6Icon({ size = 20, stroke = "var(--ff-text)", w = 2, children }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round">{children}</svg>;
}

function R6CtrlBtn({ primary, dim, onClick, children }) {
  const size = primary ? 60 : 46;
  return (
    <button onClick={onClick} style={{
      width: size, height: size, borderRadius: "50%", flexShrink: 0, cursor: "pointer", padding: 0,
      display: "flex", alignItems: "center", justifyContent: "center",
      background: primary ? "var(--ff-red)" : "var(--ff-surface)",
      border: primary ? "none" : "1px solid var(--ff-border)",
      opacity: dim ? 0.4 : 1,
    }}>{children}</button>
  );
}

function R6Thumb({ img, size = 44, dim }) {
  return (
    <div style={{ width: size, height: size, borderRadius: 10, overflow: "hidden", flexShrink: 0, background: "var(--ff-surface-2)" }}>
      {img ? <div style={{ width: "100%", height: "100%", backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center", filter: dim ? "saturate(.2) brightness(.9)" : "none" }} /> : null}
    </div>
  );
}

function R6QueueGroup({ group, status, open, onToggle, onDragStart, onDragOver, onDrop }) {
  const { block, rest } = group;
  const list = r6SectionExercises(block);
  const single = list.length === 1;
  const color = (SECTION_TYPES[block.type] || SECTION_TYPES.cycle).color;
  const done = status === "done";
  const current = status === "current";
  return (
    <div draggable onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop}
      style={{ background: "var(--ff-surface)", border: current ? "1.5px solid var(--ff-red)" : "1px solid var(--ff-border)", borderRadius: 14, opacity: done ? 0.55 : 1 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 12px" }}>
        <R6DragHandle />
        <R6Check done={done} />
        <R6Thumb img={single ? list[0].img : (list[0] || {}).img} dim={done} />
        <div onClick={single ? undefined : onToggle} style={{ flex: 1, minWidth: 0, cursor: single ? "default" : "pointer" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: color, flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ff-text-3)" }}>
              {current ? "En curso" : done ? "Completada" : "Pendiente"}
            </span>
          </div>
          <p style={{ fontFamily: "var(--font-display)", fontSize: 12.5, color: "var(--ff-text)", margin: "3px 0 0", lineHeight: 1.3, letterSpacing: "-.2px", overflowWrap: "anywhere" }}>
            {single ? list[0].name : block.name}
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ff-text-3)", margin: "2px 0 0" }}>
            {single ? (list[0].meta === r6SectionMeta(block).split(" · ")[1] ? r6SectionMeta(block) : `${r6SectionMeta(block)} · ${list[0].meta}`) : `${r6SectionMeta(block)} · ${list.length} ejercicios`}
          </p>
        </div>
        {single ? <R6SwapBtn /> : (
          <button onClick={onToggle} style={{ width: 44, height: 44, borderRadius: "50%", border: "1px solid var(--ff-border)", background: "var(--ff-surface)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
            <R6Icon size={15} stroke="var(--ff-text-2)"><polyline points="6 9 12 15 18 9" style={{ transformOrigin: "center", transform: open ? "rotate(180deg)" : "none" }} /></R6Icon>
          </button>
        )}
      </div>
      {open && !single && (
        <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid var(--ff-border)" }}>
          {list.map((it, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 12px 9px 42px", borderTop: i ? "1px solid var(--ff-border)" : "none" }}>
              <R6Thumb img={it.img} size={34} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text)", margin: 0, lineHeight: 1.3 }}>{it.name}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ff-text-3)", margin: "2px 0 0" }}>{it.meta}</p>
              </div>
              <R6SwapBtn />
            </div>
          ))}
        </div>
      )}
      {rest && (
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 12px 10px 42px", borderTop: "1px dashed var(--ff-border)" }}>
          <R6Icon size={13} stroke="var(--ff-section-rest, #6B7A8D)"><g><circle cx="12" cy="12" r="9" /><polyline points="12 8 12 12 15 14" /></g></R6Icon>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ff-text-3)" }}>Descanso {fmtCountdown(rest.timeSeconds)} · viaja con esta sección</span>
        </div>
      )}
    </div>
  );
}

function R6QueueSheet({ groups, currentIdx, closedIds, onToggleGroup, onClose, onReorder, finish, onFinish }) {
  const dragFrom = React.useRef(null);
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 40, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
      <div onClick={finish ? undefined : onClose} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
      <div style={{ position: "relative", maxHeight: "78%", display: "flex", flexDirection: "column", background: "var(--ff-surface)", borderRadius: "32px 32px 0 0", border: "1px solid var(--ff-border)", borderBottom: "none", overflow: "hidden" }}>
        {!finish && (
          <div onClick={onClose} style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 0 2px", cursor: "pointer", flexShrink: 0 }}>
            <span style={{ width: 38, height: 4, borderRadius: 2, background: "var(--ff-border)" }} />
          </div>
        )}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: finish ? "18px 18px 12px" : "8px 18px 12px", flexShrink: 0 }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--ff-text)", margin: 0, letterSpacing: "-.2px" }}>{finish ? "Rutina completa" : "Cola de la rutina"}</p>
          {!finish && (
            <button onClick={onClose} style={{ width: 44, height: 44, borderRadius: "50%", border: "1px solid var(--ff-border)", background: "var(--ff-surface-2)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <R6Icon size={16} stroke="var(--ff-text-2)"><polyline points="6 9 12 15 18 9" /></R6Icon>
            </button>
          )}
        </div>
        <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "0 16px 22px", display: "flex", flexDirection: "column", gap: 8, background: "var(--ff-bg)" }}>
          {groups.map((g, i) => (
            <R6QueueGroup key={g.id} group={g} status={finish ? "done" : g.idx < currentIdx ? "done" : g.idx === currentIdx ? "current" : "pending"}
              open={!closedIds.includes(g.id)} onToggle={() => onToggleGroup(g.id)}
              onDragStart={() => { dragFrom.current = i; }} onDragOver={(e) => e.preventDefault()}
              onDrop={() => { const from = dragFrom.current; dragFrom.current = null; if (from == null || from === i) return; const next = groups.slice(); const [m] = next.splice(from, 1); next.splice(i, 0, m); onReorder(next); }} />
          ))}
        </div>
        {finish && (
          <div style={{ flexShrink: 0, padding: "12px 16px 20px", borderTop: "1px solid var(--ff-border)", background: "var(--ff-surface)" }}>
            <button style={{ width: "100%", height: 48, borderRadius: 10, border: "none", background: "var(--ff-red)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 13, cursor: "pointer" }} onClick={onFinish}>Finalizar rutina</button>
          </div>
        )}
      </div>
    </div>
  );
}

function R6Countdown({ n, name }) {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 60, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 240, background: "var(--ff-surface)", border: "1px solid var(--ff-border)", borderRadius: 20, padding: "24px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ff-text-3)" }}>Prepárate</span>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 72, lineHeight: 1.1, color: "var(--ff-red)" }}>{n}</span>
        {name && <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-2)", textAlign: "center" }}>{name}</span>}
      </div>
    </div>
  );
}

function r6Steps(block) {
  if (block.type === "rest") return [{ rest: true, seconds: block.timeSeconds, ex: { img: block.img, name: "Descanso" } }];
  if (block.type === "cycle") {
    const out = [];
    for (let s = 1; s <= (block.series || 1); s++) (block.exercises || []).forEach((ex) => out.push({ ex, serie: s }));
    return out;
  }
  if (block.type === "stripset") {
    return (block.exercises || []).flatMap((ex) => (ex.sequence || [ex.reps]).map((reps, i) => ({ ex, reps, drop: i + 1, drops: (ex.sequence || []).length })));
  }
  if (block.type === "cardio" && block.mode === "interval") return (block.intervals || []).map((iv, i) => ({ ex: iv, seconds: iv.workSeconds, ivIdx: i }));
  if (block.exercises) return block.exercises.map((ex) => ({ ex }));
  if (block.exercise) return [{ ex: block.exercise, seconds: block.type === "cardio" ? block.totalTimeSeconds : null, reps: block.repsInitial }];
  return [];
}

// Valor héroe histórico (P1–P4): se conserva porque las variantes viejas del borrador lo usan.
function r6HeroLegacy(block, step) {
  const ex = step.ex || {};
  const secs = step.seconds ?? (ex.mode === "time" ? ex.timeSeconds : (!ex.reps && ex.timeSeconds ? ex.timeSeconds : null));
  if (secs) return { kind: "time", seconds: secs, label: "Tiempo" };
  const reps = step.reps ?? ex.reps;
  if (!reps) return { kind: "failure", label: "Hasta no poder más" };
  return { kind: "reps", value: String(reps), label: "Repeticiones" };
}

function r6SectionExercises(block) {
  if (block.type === "cardio" && block.mode === "interval") return (block.intervals || []).map((iv) => ({ name: iv.name, img: iv.img, meta: `${iv.workSeconds}s trabajo · ${iv.restSeconds}s descanso` }));
  if (block.exercises) return block.exercises.map((ex) => ({ name: ex.name, img: ex.img, meta: ex.sequence ? ex.sequence.join(" · ") + " reps" : ex.reps ? `${ex.reps} reps` : ex.timeSeconds ? fmtCountdown(ex.timeSeconds) : "Al fallo" }));
  if (block.exercise) return [{ name: block.exercise.name, img: block.exercise.img, meta: block.type === "emom" ? `${block.repsInitial} reps al minuto` : fmtCountdown(block.totalTimeSeconds || 0) }];
  return [];
}

function r6SectionMeta(block) {
  const label = (SECTION_TYPES[block.type] || SECTION_TYPES.cycle).label;
  if (block.type === "cycle") return `${label} · ${block.series} series`;
  if (block.type === "fortime") return `${label} · ${block.rounds} rondas`;
  if (block.type === "amrap") return `${label} · ${fmtCountdown(block.totalTimeSeconds)}`;
  if (block.type === "emom") return `${label} · ${block.minutesTotal} min`;
  if (block.type === "cardio") return `${label} · ${fmtCountdown(block.totalTimeSeconds || 0)}`;
  return label;
}

// Cada sección arrastra su descanso: el grupo es la unidad que se mueve.
function r6Groups(blocks) {
  const groups = [];
  blocks.forEach((b, i) => {
    if (b.type === "rest") { if (groups.length) groups[groups.length - 1].rest = b; return; }
    groups.push({ id: b.id, block: b, rest: null, idx: i });
  });
  return groups;
}

// Espejo de getDisplay() del reproductor aprobado: mismo héroe, misma etiqueta, mismo
// panel y mismo chip de cronómetro por tipo de sección. No inventar variantes aquí.
function r6ClockBase(block) {
  if (block.type === "fortime") return { secs: 138, up: true, l: "Tiempo" };
  if (block.type === "amrap") return { secs: Math.max(0, (block.totalTimeSeconds || 0) - 24), up: false, l: "Restante" };
  if (block.type === "cardio" && block.mode === "interval") return { secs: Math.max(0, (block.totalTimeSeconds || 0) - 24), up: false, l: "Bloque" };
  return null;
}

function r6Display(block, step, idx, total) {
  const ex = step.ex || {};
  if (block.type === "rest") return { kind: "time", seconds: block.timeSeconds, label: "Descanso" };
  if (block.type === "cycle") {
    const panel = [{ v: step.serie, l: "Serie" }, { v: block.series, l: "Total" }];
    if (ex.mode === "time" || (!ex.reps && ex.timeSeconds)) return { kind: "time", seconds: ex.timeSeconds, label: "Tiempo", panel };
    if (ex.mode === "failure" || !ex.reps) return { kind: "failure", label: "Hasta no poder más", panel };
    return { kind: "reps", value: String(ex.reps), label: "Repeticiones", panel };
  }
  if (block.type === "stripset") {
    return { kind: "reps", value: String(step.reps), label: "Repeticiones", panel: [{ v: step.drop, l: "Serie" }, { v: step.drops, l: "Total" }] };
  }
  if (block.type === "fortime") {
    return { kind: "reps", value: String(ex.reps), label: "Repeticiones", panel: [{ v: 1, l: "Ronda" }, { v: block.rounds, l: "Total" }] };
  }
  if (block.type === "amrap") {
    const isTime = !ex.reps;
    const panel = [{ v: 0, l: "Rondas" }, { v: `${idx + 1}/${total}`, l: "Ejercicio" }];
    return isTime
      ? { kind: "time", seconds: ex.timeSeconds, label: "Tiempo", panel }
      : { kind: "reps", value: String(ex.reps), label: "Repeticiones", panel };
  }
  if (block.type === "emom") {
    const reps = (block.repsInitial || 0);
    return { kind: "time", seconds: 60, label: "Tiempo", panel: [{ v: reps, l: "Repeticiones" }, { v: 0, l: "Min. completados" }] };
  }
  if (block.type === "cardio") {
    if (block.mode === "traditional") return { kind: "time", seconds: block.totalTimeSeconds, label: "Tiempo restante" };
    if (ex.reps) return { kind: "reps", value: String(ex.reps), label: "Repeticiones" };
    return { kind: "time", seconds: ex.workSeconds || step.seconds, label: "Tiempo" };
  }
  return { kind: "reps", value: String(ex.reps || 0), label: "Repeticiones" };
}

// ── P2 · Reproductor inmersivo ───────────────────────────────────
// Tres cambios frente al rediseño actual: el video pasa a sangre completa y deja de ser
// una franja; el número héroe vive dentro de un anillo que se vacía (o se llena por serie),
// así siempre hay algo en movimiento; y el color de la sección tiñe anillo y número, de
// modo que un Cycle no se ve igual que un AMRAP. Todo lo demás flota en blanco translúcido.
const R7_SHEET = {
  "--ff-bg": "#0F0F0F", "--ff-surface": "#1A1A1A", "--ff-surface-2": "#222222",
  "--ff-border": "#2A2A2A", "--ff-text": "#F0F0F0", "--ff-text-2": "#B5B5B5", "--ff-text-3": "#888888",
};

// El anillo se rige por la naturaleza de la sección, no por el paso:
// cycle / stripset / for time van por series (arcos que se llenan, aunque el
// ejercicio sea de tiempo); amrap, emom, cardio y descanso van por tiempo en
// decremento (el anillo se completa conforme baja). EMOM reinicia cada minuto.
function r7RingSpec(block, step, steps, sIdx, remaining, clockSecs) {
  const t = block.type;
  if (t === "cycle") return { mode: "seg", seg: { n: block.series || 1, i: step.serie || 1 } };
  if (t === "stripset") return { mode: "seg", seg: { n: step.drops || 1, i: step.drop || 1 } };
  if (t === "fortime") return { mode: "seg", seg: { n: block.rounds || 1, i: step.round || 1 } };

  const byTime = (total, left) => {
    if (!total) return { mode: "none" };
    return { mode: "time", progress: Math.min(1, Math.max(0, 1 - left / total)) };
  };
  if (t === "rest") return byTime(block.timeSeconds, remaining);
  if (t === "emom") return byTime(60, remaining);
  if (t === "amrap") return byTime(block.totalTimeSeconds, clockSecs);
  if (t === "cardio") return byTime(block.totalTimeSeconds, block.mode === "traditional" ? remaining : clockSecs);
  return { mode: "seg", seg: { n: steps.length || 1, i: sIdx + 1 } };
}

// Un solo anillo con dos modos: si el paso tiene tiempo se vacía; si es por repeticiones
// se parte en tantos arcos como series y se van llenando. En ambos casos significa avance.
function R7Ring({ size = 236, stroke = 5, color, mode, progress = 0, seg, children }) {
  const r = (size - stroke) / 2;
  const C = 2 * Math.PI * r;
  const gap = 7;
  const arcs = [];
  if (mode === "time") {
    arcs.push({ len: Math.max(0, C * progress), off: 0, on: true });
  } else if (mode === "seg") {
    const each = C / seg.n;
    for (let i = 0; i < seg.n; i++) arcs.push({ len: Math.max(2, each - gap), off: -i * each, on: i < seg.i, cur: i === seg.i - 1 });
  }
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ position: "absolute", inset: 0, transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth={stroke} />
        {arcs.map((a, i) => (
          <circle key={i} cx={size / 2} cy={size / 2} r={r} fill="none" strokeLinecap="round"
            stroke={a.on ? color : "transparent"} strokeWidth={stroke} opacity={a.cur ? 0.5 : 1}
            strokeDasharray={`${a.len} ${C - a.len}`} strokeDashoffset={a.off}
            style={{ transition: mode === "time" ? "stroke-dasharray .95s linear" : "none" }} />
        ))}
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>{children}</div>
    </div>
  );
}

function R7Stat({ value, label }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0 20px" }}>
      <span style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "#fff", lineHeight: 1 }}>{value}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 9, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginTop: 4 }}>{label}</span>
    </div>
  );
}

function TrainerImmersiveScreen({ blockIdx = 0, stepIdx = 0, queueOpen = false, paused = false, showPreroll = false, finishOpen = false, live = false, emomIntro = false, forceLast = false, onExit, onFinish }) {
  const blocks = window.FF_DATA.trainerBlocks || [];
  // EMOM: un solo ejercicio que se repite cada minuto. No hay pasos que saltar, así que
  // atrás/siguiente se retiran y en su lugar queda una acción explícita de finalizar sección.
  const isEmom = (blocks[blockIdx] || {}).type === "emom";
  const [intro, setIntro] = React.useState(() => emomIntro || (live && isEmom));
  const [bIdx] = React.useState(blockIdx);
  const [sIdx, setSIdx] = React.useState(stepIdx);
  const [isPaused, setPaused] = React.useState(paused);
  const [queue, setQueue] = React.useState(queueOpen || finishOpen);
  const [finished, setFinished] = React.useState(finishOpen);
  const [closedGroups, setClosedGroups] = React.useState([]);
  const [groups, setGroups] = React.useState(() => r6Groups(blocks));
  const [elapsed, setElapsed] = React.useState(724);
  const [preroll, setPreroll] = React.useState(showPreroll ? 3 : null);
  const [clockSecs, setClockSecs] = React.useState(() => { const c = r6ClockBase((window.FF_DATA.trainerBlocks || [])[blockIdx] || {}); return c ? c.secs : 0; });
  const touchY = React.useRef(null);

  const block = blocks[bIdx] || blocks[0];
  const steps = r6Steps(block);
  const step = steps[Math.min(sIdx, steps.length - 1)] || {};
  const hero = r6Display(block, step, sIdx, steps.length);
  // Los frames estáticos por tiempo arrancan a mitad de cuenta para que el anillo se vea avanzado.
  const seedRemaining = (h) => {
    const s = h.seconds || 0;
    if (live || !s) return s;
    return ["rest", "emom", "cardio"].indexOf(block.type) < 0 ? s : Math.round(s * 0.38);
  };
  const [remaining, setRemaining] = React.useState(() => seedRemaining(hero));
  const clockBase = block.type === "rest" ? null : r6ClockBase(block);
  const isLastStep = !blocks[bIdx + 1] && sIdx >= steps.length - 1;
  const finishNow = () => { setFinished(true); setQueue(true); };

  React.useEffect(() => { setRemaining(seedRemaining(hero)); }, [sIdx]);
  React.useEffect(() => {
    if (!live || isPaused || !clockBase) return;
    const t = setInterval(() => setClockSecs((s) => clockBase.up ? s + 1 : (s > 1 ? s - 1 : clockBase.secs)), 1000);
    return () => clearInterval(t);
  }, [isPaused]);
  React.useEffect(() => {
    if (!live || isPaused) return;
    const t = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [isPaused]);
  React.useEffect(() => {
    if (!live || isPaused || preroll === null || showPreroll) return;
    const t = setTimeout(() => setPreroll((n) => (n > 1 ? n - 1 : null)), 1000);
    return () => clearTimeout(t);
  }, [preroll, isPaused]);
  React.useEffect(() => {
    if (!live || isPaused || preroll !== null || hero.kind !== "time") return;
    const t = setInterval(() => setRemaining((r) => {
      if (r > 1) return r - 1;
      if (isLastStep) { finishNow(); return 0; }
      return hero.seconds || 0;
    }), 1000);
    return () => clearInterval(t);
  }, [isPaused, preroll, sIdx]);

  const goStep = (d) => {
    if (d > 0 && isLastStep) { finishNow(); return; }
    const n = sIdx + d;
    if (n < 0 || n >= steps.length) return;
    setSIdx(n);
  };

  const sec = SECTION_TYPES[block.type] || SECTION_TYPES.cycle;
  const color = block.type === "rest" ? "#6B7A8D" : sec.color;
  const heroValue = hero.kind === "time" ? fmtCountdown(remaining) : hero.kind === "reps" ? hero.value : "Al fallo";
  const ringSpec = r7RingSpec(block, step, steps, sIdx, remaining, clockSecs);
  const curImg = (step.ex || {}).img || block.img;
  const curName = block.type === "rest" ? "Descanso" : (step.ex || {}).name;
  const muscles = block.type === "rest" ? [] : ((step.ex || {}).muscles || []);
  const panel = hero.panel || null;
  const curGroupIdx = groups.findIndex((g) => g.idx === (block.type === "rest" ? bIdx - 1 : bIdx));
  const dimmed = isPaused || block.type === "rest";

  const nextUp = (() => {
    if (isLastStep) return { title: "Finalizar entrenamiento", sub: "Verás el resumen de tu rutina", finish: true };
    if (sIdx + 1 < steps.length) {
      const ns = steps[sIdx + 1];
      const nh = r6HeroLegacy(block, ns);
      if (block.restBetweenSeconds) return { title: `Descanso ${fmtCountdown(block.restBetweenSeconds)}`, sub: `Luego: ${ns.ex.name}`, img: ns.ex.img, rest: true };
      return { title: ns.ex.name, sub: nh.kind === "time" ? fmtCountdown(nh.seconds) : nh.kind === "reps" ? `${nh.value} reps` : "Al fallo", img: ns.ex.img };
    }
    const nb = blocks[bIdx + 1];
    if (!nb) return { title: "Última sección", sub: "Al terminar verás tu resumen" };
    if (nb.type === "rest") return { title: `Descanso ${fmtCountdown(nb.timeSeconds)}`, sub: "Entre secciones", img: nb.img, rest: true };
    const list = r6SectionExercises(nb);
    return { title: nb.name, sub: `${r6SectionMeta(nb)} · ${list.length} ejercicio${list.length > 1 ? "s" : ""}`, img: (list[0] || {}).img };
  })();

  return (
    <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", overflow: "hidden", background: "#0B0B0B", ...LIGHT_SURFACES }} data-screen-label="Reproductor inmersivo">
      {/* Los videos son 16:9: no se recortan. El plate respeta su proporción a todo el ancho
          y el mismo frame, escalado y desenfocado, llena el resto como fondo ambiental. */}
      <div style={{ position: "absolute", inset: -40, backgroundImage: `url(${curImg})`, backgroundSize: "cover", backgroundPosition: "center", filter: `blur(44px) saturate(${dimmed ? 0.15 : 0.7}) brightness(${dimmed ? 0.3 : 0.42})`, transform: "scale(1.15)" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 262, backgroundImage: `url(${curImg})`, backgroundSize: "cover", backgroundPosition: "center", filter: dimmed ? "saturate(.25) brightness(.5)" : "none", WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 72%, transparent 100%)", maskImage: "linear-gradient(to bottom, #000 0%, #000 72%, transparent 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(11,11,11,.72) 0%, rgba(11,11,11,.08) 18%, rgba(11,11,11,.22) 38%, rgba(11,11,11,.66) 58%, rgba(11,11,11,.92) 78%, #0B0B0B 100%)" }} />

      <div style={{ position: "relative", flex: 1, minHeight: 0, display: "flex", flexDirection: "column", padding: "0 18px 22px" }}>
        {/* El video queda limpio: encima solo vive el cierre */}
        <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: 30, flexShrink: 0 }}>
          <button title="Salir del entrenador" onClick={onExit} style={{ width: 44, height: 44, marginRight: -10, borderRadius: "50%", background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <R6Icon size={18} stroke="#fff" w={2.2}><g><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></g></R6Icon>
          </button>
        </div>

        {/* Héroe dentro del anillo */}
        <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 18, paddingTop: 54 }}>
          <R7Ring color={color} mode={ringSpec.mode} progress={ringSpec.progress} seg={ringSpec.seg}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: hero.kind === "failure" ? 30 : hero.kind === "time" ? 48 : 62, lineHeight: 1, color: "#fff", letterSpacing: "-1px" }}>{heroValue}</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: color, marginTop: 6 }}>
              {hero.kind === "failure" ? "Hasta no poder más" : hero.label}
            </span>
            {clockBase && (
              <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,.55)", marginTop: 8 }}>{clockBase.l} {fmtCountdown(clockSecs)}</span>
            )}
          </R7Ring>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, width: "100%" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "#fff", margin: 0, lineHeight: 1.35, textAlign: "center", letterSpacing: "-.3px", textWrap: "pretty" }}>{curName}</p>
            {muscles.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6 }}>
                {muscles.map((m) => (
                  <span key={m} style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 500, letterSpacing: ".06em", textTransform: "uppercase", color: "rgba(255,255,255,.62)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 999, padding: "3px 9px", lineHeight: 1.4 }}>{m}</span>
                ))}
              </div>
            )}
            {panel && (
              <div style={{ display: "flex", alignItems: "center", marginTop: 2 }}>
                <R7Stat value={panel[0].v} label={panel[0].l} />
                <div style={{ width: 1, height: 26, background: "rgba(255,255,255,.18)" }} />
                <R7Stat value={panel[1].v} label={panel[1].l} />
              </div>
            )}
            {isEmom && (
              <p style={{ fontFamily: "var(--font-body)", fontSize: 11.5, lineHeight: 1.45, color: "rgba(255,255,255,.62)", textAlign: "center", margin: "4px 0 0", maxWidth: 268, textWrap: "pretty" }}>Cuando ya no completes las reps dentro del minuto, finaliza la sección.</p>
            )}
          </div>
        </div>

        {/* Dónde vas en la rutina, pegado a los controles que te mueven por ella */}
        <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 18, flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, minWidth: 0 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: color, flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.72)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {block.type === "rest" ? "Descanso" : sec.label} · {Math.min(curGroupIdx + 1, groups.length)} de {groups.length}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
              <R6Icon size={12} stroke="rgba(255,255,255,.5)"><g><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></g></R6Icon>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,.75)" }}>{fmtClockR6(elapsed)}</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 3 }}>
            {groups.map((g, i) => (
              <span key={g.id} style={{ flex: 1, height: 3, borderRadius: 2, background: i < curGroupIdx ? "rgba(255,255,255,.85)" : i === curGroupIdx ? color : "rgba(255,255,255,.18)" }} />
            ))}
          </div>
        </div>

        {isEmom ? (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 6px", marginBottom: 16, flexShrink: 0 }}>
            <R6CtrlBtn>
              <R6Icon size={17} stroke="#fff"><g><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></g></R6Icon>
            </R6CtrlBtn>
            <R6CtrlBtn primary onClick={() => setPaused((p) => !p)}>
              {isPaused ? <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><polygon points="7 4 20 12 7 20" /></svg>
                : <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" /></svg>}
            </R6CtrlBtn>
            <button onClick={finishNow} title="Finalizar sección" style={{ width: 46, height: 46, borderRadius: "50%", background: "rgba(255,50,0,.18)", border: "1px solid rgba(255,50,0,.6)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <R6Icon size={17} stroke="var(--ff-red)" w={2.4}><polyline points="20 6 9 17 4 12" /></R6Icon>
            </button>
          </div>
        ) : (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 6px", marginBottom: 16, flexShrink: 0 }}>
          <R6CtrlBtn dim={sIdx === 0} onClick={() => goStep(-1)}>
            <R6Icon size={17} stroke="#fff"><g><polygon points="19 20 9 12 19 4 19 20" /><line x1="5" y1="19" x2="5" y2="5" /></g></R6Icon>
          </R6CtrlBtn>
          <R6CtrlBtn primary onClick={() => setPaused((p) => !p)}>
            {isPaused ? <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><polygon points="7 4 20 12 7 20" /></svg>
              : <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" /></svg>}
          </R6CtrlBtn>
          <R6CtrlBtn onClick={() => goStep(1)}>
            <R6Icon size={17} stroke="#fff"><g><polygon points="5 4 15 12 5 20 5 4" /><line x1="19" y1="5" x2="19" y2="19" /></g></R6Icon>
          </R6CtrlBtn>
          <R6CtrlBtn>
            <R6Icon size={17} stroke="#fff"><g><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></g></R6Icon>
          </R6CtrlBtn>
        </div>
        )}

        {/* A continuación · más delgado, ya no compite con el anillo */}
        <button onClick={() => (isLastStep ? finishNow() : setQueue(true))}
          onTouchStart={(e) => { touchY.current = e.touches[0].clientY; }}
          onTouchEnd={(e) => { if (touchY.current !== null && touchY.current - e.changedTouches[0].clientY > 24) (isLastStep ? finishNow() : setQueue(true)); touchY.current = null; }}
          style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", textAlign: "left", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 14, padding: "8px 10px", cursor: "pointer", flexShrink: 0 }}>
          {nextUp.img ? <R6Thumb img={nextUp.img} size={34} dim={nextUp.rest} /> : (
            <span style={{ width: 34, height: 34, borderRadius: 9, background: nextUp.finish ? "var(--ff-red)" : "rgba(255,255,255,.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <R6Icon size={15} stroke="#fff"><polyline points="20 6 9 17 4 12" /></R6Icon>
            </span>
          )}
          <div style={{ flex: 1, minWidth: 0 }}>
            <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 9, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.5)" }}>{nextUp.finish ? "Al terminar" : "A continuación"}</span>
            <span style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 12, color: "#fff", margin: "2px 0 0", letterSpacing: "-.2px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{nextUp.title}</span>
          </div>
          <span style={{ display: "flex", alignItems: "center", flexShrink: 0, paddingRight: 2 }}>
            <R6Icon size={17} stroke="rgba(255,255,255,.6)"><polyline points="18 15 12 9 6 15" /></R6Icon>
          </span>
        </button>
      </div>

      {queue && (
        <div style={{ position: "absolute", inset: 0, zIndex: 40, ...R7_SHEET }}>
          <R6QueueSheet groups={groups} currentIdx={block.type === "rest" ? bIdx - 1 : bIdx} closedIds={finished ? [] : closedGroups}
            onToggleGroup={(id) => setClosedGroups((c) => c.includes(id) ? c.filter((x) => x !== id) : [...c, id])}
            onClose={() => { setQueue(false); setFinished(false); }} onReorder={setGroups} finish={finished} onFinish={onFinish} />
        </div>
      )}
      {preroll !== null && <div style={{ position: "absolute", inset: 0, zIndex: 60, ...R7_SHEET }}><R6Countdown n={showPreroll ? 3 : preroll} name={curName} /></div>}
      {intro && (
        <div style={{ position: "absolute", inset: 0, zIndex: 70, display: "flex", alignItems: "center", justifyContent: "center", padding: 22, background: "rgba(0,0,0,.72)", ...R7_SHEET }}>
          <div style={{ width: "100%", background: "#1A1A1A", border: "1px solid #2A2A2A", borderRadius: 16, padding: "20px 18px 18px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 12 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: color }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: color }}>EMOM · {block.minutesTotal} min</span>
            </div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "#fff", margin: "0 0 10px", letterSpacing: "-.3px", lineHeight: 1.35 }}>Cómo funciona esta sección</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "rgba(255,255,255,.75)", lineHeight: 1.6, margin: "0 0 14px", textWrap: "pretty" }}>
              Cada minuto en punto haces las repeticiones indicadas; el tiempo que te sobre dentro del minuto es tu descanso.
            </p>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 12, padding: "11px 12px", marginBottom: 16 }}>
              <span style={{ width: 28, height: 28, borderRadius: "50%", flexShrink: 0, background: "rgba(255,50,0,.18)", border: "1px solid rgba(255,50,0,.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <R6Icon size={13} stroke="var(--ff-red)" w={2.4}><polyline points="20 6 9 17 4 12" /></R6Icon>
              </span>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,.75)", lineHeight: 1.55, margin: 0, textWrap: "pretty" }}>
                {!forceLast && blocks[bIdx + 1]
                  ? "Cuando ya no completes las reps del minuto, toca este botón: cierras esta sección y pasas a la siguiente. Tu rutina continúa."
                  : "Cuando ya no completes las reps del minuto, toca este botón: es la última sección, tu rutina finalizaría."}
              </p>
            </div>
            <button onClick={() => setIntro(false)} style={{ width: "100%", height: 48, borderRadius: 10, border: "none", background: "var(--ff-red)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 13, letterSpacing: "-.2px", cursor: "pointer" }}>Comenzar sección</button>
          </div>
        </div>
      )}
    </div>
  );
}
function R6DragHandle() {
  return (
    <span style={{ display: "flex", flexShrink: 0, cursor: "grab", color: "var(--ff-text-3)" }} title="Arrastra para reordenar">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="6" r="1.4" /><circle cx="15" cy="6" r="1.4" /><circle cx="9" cy="12" r="1.4" /><circle cx="15" cy="12" r="1.4" /><circle cx="9" cy="18" r="1.4" /><circle cx="15" cy="18" r="1.4" /></svg>
    </span>
  );
}

function R6Check({ done }) {
  return done ? (
    <span style={{ width: 20, height: 20, borderRadius: "50%", background: "var(--ff-red)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <R6Icon size={12} stroke="#fff" w={3}><polyline points="20 6 9 17 4 12" /></R6Icon>
    </span>
  ) : (
    <span style={{ width: 20, height: 20, borderRadius: "50%", border: "1.5px solid var(--ff-border)", flexShrink: 0 }} />
  );
}

function R6SwapBtn({ onClick }) {
  return (
    <button onClick={onClick} title="Cambiar ejercicio" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: "50%", border: "1px solid var(--ff-border)", background: "var(--ff-surface)", cursor: "pointer", flexShrink: 0 }}>
      <R6Icon size={15} stroke="var(--ff-text-2)"><g><polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></g></R6Icon>
    </button>
  );
}

window.TrainerImmersiveScreen = TrainerImmersiveScreen;

// ── Summary.jsx ─────────────────────────────────────────────────
// FitFighters mobile — Workout summary.

function StatCard({ label, value, sub }) {
  return (
    <div style={{ background: "var(--ff-surface)", borderRadius: 12, padding: 14, border: "1px solid var(--ff-border)" }}>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ff-text-3)", margin: "0 0 6px" }}>{label}</p>
      <p style={{ fontFamily: "var(--font-display)", fontSize: 26, color: "var(--ff-text)", margin: 0 }}>{value}</p>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ff-text-3)", margin: "2px 0 0" }}>{sub}</p>
    </div>
  );
}

function SummaryScreen({ onHome, onMilestone }) {
  const s = window.FF_DATA.summary;
  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)", ...APP_LIGHT_BG, ...APP_LIGHT }} data-screen-label="Resumen">
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 110 }}>
      {/* Hero */}
      <div style={{ position: "relative", height: 190, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,50,0,.12) 0%, rgba(255,154,60,.08) 55%, rgba(46,207,122,.07) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(15,15,15,.2) 0%, var(--ff-bg) 100%)" }} />
        <div style={{ position: "absolute", top: 14, left: 14, zIndex: 3 }}><CircleIconBtn kind="back" onClick={onHome} /></div>
        <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ff-text-2)", margin: "0 0 4px" }}>{s.program}</p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--ff-text)", margin: 0 }}>{s.routine}</h1>
        </div>
      </div>

      <div style={{ padding: "8px 20px 0", display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Completion */}
        <div style={{ textAlign: "center", padding: "12px 0 0" }}>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 60, height: 60, borderRadius: "50%", background: "var(--ff-primary-container)", border: "2px solid var(--ff-red)", marginBottom: 12 }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--ff-red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--ff-red)", margin: "0 0 2px" }}>Rutina completada</p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ff-text-3)", margin: 0 }}>¡Excelente trabajo, sigue así!</p>
        </div>

        {/* Total time */}
        <div style={{ background: "var(--ff-surface)", borderRadius: 16, padding: 20, border: "1px solid var(--ff-border)" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ff-text-3)", margin: "0 0 6px" }}>Tiempo total</p>
          <p style={{ fontFamily: "var(--font-display)", fontSize: 38, color: "var(--ff-text)", margin: 0 }}>{s.totalTime}</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <StatCard label="Ejercicios" value={s.exercises} sub="realizados" />
          <StatCard label="Secciones" value={s.sectionsCount} sub="completadas" />
        </div>

        <p style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ff-text-3)", margin: "4px 0 0" }}>Detalle por sección</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {s.rows.map((r, i) => {
            return (
              <div key={i} style={{ background: "var(--ff-surface)", borderRadius: 12, padding: "14px 16px", border: "1px solid var(--ff-border)", display: "flex", alignItems: "center", gap: 12 }}>
                <SectionBadge type={r.type} showLabel={false} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 10, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--ff-text-2)", margin: "0 0 2px" }}>{SECTION_TYPES[r.type].label}</p>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--ff-text)", margin: 0 }}>{r.name}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: 16, margin: 0, color: r.muted ? "var(--ff-text-3)" : "var(--ff-text)" }}>
                    {r.value}{r.unit ? <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-3)", fontWeight: 400 }}> {r.unit}</span> : null}
                  </p>
                  {r.sub ? <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ff-text-3)", margin: "1px 0 0" }}>{r.sub}</p> : null}
                </div>
              </div>
            );
          })}
        </div>

        <button onClick={onMilestone} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ff-red-light)", padding: "4px 0 20px", textAlign: "center" }}>
          Ver logro desbloqueado
        </button>
      </div>
      </div>

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "12px 20px 28px", background: "linear-gradient(to top, var(--ff-bg) 75%, transparent)" }}>
        <Button variant="primary" onClick={onHome}>Volver al inicio</Button>
      </div>
    </div>
  );
}

window.SummaryScreen = SummaryScreen;

// ── EditProfile.jsx ─────────────────────────────────────────────
// FitFighters mobile — Edit Profile screen.

function EPFieldBlock({ label, children, disabled }) {
  return (
    <div style={{ background: "var(--ff-surface)", borderRadius: 12, border: "1px solid var(--ff-border)", padding: "12px 14px", opacity: disabled ? 0.5 : 1 }}>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ff-text-3)", margin: "0 0 4px" }}>{label}</p>
      {children}
    </div>
  );
}

function EPFieldRow({ label, value, onClick }) {
  return (
    <div onClick={onClick} style={{ background: "var(--ff-surface)", borderRadius: 12, border: "1px solid var(--ff-border)", padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: onClick ? "pointer" : "default" }}>
      <div>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ff-text-3)", margin: "0 0 4px" }}>{label}</p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 500, color: "var(--ff-text)", margin: 0 }}>{value}</p>
      </div>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ff-text-3)" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
    </div>
  );
}

function EditProfileScreen({ onBack }) {
  const [scrolled, onScroll] = useBarScroll();
  const [name, setName] = React.useState("Eduardo");
  const [lastName, setLastName] = React.useState("García");
  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)", ...APP_LIGHT_BG, ...APP_LIGHT }} data-screen-label="Editar perfil">
      <FloatingTopBar title="Editar perfil" onBack={onBack} scrolled={scrolled} />

      <div onScroll={onScroll} style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "56px 16px 24px" }}>
        {/* Avatar */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "24px 0 28px" }}>
          <div style={{ position: "relative" }}>
            <div style={{ width: 88, height: 88, borderRadius: "50%", background: "var(--ff-surface-2)", border: "2px solid var(--ff-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ff-text-2)" }}>
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></svg>
            </div>
            <button style={{ position: "absolute", bottom: 0, right: 0, width: 28, height: 28, background: "var(--ff-red)", borderRadius: "50%", border: "2px solid var(--ff-bg)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 0 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
            </button>
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-3)", margin: "10px 0 0" }}>Toca para cambiar foto</p>
        </div>

        {/* Fields */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <WhiteField label="Nombre" value={name} onChange={setName} />
            <WhiteField label="Apellido" value={lastName} onChange={setLastName} />
          </div>

          <div style={{ opacity: 0.55, pointerEvents: "none" }}>
            <WhiteField label="Correo electrónico" value="eduardo@gmail.com" />
          </div>

          <EPFieldRow label="Sexo" value="Masculino" onClick={() => {}} />
          <EPFieldRow label="Fecha de nacimiento" value="15 de febrero de 2008" onClick={() => {}} />

          <div style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "4px 2px" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ff-text-3)" strokeWidth="2" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-3)", lineHeight: 1.55, margin: 0 }}>El correo no se puede cambiar desde la app. Visita fitfighters.com para modificarlo.</p>
          </div>
        </div>
      </div>
      <div style={{ flexShrink: 0, padding: "12px 16px 28px", background: "linear-gradient(to top, var(--ff-bg) 75%, transparent)" }}>
        <Button variant="primary" onClick={onBack}>Guardar cambios</Button>
      </div>
    </div>
  );
}

window.EditProfileScreen = EditProfileScreen;

// ── ChangePassword.jsx ──────────────────────────────────────────
// FitFighters mobile — Change Password screen.

function ChangePasswordScreen({ onBack, initialCurrent = "", initialNext = "", initialConfirm = "" }) {
  const [scrolled, onScroll] = useBarScroll();
  const [current, setCurrent] = React.useState(initialCurrent);
  const [next, setNext] = React.useState(initialNext);
  const [confirm, setConfirm] = React.useState(initialConfirm);

  const canSave = current.length > 0 && next.length >= 8 && next === confirm;
  const mismatch = confirm.length > 0 && next !== confirm;

  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)", ...APP_LIGHT_BG, ...APP_LIGHT }} data-screen-label="Cambiar contraseña">
      <FloatingTopBar title="Cambiar contraseña" onBack={onBack} scrolled={scrolled} />

      <div onScroll={onScroll} style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "56px 16px 110px" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ff-text-3)", lineHeight: 1.6, padding: "18px 0 24px" }}>
          Ingresa tu contraseña actual y luego elige una nueva. Usa al menos 8 caracteres.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <WhiteField label="Contraseña actual" value={current} onChange={setCurrent} password />

          <div style={{ height: 6 }} />

          <WhiteField label="Nueva contraseña" value={next} onChange={setNext} password />
          <WhiteField
            label="Confirmar nueva contraseña"
            value={confirm}
            onChange={setConfirm}
            password
            error={mismatch}
            supportingText={mismatch ? "Las contraseñas no coinciden" : ""}
          />
        </div>
      </div>

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "16px 16px 28px", background: "linear-gradient(to top, var(--ff-bg) 75%, transparent)" }}>
        <Button variant="primary" disabled={!canSave} onClick={onBack}>
          Guardar contraseña
        </Button>
      </div>
    </div>
  );
}

window.ChangePasswordScreen = ChangePasswordScreen;

// ── ChangeProgram.jsx ───────────────────────────────────────────
// FitFighters mobile — Change Program screen (list view + program detail sub-view).

const DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// ── Program detail sub-view ────────────────────────────────────────────────────
function ProgramDetailView({ program, onBack, onConfirm, plan = "subscribed" }) {
  const isFree = plan === "free";
  const [level, setLevel] = React.useState(isFree ? 0 : 1);
  const [days, setDays] = React.useState(new Set(["Lunes", "Miércoles", "Viernes"]));

  const unlockedLevels = isFree ? [0] : Array.from({ length: program.levels }, (_, i) => i + 1);
  const lockedLevels = isFree ? Array.from({ length: program.levels }, (_, i) => i + 1) : [];

  const toggleDay = (d) => {
    const s = new Set(days);
    s.has(d) ? s.delete(d) : s.add(d);
    setDays(s);
  };

  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)", ...APP_LIGHT_BG, ...APP_LIGHT }} data-screen-label="Detalle de plan">
      {/* Video thumbnail */}
      <div style={{ position: "relative", width: "100%", paddingTop: "56.25%", background: "var(--ff-surface-2)", flexShrink: 0 }}>
        <img src={program.img} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} onError={e => { e.target.style.display = "none"; }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.5) 0%, transparent 50%)" }} />
        <div style={{ position: "absolute", top: 14, left: 14, zIndex: 3 }}><CircleIconBtn kind="back" onClick={onBack} onMedia /></div>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 52, height: 52, background: "rgba(255,50,0,.9)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid rgba(255,255,255,.2)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3" /></svg>
        </div>
        <span style={{ position: "absolute", bottom: 10, left: 14, fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,.7)", letterSpacing: ".06em" }}>Video explicativo</span>
      </div>

      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "16px 16px 100px" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--ff-text)", margin: "0 0 6px", lineHeight: 1.3 }}>{program.name}</h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-3)", margin: "0 0 12px" }}>{program.levels} niveles disponibles</p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ff-text-2)", lineHeight: 1.65, margin: "0 0 24px" }}>{program.desc}</p>

        <p style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ff-text-3)", margin: "0 0 10px" }}>Elige un nivel</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(44px, 1fr))", gap: 8, marginBottom: isFree ? 10 : 24 }}>
          {unlockedLevels.map(l => (
            <button key={l} onClick={() => setLevel(l)} style={{ padding: "10px 0", borderRadius: 10, background: "var(--ff-surface)", border: level === l ? "1.5px solid var(--ff-red)" : "1px solid var(--ff-border)", color: level === l ? "var(--ff-red-light)" : "var(--ff-text-2)", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: level === l ? 600 : 500, cursor: "pointer" }}>{l}</button>
          ))}
          {lockedLevels.map(l => (
            <button key={l} disabled style={{ padding: "10px 0", borderRadius: 10, border: "1px solid var(--ff-border)", background: "var(--ff-surface)", color: "var(--ff-text-3)", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500, cursor: "not-allowed", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, opacity: 0.55 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              {l}
            </button>
          ))}
        </div>
        {isFree ? (
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(80,130,220,.08)", border: "1px solid rgba(80,130,220,.25)", borderRadius: 12, padding: "10px 12px", marginBottom: 24 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5082DC" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-2)", margin: 0, lineHeight: 1.4 }}>Con el plan free solo tienes acceso al Nivel 0. Actualiza tu suscripción para desbloquear el resto.</p>
          </div>
        ) : null}

        <p style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ff-text-3)", margin: "0 0 10px" }}>Días de entrenamiento</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {DAYS.map(d => (
            <O2Choice key={d} selected={days.has(d)} onClick={() => toggleDay(d)} height={48}>{d}</O2Choice>
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "12px 16px 28px", background: "linear-gradient(to top, var(--ff-bg) 70%, transparent)" }}>
        <Button variant="primary" disabled={days.size === 0} onClick={onConfirm}>Cargar programa</Button>
      </div>
    </div>
  );
}

// ── Change training days sub-view + scope confirm dialog ──────────────────────
function ChangeDaysView({ onBack, onSave }) {
  const [scrolled, onScroll] = useBarScroll();
  const [days, setDays] = React.useState(new Set(["Lunes", "Miércoles", "Viernes"]));
  const toggleDay = (d) => {
    const s = new Set(days);
    s.has(d) ? s.delete(d) : s.add(d);
    setDays(s);
  };
  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)", ...APP_LIGHT_BG, ...APP_LIGHT }} data-screen-label="Cambiar días de entrenamiento">
      <FloatingTopBar title="Días de entrenamiento" onBack={onBack} scrolled={scrolled} />
      <div onScroll={onScroll} style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "64px 16px 100px" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ff-text-2)", lineHeight: 1.5, margin: "0 0 20px" }}>Elige los días en los que quieres entrenar. Puedes cambiarlos cuando quieras.</p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ff-text-3)", margin: "0 0 10px" }}>Días de entrenamiento</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {DAYS.map(d => (
            <O2Choice key={d} selected={days.has(d)} onClick={() => toggleDay(d)} height={48}>{d}</O2Choice>
          ))}
        </div>
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "12px 16px 28px", background: "linear-gradient(to top, var(--ff-bg) 70%, transparent)" }}>
        <Button variant="primary" disabled={days.size === 0} onClick={onSave}>Guardar cambios</Button>
      </div>
    </div>
  );
}

function ScopeDialog({ onPick, onDismiss }) {
  return (
    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.35)", display: "flex", alignItems: "flex-end", zIndex: 20, ...APP_LIGHT }} onClick={onDismiss}>
      <div onClick={e => e.stopPropagation()} style={{ width: "100%", background: "var(--ff-surface)", borderTop: "1px solid var(--ff-border)", borderRadius: "20px 20px 0 0", padding: "22px 16px 28px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ width: 36, height: 4, borderRadius: 2, background: "var(--ff-border)", margin: "0 auto 4px" }} />
        <div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 17, color: "var(--ff-text)", margin: "0 0 6px" }}>¿Cuándo aplicamos el cambio?</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ff-text-2)", lineHeight: 1.5, margin: 0 }}>Puedes aplicar tus nuevos días solo a esta semana, o dejarlos como tu rutina fija de ahora en adelante.</p>
        </div>
        <button onClick={() => onPick("week")} style={{ width: "100%", padding: "14px 16px", borderRadius: 12, border: "1px solid var(--ff-border)", background: "var(--ff-surface-2)", color: "var(--ff-text)", fontFamily: "var(--font-display)", fontSize: 14, cursor: "pointer", textAlign: "left" }}>
          Solo esta semana
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-3)", fontWeight: 400, marginTop: 4 }}>La próxima semana vuelve a tus días habituales.</div>
        </button>
        <button onClick={() => onPick("forever")} style={{ width: "100%", padding: "14px 16px", borderRadius: 12, border: "none", background: "var(--ff-red)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 14, cursor: "pointer", textAlign: "left" }}>
          De ahora en adelante
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,.85)", fontWeight: 400, marginTop: 4 }}>Todas tus próximas semanas usan estos días.</div>
        </button>
      </div>
    </div>
  );
}

// Los filtros salen de la lista y viven en una hoja inferior.
function PlanFilterSheet({ level, place, onLevel, onPlace, onClose }) {
  const rowLabel = { fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ff-text-3)", margin: "0 0 10px" };
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 30, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />
      <div style={{ position: "relative", background: "var(--ff-surface)", borderRadius: "32px 32px 0 0", padding: "10px 20px 28px", display: "flex", flexDirection: "column", gap: 22 }}>
        <div onClick={onClose} style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}>
          <span style={{ width: 38, height: 4, borderRadius: 2, background: "var(--ff-border)" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--ff-text)", margin: 0, letterSpacing: "-.2px" }}>Filtrar planes</p>
          <button onClick={() => { onLevel("all"); onPlace("all"); }} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "var(--ff-red-light)" }}>Limpiar</button>
        </div>
        <div>
          <p style={rowLabel}>Nivel</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[["all", "Todos"], ["fundamentos", "Fundamentos"], ["principiante", "Principiante"], ["avanzado", "Avanzado"]].map(([k, l]) => (
              <PlanFilterChip key={k} selected={level === k} onClick={() => onLevel(k)}>{l}</PlanFilterChip>
            ))}
          </div>
        </div>
        <div>
          <p style={rowLabel}>Lugar de entrenamiento</p>
          <div style={{ display: "flex", gap: 8 }}>
            {[["all", "Todos"], ["gym", "Gym"], ["home", "Casa"]].map(([k, l]) => (
              <PlanFilterChip key={k} selected={place === k} onClick={() => onPlace(k)}>{l}</PlanFilterChip>
            ))}
          </div>
        </div>
        <Button variant="primary" fullWidth onClick={onClose}>Ver planes</Button>
      </div>
    </div>
  );
}

// ── Program list main view ─────────────────────────────────────────────────────
function ChangeProgramScreen({ onBack, onConfirm, initialView = "list", initialSelectedId = null, plan = "subscribed", initialScopeDialogOpen = false, initialFilterOpen = false }) {
  const [scrolled, onScroll] = useBarScroll();
  const programs = window.FF_DATA.programs;
  const [view, setView] = React.useState(initialView);
  const [selected, setSelected] = React.useState(initialSelectedId ? programs.find(p => p.id === initialSelectedId) || null : null);
  const [placeFilter, setPlaceFilter] = React.useState("all");
  const [levelFilter, setLevelFilter] = React.useState("all");
  const [scopeDialogOpen, setScopeDialogOpen] = React.useState(initialScopeDialogOpen);
  const [filterOpen, setFilterOpen] = React.useState(initialFilterOpen);
  const activeFilters = (levelFilter !== "all" ? 1 : 0) + (placeFilter !== "all" ? 1 : 0);

  if (view === "changeDays") {
    return (
      <div style={{ position: "relative", height: "100%" }}>
        <ChangeDaysView onBack={() => setView("list")} onSave={() => setScopeDialogOpen(true)} />
        {scopeDialogOpen && (
          <ScopeDialog
            onDismiss={() => setScopeDialogOpen(false)}
            onPick={() => { setScopeDialogOpen(false); setView("list"); onConfirm && onConfirm(); }}
          />
        )}
      </div>
    );
  }

  if (view === "detail" && selected) {
    return <ProgramDetailView program={selected} onBack={() => setView("list")} onConfirm={onConfirm} plan={plan} />;
  }

  const visible = programs.filter(p => (placeFilter === "all" || p.category === placeFilter) && (levelFilter === "all" || p.levelTag === levelFilter));

  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)", ...APP_LIGHT_BG, ...APP_LIGHT }} data-screen-label="Cambiar plan">
      <FloatingTopBar title="Cambiar plan" onBack={onBack} scrolled={scrolled} />

      <div onScroll={onScroll} style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "56px 16px 32px" }}>
        {/* Current plan */}
        <p style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ff-text-3)", margin: "8px 0 10px" }}>Plan actual</p>
        <div style={{ background: "var(--ff-surface)", borderRadius: 16, border: "1px solid var(--ff-red)", overflow: "hidden", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px" }}>
            <img src={programs[0].img} alt="" style={{ width: 48, height: 48, borderRadius: 10, objectFit: "cover", flexShrink: 0, background: "var(--ff-surface-2)" }} onError={e => { e.target.style.background = "var(--ff-surface-2)"; }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <Badge tone="active" dot>Activo</Badge>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--ff-text)", margin: "6px 0 0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Novatos gym</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "8px 16px 12px", borderTop: "1px solid var(--ff-border)", background: "var(--ff-surface-2)" }}>
            <div style={{ display: "flex", gap: 8 }}>
              {["Nivel 3", "2 niveles disponibles"].map(t => (
                <span key={t} style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "var(--ff-text-2)", background: "var(--ff-surface)", border: "1px solid var(--ff-border)", padding: "3px 8px", borderRadius: 999 }}>{t}</span>
              ))}
            </div>
            <button onClick={() => setView("changeDays")} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: "12px 16px", border: "none", borderRadius: 10, background: "var(--ff-red)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 13, cursor: "pointer" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              Modificar días
            </button>
          </div>
        </div>

        {/* Planes disponibles + filtro en hoja inferior */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, margin: "0 0 14px" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ff-text-3)", margin: 0 }}>Planes disponibles</p>
          <button onClick={() => setFilterOpen(true)} style={{ display: "flex", alignItems: "center", gap: 7, height: 36, padding: "0 14px", borderRadius: 999, cursor: "pointer", background: "var(--ff-surface)",
            border: activeFilters ? "1.5px solid var(--ff-red)" : "1px solid var(--ff-border)", color: activeFilters ? "var(--ff-red-light)" : "var(--ff-text)", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7" /><line x1="7" y1="12" x2="17" y2="12" /><line x1="10" y1="17" x2="14" y2="17" /></svg>
            Filtrar{activeFilters ? ` · ${activeFilters}` : ""}
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {visible.map(p => (
            <div key={p.id} onClick={() => { setSelected(p); setView("detail"); }} style={{ background: "var(--ff-surface)", borderRadius: 16, border: "1px solid var(--ff-border)", overflow: "hidden", cursor: "pointer" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px" }}>
                <img src={p.img} alt="" style={{ width: 48, height: 48, borderRadius: 10, objectFit: "cover", flexShrink: 0, background: "var(--ff-surface-2)" }} onError={e => { e.target.style.display = "none"; }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--ff-text)", margin: "0 0 4px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.name}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-2)", margin: 0, lineHeight: 1.45, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{p.desc}</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 16px 10px", borderTop: "1px solid var(--ff-border)", background: "var(--ff-surface-2)" }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "var(--ff-text-2)", background: "var(--ff-surface)", border: "1px solid var(--ff-border)", padding: "2px 7px", borderRadius: 999, textTransform: "uppercase", letterSpacing: ".04em" }}>{p.category === "gym" ? "Gym" : "Hogar"}</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ff-text-3)" }}>{p.levels} niveles</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {filterOpen && (
        <PlanFilterSheet level={levelFilter} place={placeFilter} onLevel={setLevelFilter} onPlace={setPlaceFilter} onClose={() => setFilterOpen(false)} />
      )}
    </div>
  );
}

window.ChangeProgramScreen = ChangeProgramScreen;

// ── GenerationHistory.jsx ───────────────────────────────────────
// FitFighters mobile — Generation History list + Generation Detail (internal sub-view).

function GenStackIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--ff-text-3)" strokeWidth="1.5" strokeLinecap="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function GenProgressBar({ value }) {
  return (
    <div style={{ height: 6, borderRadius: 3, background: "var(--ff-surface-2)", overflow: "hidden", width: "100%" }}>
      <div style={{ height: "100%", width: Math.min(value, 100) + "%", background: value < 100 ? "var(--ff-red)" : "var(--ff-green)", borderRadius: 3, transition: "width .3s" }} />
    </div>
  );
}

function GenDetailRow({ label, right, last }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderBottom: last ? "none" : "0.5px solid var(--ff-border)" }}>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ff-text-2)" }}>{label}</span>
      {right}
    </div>
  );
}

function StatusPill({ yes }) {
  return (
    <span style={{ fontFamily: "var(--font-body)", fontSize: 12, padding: "3px 10px", borderRadius: 20, fontWeight: 500, background: yes ? "rgba(46,207,122,0.12)" : "rgba(255,92,92,0.10)", color: yes ? "var(--ff-green)" : "var(--ff-error)", border: `0.5px solid ${yes ? "rgba(46,207,122,.25)" : "rgba(255,92,92,.2)"}` }}>
      {yes ? "Sí" : "No"}
    </span>
  );
}

// ── Generation Detail ──────────────────────────────────────────────────────────
function GenerationDetailView({ gen, onBack }) {
  const [scrolled, onScroll] = useBarScroll();
  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)", ...APP_LIGHT_BG, ...APP_LIGHT }} data-screen-label="Detalle de generación">
      <FloatingTopBar title={gen.name} onBack={onBack} scrolled={scrolled} />

      <div onScroll={onScroll} style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "60px 16px 32px" }}>
        {/* Hero card */}
        <div style={{ background: "var(--ff-surface)", borderRadius: 20, border: "1px solid var(--ff-border)", padding: "20px 16px", display: "flex", alignItems: "center", gap: 16, marginBottom: 4 }}>
          <div style={{ width: 72, height: 72, borderRadius: 14, background: "var(--ff-surface-2)", border: "0.5px solid var(--ff-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <GenStackIcon size={32} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 17, color: "var(--ff-text)", margin: "0 0 10px" }}>{gen.name}</p>
            <GenProgressBar value={gen.progress} />
            <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-2)", margin: "5px 0 0" }}>{gen.progress}% completado</p>
          </div>
        </div>

        {/* Suscripción */}
        <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ff-text-2)", padding: "18px 0 8px", letterSpacing: ".08em", textTransform: "uppercase", margin: 0 }}>Suscripción</p>
        <div style={{ background: "var(--ff-surface)", borderRadius: 14, border: "1px solid var(--ff-border)", overflow: "hidden" }}>
          <GenDetailRow label="Fecha" right={<span style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500, color: "var(--ff-text)" }}>{gen.date}</span>} />
          <GenDetailRow label="Método" right={<span style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500, color: "var(--ff-text)" }}>{gen.method}</span>} last />
        </div>

        {/* Participación */}
        <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ff-text-2)", padding: "18px 0 8px", letterSpacing: ".08em", textTransform: "uppercase", margin: 0 }}>Participación</p>
        <div style={{ background: "var(--ff-surface)", borderRadius: 14, border: "1px solid var(--ff-border)", overflow: "hidden" }}>
          <GenDetailRow label="Reseña solicitada" right={<StatusPill yes={gen.reviewAsked} />} />
          <GenDetailRow label="Grupo de Facebook" right={<StatusPill yes={gen.fbGroup} />} last />
        </div>
      </div>
    </div>
  );
}

// ── Generation History list ────────────────────────────────────────────────────
function GenerationHistoryScreen({ onBack, generationsOverride = null, initialSelectedId = "__none__" }) {
  const [scrolled, onScroll] = useBarScroll();
  const generations = generationsOverride !== null ? generationsOverride : window.FF_DATA.generations;
  const [selected, setSelected] = React.useState(
    initialSelectedId === "__none__" ? null : generations.find(g => g.id === initialSelectedId) || null
  );

  if (selected) {
    return <GenerationDetailView gen={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column", background: "var(--ff-bg)", ...APP_LIGHT_BG, ...APP_LIGHT }} data-screen-label="Generaciones">
      <FloatingTopBar title="Generaciones" onBack={onBack} scrolled={scrolled} />

      <div onScroll={onScroll} style={{ flex: 1, minHeight: 0, overflowY: "auto", paddingTop: 56 }}>
        {generations.length === 0 ? (
          // Empty state
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "60%", gap: 12 }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--ff-surface-2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <GenStackIcon size={28} />
            </div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 15, color: "var(--ff-text)", margin: 0, textAlign: "center" }}>Sin historial</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ff-text-3)", margin: 0, textAlign: "center", padding: "0 32px" }}>Aquí aparecerán tus generaciones anteriores.</p>
          </div>
        ) : (
          generations.map((gen, idx) => (
            <React.Fragment key={gen.id}>
              <div
                onClick={() => setSelected(gen)}
                style={{ display: "flex", alignItems: "center", gap: 16, padding: "12px 16px", cursor: "pointer" }}
              >
                <div style={{ width: 56, height: 56, borderRadius: 12, background: "var(--ff-surface-2)", border: "0.5px solid var(--ff-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <GenStackIcon size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--ff-text)", margin: 0 }}>{gen.name}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-3)", margin: "2px 0 0" }}>{gen.progress}% completado · {gen.date}</p>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ff-text-3)" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
              </div>
              {idx < generations.length - 1 && <div style={{ height: "0.5px", background: "var(--ff-border)", margin: "0 16px" }} />}
            </React.Fragment>
          ))
        )}
      </div>
    </div>
  );
}

window.GenerationHistoryScreen = GenerationHistoryScreen;

// ── Milestone.jsx ───────────────────────────────────────────────
// FitFighters mobile — Milestone / Achievement screen.

function MilestoneScreen({ onClose, initialShareOpen = false }) {
  const [shareOpen, setShareOpen] = React.useState(initialShareOpen);
  const m = window.FF_DATA.milestone;

  const SHARE_OPTIONS = [
    { label: "WhatsApp", bg: "#128C7E", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.997 2C6.477 2 2 6.477 2 11.997c0 1.99.584 3.84 1.588 5.39L2 22l4.734-1.558A9.935 9.935 0 0011.997 22C17.517 22 22 17.523 22 12.003 22 6.477 17.517 2 11.997 2z"/></svg> },
    { label: "Instagram", bg: "linear-gradient(135deg,#F58529,#DD2A7B,#515BD4)", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="white" /></svg> },
    { label: "X", bg: "#000", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63z"/></svg> },
    { label: "Copiar", bg: "var(--ff-surface-2)", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ff-text-2)" strokeWidth="2" strokeLinecap="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg> },
  ];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "var(--ff-bg)", ...APP_LIGHT_BG, ...APP_LIGHT, position: "relative", borderRadius: "26px 26px 0 0", overflow: "hidden" }} data-screen-label="Logro">
      {/* Drag handle — this is a bottom sheet over the previous screen */}
      <div style={{ display: "flex", justifyContent: "center", padding: "10px 0 2px", flexShrink: 0 }}>
        <div style={{ width: 36, height: 4, borderRadius: 2, background: "var(--ff-surface-2)" }} />
      </div>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px 4px", flexShrink: 0 }}>
        <p style={{ fontFamily: "var(--font-display)", fontSize: 19, color: "var(--ff-text)", margin: 0 }}>Logro desbloqueado</p>
        <button onClick={onClose} style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--ff-surface-2)", border: "0.5px solid var(--ff-border)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 0, flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ff-text-2)" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "10px 20px 20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ background: "var(--ff-primary-container)", border: "1px solid rgba(255,50,0,.25)", borderRadius: 999, padding: "5px 16px", marginBottom: 18 }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "var(--ff-red-light)" }}>Nivel {m.currentLevel} de {m.totalLevels}</span>
        </div>

        <div style={{ width: "100%", maxWidth: 320, height: 380, flexShrink: 0, borderRadius: 20, background: "var(--ff-surface-2)", border: "1px dashed var(--ff-border)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, textAlign: "center", padding: 20 }}>
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="var(--ff-text-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ff-text-3)", lineHeight: 1.5 }}>Imagen del logro<br />(viene del servidor)</span>
        </div>

        <p style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--ff-red)", textAlign: "center", margin: "22px 0 8px", letterSpacing: "-.2px" }}>{m.title}</p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ff-text-2)", textAlign: "center", lineHeight: 1.55, margin: 0, maxWidth: 300 }}>{m.description}</p>
      </div>

      {/* Actions */}
      <div style={{ padding: "16px 20px 32px", display: "flex", gap: 10, flexShrink: 0 }}>
        <button onClick={() => setShareOpen(true)} style={{ flex: 1, height: 52, borderRadius: 14, background: "var(--ff-red)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 15, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 9 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>
          Compartir logro
        </button>
        <button style={{ width: 52, height: 52, borderRadius: 14, background: "var(--ff-surface-2)", border: "0.5px solid var(--ff-border)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ff-text-2)" strokeWidth="2.2" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
        </button>
      </div>

      {/* Share sheet overlay */}
      {shareOpen && (
        <div onClick={() => setShareOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.6)", zIndex: 10 }} />
      )}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, background: "var(--ff-surface)", borderTop: "0.5px solid var(--ff-border)", borderRadius: "22px 22px 0 0", padding: "14px 20px 36px", transform: shareOpen ? "translateY(0)" : "translateY(100%)", transition: "transform .32s cubic-bezier(.32,.72,0,1)", zIndex: 11 }}>
        <div style={{ width: 36, height: 4, background: "var(--ff-surface-2)", borderRadius: 2, margin: "0 auto 20px" }} />
        <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ff-text-3)", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", margin: "0 0 18px" }}>Compartir vía</p>
        <div style={{ display: "flex", gap: 18, overflowX: "auto", paddingBottom: 4 }}>
          {SHARE_OPTIONS.map(opt => (
            <div key={opt.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer", minWidth: 58 }}>
              <div style={{ width: 54, height: 54, borderRadius: 16, background: opt.bg, display: "flex", alignItems: "center", justifyContent: "center", border: "0.5px solid rgba(255,255,255,.06)" }}>{opt.icon}</div>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ff-text-2)", textAlign: "center", whiteSpace: "nowrap" }}>{opt.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.MilestoneScreen = MilestoneScreen;


// ── app.jsx — orchestrator + Android device frame + navigation ─────────────

function StatusBar() {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 20, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 20px 4px", pointerEvents: "none" }}>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#fff" }}>9:41</span>
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="#fff"><rect x="0" y="4" width="3" height="7" rx=".5" /><rect x="4.5" y="2.5" width="3" height="8.5" rx=".5" /><rect x="9" y="1" width="3" height="10" rx=".5" /><rect x="13" y="0" width="3" height="11" rx=".5" /></svg>
        <svg width="16" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M10.54 16.1a6 6 0 0 1 2.92 0" /><circle cx="12" cy="20" r="1" fill="#fff" /></svg>
        <svg width="25" height="11" viewBox="0 0 25 11" fill="none"><rect x=".5" y=".5" width="21" height="10" rx="2" stroke="#fff" strokeOpacity=".35" /><rect x="1.5" y="1.5" width="17" height="8" rx="1.5" fill="#fff" /><path d="M23 3.5v4a2 2 0 0 0 0-4z" fill="#fff" opacity=".4" /></svg>
      </div>
    </div>
  );
}

function GestureBar() {
  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20, display: "flex", justifyContent: "center", padding: "8px 0 9px", pointerEvents: "none" }}>
      <div style={{ width: 120, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.25)" }} />
    </div>
  );
}

function PhoneFrame({ children }) {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
      <div style={{ position: "relative", width: 390, height: 844, background: "#0a0a0a", borderRadius: 44, boxShadow: "0 0 0 2px #2a2a2a, 0 0 0 7px #111", overflow: "hidden", flexShrink: 0 }}>
        <StatusBar />
        <div style={{ position: "absolute", inset: 0, paddingTop: 30, display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
            {children}
          </div>
        </div>
        <GestureBar />
      </div>
    </div>
  );
}

window.PhoneFrame = PhoneFrame;

function App() {
  const [screen, setScreen] = React.useState("login");
  const [tab, setTab] = React.useState("workout");
  const [selectedDay, setSelectedDay] = React.useState(null);
  const [blocks, setBlocks] = React.useState(() => JSON.parse(JSON.stringify(window.FF_DATA.routineDetailBlocks || [])));
  const [activeExercise, setActiveExercise] = React.useState(null); // { ex, blockIndex }
  // Usuario recién registrado: al iniciar sesión entra al onboarding, no al workout.
  const [isNewUser, setIsNewUser] = React.useState(false);

  const nav = {
    login:             () => { if (isNewUser) { setIsNewUser(false); setScreen("onboarding"); return; } setTab("workout"); setScreen("workout"); },
    register:          () => setScreen("register"),
    onboarding:        () => setScreen("onboarding"),
    recommended:       () => setScreen("recommended"),
    workout:           () => { setTab("workout"); setScreen("workout"); },
    workoutDetail:     (day) => { setSelectedDay(day); setScreen("workoutDetail"); },
    exerciseDetail:    (ex, blockIndex) => { setActiveExercise({ ex, blockIndex }); setScreen("exerciseDetail"); },
    changeExercise:    () => setScreen("changeExercise"),
    trainer:           () => setScreen("trainer"),
    summary:           () => setScreen("summary"),
    milestone:         () => setScreen("milestone"),
    profile:           () => { setTab("profile"); setScreen("profile"); },
    editProfile:       () => setScreen("editProfile"),
    changePassword:    () => setScreen("changePassword"),
    changeProgram:     () => setScreen("changeProgram"),
    generationHistory: () => setScreen("generationHistory"),
  };

  const onExerciseChanged = (newItem) => {
    setBlocks(prev => {
      const next = [...prev];
      const block = { ...next[activeExercise.blockIndex] };
      block.exercises = block.exercises.map(e => e === activeExercise.ex ? { ...e, name: newItem.name, img: newItem.img } : e);
      next[activeExercise.blockIndex] = block;
      return next;
    });
    setActiveExercise(null);
    setScreen("workoutDetail");
  };

  const onTab = (t) => {
    setTab(t);
    if (t === "profile") setScreen("profile");
    else setScreen("workout"); // chat — no dedicated screen yet
  };

  let body;
  switch (screen) {
    case "login":
      body = <LoginChoiceScreen onLogin={() => setScreen("loginEmail")} onRegister={nav.register} />;
      break;
    case "loginEmail":
      body = <LoginEmailScreen onLogin={nav.login} onBack={() => setScreen("login")} onRegister={nav.register} />;
      break;
    case "register":
      body = <RegisterScreen onBack={() => setScreen("login")} onRegister={() => { setIsNewUser(true); setScreen("registerDone"); }} />;
      break;
    case "registerDone":
      body = <RegisterDoneScreen onLogin={() => setScreen("loginEmail")} />;
      break;
    case "onboarding":
      body = <O2Onboarding onBack={() => setScreen("register")} onComplete={nav.recommended} />;
      break;
    case "recommended":
      body = <RecommendedProgramScreen onContinue={nav.workout} />;
      break;
    case "workout":
      body = <WorkoutScreen tab={tab} onTab={onTab} onSelectDay={nav.workoutDetail} />;
      break;
    case "workoutDetail":
      body = <WorkoutDetailScreen item={selectedDay} onBack={nav.workout} onStart={nav.trainer} blocksOverride={blocks} onExerciseTap={nav.exerciseDetail} />;
      break;
    case "exerciseDetail":
      body = <ExerciseDetailScreen exercise={activeExercise?.ex} onBack={nav.workoutDetail ? () => setScreen("workoutDetail") : nav.workout} onChangeExercise={nav.changeExercise} />;
      break;
    case "changeExercise":
      body = <ChangeExerciseScreen exercise={activeExercise?.ex} onBack={() => setScreen("exerciseDetail")} onConfirm={onExerciseChanged} />;
      break;
    case "profile":
      body = <ProfileScreen tab={tab} onClose={nav.workout} onTab={onTab} onEditProfile={nav.editProfile} onChangePassword={nav.changePassword} onChangeProgram={nav.changeProgram} onGenerations={nav.generationHistory} />;
      break;
    case "editProfile":
      body = <EditProfileScreen onBack={nav.profile} />;
      break;
    case "changePassword":
      body = <ChangePasswordScreen onBack={nav.profile} />;
      break;
    case "changeProgram":
      body = <ChangeProgramScreen onBack={nav.profile} onConfirm={nav.workout} initialView="modifyChoice" />;
      break;
    case "generationHistory":
      body = <GenerationHistoryScreen onBack={nav.profile} />;
      break;
    case "trainer":
      body = <TrainerImmersiveScreen live onExit={nav.workout} onFinish={nav.summary} />;
      break;
    case "summary":
      body = <SummaryScreen onHome={nav.workout} onMilestone={nav.milestone} />;
      break;
    case "milestone":
      body = <MilestoneScreen onClose={nav.workout} />;
      break;
    default:
      body = <LoginChoiceScreen onLogin={() => setScreen("loginEmail")} onRegister={nav.register} />;
  }

  return (
    <PhoneFrame key={screen}>
      {body}
    </PhoneFrame>
  );
}

window.App = App;

// ── Catalog — static grid of every screen in its reference state ──────────────
// Non-interactive: each screen is shown inside a scaled device frame with a label.

function CatalogCell({ label, note, children }) {
  const S = 0.6;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--ff-text)", margin: 0, letterSpacing: "-.1px" }}>{label}</p>
        {note ? <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ff-text-3)", margin: "2px 0 0" }}>{note}</p> : null}
      </div>
      <div style={{ width: 390 * S, height: 844 * S, overflow: "hidden", flexShrink: 0 }}>
        <div style={{ width: 390, height: 844, transform: `scale(${S})`, transformOrigin: "top left" }}>
          <PhoneFrame>{children}</PhoneFrame>
        </div>
      </div>
    </div>
  );
}

function CatalogSection({ title, children }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "0 0 26px" }}>
        <span style={{ width: 8, height: 8, borderRadius: 2, background: "var(--ff-red)", flexShrink: 0 }} />
        <p style={{ fontFamily: "var(--font-body)", fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ff-text-2)", margin: 0 }}>{title}</p>
        <div style={{ flex: 1, height: 1, background: "var(--ff-border)" }} />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 40px", justifyContent: "flex-start" }}>
        {children}
      </div>
    </div>
  );
}

function Catalog() {
  const noop = () => {};
  const week = window.FF_DATA.weekTemplate || [];
  const todayIdx = week.findIndex(w => w.status === "today");
  const doneIdx = week.findIndex(w => w.status === "done");
  const wsd = window.FF_DATA.program.weekStartDate;
  const today = { ...(week[todayIdx] ?? week[0]), date: formatShortDate(wsd, todayIdx >= 0 ? todayIdx : 0) };
  const done = doneIdx >= 0 ? { ...week[doneIdx], date: formatShortDate(wsd, doneIdx) } : null;

  const sections = [
    {
      title: "Autenticación",
      cells: [
        { label: "Login · portada", el: <LoginChoiceScreen onLogin={noop} onRegister={noop} /> },
        { label: "Login · correo", el: <LoginEmailScreen onLogin={noop} onBack={noop} onRegister={noop} /> },
        { label: "Registro", el: <RegisterScreen onBack={noop} onRegister={noop} /> },
        { label: "Registro · cuenta creada", el: <RegisterDoneScreen onLogin={noop} /> },
      ],
    },
    {
      title: "Onboarding",
      cells: [
        { label: "Datos personales", note: "Fecha de nacimiento y género", el: <O2Onboarding step={0} onBack={noop} onComplete={noop} /> },
        { label: "Medidas", note: "Altura, peso y sistema de unidades", el: <O2Onboarding step={1} onBack={noop} onComplete={noop} /> },
        { label: "Medidas", note: "Fuera de rango · el paso queda bloqueado", el: <O2Onboarding step={1} seedHeight="95" seedWeight="15" onBack={noop} onComplete={noop} /> },
        { label: "Nivel de experiencia", el: <O2Onboarding step={2} onBack={noop} onComplete={noop} /> },
        { label: "Grupos musculares", note: "Solo con más de 2 años entrenando", el: <O2Onboarding step={3} onBack={noop} onComplete={noop} /> },
        { label: "Objetivo", el: <O2Onboarding step={4} onBack={noop} onComplete={noop} /> },
        { label: "Lugar de entrenamiento", el: <O2Onboarding step={5} onBack={noop} onComplete={noop} /> },
        { label: "Lugar de entrenamiento", note: "Casa · nota de mancuernas", el: <O2Onboarding step={5} seedPlace="Casa" onBack={noop} onComplete={noop} /> },
        { label: "Días de entrenamiento", el: <O2Onboarding step={6} onBack={noop} onComplete={noop} /> },
        { label: "Programa recomendado", el: <RecommendedProgramScreen onContinue={noop} /> },
      ],
    },
    {
      title: "Workout (inicio)",
      cells: [
        { label: "Workout", note: "Hoy con rutina", el: <WorkoutListScreen onSelectDay={noop} /> },
        { label: "Workout", note: "Hoy ya entrenado", el: <WorkoutListScreen onSelectDay={noop} todayDone /> },
        { label: "Workout", note: "Hoy es descanso", el: <WorkoutListScreen onSelectDay={noop} todayRest /> },
        { label: "Workout", note: "Selector de semana abierto", el: <WorkoutListScreen onSelectDay={noop} sheetOpen /> },
        { label: "Workout", note: "Viendo otra semana", el: <WorkoutListScreen onSelectDay={noop} initialWeek={4} /> },
        { label: "Workout", note: "Sin plan cargado", el: <WorkoutEmptyScreen onStartTutorial={noop} /> },
        { label: "Rutinas anteriores", note: "Completadas y pendientes", el: <PastRoutinesScreen onBack={noop} onSelectDay={noop} /> },
        { label: "Rutinas anteriores", note: "Hoy completada · acciones de la fila", el: <PastRoutinesScreen onBack={noop} onSelectDay={noop} todayDone demoMenu /> },
        { label: "Rutinas anteriores", note: "Deshacer al desmarcar", el: <PastRoutinesScreen onBack={noop} onSelectDay={noop} demoSnack /> },
        { label: "Rutinas anteriores", note: "Pendientes tras desmarcar", el: <PastRoutinesScreen onBack={noop} onSelectDay={noop} initialFilter="pending" demoUndone /> },
      ],
    },
    {
      title: "Tutorial",
      cells: [
        { label: "Tutorial", note: "Usuario nuevo", el: <TutorialSheetScreen onStart={noop} onClose={noop} /> },
        { label: "Tutorial", note: "Usuario que regresa", el: <TutorialSheetScreen onStart={noop} onClose={noop} returning /> },
      ],
    },
    {
      title: "Detalle de rutina",
      cells: [
        { label: "Detalle de rutina", note: "Hoy", el: <WorkoutDetailScreen item={today} onBack={noop} onStart={noop} /> },
        { label: "Detalle de rutina", note: "Día completado", el: <WorkoutDetailScreen item={done} onBack={noop} onStart={noop} /> },
        { label: "Detalle de rutina", note: "casa · reps 0 y tiempo 0 → Al fallo", el: <WorkoutDetailScreen item={today} blocksOverride={[window.FF_DATA.routineDetailBlocks[1]]} onBack={noop} onStart={noop} /> },
      ],
    },
    {
      title: "Detalle de ejercicio",
      cells: [
        { label: "Detalle de ejercicio", note: "Con músculos e instrucciones", el: <ExerciseDetailScreen exercise={window.FF_DATA.routineDetailBlocks[0].exercises[0]} onBack={noop} onChangeExercise={noop} /> },
        { label: "Cambiar ejercicio", note: "Carrusel + claves del ejercicio", el: <ChangeExerciseScreen exercise={window.FF_DATA.routineDetailBlocks[0].exercises[0]} onBack={noop} onConfirm={noop} /> },
        { label: "Cambiar ejercicio", note: "Sin ejercicios relacionados", el: <ChangeExerciseScreen exercise={{ name: "Ejercicio sin alternativas", img: null }} poolOverride={[]} onBack={noop} onConfirm={noop} /> },
      ],
    },
    {
      title: "Entrenador virtual",
      cells: [
        { label: "Cycle", note: "Anillo partido por serie; el color de sección tiñe anillo y etiqueta", el: <TrainerImmersiveScreen blockIdx={0} /> },
        { label: "Cycle por tiempo", note: "Sigue rigiéndose por series: el anillo no cambia", el: <TrainerImmersiveScreen blockIdx={9} /> },
        { label: "Stripset", el: <TrainerImmersiveScreen blockIdx={2} /> },
        { label: "For time", note: "Un arco por ronda; el cronómetro sube dentro del anillo", el: <TrainerImmersiveScreen blockIdx={3} /> },
        { label: "AMRAP", note: "El anillo se completa conforme baja el restante del bloque", el: <TrainerImmersiveScreen blockIdx={4} /> },
        { label: "EMOM", note: "Sin atrás ni siguiente: finalizar sección a la derecha", el: <TrainerImmersiveScreen blockIdx={5} /> },
        { label: "EMOM · antes de empezar", note: "Explica la mecánica y qué hace finalizar", el: <TrainerImmersiveScreen blockIdx={5} emomIntro /> },
        { label: "EMOM · última sección", note: "El aviso cambia: la rutina finalizaría", el: <TrainerImmersiveScreen blockIdx={5} emomIntro forceLast /> },
        { label: "Cardio tradicional", note: "Anillo sobre el tiempo total del cardio", el: <TrainerImmersiveScreen blockIdx={6} /> },
        { label: "Cardio intervalos", el: <TrainerImmersiveScreen blockIdx={7} /> },
        { label: "Descanso", note: "Video desaturado y anillo gris de descanso", el: <TrainerImmersiveScreen blockIdx={1} /> },
        { label: "En pausa", el: <TrainerImmersiveScreen blockIdx={0} paused /> },
        { label: "Cola", note: "Cola por secciones sobre fondo oscuro sólido", el: <TrainerImmersiveScreen blockIdx={2} queueOpen /> },
        { label: "Prepárate", note: "modal 3-2-1 al iniciar sección o al reanudar", el: <TrainerImmersiveScreen blockIdx={0} showPreroll /> },
        { label: "Último ejercicio", note: "La card de abajo pasa a 'Finalizar entrenamiento'", el: <TrainerImmersiveScreen blockIdx={10} stepIdx={5} /> },
        { label: "Rutina completa", note: "Al dar siguiente o acabar el tiempo: cola desplegada y 'Finalizar rutina'", el: <TrainerImmersiveScreen blockIdx={10} stepIdx={5} finishOpen /> },
      ],
    },
    {
      title: "Fin de rutina",
      cells: [
        { label: "Resumen", el: <SummaryScreen onHome={noop} onMilestone={noop} /> },
        { label: "Logro desbloqueado", el: <MilestoneScreen onClose={noop} /> },
        { label: "Logro", note: "Compartir", el: <MilestoneScreen initialShareOpen={true} onClose={noop} /> },
      ],
    },
    {
      title: "Perfil y cuenta",
      cells: [
        { label: "Perfil", note: "Modal de abajo hacia arriba: cierre a la derecha", el: <ProfileScreen tab="profile" onClose={noop} onTab={noop} onEditProfile={noop} onChangePassword={noop} onChangeProgram={noop} onGenerations={noop} /> },
        { label: "Editar perfil", el: <EditProfileScreen onBack={noop} /> },
        { label: "Cambiar contraseña", el: <ChangePasswordScreen onBack={noop} /> },
        { label: "Cambiar contraseña", note: "Error de validación", el: <ChangePasswordScreen initialCurrent="FitFighters1" initialNext="NuevaClave1" initialConfirm="NuevaClave2" onBack={noop} /> },
      ],
    },
    {
      title: "Planes",
      cells: [
        { label: "Cambiar plan", note: "Lista", el: <ChangeProgramScreen initialView="list" onBack={noop} onConfirm={noop} /> },
        { label: "Cambiar plan", note: "Filtros en hoja inferior", el: <ChangeProgramScreen initialView="list" initialFilterOpen onBack={noop} onConfirm={noop} /> },
        { label: "Cambiar días de entrenamiento", note: "Con diálogo de alcance", el: <ChangeProgramScreen initialView="changeDays" initialScopeDialogOpen={true} onBack={noop} onConfirm={noop} /> },
        { label: "Detalle de plan", note: "Suscrito", el: <ChangeProgramScreen initialView="detail" initialSelectedId={4} onBack={noop} onConfirm={noop} /> },
        { label: "Detalle de plan", note: "Plan free", el: <ChangeProgramScreen initialView="detail" initialSelectedId={4} plan="free" onBack={noop} onConfirm={noop} /> },
      ],
    },
    {
      title: "Generaciones",
      cells: [
        { label: "Historial", el: <GenerationHistoryScreen onBack={noop} /> },
        { label: "Detalle de generación", el: <GenerationHistoryScreen initialSelectedId={1} onBack={noop} /> },
        { label: "Historial vacío", el: <GenerationHistoryScreen generationsOverride={[]} onBack={noop} /> },
      ],
    },
    {
      title: "En construcción",
      cells: [
        { label: "Sección en desarrollo", el: <WipScreen title="Chat" onBack={noop} /> },
      ],
    },
  ];

  let cellKey = 0;
  return (
    <div style={{ minHeight: "100vh", background: "var(--ff-bg)", padding: "44px 32px 96px" }}>
      <div style={{ maxWidth: 1500, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 26, color: "var(--ff-text)", margin: "0 0 6px", letterSpacing: "-.4px" }}>Catálogo de pantallas</h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ff-text-2)", margin: "0 0 44px", maxWidth: 640, lineHeight: 1.6 }}>Todas las pantallas de la app FitFighters con sus estados de referencia. Vista estática — para probar el flujo interactivo usa la app.</p>
        {sections.map((sec) => (
          <CatalogSection key={sec.title} title={sec.title}>
            {sec.cells.map((c) => <CatalogCell key={cellKey++} label={c.label} note={c.note}>{c.el}</CatalogCell>)}
          </CatalogSection>
        ))}
      </div>
    </div>
  );
}

window.Catalog = Catalog;


