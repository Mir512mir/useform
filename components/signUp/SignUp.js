import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { ThemeContext } from "../themeContext/ThemeContext";


import Requests from "../../services/requests";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./signUp.scss";
import img from '../../resources/image.png';
import logoLight from '../../resources/logo-black.png';
import logo from '../../resources/logo.png';

function SingUp(props) {
    const { darkMode } = useContext(ThemeContext);

    const [isError, setIsError] = useState(false);
    const [isErrorLogin, setErrorLogin] = useState(false);
    let userData;

    const requests = new Requests();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        getValues
    } = useForm();

    const passwordMatchValidator = (value) => {
        const { password } = getValues();
        return password === value ? true : "Passwords do not match";
    };

    const submitedData = (data) => {
        userData = {
            "username": data.login,
            "password": data.password,
            "confirm_password": data.confirmPassword
        };
        requests.getRegistration(userData)
            .then(data => {
                if (data.id) {
                    setIsError(false);
                    setErrorLogin(false);
                    props.onRegistration();
                    console.log('server res', data);
                } else {
                    setErrorLogin(true);
                    console.log(data);
                }

            })
            .catch((error) => {
                setIsError(true);
                console.log(error);
            })
            .finally(() => reset());
    };

    return (
        <section className={darkMode ? "signup" : "signup signup-light"}>
            <img className="signup__img" src={img} alt="signin-img" />
            <div className="signup__enter">
                <img className="signup__logo" src={darkMode ? logo : logoLight} alt="logo" />
                <h2 className="signup__title">Welcome to enter your registration details! </h2>
                {isError ? <ErrorMessage /> : null}
                {isErrorLogin ? <p className="errors__message">The login must be unique</p> : null}
                <form className="signup__form" onSubmit={handleSubmit(submitedData)}>
                    <input
                        className={darkMode ? "signup__input" : "signup__input signup__input-light"}
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
                        className={darkMode ? "signup__input" : "signup__input signup__input-light"}
                        placeholder="Email"
                        type="email"
                        name="email"
                        {...register("email",
                            {
                                required: 'Email is required field',
                                pattern: {
                                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                                    message: 'Wrong email'
                                }
                            })}
                    />
                    {errors.email && <p className="errors__message">{errors.email.message} </p>}

                    <input
                        className={darkMode ? "signup__input" : "signup__input signup__input-light"}
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

                    <input
                        className={darkMode ? "signup__input" : "signup__input signup__input-light"}
                        placeholder="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        {...register("confirmPassword", {
                            validate: passwordMatchValidator
                        })}
                    />
                    {errors.confirmPassword && <p className="errors__message">{'Passwords don\'t match'}</p>}

                    <input className="input__submit" type="submit" value='Login now' />
                </form>
                <div className="signup__href">Do you have the account?
                    <span onClick={props.onRegistration} className="signup__href-signup">     Sign in!</span>
                </div>

            </div>
        </section>
    );
}

export default SingUp;