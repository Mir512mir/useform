import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { ThemeContext } from "../themeContext/ThemeContext";


import Requests from "../../services/requests";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./signIn.scss";
import img from '../../resources/image.png';
import logoLight from '../../resources/logo-black.png';
import logo from '../../resources/logo.png';

function SingIn(props) {
    const { darkMode } = useContext(ThemeContext);

    const [isError, setIsError] = useState(false);
    const [isErrorLogin, setErrorLogin] = useState(false);
    let userData;

    const requests = new Requests();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const submitedData = (data) => {
        userData = {
            "username": data.login,
            "password": data.password
        };
        requests.getEnter(userData)
            .then(data => {
                if (data.token) {
                    setIsError(false);
                    setErrorLogin(false);
                    localStorage.setItem('jwt', data.token);
                    props.onEntrance();
                    console.log('server res', data);
                } else {
                    setErrorLogin(true);
                }
            })
            .catch((error) => {
                setIsError(true);
                console.log(error);
            })
            .finally(() => reset());
    };

    return (
        <section className={darkMode ? "signin" : "signin signin-light"}>
            <img className="signin__img" src={img} alt="signin-img" />
            <div className="signin__enter">
                <img className="signin__logo" src={darkMode ? logo : logoLight} alt="logo" />
                <h2 className="signin__title">Welcome, login to your account! </h2>
                {isError ? <ErrorMessage /> : null}
                {isErrorLogin ? <p className="errors__message">Login failed, please try again</p> : null}
                <form className="signin__form" onSubmit={handleSubmit(submitedData)}>
                    <input
                        className={darkMode ? "signin__input" : "signin__input signin__input-light"}
                        placeholder="Login"
                        type="text"
                        name="login"
                        {...register("login",
                            {
                                required: 'login is required field',
                                minLength: {
                                    value: 3,
                                    message: 'login too short'
                                },
                            })}
                    />
                    {errors.login && <p className="errors__message">{errors.login.message} </p>}

                    <input
                        className={darkMode ? "signin__input" : "signin__input signin__input-light"}
                        placeholder="Password"
                        type="password"
                        name="password"
                        {...register("password",
                            {
                                required: 'password is required field',
                                minLength: {
                                    value: 3,
                                    message: 'password too short'
                                },
                            })}
                    />
                    {errors.password && <p className="errors__message">{errors.password.message} </p>}

                    <input className="input__submit" type="submit" value='Login now' />
                </form>
                <div className="signin__href">Don’t have an account yet?
                    <span onClick={props.onRegistration} className="signin__href-signup"> Sign up!</span>
                </div>
            </div>
        </section>
    );
}

export default SingIn;