import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import HomeScreen from './pages/Homescreen'
import TripsScreen from './pages/TripsScreen'
import CreateTripScreen from './pages/CreateTripScreen'
import BuildItineraryScreen from './pages/BuildtineraryScreen'
import ItineraryViewScreen from './pages/ItineraryViewScreen'
import SearchScreen from './pages/SearchScreen'
import CommunityScreen from './pages/CommunityScreen'
import ChecklistScreen from './pages/ChecklistScreen'
import ProfileScreen from './pages/ProfileScreen'
import NotesScreen from './pages/NotesScreen'
import InvoiceScreen from './pages/InvoiceScreen'
import AdminScreen from './pages/AdminScreen'
import {
  user,
  topPicks,
  prevTrips,
  trips,
  suggestedActivities,
  itinerarySections,
  itineraryDays,
  budgetBreakdown,
  invoice,
  searchResults,
  communityPosts,
  checklistSections,
  adminStats,
  adminRecentTrips,
  adminMonthlyBookings,
  tripNotes,
} from './data/db'
import { GLOBAL_CSS } from './styles/tokens'
import './App.css'

function App() {
  const [screen, setScreen] = useState('home')

  const navigate = (screenId) => {
    setScreen(screenId)
  }

  const renderScreen = () => {
    switch (screen) {
      case 'home':
        return (
          <HomeScreen
            user={user}
            topPicks={topPicks}
            prevTrips={prevTrips}
            navigate={navigate}
          />
        )
      case 'trips':
        return <TripsScreen trips={trips} navigate={navigate} />
      case 'create-trip':
        return <CreateTripScreen suggestedActivities={suggestedActivities} navigate={navigate} />
      case 'build-itinerary':
        return <BuildItineraryScreen sections={itinerarySections} navigate={navigate} />
      case 'itinerary-view':
        return <ItineraryViewScreen days={itineraryDays} budgetBreakdown={budgetBreakdown} invoice={invoice} navigate={navigate} />
      case 'search':
        return <SearchScreen searchResults={searchResults} navigate={navigate} />
      case 'community':
        return <CommunityScreen communityPosts={communityPosts} navigate={navigate} />
      case 'checklist':
        return <ChecklistScreen checklistSections={checklistSections} navigate={navigate} />
      case 'profile':
        return <ProfileScreen user={user} navigate={navigate} />
      case 'notes':
        return <NotesScreen tripNotes={tripNotes} navigate={navigate} />
      case 'invoice':
        return <InvoiceScreen invoice={invoice} navigate={navigate} />
      case 'admin':
        return <AdminScreen adminStats={adminStats} adminRecentTrips={adminRecentTrips} adminMonthlyBookings={adminMonthlyBookings} navigate={navigate} />
      default:
        return (
          <div style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
            <h1>Screen not implemented</h1>
            <p>You navigated to: <strong>{screen}</strong></p>
            <button onClick={() => setScreen('home')}>Back to Home</button>
          </div>
        )
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', minWidth: 0, background: '#F5F5F4' }}>
      <style>{GLOBAL_CSS}</style>
      <Navbar user={user} currentScreen={screen} navigate={navigate} />
      <div style={{ display: 'flex', flex: 1, minHeight: 0, overflow: 'hidden' }}>
        <Sidebar currentScreen={screen} navigate={navigate} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden' }}>
          {renderScreen()}
        </div>
      </div>
    </div>
  )
}

export default App
