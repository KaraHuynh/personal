import ProjectCard from "./projectcard";
import Grid from '@mui/material/Grid';
import '@fortawesome/fontawesome-svg-core/styles.css';


export default function Projects(){
    return(
        <div className="projects grid grid-cols-1 lg:grid-cols-2">
            <ProjectCard 
                title={"blaze buddy"} 
                imageLink={"/images/blazebuddy.png"}
                altDes={"Blaze Buddy Landing Page"}
                languages={"python, cohere api, react, flask, figma"}    
                paragraph = {"Blaze Buddy's goal is to be a one-pit stop for users on staying informed about current fire-related incidents, statistics, and safety protocols. This project was rewarded Best Use of Cohere API - 2nd Place out of 47 projects at ElleHacks 2023."}
                github={"https://github.com/KaraHuynh/Blaze-Buddy"}
                devpost={"https://devpost.com/software/fireresponse-chatbot"}
            />
            
            <ProjectCard 
                title={"her needs"} 
                imageLink={"/images/herneeds.png"}
                altDes={"Her Needs Landing Page"}
                languages={"vue.js, firebase, google maps api"}    
                paragraph = {"Her Needs is a resource website with an interactive map to locate nearby washrooms with menstrual products and find the most affordable products to fight period poverty. This project was rewarded First Place Overall out of 27 projects at GryphHacks 2022."}
                github={"https://github.com/KaraHuynh/HerNeeds"}
                devpost={"https://devpost.com/software/herneeds"}
            />

            <ProjectCard 
                title={"blahajack"} 
                imageLink={"/images/blahajack.png"}
                altDes={"Blahajack start"}
                languages={"python, pygame, photoshop"}    
                paragraph = {"Blahajack is a IKEA shark-themed virtual card game inspired by Monopoly and Exploding Kittens. The goal is to rake up as much as money as you can and beat your opponents. This project was rewarded First Overall out of 65 projects at SharkHacks 2020."}
                github={"https://github.com/KaraHuynh/Blahajack"}
                devpost={"https://devpost.com/software/blahaj"}
            />

            <ProjectCard 
                title={"qrsvp"} 
                imageLink={"/images/qrvsp.png"}
                altDes={"QRVSP Landing Page"}
                languages={"vue.js, firebase, openscreen api"}    
                paragraph = {"QRSVP is a website that is dedicated to making event planning more simple and efficient using openscreen's api! Users can generate QR codes for connecting to WIFI, RSVP and organization purposes! This project was placed in the Top 10 Projects at RUHacks 2022."}
                github={"https://github.com/KaraHuynh/QRSVP"}
                devpost={"https://devpost.com/software/qrvsp"}
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