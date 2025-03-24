import React from 'react'

const Messages = () => {
    let unreadMessages = ['a','b']
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there's exactly 1 unread message, it should read "You have 
     *   1 unread message (singular)"
     * - If there are > 1 unread messages, display "You have <n> unread
     *   messages" (plural)
     */
    if (unreadMessages.length === 0) {
        return <h1>You're all caught up!</h1>
    } else if (unreadMessages.length === 1) {
        return <h1>You have 1 unread message!</h1>
    } else {
        return <h1>You have {unreadMessages.length} unread messages!</h1>
    }
    
}
export default Messages
