import { useMemo, useState } from "react";
import { ControlBar, SearchBar, SearchInput, View } from "../state/ControlBar";
import { FilterBtn, OdooTable } from "../components/ui/OdooWidgets";
import Btn from "../components/ui/Btn";

/**
 * SearchScreen
 *
 * Props:
 *  searchResults : db.searchResults[]
 *  navigate      : (screenId) => void
 */
export default function SearchScreen({ searchResults, navigate }) {
    const [query, setQuery] = useState("");

    const rows = useMemo(() => {
        const normalized = query.toLowerCase();
        return searchResults
            .filter((item) =>
                !normalized ||
                item.name.toLowerCase().includes(normalized) ||
                item.location.toLowerCase().includes(normalized) ||
                item.type.toLowerCase().includes(normalized)
            )
            .map((item) => (
                <tr key={item.id}>
                    <td style={{ padding: "8px 12px" }}>{item.name}</td>
                    <td style={{ padding: "8px 12px" }}>{item.location}</td>
                    <td style={{ padding: "8px 12px" }}>{item.type}</td>
                    <td style={{ padding: "8px 12px" }}>⭐ {item.rating}</td>
                    <td style={{ padding: "8px 12px" }}>{item.price}</td>
                    <td style={{ padding: "8px 12px", textAlign: "right" }}>
                        <Btn size="sm" variant="primary" onClick={() => navigate("create-trip")}>Add to Trip</Btn>
                    </td>
                </tr>
            ));
    }, [query, searchResults, navigate]);

    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
            <ControlBar
                breadcrumbs={[
                    { label: "Home", onClick: () => navigate("home") },
                    { label: "Search Places & Activities" },
                ]}
            >
                <FilterBtn><i className="ti ti-adjustments-horizontal" /> Group By</FilterBtn>
                <FilterBtn><i className="ti ti-filter" /> Filter</FilterBtn>
                <FilterBtn><i className="ti ti-arrows-sort" /> Sort</FilterBtn>
            </ControlBar>

            <SearchBar>
                <SearchInput
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search: Paragliding, Coorg, beach, trek..."
                    maxWidth={560}
                />
            </SearchBar>

            <View>
                <div style={{ fontSize: 12, color: "#6C757D", marginBottom: 10 }}>
                    {rows.length} result{rows.length === 1 ? "" : "s"} for <strong>"{query || "All"}"</strong>
                </div>
                <div style={{ overflowX: "auto" }}>
                    <OdooTable
                        headers={["Name", "Location", "Type", "Rating", "Price Range", ""]}
                        rows={rows}
                    />
                </div>
            </View>
        </div>
    );
}
