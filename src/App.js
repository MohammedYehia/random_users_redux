import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsersData } from './store/actions';
import './App.css';

class App extends Component {

  componentDidMount(){
    this.props.toGetUsers();
  }

  render() {
    const { users, loading, err } = this.props;

    if(loading){
      return <div className="App">LOADING...</div>;
    }

    if(err){
      return <h1>BIG ERROR *_*</h1>
    }

    return (
      <div className="App">
        <ul>
          {users.map(user =>( 
            <li key={user.id.value}>
              {user.gender} || {user.name.first} || {user.name.last}
            </li>))}
        </ul>         
      </div>
    );
  }
}

//Assign redux global state to the component props
const mapStateToProps = state => {
  return {
    users: state.reducer.users,
    loading: state.reducer.loading,
    err: state.reducer.err
  }
}

//Assign redux dispath actions to the component props
const mapDispatchToState = dispatch => {
  return {
    toGetUsers: () => dispatch(fetchUsersData())
  }
}

export default connect(mapStateToProps, mapDispatchToState)(App);
