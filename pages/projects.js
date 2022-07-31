import Projectcard from "./projectcard";

export default function Projects(){
    return(
        <div className="projects grid grid-cols-1 lg:grid-cols-3">
            <Projectcard 
                title={"her needs"} 
                imageLink={"https://cdn.discordapp.com/attachments/878469526117810217/996918940158677062/unknown.png"}
                altDes={"Her Needs Landing Page"}
                languages={"vue.js, firebase, google maps api"}    
                paragraph = {"her needs is a resource website with an interactive map to locate nearby washrooms with menstrual products and find the most affordable products! this project was made to fight period poverty. this project was rewarded First Place Overall out of 27 projects at GryphHacks 2022."}
                github={"https://github.com/KaraHuynh/HerNeeds"}
                devpost={"https://devpost.com/software/herneeds"}
            />

            <Projectcard 
                title={"blahajack"} 
                imageLink={"https://cdn.discordapp.com/attachments/878469526117810217/996955960365023292/b.png"}
                altDes={"Blahajack start"}
                languages={"python, pygame, photoshop"}    
                paragraph = {"blahajack is a IKEA shark-themed virtual card game inspired by Monopoly and Exploding Kittens. the goal is to rake up as much as money as you can and beat your opponents. this project was rewarded First Overall out of 65 projects at SharkHacks 2020."}
                github={"https://github.com/KaraHuynh/Blahajack"}
                devpost={"https://devpost.com/software/blahaj"}
            />

            <Projectcard 
                title={"qrvsp"} 
                imageLink={"https://cdn.discordapp.com/attachments/878469526117810217/996956504865378355/unknown_2.png"}
                altDes={"QRVSP Landing Page"}
                languages={"vue.js, firebase, openscreen api"}    
                paragraph = {" QRVSP is a website that is dedicated to making event planning more simple and efficient! users can generate QR codes for connecting to WIFI, RVSP and organization purposes! this project was placed in the Top 10 Projects at RUHacks 2022. "}
                github={"https://github.com/KaraHuynh/QRSVP"}
                devpost={"https://devpost.com/software/qrvsp"}
            />
        </div>
    )
}