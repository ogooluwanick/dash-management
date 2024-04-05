import { useContext } from 'react'

import styles from "../styles/Layout.module.scss"
import { Store } from '../context/Store';
import { Navbar } from '.';


const Layout = ({children}) => {

        const { setSideToggle ,sideToggle, screen } = useContext(Store)


return (
<div className={styles.layout}>
        <header>
                <Navbar />
        </header>
        <main className={styles.main_container} style={{margin:`${(sideToggle && screen >901 && session?.user) ? "85px auto 0 240px" : "0 auto 0 auto"}`}}>
                {children}
        </main>
</div>
)
}

export default Layout