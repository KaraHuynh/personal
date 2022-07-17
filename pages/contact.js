import { useState } from 'react';

export default function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
        name,
        email,
        message,
        };
        fetch('/api/form', {
            method: 'post',
            body: JSON.stringify(data),
        });
        alert("message sent");
    };
    return (
        <div className="contacts container rounded-lg bg-[#9A9CEA]">
            <div className="about-title rounded-lg bg-[#A7A8DE]">
                    <h1 className="text-4xl text-white text-center">contact me</h1>
                </div>
                <h1 className="text-xl md:text-2xl text-white text-center m-5">
                    if you have any suggestions, ideas or just want to talk, feel free to connect with me!
                </h1>
                
                <div className="contact-form" align="center">
                    <form className="m-5" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="text" className="bg-[#A7A8DE] text-white placeholder-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block p-2.5 md:w-80" placeholder="name" onChange={e => setName(e.target.value)} required></input>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="bg-[#A7A8DE] text-white placeholder-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block p-2.5 md:w-80" placeholder="email" onChange={e => setEmail(e.target.value)} required></input>
                        </div>
                        <div className="mb-3">
                            <textarea type="text" rows="4" cols="50" className="bg-[#A7A8DE] text-white placeholder-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block p-2.5 md:w-80" onChange={e => setMessage(e.target.value)} placeholder="message" required></textarea>
                        </div>
                        <div className="buttonHolder mb-10">
                            <button type="submit" value="Submit">
                                <img src="https://cdn.discordapp.com/attachments/838956183850844190/997214985585434624/Paper_Plane.png" width="50"/>
                            </button>
                        </div>
                        
                    </form>
                </div>
                
            
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
                        <img 
                            src="https://cdn.discordapp.com/attachments/878469526117810217/996945888557662238/web.png"
                            alt="devpost"
                            width="60"
                        />
                    </a>

                </div>
                
        </div>
    )
}