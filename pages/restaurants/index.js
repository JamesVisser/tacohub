import Link from 'next/link'
import styles from '../../styles/Home.module.css'



export default function Home() {
    
    const restaurants = [
        {name:"Abuela's Southern Favorites"},
        {name:"Westover Taco"},
        {name:"Eastern Tocomania"},
        {name:"North Point Taco"},
        
    ]
    return (
        <div>
        
        <header className={styles.listhead}>
                                <h3>The Taco Hub restaurants are located throughout 
                                the park. Menu items are the same simply purchase 
                                from the location closest to you!</h3>
                            </header>
        
            {restaurants.map( item =>{ 
                    // eslint-disable-next-line react/jsx-key
                    return  <>                 
                            
                    
                            <div className={styles.list}>                    
                                <Link as={"/restaurants/"+item.name} href="/menu">
                                <a>{item.name}</a>
                                </Link>
                            </div>
                            </>
                } )}
                
                
            
        </div>
    )


}