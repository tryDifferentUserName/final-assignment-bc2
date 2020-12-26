import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import Contacts from "./Views/Contacts";
import Signup from "./Views/Signup";
import Articles from "./Views/Articles";
import ReviewForm from "./Views/ReviewForm";
import Article1 from "./Views/Article1";


function App() {
  return (
    <div >
      <Router>
        <Header />
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/Articles'>
              <Articles />
            </Route>
            <Route path='/Article1'>
              <Article1 />
            </Route>
            <Route path='/'>
              <ReviewForm />
            </Route>
            <Route path='/Signup'>
              <Signup />
            </Route>
            <Route path='/Contacts'>
              <Contacts />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
