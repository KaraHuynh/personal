export default function Projects(){
    return(
        <div className="projects grid grid-cols-1 md:grid-cols-2">
            <div className="project-box container rounded-lg bg-[#9A9CEA] w-20 h-fit">
                <div className="about-title rounded-lg bg-[#A7A8DE]">
                    <h1 className="text-2xl text-white text-center py-1.5">her needs</h1>
                </div>
                <img 
                    className="rounded-lg content-center"
                    src="https://cdn.discordapp.com/attachments/878469526117810217/996918940158677062/unknown.png"
                    alt="Her Needs Landing Page"
                    width="700"
                />
                <h1 className="text-lg text-white text-center py-1.5">
                    her needs is a resource website with interactive map locating washrooms with menstrual products and finding the most affordable products! this project was made to tackle the problem of period poverty which many women around the world face. this project was rewarded First Place Overall out of 27 projects at GryphHacks 2022.
                </h1>
            </div>



            <div className="project-box container rounded-lg bg-[#9A9CEA] w-20 h-80">
                <div className="about-title rounded-lg bg-[#A7A8DE]">
                    <h1 className="text-2xl text-white text-center py-1.5">blahajack</h1>
                </div>
            </div>
            <div className="project-box container rounded-lg bg-[#9A9CEA] w-20 h-80">
                <div className="about-title rounded-lg bg-[#A7A8DE]">
                    <h1 className="text-2xl text-white text-center py-1.5">qrvsp</h1>
                </div>
            </div>
            <div className="project-box container rounded-lg bg-[#9A9CEA] w-20 h-80">
                <div className="about-title rounded-lg bg-[#A7A8DE]">
                    <h1 className="text-2xl text-white text-center py-1.5">purrrfect</h1>
                </div>
            </div>
        </div>
    )
}