import { T } from "../styles/tokens";
import { ControlBar, SearchBar, SearchInput, View } from "../state/ControlBar";
import { FilterBtn } from "../components/ui/OdooWidgets";
import { StatCard, SectionLabel } from "../components/ui/OdooWidgets";
import Btn from "../components/ui/Btn";
import TripCard from "../components/ui/TripCard";

/**
 * HomeScreen
 *
 * Props:
 *  user      : db.user
 *  topPicks  : db.topPicks[]
 *  prevTrips : db.prevTrips[]
 *  navigate  : (screenId) => void
 */
export default function HomeScreen({ user, topPicks, prevTrips, navigate }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
            <ControlBar breadcrumbs={[{ label: "Home" }]}>
                <Btn variant="primary" onClick={() => navigate("create-trip")}>
                    <i className="ti ti-plus" /> Plan a Trip
                </Btn>
            </ControlBar>

            <SearchBar>
                <SearchInput placeholder="Search destinations, activities..." />
                <FilterBtn><i className="ti ti-adjustments-horizontal" /> Group By</FilterBtn>
                <FilterBtn><i className="ti ti-filter" /> Filter</FilterBtn>
                <FilterBtn><i className="ti ti-arrows-sort" /> Sort</FilterBtn>
            </SearchBar>

            <View>
                {/* Welcome banner */}
                <div
                    style={{
                        background: `linear-gradient(135deg, ${T.purple} 0%, #5d3d55 100%)`,
                        color: "#fff",
                        padding: "32px 20px",
                        textAlign: "center",
                        borderRadius: T.radius,
                        marginBottom: 16,
                    }}
                >
                    <h1 style={{ fontSize: 26, fontWeight: 300, letterSpacing: "-.5px" }}>
                        ✈ Welcome back, {user.name.split(" ")[0]}!
                    </h1>
                    <p style={{ opacity: 0.8, marginTop: 4, fontSize: 13 }}>
                        Your next adventure awaits — plan smarter, travel better.
                    </p>
                </div>

                {/* Stats row */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 16 }}>
                    <StatCard label="Total Trips" value={user.totalTrips} sub="3 upcoming" />
                    <StatCard label="Countries" value={user.countries} sub="visited" />
                    <StatCard label="Total Spent" value={user.totalSpent} sub="this year" />
                    <StatCard label="Days Travelled" value={user.daysTravelled} sub="in 2024" />
                </div>

                {/* Top Picks */}
                <SectionLabel icon={<i className="ti ti-map-pin" />}>Top Regional Picks</SectionLabel>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: 12, marginBottom: 16 }}>
                    {topPicks.map((p) => (
                        <TripCard key={p.id} emoji={p.emoji} title={p.name} meta={p.region} />
                    ))}
                </div>

                {/* Previous Trips */}
                <SectionLabel icon={<i className="ti ti-history" />}>Previous Trips</SectionLabel>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: 12 }}>
                    {prevTrips.map((p) => (
                        <TripCard key={p.id} emoji={p.emoji} title={p.name} meta={p.meta} />
                    ))}
                </div>
            </View>
        </div>
    );
}