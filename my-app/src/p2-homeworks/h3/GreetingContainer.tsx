import React, {ChangeEvent, ChangeEventHandler, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

function GreetingContainer(props: GreetingContainerPropsType) {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const trimmedName = e.currentTarget.value.trim()

        if (trimmedName) {
            setName(trimmedName)
            setError('')
        } else {
            setName('')
            setError('name is require')
        }
    }

    const addUser = () => {
        props.addUserCallback(name)
        alert(`privet  ${name} !`)
    }

    const totalUsers = props.users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
