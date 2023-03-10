import React from 'react'
import styles from './styles.module.css'
import IconLink from './IconLink'
import { FaGithub } from 'react-icons/fa';

export default function Projects({ title, image, description, link, linkName}) {
    return (
        <div className={styles.projectElement}>
            <div className={styles.projectTitle}>
                {title}
            </div>
            <div className={styles.projectBody}>
                <div className={styles.projectImageContainer}>
                    <img className={styles.projectImage} src={image} alt={title}/>
                </div>
                <div className={styles.projectDescription}>
                    <div>{description}</div>
                    {link ? <IconLink link={link} linkName={linkName} icon={<FaGithub size='32' color='white'/>}/> : null}
                </div>
            </div>
        </div>
    )
};