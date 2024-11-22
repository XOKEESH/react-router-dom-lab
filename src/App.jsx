import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'
import MailboxDetails from './components/MailboxDetails'

function App() {
  const savedMailboxes = JSON.parse(localStorage.getItem('mailboxes')) || []
  const [mailboxes, setMailboxes] = useState(savedMailboxes)

  useEffect(() => {
    localStorage.setItem('mailboxes', JSON.stringify(mailboxes))
  }, [mailboxes])

  const addBox = (newBox) => {
    const _id = mailboxes.length + 1
    setMailboxes([...mailboxes, { ...newBox, _id }])
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </Router>
  )
}

export default App