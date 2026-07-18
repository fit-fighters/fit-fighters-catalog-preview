/* @ds-bundle: {"format":4,"namespace":"FitFightersDesignSystem_4614fc","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"SECTION_TYPES","sourcePath":"components/feedback/SectionBadge.jsx"},{"name":"SectionBadge","sourcePath":"components/feedback/SectionBadge.jsx"},{"name":"Chip","sourcePath":"components/forms/Chip.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"AppBar","sourcePath":"components/navigation/AppBar.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"Card","sourcePath":"components/surface/Card.jsx"},{"name":"MenuRow","sourcePath":"components/surface/MenuRow.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"ba1f0f82a67a","components/feedback/Badge.jsx":"d04725f204b5","components/feedback/SectionBadge.jsx":"0e4610e69598","components/forms/Chip.jsx":"9f06ee258c25","components/forms/TextField.jsx":"c397c1c5b5e6","components/navigation/AppBar.jsx":"27136e97f56c","components/navigation/BottomNav.jsx":"e7501e44ec34","components/surface/Card.jsx":"42c1cbcd244d","components/surface/MenuRow.jsx":"1bc6d2fa9b53","ui_kits/mobile/screens/ChangePassword.jsx":"e1b3ce01e4f4","ui_kits/mobile/screens/ChangeProgram.jsx":"edb96f0607d0","ui_kits/mobile/screens/EditProfile.jsx":"a629dd7882cb","ui_kits/mobile/screens/GenerationHistory.jsx":"cace20fc7809","ui_kits/mobile/screens/Login.jsx":"0af8d3538569","ui_kits/mobile/screens/Milestone.jsx":"f10adbe24d8a","ui_kits/mobile/screens/Profile.jsx":"380c5d5519c9","ui_kits/mobile/screens/Summary.jsx":"e8d45670ca79","ui_kits/mobile/screens/Trainer.jsx":"0564bf7daf2a","ui_kits/mobile/screens/WorkoutList.jsx":"9e8fc0b69133","ui_kits/mobile/screens/app.jsx":"13c32a0b1e27","ui_kits/mobile/screens/data.js":"32586e6a7768"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FitFightersDesignSystem_4614fc = window.FitFightersDesignSystem_4614fc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FitFighters button. One component, three variants mirroring
 * FFPrimaryButton / FFSecondaryButton / FFTextButton.
 *
 * Label is Michroma (titleSmall, 13px). Primary is full-width by default
 * (matches the app, where CTAs sit at the bottom of the screen).
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = variant === "primary",
  loading = false,
  disabled = false,
  icon = null,
  onClick,
  style = {},
  ...rest
}) {
  const isDisabled = disabled || loading;
  const pad = size === "sm" ? "8px 16px" : "13px 20px";
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    width: fullWidth ? "100%" : "auto",
    padding: variant === "text" ? "8px 12px" : pad,
    fontFamily: "var(--font-display)",
    fontSize: size === "sm" ? "12px" : "13px",
    lineHeight: 1.2,
    letterSpacing: "0.01em",
    borderRadius: "var(--radius-cta)",
    cursor: isDisabled ? "default" : "pointer",
    transition: "background-color .15s ease, opacity .15s ease, border-color .15s ease",
    WebkitTapHighlightColor: "transparent",
    userSelect: "none",
    border: "1px solid transparent",
    outline: "none"
  };
  const variants = {
    primary: {
      background: isDisabled ? "var(--ff-surface-2)" : "var(--ff-red)",
      color: isDisabled ? "var(--ff-text-3)" : "var(--ff-on-primary)"
    },
    secondary: {
      background: "var(--ff-surface)",
      color: isDisabled ? "var(--ff-text-3)" : "var(--ff-text)",
      borderColor: "var(--ff-surface)"
    },
    text: {
      background: "transparent",
      color: isDisabled ? "var(--ff-text-3)" : "var(--ff-text-2)",
      padding: "8px 12px"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: isDisabled ? undefined : onClick,
    disabled: isDisabled,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseDown: e => {
      if (!isDisabled) e.currentTarget.style.opacity = "0.85";
    },
    onMouseUp: e => e.currentTarget.style.opacity = "1",
    onMouseLeave: e => e.currentTarget.style.opacity = "1"
  }, rest), loading ? /*#__PURE__*/React.createElement(Spinner, {
    color: variant === "primary" ? "var(--ff-on-primary)" : "var(--ff-text)"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, icon, children));
}
function Spinner({
  color
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      border: `2px solid ${color}`,
      borderTopColor: "transparent",
      display: "inline-block",
      animation: "ff-spin .7s linear infinite"
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes ff-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    fg: "var(--ff-text-2)",
    bg: "var(--ff-surface-2)",
    bd: "var(--ff-border)"
  },
  active: {
    fg: "var(--ff-green)",
    bg: "rgba(46,207,122,0.10)",
    bd: "rgba(46,207,122,0.25)"
  },
  accent: {
    fg: "var(--ff-red-light)",
    bg: "var(--ff-primary-container)",
    bd: "rgba(255,50,0,0.25)"
  }
};

/**
 * FitFighters pill badge. Status chips (Activo), generation tags, metadata.
 * Roboto Condensed, uppercase, optional leading dot.
 */
function Badge({
  children,
  tone = "neutral",
  dot = false,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      fontFamily: "var(--font-body)",
      fontSize: "10px",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: t.fg,
      background: t.bg,
      border: `1px solid ${t.bd}`,
      padding: "3px 8px",
      borderRadius: "var(--radius-xl)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: "5px",
      height: "5px",
      borderRadius: "50%",
      background: "currentColor"
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/SectionBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Workout block types → section color + Spanish display label. */
const SECTION_TYPES = {
  cycle: {
    color: "var(--ff-section-cycle)",
    label: "Cycle"
  },
  stripset: {
    color: "var(--ff-section-stripset)",
    label: "Stripset"
  },
  fortime: {
    color: "var(--ff-section-fortime)",
    label: "For time"
  },
  amrap: {
    color: "var(--ff-section-amrap)",
    label: "AMRAP"
  },
  cardio: {
    color: "var(--ff-section-cardio)",
    label: "Cardio"
  },
  emom: {
    color: "var(--ff-section-emom)",
    label: "EMOM"
  },
  rest: {
    color: "var(--ff-section-rest)",
    label: "Descanso"
  }
};

/**
 * SectionBadge — the colored dot + block-type label that identifies a
 * workout section (Cycle, Stripset, For Time, AMRAP, EMOM, Cardio, Rest).
 * Section colors are used directly, NOT through the brand primary.
 */
function SectionBadge({
  type = "cycle",
  label,
  showLabel = true,
  style = {},
  ...rest
}) {
  const s = SECTION_TYPES[type] || SECTION_TYPES.cycle;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: s.color,
      flexShrink: 0
    }
  }), showLabel ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "10px",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--ff-text-2)"
    }
  }, label || s.label) : null);
}
Object.assign(__ds_scope, { SECTION_TYPES, SectionBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/SectionBadge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FitFighters selectable chip. Mirrors FFChip (AssistChip).
 * Selected = filled (onPrimaryContainer/onSurface inverse); unselected = surface + outline.
 * Used for onboarding muscle groups, level pickers, day pickers.
 */
function Chip({
  children,
  selected = false,
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "45px",
      padding: "10px 16px",
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      fontWeight: "var(--weight-medium)",
      textAlign: "center",
      borderRadius: "var(--radius-lg)",
      cursor: "pointer",
      transition: "all .15s ease",
      WebkitTapHighlightColor: "transparent",
      userSelect: "none",
      background: selected ? "var(--ff-text)" : "var(--ff-surface)",
      color: selected ? "var(--ff-bg)" : "var(--ff-text)",
      border: `1px solid ${selected ? "var(--ff-text)" : "var(--ff-border)"}`,
      ...style
    },
    onMouseDown: e => e.currentTarget.style.opacity = "0.8",
    onMouseUp: e => e.currentTarget.style.opacity = "1",
    onMouseLeave: e => e.currentTarget.style.opacity = "1"
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Chip.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FitFighters outlined text field. Mirrors FFTextField.
 * Floating label, password reveal, error + supporting text, read-only.
 * Focus accent is green (--ff-green), matching the app.
 */
function TextField({
  label,
  value = "",
  placeholder = "",
  type = "text",
  password = false,
  error = false,
  supportingText = "",
  readOnly = false,
  disabled = false,
  trailingIcon = null,
  onChange,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const [reveal, setReveal] = React.useState(false);
  const hasValue = value != null && String(value).length > 0;
  const floated = focused || hasValue;
  const accent = error ? "var(--ff-error)" : focused ? "var(--ff-green)" : "var(--ff-border)";
  const labelColor = error ? "var(--ff-error)" : focused ? "var(--ff-green)" : "var(--ff-text-2)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      background: "transparent",
      border: `1px solid ${accent}`,
      borderRadius: "var(--radius-lg)",
      padding: "0 14px",
      height: "56px",
      opacity: disabled ? 0.5 : 1,
      transition: "border-color .15s ease"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      position: "absolute",
      left: floated ? "12px" : "14px",
      top: floated ? "-8px" : "50%",
      transform: floated ? "none" : "translateY(-50%)",
      fontSize: floated ? "11px" : "15px",
      color: labelColor,
      background: floated ? "var(--ff-bg)" : "transparent",
      padding: floated ? "0 4px" : "0",
      pointerEvents: "none",
      transition: "all .15s ease"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    placeholder: focused ? placeholder : "",
    type: password && !reveal ? "password" : type,
    readOnly: readOnly,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      background: "transparent",
      border: "none",
      outline: "none",
      color: "var(--ff-text)",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      height: "100%",
      width: "100%"
    }
  }, rest)), password ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setReveal(r => !r),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "4px",
      display: "flex",
      opacity: 0.7
    },
    "aria-label": reveal ? "Ocultar" : "Mostrar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "20px",
      height: "20px",
      display: "block",
      background: "var(--ff-text-2)",
      WebkitMaskImage: `url(${window.__resources?.[reveal ? "visibilityOff" : "visibilityOn"] || `assets/icons/${reveal ? "visibility_off" : "visibility_on"}.svg`})`,
      maskImage: `url(${window.__resources?.[reveal ? "visibilityOff" : "visibilityOn"] || `assets/icons/${reveal ? "visibility_off" : "visibility_on"}.svg`})`,
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center"
    }
  })) : trailingIcon), supportingText ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 14px 0",
      fontSize: "11px",
      color: error ? "var(--ff-error)" : "var(--ff-text-3)"
    }
  }, supportingText) : null);
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AppBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FitFighters top app bar. Three modes mirroring LogoAppBar / FFAppBar / BackAppBar:
 *  - variant="logo":  centered FF mark (+ optional back arrow)
 *  - variant="title": centered title text (+ optional back arrow)
 *  - variant="back":  back arrow only
 */
