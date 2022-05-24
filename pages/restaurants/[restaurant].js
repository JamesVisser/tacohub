import styles from '../../styles/Home.module.css'
import{useRouter} from 'next/router'
import { Link } from 'next/link'


export default function Restaurant() {
    const router = useRouter()
    return (
        <>
        
        <main className={styles.main}>
        <h1 className={styles.title}>
          The <Link href="/restaurants">TACO</Link> Hub
        </h1>
        <h1>Presents</h1> 
        <h1 className={styles.list}>{router.query.restaurant}</h1>
        </main>
        
        </>
    )
    
}