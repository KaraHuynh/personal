export default function About(){
    return(
        <>
            <div id="about" className="about container rounded-lg bg-[#9A9CEA] w-90 ">
                <div className="rounded-lg bg-[#A7A8DE]">
                    <h1 className="text-3xl md:text-4xl text-white text-center py-1.5">about me</h1>
                </div>
                <h1 className="text-xl md:text-2xl text-white m-5">
                    my name is Kara Huynh. i'm in my fourth year of Computer Science at <strong>Toronto Metropolitan University</strong> (formerly known as Ryerson University). i really enjoy coding, singing and dancing in my free time. 
                    ever since i was a kid, i was also drawn into using computers often as i fell in love with gaming. some of my all time favorites are to the moon, maplestory, unpacking, valorant and phasmophobia.
                    coding became a passion in my life and i have a dream to become a software developer in the future. i am particularly interested in fields of frontend development, backend development and ui/ux design. 
                <br/><br/>some languages i know are
                </h1>
                {/*flex flex-col ml-8 md:flex-row m-auto md:m-10 */}
                <div className="language-images">
                    <div className="language flex-1">
                        <img
                            className="hover:scale-125 ease-in-out duration-150 transition-all"
                            src="https://cdn.discordapp.com/attachments/878469526117810217/1003045404906115143/python.png"
                            alt="Python"
                            width="170"    
                        />
                    </div>
                    <div className="language flex-1">
                        <img 
                            className="hover:scale-125 ease-in-out duration-150 transition-all"
                            src="https://cdn.discordapp.com/attachments/878469526117810217/1003045404302127194/java.png"
                            alt="Java"
                            width="170"    
                        />
                    </div>
                    <div className="language flex-1">
                        <img 
                            className="hover:scale-125 ease-in-out duration-150 transition-all"
                            src="https://cdn.discordapp.com/attachments/878469526117810217/1003045403974979645/c.png"
                            alt="C"
                            width="170"    
                        />
                    </div>
                    <div className="language flex-1">
                        <img 
                            className="hover:scale-125 ease-in-out duration-150 transition-all"
                            src="https://cdn.discordapp.com/attachments/878469526117810217/1003046109410766848/javascript_3.png"
                            alt="Javascript"
                            width="170"    
                        />
                    </div>
                    <div className="language flex-1">
                        <img 
                            className="hover:scale-125 ease-in-out duration-150 transition-all"
                            src="https://cdn.discordapp.com/attachments/878469526117810217/1003045404625076305/html.png"
                            alt="HTML"
                            width="170"    
                        />
                    </div>

                </div>
                <h1 className="text-xl md:text-2xl text-white m-5">
                    some web frameworks i've worked with before are
                </h1>
                {/*flex flex-col md:flex-row m-16 lg:ml-64 */}
                <div className="language-images">
                    <div className="language flex-1">
                        <img 
                            className="hover:scale-125 ease-in-out duration-150 transition-all"
                            src="https://cdn.discordapp.com/attachments/878469526117810217/1003045403190640640/react.png"
                            alt="React"
                            width="170"    
                        />
                    </div>
                    <div className="language flex-1">
                        <img 
                            className="hover:scale-125 ease-in-out duration-150 transition-all"
                            src="https://cdn.discordapp.com/attachments/878469526117810217/1003045402880266270/nodejs.png"
                            alt="Node"
                            width="170"    
                        />
                    </div>
                    <div className="language flex-1">
                        <img 
                            className="hover:scale-125 ease-in-out duration-150 transition-all"
                            src="https://cdn.discordapp.com/attachments/878469526117810217/1003045402163023892/vue.png"
                            alt="Vue"
                            width="170"    
                        />
                    </div>
                    {/* <div className=" language flex-1">
                        <img 
                            src="https://cdn.discordapp.com/attachments/878469526117810217/1003046945532674188/react_1.png"
                            alt="Next"
                            width="50"     
                        />
                    </div> */}

                </div>


                <h1 className="text-xl md:text-2xl text-white text-center m-5">check out some of my projects below!<br></br></h1>
            </div>
        
        </>
    )
}