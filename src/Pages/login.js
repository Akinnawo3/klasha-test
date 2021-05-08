import React from 'react';
import '../assets/scss/auth.scss';
import { AvForm, AvField } from 'availity-reactstrap-validation';


const Login = (props) => {
    const handleValidSubmit = (event, values) => {
        console.log("values")
    }

    return (
        <div className="auth-pages-cover  container-fluid  ">
            <div className="row pt-5">
                <div className="col col-md-8">
                </div>
                <div className="col col-md-4 ">
                    <div className="card card-bg border-dark rounded" style={{ width: '22rem', height: '28rem' }}>
                        <div className="card-body">
                            <h4 className="card-title d-flex justify-content-between px-5 mb-4"><span className="border-bottom border-dark border-2">Sign in</span> <span className="fw-bold text-muted">|</span> <span className="text-muted">Sign up</span></h4>
                            <div className="mt-5 ">
                                <AvForm
                                    className="form-horizontal "
                                    onValidSubmit={(e, v) => {
                                        handleValidSubmit(e, v)
                                    }}
                                >
                                    {props.error && typeof props.error === "string" ? alert(props.error) : null}

                                    <div className="mb-4 ">
                                        <AvField
                                            name="email"
                                            className=" mb-3 bg-light border-0"
                                            placeholder="Email"
                                            type="email"
                                            required
                                        />
                                    </div>

                                   
                                        <AvField
                                            name="Password"
                                            className="form-control mb-3 "
                                            type="password"
                                            placeholder="Enter Password"
                                            required
                                        />
                                 

                                    <div className="d-flex justify-content-between">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input bg-dark"
                                                id="customControlInline"
                                            />
                                            <label
                                                className="form-check-label "
                                                htmlFor="customControlInline"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                        <div className="text-danger">
                                            Forgot Password?
                                        </div>
                                    </div>

                                    <div className="mt-3 text-center">
                                        <button
                                            className="btn btn-primary btn-sm bg-danger rounded waves-effect waves-light"
                                            type="submit"
                                        >
                                            Sign in
                        </button>
                                    </div>
                                    <div className="mt-4 text-end fs-6">
                                        <p className="mb-0">Don't have an account ? <a href="/signup" className="fw-medium text-danger"> Signup now </a> </p>
                                    </div>

                                </AvForm>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login

