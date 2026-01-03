import React, { useEffect, useState } from "react";
import api from "../api";

export default function Dashboard({ user, setUser }) {
  const [notes,setNotes] = useState([]);
  const [tasks,setTasks] = useState([]);
  const [text,setText] = useState("");

  useEffect(() => {
    api.get("/api/notes").then(r=>setNotes(r.data));
    api.get("/api/tasks").then(r=>setTasks(r.data));
  }, []);

  const addNote = async () => {
    const r = await api.post("/api/notes", { text });
    setNotes([...notes, r.data]);
    setText("");
  };

  return (
    <div>
      <h2>Welcome {user.name}</h2>
      <button onClick={()=>{localStorage.clear();setUser(null)}}>Logout</button>

      <h3>Notes</h3>
      <input value={text} onChange={e=>setText(e.target.value)} />
      <button onClick={addNote}>Add</button>

      {notes.map(n=><p key={n._id}>{n.text}</p>)}
    </div>
  );
}
