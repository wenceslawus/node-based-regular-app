import React from 'react'
import axios from 'axios';
import Layout from "../layouts/layout";

export default function Login({users}) {

    return (
        <Layout title="Register | Express + Next.js">
            <section>
                <div className="container">
                    <form className="form-register">
                        <h1 className="h3 mb-3 font-weight-normal">Please register</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                               required
                               autoFocus/>
                        <label htmlFor="inputFirstName" className="sr-only">First Name</label>
                        <input type="firstName" id="inputFirstName" className="form-control" placeholder="First Name"
                               required
                               autoFocus/>
                        <label htmlFor="inputLastName" className="sr-only">Last Name</label>
                        <input type="lastName" id="inputLastName" className="form-control" placeholder="Last Name"
                               required
                               autoFocus/>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                               required/>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </div>
            </section>
        </Layout>
    )
}


