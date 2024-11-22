import React from 'react'
import { Link } from 'react-router-dom'

const MailboxList = ({ mailboxes }) => (
  <ul>
    {mailboxes.map(mailbox => (
      <li key={mailbox._id}>
        <Link to={`/mailboxes/${mailbox._id}`}>
          <div className="mail-box">{mailbox._id}</div>
        </Link>
      </li>
    ))}
  </ul>
)

export default MailboxList