import React, { useState } from "react";
import "./App.css";
import Navbar from "./navigation/navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Product } from "./pages/product";
import { Pricing } from "./pages/pricing";
import { About } from "./pages/about";
import { Account } from "./pages/account";
import { Portfolio } from "./pages/portfolio";
import { Panels } from "./pages/sidebarPages/panels";
import { OverviewAsset } from "./pages/sidebarPages/overviewAsset";
import { AssetsExisting } from "./pages/sidebarPages/assetsExisting";
import { AssetsDefine } from "./pages/sidebarPages/assetsDefine";
import { RetrofitsExisting } from "./pages/sidebarPages/retrofitsExisting";
import { RetrofitsDefine } from "./pages/sidebarPages/retrofitsDefine";
import { ScenariosExisting } from "./pages/sidebarPages/scenariosExisting";
import { ScenariosDefine } from "./pages/sidebarPages/scenariosDefine";
import { Calculations } from "./pages/mapRedirectPage";
import { EuReport } from "./pages/sidebarPages/EuReport";
import { QuarterlyReport } from "./pages/sidebarPages/quarterlyReport";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const callback = (login: boolean) => {
    setLoggedIn(login);
  };

  return (
    <BrowserRouter>
      <Navbar loggedIn={loggedIn} callback={callback} />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/xtech" element={<Product />} />
        <Route path="/xtech/pricing" element={<Pricing />} />
        <Route path="/xtech/about" element={<About />} />
        <Route path="/xtech/account" element={<Account />} />
        <Route path="/xtech/portfolio" element={Portfolio(loggedIn)} />
        <Route path="/xtech/panels" element={Panels(loggedIn)} />
        <Route path="/xtech/asset" element={OverviewAsset(loggedIn)} />
        <Route
          path="/xtech/assetsExisting"
          element={AssetsExisting(loggedIn)}
        />
        <Route path="/xtech/assetsDefine" element={AssetsDefine(loggedIn)} />
        <Route
          path="/xtech/retrofitsExisting"
          element={RetrofitsExisting(loggedIn)}
        />
        <Route
          path="/xtech/retrofitsDefine"
          element={RetrofitsDefine(loggedIn)}
        />
        <Route
          path="/xtech/scenariosExisting"
          element={ScenariosExisting(loggedIn)}
        />
        <Route
          path="/xtech/scenariosDefine"
          element={ScenariosDefine(loggedIn)}
        />
        <Route path="/xtech/calculations" element={Calculations(loggedIn)} />
        <Route path="/xtech/euReports" element={EuReport(loggedIn)} />
        <Route
          path="/xtech/quarterlyReports"
          element={QuarterlyReport(loggedIn)}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
