import { ControlBar, View } from "../state/ControlBar";
import { T } from "../styles/tokens";
import Btn from "../components/ui/Btn";

/**
 * NotesScreen
 *
 * Props:
 *  tripNotes : db.tripNotes[]
 *  navigate  : (screenId) => void
 */
export default function NotesScreen({ tripNotes, navigate }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
            <ControlBar
                breadcrumbs={[
                    { label: "My Trips", onClick: () => navigate("trips") },
                    { label: "Himachal Trip" },
                    { label: "Trip Notes" },
                ]}
            >
                <Btn variant="primary" size="sm"><i className="ti ti-plus" /> Add Note</Btn>
            </ControlBar>

            <View>
                {tripNotes.map((note) => (
                    <div key={note.id} style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: T.radius, padding: 14, marginBottom: 10 }}>
                        <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                            <div style={{ width: 30, height: 30, borderRadius: 50, background: T.purpleLight, color: T.purple, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600, flexShrink: 0 }}>
                                {note.initials}
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 600, fontSize: 13 }}>
                                    {note.title}
                                    <span style={{ marginLeft: 8, background: note.tagStatus === "success" ? "#EAF3DE" : note.tagStatus === "info" ? "#E6F1FB" : note.tagStatus === "warning" ? "#FAEEDA" : "#F1EEF4", color: note.tagStatus === "success" ? "#28A745" : note.tagStatus === "info" ? "#185FA5" : note.tagStatus === "warning" ? "#854F0B" : T.purple, fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 10, marginLeft: 6 }}>
                                        {note.tagLabel}
                                    </span>
                                </div>
                                <div style={{ fontSize: 11, color: T.textM, marginTop: 2 }}>{note.time}</div>
                            </div>
                        </div>
                        <div style={{ fontSize: 12.5, color: T.textM, lineHeight: 1.6 }}>{note.content}</div>
                    </div>
                ))}
                <Btn style={{ width: "100%", justifyContent: "center" }}><i className="ti ti-plus" /> Add a new note...</Btn>
            </View>
        </div>
    );
}