function AppBar({
  variant = "title",
  title = "",
  showBack = false,
  onBack,
  trailing = null,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      height: "56px",
      padding: "0 4px",
      background: "var(--ff-bg)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "44px",
      display: "flex",
      justifyContent: "center",
      flexShrink: 0
    }
  }, showBack || variant === "back" ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onBack,
    "aria-label": "Atr\xE1s",
    style: {
      width: "44px",
      height: "44px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "none",
      border: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ff-text-2)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  }))) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 0
    }
  }, variant === "logo" ? /*#__PURE__*/React.createElement("img", {
    src: window.__resources?.ffMark || "assets/logos/ff_mark.svg",
    alt: "FitFighters",
    style: {
      height: "26px"
    }
  }) : variant === "title" ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "16px",
      color: "var(--ff-text)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, title) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "44px",
      display: "flex",
      justifyContent: "center",
      flexShrink: 0
    }
  }, trailing));
}
Object.assign(__ds_scope, { AppBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AppBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TABS = [{
  id: "chat",
  label: "Chat",
  icon: "ic_chat"
}, {
  id: "workout",
  label: "Workout",
  icon: "ic_workout"
}, {
  id: "profile",
  label: "Perfil",
  icon: "ic_account"
}];

/**
 * FitFighters bottom navigation. Three tabs: Chat · Workout · Perfil.
 * Mirrors FFBottomNavigationBar — selected icon is red, selected pill
 * uses a 15% red indicator, labels are Roboto Condensed.
 */
function BottomNav({
  active = "workout",
  onChange,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "flex",
      background: "var(--ff-navbar)",
      borderTop: "1px solid var(--ff-border)",
      padding: "8px 8px 12px",
      ...style
    }
  }, rest), TABS.map(tab => {
    const selected = tab.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      type: "button",
      onClick: () => onChange && onChange(tab.id),
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "4px 0",
        WebkitTapHighlightColor: "transparent"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "56px",
        height: "30px",
        borderRadius: "var(--radius-xl)",
        background: selected ? "var(--ff-nav-indicator)" : "transparent",
        transition: "background-color .15s ease"
      }
    }, /*#__PURE__*/React.createElement("span", {
      role: "img",
      "aria-label": tab.label,
      style: {
        width: "22px",
        height: "22px",
        display: "block",
        background: selected ? "var(--ff-red)" : "var(--ff-text-2)",
        WebkitMaskImage: `url(${window.__resources?.[({ic_chat:"icChat",ic_workout:"icWorkout",ic_account:"icAccount"}[tab.icon]) + (selected ? "Filled" : "Outlined")] || `assets/icons/${tab.icon}_${selected ? "filled" : "outlined"}.svg`})`,
        maskImage: `url(${window.__resources?.[({ic_chat:"icChat",ic_workout:"icWorkout",ic_account:"icAccount"}[tab.icon]) + (selected ? "Filled" : "Outlined")] || `assets/icons/${tab.icon}_${selected ? "filled" : "outlined"}.svg`})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "12px",
        color: selected ? "var(--ff-text)" : "rgba(240,240,240,0.5)"
      }
    }, tab.label));
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/surface/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FitFighters surface card. Flat: --ff-surface fill + 1px --ff-border,
 * radius 16. No drop shadow (the app separates surfaces tonally).
 */
function Card({
  children,
  padding = "16px",
  interactive = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--ff-surface)",
      border: "1px solid var(--ff-border)",
      borderRadius: "var(--radius-card)",
      padding,
      overflow: "hidden",
      cursor: interactive ? "pointer" : "default",
      transition: "background-color .15s ease",
      ...style
    },
    onMouseDown: interactive ? e => e.currentTarget.style.background = "var(--ff-surface-2)" : undefined,
    onMouseUp: interactive ? e => e.currentTarget.style.background = "var(--ff-surface)" : undefined,
    onMouseLeave: interactive ? e => e.currentTarget.style.background = "var(--ff-surface)" : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/Card.jsx", error: String((e && e.message) || e) }); }

// components/surface/MenuRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MenuRow — a tappable settings/profile list row: icon tile + label
 * (+ optional sublabel) + chevron. Group several inside a Card; rows
 * separate with a 1px divider. Mirrors ProfileMenuItem.
 */
function MenuRow({
  icon,
  label,
  sublabel,
  destructive = false,
  showChevron = true,
  divider = false,
  onClick,
  style = {},
  ...rest
}) {
  const labelColor = destructive ? "var(--ff-error)" : "var(--ff-text)";
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "14px 16px",
      cursor: "pointer",
      borderTop: divider ? "1px solid var(--ff-border)" : "none",
      WebkitTapHighlightColor: "transparent",
      transition: "background-color .15s ease",
      ...style
    },
    onMouseDown: e => e.currentTarget.style.background = "var(--ff-surface-2)",
    onMouseUp: e => e.currentTarget.style.background = "transparent",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "34px",
      height: "34px",
      borderRadius: "9px",
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: destructive ? "rgba(255,50,0,0.10)" : "var(--ff-surface-2)",
      border: `1px solid ${destructive ? "rgba(255,50,0,0.20)" : "var(--ff-border)"}`,
      color: destructive ? "var(--ff-error)" : "var(--ff-text-2)"
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      fontWeight: "var(--weight-medium)",
      color: labelColor
    }
  }, label), sublabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "11px",
      color: "var(--ff-text-3)",
      marginTop: "1px"
    }
  }, sublabel) : null), showChevron ? /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ff-text-3)",
    strokeWidth: "2",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  })) : null);
}
Object.assign(__ds_scope, { MenuRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/MenuRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/screens/ChangePassword.jsx
try { (() => {
// FitFighters mobile — Change Password screen.
const {
  AppBar,
  Button,
  TextField
} = window.FitFightersDesignSystem_4614fc;
function ChangePasswordScreen({
  onBack
}) {
  const [current, setCurrent] = React.useState("");
  const [next, setNext] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const canSave = current.length > 0 && next.length >= 8 && next === confirm;
  const mismatch = confirm.length > 0 && next !== confirm;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--ff-bg)"
    }
  }, /*#__PURE__*/React.createElement(AppBar, {
    variant: "title",
    title: "Cambiar contrase\xF1a",
    showBack: true,
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "0 16px 40px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--ff-text-3)",
      lineHeight: 1.6,
      padding: "18px 0 24px"
    }
  }, "Ingresa tu contrase\xF1a actual y luego elige una nueva. Usa al menos 8 caracteres."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Contrase\xF1a actual",
    value: current,
    onChange: setCurrent,
    password: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6
    }
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Nueva contrase\xF1a",
    value: next,
    onChange: setNext,
    password: true
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Confirmar nueva contrase\xF1a",
    value: confirm,
    onChange: setConfirm,
    password: true,
    error: mismatch ? "Las contraseñas no coinciden" : ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    disabled: !canSave,
    onClick: onBack
  }, "Guardar contrase\xF1a"))));
}
window.ChangePasswordScreen = ChangePasswordScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/screens/ChangePassword.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/screens/ChangeProgram.jsx
try { (() => {
// FitFighters mobile — Change Program screen (list view + program detail sub-view).
const {
  AppBar,
  Button,
  Badge
} = window.FitFightersDesignSystem_4614fc;
const DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// ── Program detail sub-view ────────────────────────────────────────────────────
function ProgramDetailView({
  program,
  onBack,
  onConfirm
}) {
  const [level, setLevel] = React.useState(1);
  const [days, setDays] = React.useState(new Set(["Lunes", "Miércoles", "Viernes"]));
  const toggleDay = d => {
    const s = new Set(days);
    s.has(d) ? s.delete(d) : s.add(d);
    setDays(s);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--ff-bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      paddingTop: "56.25%",
      background: "var(--ff-surface-2)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: program.img,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    onError: e => {
      e.target.style.display = "none";
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(0,0,0,.5) 0%, transparent 50%)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      position: "absolute",
      top: 12,
      left: 12,
      width: 40,
      height: 40,
      background: "rgba(0,0,0,.4)",
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: 52,
      height: 52,
      background: "rgba(255,50,0,.9)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "2px solid rgba(255,255,255,.2)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "white"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "5 3 19 12 5 21 5 3"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 10,
      left: 14,
      fontFamily: "var(--font-body)",
      fontSize: 11,
      color: "rgba(255,255,255,.7)",
      letterSpacing: ".06em"
    }
  }, "Video explicativo")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "16px 16px 100px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 20,
      color: "var(--ff-text)",
      margin: "0 0 6px",
      lineHeight: 1.3
    }
  }, program.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--ff-text-3)",
      margin: "0 0 12px"
    }
  }, program.levels, " niveles disponibles"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--ff-text-2)",
      lineHeight: 1.65,
      margin: "0 0 24px"
    }
  }, program.desc), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 10,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--ff-text-3)",
      margin: "0 0 10px"
    }
  }, "Elige un nivel"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 24
    }
  }, Array.from({
    length: program.levels
  }, (_, i) => i + 1).map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setLevel(l),
    style: {
      flex: 1,
      padding: "10px 0",
      borderRadius: 10,
      border: "1px solid",
      borderColor: level === l ? "var(--ff-red)" : "var(--ff-border)",
      background: level === l ? "var(--ff-red)" : "var(--ff-surface)",
      color: level === l ? "#fff" : "var(--ff-text-2)",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 500,
      cursor: "pointer"
    }
  }, l))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 10,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--ff-text-3)",
      margin: "0 0 10px"
    }
  }, "D\xEDas de entrenamiento"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8
    }
  }, DAYS.map(d => /*#__PURE__*/React.createElement("button", {
    key: d,
    onClick: () => toggleDay(d),
    style: {
      padding: "12px 16px",
      borderRadius: 12,
      border: "1px solid",
      borderColor: days.has(d) ? "rgba(255,50,0,.35)" : "var(--ff-border)",
      background: days.has(d) ? "rgba(255,50,0,.12)" : "var(--ff-surface)",
      color: days.has(d) ? "var(--ff-red-light)" : "var(--ff-text-2)",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 500,
      cursor: "pointer",
      textAlign: "center"
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      padding: "12px 16px 28px",
      background: "linear-gradient(to top, var(--ff-bg) 70%, transparent)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    disabled: days.size === 0,
    onClick: onConfirm
  }, "Cargar programa")));
}

// ── Program list main view ─────────────────────────────────────────────────────
function ChangeProgramScreen({
  onBack,
  onConfirm
}) {
  const [view, setView] = React.useState("list");
  const [selected, setSelected] = React.useState(null);
  const [filter, setFilter] = React.useState("all");
  const programs = window.FF_DATA.programs;
  if (view === "detail" && selected) {
    return /*#__PURE__*/React.createElement(ProgramDetailView, {
      program: selected,
      onBack: () => setView("list"),
      onConfirm: onConfirm
    });
  }
  const visible = filter === "all" ? programs : programs.filter(p => p.category === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--ff-bg)"
    }
  }, /*#__PURE__*/React.createElement(AppBar, {
    variant: "title",
    title: "Cambiar plan",
    showBack: true,
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "0 16px 32px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 10,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--ff-text-3)",
      margin: "8px 0 10px"
    }
  }, "Plan actual"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ff-surface)",
      borderRadius: 16,
      border: "1px solid var(--ff-red)",
      overflow: "hidden",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: programs[0].img,
    alt: "",
    style: {
      width: 48,
      height: 48,
      borderRadius: 10,
      objectFit: "cover",
      flexShrink: 0,
      background: "var(--ff-surface-2)"
    },
    onError: e => {
      e.target.style.background = "var(--ff-surface-2)";
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "active",
    dot: true
  }, "Activo"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 14,
      color: "var(--ff-text)",
      margin: "6px 0 0",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, "Novatos gym"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      padding: "8px 16px 12px",
      borderTop: "1px solid var(--ff-border)",
      background: "var(--ff-surface-2)"
    }
  }, ["Nivel 3", "2 niveles disponibles"].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 10,
      color: "var(--ff-text-2)",
      background: "var(--ff-surface)",
      border: "1px solid var(--ff-border)",
      padding: "3px 8px",
      borderRadius: 999
    }
  }, t)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 10,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--ff-text-3)",
      margin: "0 0 10px"
    }
  }, "Planes disponibles"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 14
    }
  }, [["all", "Todos"], ["gym", "Gym"], ["home", "Hogar"]].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setFilter(k),
    style: {
      padding: "6px 14px",
      borderRadius: 999,
      border: "1px solid",
      borderColor: filter === k ? "var(--ff-red)" : "var(--ff-border)",
      background: filter === k ? "var(--ff-red)" : "var(--ff-surface)",
      color: filter === k ? "#fff" : "var(--ff-text-2)",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 500,
      cursor: "pointer"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, visible.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => {
      setSelected(p);
      setView("detail");
    },
    style: {
      background: "var(--ff-surface)",
      borderRadius: 16,
      border: "1px solid var(--ff-border)",
      overflow: "hidden",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: "",
    style: {
      width: 48,
      height: 48,
      borderRadius: 10,
      objectFit: "cover",
      flexShrink: 0,
      background: "var(--ff-surface-2)"
    },
    onError: e => {
      e.target.style.display = "none";
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 13,
      color: "var(--ff-text)",
      margin: "0 0 4px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--ff-text-2)",
      margin: 0,
      lineHeight: 1.45,
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, p.desc))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 16px 10px",
      borderTop: "1px solid var(--ff-border)",
      background: "var(--ff-surface-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 10,
      color: "var(--ff-text-2)",
      background: "var(--ff-surface)",
      border: "1px solid var(--ff-border)",
      padding: "2px 7px",
      borderRadius: 999,
      textTransform: "uppercase",
      letterSpacing: ".04em"
    }
  }, p.category === "gym" ? "Gym" : "Hogar"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      color: "var(--ff-text-3)"
    }
  }, p.levels, " niveles")))))));
}
window.ChangeProgramScreen = ChangeProgramScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/screens/ChangeProgram.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/screens/EditProfile.jsx
try { (() => {
// FitFighters mobile — Edit Profile screen.
const {
  AppBar,
  Button
} = window.FitFightersDesignSystem_4614fc;
function EPFieldBlock({
  label,
  children,
  disabled
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ff-surface)",
      borderRadius: 12,
      border: "1px solid var(--ff-border)",
      padding: "12px 14px",
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 10,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--ff-text-3)",
      margin: "0 0 4px"
    }
  }, label), children);
}
function EPFieldRow({
  label,
  value,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: "var(--ff-surface)",
      borderRadius: 12,
      border: "1px solid var(--ff-border)",
      padding: "12px 14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: onClick ? "pointer" : "default"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 10,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--ff-text-3)",
      margin: "0 0 4px"
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      fontWeight: 500,
      color: "var(--ff-text)",
      margin: 0
    }
  }, value)), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ff-text-3)",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  })));
}
function EditProfileScreen({
  onBack
}) {
  const SaveBtn = /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-display)",
      fontSize: 13,
      color: "var(--ff-red)",
      paddingRight: 8
    }
  }, "Guardar");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--ff-bg)"
    }
  }, /*#__PURE__*/React.createElement(AppBar, {
    variant: "title",
    title: "Editar perfil",
    showBack: true,
    onBack: onBack,
    trailing: SaveBtn
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "0 16px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "24px 0 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      height: 88,
      borderRadius: "50%",
      background: "var(--ff-surface-2)",
      border: "2px solid var(--ff-border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--ff-text-2)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "38",
    height: "38",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21c0-4 4-6 8-6s8 2 8 6"
  }))), /*#__PURE__*/React.createElement("button", {
    style: {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: 28,
      height: 28,
      background: "var(--ff-red)",
      borderRadius: "50%",
      border: "2px solid var(--ff-bg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "4"
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--ff-text-3)",
      margin: "10px 0 0"
    }
  }, "Toca para cambiar foto")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(EPFieldBlock, {
    label: "Nombre"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      fontWeight: 500,
      color: "var(--ff-text)",
      margin: 0
    }
  }, "Eduardo")), /*#__PURE__*/React.createElement(EPFieldBlock, {
    label: "Apellido"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      fontWeight: 500,
      color: "var(--ff-text)",
      margin: 0
    }
  }, "Garc\xEDa"))), /*#__PURE__*/React.createElement(EPFieldBlock, {
    label: "Correo electr\xF3nico",
    disabled: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--ff-text-2)",
      margin: 0
    }
  }, "eduardo@gmail.com"), /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ff-text-3)",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  })))), /*#__PURE__*/React.createElement(EPFieldRow, {
    label: "Sexo",
    value: "Masculino",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(EPFieldRow, {
    label: "Fecha de nacimiento",
    value: "15 de febrero de 2008",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 8,
      padding: "4px 2px"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ff-text-3)",
    strokeWidth: "2",
    style: {
      flexShrink: 0,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12.01",
    y2: "16"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--ff-text-3)",
      lineHeight: 1.55,
      margin: 0
    }
  }, "El correo no se puede cambiar desde la app. Visita fitfighters.com para modificarlo.")))));
}
window.EditProfileScreen = EditProfileScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/screens/EditProfile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/screens/GenerationHistory.jsx
try { (() => {
// FitFighters mobile — Generation History list + Generation Detail (internal sub-view).
const {
  AppBar
} = window.FitFightersDesignSystem_4614fc;
function GenStackIcon({
  size = 28
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ff-text-3)",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2L2 7l10 5 10-5-10-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 17l10 5 10-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 12l10 5 10-5"
  }));
}
function GenProgressBar({
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 3,
      background: "var(--ff-surface-2)",
      overflow: "hidden",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: Math.min(value, 100) + "%",
      background: value < 100 ? "var(--ff-red)" : "var(--ff-green)",
      borderRadius: 3,
      transition: "width .3s"
    }
  }));
}
function GenDetailRow({
  label,
  right,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 16px",
      borderBottom: last ? "none" : "0.5px solid var(--ff-border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--ff-text-2)"
    }
  }, label), right);
}
function StatusPill({
  yes
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      padding: "3px 10px",
      borderRadius: 20,
      fontWeight: 500,
      background: yes ? "rgba(46,207,122,0.12)" : "rgba(255,92,92,0.10)",
      color: yes ? "var(--ff-green)" : "var(--ff-error)",
      border: `0.5px solid ${yes ? "rgba(46,207,122,.25)" : "rgba(255,92,92,.2)"}`
    }
  }, yes ? "Sí" : "No");
}

// ── Generation Detail ──────────────────────────────────────────────────────────
function GenerationDetailView({
  gen,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--ff-bg)"
    }
  }, /*#__PURE__*/React.createElement(AppBar, {
    variant: "title",
    title: gen.name,
    showBack: true,
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "8px 16px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ff-surface)",
      borderRadius: 20,
      border: "1px solid var(--ff-border)",
      padding: "20px 16px",
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: 14,
      background: "var(--ff-surface-2)",
      border: "0.5px solid var(--ff-border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(GenStackIcon, {
    size: 32
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 17,
      color: "var(--ff-text)",
      margin: "0 0 10px"
    }
  }, gen.name), /*#__PURE__*/React.createElement(GenProgressBar, {
    value: gen.progress
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--ff-text-2)",
      margin: "5px 0 0"
    }
  }, gen.progress, "% completado"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      color: "var(--ff-text-2)",
      padding: "18px 0 8px",
      letterSpacing: ".08em",
      textTransform: "uppercase",
      margin: 0
    }
  }, "Suscripci\xF3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ff-surface)",
      borderRadius: 14,
      border: "1px solid var(--ff-border)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(GenDetailRow, {
    label: "Fecha",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 14,
        fontWeight: 500,
        color: "var(--ff-text)"
      }
    }, gen.date)
  }), /*#__PURE__*/React.createElement(GenDetailRow, {
    label: "M\xE9todo",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 14,
        fontWeight: 500,
        color: "var(--ff-text)"
      }
    }, gen.method),
    last: true
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      color: "var(--ff-text-2)",
      padding: "18px 0 8px",
      letterSpacing: ".08em",
      textTransform: "uppercase",
      margin: 0
    }
  }, "Participaci\xF3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ff-surface)",
      borderRadius: 14,
      border: "1px solid var(--ff-border)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(GenDetailRow, {
    label: "Rese\xF1a solicitada",
    right: /*#__PURE__*/React.createElement(StatusPill, {
      yes: gen.reviewAsked
    })
  }), /*#__PURE__*/React.createElement(GenDetailRow, {
    label: "Grupo de Facebook",
    right: /*#__PURE__*/React.createElement(StatusPill, {
      yes: gen.fbGroup
    }),
    last: true
  }))));
}

// ── Generation History list ────────────────────────────────────────────────────
function GenerationHistoryScreen({
  onBack
}) {
  const [selected, setSelected] = React.useState(null);
  const generations = window.FF_DATA.generations;
  if (selected) {
    return /*#__PURE__*/React.createElement(GenerationDetailView, {
      gen: selected,
      onBack: () => setSelected(null)
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--ff-bg)"
    }
  }, /*#__PURE__*/React.createElement(AppBar, {
    variant: "title",
    title: "Generaciones",
    showBack: true,
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, generations.length === 0 ?
  /*#__PURE__*/
  // Empty state
  React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "60%",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: "var(--ff-surface-2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(GenStackIcon, {
    size: 28
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 15,
      color: "var(--ff-text)",
      margin: 0,
      textAlign: "center"
    }
  }, "Sin historial"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--ff-text-3)",
      margin: 0,
      textAlign: "center",
      padding: "0 32px"
    }
  }, "Aqu\xED aparecer\xE1n tus generaciones anteriores.")) : generations.map((gen, idx) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: gen.id
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setSelected(gen),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "12px 16px",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 12,
      background: "var(--ff-surface-2)",
      border: "0.5px solid var(--ff-border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(GenStackIcon, {
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      color: "var(--ff-text)",
      margin: 0
    }
  }, gen.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--ff-text-3)",
      margin: "2px 0 0"
    }
  }, gen.progress, "% completado \xB7 ", gen.date)), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ff-text-3)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  }))), idx < generations.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      height: "0.5px",
      background: "var(--ff-border)",
      margin: "0 16px"
    }
  })))));
}
window.GenerationHistoryScreen = GenerationHistoryScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/screens/GenerationHistory.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/screens/Login.jsx
try { (() => {
// FitFighters mobile — Login screen. Uses DS Button, TextField.
const {
  Button,
  TextField
} = window.FitFightersDesignSystem_4614fc;
function GoogleIcon() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "block",
      background: "#fff",
      WebkitMaskImage: `url(${window.__resources?.icGoogle || "../../assets/icons/ic_google.svg"})`,
      maskImage: `url(${window.__resources?.icGoogle || "../../assets/icons/ic_google.svg"})`,
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat"
    }
  });
}
function LoginScreen({
  onLogin
}) {
  const [email, setEmail] = React.useState("eduardo@gmail.com");
  const [pwd, setPwd] = React.useState("FitFighters1");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 16px 20px",
      background: "var(--ff-bg)",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources?.ffLogoBrand || "../../assets/logos/ff_logo_brand.svg",
    style: {
      width: 190
    },
    alt: "FitFighters"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--ff-text-2)",
      marginTop: 16,
      letterSpacing: ".02em"
    }
  }, "Entrena con prop\xF3sito.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Correo electr\xF3nico",
    value: email,
    onChange: setEmail
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Contrase\xF1a",
    value: pwd,
    onChange: setPwd,
    password: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      margin: "14px 0 20px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "text"
  }, "Olvid\xE9 mi contrase\xF1a")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onLogin
  }, "Iniciar sesi\xF3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      margin: "24px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--ff-border)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      color: "var(--ff-text-3)",
      textTransform: "uppercase",
      letterSpacing: ".1em"
    }
  }, "o"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--ff-border)"
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(GoogleIcon, null),
    onClick: onLogin
  }, "Continuar con Google"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--ff-text-2)",
      marginTop: 28
    }
  }, "\xBFNo tienes cuenta? ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ff-red-light)",
      fontWeight: 600
    }
  }, "Reg\xEDstrate")));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/screens/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/screens/Milestone.jsx
try { (() => {
// FitFighters mobile — Milestone / Achievement screen.
const {
  Button
} = window.FitFightersDesignSystem_4614fc;
const TOTAL_LEVELS = 7;
const CURRENT_LEVEL = 5;
function MilestoneProgressSegs() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5,
      padding: "0 20px 24px"
    }
  }, Array.from({
    length: TOTAL_LEVELS
  }, (_, i) => {
    const done = i < CURRENT_LEVEL - 1;
    const active = i === CURRENT_LEVEL - 1;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        height: 7,
        borderRadius: 2,
        background: done ? "var(--ff-red)" : active ? "rgba(255,50,0,.5)" : "var(--ff-surface-2)",
        transition: "background .3s"
      }
    });
  }));
}
function MilestoneTrophyIcon() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      height: 110,
      borderRadius: "50%",
      background: "var(--ff-primary-container)",
      border: "2px solid var(--ff-red)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "54",
    height: "54",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ff-red)",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 21h8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 3H7v8a5 5 0 0 0 10 0V3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 6H3v2a4 4 0 0 0 4 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 6h4v2a4 4 0 0 1-4 4"
  })));
}
function MilestoneScreen({
  onClose
}) {
  const [shareOpen, setShareOpen] = React.useState(false);
  const SHARE_OPTIONS = [{
    label: "WhatsApp",
    bg: "#128C7E",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "white"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11.997 2C6.477 2 2 6.477 2 11.997c0 1.99.584 3.84 1.588 5.39L2 22l4.734-1.558A9.935 9.935 0 0011.997 22C17.517 22 22 17.523 22 12.003 22 6.477 17.517 2 11.997 2z"
    }))
  }, {
    label: "Instagram",
    bg: "linear-gradient(135deg,#F58529,#DD2A7B,#515BD4)",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "white",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "2",
      width: "20",
      height: "20",
      rx: "5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17.5",
      cy: "6.5",
      r: "1",
      fill: "white"
    }))
  }, {
    label: "X",
    bg: "#000",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "white"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63z"
    }))
  }, {
    label: "Copiar",
    bg: "var(--ff-surface-2)",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--ff-text-2)",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "9",
      width: "13",
      height: "13",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
    }))
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--ff-bg)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "24px 20px 12px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 15,
      color: "var(--ff-text)",
      margin: 0
    }
  }, "Nivel ", CURRENT_LEVEL, " de ", TOTAL_LEVELS), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: "var(--ff-surface-2)",
      border: "0.5px solid var(--ff-border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ff-text-2)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })))), /*#__PURE__*/React.createElement(MilestoneProgressSegs, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "0 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      background: "var(--ff-surface)",
      borderRadius: 22,
      border: "0.5px solid var(--ff-border)",
      padding: "30px 24px 26px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -40,
      left: "50%",
      transform: "translateX(-50%)",
      width: 220,
      height: 220,
      background: "radial-gradient(circle, rgba(255,50,0,0.08) 0%, transparent 70%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement(MilestoneTrophyIcon, null), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ff-surface-2)",
      border: "0.5px solid var(--ff-border)",
      borderRadius: 6,
      padding: "4px 12px",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: "2px",
      color: "var(--ff-red)",
      textTransform: "uppercase"
    }
  }, "Logro desbloqueado")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 17,
      color: "var(--ff-red)",
      textAlign: "center",
      margin: "0 0 8px",
      letterSpacing: "-.2px"
    }
  }, "\xA1Felicidades, Paola!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--ff-text-2)",
      textAlign: "center",
      lineHeight: 1.55,
      margin: 0
    }
  }, "Has completado el ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ff-text)",
      fontWeight: 600
    }
  }, "50%"), " de tu programa", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ff-text)",
      fontWeight: 600
    }
  }, "Novatos gym \u2014 Nivel 2")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "50%",
      background: "var(--ff-red)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 10,
      color: "var(--ff-text-3)",
      letterSpacing: ".5px",
      textTransform: "uppercase"
    }
  }, "FitFighters")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px 32px",
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShareOpen(true),
    style: {
      flex: 1,
      height: 52,
      borderRadius: 14,
      background: "var(--ff-red)",
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontSize: 15,
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "16 6 12 2 8 6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "15"
  })), "Compartir logro"), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 14,
      background: "var(--ff-surface-2)",
      border: "0.5px solid var(--ff-border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ff-text-2)",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 10 12 15 17 10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "3"
  })))), shareOpen && /*#__PURE__*/React.createElement("div", {
    onClick: () => setShareOpen(false),
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,.6)",
      zIndex: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      background: "var(--ff-surface)",
      borderTop: "0.5px solid var(--ff-border)",
      borderRadius: "22px 22px 0 0",
      padding: "14px 20px 36px",
      transform: shareOpen ? "translateY(0)" : "translateY(100%)",
      transition: "transform .32s cubic-bezier(.32,.72,0,1)",
      zIndex: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 4,
      background: "var(--ff-surface-2)",
      borderRadius: 2,
      margin: "0 auto 20px"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      color: "var(--ff-text-3)",
      fontWeight: 600,
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      margin: "0 0 18px"
    }
  }, "Compartir v\xEDa"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      overflowX: "auto",
      paddingBottom: 4
    }
  }, SHARE_OPTIONS.map(opt => /*#__PURE__*/React.createElement("div", {
    key: opt.label,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      cursor: "pointer",
      minWidth: 58
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      height: 54,
      borderRadius: 16,
      background: opt.bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "0.5px solid rgba(255,255,255,.06)"
    }
  }, opt.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      color: "var(--ff-text-2)",
      textAlign: "center",
      whiteSpace: "nowrap"
    }
  }, opt.label))))));
}
window.MilestoneScreen = MilestoneScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/screens/Milestone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/screens/Profile.jsx
try { (() => {
// FitFighters mobile — Profile screen.
const {
  AppBar,
  BottomNav,
  Card,
  MenuRow,
  Badge
} = window.FitFightersDesignSystem_4614fc;
function ProfileIcon(children) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, children);
}
function ProfileSectionLabel({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 10,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--ff-text-3)",
      margin: "20px 2px 8px"
    }
  }, children);
}
function ProfileScreen({
  tab,
  onTab,
  onEditProfile,
  onChangePassword,
  onChangeProgram,
  onGenerations
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      background: "var(--ff-bg)"
    }
  }, /*#__PURE__*/React.createElement(AppBar, {
    variant: "logo"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "8px 16px 90px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "12px 0 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: "50%",
      background: "var(--ff-surface-2)",
      border: "2px solid var(--ff-border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--ff-text-2)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "34",
    height: "34",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21c0-4 4-6 8-6s8 2 8 6"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: onEditProfile,
    style: {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: 22,
      height: 22,
      background: "var(--ff-red)",
      borderRadius: "50%",
      border: "2px solid var(--ff-bg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 17,
      color: "var(--ff-text)",
      margin: 0
    }
  }, "Eduardo Garc\xEDa"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--ff-text-2)",
      margin: "3px 0 10px"
    }
  }, "eduardo@gmail.com"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "Novatos gym"), /*#__PURE__*/React.createElement(Badge, null, "Nivel 3"), /*#__PURE__*/React.createElement(Badge, {
    tone: "active",
    dot: true
  }, "Activo")))), /*#__PURE__*/React.createElement(ProfileSectionLabel, null, "Suscripci\xF3n"), /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      borderColor: "rgba(46,207,122,0.3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "active",
    dot: true
  }, "Activo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--ff-text-2)"
    }
  }, "Generaci\xF3n actual"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--ff-text)"
    }
  }, "Generaci\xF3n X")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--ff-text-2)"
    }
  }, "Vence"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--ff-red-light)"
    }
  }, "20 de marzo de 2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px",
      borderTop: "1px solid var(--ff-border)",
      background: "var(--ff-surface-2)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--ff-text-2)",
      lineHeight: 1.5,
      margin: "0 0 10px"
    }
  }, "Gestiona tu plan en ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ff-text)",
      fontWeight: 500
    }
  }, "fitfighters.com"), " \u2014 renovaciones, cambios de plan y m\xE1s."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      width: "100%",
      padding: "10px",
      background: "var(--ff-red)",
      borderRadius: 10,
      fontFamily: "var(--font-display)",
      fontSize: 13,
      color: "#fff",
      cursor: "pointer"
    }
  }, "Ir a fitfighters.com", /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "white",
    strokeWidth: "2.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "15 3 21 3 21 9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "14",
    x2: "21",
    y2: "3"
  }))))), /*#__PURE__*/React.createElement(ProfileSectionLabel, null), /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement(MenuRow, {
    icon: ProfileIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 2L2 7l10 5 10-5-10-5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2 17l10 5 10-5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2 12l10 5 10-5"
    }))),
    label: "Generaciones anteriores",
    onClick: onGenerations
  })), /*#__PURE__*/React.createElement(ProfileSectionLabel, null, "Cuenta"), /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement(MenuRow, {
    icon: ProfileIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
    }))),
    label: "Editar perfil",
    onClick: onEditProfile
  }), /*#__PURE__*/React.createElement(MenuRow, {
    icon: ProfileIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
      points: "17 1 21 5 17 9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 11V9a4 4 0 0 1 4-4h14"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "7 23 3 19 7 15"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 13v2a4 4 0 0 1-4 4H3"
    }))),
    label: "Modificar o cambiar plan",
    divider: true,
    onClick: onChangeProgram
  }), /*#__PURE__*/React.createElement(MenuRow, {
    icon: ProfileIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "11",
      width: "18",
      height: "11",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 11V7a5 5 0 0 1 10 0v4"
    }))),
    label: "Cambiar contrase\xF1a",
    sublabel: "Solo cuentas con correo",
    divider: true,
    onClick: onChangePassword
  })), /*#__PURE__*/React.createElement(ProfileSectionLabel, null, "Soporte"), /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement(MenuRow, {
    icon: ProfileIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polygon", {
      points: "12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2"
    }))),
    label: "Escribir rese\xF1a"
  }), /*#__PURE__*/React.createElement(MenuRow, {
    icon: ProfileIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "17",
      x2: "12",
      y2: "17"
    }))),
    label: "Preguntas frecuentes",
    divider: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      paddingTop: 16,
      borderTop: "1px solid var(--ff-border)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement(MenuRow, {
    icon: ProfileIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "16 17 21 12 16 7"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      y1: "12",
      x2: "9",
      y2: "12"
    }))),
    label: "Cerrar sesi\xF3n",
    destructive: true,
    showChevron: false
  }), /*#__PURE__*/React.createElement(MenuRow, {
    icon: ProfileIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
      points: "3 6 5 6 21 6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"
    }))),
    label: "Eliminar cuenta",
    sublabel: "Esta acci\xF3n es permanente",
    destructive: true,
    showChevron: false,
    divider: true
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontFamily: "var(--font-body)",
      fontSize: 10,
      color: "var(--ff-text-3)",
      padding: 16
    }
  }, "FitFighters v2.0.0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0
    }
  }, /*#__PURE__*/React.createElement(BottomNav, {
    active: tab,
    onChange: onTab
  })));
}
window.ProfileScreen = ProfileScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/screens/Profile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/screens/Summary.jsx
try { (() => {
// FitFighters mobile — Workout summary.
const {
  Button,
  SectionBadge,
  SECTION_TYPES
} = window.FitFightersDesignSystem_4614fc;
function StatCard({
  label,
  value,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ff-surface)",
      borderRadius: 12,
      padding: 14,
      border: "1px solid var(--ff-border)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 10,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--ff-text-3)",
      margin: "0 0 6px"
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 26,
      color: "var(--ff-text)",
      margin: 0
    }
  }, value), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      color: "var(--ff-text-3)",
      margin: "2px 0 0"
    }
  }, sub));
}
function SummaryScreen({
  onHome
}) {
  const s = window.FF_DATA.summary;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      overflowY: "auto",
      position: "relative",
      background: "var(--ff-bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 190,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(135deg,#2a1410 0%,#161018 55%,#101a14 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to bottom, rgba(15,15,15,.2) 0%, var(--ff-bg) 100%)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onHome,
    style: {
      position: "absolute",
      top: 16,
      left: 16,
      width: 36,
      height: 36,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.1)",
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5M12 5l-7 7 7 7"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 20,
      left: 20,
      right: 20
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--ff-text-2)",
      margin: "0 0 4px"
    }
  }, s.program), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 20,
      color: "#fff",
      margin: 0
    }
  }, s.routine))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 40px",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "12px 0 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 60,
      height: 60,
      borderRadius: "50%",
      background: "var(--ff-primary-container)",
      border: "2px solid var(--ff-red)",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ff-red)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--ff-red)",
      margin: "0 0 2px"
    }
  }, "Rutina completada"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--ff-text-3)",
      margin: 0
    }
  }, "\xA1Excelente trabajo, sigue as\xED!")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ff-surface)",
      borderRadius: 16,
      padding: 20,
      border: "1px solid var(--ff-border)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 10,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--ff-text-3)",
      margin: "0 0 6px"
    }
  }, "Tiempo total"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 38,
      color: "var(--ff-text)",
      margin: 0
    }
  }, s.totalTime)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Ejercicios",
    value: s.exercises,
    sub: "realizados"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Secciones",
    value: s.sectionsCount,
    sub: "completadas"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 10,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--ff-text-3)",
      margin: "4px 0 0"
    }
  }, "Detalle por secci\xF3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, s.rows.map((r, i) => {
    const color = SECTION_TYPES[r.type].color;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: "var(--ff-surface)",
        borderRadius: 12,
        padding: "14px 16px",
        border: "1px solid var(--ff-border)",
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(SectionBadge, {
      type: r.type,
      showLabel: false
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 10,
        textTransform: "uppercase",
        letterSpacing: ".08em",
        color: "var(--ff-text-2)",
        margin: "0 0 2px"
      }
    }, SECTION_TYPES[r.type].label), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 13,
        color: "var(--ff-text)",
        margin: 0
      }
    }, r.name)), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 16,
        margin: 0,
        color: r.muted ? "var(--ff-text-3)" : color
      }
    }, r.value, r.unit ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 12,
        color: "var(--ff-text-3)",
        fontWeight: 400
      }
    }, " ", r.unit) : null), r.sub ? /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 11,
        color: "var(--ff-text-3)",
        margin: "1px 0 0"
      }
    }, r.sub) : null));
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onHome,
    style: {
      marginTop: 4
    }
  }, "Volver al inicio")));
}
window.SummaryScreen = SummaryScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/screens/Summary.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/screens/Trainer.jsx
try { (() => {
// FitFighters mobile — Virtual trainer. Supports all 7 section block types.
const {
  Button,
  SECTION_TYPES
} = window.FitFightersDesignSystem_4614fc;
const SECTION_CFG = {
  cycle: {
    label: "Repeticiones",
    bgTint: "rgba(255,50,0,0.04)",
    isTime: false
  },
  stripset: {
    label: "Repeticiones",
    bgTint: "rgba(255,154,60,0.04)",
    isTime: false
  },
  rest: {
    label: "Descanso",
    bgTint: "rgba(107,122,141,0.06)",
    isTime: true
  },
  amrap: {
    label: "Tiempo restante",
    bgTint: "rgba(77,166,255,0.04)",
    isTime: true
  },
  fortime: {
    label: "Tiempo",
    bgTint: "rgba(46,207,122,0.04)",
    isTime: true
  },
  emom: {
    label: "En el minuto",
    bgTint: "rgba(199,125,255,0.04)",
    isTime: true
  },
  cardio: {
    label: "Tiempo activo",
    bgTint: "rgba(77,166,255,0.04)",
    isTime: true
  }
};
function TrainerPanelItem({
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "0 22px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 26,
      color: "#fff",
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 9,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,.4)",
      marginTop: 3
    }
  }, label));
}
function TrainerCtrlBtn({
  children,
  label,
  primary,
  danger,
  color,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      width: primary ? 56 : 44,
      height: primary ? 56 : 44,
      borderRadius: "50%",
      background: primary ? color : danger ? "rgba(255,50,0,0.12)" : "rgba(255,255,255,0.08)",
      border: `1px solid ${primary ? color : danger ? "rgba(255,50,0,0.25)" : "rgba(255,255,255,0.12)"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 9,
      textTransform: "uppercase",
      letterSpacing: ".04em",
      color: danger ? "rgba(255,92,92,.7)" : "rgba(255,255,255,.4)"
    }
  }, label));
}
function TrainerScreen({
  onExit,
  onFinish
}) {
  const ex = window.FF_DATA.exercises;
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const cur = ex[idx];
  const type = cur.type || "cycle";
  const cfg = SECTION_CFG[type] || SECTION_CFG.cycle;
  const color = (SECTION_TYPES[type] || SECTION_TYPES["cycle"]).color;
  const displayValue = cfg.isTime ? cur.time || "00:00" : cur.reps;
  const isRest = type === "rest";
  const next = () => idx < ex.length - 1 ? setIdx(idx + 1) : onFinish();
  const prev = () => setIdx(Math.max(0, idx - 1));

  // Info panel varies by block type
  let infoPanel = null;
  if (!paused) {
    if (type === "cycle" || type === "stripset") {
      infoPanel = /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          alignSelf: "center",
          background: "rgba(255,255,255,0.05)",
          borderRadius: 12,
          border: "1px solid rgba(255,255,255,0.1)",
          padding: "8px 0",
          marginTop: 6
        }
      }, /*#__PURE__*/React.createElement(TrainerPanelItem, {
        value: cur.serie,
        label: "Serie"
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          width: 1,
          height: 30,
          background: "rgba(255,255,255,0.1)"
        }
      }), /*#__PURE__*/React.createElement(TrainerPanelItem, {
        value: cur.total,
        label: "Total"
      }));
    } else if (type === "emom") {
      infoPanel = /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          alignSelf: "center",
          background: "rgba(255,255,255,0.05)",
          borderRadius: 12,
          border: "1px solid rgba(255,255,255,0.1)",
          padding: "8px 0",
          marginTop: 6
        }
      }, /*#__PURE__*/React.createElement(TrainerPanelItem, {
        value: cur.minCurrent || 3,
        label: "Minuto"
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          width: 1,
          height: 30,
          background: "rgba(255,255,255,0.1)"
        }
      }), /*#__PURE__*/React.createElement(TrainerPanelItem, {
        value: cur.minTotal || 7,
        label: "Total"
      }));
    } else if (type === "rest" && idx + 1 < ex.length) {
      infoPanel = /*#__PURE__*/React.createElement("p", {
        style: {
          fontFamily: "var(--font-body)",
          fontSize: 12,
          color: "rgba(255,255,255,.4)",
          textAlign: "center",
          margin: "8px 0 0"
        }
      }, "Pr\xF3ximo: ", ex[idx + 1].name);
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      background: "#0a0a0a",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      paddingTop: "56.25%",
      background: "#111",
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${cur.img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: isRest || paused ? "saturate(.35) brightness(.55)" : "none",
      transition: "filter .3s"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to bottom, rgba(0,0,0,.45) 0%, transparent 35%, transparent 60%, rgba(0,0,0,.6) 100%)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onExit,
    style: {
      position: "absolute",
      top: 10,
      left: 6,
      width: 44,
      height: 44,
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      right: 14,
      background: `${color}26`,
      borderRadius: 999,
      padding: "3px 9px",
      border: `1px solid ${color}4d`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 9,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color
    }
  }, type)), paused && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 13,
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,.85)"
    }
  }, "En pausa"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      padding: "20px 20px",
      gap: 16,
      background: cfg.bgTint
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 15,
      color: "#fff",
      lineHeight: 1.35,
      textAlign: "center",
      margin: 0
    }
  }, cur.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
      flex: 1,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 60,
      color,
      lineHeight: 1,
      textShadow: `0 0 40px ${color}59`
    }
  }, displayValue), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: `${color}b3`
    }
  }, cfg.label), infoPanel), !paused ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(TrainerCtrlBtn, {
    label: "Anterior",
    color: color,
    onClick: prev
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "19 20 9 12 19 4 19 20"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "19",
    x2: "5",
    y2: "5"
  }))), /*#__PURE__*/React.createElement(TrainerCtrlBtn, {
    label: "Pausar",
    primary: true,
    color: color,
    onClick: () => setPaused(true)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "4",
    width: "4",
    height: "16"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "4",
    width: "4",
    height: "16"
  }))), /*#__PURE__*/React.createElement(TrainerCtrlBtn, {
    label: "Siguiente",
    color: color,
    onClick: next
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "5 4 15 12 5 20 5 4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "19",
    y1: "5",
    x2: "19",
    y2: "19"
  }))), /*#__PURE__*/React.createElement(TrainerCtrlBtn, {
    label: "Sonido",
    color: color
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.54 8.46a5 5 0 0 1 0 7.07"
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setPaused(false)
  }, "Reanudar"), /*#__PURE__*/React.createElement("button", {
    onClick: onFinish,
    style: {
      width: "100%",
      padding: 13,
      borderRadius: 10,
      background: "rgba(255,50,0,0.12)",
      border: "1px solid rgba(255,50,0,0.3)",
      color: "var(--ff-error)",
      fontFamily: "var(--font-display)",
      fontSize: 13,
      cursor: "pointer"
    }
  }, "Detener"))));
}
window.TrainerScreen = TrainerScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/screens/Trainer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/screens/WorkoutList.jsx
try { (() => {
// FitFighters mobile — Workout (home) screen: program header + action card + today's sections.
const {
  AppBar,
  BottomNav,
  Button,
  SectionBadge,
  SECTION_TYPES
} = window.FitFightersDesignSystem_4614fc;

// Action card configs per subscription state
const ACTION_CARDS = {
  ready: {
    bg: "var(--ff-action-danger-bg)",
    border: "var(--ff-action-danger-border)",
    iconBg: "rgba(255,50,0,0.15)",
    iconColor: "var(--ff-red)",
    title: "Tu siguiente programa está listo",
    desc: "Ya puedes adelantar el inicio de tu próximo programa.",
    cta: "Comenzar ahora",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--ff-red)",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "5 3 19 12 5 21 5 3"
    }))
  },
  credits: {
    bg: "var(--ff-action-info-bg)",
    border: "var(--ff-action-info-border)",
    iconBg: "rgba(80,130,220,0.15)",
    iconColor: "#5082DC",
    title: "Tienes beneficios disponibles",
    desc: "Tienes créditos en tu cuenta. Visita nuestro sitio web para utilizarlos.",
    cta: null,
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#5082DC",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "16",
      x2: "12.01",
      y2: "16"
    }))
  },
  invitation: {
    bg: "var(--ff-action-info-bg)",
    border: "var(--ff-action-info-border)",
    iconBg: "rgba(80,130,220,0.15)",
    iconColor: "#5082DC",
    title: "Tienes una invitación",
    desc: "Fuiste invitado a unirte a una nueva generación. Acepta o rechaza en fitfighters.com.",
    cta: "Ver invitación",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#5082DC",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
    }))
  },
  future: {
    bg: "var(--ff-surface)",
    border: "var(--ff-border)",
    iconBg: "rgba(200,160,32,0.12)",
    iconColor: "#C8A020",
    title: "Tu próxima generación inicia pronto",
    desc: "Estás suscrito y tu nueva generación comenzará el 1 de julio de 2026.",
    cta: null,
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#C8A020",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "2",
      x2: "16",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "10",
      x2: "21",
      y2: "10"
    }))
  },
  lastWeek: {
    bg: "var(--ff-action-success-bg)",
    border: "var(--ff-action-success-border)",
    iconBg: "rgba(46,207,122,0.12)",
    iconColor: "var(--ff-green)",
    title: "¡Última semana de tu programa!",
    desc: "Has llegado a la semana final. ¡Sigue así para completarlo con éxito!",
    cta: null,
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--ff-green)",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
    }))
  }
};
const VARIANT_KEYS = ["ready", "credits", "invitation", "future", "lastWeek"];
const VARIANT_LABELS = {
  ready: "Listo",
  credits: "Créditos",
  invitation: "Invitación",
  future: "Próxima gen.",
  lastWeek: "Última sem."
};
function ProgressBar({
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 3,
      background: "var(--ff-surface-2)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: value + "%",
      height: "100%",
      background: "var(--ff-red)",
      borderRadius: 3
    }
  }));
}
function SectionCard({
  s,
  defaultOpen
}) {
  const [open, setOpen] = React.useState(!!defaultOpen);
  if (s.type === "rest") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 16px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--ff-border)"
      }
    }), /*#__PURE__*/React.createElement(SectionBadge, {
      type: "rest",
      label: "Descanso"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 13,
        color: "var(--ff-text-3)"
      }
    }, s.meta), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--ff-border)"
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ff-surface)",
      border: "1px solid var(--ff-border)",
      borderRadius: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(o => !o),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 16px",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(SectionBadge, {
    type: s.type,
    label: s.name
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--ff-text-2)"
    }
  }, s.meta), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ff-text-2)",
    strokeWidth: "2",
    style: {
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform .25s"
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--ff-border)"
    }
  }, s.exercises.map((ex, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 16px",
      borderTop: i ? "1px solid var(--ff-border)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 9,
      background: "var(--ff-surface-2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: 600,
      color: "var(--ff-text-3)"
    }
  }, i + 1)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--ff-text)",
      lineHeight: 1.3
    }
  }, ex)))));
}
function ActionCard({
  card,
  onDismiss
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 14,
      padding: "14px 16px",
      background: card.bg,
      border: `0.5px solid ${card.border}`,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: card.iconBg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, card.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--ff-text)",
      margin: "0 0 3px",
      lineHeight: 1.3
    }
  }, card.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--ff-text-2)",
      margin: 0,
      lineHeight: 1.45
    }
  }, card.desc)), /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 2,
      color: "var(--ff-text-3)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })))), card.cta && /*#__PURE__*/React.createElement("button", {
    style: {
      width: "100%",
      padding: "10px 16px",
      background: "var(--ff-red)",
      borderRadius: 10,
      border: "none",
      fontFamily: "var(--font-display)",
      fontSize: 13,
      color: "#fff",
      cursor: "pointer"
    }
  }, card.cta));
}
function WorkoutScreen({
  onStart,
  tab,
  onTab
}) {
  const d = window.FF_DATA;
  const p = d.program;
  const [variantIdx, setVariantIdx] = React.useState(0);
  const [cardDismissed, setCardDismissed] = React.useState(false);
  const cycleVariant = () => {
    setVariantIdx(i => (i + 1) % VARIANT_KEYS.length);
    setCardDismissed(false);
  };
  const currentVariant = VARIANT_KEYS[variantIdx];
  const card = ACTION_CARDS[currentVariant];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      background: "var(--ff-bg)"
    }
  }, /*#__PURE__*/React.createElement(AppBar, {
    variant: "logo"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "4px 16px 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ff-surface)",
      border: "1px solid var(--ff-border)",
      borderRadius: 16,
      padding: 18,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      color: "var(--ff-text-3)",
      textTransform: "uppercase",
      letterSpacing: ".1em",
      margin: "0 0 6px"
    }
  }, p.generation), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 20,
      color: "var(--ff-text)",
      lineHeight: 1.2,
      letterSpacing: "-.3px",
      margin: 0
    }
  }, p.name)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      fontWeight: 600,
      color: "var(--ff-red-light)",
      background: "var(--ff-primary-container)",
      border: "1px solid rgba(255,50,0,.25)",
      padding: "4px 10px",
      borderRadius: 999,
      whiteSpace: "nowrap"
    }
  }, "Nivel ", p.level)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      margin: "14px 0 8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--ff-text-2)"
    }
  }, "Semana ", p.week), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--ff-text)",
      fontWeight: 600
    }
  }, p.progress, "%")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: p.progress
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 12,
      overflowX: "auto",
      paddingBottom: 2
    }
  }, VARIANT_KEYS.map((k, i) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => {
      setVariantIdx(i);
      setCardDismissed(false);
    },
    style: {
      padding: "3px 10px",
      borderRadius: 999,
      border: "1px solid",
      flexShrink: 0,
      borderColor: variantIdx === i ? "var(--ff-red)" : "var(--ff-border)",
      background: variantIdx === i ? "var(--ff-primary-container)" : "transparent",
      color: variantIdx === i ? "var(--ff-red-light)" : "var(--ff-text-3)",
      fontFamily: "var(--font-body)",
      fontSize: 10,
      cursor: "pointer",
      letterSpacing: ".04em"
    }
  }, VARIANT_LABELS[k]))), !cardDismissed && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(ActionCard, {
    card: card,
    onDismiss: () => setCardDismissed(true)
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 16,
      color: "var(--ff-text)",
      margin: "0 2px 4px"
    }
  }, "Tu rutina de hoy"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--ff-text-2)",
      margin: "0 2px 16px"
    }
  }, p.day), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, d.sections.map((s, i) => /*#__PURE__*/React.createElement(SectionCard, {
    key: i,
    s: s,
    defaultOpen: i === 0
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px",
      background: "linear-gradient(to top, var(--ff-bg) 70%, transparent)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onStart
  }, "Comenzar rutina")), /*#__PURE__*/React.createElement(BottomNav, {
    active: tab,
    onChange: onTab
  })));
}
window.WorkoutScreen = WorkoutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/screens/WorkoutList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/screens/app.jsx
try { (() => {
// FitFighters mobile — orchestrator + Android device frame + navigation.

function StatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px 4px",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 600,
      color: "#fff"
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "11",
    viewBox: "0 0 16 11",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "4",
    width: "3",
    height: "7",
    rx: ".5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.5",
    y: "2.5",
    width: "3",
    height: "8.5",
    rx: ".5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "1",
    width: "3",
    height: "10",
    rx: ".5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13",
    y: "0",
    width: "3",
    height: "11",
    rx: ".5"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.42 9a16 16 0 0 1 21.16 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 12.55a11 11 0 0 1 14.08 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.54 16.1a6 6 0 0 1 2.92 0"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "20",
    r: "1",
    fill: "#fff"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "25",
    height: "11",
    viewBox: "0 0 25 11",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: ".5",
    y: ".5",
    width: "21",
    height: "10",
    rx: "2",
    stroke: "#fff",
    strokeOpacity: ".35"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "1.5",
    y: "1.5",
    width: "17",
    height: "8",
    rx: "1.5",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 3.5v4a2 2 0 0 0 0-4z",
    fill: "#fff",
    opacity: ".4"
  }))));
}
function GestureBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 20,
      display: "flex",
      justifyContent: "center",
      padding: "8px 0 9px",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      height: 4,
      borderRadius: 2,
      background: "rgba(255,255,255,0.25)"
    }
  }));
}
function App() {
  const [screen, setScreen] = React.useState("login");
  const [tab, setTab] = React.useState("workout");
  const nav = {
    login: () => {
      setTab("workout");
      setScreen("workout");
    },
    workout: () => {
      setTab("workout");
      setScreen("workout");
    },
    trainer: () => setScreen("trainer"),
    summary: () => setScreen("summary"),
    milestone: () => setScreen("milestone"),
    profile: () => {
      setTab("profile");
      setScreen("profile");
    },
    editProfile: () => setScreen("editProfile"),
    changePassword: () => setScreen("changePassword"),
    changeProgram: () => setScreen("changeProgram"),
    generationHistory: () => setScreen("generationHistory")
  };
  const onTab = t => {
    setTab(t);
    if (t === "profile") setScreen("profile");else if (t === "workout") setScreen("workout");else setScreen("workout"); // chat — no dedicated screen yet
  };
  let body;
  switch (screen) {
    case "login":
      body = /*#__PURE__*/React.createElement(LoginScreen, {
        onLogin: nav.login
      });
      break;
    case "workout":
      body = /*#__PURE__*/React.createElement(WorkoutScreen, {
        tab: tab,
        onTab: onTab,
        onStart: nav.trainer
      });
      break;
    case "profile":
      body = /*#__PURE__*/React.createElement(ProfileScreen, {
        tab: tab,
        onTab: onTab,
        onEditProfile: nav.editProfile,
        onChangePassword: nav.changePassword,
        onChangeProgram: nav.changeProgram,
        onGenerations: nav.generationHistory
      });
      break;
    case "editProfile":
      body = /*#__PURE__*/React.createElement(EditProfileScreen, {
        onBack: nav.profile
      });
      break;
    case "changePassword":
      body = /*#__PURE__*/React.createElement(ChangePasswordScreen, {
        onBack: nav.profile
      });
      break;
    case "changeProgram":
      body = /*#__PURE__*/React.createElement(ChangeProgramScreen, {
        onBack: nav.profile,
        onConfirm: nav.workout
      });
      break;
    case "generationHistory":
      body = /*#__PURE__*/React.createElement(GenerationHistoryScreen, {
        onBack: nav.profile
      });
      break;
    case "trainer":
      body = /*#__PURE__*/React.createElement(TrainerScreen, {
        onExit: nav.workout,
        onFinish: nav.summary
      });
      break;
    case "summary":
      body = /*#__PURE__*/React.createElement(SummaryScreen, {
        onHome: nav.workout,
        onMilestone: nav.milestone
      });
      break;
    case "milestone":
      body = /*#__PURE__*/React.createElement(MilestoneScreen, {
        onClose: nav.workout
      });
      break;
    default:
      body = /*#__PURE__*/React.createElement(LoginScreen, {
        onLogin: nav.login
      });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#000",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 390,
      height: 844,
      background: "#0a0a0a",
      borderRadius: 44,
      boxShadow: "0 0 0 2px #2a2a2a, 0 0 0 7px #111, 0 40px 90px rgba(0,0,0,.7)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      paddingTop: 30,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: "relative",
      overflow: "hidden"
    },
    key: screen
  }, body)), /*#__PURE__*/React.createElement(GestureBar, null)));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/screens/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/screens/data.js
