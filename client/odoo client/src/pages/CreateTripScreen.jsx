import { ControlBar, View } from "../state/ControlBar";
import { OdooFormSection, FormGroup, OInput } from "../components/ui/OdooWidgets";
import Btn from "../components/ui/Btn";
import TripCard from "../components/ui/TripCard";
import { T } from "../styles/tokens";

const STEPS = ["1. Trip Details", "2. Select Places", "3. Build Itinerary", "4. Review & Confirm"];

/**
 * CreateTripScreen
 *
 * Props:
 *  suggestedActivities : db.suggestedActivities[]
 *  navigate            : (screenId) => void
 */
export default function CreateTripScreen({ suggestedActivities, navigate }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
            <ControlBar
                breadcrumbs={[
                    { label: "Home", onClick: () => navigate("home") },
                    { label: "My Trips", onClick: () => navigate("trips") },
                    { label: "New Trip" },
                ]}
            >
                <Btn onClick={() => navigate("trips")}>Discard</Btn>
                <Btn variant="primary" onClick={() => navigate("build-itinerary")} style={{ marginLeft: 6 }}>
                    <i className="ti ti-device-floppy" /> Save & Build Itinerary
                </Btn>
            </ControlBar>

            <View>
                {/* Step progress bar */}
                <div
                    style={{
                        display: "flex",
                        background: "#f8f8f8",
                        border: `1px solid ${T.border}`,
                        borderRadius: T.radius,
                        overflow: "hidden",
                        marginBottom: 16,
                        fontSize: 12,
                    }}
                >
                    {STEPS.map((step, i) => (
                        <div
                            key={i}
                            style={{
                                padding: "6px 16px",
                                flex: 1,
                                color: i === 0 ? "#fff" : T.textM,
                                background: i === 0 ? T.purple : "transparent",
                                fontWeight: i === 0 ? 600 : 400,
                            }}
                        >
                            {step}
                        </div>
                    ))}
                </div>

                {/* Form card */}
                <div
                    style={{
                        background: T.white,
                        border: `1px solid ${T.border}`,
                        borderRadius: T.radius,
                        padding: "20px 24px",
                        maxWidth: 860,
                    }}
                >
                    <OdooFormSection icon={<i className="ti ti-info-circle" />}>
                        Plan a New Trip
                    </OdooFormSection>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 20px", marginBottom: 12 }}>
                        <FormGroup label="Trip Name">
                            <OInput defaultValue="Himachal Road Trip 2026" />
                        </FormGroup>
                        <FormGroup label="Select a Place">
                            <OInput defaultValue="Manali, Spiti Valley" />
                        </FormGroup>
                        <FormGroup label="Start Date">
                            <OInput type="date" defaultValue="2026-05-08" />
                        </FormGroup>
                        <FormGroup label="End Date">
                            <OInput type="date" defaultValue="2026-05-18" />
                        </FormGroup>
                        <FormGroup label="Number of Travellers">
                            <OInput type="number" defaultValue="3" />
                        </FormGroup>
                        <FormGroup label="Total Budget (₹)">
                            <OInput type="number" defaultValue="45000" />
                        </FormGroup>
                    </div>

                    <FormGroup label="Additional Notes">
                        <textarea
                            defaultValue="Mountain route preferred, need pet-friendly stays."
                            style={{
                                border: `1px solid ${T.border}`,
                                borderRadius: T.radius,
                                padding: "6px 10px",
                                resize: "vertical",
                                minHeight: 80,
                                width: "100%",
                                fontFamily: "inherit",
                                fontSize: 13,
                            }}
                        />
                    </FormGroup>

                    <OdooFormSection icon={<i className="ti ti-map-pin" />} style={{ marginTop: 20 }}>
                        Suggested Places & Activities
                    </OdooFormSection>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 12, marginTop: 8 }}>
                        {suggestedActivities.map((a) => (
                            <TripCard key={a.id} emoji={a.emoji} title={a.name} meta={a.meta} />
                        ))}
                    </div>
                </div>
            </View>
        </div>
    );
}