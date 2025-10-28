// import { createSlice } from "@reduxjs/toolkit";

// const getInitialTheme = () => {
//   if (typeof localStorage !== "undefined") {
//     return localStorage.getItem("theme") || "light";
//   }
//   return "light";
// };

// const themeSlice = createSlice({
//   name: "theme",
//   initialState: {
//     mode: getInitialTheme(),
//   },
//   reducers: {
//     toggleTheme: (state) => {
//       state.mode = state.mode === "light" ? "dark" : "light";
//       localStorage.setItem("theme", state.mode);
//       document.documentElement.classList.toggle("dark", state.mode === "dark");
//     },
//     setTheme: (state, action) => {
//       state.mode = action.payload;
//       localStorage.setItem("theme", state.mode);
//       document.documentElement.classList.toggle("dark", state.mode === "dark");
//     },
//   },
// });

// export const { toggleTheme, setTheme } = themeSlice.actions;
// export default themeSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }
  return "light";
};

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: getInitialTheme(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.mode);
      document.documentElement.classList.toggle("dark", state.mode === "dark");
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem("theme", action.payload);
      document.documentElement.classList.toggle("dark", action.payload === "dark");
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
