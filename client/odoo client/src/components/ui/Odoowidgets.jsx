import { T } from "../../styles/tokens";

/* ──────────────────────────────────────────────
   StatCard
   Props: label, value, sub, valueStyle
────────────────────────────────────────────── */
export function StatCard({ label, value, sub, valueStyle }) {
    return (
        <div
            style={{
                background: T.white,
                border: `1px solid ${T.border}`,
                borderRadius: T.radius,
                padding: "14px 16px",
            }}
        >
            <div
                style={{
                    fontSize: 11,
                    color: T.textM,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: ".5px",
                    marginBottom: 4,
                }}
            >
                {label}
            </div>
            <div style={{ fontSize: 22, fontWeight: 600, color: T.text, ...valueStyle }}>
                {value}
            </div>
            {sub && (
                <div style={{ fontSize: 11, color: T.textS, marginTop: 2 }}>{sub}</div>
            )}
        </div>
    );
}

/* ──────────────────────────────────────────────
   SectionLabel  —  horizontal divider with label
   Props: icon (emoji/text), children
────────────────────────────────────────────── */
export function SectionLabel({ icon, children }) {
    return (
        <div
            style={{
                fontSize: "11.5px",
                fontWeight: 600,
                color: T.textM,
                textTransform: "uppercase",
                letterSpacing: ".6px",
                margin: "12px 0 6px",
                display: "flex",
                alignItems: "center",
                gap: 6,
            }}
        >
            {icon && <span style={{ fontSize: 13 }}>{icon}</span>}
            {children}
            <div style={{ flex: 1, borderTop: `1px solid ${T.border}` }} />
        </div>
    );
}

/* ──────────────────────────────────────────────
   OdooFormSection  —  purple heading inside forms
   Props: icon (string), children
────────────────────────────────────────────── */
export function OdooFormSection({ icon, children }) {
    return (
        <div
            style={{
                fontSize: 14,
                fontWeight: 600,
                color: T.purple,
                borderBottom: `1px solid ${T.purpleMid}`,
                paddingBottom: 6,
                margin: "16px 0 12px",
                display: "flex",
                alignItems: "center",
                gap: 6,
            }}
        >
            {icon} {children}
        </div>
    );
}

/* ──────────────────────────────────────────────
   FormGroup  —  label + input wrapper
   Props: label, children
────────────────────────────────────────────── */
export function FormGroup({ label, children }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <label
                style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: T.textM,
                    textTransform: "uppercase",
                    letterSpacing: ".4px",
                }}
            >
                {label}
            </label>
            {children}
        </div>
    );
}

/* ──────────────────────────────────────────────
   OInput  —  Odoo-styled text/number/date input
   Passes all props through to <input>
────────────────────────────────────────────── */
export function OInput({ style, ...props }) {
    const base = {
        border: `1px solid ${T.border}`,
        borderRadius: T.radius,
        padding: "6px 10px",
        fontSize: 13,
        color: T.text,
        background: T.white,
        outline: "none",
        width: "100%",
        transition: ".15s",
    };
    return (
        <input
            style={{ ...base, ...style }}
            onFocus={(e) => (e.target.style.borderColor = T.purple)}
            onBlur={(e) => (e.target.style.borderColor = T.border)}
            {...props}
        />
    );
}

/* ──────────────────────────────────────────────
   FilterBtn  —  toolbar filter/group/sort button
   Props: children
────────────────────────────────────────────── */
export function FilterBtn({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                border: `1px solid ${T.border}`,
                background: T.white,
                borderRadius: T.radius,
                padding: "4px 10px",
                fontSize: "12.5px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4,
                color: T.textM,
                fontFamily: "inherit",
            }}
        >
            {children}
        </button>
    );
}

/* ──────────────────────────────────────────────
   OdooTable  —  full Odoo-style data table
   Props:
     headers : string[]           — column headings
     rows    : ReactNode[]        — <tr> elements
────────────────────────────────────────────── */
export function OdooTable({ headers, rows }) {
    return (
        <div
            style={{
                background: T.white,
                border: `1px solid ${T.border}`,
                borderRadius: T.radius,
                overflow: "hidden",
            }}
        >
            <table>
                <thead>
                    <tr>
                        {headers.map((h, i) => (
                            <th
                                key={i}
                                style={{
                                    background: "#f8f8f8",
                                    fontSize: "11.5px",
                                    fontWeight: 600,
                                    color: T.textM,
                                    textTransform: "uppercase",
                                    letterSpacing: ".5px",
                                    padding: "7px 12px",
                                    borderBottom: `1px solid ${T.border}`,
                                    textAlign: "left",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}