import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Anya from "./images/anya.gif";
import profilePic from './images/kara.png'

export default function Welcome(){
    const [showModal, setShowModal] = useState(false);


    return(
        <div className="welcome flex flex-col md:flex-row">
            <div className="flex-1" onClick={()=> setShowModal(true)}>

                <div className='ml-10 md:float-right'>
                    {/* <Image
                        className="rounded-full" 
                        src={profilePic}
                        alt="Photo of Kara"
                    /> */}
                    <img
                        className="rounded-full ml-10 md:float-right"
                        src="https://cdn.discordapp.com/attachments/878469526117810217/996853106597953748/unknown.png"
                        alt="Photo of Kara"
                        width="420"
                    />
                </div>
            </div>
            <div className="flex-1 ml-10 mt-40 mr-5">
                <h1 className="text-4xl text-white">hi, my name is kara</h1>
                <hr className="underline mt-2 mb-2"></hr>
                
                <div className="text-4xl text-white h-40">
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter)=>{
                            typewriter.typeString("incoming third year computer science student...")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("an aspiring software developer...")
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