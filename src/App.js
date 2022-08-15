import { useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <AppRouter />;
}

export default App;
