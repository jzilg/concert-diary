import type { FC } from 'preact/compat'
import React from 'preact/compat'
import { Link } from 'react-router-dom'
import useFormInput from '../../hooks/useFormInput'
import HorizontalList from '../horizontal-list'

export type Props = {
    authenticate: Function
}

const LoginForm: FC<Props> = (props) => {
    const { authenticate } = props
    const [usernameValue, setUsernameValue] = useFormInput('')
    const [passwordValue, setPasswordValue] = useFormInput('')

    const handleSubmit = (event): void => {
        event.preventDefault()
        authenticate({
            username: usernameValue,
            password: passwordValue,
        })
    }

    return (
        <>
            <h1>Concert Diary</h1>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label>
                    <span>Username</span>
                    <input
                        value={usernameValue}
                        onChange={setUsernameValue}
                        type="text"
                        minLength={2}
                        required
                    />
                </label>
                <label>
                    <span>Password</span>
                    <input
                        value={passwordValue}
                        onChange={setPasswordValue}
                        type="password"
                        minLength={6}
                        required
                    />
                </label>
                <HorizontalList>
                    <button type="submit">Login</button>
                    <Link to="/register">Register</Link>
                </HorizontalList>
            </form>
        </>
    )
}

export default LoginForm
