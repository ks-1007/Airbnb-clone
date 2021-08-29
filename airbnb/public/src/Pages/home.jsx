import { Live } from "../Components/home/Anywhere";
import { Discover } from "../Components/home/Discover";
import { Footer } from "../Components/home/Footer";
import { Hosting } from "../Components/home/hosting";
import { Nearby } from "../Components/home/Nearby";
import { Top } from "../Components/home/Top";


export function Home() {
    return (
        <div>
            <Top />
            <Nearby />
            <Live />
            <Hosting />
            <Discover />
            <Footer/>
        </div>
    )
}