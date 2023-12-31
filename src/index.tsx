import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Main from "./containers/main";
import Favorite from "./containers/favorite";
import Page404 from "./containers/page404";
import LearnAndWrite from "./containers/learnAndWrite";
import LuckAndFood from "./containers/luckAndFood";
function Index() {
  return (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/luckAndFood" element={<LuckAndFood />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/learnAndWrite" element={<LearnAndWrite />} />
        <Route path="/page404" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  );
};
const rootElement = document.getElementById('root') as HTMLElement;
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Index />);
} else {
  console.error("Root element not found");
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();