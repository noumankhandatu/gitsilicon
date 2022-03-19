import Routing from "./routes";
import "./App.css";
import { ThemeProvider } from "./theme.provider";

function App() {
  return (
    <ThemeProvider>
      <Routing />
    </ThemeProvider>
  );
}
export default App;
