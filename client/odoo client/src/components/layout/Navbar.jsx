import { T } from "../../styles/tokens";

/**
 * Navbar  —  top purple bar
 *
 * Props:
 *  user          : { name, initials }
 *  currentScreen : string
 *  navigate      : (screenId: string) => void
 */

const NAV_TABS = [
    { id: "home", label: "Home", icon: "ti-home" },
    { id: "trips", label: "My Trips", icon: "ti-map-2" },
    { id: "community", label: "Community", icon: "ti-users" },
    { id: "admin", label: "Dashboard", icon: "ti-chart-bar" },
];

// Screens that belong to the "home" nav tab
const HOME_FAMILY = new Set([
    "home", "trips", "create-trip", "build-itinerary",
    "itinerary-view", "checklist", "notes", "invoice", "profile", "search",
]);

export default function Navbar({ user, currentScreen, navigate }) {
    const activeTab =
        HOME_FAMILY.has(currentScreen) ? "home"
            : currentScreen;

    return (
        <div
            style={{
                height: T.headerH,
                background: T.purple,
                display: "flex",
                alignItems: "center",
                padding: "0 12px",
                gap: 8,
                flexShrink: 0,
                zIndex: 100,
            }}
        >
            {/* Logo */}
            <div
                style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 15,
                    letterSpacing: "-.3px",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                }}
            >
                <i className="ti ti-plane-tilt" style={{ fontSize: 18 }} />
                Traveloop
            </div>

            {/* Tab buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginLeft: 8 }}>
                {NAV_TABS.map((tab) => {
                    const isActive =
                        tab.id === "community" ? currentScreen === "community"
                            : tab.id === "admin" ? currentScreen === "admin"
                                : tab.id === activeTab;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => navigate(tab.id)}
                            style={{
                                background: isActive ? "rgba(255,255,255,.15)" : "none",
                                border: "none",
                                color: isActive ? "#fff" : "rgba(255,255,255,.8)",
                                padding: "4px 10px",
                                borderRadius: T.radius,
                                cursor: "pointer",
                                fontSize: 12,
                                display: "flex",
                                alignItems: "center",
                                gap: 4,
                                fontFamily: "inherit",
                                transition: ".15s",
                            }}
                        >
                            <i className={`ti ${tab.icon}`} />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            <div style={{ flex: 1 }} />

            {/* User */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "rgba(255,255,255,.9)",
                    fontSize: 12,
                }}
            >
                <span style={{ opacity: 0.8 }}>{user.name}</span>
                <div
                    style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                        fontWeight: 600,
                        color: "#fff",
                    }}
                >
                    {user.initials}
                </div>
            </div>
        </div>
    );
}