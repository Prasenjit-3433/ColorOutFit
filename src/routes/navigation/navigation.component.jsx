import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { ReactComponent as CrwnLogo } from "../../assets/bags.svg";

import { signOutUser } from '../../utils/firebase/firebase.utils';

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser, setCurrentuser } = useContext(UserContext);
  
  const signOutHandler = async () => {
    const res = await signOutUser();
    setCurrentuser(null);
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}> SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
