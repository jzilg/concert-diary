import { connect, MapStateToProps } from 'react-redux'
import festivalSelector from '../redux/selectors/festivalSelector'
import { fetchFestivalAsync, saveFestival } from '../redux/actions/app/festivals.actions'
import EditFestival, { Props } from '../components/edit-festival'

type StateProps = Pick<Props, 'festival'>

const mapStateToProps: MapStateToProps<StateProps, {}> = (state): StateProps => ({
    festival: festivalSelector(state),
})

type DispatchProps = Pick<Props, 'loadFestival' | 'saveFestival'>

const mapDispatchToProps: DispatchProps = {
    loadFestival: fetchFestivalAsync.request,
    saveFestival,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFestival)
