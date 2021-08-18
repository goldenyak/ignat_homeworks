import React from 'react'
import m from './Message.module.css';

export type MessageTypeProps = {
    avatar?: any
    name: string
    message: string
    time: string
}

function Message(props: MessageTypeProps) {
    return (
        <div className={m.message_content}>
            <div className={m.name}>{props.name}</div>
            <div className={m.text}>{props.message}</div>
            <div className={m.time}>{props.time}</div>
        </div>
    )
}

export default Message;
