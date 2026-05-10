import { ControlBar, View } from "../state/ControlBar";
import { T } from "../styles/tokens";
import Btn from "../components/ui/Btn";

/**
 * InvoiceScreen
 *
 * Props:
 *  invoice  : db.invoice
 *  navigate : (screenId) => void
 */
export default function InvoiceScreen({ invoice, navigate }) {
    const gst = invoice.lineItems.reduce((sum, item) => sum + item.amount, 0) * invoice.gstRate;
    const subtotal = invoice.lineItems.reduce((sum, item) => sum + item.amount, 0);
    const total = subtotal + gst;

    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
            <ControlBar
                breadcrumbs={[
                    { label: "My Trips", onClick: () => navigate("trips") },
                    { label: "Himachal Trip" },
                    { label: "Expense Invoice" },
                ]}
            >
                <Btn size="sm"><i className="ti ti-download" /> Download PDF</Btn>
                <Btn size="sm" style={{ marginLeft: 6 }}><i className="ti ti-mail" /> Email Invoice</Btn>
                <Btn variant="primary" size="sm" style={{ marginLeft: 6 }}><i className="ti ti-check" /> Mark as Paid</Btn>
            </ControlBar>

            <View>
                <div style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: T.radius, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 22, fontWeight: 700, color: T.purple }}>
                                <i className="ti ti-plane-tilt" /> Traveloop
                            </div>
                            <div style={{ fontSize: 12, color: T.textM, marginTop: 4 }}>
                                Invoice for: Himachal Road Trip 2026<br />
                                Dates: {invoice.dates}
                            </div>
                        </div>
                        <div style={{ textAlign: "right", fontSize: 12, color: T.textM }}>
                            <strong style={{ display: "block", fontSize: 18, color: T.text, fontWeight: 600, marginBottom: 4 }}>INVOICE #{invoice.id}</strong>
                            Issued: {invoice.issued}<br />
                            Status: <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "2px 8px", borderRadius: 10, background: T.infoLight, color: "#185FA5", fontSize: 11, fontWeight: 600 }}>In Progress</span>
                        </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 220px", gap: 16, marginBottom: 16 }}>
                        <div style={{ fontSize: 12, color: T.textM }}>
                            <strong style={{ color: T.text }}>Billed To:</strong><br />
                            {invoice.billedTo.name}, {invoice.billedTo.city}<br />
                            {invoice.billedTo.email} · {invoice.billedTo.phone}
                        </div>
                        <div style={{ background: T.purpleLight, borderRadius: T.radius, padding: 10, fontSize: 12 }}>
                            <div style={{ fontWeight: 600, color: T.purple, marginBottom: 4 }}>Budget Summary</div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}><span>Total Budget</span><span style={{ fontWeight: 600 }}>₹{invoice.budget.toLocaleString()}</span></div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}><span>Spent</span><span style={{ color: T.danger, fontWeight: 600 }}>₹{invoice.spent.toLocaleString()}</span></div>
                            <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 4, borderTop: `1px solid ${T.purpleMid}`, marginTop: 4 }}><span style={{ fontWeight: 600 }}>Remaining</span><span style={{ color: T.success, fontWeight: 700 }}>₹{(invoice.budget - invoice.spent).toLocaleString()}</span></div>
                        </div>
                    </div>

                    <div style={{ overflowX: "auto" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                                <tr style={{ background: "#f8f8f8" }}>
                                    {['#', 'Category', 'Description', 'Qty', 'Unit Cost', 'Amount (₹)'].map((heading) => (
                                        <th key={heading} style={{ padding: '7px 12px', textAlign: 'left', fontSize: 11.5, fontWeight: 600, color: T.textM, borderBottom: `1px solid ${T.border}` }}>{heading}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {invoice.lineItems.map((item) => (
                                    <tr key={item.id}>
                                        <td style={{ padding: '10px 12px', borderBottom: `1px solid ${T.border}` }}>{item.id}</td>
                                        <td style={{ padding: '10px 12px', borderBottom: `1px solid ${T.border}` }}><span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '2px 8px', borderRadius: 10, background: item.categoryStatus === 'ongoing' ? T.infoLight : item.categoryStatus === 'planned' ? T.purpleLight : item.categoryStatus === 'warning' ? T.warningLight : T.successLight, color: item.categoryStatus === 'ongoing' ? '#185FA5' : item.categoryStatus === 'planned' ? T.purple : item.categoryStatus === 'warning' ? '#854F0B' : '#3B6D11' }}>{item.category}</span></td>
                                        <td style={{ padding: '10px 12px', borderBottom: `1px solid ${T.border}` }}>{item.desc}</td>
                                        <td style={{ padding: '10px 12px', borderBottom: `1px solid ${T.border}` }}>{item.qty}</td>
                                        <td style={{ padding: '10px 12px', borderBottom: `1px solid ${T.border}` }}>₹{item.unit.toLocaleString()}</td>
                                        <td style={{ padding: '10px 12px', borderBottom: `1px solid ${T.border}` }}>₹{item.amount.toLocaleString()}</td>
                                    </tr>
                                ))}
                                <tr style={{ background: '#f8f8f8' }}>
                                    <td colSpan={5} style={{ textAlign: 'right', padding: '10px 12px', fontWeight: 600, fontSize: 12, color: T.textM }}>Subtotal</td>
                                    <td style={{ padding: '10px 12px', fontWeight: 700 }}>₹{subtotal.toLocaleString()}</td>
                                </tr>
                                <tr style={{ background: '#f8f8f8' }}>
                                    <td colSpan={5} style={{ textAlign: 'right', padding: '10px 12px', fontSize: 12, color: T.textM }}>GST (5%)</td>
                                    <td style={{ padding: '10px 12px' }}>₹{gst.toLocaleString()}</td>
                                </tr>
                                <tr style={{ background: T.purpleLight }}>
                                    <td colSpan={5} style={{ textAlign: 'right', padding: '10px 12px', fontWeight: 700, color: T.purple }}>Grand Total</td>
                                    <td style={{ padding: '10px 12px', fontWeight: 700, color: T.purple, fontSize: 15 }}>₹{total.toLocaleString()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </View>
        </div>
    );
}
