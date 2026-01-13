# React Context vs Zustand — Render Performance Experiment

This project is a **side-by-side performance experiment** that compares how **React Context API** and **Zustand** behave in terms of **component re-rendering** under identical UI and interaction conditions.

The goal is not to benchmark raw speed, but to **visually and practically demonstrate how state propagation affects render scope** in real React component trees.

---

## 🎯 Purpose

Both implementations render the **same UI**, use the **same components**, and expose the **same interactions** (sliders, toggles, user settings, etc.).

The **only difference** between the two sides is **how state is consumed**:

- **React Context** uses a single provider and shared state.
- **Zustand** uses granular selectors subscribed at the **leaf component level**.

This allows you to observe:

- Which components re-render
- How far renders propagate
- How different architectural choices affect render isolation

---

## 🧠 Key Concept Demonstrated

### React Context

- Context updates are **broadcast** to all consumers of the provider.
- Even if a component only uses a small slice of state, it still re-renders when the provider value changes.
- Optimizations require provider splitting or additional patterns.

### Zustand

- Components subscribe via **selectors**.
- Only components that depend on the changed state re-render.
- State updates are **localized** and do not propagate through the tree.

This project intentionally uses **leaf-level subscriptions** in the Zustand version to demonstrate its best-case render behavior.

## 🛠 Tech Stack

- React 19
- TypeScript
- Zustand 5
- Vite
- Tailwind CSS
- react-scan
- ESLint

---
