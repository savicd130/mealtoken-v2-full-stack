import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import './sass/main.scss';
import AboutScreen from './screen/AboutScreen';
import ContactScreen from './screen/ContactScreen';
import HomeScreen from './screen/HomeScreen';
import MenuScreen from './screen/MenuScreen';
import ProfileScreen from './screen/ProfileScreen';
import RegisterScreen from './screen/RegisterScreen';
import ShopScreen from './screen/ShopScreen';
import ProfileEditScreen from './screen/ProfileEditScreen';

import UserRoute from './routes/UserRoute';
import ProfileChangePasswordScreen from './screen/ProfileChangePasswordScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header className="header">
          <Navbar />
        </header>
        <main className="main">
          <Route path="/" component={HomeScreen} exact />
          <Route path="/menu/:category?" component={MenuScreen} />
          <Route path="/about" component={AboutScreen} />
          <Route path="/shop" component={ShopScreen} />
          <Route path="/contact" component={ContactScreen} />
          <Route path="/register" component={RegisterScreen} />

          <UserRoute path="/profile" component={ProfileScreen} exact />
          <UserRoute path="/profile/edit" component={ProfileEditScreen} />
          <UserRoute
            path="/profile/changepassword"
            component={ProfileChangePasswordScreen}
          />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
