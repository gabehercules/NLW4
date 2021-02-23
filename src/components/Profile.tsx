import styles from '../styles/components/Profile.module.css'


export function Profile() {
    return (

        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/35200922?s=460&u=6fd93c5d72004adc43342aed9cea7f27ef4d995b&v=4" alt="Avatar Image" />
            <div>
                <strong>Gabriel Hercules</strong>

                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}