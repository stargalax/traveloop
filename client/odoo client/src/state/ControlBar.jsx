import { T } from "../styles/tokens";

/**
 * ControlBar  —  breadcrumb bar + action buttons
 *
 * Props:
 *  breadcrumbs : Array<{ label: string, onClick?: () => void }>
 *  children    : action buttons (Btn, FilterBtn, etc.)
 */
export function ControlBar({ breadcrumbs, children }) {
    return (
        <div
            style={{
                background: T.white,
                borderBottom: `1px solid ${T.border}`,
                padding: "0 20px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                height: T.headerH,
                flexShrink: 0,
            }}
        >
            {/* Breadcrumb */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    color: T.textM,
                    fontSize: 13,
                }}
            >
                {breadcrumbs.map((crumb, i) => (
                    <span
                        key={i}
                        style={{ display: "flex", alignItems: "center", gap: 4 }}
                    >
                        {i > 0 && <span style={{ color: T.textS }}>›</span>}
                        {crumb.onClick ? (
                            <a
                                onClick={crumb.onClick}
                                style={{ color: T.purple, cursor: "pointer" }}
                            >
                                {crumb.label}
                            </a>
                        ) : (
                            <span>{crumb.label}</span>
                        )}
                    </span>
                ))}
            </div>

            <div style={{ flex: 1 }} />
            {children}
        </div>
    );
}

/**
 * SearchBar  —  filter/search toolbar row
 *
 * Props:
 *  children : SearchInput, FilterBtn elements
 */
export function SearchBar({ children }) {
    return (
        <div
            style={{
                background: T.white,
                borderBottom: `1px solid ${T.border}`,
                padding: "6px 20px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexShrink: 0,
            }}
        >
            {children}
        </div>
    );
}

/**
 * SearchInput  —  inline search field used inside SearchBar
 *
 * Props:
 *  placeholder : string
 *  value       : string
 *  onChange    : handler
 *  maxWidth    : number (default 480)
 */
export function SearchInput({
    placeholder,
    value,
    onChange,
    maxWidth = 480,
}) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                border: `1px solid ${T.border}`,
                borderRadius: T.radius,
                background: T.white,
                maxWidth,
                height: 32,
                padding: "0 10px",
                gap: 6,
                flex: 1,
            }}
        >
            <i
                className="ti ti-search"
                style={{ color: T.textS, fontSize: 15, flexShrink: 0 }}
            />
            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={{
                    border: "none",
                    outline: "none",
                    fontSize: 13,
                    flex: 1,
                    background: "transparent",
                    color: T.text,
                    fontFamily: "inherit",
                }}
            />
        </div>
    );
}

/**
 * View  —  scrollable main content area
 *
 * Props: children
 */
export function View({ children, style }) {
    return (
        <div
            style={{
                padding: "16px 20px",
                flex: 1,
                overflowY: "auto",
                ...style,
            }}
        >
            {children}
        </div>
    );
}