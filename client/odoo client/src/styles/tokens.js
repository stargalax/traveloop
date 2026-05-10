/**
 * tokens.js
 * Odoo-exact design tokens.
 * Import T from here in every component — never hardcode colors.
 */

export const T = {
    // Brand
    purple: "#714B67",
    purpleLight: "#F1EEF4",
    purpleMid: "#d5c0d8",

    // Semantic
    primary: "#017E84",
    primaryLight: "#E8F4F5",
    success: "#28A745",
    successLight: "#EAF3DE",
    warning: "#E67E22",
    warningLight: "#FAEEDA",
    danger: "#D9534F",
    dangerLight: "#FCEBEB",
    info: "#378ADD",
    infoLight: "#E6F1FB",

    // Neutral
    bg: "#F5F5F4",
    white: "#ffffff",
    border: "#dee2e6",
    text: "#212529",
    textM: "#6C757D",
    textS: "#ADB5BD",

    // Geometry
    radius: "4px",

    // Layout
    sidebarW: "220px",
    headerH: "46px",
};

/**
 * STATUS_MAP
 * Maps trip/entity status strings → { bg, color, label }
 * Used by Pill.jsx and anywhere status colours are needed.
 */
export const STATUS_MAP = {
    ongoing: { bg: T.infoLight, color: "#185FA5", label: "Ongoing" },
    upcoming: { bg: T.warningLight, color: "#854F0B", label: "Upcoming" },
    planned: { bg: T.purpleLight, color: T.purple, label: "Planned" },
    done: { bg: T.successLight, color: "#3B6D11", label: "Done" },
    // Generic semantic aliases (for non-trip contexts)
    info: { bg: T.infoLight, color: "#185FA5", label: "" },
    success: { bg: T.successLight, color: "#3B6D11", label: "" },
    warning: { bg: T.warningLight, color: "#854F0B", label: "" },
    danger: { bg: T.dangerLight, color: T.danger, label: "" },
    purple: { bg: T.purpleLight, color: T.purple, label: "" },
};

/**
 * SIDEBAR_NAV
 * Centralised nav structure consumed by Sidebar.jsx.
 * 'screen' must match an ID in SCREEN_MAP (App.jsx).
 */
export const SIDEBAR_NAV = [
    {
        title: "Planning",
        items: [
            { screen: "home", icon: "ti-layout-dashboard", label: "Overview" },
            { screen: "trips", icon: "ti-map-2", label: "My Trips", badge: "5" },
            { screen: "create-trip", icon: "ti-plus", label: "New Trip" },
            { screen: "build-itinerary", icon: "ti-list-check", label: "Itinerary Builder" },
            { screen: "checklist", icon: "ti-checklist", label: "Packing Checklist" },
        ],
    },
    {
        title: "Explore",
        items: [
            { screen: "search", icon: "ti-search", label: "Search Places" },
            { screen: "community", icon: "ti-users", label: "Community" },
        ],
    },
    {
        title: "Finance",
        items: [
            { screen: "itinerary-view", icon: "ti-calendar-event", label: "Itinerary View" },
            { screen: "invoice", icon: "ti-receipt", label: "Expenses / Invoice" },
            { screen: "notes", icon: "ti-notebook", label: "Trip Notes" },
        ],
    },
    {
        title: "Account",
        items: [
            { screen: "profile", icon: "ti-user-circle", label: "My Profile" },
            { screen: "admin", icon: "ti-shield", label: "Admin Panel" },
        ],
    },
];

/** Global CSS injected once by App.jsx */
export const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap');
  @import url('https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.44.0/tabler-icons.min.css');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body, #root { height: 100%; overflow: hidden; }
  body {
    font-family: 'Noto Sans', system-ui, sans-serif;
    font-size: 13px;
    color: #212529;
    background: #F5F5F4;
  }
  input, select, textarea, button { font-family: inherit; font-size: 13px; }
  ::-webkit-scrollbar { width: 6px; height: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: #dee2e6; border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: #ADB5BD; }
  a { text-decoration: none; cursor: pointer; }
  table { border-collapse: collapse; width: 100%; }
`;