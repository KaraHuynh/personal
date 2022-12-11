import ProjectCard from "./projectcard";
import Grid from '@mui/material/Grid';

export default function Projects(){
    return(
        <div className="projects grid grid-cols-1 lg:grid-cols-2">
            <ProjectCard 
                title={"her needs"} 
                imageLink={"https://cdn.discordapp.com/attachments/878469526117810217/996918940158677062/unknown.png"}
                altDes={"Her Needs Landing Page"}
                languages={"vue.js, firebase, google maps api"}    
                paragraph = {"her needs is a resource website with an interactive map to locate nearby washrooms with menstrual products and find the most affordable products to fight period poverty. this project was rewarded First Place Overall out of 27 projects at GryphHacks 2022."}
                github={"https://github.com/KaraHuynh/HerNeeds"}
                devpost={"https://devpost.com/software/herneeds"}
            />

            <ProjectCard 
                title={"blahajack"} 
                imageLink={"https://cdn.discordapp.com/attachments/878469526117810217/1051587631294730250/blahajack_1.png"}
                altDes={"Blahajack start"}
                languages={"python, pygame, photoshop"}    
                paragraph = {"blahajack is a IKEA shark-themed virtual card game inspired by Monopoly and Exploding Kittens. the goal is to rake up as much as money as you can and beat your opponents. this project was rewarded First Overall out of 65 projects at SharkHacks 2020."}
                github={"https://github.com/KaraHuynh/Blahajack"}
                devpost={"https://devpost.com/software/blahaj"}
            />

            <ProjectCard 
                title={"qrvsp"} 
                imageLink={"https://cdn.discordapp.com/attachments/878469526117810217/1051590652489633802/qrvsp.png"}
                altDes={"QRVSP Landing Page"}
                languages={"vue.js, firebase, openscreen api"}    
                paragraph = {"qrvsp is a website that is dedicated to making event planning more simple and efficient using openscreen's api! users can generate QR codes for connecting to WIFI, RVSP and organization purposes! this project was placed in the Top 10 Projects at RUHacks 2022."}
                github={"https://github.com/KaraHuynh/QRSVP"}
                devpost={"https://devpost.com/software/qrvsp"}
            />

            <ProjectCard 
                title={"purrfect"} 
                imageLink={"https://cdn.discordapp.com/attachments/878469526117810217/1051593328417845328/purrfect.png"}
                altDes={"Purrfect Landing Page"}
                languages={"html, css, javascript, photoshop"}    
                paragraph = {"purrfect is an user interactive website dedicated to cheering up people with cats submitted at XHacks 2021! explore the different pages of cat videos, cat meme generator or drawing your own cat! this was the first website i've ever created alongside my friends."}
                github={"https://github.com/KaraHuynh/xhacks"}
                devpost={"https://devpost.com/software/cats-xom0hn"}
            />
        </div>
        // <Grid container style={{ display: 'grid' }}>
        //     <Grid item>
        //         <ProjectCard 
        //             title={"her needs"} 
        //             imageLink={"https://cdn.discordapp.com/attachments/878469526117810217/996918940158677062/unknown.png"}
        //             altDes={"Her Needs Landing Page"}
        //             languages={"vue.js, firebase, google maps api"}    
        //             paragraph = {"her needs is a resource website with an interactive map to locate nearby washrooms with menstrual products and find the most affordable products! this project was made to fight period poverty. this project was rewarded First Place Overall out of 27 projects at GryphHacks 2022."}
        //             github={"https://github.com/KaraHuynh/HerNeeds"}
        //             devpost={"https://devpost.com/software/herneeds"}
        //         />
        //     </Grid>
        //     <Grid item>
        //         <ProjectCard 
        //             title={"blahajack"} 
        //             imageLink={"https://cdn.discordapp.com/attachments/878469526117810217/996955960365023292/b.png"}
        //             altDes={"Blahajack start"}
        //             languages={"python, pygame, photoshop"}    
        //             paragraph = {"blahajack is a IKEA shark-themed virtual card game inspired by Monopoly and Exploding Kittens. the goal is to rake up as much as money as you can and beat your opponents. this project was rewarded First Overall out of 65 projects at SharkHacks 2020."}
        //             github={"https://github.com/KaraHuynh/Blahajack"}
        //             devpost={"https://devpost.com/software/blahaj"}
        //         />
        //     </Grid>
        //     <Grid item>
        //         <ProjectCard 
        //             title={"qrvsp"} 
        //             imageLink={"https://cdn.discordapp.com/attachments/878469526117810217/996956504865378355/unknown_2.png"}
        //             altDes={"QRVSP Landing Page"}
        //             languages={"vue.js, firebase, openscreen api"}    
        //             paragraph = {" QRVSP is a website that is dedicated to making event planning more simple and efficient! users can generate QR codes for connecting to WIFI, RVSP and organization purposes! this project was placed in the Top 10 Projects at RUHacks 2022. "}
        //             github={"https://github.com/KaraHuynh/QRSVP"}
        //             devpost={"https://devpost.com/software/qrvsp"}
        //         />
        //     </Grid>
        // </Grid>
    )
}