export default function Contact(){
    return (
        <div className="contacts container rounded-lg bg-[#9A9CEA] w-40 ">
            <div className="about-title rounded-lg bg-[#A7A8DE]">
                    <h1 className="text-4xl text-white text-center py-1.5">contact me</h1>
                </div>
                <h1 className="text-xl md:text-2xl text-white text-center m-5">
                    if you have any suggestions, ideas or just want to talk, feel free to connect with me!
                </h1>

                <div className="contact-icons flex flex-col md:flex-row justify-center">
                    <a href="https://github.com/KaraHuynh">
                        <img 
                            src="https://cdn.discordapp.com/attachments/878469526117810217/996945944153174066/github.png"
                            alt="github"
                            width="60"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/kara-huynh/">
                        <img 
                            src="https://cdn.discordapp.com/attachments/878469526117810217/996946006610542612/linkedin.png"
                            alt="linkedin"
                            width="60"
                        />
                    </a>
                    <a href="https://devpost.com/kara-huynh?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">
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