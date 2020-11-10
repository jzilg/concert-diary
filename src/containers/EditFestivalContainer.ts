import { connect, MapStateToProps } from 'react-redux'
import festivalSelector from '../redux/selectors/festivalSelector'
import festivalExistsSelector from '../redux/selectors/festivalExistsSelector'
import { fetchFestivalsAsync, saveFestival } from '../redux/actions/app/festivals.actions'
import EditFestival, { Props } from '../components/edit-festival'

type StateProps = Pick<Props, 'festival' | 'festivalExists'>

const mapStateToProps: MapStateToProps<StateProps, {}> = (state): StateProps => ({
    festival: festivalSelector(state),
    festivalExists: festivalExistsSelector(state),
})

type DispatchProps = Pick<Props, 'loadFestival' | 'saveFestival'>

const mapDispatchToProps: DispatchProps = {
    loadFestival: fetchFestivalsAsync.request,
    saveFestival,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFestival)
