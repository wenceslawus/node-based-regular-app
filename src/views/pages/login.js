import React from 'react'
import axios from 'axios';
import Layout from "../layouts/layout";

export default function Login() {

    return (
        <Layout title="Login | Express + Next.js">
            <section>
                <div class="container">
                    <form className="form-signin" method="POST" action="./api/login">
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" name="email" className="form-control"
                               placeholder="Email address"
                               required autoFocus/>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" name="password" className="form-control"
                               placeholder="Password" required/>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"/> Remember me
                            </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </div>
            </section>
        </Layout>
    )
}


