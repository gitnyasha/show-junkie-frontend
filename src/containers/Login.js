import { connect } from 'react-redux';
import login from '../actions/session';
import Login from '../components/forms/Login';

const mapDispatchToProps = dispatch => ({
  handleSubmit: (email, password) => dispatch(login(email, password)),
})

export default connect(null, mapDispatchToProps)(Login);