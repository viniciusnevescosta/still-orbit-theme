const storageKey = "still-orbit-theme";
const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");
const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
const toast = document.getElementById("copy-toast");
const toastMessage = document.getElementById("copy-toast-message");
const mistThemeColor = "oklch(95.1% 0.009 78.3)";
const nightThemeColor = "oklch(28.1% 0.016 248.4)";
const lightInk = "oklch(96.3% 0.009 78.3)";
const darkInk = "oklch(28.1% 0.016 248.4)";
let toastTimer: number | undefined;

const contrastColor = (value: string) => {
  const match = value.match(/oklch\(\s*([0-9.]+)%?/i);
  if (!match) return lightInk;
  const lightness = Number.parseFloat(match[1]);
  return lightness > 72 ? darkInk : lightInk;
};

const getMode = () => (root.classList.contains("dark") ? "night" : "mist");

const renderTheme = (mode: "mist" | "night") => {
  const isNight = mode === "night";
  root.dataset.theme = isNight ? "still-orbit-night" : "still-orbit-mist";
  root.classList.toggle("dark", isNight);
  window.localStorage.setItem(storageKey, mode);

  if (toggle) {
    const nextLabel = isNight ? "Still Orbit Mist" : "Still Orbit Night";
    toggle.setAttribute("aria-label", `Switch to ${nextLabel}`);
    toggle.setAttribute("title", `Switch to ${nextLabel}`);
  }

  if (themeColor) {
    themeColor.setAttribute("content", isNight ? nightThemeColor : mistThemeColor);
  }

  document.querySelectorAll<HTMLElement>("[data-current-value]").forEach((node) => {
    const card = node.closest<HTMLElement>("[data-copy-current]");
    if (!card) return;
    const value = isNight ? card.dataset.dark : card.dataset.light;
    if (!value) return;
    node.textContent = value;
    card.style.setProperty("--swatch-bg", value);
    card.style.setProperty("--swatch-fg", contrastColor(value));
  });
};

const showToast = (message: string, color?: string) => {
  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;
  toast.style.setProperty("--toast-dot-color", color || "var(--so-accent-soft)");

  window.clearTimeout(toastTimer);
  toast.classList.remove("is-visible");
  void toast.offsetWidth;
  toast.classList.add("is-visible");

  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1700);
};

const copyText = async (value: string) => {
  try {
    await navigator.clipboard.writeText(value);
    showToast(`Copied ${value}`, value);
  } catch {
    const area = document.createElement("textarea");
    area.value = value;
    area.setAttribute("readonly", "");
    area.style.position = "absolute";
    area.style.left = "-9999px";
    document.body.append(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    showToast(`Copied ${value}`, value);
  }
};

toggle?.addEventListener("click", () => {
  renderTheme(getMode() === "night" ? "mist" : "night");
});

document.addEventListener("keydown", (event) => {
  if (
    event.key.toLowerCase() === "d" &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.altKey &&
    !(event.target instanceof HTMLInputElement) &&
    !(event.target instanceof HTMLTextAreaElement)
  ) {
    renderTheme(getMode() === "night" ? "mist" : "night");
  }
});

document.querySelectorAll<HTMLElement>("[data-copy], [data-copy-current]").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.hasAttribute("data-copy-current")
      ? button.querySelector<HTMLElement>("[data-current-value]")?.textContent?.trim()
      : button.getAttribute("data-copy");
    if (!value) return;
    copyText(value);
  });
});

renderTheme(getMode() as "mist" | "night");
