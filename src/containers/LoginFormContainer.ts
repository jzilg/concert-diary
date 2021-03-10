import { connect } from 'react-redux'
import LoginForm, { Props } from '../components/login-form'
import { login } from '../redux/actions/app/auth.actions'

type DispatchProps = Pick<Props, 'authenticate'>

const mapDispatchToProps: DispatchProps = {
    authenticate: login,
}

export default connect(undefined, mapDispatchToProps)(LoginForm)
