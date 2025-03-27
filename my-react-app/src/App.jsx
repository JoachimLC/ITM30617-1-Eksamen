import './App.css'
import { getAllGroupMembers } from './sanity/service'
import { useState, useEffect } from 'react'

function App() {
  const [GroupMembers, setGroupMembers] = useState([])


  const FetchGroupMembers = async () => {
    const FetchedMembers = await getAllGroupMembers();
    setGroupMembers(FetchedMembers);
  }

  useEffect(() => {
    FetchGroupMembers();
}, [])

  console.log(GroupMembers)

  return (
    <section>
    <h1>Handleliste</h1>
    <ul>
      <li>
        <div className="vare heading">Vare</div>
        <div className="mengde heading">Mengde</div>
      </li>
      {GroupMembers.map((member) => (
        <li>
          <div className="vare">{member.navn}</div>
          <div className="mengde">{member.biography}</div>
          </li>
        )
      )}
    </ul>
    </section>
  )
}

export default App
