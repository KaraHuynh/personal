import Image from 'next/image'
export default function Welcome(){
    const things = ["incoming third year computer science student...", "an aspiring software developer...", "a passionate gamer..."];
    return(
        <div className="mt-20 flex flex-col md:flex-row">
            <div className="flex-1">
                <img
                    className="rounded-full ml-10 md:float-right"
                    src="https://cdn.discordapp.com/attachments/878469526117810217/996853106597953748/unknown.png"
                    alt="Photo of Kara"
                    width="420"
                />
            </div>
            <div className="flex-1 ml-10 mt-40">
                <h1 className="text-5xl text-white">hi, my name is kara</h1>
                <hr className="underline mt-2 mb-2"></hr>
                {}
            </div>

        </div>


    )
}