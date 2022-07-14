export default function Contact(){
    return (
        <div className="contacts container rounded-lg bg-[#9A9CEA]">
            <div className="about-title rounded-lg bg-[#A7A8DE]">
                    <h1 className="text-4xl text-white text-center">contact me</h1>
                </div>
                <h1 className="text-xl md:text-2xl text-white text-center m-5">
                    if you have any suggestions, ideas or just want to talk, feel free to connect with me!
                </h1>

                <form id="contact-form" name="contact-form" encType="text/plain" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScZh51tscFeIOnYV_ucGtjZkwN68-du-htEkOGBkHPyR06kAA/formResponse" target="hidden_iframe" onSubmit="submitted=true;">
                    <div className="mb-3">
                        <input type="text" className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required></input>
                    </div>
                    <div className="mb-3">
                        <input type="email" id="email" className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required></input>
                    </div>
                    <div className="mb-3">
                        <input type="email" id="email" className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required></input>
                    </div>
                    <div className="buttonHolder mb-10">
                        <button type="submit" value="Submit">
                            <img src="https://cdn.discordapp.com/attachments/838956183850844190/997214985585434624/Paper_Plane.png" width="50"/>
                        </button>
                    </div>
                    
                </form>
            
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