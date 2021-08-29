import styles from './home.module.css'

export function Hosting() {
    return (
        <div>
            <div className={styles.hosting}>
                <img src="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440" alt="" />
                <div>
                    <h1>Try hosting</h1>
                    <p>Earn extra income and unlock new <br />opportunities by sharing your space.</p>
                    <button>Learn more</button>
                </div>
            </div>
        </div>
    )
}