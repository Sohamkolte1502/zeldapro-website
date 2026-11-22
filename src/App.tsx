import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import AboutPage from './pages/AboutPage'
import CareviePage from './pages/CareviePage'
import ContactPage from './pages/ContactPage'
import ContactTopicPage from './pages/ContactTopicPage'
import InnovationPage from './pages/InnovationPage'
import SoftwarePage from './pages/SoftwarePage'
import DesignPage from './pages/DesignPage'
import HomePage from './pages/HomePage'
import IndustriesIndexPage from './pages/IndustriesIndexPage'
import IndustryDetailPage from './pages/IndustryDetailPage'
import InsightDetailPage from './pages/InsightDetailPage'
import InsightsIndexPage from './pages/InsightsIndexPage'
import NotFoundPage from './pages/NotFoundPage'
import PrivacyPage from './pages/PrivacyPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ServicesIndexPage from './pages/ServicesIndexPage'
import SolutionDetailPage from './pages/SolutionDetailPage'
import SolutionsIndexPage from './pages/SolutionsIndexPage'
import TermsPage from './pages/TermsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/design" element={<DesignPage />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesIndexPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/ai-solutions" element={<SolutionsIndexPage />} />
          <Route path="/ai-solutions/:slug" element={<SolutionDetailPage />} />
          <Route path="/carevie" element={<CareviePage />} />
          <Route path="/industries" element={<IndustriesIndexPage />} />
          <Route path="/industries/:slug" element={<IndustryDetailPage />} />
          <Route path="/insights" element={<InsightsIndexPage />} />
          <Route path="/insights/:slug" element={<InsightDetailPage />} />
          <Route path="/software" element={<SoftwarePage />} />
          <Route path="/innovation" element={<InnovationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact/:topic" element={<ContactTopicPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route
            path="/privacy-policy"
            element={<Navigate to="/privacy" replace />}
          />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App