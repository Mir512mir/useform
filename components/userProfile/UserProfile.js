import React, { useState, useEffect } from "react";
import NavProfile from "../navProfile/NavProfile";
import Requests from "../../services/requests";
import ModalPost from "../modalPosts/ModalPosts";
import Button from 'react-bootstrap/Button';

import "./userProfile.scss";
import UsersPosts from "../othersUsers/OtherUsers";

function UserProfile() {
    const [userInfo, setUserInfo] = useState({});
    const [modalShow, setModalShow] = useState(false);
    const [users,setUsers]=useState();
    const [modalUsersIsOpen,setModalUsersIsOpen]=useState(false)
    const requests = new Requests();

    const getUsers= () => {
        setModalUsersIsOpen(true)
        requests.getUsers().then(data => {
          if (data && data?.length){
             setUsers(data)
          }
        })
          .catch((error) => {
            console.log(error);
        });
        
       }
    


    useEffect(() => {
        requests.getNewUser()
            .then(data => {
                console.log(data);
                setUserInfo(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <NavProfile />
            <main className="bg-gray-100 bg-opacity-25">

                <div className="lg:w-8/12 lg:mx-auto mb-8">

                    <header className="flex flex-wrap items-center p-4 md:py-8">

                        <div className="md:w-3/12 md:ml-16">

                            <img className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                     border-2 border-pink-600 p-1" src={userInfo.avatar} alt="profile" />
                        </div>
                        <div className="w-8/12 md:w-7/12 ml-4">
                            <div className="md:flex md:flex-wrap md:items-center mb-4">
                                <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">

                                </h2>
                                <span className="inline-block fas fa-certificate fa-lg text-blue-500 
                               relative mr-6 text-xl transform -translate-y-2" aria-hidden="true">
                                    <i className="fas fa-check text-white text-xs absolute inset-x-0
                               ml-1 mt-px"></i>
                                </span>


                                {/* <a href="#" className="bg-blue-500 px-2 py-1 
                        text-white font-semibold text-sm rounded block text-center 
                        sm:inline-block block">Follow</a> */}

                                <Button variant="primary ml-10" onClick={() => setModalShow(true)}>
                                    Edit
                                </Button>

                                <ModalPost
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />

                            </div>


                            <ul className="hidden md:flex space-x-8 mb-4">
                                <li>
                                    <span className="font-semibold">{userInfo.posts_count}</span>
                                    posts
                                </li>

                                <li>
                                    <span className="font-semibold">{userInfo.followers}</span>
                                    followers
                                </li>
                                <li>
                                    <span className="font-semibold">{userInfo.following}</span>
                                    following
                                </li>
                            </ul>


                            <div className="hidden md:block">
                                <h1 className="font-semibold">{userInfo.username}</h1>
                                <p>{userInfo.bio}</p>
                            </div>

                        </div>


                        <div className="md:hidden text-sm my-2">
                            <h1 className="font-semibold">Mr Travlerrr...</h1>
                            <span>Travel, Nature and Music</span>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>

                    </header>


                    <div className="px-px md:px-3">


                        <ul className="flex md:hidden justify-around space-x-8 border-t 
                text-center p-2 text-gray-600 leading-snug text-sm">
                            <li>
                                <span className="font-semibold text-gray-800 block">136</span>
                                posts
                            </li>

                            <li>
                                <span className="font-semibold text-gray-800 block">40.5k</span>
                                followers
                            </li>
                            <li>
                                <span className="font-semibold text-gray-800 block">302</span>
                                following
                            </li>
                        </ul>


                        <ul className="flex items-center justify-around md:justify-center space-x-12  
                    uppercase tracking-widest font-semibold text-xs text-gray-600
                    border-t">

                            <li className="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
                                <a className="inline-block p-3" href="#">
                                    <i className="fas fa-th-large text-xl md:text-xs"></i>
                                    <span className="hidden md:inline">post</span>
                                </a>
                            </li>
                            <li>
                                <button  onClick={getUsers} className="inline-block p-3" href="#">
                                    <i className="far fa-square text-xl md:text-xs"></i>
                                    <span className="hidden md:inline">users</span>
                                </button>
                                <UsersPosts 
                                isOpen={modalUsersIsOpen} 
                                users ={users}
                                onHideHandler={setModalUsersIsOpen} 
                                />
                            </li>
                            <li>
                                <a className="inline-block p-3" href="#">
                                    <i className="fas fa-user border border-gray-500
                             px-1 pt-1 rounded text-xl md:text-xs"></i>
                                    <span className="hidden md:inline">tagged</span>
                                </a>
                            </li>
                        </ul>

                        <div className="flex flex-wrap -mx-px md:-mx-3">


                            <div className="w-1/3 p-px md:px-3">

                                <a href="#">
                                    <article className="post bg-gray-100 text-white relative pb-full md:mb-6">

                                        <img className="w-full h-full absolute left-0 top-0 object-cover" src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="image" />

                                        <i className="fas fa-square absolute right-0 top-0 m-1"></i>

                                        <div className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden">
                                            <div className="flex justify-center items-center 
                                    space-x-4 h-full">
                                                <span className="p-2">
                                                    <i className="fas fa-heart"></i>
                                                    412K
                                                </span>

                                                <span className="p-2">
                                                    <i className="fas fa-comment"></i>
                                                    2,909
                                                </span>
                                            </div>
                                        </div>

                                    </article>
                                </a>
                            </div>

                            <div className="w-1/3 p-px md:px-3">
                                <a href="#">

                                    <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
                                        <img className="w-full h-full absolute left-0 top-0 object-cover" src="https://images.unsplash.com/photo-1498409570040-05bf6d3dd5b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="image" />


                                        <div className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden">
                                            <div className="flex justify-center items-center 
                                    space-x-4 h-full">
                                                <span className="p-2">
                                                    <i className="fas fa-heart"></i>
                                                    412K
                                                </span>

                                                <span className="p-2">
                                                    <i className="fas fa-comment"></i>
                                                    1,993
                                                </span>
                                            </div>
                                        </div>

                                    </article>
                                </a>
                            </div>

                            <div className="w-1/3 p-px md:px-3">
                                <a href="#">
                                    <article className="post bg-gray-100 text-white relative pb-full  md:mb-6">
                                        <img className="w-full h-full absolute left-0 top-0 object-cover" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="image" />

                                        <div className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden">
                                            <div className="flex justify-center items-center 
                                    space-x-4 h-full">
                                                <span className="p-2">
                                                    <i className="fas fa-heart"></i>
                                                    112K
                                                </span>

                                                <span className="p-2">
                                                    <i className="fas fa-comment"></i>
                                                    2,090
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            </div>

                            <div className="w-1/3 p-px md:px-3">
                                <a href="#">
                                    <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
                                        <img className="w-full h-full absolute left-0 top-0 object-cover" src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="image" />

                                        <i className="fas fa-video absolute right-0 top-0 m-1"></i>


                                        <div className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden">
                                            <div className="flex justify-center items-center 
                                    space-x-4 h-full">
                                                <span className="p-2">
                                                    <i className="fas fa-heart"></i>
                                                    841K
                                                </span>

                                                <span className="p-2">
                                                    <i className="fas fa-comment"></i>
                                                    909
                                                </span>
                                            </div>
                                        </div>

                                    </article>
                                </a>
                            </div>

                            <div className="w-1/3 p-px md:px-3">
                                <a href="#">
                                    <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
                                        <img className="w-full h-full absolute left-0 top-0 object-cover" src="https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" alt="image" />

                                        <div className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden">
                                            <div className="flex justify-center items-center 
                                    space-x-4 h-full">
                                                <span className="p-2">
                                                    <i className="fas fa-heart"></i>
                                                    120K
                                                </span>

                                                <span className="p-2">
                                                    <i className="fas fa-comment"></i>
                                                    3,909
                                                </span>
                                            </div>
                                        </div>

                                    </article>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default UserProfile;