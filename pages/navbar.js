export default function navbar(){
    return (
        <nav className="bg-[#9A9CEA]">
            <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                <div className="flex justify-center">
                    <ul className="flex flex-row mt-0 mr-6 space-x-16 text-lg font-small">
                        <li>
                            <a href="#" className="text-white hover:underline" aria-current="page">home</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:underline">about</a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1tCaRr8nhw4Yh4q1ohjQXxwaAhpb_J2Yt/view" className="text-white hover:underline">resume</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:underline">contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
  }
  