import './Globals.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

import { Home } from './pages/Home'
import { ProjectPage } from './pages/ProjectPage'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main >
        <Routes>
          <Route index element={<Home />} />
          <Route path="/:projectslug" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
