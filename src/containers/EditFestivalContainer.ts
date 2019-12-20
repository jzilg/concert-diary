import { connect } from 'react-redux'
import Festival, { FestivalId } from '../entities/Festival'
import festivalSelector from '../redux/selectors/festivalSelector'
import festivalExistsSelector from '../redux/selectors/festivalExistsSelector'
import { fetchFestivalsAsync, saveFestival } from '../redux/actions/app/festivals.actions'
import EditFestival from '../components/edit-festival'

type StateProps = {
    festival: Festival
    festivalExists: boolean
}

function mapStateToProps(state): StateProps {
    return {
        festival: festivalSelector(state),
        festivalExists: festivalExistsSelector(state),
    }
}

type DispatchProps = {
    loadFestival: (festivalId: FestivalId) => void
    saveFestival: Function
}

const mapDispatchToProps: DispatchProps = {
    loadFestival: fetchFestivalsAsync.request,
    saveFestival,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFestival)
