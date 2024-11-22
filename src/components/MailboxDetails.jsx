import React from 'react'
import { useParams } from 'react-router-dom'

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams()
  const selectedBox = mailboxes.find(mailbox => mailbox._id === Number(mailboxId))

  if (!selectedBox) {
    return <h2>Mailbox Not Found!</h2>
  }

  return (
    <div>
      <h2>Mailbox Details</h2>
      <p><strong>Box Number:</strong> {selectedBox._id}</p>
      <p><strong>Boxholder:</strong> {selectedBox.boxholder}</p>
      <p><strong>Box Size:</strong> {selectedBox.boxSize}</p>
    </div>
  )
}

export default MailboxDetails