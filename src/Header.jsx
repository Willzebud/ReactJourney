import { Button } from "./Button";
import { ReactSvg } from "./logoReact"
import {ShoppingBasket, User} from 'lucide-react';


export const Header = () => {
    return(
        <header className="flex w-full items-center py-4">
            <h1 className="inline-flex items-center gap-2 text-lg font-bold">
                <ReactSvg size={32}/>
                <span>ReactJourney</span> 
            </h1>
            <div className="ml-auto gap-2 flex">
                <Button variant="ghost">
                    <ShoppingBasket size={24}/>
                </Button>
                <Button variant="ghost">
                    <User size={24}/>
                </Button>
            </div>
        </header>
    )
}