import { connect } from 'react-redux'
import LoginForm, { Props } from '../components/login-form'
import { authAsync } from '../redux/actions/app/auth.actions'

type DispatchProps = Pick<Props, 'authenticate'>

const mapDispatchToProps: DispatchProps = {
    authenticate: authAsync.request,
}

export default connect(undefined, mapDispatchToProps)(LoginForm)
