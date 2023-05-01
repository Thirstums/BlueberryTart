import { Button } from "../components/Button"
import Image from "next/image";

function HomePage() {
    return(
        <main>
             
                <div >Welcome to BlueberryTart </div> 
                <div>

                <Image
                src="/Thirsty_BlueberryTart.png"
                 alt="Navbar image"
                 width={500}
                 height={500}
        
                />
                </div>
                
      
        </main>
       

    ) 
  }
  
  export default HomePage