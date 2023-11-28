import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Hero, Login, Register, ForgotPassword, Contact, About, Query, FAQ, Footer } from './components'
import { useState } from "react";

function App() {
  const [loginInfo, setLoginInfo] = useState<UserLogin | null>(null)

  return (
    <BrowserRouter>
      <div className="min-h-full">

        <Navbar loginInfo={loginInfo} />
        
        <Routes>
             <Route path="/" element={<Hero />} />
             <Route path="/login" element={<Login setLoginInfo={setLoginInfo} />} />
             <Route path="/register" element={<Register setLoginInfo={setLoginInfo} />} />
             <Route path="/forgot" element={<ForgotPassword />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/about" element={<About />} />
             <Route path="/query" element={<Query />} />
             <Route path="/faq" element={<FAQ />} />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App
