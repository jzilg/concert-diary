import type { FC } from 'preact/compat'
import React from 'preact/compat'
import { Link } from 'react-router-dom'
import useFormInput from '../../hooks/useFormInput'
import HorizontalList from '../horizontal-list'

export type Props = {
    register: Function
}

const RegisterForm: FC<Props> = (props) => {
    const { register } = props
    const [usernameValue, setUsernameValue] = useFormInput('')
    const [passwordValue, setPasswordValue] = useFormInput('')
    const [tokenValue, setTokenValue] = useFormInput('')

    const handleSubmit = (event): void => {
        event.preventDefault()
        register({
            username: usernameValue,
            password: passwordValue,
            token: tokenValue,
        })
    }

    return (
        <>
            <h1>Concert Diary</h1>
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
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
                <label>
                    <span>Token</span>
                    <input
                        value={tokenValue}
                        onChange={setTokenValue}
                        type="password"
                        required
                    />
                </label>
                <HorizontalList>
                    <button type="submit">Register</button>
                    <Link to="/login">Back to Login</Link>
                </HorizontalList>
            </form>
        </>
    )
}

export default RegisterForm
