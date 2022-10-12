import { connect } from 'react-redux'
import type { Props } from './LoginForm'
import { login } from '../../redux/actions/app/auth.actions'

type DispatchProps = Pick<Props, 'authenticate'>

const mapDispatchToProps: DispatchProps = {
    authenticate: login,
}

export default connect(undefined, mapDispatchToProps)
