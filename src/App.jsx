import { RouterProvider } from "react-router-dom"; // ✅ Correct import
import router from "./router/router"; // Import your router

function App() {
  return <RouterProvider router={router} />;
}

export default App;
