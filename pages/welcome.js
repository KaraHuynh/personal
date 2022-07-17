import Image from 'next/image'
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

export default function Welcome(){

    return(
        <div className="welcome flex flex-col md:flex-row">
            <div className="flex-1">
                <img
                    className="rounded-full ml-10 md:float-right hover:cursor-zoom-in"
                    src="https://cdn.discordapp.com/attachments/878469526117810217/996853106597953748/unknown.png"
                    alt="Photo of Kara"
                    width="420"
                />
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

        </div>


    )
}