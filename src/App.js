import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import SignInAndSignUp from "./components/sign-in-sign-up/SignInAndSignUp";
import Header from "./components/header/Header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// function App() {
//   const [currentUser, setCurrentUser] = useState(null);

//   let unsubscribeFromAuth = null;

//   useEffect(() => {
//     unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
//       if (userAuth) {
//         const userRef = await createUserProfileDocument(userAuth);

//         userRef.onSnapshot((snapShot) => {
//           setCurrentUser({
//             id: snapShot.id,
//             ...snapShot.data(),
//           });
//         });
//       }
//       setCurrentUser({
//         currentUser: userAuth,
//       });
//     });

//     return function cleanUp() {
//       unsubscribeFromAuth();
//     };
//   }, [unsubscribeFromAuth]);

//   return (
//     <div>
//       <Header currentUser={currentUser} />
//       <Switch>
//         <Route exact path="/" component={Homepage} />
//         <Route path="/shop" component={Shop} />
//         <Route path="/signin" component={SignInAndSignUp} />
//       </Switch>
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      this.setState({ currentUser: userAuth });
      console.log(this.state.currentUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
