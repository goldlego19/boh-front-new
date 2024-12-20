import { useEffect, useState } from "react";
import LoadingSplashScreen from "./@Global/components/Loading/LoadingSplashScreen";
import { useAppContext } from "./@Global/contexts/AppContext";

import AuthPage from "./pages/AuthPage/AuthPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const { loading } = useAppContext();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading || showSplash) {
    return <LoadingSplashScreen />;
  }
  return (
    <div className="relative min-w-[540px] min-h-[540px]">
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/accounts" element={<AccountPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
