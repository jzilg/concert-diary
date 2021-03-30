import { connect } from 'react-redux'
import { Props } from './RegisterForm'
import { register } from '../../redux/actions/app/auth.actions'

type DispatchProps = Pick<Props, 'register'>

const mapDispatchToProps: DispatchProps = {
    register,
}

export default connect(undefined, mapDispatchToProps)
