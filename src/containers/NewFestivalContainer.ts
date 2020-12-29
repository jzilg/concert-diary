import { connect, MapStateToProps } from 'react-redux'
import festivalSelector from '../redux/selectors/festivalSelector'
import { saveNewFestival } from '../redux/actions/app/festivals.actions'
import NewFestival, { Props } from '../components/new-festival'

type StateProps = Pick<Props, 'festival'>

const mapStateToProps: MapStateToProps<StateProps, {}> = (state): StateProps => ({
    festival: festivalSelector(state),
})

type DispatchProps = Pick<Props, 'saveNewFestival'>

const mapDispatchToProps: DispatchProps = {
    saveNewFestival,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewFestival)
