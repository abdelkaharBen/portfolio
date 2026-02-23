import React from 'react';
import styles from './SkillsMarquee.module.css';

const skillsRow1 = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Expo', icon: 'https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

const skillsRow2 = [
    { name: 'Node', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
    { name: 'Supabase', icon: 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg' },
    { name: 'Refine.js', icon: 'https://refine.dev/img/refine_logo.png' },
];

const SkillsMarquee = ({ isVisible }) => {
    return (
        <section id="skills" className={`${styles.marqueeSection} ${isVisible ? styles.visible : ''}`}>
            <div className="section-header">
                <h2>My Skills</h2>
                <div className="underline"></div>
            </div>
            <div className={styles.container}>
                {/* Row 1 - Left Logic */}
                <div className={styles.scrollWrapper}>
                    <div className={styles.scrollContent}>
                        {[...skillsRow1, ...skillsRow1, ...skillsRow1].map((skill, index) => (
                            <div key={`r1-${index}`} className={styles.skillCard}>
                                <div className={styles.iconWrapper}>
                                    <img src={skill.icon} alt={skill.name} className={styles.skillIcon} />
                                </div>
                                <span className={styles.skillName}>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 - Right Logic */}
                <div className={`${styles.scrollWrapper} ${styles.reverseRow}`}>
                    <div className={`${styles.scrollContent} ${styles.reverseAnimation}`}>
                        {[...skillsRow2, ...skillsRow2, ...skillsRow2].map((skill, index) => (
                            <div key={`r2-${index}`} className={styles.skillCard}>
                                <div className={styles.iconWrapper}>
                                    <img src={skill.icon} alt={skill.name} className={styles.skillIcon} />
                                </div>
                                <span className={styles.skillName}>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsMarquee;
