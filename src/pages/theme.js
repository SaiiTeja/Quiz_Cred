export const getTheme = (darkMode) => ({
  colors: {
    background: darkMode ? "#0f0f14" : "#f8fafc",
    text: darkMode ? "#ffffff" : "#111827",
    subText: darkMode ? "#b3b3b3" : "#4b5563",

    // 💜 PURPLE BRAND COLOR
    brand: "#7c3aed", // Main purple
    brandDark: "#5b21b6", // Dark purple
    brandLight: "#a78bfa", // Light purple
  },

  gradients: {
    // Purple gradient for CTA
    cta: "linear-gradient(135deg, #5b21b6, #7c3aed, #a78bfa)",
  },

  layout: {
    card: darkMode ? "rgba(255,255,255,0.05)" : "#ffffff",
    border: darkMode ? "1px solid #1f2937" : "1px solid #e5e7eb",
  },
});
