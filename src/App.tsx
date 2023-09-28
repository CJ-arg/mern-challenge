import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";
import { UserProvider } from "./useContext/UserProvider";

function App() {
  return (
    <UserProvider>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </UserProvider>
  );
}

export default App;
