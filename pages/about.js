import Image from 'next/image';


export default function About(){
    return(
        <>
            <div id="about" className="about container rounded-lg bg-[#9A9CEA] w-90 ">
                <div className="rounded-lg bg-[#A7A8DE]">
                    <h1 className="text-3xl md:text-4xl text-white text-center py-1.5">about me</h1>
                </div>
                <h1 className="text-xl md:text-2xl text-white m-5">
                    My name is Kara Huynh, a recent Computer Science grad from Toronto Metropolitan University. 
                    I am currently working at <strong>Osler, Hoskin & Harcourt LLP</strong> as a <strong>Software Engineer</strong>. 
                    I am particularly interested in fields of fullstack development and data analysis.     
                    My passion for tech started early through playing games such To The Moon, Maplestory, Unpacking, Valorant and Phasmophobia. 
                    These games played a significant role in shaping my curiosity about how software works. 
                    Over time, this curiosity evolved into a passion for coding and software development.
                <br/><br/>Some languages I know are
                </h1>
                {/*flex flex-col ml-8 md:flex-row m-auto md:m-10 */}
                <div className="language-images">
                    <div className="language flex-1 hover:scale-125 ease-in-out duration-150 transition-all">
                        <Image
                            src="/images/python.png"
                            alt="Python"
                            width="170"
                            height="170"    
                        />
                    </div>
                    <div className="language flex-1 hover:scale-125 ease-in-out duration-150 transition-all">
                        <Image
                            src="/images/java.png"
                            alt="Java"
                            width="170" 
                            height="170"   
                        />
                    </div>
                    <div className="language flex-1 hover:scale-125 ease-in-out duration-150 transition-all">
                        <Image 
                            src="/images/c.png"
                            alt="C"
                            width="170"
                            height="170"    
                        />
                    </div>
                    <div className="language flex-1 hover:scale-125 ease-in-out duration-150 transition-all">
                        <Image 
                            src="/images/csharp.png"
                            alt="C#"
                            width="170"
                            height="170"    
                        />
                    </div>
                    <div className="language flex-1 hover:scale-125 ease-in-out duration-150 transition-all">
                        <Image 
                            src="/images/sql.png"
                            alt="HTML"
                            width="170"
                            height="170"    
                        />
                    </div>

                </div>
                <h1 className="text-xl md:text-2xl text-white m-5">
                    Some web frameworks I've worked with before are
                </h1>
                {/*flex flex-col md:flex-row m-16 lg:ml-64 */}
                <div className="language-images">
                    <div className="language flex-1 hover:scale-125 ease-in-out duration-150 transition-all">
                        <Image 
                            src="/images/react.png"
                            alt="React"
                            width="170"
                            height="170"    
                        />
                    </div>
                    <div className="language flex-1 hover:scale-125 ease-in-out duration-150 transition-all">
                        <Image 
                            src="/images/nodejs.png"
                            alt="Node"
                            width="170" 
                            height="170"   
                        />
                    </div>
                    <div className="language flex-1 hover:scale-125 ease-in-out duration-150 transition-all">
                        <Image 
                            src="/images/vue.png"
                            alt="Vue"
                            width="170"  
                            height="170"  
                        />
                    </div>
                    {/* <div className=" language flex-1">
                        <Image 
                            src="https://cdn.discordapp.com/attachments/878469526117810217/1003046945532674188/react_1.png"
                            alt="Next"
                            width="50"     
                        />
                    </div> */}

                </div>


                <h1 className="text-xl md:text-2xl text-white text-center m-5">Check out some of my projects below!<br></br></h1>
            </div>
        
        </>
    )
}