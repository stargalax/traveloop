import { T } from "../../styles/tokens";

/**
 * TripCard  —  compact grid card (used in Home picks, CreateTrip suggestions)
 *
 * Props:
 *  emoji   : string
 *  title   : string
 *  meta    : string
 *  onClick : handler (optional)
 */
export default function TripCard({ emoji, title, meta, onClick }) {
    return (
        <div
            onClick={onClick}
            style={{
                background: T.white,
                border: `1px solid ${T.border}`,
                borderRadius: T.radius,
                overflow: "hidden",
                cursor: onClick ? "pointer" : "default",
                transition: ".15s",
                minWidth: 0,
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,.1)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
            }}
        >
            <div
                style={{
                    height: 90,
                    background: T.purpleLight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                }}
            >
                {emoji}
            </div>
            <div style={{ padding: "8px 10px" }}>
                <div style={{ fontWeight: 500, fontSize: 13 }}>{title}</div>
                <div style={{ fontSize: 11, color: T.textM, marginTop: 2 }}>{meta}</div>
            </div>
        </div>
    );
}