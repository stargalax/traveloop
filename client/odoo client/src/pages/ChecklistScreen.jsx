import { useState } from "react";
import { ControlBar, SearchBar, SearchInput, View } from "../state/ControlBar";
import { StatCard } from "../components/ui/OdooWidgets";
import Btn from "../components/ui/Btn";

/**
 * ChecklistScreen
 *
 * Props:
 *  checklistSections : db.checklistSections[]
 *  navigate          : (screenId) => void
 */
export default function ChecklistScreen({ checklistSections, navigate }) {
    const [sections, setSections] = useState(checklistSections);

    const toggleItem = (sectionId, itemId) => {
        setSections((prev) =>
            prev.map((section) =>
                section.id !== sectionId
                    ? section
                    : {
                        ...section,
                        items: section.items.map((item) =>
                            item.id !== itemId ? item : { ...item, done: !item.done }
                        ),
                    }
            )
        );
    };

    const totalItems = sections.reduce((sum, section) => sum + section.items.length, 0);
    const completedItems = sections.reduce(
        (sum, section) => sum + section.items.filter((item) => item.done).length,
        0
    );

    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
            <ControlBar
                breadcrumbs={[
                    { label: "My Trips", onClick: () => navigate("trips") },
                    { label: "Packing Checklist" },
                ]}
            >
                <Btn size="sm"><i className="ti ti-refresh" /> Reset All</Btn>
                <Btn variant="primary" size="sm" style={{ marginLeft: 6 }}><i className="ti ti-printer" /> Print Checklist</Btn>
            </ControlBar>

            <SearchBar>
                <SearchInput placeholder="Search checklist items..." />
            </SearchBar>

            <View>
                <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                    <div style={{ flex: 1 }}>
                        <StatCard label="Total Items" value={totalItems} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <StatCard label="Packed" value={completedItems} valueStyle={{ color: "#28A745" }} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <StatCard label="Remaining" value={totalItems - completedItems} valueStyle={{ color: "#E67E22" }} />
                    </div>
                </div>

                {sections.map((section) => (
                    <div key={section.id} style={{ marginBottom: 10, border: "1px solid #dee2e6", borderRadius: 4, overflow: "hidden", background: "#fff" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f8f8f8", padding: "8px 12px", fontWeight: 600, fontSize: 13 }}>
                            <span>{section.icon} {section.label}</span>
                            <span style={{ fontSize: 11, color: "#6C757D" }}>
                                {section.items.filter((item) => item.done).length}/{section.items.length}
                            </span>
                        </div>
                        {section.items.map((item) => (
                            <label key={item.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 12px", borderTop: "1px solid #f5f5f5", cursor: "pointer", color: item.done ? "#6C757D" : "#212529", textDecoration: item.done ? "line-through" : "none" }}>
                                <input type="checkbox" checked={item.done} onChange={() => toggleItem(section.id, item.id)} />
                                {item.text}
                            </label>
                        ))}
                    </div>
                ))}
            </View>
        </div>
    );
}
