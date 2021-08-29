import styles from './home.module.css'
import { BiGlobe } from 'react-icons/bi';
import { ImFacebook } from 'react-icons/im';
import { AiOutlineTwitter } from 'react-icons/ai';
import { ImInstagram } from 'react-icons/im';

const about = ["How Airbnb works", "Newsroom", "Airbnb 2021", "Investors", "Airbnb Plus",
    "Airbnb Luxe", "HotelTonight", "Airbnb for Work", "Made possible by Hosts", "Careers", "Founders Letter"];
const community=["Diversity & Belonging","Accessibility","Airbnb Associates","Frontline Stays","Guest Referrals","Airbnb.org"]    

const host=["Host your home","Host an Online Experience","Host an Experience","Responsible hosting","Resource Centre","Community Centre"]
const support=["Our COVID-19 Response","Help Centre","Cancellation options","Neighbourhood Support","Trust & Safety"]

function Section({ title, list }) {
    return (
        <div className={styles.list}>
            <h4>{title}</h4>
            {
                list.map((ele)=>{
                    return <p>{ele}</p>
                })
            }
        </div>
    )
}    
export function Footer() {
    return (
        <div>
            <div className={styles.footer}>
                <div>
                    <Section title={"ABOUT"} list={about} />
                    <Section title={"COMMUNITY"} list={community} />
                    <Section title={"HOST"} list={host} />
                    <Section title={"SUPPORT"} list={support}/>
                </div>
                <div>
                    <p>© 2021 Airbnb, Inc.</p>
                    <p>· Privacy</p>
                    <p>· Terms</p>
                    <p>· Sitemap</p>
                    <p>· Company details</p>
                    <a href="a"><BiGlobe/></a>
                    <a href="a">English (IN)</a>
                    <a href="a">₹ INR</a>
                    <a href="a"><ImFacebook /></a>
                    <a href="a"><AiOutlineTwitter /></a>
                    <a href="a"><ImInstagram/></a>
                </div>
            </div>
        </div>
    )
}