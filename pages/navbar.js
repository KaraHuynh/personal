import Link from 'next/link'

export default function navbar(){
    return (
        <nav className="bg-[#9A9CEA]">
            <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                <div className="flex justify-center">
                    <ul className="ml-4 flex flex-row mt-0 md:mr-6 space-x-10 md:space-x-16 text-lg md:text-xl">
                        <li>
                            <Link href='/'>
                                <a className="text-white hover:underline" aria-current="page">home</a>
                            </Link>
                            
                        </li>
                        <li>
                            <Link href='#about'>
                                <a className="text-white hover:underline">about</a>
                            </Link>
                            
                        </li>
                        <li>
                            <Link href="https://drive.google.com/file/d/1-f3GpoY5ERVFpB8-bEvCRF13MuWEWMzT/view?usp=sharing">
                                <a className="text-white hover:underline" target="_blank">resume</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact">
                                <a className="text-white hover:underline">contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
  }
  