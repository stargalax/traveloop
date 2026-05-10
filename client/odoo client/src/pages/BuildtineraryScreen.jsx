import { ControlBar, View } from "../state/ControlBar";
import { OdooFormSection } from "../components/ui/OdooWidgets";
import Btn from "../components/ui/Btn";
import { T } from "../styles/tokens";

/**
 * BuildItineraryScreen
 *
 * Props:
 *  sections : db.itinerarySections[]
 *  navigate : (screenId) => void
 */
export default function BuildItineraryScreen({ sections, navigate }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
            <ControlBar
                breadcrumbs={[
                    { label: "Home", onClick: () => navigate("home") },
                    { label: "My Trips", onClick: () => navigate("trips") },
                    { label: "New Trip", onClick: () => navigate("create-trip") },
                    { label: "Build Itinerary" },
                ]}
            >
                <Btn variant="primary">
                    <i className="ti ti-device-floppy" /> Save Itinerary
                </Btn>
            </ControlBar>

            <View>
                <div
                    style={{
                        background: T.white,
                        border: `1px solid ${T.border}`,
                        borderRadius: T.radius,
                        padding: "20px 24px",
                        maxWidth: 860,
                    }}
                >
                    <OdooFormSection icon={<i className="ti ti-list-check" />}>
                        Himachal Road Trip — Itinerary Sections
                    </OdooFormSection>

                    <p style={{ fontSize: "12.5px", color: T.textM, marginBottom: 14 }}>
                        Define sections for your trip. Each section can be a hotel stay, transport leg,
                        activity block, or any milestone.
                    </p>

                    {sections.map((s) => (
                        <ItinerarySection key={s.id} section={s} />
                    ))}

                    <Btn style={{ width: "100%", justifyContent: "center", marginTop: 4 }}>
                        <i className="ti ti-plus" /> Add another Section
                    </Btn>
                </div>
            </View>
        </div>
    );
}

/* ── private sub-component ── */
function ItinerarySection({ section }) {
    return (
        <div
            style={{
                border: `1px solid ${T.border}`,
                borderRadius: T.radius,
                overflow: "hidden",
                marginBottom: 10,
            }}
        >
            {/* Header */}
            <div
                style={{
                    background: "#f8f8f8",
                    padding: "8px 12px",
                    fontWeight: 600,
                    fontSize: 13,
                    borderBottom: `1px solid ${T.border}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                }}
            >
                <span
                    style={{
                        background: T.purple,
                        color: "#fff",
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                        flexShrink: 0,
                    }}
                >
                    {section.id}
                </span>
                {section.title}
            </div>

            {/* Description */}
            <div style={{ padding: "10px 12px", fontSize: "12.5px", color: T.textM }}>
                {section.desc}
            </div>

            {/* Meta row */}
            <div
                style={{
                    display: "flex",
                    gap: 8,
                    padding: "8px 12px",
                    borderTop: `1px solid #f0f0f0`,
                }}
            >
                <div style={{ flex: 1 }}>
                    <span style={{ fontSize: 11, color: T.textS, fontWeight: 600 }}>DATE RANGE</span>
                    <br />
                    <span style={{ fontSize: 13 }}>{section.range}</span>
                </div>
                <div style={{ flex: 1 }}>
                    <span style={{ fontSize: 11, color: T.textS, fontWeight: 600 }}>BUDGET</span>
                    <br />
                    <span style={{ fontSize: 13 }}>{section.budget}</span>
                </div>
            </div>
        </div>
    );
}