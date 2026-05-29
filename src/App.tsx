import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layout";
import { Button } from "./components/ui/button";
import { FlightData } from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route
            path="/"
            element={
              <main className="p-4 w-full">
                <FlightData />
              </main>
            }
          />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
