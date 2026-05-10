import { STATUS_MAP } from "../../styles/tokens";

/**
 * Pill  —  status / category badge
 *
 * Props:
 *  status  : keyof STATUS_MAP  (e.g. "ongoing" | "done" | "info" | "warning")
 *  children: optional label override (uses STATUS_MAP label by default)
 *  style   : optional extra inline styles
 */
export default function Pill({ status = "info", children, style }) {
    const s = STATUS_MAP[status] || STATUS_MAP.info;
    return (
        <span
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 3,
                padding: "2px 8px",
                borderRadius: 10,
                fontSize: 11,
                fontWeight: 500,
                background: s.bg,
                color: s.color,
                whiteSpace: "nowrap",
                ...style,
            }}
        >
            {children ?? s.label}
        </span>
    );
}