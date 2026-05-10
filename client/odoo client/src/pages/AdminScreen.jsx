import { ControlBar, View } from "../state/ControlBar";
import { StatCard } from "../components/ui/OdooWidgets";
import { T } from "../styles/tokens";
import { STATUS_MAP } from "../styles/tokens";

/**
 * AdminScreen
 *
 * Props:
 *  adminStats         : db.adminStats
 *  adminRecentTrips   : db.adminRecentTrips[]
 *  adminMonthlyBookings : db.adminMonthlyBookings[]
 *  navigate           : (screenId) => void
 */
export default function AdminScreen({ adminStats, adminRecentTrips, adminMonthlyBookings, navigate }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
            <ControlBar
                breadcrumbs={[
                    { label: "Home", onClick: () => navigate("home") },
                    { label: "Admin Dashboard" },
                ]}
            >
                <button style={{ border: `1px solid ${T.border}`, background: "#fff", color: T.text, padding: "4px 10px", borderRadius: T.radius, cursor: "pointer", fontSize: 12 }}>This Month</button>
                <button style={{ border: `1px solid ${T.border}`, background: T.purple, color: "#fff", padding: "4px 10px", borderRadius: T.radius, cursor: "pointer", fontSize: 12 }}>Export Report</button>
            </ControlBar>

            <View>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                    <StatCard label="Total Users" value={adminStats.users} sub="↑ 12% this month" />
                    <StatCard label="Active Trips" value={adminStats.activeTrips} sub="ongoing now" />
                    <StatCard label="Revenue" value={adminStats.revenue} sub="this month" />
                    <StatCard label="Community Posts" value={adminStats.posts} sub="↑ 34% growth" />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
                    <div style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: T.radius, overflow: "hidden" }}>
                        <div style={{ padding: "10px 12px", fontWeight: 600, fontSize: 13, borderBottom: `1px solid ${T.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span>Recent Trips</span>
                            <span style={{ fontSize: 11, color: T.textM }}>last 7 days</span>
                        </div>
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                                <tr>
                                    {['User', 'Destination', 'Status'].map((heading) => (
                                        <th key={heading} style={{ textAlign: 'left', padding: '10px 12px', fontSize: 11.5, fontWeight: 600, color: T.textM, borderBottom: `1px solid ${T.border}` }}>{heading}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {adminRecentTrips.map((trip) => (
                                    <tr key={trip.id}>
                                        <td style={{ padding: '10px 12px', borderBottom: `1px solid ${T.border}` }}>{trip.user}</td>
                                        <td style={{ padding: '10px 12px', borderBottom: `1px solid ${T.border}` }}>{trip.dest}</td>
                                        <td style={{ padding: '10px 12px', borderBottom: `1px solid ${T.border}` }}>
                                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '2px 8px', borderRadius: 10, fontSize: 11, fontWeight: 600, background: STATUS_MAP[trip.status]?.bg ?? T.purpleLight, color: STATUS_MAP[trip.status]?.color ?? T.purple }}>{trip.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: T.radius, padding: 14 }}>
                        <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 12, borderBottom: `1px solid ${T.border}`, paddingBottom: 8 }}>Bookings by Month</div>
                        <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 120, padding: "0 4px" }}>
                            {adminMonthlyBookings.map((month) => (
                                <div key={month.month} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1 }}>
                                    <div style={{ width: "100%", height: `${month.pct}%`, background: month.faded ? T.purpleMid : T.purple, borderRadius: 2, transition: ".3s" }} />
                                    <div style={{ fontSize: 10, color: T.textM }}>{month.month}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </View>
        </div>
    );
}
