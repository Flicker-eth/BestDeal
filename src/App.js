import Header from "./Header";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements} from "@stripe/react-stripe-js";

 const keystripe = loadStripe('pk_test_51LSc7jSGirIvQ5XFSHx3i2iqNaBvgTcjAe2ghReAxbdOIBXy1aJi3NdzAZUIhS66Y9vXn8M7omOVFiBBruzM1K8m00PKduZQtf');




function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser 
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
         <Route
          path="/payments"
          element={
            <>
            <Header />
            <Elements stripe={keystripe}>
            <Payment />
            </Elements>
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
      </Routes>
    </BrowserRouter>

    //   {/* <div className="App">

    //  <Header />
    //  <Home />
    //   </div> */}
  );
}

export default App;
