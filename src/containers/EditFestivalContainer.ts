import { connect, MapStateToProps } from 'react-redux'
import festivalSelector from '../redux/selectors/festivalSelector'
import festivalExistsSelector from '../redux/selectors/festivalExistsSelector'
import { fetchFestivalsAsync, saveFestival } from '../redux/actions/app/festivals.actions'
import EditFestival, { Props } from '../components/edit-festival'

const mapStateToProps: MapStateToProps<Partial<Props>, {}> = (state) => ({
    festival: festivalSelector(state),
    festivalExists: festivalExistsSelector(state),
})

const mapDispatchToProps: Partial<Props> = {
    loadFestival: fetchFestivalsAsync.request,
    saveFestival,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFestival)
