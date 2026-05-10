import { T, STATUS_MAP } from "../../styles/tokens";
import Pill from "./Pill";

/**
 * TripListCard  —  horizontal list row for trips
 * Used in: TripsScreen, AdminScreen
 *
 * Props:
 *  emoji    : string
 *  name     : string
 *  dates    : string  (full date + days string)
 *  status   : keyof STATUS_MAP
 *  colorKey : keyof STATUS_MAP  (icon background tint)
 *  onClick  : handler
 */
export default function TripListCard({ emoji, name, dates, status, colorKey, onClick }) {
    const iconBg = STATUS_MAP[colorKey]?.bg ?? T.purpleLight;

    return (
        <div
            onClick={onClick}
            style={{
                background: T.white,
                border: `1px solid ${T.border}`,
                borderRadius: T.radius,
                padding: "10px 14px",
                marginBottom: 6,
                display: "flex",
                alignItems: "center",
                gap: 12,
                cursor: onClick ? "pointer" : "default",
                transition: ".15s",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = T.purple;
                e.currentTarget.style.background = T.purpleLight;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = T.border;
                e.currentTarget.style.background = T.white;
            }}
        >
            {/* Icon bubble */}
            <div
                style={{
                    width: 36,
                    height: 36,
                    borderRadius: T.radius,
                    background: iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    flexShrink: 0,
                }}
            >
                {emoji}
            </div>

            {/* Text */}
            <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500, fontSize: 13 }}>{name}</div>
                <div style={{ fontSize: "11.5px", color: T.textM, marginTop: 1 }}>{dates}</div>
            </div>

            <Pill status={status} />
            <span style={{ color: T.textS, fontSize: 14 }}>›</span>
        </div>
    );
}