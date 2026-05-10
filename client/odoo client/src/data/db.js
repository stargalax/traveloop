/**
 * db.js  —  Mock data store
 *
 * HOW TO GO DYNAMIC:
 *   Replace each exported const with a custom hook that fetches from your API/SQLite.
 *   Components import from here and never know the difference.
 *
 * Example:
 *   // STATIC:  export const trips = [...]
 *   // DYNAMIC: export function useTrips() { const [d,setD]=useState([]); useEffect(()=>fetch('/api/trips').then(r=>r.json()).then(setD),[]); return d; }
 */

export const user = {
    id: 1,
    name: "Rohan Mehta",
    initials: "RM",
    email: "rohan.mehta@gmail.com",
    phone: "+91 9876543210",
    city: "Mumbai",
    country: "India",
    totalTrips: 12,
    countries: 7,
    totalSpent: "₹2.4L",
    daysTravelled: 38,
};

export const trips = [
    { id: 1, name: "Himachal Road Trip", emoji: "🏔", destination: "Manali, Spiti", startDate: "May 8", endDate: "May 18, 2026", days: 10, status: "ongoing", colorKey: "info" },
    { id: 2, name: "Goa Beach Getaway", emoji: "🌊", destination: "North Goa", startDate: "Jun 15", endDate: "Jun 22, 2026", days: 7, status: "upcoming", colorKey: "warning" },
    { id: 3, name: "Rajasthan Heritage Tour", emoji: "🕌", destination: "Jaipur, Jodhpur", startDate: "Aug 1", endDate: "Aug 10, 2026", days: 9, status: "planned", colorKey: "purple" },
    { id: 4, name: "Mumbai Weekend", emoji: "🌆", destination: "Mumbai", startDate: "Dec 20", endDate: "Dec 24, 2023", days: 4, status: "done", colorKey: "success" },
    { id: 5, name: "Andaman Islands", emoji: "🏝", destination: "Andaman", startDate: "Oct 5", endDate: "Oct 12, 2023", days: 7, status: "done", colorKey: "success" },
];

export const topPicks = [
    { id: 1, name: "Manali", region: "Himachal Pradesh", emoji: "🏔" },
    { id: 2, name: "Goa Beaches", region: "North Goa", emoji: "🌊" },
    { id: 3, name: "Jaipur", region: "Rajasthan", emoji: "🕌" },
    { id: 4, name: "Coorg", region: "Karnataka", emoji: "🌿" },
    { id: 5, name: "Dandeli", region: "Karnataka", emoji: "🏖" },
];

export const prevTrips = [
    { id: 1, name: "Mumbai", emoji: "🌆", meta: "Dec 2023 · 4 days" },
    { id: 2, name: "Andaman", emoji: "🏝", meta: "Oct 2023 · 7 days" },
    { id: 3, name: "Ooty", emoji: "🌁", meta: "Aug 2023 · 3 days" },
];

export const suggestedActivities = [
    { id: 1, emoji: "🏔", name: "Rohtang Pass", meta: "Trekking · Sightseeing" },
    { id: 2, emoji: "🏕", name: "Camping at Solang", meta: "Adventure · Camping" },
    { id: 3, emoji: "🛶", name: "Beas River Rafting", meta: "Water Sport · Thrills" },
    { id: 4, emoji: "🕉", name: "Hadimba Temple", meta: "Cultural · Heritage" },
];

export const itinerarySections = [
    { id: 1, title: "Section 1 — Travel to Manali", desc: "Flight + Bus from Bangalore → Chandigarh → Manali. Overnight journey.", range: "May 8 → May 9", budget: "₹ 4,500" },
    { id: 2, title: "Section 2 — Manali Exploration", desc: "Rohtang Pass, Hadimba Temple, local market, Beas Kund trek.", range: "May 10 → May 13", budget: "₹ 12,000" },
    { id: 3, title: "Section 3 — Spiti Valley Circuit", desc: "Kaza, Kibber, Key Monastery, Chandratal Lake.", range: "May 14 → May 17", budget: "₹ 18,000" },
];

