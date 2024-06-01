import Header from '@/components/header/header'

const Layout = ({children}) => {
    return (
        <>
            <Header class='my-8' />
            <main>{children}</main>
            <footer className='mt-auto text-center py-8'>Footer</footer>
        </>
    )
}

export default Layout