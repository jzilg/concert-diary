import React, { ReactElement, FormEvent } from 'react'
import useFormInput from '../../hooks/useFormInput'

export type Props = {
    authenticate: Function
}

function LoginForm(props: Props): ReactElement {
    const { authenticate } = props
    const [usernameValue, setusernameValue] = useFormInput('')
    const [passwordValue, setPasswordValue] = useFormInput('')

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
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
                <fieldset>
                    <legend>Login</legend>
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
                </fieldset>
            </form>
        </>
    )
}

export default LoginForm
