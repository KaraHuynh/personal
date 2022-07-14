export default function Projects(){
    return(
        <div className="projects grid grid-cols-1 md:grid-cols-3">
            <div className="project-box container rounded-lg bg-[#9A9CEA] w-20 h-fit">
                <div className="about-title rounded-lg bg-[#A7A8DE]">
                    <h1 className="text-4xl text-white text-center py-1.5">her needs</h1>
                </div>
                <img 
                    className="rounded-lg content-center"
                    src="https://cdn.discordapp.com/attachments/878469526117810217/996918940158677062/unknown.png"
                    alt="Her Needs Landing Page"
                    width="700"
                />
                <h1 className="text-lg text-white text-center py-1.5 m-3">
                    her needs is a resource website with interactive map locating washrooms with menstrual products and finding the most affordable products! this project was made to tackle the problem of period poverty which many women around the world face. this project was rewarded <strong>First Place Overall</strong> out of 27 projects at <strong>GryphHacks 2022.</strong>
                </h1>
                <div className="project-icons flex float-right m-5">
                    <a href="https://github.com/KaraHuynh/HerNeeds" className="hover:opacity-75 transition-all">
                        <img 
                            src="https://cdn.discordapp.com/attachments/878469526117810217/996945944153174066/github.png"
                            alt="github"
                            width="60"
                        />
                    </a>
                    <a href="https://devpost.com/software/herneeds" className="hover:opacity-75 transition-all">
                        <img 
                            src="https://cdn.discordapp.com/attachments/878469526117810217/996945888557662238/web.png"
                            alt="devpost"
                            width="60"
                        />
                    </a>
                </div>

            </div>



            <div className="project-box container rounded-lg bg-[#9A9CEA] w-20 h-fit">
                <div className="about-title rounded-lg bg-[#A7A8DE]">
                    <h1 className="text-4xl text-white text-center py-1.5">blahajack</h1>
                </div>
                <img 
                    className="rounded-lg content-center"
                    src="https://cdn.discordapp.com/attachments/878469526117810217/996955960365023292/b.png"
                    alt="Blahajack start"
                    width="550"
                />
                <h1 className="text-lg text-white text-center py-1.5 m-3">
                blahajack is a IKEA shark-themed virtual card game inspired by Monopoly and
Exploding Kittens. the goal is to rake up as much as money as you can and beat
your opponents. this project was rewarded <strong>First Overall</strong> out of 65 projects at <strong>SharkHacks 2020</strong>.
                </h1>
                <div className="project-icons flex float-right m-5">
                    <a href="https://github.com/KaraHuynh/Blahajack" className="hover:opacity-75 transition-all">
                        <img 
                            src="https://cdn.discordapp.com/attachments/878469526117810217/996945944153174066/github.png"
                            alt="github"
                            width="60"
                        />
                    </a>
                    <a href="https://devpost.com/software/blahaj" className="hover:opacity-75 transition-all">
                        <img 
                            src="https://cdn.discordapp.com/attachments/878469526117810217/996945888557662238/web.png"
                            alt="devpost"
                            width="60"
                        />
                    </a>
                </div>
            </div>


            <div className="project-box container rounded-lg bg-[#9A9CEA] w-20 h-fit">
                <div className="about-title rounded-lg bg-[#A7A8DE]">
                    <h1 className="text-4xl text-white text-center py-1.5">qrvsp</h1>
                </div>
                <img 
                    className="rounded-lg content-center"
                    src="https://cdn.discordapp.com/attachments/878469526117810217/996956504865378355/unknown_2.png"
                    alt="Blahajack start"
                    width="600"
                />
                <h1 className="text-lg text-white text-center py-1.5 m-3">
                QRVSP is a website that is dedicated to making event planning more simple and efficient! users can generate QR codes for connecting to WIFI, RVSP and organization purposes! this project was placed in the Top 10 Projects at RUHacks 2022. 
                </h1>
                <div className="project-icons flex float-right m-5">
                    <a href="https://github.com/KaraHuynh/Blahajack" className="hover:opacity-75 transition-all">
                        <img 
                            src="https://cdn.discordapp.com/attachments/878469526117810217/996945944153174066/github.png"
                            alt="github"
                            width="60"
                            height="40"
                        />
                    </a>
                    <a href="https://devpost.com/software/blahaj" className="hover:opacity-75 transition-all">
                        <img 
                            src="https://cdn.discordapp.com/attachments/878469526117810217/996945888557662238/web.png"
                            alt="devpost"
                            width="60"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}