export const itineraryDays = [
    {
        id: 1,
        header: "Day 1–2 · May 8-9 — Travel Day",
        rows: [
            { activity: "Flight: Bangalore → Chandigarh", type: "Transport", typeStatus: "info", cost: 2800 },
            { activity: "Bus: Chandigarh → Manali (Volvo)", type: "Transport", typeStatus: "info", cost: 900 },
            { activity: "Dinner at Manali", type: "Food", typeStatus: "upcoming", cost: 400 },
        ],
        total: 4100,
    },
    {
        id: 2,
        header: "Day 3–6 · May 10-13 — Manali Exploration",
        rows: [
            { activity: "Hotel: The Himalayan (3 nights)", type: "Stay", typeStatus: "planned", cost: 6000 },
            { activity: "Rohtang Pass permit + taxi", type: "Activity", typeStatus: "done", cost: 1800 },
            { activity: "Beas River Rafting", type: "Activity", typeStatus: "done", cost: 600 },
            { activity: "Food & Local Market", type: "Food", typeStatus: "upcoming", cost: 1200 },
        ],
        total: 9600,
    },
];

export const budgetBreakdown = [
    { label: "Transport", amount: 8200, pct: 42, colorKey: "info" },
    { label: "Accommodation", amount: 14000, pct: 62, colorKey: "purple" },
    { label: "Activities", amount: 6800, pct: 30, colorKey: "success" },
    { label: "Food & Misc", amount: 5000, pct: 22, colorKey: "warning" },
];

export const searchResults = [
    { id: 1, name: "Bir Billing Paragliding", location: "Himachal Pradesh", type: "Adventure", typeStatus: "ongoing", rating: "4.9", price: "₹3,500–5,000" },
    { id: 2, name: "Kamshet Paragliding", location: "Pune, Maharashtra", type: "Adventure", typeStatus: "ongoing", rating: "4.7", price: "₹2,500–4,000" },
    { id: 3, name: "Solang Valley Gliding", location: "Manali, HP", type: "Adventure", typeStatus: "ongoing", rating: "4.6", price: "₹2,000–3,500" },
    { id: 4, name: "Nandi Hills Microlight", location: "Bangalore, KA", type: "Sport", typeStatus: "planned", rating: "4.3", price: "₹4,000–6,000" },
    { id: 5, name: "Gangtok Paragliding", location: "Sikkim", type: "Adventure", typeStatus: "ongoing", rating: "4.5", price: "₹3,000–4,500" },
    { id: 6, name: "Manali Zip-line & Glide", location: "Manali, HP", type: "Combo", typeStatus: "planned", rating: "4.4", price: "₹1,800–3,000" },
    { id: 7, name: "Goa Beach Paragliding", location: "North Goa", type: "Adventure", typeStatus: "ongoing", rating: "4.2", price: "₹2,200–3,200" },
];

export const communityPosts = [
    { id: 1, initials: "AM", author: "Ananya Mishra", location: "Spiti Valley, Himachal Pradesh", text: "Just completed the Spiti Valley circuit — 8 days, 3 bikes, and memories for a lifetime! The road from Kaza to Kibber is absolutely breathtaking. Pro tip: carry cash, no ATMs after Shimla!", likes: 42, comments: 14 },
    { id: 2, initials: "KP", author: "Kiran Pillai", location: "Dandeli, Karnataka", text: "Dandeli is criminally underrated! White water rafting on the Kali river is world-class. Stayed at Jacobs Resort — amazing riverside cottages. Perfect for a Bangalore weekend escape 🌿", likes: 28, comments: 9 },
    { id: 3, initials: "RS", author: "Riya Sharma", location: "Jaipur, Rajasthan", text: "Amer Fort at sunrise with zero tourists — pure magic. Book tickets online the night before. Haveli stay in the old city walled area was a highlight. Budget: ₹5K/day for 2 is very doable!", likes: 65, comments: 22 },
    { id: 4, initials: "VN", author: "Vikram Nair", location: "Andaman Islands", text: "Radhanagar Beach at sunset — hands down most beautiful beach in Asia. Scuba at Havelock was crystal clear. Ferry booking is the real challenge; book GoGoNow 6 weeks ahead!", likes: 91, comments: 37 },
];

