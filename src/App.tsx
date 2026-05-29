import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layout";
import { Button } from "./components/ui/button";
import { FlightData } from "./pages/dashboard";
import AirportPage from "./pages/airport/page";

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
          <Route
            path="/airports"
            element={
              <main className="w-full p-4">
                <AirportPage />
              </main>
            }
          />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
