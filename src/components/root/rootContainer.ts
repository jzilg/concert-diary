import type { MapStateToProps } from 'react-redux'
import { connect } from 'react-redux'
import type { Props } from './Root'
import { pageRendered } from '../../redux/actions/app/page.actions'
import pageIsRenderedSelector from '../../redux/selectors/pageIsRenderedSelector'

type StateProps = Pick<Props, 'pageIsRendered'>

const mapStateToProps: MapStateToProps<StateProps, {}> = (state) => ({
    pageIsRendered: pageIsRenderedSelector(state),
})

type DispatchProps = Pick<Props, 'pageRendered'>

const mapDispatchToProps: DispatchProps = {
    pageRendered,
}

export default connect(mapStateToProps, mapDispatchToProps)
