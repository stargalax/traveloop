import { useMemo, useState } from "react";
import { ControlBar, SearchBar, SearchInput, View } from "../state/ControlBar";
import { FilterBtn } from "../components/ui/OdooWidgets";
import Btn from "../components/ui/Btn";
import { T } from "../styles/tokens";

/**
 * CommunityScreen
 *
 * Props:
 *  communityPosts : db.communityPosts[]
 *  navigate       : (screenId) => void
 */
export default function CommunityScreen({ communityPosts, navigate }) {
    const [query, setQuery] = useState("");

    const filteredPosts = useMemo(() => {
        const normalized = query.toLowerCase();
        return communityPosts.filter((post) =>
            post.author.toLowerCase().includes(normalized) ||
            post.location.toLowerCase().includes(normalized) ||
            post.text.toLowerCase().includes(normalized)
        );
    }, [communityPosts, query]);

    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
            <ControlBar
                breadcrumbs={[
                    { label: "Home", onClick: () => navigate("home") },
                    { label: "Community" },
                ]}
            >
                <Btn variant="primary"><i className="ti ti-plus" /> Share Experience</Btn>
            </ControlBar>

            <SearchBar>
                <SearchInput
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search posts, places, tips..."
                />
                <FilterBtn onClick={() => { }}><i className="ti ti-adjustments-horizontal" /> Group By</FilterBtn>
                <FilterBtn onClick={() => { }}><i className="ti ti-filter" /> Filter</FilterBtn>
                <FilterBtn onClick={() => { }}><i className="ti ti-arrows-sort" /> Sort</FilterBtn>
            </SearchBar>

            <View>
                {filteredPosts.map((post) => (
                    <div
                        key={post.id}
                        style={{
                            background: T.white,
                            border: `1px solid ${T.border}`,
                            borderRadius: T.radius,
                            padding: 12,
                            marginBottom: 10,
                            display: "flex",
                            gap: 10,
                        }}
                    >
                        <div
                            style={{
                                width: 38,
                                height: 38,
                                borderRadius: 50,
                                background: T.purpleLight,
                                color: T.purple,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: 600,
                                flexShrink: 0,
                            }}
                        >
                            {post.initials}
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 600, fontSize: 13 }}>{post.author}</div>
                            <div style={{ fontSize: 11, color: T.primary, marginTop: 1 }}>
                                <i className="ti ti-map-pin" style={{ fontSize: 12, marginRight: 4 }} />{post.location}
                            </div>
                            <div style={{ marginTop: 8, fontSize: 12.5, lineHeight: 1.5, color: T.textM }}>
                                {post.text}
                            </div>
                            <div style={{ display: "flex", gap: 12, marginTop: 10, fontSize: 11, color: T.textS }}>
                                <span><i className="ti ti-heart" /> {post.likes}</span>
                                <span><i className="ti ti-message-circle" /> {post.comments}</span>
                                <span style={{ cursor: "pointer", color: T.purple }}>Share</span>
                                <span style={{ cursor: "pointer", color: T.purple }}>Save</span>
                            </div>
                        </div>
                    </div>
                ))}
            </View>
        </div>
    );
}
