import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row } from 'react-bootstrap';
import Login from '../components/Login'
import { login } from '../actions/user'

class Home extends Component {
  render() {
    const { dispatch, error, isAuthenticated, isLoading, username } = this.props
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

    return (
      <Row>
        {isAuthenticated &&
          <h1 onClick={localStorage.removeItem('login')}>Welcome <span style={{color: 'blue'}}>{username}</span></h1>
        }
        {!isAuthenticated &&
          <div className="well" style={wellStyles}>
            <Login
              buttonText={isLoading ? '...Loading' : 'Login'}
              onLoginClick={(data) => dispatch(login(data))}
            />
            {error &&
              <p style={{color: 'red'}}>{error}</p>
            }
          </div>
        }
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return state.user
}

export default connect(mapStateToProps)(Home)