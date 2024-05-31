import Link from 'next/link'
import DarkModeToggle from '../darkModetoggle/darkModeToggle'
import useServerDarkMode from '@/hooks/use-server-dark-mode'

const Header = ({className}) => {
  const theme = useServerDarkMode()
  return (
    <header className={`flex justify-between items-center ${className}`}>
        <Link href={'/dashboard'} className='text-xl  hover:underline underline-offset-8 decoration-2'>
            Finance App
        </Link>
        <div className="flex items-center space-x-4">
           <DarkModeToggle defaultMode= {theme}/>
            
            <div>User Dropdown</div>
        </div>

    </header>
  )
}

export default Header