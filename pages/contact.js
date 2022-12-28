import { useState } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev } from '@fortawesome/free-brands-svg-icons';

export default function Contact(){
    async function handleSubmit(e){
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field =>{
            if ( !field.name ) return;
            formData[field.name] = field.value;
        });
        fetch('/api/form', {
            method: 'post',
            body: JSON.stringify(formData)
        })
        console.log(formData);
    }
    return (
        <div id="contact" className="contacts container rounded-lg bg-[#9A9CEA]">
            <div className="h-10 rounded-lg bg-[#A7A8DE]">
                    <h1 className="text-3xl md:text-4xl text-white text-center m-2">contact me</h1>
                </div>
                <h1 className="text-lg md:text-2xl text-white text-center m-5">
                    if you have any suggestions, ideas or just want to talk, feel free to connect with me!
                    <br></br>you can also shoot me an email at <a className="hover-effect font-bold" href="mailto:kara.huynh@ryerson.ca">kara.huynh@ryerson.ca.</a>
                </h1>
                
                {/* <div className="contact-form" align="center">
                    <form className="m-5" method="post" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input 
                                type="text" 
                                name="name"
                                className="bg-[#A7A8DE] text-white placeholder-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block p-2.5 md:w-96" 
                                placeholder="name" 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <input 
                                type="email" 
                                name="email"
                                className="bg-[#A7A8DE] text-white placeholder-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block p-2.5 md:w-96" 
                                placeholder="email" 
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <textarea 
                                type="text" 
                                name="message"
                                rows="7" 
                                cols="50" 
                                className="bg-[#A7A8DE] text-white placeholder-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block p-2.5 md:w-96" 
                                placeholder="message" 
                                required
                            />
                        </div>
                        <div className="buttonHolder mb-10">
                            <button type="submit" value="Submit">
                                <img src="https://cdn.discordapp.com/attachments/838956183850844190/997214985585434624/Paper_Plane.png" width="50"/>
                            </button>
                        </div>
                        
                    </form>
                </div> */}
                
            
                <div className="contact-icons flex flex-row justify-center pb-10">
                    <a href="https://github.com/KaraHuynh" className="hover:opacity-75 transition-all mr-3">
                        <img 
                            src="https://cdn.discordapp.com/attachments/878469526117810217/996945944153174066/github.png"
                            alt="github"
                            width="60"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/kara-huynh/" className="hover:opacity-75 transition-all">
                        <img 
                            src="https://cdn.discordapp.com/attachments/878469526117810217/996946006610542612/linkedin.png"
                            alt="linkedin"
                            width="60"
                        />
                    </a>
                    <a href="https://devpost.com/kara-huynh?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" className="hover:opacity-75 transition-all ml-3">
                        <FontAwesomeIcon className="devpost text-white" icon={faDev}/>
                    </a>

                </div>
                
        </div>
    )
}