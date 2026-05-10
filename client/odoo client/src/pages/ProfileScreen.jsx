import { ControlBar, View } from "../state/ControlBar";
import { OInput, FormGroup, OdooFormSection } from "../components/ui/OdooWidgets";
import Btn from "../components/ui/Btn";

/**
 * ProfileScreen
 *
 * Props:
 *  user     : db.user
 *  navigate : (screenId) => void
 */
export default function ProfileScreen({ user, navigate }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
            <ControlBar
                breadcrumbs={[
                    { label: "Home", onClick: () => navigate("home") },
                    { label: "My Profile" },
                ]}
            >
                <Btn variant="primary"><i className="ti ti-edit" /> Edit Profile</Btn>
            </ControlBar>

            <View>
                <div style={{ background: "#fff", border: "1px solid #dee2e6", borderRadius: 4, padding: 20, maxWidth: 760, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", padding: "16px 0 24px" }}>
                        <div style={{ width: 80, height: 80, borderRadius: "50%", background: "#714B67", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 28, fontWeight: 600, margin: "0 auto 12px" }}>
                            {user.initials}
                        </div>
                        <div style={{ fontSize: 16, fontWeight: 600 }}>{user.name}</div>
                        <div style={{ fontSize: 12.5, color: "#6C757D", marginTop: 2 }}>{user.email} · {user.city}, {user.country}</div>
                        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 10 }}>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "4px 10px", borderRadius: 10, background: "#F1EEF4", color: "#714B67", fontSize: 11 }}><i className="ti ti-map-2" /> 12 Trips</span>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "4px 10px", borderRadius: 10, background: "#EAF3DE", color: "#28A745", fontSize: 11 }}><i className="ti ti-world" /> 7 Countries</span>
                        </div>
                    </div>

                    <OdooFormSection icon={<i className="ti ti-info-circle" />}>Personal Details</OdooFormSection>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 20px" }}>
                        <FormGroup label="First Name"><OInput defaultValue={user.name.split(" ")[0]} /></FormGroup>
                        <FormGroup label="Last Name"><OInput defaultValue={user.name.split(" ").slice(1).join(" ")} /></FormGroup>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 20px" }}>
                        <FormGroup label="Email"><OInput defaultValue={user.email} /></FormGroup>
                        <FormGroup label="Phone"><OInput defaultValue={user.phone} /></FormGroup>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 20px" }}>
                        <FormGroup label="City"><OInput defaultValue={user.city} /></FormGroup>
                        <FormGroup label="Country"><OInput defaultValue={user.country} /></FormGroup>
                    </div>
                </div>
            </View>
        </div>
    );
}
