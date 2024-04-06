import styles from "../styles/Layout.module.scss"
import { Navbar } from '.';


const Layout = ({children}) => {

return (
<div className={`${styles.layout} `}>
        <header>
                <Navbar />
        </header>
        <main className={styles.main_container} >
                {children}
        </main>
</div>
)
}

export default Layout