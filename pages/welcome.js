import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
// import Anya from "./images/anya.gif";
// import profilePic from './images/kara.png';
import Image from 'next/image'

export default function Welcome(){
    const [showModal, setShowModal] = useState(false);

    return(
        <div className="welcome flex flex-col md:flex-row">
            <div className="flex-1" onClick={()=> setShowModal(true)}>

                <div className='m-auto md:ml-10 md:float-right custom-position'>
                    {/* <Image
                        className="rounded-full" 
                        src={profilePic}
                        alt="Photo of Kara"
                    /> */}
                    <Image
                        className="rounded-full"
                        src="/images/Karage.jpg"
                        alt="Photo of Kara"
                        width="400"
                        height="480"
                        
                    />
                </div>
            </div>
            <div className="flex-1 ml-10 mt-40 mr-5">
                <h1 className="text-3xl md:text-4xl text-white">hi, my name is kara</h1>
                <hr className="underline mt-2 mb-2"></hr>
                
                <div className="text-3xl md:text-4xl text-white h-40">
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter)=>{
                            typewriter.typeString("a recent computer science grad...")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("currently developing at osler :)...")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("a passionate gamer...")
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                        }}
                    />
                </div>
            </div>

            {/* {
                showModal ? (
                <div className="mt-10 bg-[#9A9CEA] flex justify-center items-center flex-col w-72 rounded-lg h-auto p-2">
                    <Image
                        src={Anya}
                        alt="excited anya"
                        width={300}
                        height={200}
                    />
                    <h1 className="text-xl text-white">
                        You spotted an easter egg! Here's an Anya to give you luck!
                    </h1>
                    <button className="my-5 w-auto px-8 h-10 text-white rounded-md shadow hover:shadow-lg font-semibold" onClick={()=> setShowModal(false)}>X</button>
                </div>
                
                ) : null
            } */}
        </div>


    )
}