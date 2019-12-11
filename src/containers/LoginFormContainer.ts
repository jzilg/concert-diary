import { connect } from 'react-redux'
import LoginForm from '../components/login-form'
import { authAsync } from '../redux/actions/app/auth.actions'

type DispatchProps = {
    authenticate: Function
}

const mapDispatchToProps: DispatchProps = {
    authenticate: authAsync.request,
}

export default connect(undefined, mapDispatchToProps)(LoginForm)
