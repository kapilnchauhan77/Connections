import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Hero, Login, Register, ForgotPassword, Contact, About, Query, FAQ, Footer } from './components'
import { useState, useEffect } from "react";

function App() {
  const [loginInfo, setLoginInfo] = useState<UserLogin | null>(null)
  const [loading, setLoading] = useState<Boolean>(true)
  useEffect(() => {
     const loggedInUser = localStorage.getItem("loginInfo");
     if (loggedInUser) {
       const foundUser = JSON.parse(loggedInUser);
       setLoginInfo(foundUser);
     }
     setLoading(false)
   }, []);

  if (loading) { return "Loading" }
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
