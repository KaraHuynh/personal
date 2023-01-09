import Link from 'next/link'

export default function navbar(){
    return (
        <nav className="bg-[#9A9CEA]">
            <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                <div className="flex justify-center">
                    <ul className="ml-2 flex flex-row mt-0 md:mr-6 space-x-10 md:space-x-16 text-md md:text-xl">
                        <li>
                            <Link href='/'>
                                <a className="hover-effect text-white" aria-current="page">home</a>
                            </Link>
                            
                        </li>
                        <li>
                            <Link href='#about'>
                                <a className="hover-effect text-white">about</a>
                            </Link>
                            
                        </li>
                        <li>
                            <Link href="https://drive.google.com/file/d/13lR9CEFL-ms6bkprFC_4qTmyAjWs79Hx/view?usp=sharing">
                                <a className="hover-effect text-white" target="_blank">resume</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact">
                                <a className="hover-effect text-white">contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
  }
  