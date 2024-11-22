import React from 'react'
import { Link } from 'react-router-dom'

const MailboxList = ({ mailboxes }) => (
  <div>
    <h2>Mailboxes</h2>
    <div className="mailboxes-container">
      {mailboxes.map((mailbox) => (
        <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id}>
          <div className="mail-box">{mailbox._id}</div>
        </Link>
      ))}
    </div>
  </div>
)

export default MailboxList