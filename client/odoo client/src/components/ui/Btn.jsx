import { T } from "../../styles/tokens";

/**
 * Btn  —  Odoo-style button
 *
 * Props:
 *  variant : "default" | "primary" | "success" | "danger"
 *  size    : "md" | "sm"
 *  onClick : handler
 *  disabled: boolean
 *  style   : extra inline styles
 *  children: content
 */
export default function Btn({
    variant = "default",
    size = "md",
    onClick,
    disabled = false,
    style,
    children,
}) {
    const base = {
        border: `1px solid ${T.border}`,
        background: T.white,
        color: T.text,
        padding: size === "sm" ? "3px 9px" : "5px 12px",
        fontSize: size === "sm" ? 12 : 12.5,
        borderRadius: T.radius,
        cursor: disabled ? "not-allowed" : "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        whiteSpace: "nowrap",
        transition: ".15s",
        opacity: disabled ? 0.6 : 1,
        fontFamily: "inherit",
    };

    const variants = {
        primary: { background: T.purple, borderColor: T.purple, color: "#fff" },
        success: { background: T.success, borderColor: T.success, color: "#fff" },
        danger: { background: T.danger, borderColor: T.danger, color: "#fff" },
    };

    return (
        <button
            style={{ ...base, ...(variants[variant] ?? {}), ...style }}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}