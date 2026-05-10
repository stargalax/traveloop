import { T, SIDEBAR_NAV } from "../../styles/tokens";

/**
 * Sidebar  —  left nav panel
 *
 * Props:
 *  currentScreen : string
 *  navigate      : (screenId: string) => void
 */
export default function Sidebar({ currentScreen, navigate }) {
    return (
        <div
            style={{
                width: T.sidebarW,
                background: T.white,
                borderRight: `1px solid ${T.border}`,
                display: "flex",
                flexDirection: "column",
                flexShrink: 0,
                overflowY: "auto",
            }}
        >
            {SIDEBAR_NAV.map((section) => (
                <div key={section.title} style={{ padding: "8px 0" }}>
                    {/* Section heading */}
                    <div
                        style={{
                            fontSize: 10,
                            fontWeight: 600,
                            color: T.textS,
                            textTransform: "uppercase",
                            letterSpacing: ".8px",
                            padding: "4px 16px 2px",
                        }}
                    >
                        {section.title}
                    </div>

                    {/* Items */}
                    {section.items.map((item) => (
                        <SidebarItem
                            key={item.screen}
                            icon={item.icon}
                            label={item.label}
                            badge={item.badge}
                            active={currentScreen === item.screen}
                            onClick={() => navigate(item.screen)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

/* ── private sub-component ── */
function SidebarItem({ icon, label, badge, active, onClick }) {
    return (
        <div
            onClick={onClick}
            style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 16px",
                cursor: "pointer",
                color: active ? T.purple : T.textM,
                fontSize: 13,
                transition: ".1s",
                borderLeft: active ? `3px solid ${T.purple}` : "3px solid transparent",
                background: active ? T.purpleLight : "transparent",
                fontWeight: active ? 500 : 400,
                userSelect: "none",
            }}
            onMouseEnter={(e) => {
                if (!active) {
                    e.currentTarget.style.background = T.purpleLight;
                    e.currentTarget.style.color = T.purple;
                }
            }}
            onMouseLeave={(e) => {
                if (!active) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = T.textM;
                }
            }}
        >
            <i className={`ti ${icon}`} style={{ fontSize: 16, flexShrink: 0 }} />
            <span style={{ flex: 1 }}>{label}</span>
            {badge && (
                <span
                    style={{
                        background: T.purple,
                        color: "#fff",
                        borderRadius: 10,
                        fontSize: 10,
                        padding: "1px 6px",
                    }}
                >
                    {badge}
                </span>
            )}
        </div>
    );
}