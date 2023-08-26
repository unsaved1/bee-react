import MainPage from "../pages/MainPage";
import BeePage from "../pages/BeePage";
import TeaPage from "../pages/TeaPage";
import PayPage from "../pages/PayPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactsPage from "../pages/ContactsPage";
import ReviewsPage from "../pages/ReviewsPage";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/beeProducts" element={<BeePage/>}/>
          <Route path="/teaProducts" element={<TeaPage/>}/>
          <Route path="/pay" element={<PayPage/>}/>
          <Route path="/contacts" element={<ContactsPage/>}/>
          <Route path="/reviews" element={<ReviewsPage/>}/>
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
