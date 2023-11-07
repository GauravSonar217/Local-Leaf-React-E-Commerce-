import React, { useState } from "react";
import googleLogo from "../Images/google.png";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase";
import Button from "./Button";

function Login() {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [type, setType] = useState(true);

  const signinUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => alert("you are signed in successfully"))
      .catch((err) => alert(err.message));
  };

  const googleSignIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((value) => alert("you are signed in with google successfully"))
      .catch((err) => alert(err.message));
  };

  const createUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Message Sent SuccessFully")
    );
  };

  function showPass(e) {
    if (type === true) {
      setType((type = false));
      e.target.className = "fa-solid fa-eye-slash";
    } else {
      setType((type = true));
      console.log(e.target.className);
      e.target.className = "fa-solid fa-eye";
    }
  }
  return (
    <React.Fragment>
      <section className="loginSec">
        <div className="registration">
          <h1>Login</h1>
          <form>
            <button
              onClick={googleSignIn}
              id="submitBtn"
              className="normalBtn googleSignin"
            >
              <img src={googleLogo} alt="Google logo" /> Sign in with Google
            </button>
            <div class="divider">
              <div class="divider-line"></div>
              <div class="divider-text">OR</div>
              <div class="divider-line"></div>
            </div>
            <label htmlFor="">Email :</label>
            <br />
            <input
              type="email"
              placeholder="Enter Email Address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <br />
            <label htmlFor="">Password :</label>
            <br />
            <input
              type={type === true ? "password" : "text"}
              placeholder="Password must be of 8 character"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
            <span>
              <i onClick={showPass} className="fa-solid fa-eye"></i>
              <br />
            </span>
            <div className="queryBox">
              <p className="tnc">
                <input type="checkbox" id="check" />
                Remember me
              </p>
              <a href="" className="forgetlink">
                Forget Password ?
              </a>
            </div>
            <br />
            <p className="tnc">
              <input type="checkbox" id="check" />
              Accept Terms and Conditions
            </p>
            <Button class="loginBtn" text="Login"></Button>
          </form>
        </div>
      </section>
      {/* <section className='contactSec' id='contact'>
                <div className="container" id='contactCont'>
                    <div className="contactForm">
                        <h1>LOGIN</h1>
                        <form action="">
                            <label htmlFor="email">Email</label><br />
                            <input
                                type="email"
                                name='email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder='Enter your email address'
                            /><br />
                            <label htmlFor="email">Password</label><br />
                            <input
                                type="password"
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                placeholder='Enter your password'
                            /><br />
                            <button onClick={signinUser} id='submitBtn' className='normalBtn'>Sign In</button>
                            <button onClick={googleSignIn} id='submitBtn' className='normalBtn'>Sign In with google</button>
                        </form>
                    </div>
                </div>
            </section> */}
    </React.Fragment>
  );
}

export default Login;
