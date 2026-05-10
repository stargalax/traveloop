import { ControlBar, View } from "../state/ControlBar";
import { FilterBtn, StatCard } from "../components/ui/OdooWidgets";
import Btn from "../components/ui/Btn";
import Pill from "../components/ui/Pill";
import { T, STATUS_MAP } from "../styles/tokens";

/**
 * ItineraryViewScreen
 *
 * Props:
 *  days            : db.itineraryDays[]
 *  budgetBreakdown : db.budgetBreakdown[]
 *  invoice         : db.invoice  (for budget totals)
 *  navigate        : (screenId) => void
 */
export default function ItineraryViewScreen({ days, budgetBreakdown, invoice, navigate }) {
    const remaining = invoice.budget - invoice.spent;

    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
            <ControlBar
                breadcrumbs={[
                    { label: "My Trips", onClick: () => navigate("trips") },
                    { label: "Himachal Road Trip — Itinerary" },
                ]}
            >
                <FilterBtn><i className="ti ti-filter" /> Filter</FilterBtn>
                <Btn size="sm" style={{ marginLeft: 6 }}><i className="ti ti-printer" /> Print</Btn>
                <Btn variant="primary" size="sm" style={{ marginLeft: 6 }}><i className="ti ti-edit" /> Edit</Btn>
            </ControlBar>

            <View>
                {/* Title row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <div style={{ fontSize: 16, fontWeight: 600 }}>🏔 Himachal Road Trip — Full Itinerary</div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <Pill status="ongoing" />
                        <span style={{ fontSize: 12, color: T.textM }}>May 8 – May 18, 2026</span>
                    </div>
                </div>

                {/* Two-column layout */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 260px", gap: 16 }}>
                    {/* Left: itinerary days */}
                    <div>
                        {days.map((day) => (
                            <ItineraryDay key={day.id} day={day} />
                        ))}
                    </div>

                    {/* Right: budget panel */}
                    <div>
                        <StatCard label="Total Budget" value={`₹${invoice.budget.toLocaleString()}`} sub="allocated" />
                        <div style={{ marginTop: 10 }}>
                            <StatCard label="Spent So Far" value={`₹${invoice.spent.toLocaleString()}`} sub={`of ₹${invoice.budget.toLocaleString()}`} valueStyle={{ color: T.danger }} />
                        </div>
                        <div style={{ marginTop: 10 }}>
                            <StatCard label="Remaining" value={`₹${remaining.toLocaleString()}`} sub="available" valueStyle={{ color: T.success }} />
                        </div>

                        {/* Budget breakdown bars */}
                        <div
                            style={{
                                background: T.white,
                                border: `1px solid ${T.border}`,
                                borderRadius: T.radius,
                                padding: 10,
                                marginTop: 10,
                            }}
                        >
                            <div style={{ fontSize: 12, fontWeight: 600, color: T.textM, marginBottom: 8, textTransform: "uppercase", letterSpacing: ".4px" }}>
                                Budget Breakdown
                            </div>
                            {budgetBreakdown.map((b) => (
                                <BudgetBar key={b.label} {...b} />
                            ))}
                        </div>
                    </div>
                </div>
            </View>
        </div>
    );
}

/* ── ItineraryDay sub-component ── */
function ItineraryDay({ day }) {
    return (
        <div style={{ marginBottom: 16 }}>
            <div
                style={{
                    background: T.purpleLight,
                    color: T.purple,
                    fontWeight: 600,
                    fontSize: 13,
                    padding: "6px 12px",
                    borderRadius: `${T.radius} ${T.radius} 0 0`,
                    border: `1px solid ${T.purpleMid}`,
                }}
            >
                {day.header}
            </div>
            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    background: T.white,
                    border: `1px solid ${T.border}`,
                    borderTop: "none",
                }}
            >
                <thead>
                    <tr>
                        {["Activity", "Type", "Cost (₹)"].map((h) => (
                            <th
                                key={h}
                                style={{
                                    background: "#f8f8f8",
                                    fontSize: 11,
                                    fontWeight: 600,
                                    color: T.textM,
                                    padding: "5px 10px",
                                    textAlign: "left",
                                    textTransform: "uppercase",
                                    letterSpacing: ".4px",
                                }}
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {day.rows.map((row, i) => (
                        <tr key={i}>
                            <td style={{ padding: "7px 10px", borderTop: "1px solid #f0f0f0" }}>{row.activity}</td>
                            <td style={{ padding: "7px 10px", borderTop: "1px solid #f0f0f0" }}>
                                <Pill status={row.typeStatus}>{row.type}</Pill>
                            </td>
                            <td style={{ padding: "7px 10px", borderTop: "1px solid #f0f0f0" }}>
                                {row.cost.toLocaleString()}
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td
                            colSpan={2}
                            style={{ textAlign: "right", fontWeight: 600, fontSize: 12, color: T.textM, padding: "7px 10px" }}
                        >
                            Day Total
                        </td>
                        <td style={{ fontWeight: 600, padding: "7px 10px" }}>
                            {day.total.toLocaleString()}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

/* ── BudgetBar sub-component ── */
function BudgetBar({ label, amount, pct, colorKey }) {
    const color = STATUS_MAP[colorKey]?.color ?? T.purple;
    return (
        <div style={{ marginBottom: 8 }}>
            <div style={{ fontSize: 12, color: T.textM, marginBottom: 4 }}>
                {label}
                <span style={{ float: "right", color: T.text }}>₹{amount.toLocaleString()}</span>
            </div>
            <div style={{ height: 6, background: "#f0f0f0", borderRadius: 3 }}>
                <div style={{ height: 6, background: color, borderRadius: 3, width: `${pct}%` }} />
            </div>
        </div>
    );
}