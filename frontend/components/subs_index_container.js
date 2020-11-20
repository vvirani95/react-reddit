import { connect } from 'react-redux';
import { selectAllSubs } from '../../reducers/selectors';
import Subs from '../components/subs';
import { requestAllSubs } from '../../actions/sub_actions';

const mapStateToProps = state => ({
    subs: selectAllSubs(state) 
});

const mapDispatchToProps = dispatch => ({
    requestAllSubs: () => dispatch(requestAllSubs())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Subs);