export const checklistSections = [
    {
        id: 1, icon: "📄", label: "Documents", items: [
            { id: 1, text: "Passport / Aadhaar Card", done: true },
            { id: 2, text: "Flight Tickets (printed)", done: true },
            { id: 3, text: "Hotel booking confirmation", done: true },
        ]
    },
    {
        id: 2, icon: "👕", label: "Clothing", items: [
            { id: 4, text: "Thermal innerwear (2 sets)", done: true },
            { id: 5, text: "Winter jacket", done: true },
            { id: 6, text: "Comfortable hiking pants", done: true },
            { id: 7, text: "Light t-shirts (3)", done: false },
            { id: 8, text: "Light jacket / windbreaker", done: false },
        ]
    },
    {
        id: 3, icon: "🔌", label: "Electronics", items: [
            { id: 9, text: "Phone charger", done: true },
            { id: 10, text: "Universal power adapter", done: true },
            { id: 11, text: "Powerbank", done: false },
            { id: 12, text: "Earphones / headphones", done: false },
        ]
    },
    {
        id: 4, icon: "💊", label: "Health & Medicines", items: [
            { id: 13, text: "First Aid Kit", done: false },
            { id: 14, text: "Altitude sickness tablets (Diamox)", done: false },
            { id: 15, text: "Sunscreen SPF 50+", done: false },
            { id: 16, text: "Lip balm & moisturizer", done: false },
        ]
    },
];

export const adminStats = {
    users: "2,847",
    activeTrips: 431,
    revenue: "₹8.4L",
    posts: "1,284",
};

export const adminRecentTrips = [
    { id: 1, user: "Rohan M.", dest: "Manali, HP", status: "ongoing" },
    { id: 2, user: "Ananya P.", dest: "Goa", status: "upcoming" },
    { id: 3, user: "Kiran S.", dest: "Dandeli", status: "done" },
    { id: 4, user: "Vikram N.", dest: "Andaman", status: "done" },
    { id: 5, user: "Priya R.", dest: "Rajasthan", status: "planned" },
];

export const adminMonthlyBookings = [
    { month: "Jan", pct: 40 },
    { month: "Feb", pct: 55 },
    { month: "Mar", pct: 45 },
    { month: "Apr", pct: 70 },
    { month: "May", pct: 90 },
    { month: "Jun", pct: 60, faded: true },
];

export const tripNotes = [
    { id: 1, initials: "RM", title: "Hotel check-in details — Manali Stay", tagLabel: "Prime Stop", tagStatus: "success", time: "May 10, 2026 · 4:30 PM", content: "Check in after 2pm. Room 204. Includes breakfast. Total 3 nights ₹6,000 paid. Free parking available at basement. Manager contact: +91 98001 23456" },
    { id: 2, initials: "RM", title: "Rohtang Pass permit details", tagLabel: "Activity Note", tagStatus: "info", time: "May 11, 2026 · 9:00 AM", content: "Book via HP tourism portal 2 days in advance. Only 1,200 permits/day. Taxi charges ₹2,500 from Manali. Start early — gates close at 4 PM." },
    { id: 3, initials: "RM", title: "Spiti valley — important tip", tagLabel: "Reminder", tagStatus: "warning", time: "May 12, 2026 · 7:15 PM", content: "No ATMs after Shimla. Carry ₹15,000+ cash. Airtel has network up to Kaza. BSNL works in most areas. Petrol station only at Kaza — fill tank at Rampur!" },
];

export const invoice = {
    id: "TL-2026-042",
    trip: "Himachal Road Trip 2026",
    dates: "May 8 – May 18, 2026",
    issued: "May 8, 2026",
    status: "ongoing",
    budget: 45000,
    spent: 18400,
    billedTo: { name: "Rohan Mehta", city: "Mumbai, India", email: "rohan.mehta@gmail.com", phone: "+91 9876543210" },
    lineItems: [
        { id: 1, category: "Stay", categoryStatus: "planned", desc: "Hotel — The Himalayan, Manali", qty: "3 nights", unit: 2000, amount: 6000 },
        { id: 2, category: "Transport", categoryStatus: "ongoing", desc: "Flight bookings (BLR → IXC, rtn)", qty: "1", unit: 10700, amount: 10700 },
        { id: 3, category: "Activity", categoryStatus: "upcoming", desc: "Rohtang Pass permit + taxi", qty: "1", unit: 1800, amount: 1800 },
        { id: 4, category: "Food", categoryStatus: "warning", desc: "Daily meals estimate (10 days)", qty: "10", unit: 400, amount: 4000 },
    ],
    gstRate: 0.05,
};