try { (() => {
// FitFighters mobile — shared mock data for the UI kit.
// NOTE: only seed if the consuming page hasn't already provided its own FF_DATA
// (our data.js carries extra fields like `week` and `milestone`).
window.FF_DATA = window.FF_DATA || {
  program: {
    name: "Aumento de masa muscular",
    generation: "Generación X",
    level: 2,
    week: 1,
    progress: 40,
    day: "Martes — Pecho y tríceps"
  },
  // Live trainer queue — typed exercises covering all 7 block types
  exercises: [{
    name: "Press de pecho mancuernas en banco inclinado",
    type: "cycle",
    reps: 15,
    serie: 2,
    total: 3,
    img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg"
  }, {
    name: "Aperturas con mancuernas en banco plano",
    type: "cycle",
    reps: 12,
    serie: 1,
    total: 3,
    img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg"
  }, {
    name: "Descanso activo",
    type: "rest",
    time: "02:00",
    img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg"
  }, {
    name: "Flexiones explosivas — For time",
    type: "fortime",
    time: "00:00",
    img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg"
  }, {
    name: "Burpees",
    type: "amrap",
    time: "08:00",
    img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg"
  }, {
    name: "Press con barra — EMOM",
    type: "emom",
    time: "00:45",
    minCurrent: 3,
    minTotal: 7,
    img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg"
  }, {
    name: "Curl de bíceps",
    type: "stripset",
    reps: 10,
    serie: 3,
    total: 5,
    img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg"
  }, {
    name: "Trote continuo",
    type: "cardio",
    time: "08:20",
    img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg"
  }],
  sections: [{
    type: "cycle",
    name: "Ciclo 1",
    meta: "3 series",
    exercises: ["Press inclinado mancuerna", "Aperturas banco plano", "Press militar sentado"]
  }, {
    type: "rest",
    name: "Descanso 1",
    meta: "2:00"
  }, {
    type: "fortime",
    name: "For time 1",
    meta: "4 rondas",
    exercises: ["Flexiones", "Fondos en banco", "Plancha 30 s"]
  }, {
    type: "amrap",
    name: "Amrap 1",
    meta: "8:00",
    exercises: ["Burpees", "Mountain climbers"]
  }, {
    type: "emom",
    name: "Emom 1",
    meta: "7 min",
    exercises: ["Press con barra"]
  }, {
    type: "stripset",
    name: "Stripset 1",
    meta: "5 series",
    exercises: ["Curl de bíceps", "Extensión tríceps"]
  }, {
    type: "cardio",
    name: "Cardio 1",
    meta: "8:20",
    exercises: ["Trote continuo"]
  }],
  summary: {
    program: "Novatos gym",
    routine: "Rutina Tradicional 1",
    totalTime: "01:18:42",
    exercises: 24,
    sectionsCount: 7,
    rows: [{
      type: "cycle",
      name: "Ciclo 1",
      value: "2",
      unit: "series"
    }, {
      type: "rest",
      name: "Descanso 1",
      value: "2:00",
      muted: true
    }, {
      type: "fortime",
      name: "For time 1",
      value: "08:34",
      sub: "tiempo final"
    }, {
      type: "amrap",
      name: "Amrap 1",
      value: "8",
      unit: "rondas"
    }, {
      type: "emom",
      name: "Emom 1",
      value: "7",
      unit: "min",
      sub: "máx 13 reps"
    }, {
      type: "stripset",
      name: "Stripset 1",
      value: "5",
      unit: "series"
    }, {
      type: "cardio",
      name: "Cardio 1",
      value: "08:20",
      sub: "tiempo activo"
    }]
  },
  programs: [{
    id: 1,
    name: "Aumento de masa muscular hogareño",
    desc: "Diseñado para aumentar la masa muscular de forma magra sin aumentar el porcentaje de grasa.",
    category: "home",
    levels: 2,
    img: "https://d10422z5a9xpxu.cloudfront.net/V2/staging/programs/5eeb86f7cb596824b0c7e2ff/1655878808252.jpg"
  }, {
    id: 2,
    name: "Entrenamiento con tu propio peso",
    desc: "Entrena con tu propio peso corporal sin necesidad de equipamiento adicional.",
    category: "home",
    levels: 2,
    img: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1648024721296.jpg"
  }, {
    id: 3,
    name: "Novatos hogareños",
    desc: "Para personas con poca o nula experiencia que quieren entrenar desde su hogar.",
    category: "home",
    levels: 2,
    img: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1648026106702.jpg"
  }, {
    id: 4,
    name: "Prueba Beta 2.0",
    desc: "Programa de hipertrofia de alta intensidad diseñado para usuarios beta de la nueva app.",
    category: "gym",
    levels: 2,
    img: "https://d3gfgejixr95u4.cloudfront.net/app/staging/programs/5eeb86f7cb596824b0c7e2ff/1Cntax90vQ-programa%20beta.png"
  }, {
    id: 5,
    name: "Pérdida de grasa",
    desc: "Pierde la mayor cantidad de grasa posible en el menor tiempo sin perder masa muscular.",
    category: "home",
    levels: 2,
    img: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1646898005757.jpg"
  }, {
    id: 6,
    name: "Recomposición corporal",
    desc: "Pierde esa última capa de grasa mientras aumentas tu masa muscular.",
    category: "gym",
    levels: 2,
    img: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1646896097969.jpg"
  }, {
    id: 7,
    name: "Pérdida de grasa hogareño",
    desc: "Lo mismo que pérdida de grasa, pero desde la comodidad de tu hogar.",
    category: "home",
    levels: 2,
    img: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1648025172566.jpg"
  }, {
    id: 8,
    name: "Recomposición corporal hogareño",
    desc: "Pierde grasa y gana músculo desde la comodidad de tu hogar.",
    category: "home",
    levels: 2,
    img: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1648024087598.jpg"
  }],
  generations: [{
    id: 2,
    name: "Generación 2",
    progress: 42,
    date: "28 ago 2023",
    method: "Crédito",
    reviewAsked: true,
    fbGroup: false
  }, {
    id: 1,
    name: "Generación 1",
    progress: 100,
    date: "15 ene 2023",
    method: "Stripe",
    reviewAsked: true,
    fbGroup: true
  }, {
    id: 0,
    name: "Generación 0",
    progress: 100,
    date: "1 ago 2022",
    method: "Stripe",
    reviewAsked: false,
    fbGroup: false
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/screens/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.SECTION_TYPES = __ds_scope.SECTION_TYPES;

__ds_ns.SectionBadge = __ds_scope.SectionBadge;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.AppBar = __ds_scope.AppBar;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.MenuRow = __ds_scope.MenuRow;

})();
