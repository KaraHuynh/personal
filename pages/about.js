export default function About(){
    return(
        <>
            <div id="about" className="about container rounded-lg bg-[#9A9CEA] w-90 ">
                <div className="about-title rounded-lg bg-[#A7A8DE]">
                    <h1 className="text-4xl text-white text-center py-1.5">about me</h1>
                </div>
                <h1 className="text-xl md:text-2xl text-white m-5">
                    my name is Kara Huynh. i'm going into my third year of Computer Science at <strong>Toronto Metropolitan University</strong> (formerly known as Ryerson University). i really enjoy coding, singing and dancing in my free time. 
                    ever since i was a kid, i was also drawn into using computers often as i fell in love with gaming. some of my all time favorites are to the moon, maplestory, unpacking, valorant and phasmophobia.
                    coding became a passion in my life and i have a dream to become a software developer in the future.
                <br/><br/>some languages i know are
                </h1>
                <div className="flex flex-col ml-12 md:flex-row md:m-10">
                    <div className="flex-1">
                        <img 
                            className="hover:-translate-y-6 transition-all"
                            src="https://cdn.discordapp.com/attachments/878469526117810217/996471011132330106/unknown.png"
                            alt="Python"
                            width="170"    
                        />
                    </div>
                    <div className="flex-1">
                        <img 
                            className="hover:-translate-y-6 transition-all"
                            src="https://cdn.discordapp.com/attachments/878469526117810217/996875354033623181/unknown.png"
                            alt="HTML"
                            width="170"    
                        />
                    </div>
                    <div className="flex-1">
                        <img 
                            className="hover:-translate-y-6 transition-all"
                            src="https://cdn.discordapp.com/attachments/878469526117810217/996875393783046265/unknown.png"
                            alt="Java"
                            width="170"    
                        />
                    </div>
                    <div className="flex-1">
                        <img 
                            className="hover:-translate-y-6 transition-all"
                            src="https://cdn.discordapp.com/attachments/878469526117810217/1001597603236036648/Javascript_1.png"
                            alt="Javascript"
                            width="170"    
                        />
                    </div>
                    <div className="flex-1">
                        <img 
                            className="hover:-translate-y-6 transition-all"
                            src="https://cdn.discordapp.com/attachments/982318657566814208/1001602889275424778/c-.png"
                            alt="C"
                            width="170"    
                        />
                    </div>

                </div>
                <h1 className="text-xl md:text-2xl text-white m-5">
                    some web frameworks i've worked with before are
                </h1>

                <div className="flex flex-col md:flex-row m-12 md:ml-32">
                    <div className="flex-1">
                        <img 
                            className="hover:-translate-y-6 transition-all"
                            src="https://cdn.discordapp.com/attachments/878469526117810217/1001594514361819206/Group_2.png"
                            alt="React"
                            width="170"    
                        />
                    </div>
                    <div className="flex-1">
                        <img 
                            className="hover:-translate-y-6 transition-all"
                            src="https://cdn.discordapp.com/attachments/878469526117810217/1001593054949539900/Component_4.png"
                            alt="Node"
                            width="170"    
                        />
                    </div>
                    <div className="flex-1">
                        <img 
                            className="hover:-translate-y-6 transition-all"
                            src="https://cdn.discordapp.com/attachments/878469526117810217/1001598227923091476/Component_4_1.png"
                            alt="Vue"
                            width="170"    
                        />
                    </div>
                    <div className="flex-1">
                        <img 
                            className="hover:-translate-y-6 transition-all"
                            src="https://cdn.discordapp.com/attachments/982318657566814208/1001603511995351141/Component_4_2.png"
                            alt="Next"
                            width="170"    
                        />
                    </div>

                </div>


                <h1 className="text-xl md:text-2xl text-white text-center mt-5">check out some of my projects below!<br></br></h1>
            </div>
        
        </>
    )
}