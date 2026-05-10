import { ControlBar, SearchBar, SearchInput, View } from "../state/ControlBar";
import { FilterBtn, SectionLabel } from "../components/ui/OdooWidgets";
import Btn from "../components/ui/Btn";
import TripListCard from "../components/ui/TripListCard";
import { T } from "../styles/tokens";

/**
 * TripsScreen
 *
 * Props:
 *  trips    : db.trips[]
 *  navigate : (screenId) => void
 */
export default function TripsScreen({ trips, navigate }) {
    const ongoing = trips.filter((t) => t.status === "ongoing");
    const upcoming = trips.filter((t) => t.status === "upcoming" || t.status === "planned");
    const done = trips.filter((t) => t.status === "done");

    const dateStr = (t) =>
        `${t.startDate} – ${t.endDate} · ${t.days} days · ${t.destination}`;
    const doneDateStr = (t) =>
        `${t.startDate} – ${t.endDate} · ${t.days} days`;

    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
            <ControlBar
                breadcrumbs={[
                    { label: "Home", onClick: () => navigate("home") },
                    { label: "My Trips" },
                ]}
            >
                <Btn variant="primary" onClick={() => navigate("create-trip")}>
                    <i className="ti ti-plus" /> New Trip
                </Btn>
            </ControlBar>

            <SearchBar>
                <SearchInput placeholder="Search trips..." />
                <FilterBtn><i className="ti ti-adjustments-horizontal" /> Group By</FilterBtn>
                <FilterBtn><i className="ti ti-filter" /> Filter</FilterBtn>
                <FilterBtn><i className="ti ti-list" /> List</FilterBtn>
                <FilterBtn><i className="ti ti-layout-kanban" /> Kanban</FilterBtn>
                {/* Pager */}
                <div style={{ marginLeft: "auto", display: "flex", gap: 4, fontSize: 12, color: T.textM }}>
                    {["1", "2", "›"].map((p, i) => (
                        <span key={i} style={{ padding: "2px 6px", border: `1px solid ${T.border}`, borderRadius: 2, cursor: "pointer", background: i === 0 ? T.purple : T.white, color: i === 0 ? "#fff" : T.textM }}>{p}</span>
                    ))}
                </div>
            </SearchBar>

            <View>
                <SectionLabel icon={<i className="ti ti-activity" style={{ color: T.info }} />}>
                    <span style={{ color: T.info }}>Ongoing</span>
                </SectionLabel>
                {ongoing.map((t) => (
                    <TripListCard key={t.id} {...t} dates={dateStr(t)} onClick={() => navigate("itinerary-view")} />
                ))}

                <SectionLabel icon={<i className="ti ti-calendar-event" style={{ color: T.warning }} />}>
                    <span style={{ color: T.warning }}>Upcoming</span>
                </SectionLabel>
                {upcoming.map((t) => (
                    <TripListCard key={t.id} {...t} dates={dateStr(t)} onClick={() => { }} />
                ))}

                <SectionLabel icon={<i className="ti ti-check" style={{ color: T.success }} />}>
                    <span style={{ color: T.success }}>Completed</span>
                </SectionLabel>
                {done.map((t) => (
                    <TripListCard key={t.id} {...t} dates={doneDateStr(t)} onClick={() => { }} />
                ))}
            </View>
        </div>
    );
}