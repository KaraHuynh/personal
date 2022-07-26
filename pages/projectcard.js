import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false

export default function Projectcard({ title, imageLink, altDes, languages, paragraph, github, devpost }){
    return(
        <div className="project-box container rounded-lg bg-[#9A9CEA] w-20 h-fit">
                <div className="about-title rounded-lg bg-[#A7A8DE]">
                    <h1 className="text-4xl text-white text-center py-1.5">{title}</h1>
                </div>
                <img
                    className="project-image rounded-lg content-center md:h-64"
                    src={imageLink}
                    alt={altDes}
                    width="700"
                />
                <div className="project-paragraph">
                    <h1 className="text-2xl font-bold text-white text-center m-3">{languages}</h1>
                    <h1 className="text-lg text-white text-center py-1.5 m-3">
                        {paragraph}
                    </h1>
                    <div className="project-icons flex float-right m-5">
                        <a href={github} className="hover:opacity-75 transition-all">
                            <img 
                                src="https://cdn.discordapp.com/attachments/878469526117810217/996945944153174066/github.png"
                                alt="github"
                                width="60"
                            />
                        </a>
                        <a href={devpost} className="hover:opacity-75 transition-all">
                            <FontAwesomeIcon className="devpost text-white" icon={faDev}/>
                        </a>
                    </div>

                </div>
            </div>
    )
}