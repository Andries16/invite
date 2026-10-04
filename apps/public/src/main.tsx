import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function App() {
  return <main><h1>Invite.md</h1><p>Published experience runtime</p></main>;
}

createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
