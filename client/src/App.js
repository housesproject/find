import React from 'react';
import { Route } from 'react-router-dom'; 
import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase.util';

import Header from './components/header/header.compoent';
import Home from './pages/home/home';
import RoomDetail from './pages/room-detail/room-detail.component';
import Footer from './components/footer/footer.component';
import { fetchUser } from './redux/user/userAction';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        this.props.fetchUser(userRef);
      //   userRef.onSnapshot(snapShot => {
      //     this.setState({
      //       currentUser: {
      //         id: snapShot.id,
      //         ...snapShot.data()
      //       }
      //     });
      //   });
      // }

      // this.setState({ currentUser: userAuth });
    // });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(this.props)
    return (
      <>
      <Header currentUser={this.props.user} />
        <div className='wrraper'>
          <Route exact path='/' component={Home} />
          <Route exact path='/:category' component={Home} />
          <Route exact path='/room-detail/:id' component={RoomDetail} />
        </div>
      <Footer />
    </>
    );
  }
}

const mapStateToProps = state => {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps, { fetchUser })(App);