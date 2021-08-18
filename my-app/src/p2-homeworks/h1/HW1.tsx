import React from 'react'
import Message from './Message'
import hw from "./HW1.module.css";


function HW1() {
    return (
        <div className={hw.main_section}>
            <div>
                <img className={hw.image}
                     src='https://i.pinimg.com/originals/a0/4e/fc/a04efc1e30b79d75c3c4a76b6dc438a2.jpg'/>
            </div>
            <Message name={'Artem'} message={'npm start нажимал?'} time={"22:00"}/>
        </div>
    )
}

export default HW1
