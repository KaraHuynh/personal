export default function About(){
    return(
        <>
            <div className="about container rounded-lg bg-[#9A9CEA] w-90 ">
                <div className="about-title rounded-lg bg-[#A7A8DE]">
                    <h1 className="text-4xl text-white text-center py-1.5">about me</h1>
                </div>
                <h1 className="text-xl md:text-2xl text-white m-5">
                my name is Kara Huynh. i'm going into my third year of Computer Science at <strong>Toronto Metropolitan University</strong> (formerly known as Ryerson University). i really enjoy coding, singing and dancing in my free time. 
                ever since i was a kid, i was also drawn into using computers often as i fell in love with gaming. when i got to learn about coding, 
                <br></br><br></br>some languages i know are
                </h1>
                <div className="flex flex-col md:flex-row m-10">
                    <div className="flex-1">
                        <img 
                            className="hover:animate-bounce"
                            src="https://cdn.discordapp.com/attachments/878469526117810217/996471011132330106/unknown.png"
                            alt="Python"
                            width="200"    
                        />
                    </div>
                    <div className="flex-1">
                        <img 
                            className="hover:animate-bounce"
                            src="https://cdn.discordapp.com/attachments/878469526117810217/996875354033623181/unknown.png"
                            alt="HTML"
                            width="200"    
                        />
                    </div>
                    <div className="flex-1">
                        <img 
                            className="hover:animate-bounce"
                            src="https://cdn.discordapp.com/attachments/878469526117810217/996875393783046265/unknown.png"
                            alt="Java"
                            width="200"    
                        />
                    </div>
                    <div className="flex-1">
                        <img 
                            className="hover:animate-bounce"
                            src="https://cdn.discordapp.com/attachments/878469526117810217/996875455145721946/unknown.png"
                            alt="CSS"
                            width="200"    
                        />
                    </div>

                </div>
                <h1 className="text-xl md:text-2xl text-white text-center mt-5">check out some of my projects below!</h1>
            </div>
        
        </>
    )
}