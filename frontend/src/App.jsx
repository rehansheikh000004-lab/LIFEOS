import React, { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [user,setUser] = useState(null);

  return user ? <Dashboard user={user} setUser={setUser} /> : <Login setUser={setUser} />;
}
