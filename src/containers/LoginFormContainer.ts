import { connect } from 'react-redux'
import LoginForm, { Props } from '../components/login-form'
import authAsync from '../redux/actions/app/auth.actions'

const mapDispatchToProps: Partial<Props> = {
    authenticate: authAsync.request,
}

export default connect(undefined, mapDispatchToProps)(LoginForm)
