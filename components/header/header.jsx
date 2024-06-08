import Link from 'next/link'
import DarkModeToggle from '../darkModetoggle/darkModeToggle'
import useServerDarkMode from '@/hooks/use-server-dark-mode'
import { createClient } from '@/lib/supabase/server'
import Button from '../button/button'
import { CircleUser } from 'lucide-react'
import { KeyRound } from 'lucide-react'
import { variants, sizes } from '@/lib/variants'
import SignOutButton from '../signoutButton/signoutButton'
import Avatar from '../dashboard/settings/avatar/avatar'

const Header = async ({className}) => {
  const theme = useServerDarkMode()
  const supabase = createClient()
  const { data:{user}, error} = await supabase.auth.getUser()

  return (
    <header className={`flex justify-between items-center ${className}`}>
        <Link href={'/dashboard'} className='text-xl  hover:underline underline-offset-8 decoration-2'>
            Finance App
        </Link>
        <div className="flex items-center">
           <DarkModeToggle defaultMode= {theme}/>
            
           {user && <Link href="/dashboard/settings" className={`flex items-center space-x-1 ${variants['ghost']} ${sizes['sm']}`}>
          <Avatar />
          <span>{user?.user_metadata?.fullName ?? user?.email}</span> 
        </Link>}
        {user && <SignOutButton />}
        {!user && <Link href="/login" className={`${variants['ghost']} ${sizes['sm']}`}>
          <KeyRound className="w-6 h-6" />  
        </Link>}
        </div>

    </header>
  )
}

export default Header