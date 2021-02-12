import React, { FunctionComponent } from 'preact/compat'
import useFormInput from '../../hooks/useFormInput'

export type Props = {
    authenticate: Function
}

const LoginForm: FunctionComponent<Props> = (props) => {
    const { authenticate } = props
    const [usernameValue, setusernameValue] = useFormInput('')
    const [passwordValue, setPasswordValue] = useFormInput('')

    function handleSubmit(event): void {
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
                        onChange={setusernameValue}
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
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default LoginForm
