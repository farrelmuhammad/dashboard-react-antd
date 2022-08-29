import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [validation, setValidation] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate.push('/dashbboard');
        }
    })

    // const loginHandler = async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData();

    //     formData.append('email', email);
    //     formData.append('password', password);

    //     await axios.post('https://rent-car-appx.herokuapp.com/admin/auth/login', formData)
    //     .then((response) => {
    //         localStorage.setItem('token', response.data.token);
    //         navigate.push('/dashboard');
    //     })
    //     .catch((err) => {
    //         setValidation(err.response.data);
    //     })
    // };

    return (
        <>
            <div className="container" style={{ marginTop: "120px" }}>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card border-0 rounded shadow-sm">
                            <div className="card-body">
                                <h4 className="fw-bold">Halaman Login</h4>
                                <hr />
                                {
                                    validation.message && (
                                        <div className="alert alert-danger">
                                            {validation.message}
                                        </div>
                                    )
                                }
                                <form 
                                // onSubmit={loginHandler}
                                >
                                    <div className="mb-3">
                                        <label className="form-label">ALAMAT EMAIL</label>
                                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Alamat Email" />
                                    </div>
                                    {
                                        validation.email && (
                                            <div className="alert alert-danger">
                                                {validation.email[0]}
                                            </div>
                                        )
                                    }
                                    <div className="mb-3">
                                        <label className="form-label">PASSWORD</label>
                                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password" />
                                    </div>
                                    {
                                        validation.password && (
                                            <div className="alert alert-danger">
                                                {validation.password[0]}
                                            </div>
                                        )
                                    }
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-primary">LOGIN</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login