import "./App.css";

import Header from "./components/header/AppHeader";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="h-full w-full p-2">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
