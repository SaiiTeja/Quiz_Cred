# Theme System (Quick Guide)

This project uses **CSS variables + Tailwind theme tokens** to support **light and dark mode** with semantic colors.

---

## 1. Theme Layers

```text
Palette → Semantic Tokens → Components
```

* **Palette** → raw colors (`--primary`, `--background`)
* **Semantic tokens** → UI meaning (`--color-primary`, `--color-border`)
* **Components** → buttons, cards, quiz UI

---

## 2. Light / Dark Mode

Light theme is defined in `:root`.

Dark theme overrides values using the `.dark` class.

Example:

```css
:root {
  --background: hsl(220 20% 97%);
}

.dark {
  --background: hsl(0 0% 5%);
}
```

Toggle theme:

```js
document.documentElement.classList.toggle("dark")
```

---

## 3. Core Tokens

| Token          | Purpose               |
| -------------- | --------------------- |
| `--background` | page background       |
| `--surface`    | cards / panels        |
| `--foreground` | main text             |
| `--border`     | borders               |
| `--muted`      | subtle UI areas       |
| `--primary`    | main brand actions    |
| `--secondary`  | secondary UI elements |

---

## 4. Status Colors

Used for feedback states.

| Token       | Meaning       |
| ----------- | ------------- |
| `--info`    | informational |
| `--success` | success       |
| `--warning` | warning       |
| `--error`   | error         |

---

## 5. Quiz Tokens

Used by the quiz component.

```css
--color-quiz-option-a
--color-quiz-option-b
--color-quiz-option-c
--color-quiz-option-d
--color-quiz-correct
--color-quiz-incorrect
```

---

## 6. Usage Example

```css
.card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
}

.button-primary {
  background: var(--color-primary);
  color: var(--color-primary-foreground);
}
```

---

## Summary

* Supports **light & dark themes**
* Uses **semantic design tokens**
* Integrates with **Tailwind theme variables**
* Keeps UI consistent and scalable
