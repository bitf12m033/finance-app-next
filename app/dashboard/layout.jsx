import Header from '@/components/header/header'

const Layout = ({children}) => {
    return (
        <>
            <Header class='my-8' />
            <main>{children}</main>
            <footer>Footer</footer>
        </>
    )
}

export default Layout