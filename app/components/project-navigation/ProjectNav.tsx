'use client';

import Image from "next/image";
import { usePathname } from "next/navigation";

import styles from "app/components/project-navigation/ProjectNav.module.scss";

export const ProjectNav = ({ ariaLabel }: { ariaLabel: string }) => {
  const pathname = usePathname();
  const routes = [
    { href: '/work/sleep-number', src: '/static/images/project-navigation/SN_Thumb_Desktop.png', srcTablet: '/static/images/project-navigation/SN_Thumb_Tablet.png', srcMobile: '/static/images/project-navigation/SN_Thumb_Mobile.png', heading: 'Sleep Number', services: ['Web Design', 'Production Designer', 'UX Digital Designer'] },
    { href: '/work/space150', src: '/static/images/project-navigation/space150_Thumb_Desktop.png', srcTablet: '/static/images/project-navigation/space150_Thumb_Tablet.png', srcMobile: '/static/images/project-navigation/space150_Thumb_Mobile.png', heading: 'space150', services: ['Web Design', 'Production Designer', 'UX Digital Designer'] },
    { href: '/work/medtronic-project', src: '/static/images/project-navigation/Medtronic_Thumb_Desktop.png', srcTablet: '/static/images/project-navigation/Medtronic_Thumb_Tablet.png', srcMobile: '/static/images/project-navigation/Medtronic_Thumb_Mobile.png', heading: 'Medtronic', services: ['Web Design', 'Production Designer', 'UX Digital Designer'] },
    //{ href: '/work/torque-fitness', src: '/static/images/project-navigation/Torque_Fitness_Thumb_Desktop.png', srcTablet: '/static/images/project-navigation/Torque_Fitness_Thumb_Tablet.png', srcMobile: '/static/images/project-navigation/Torque_Fitness_Thumb_Mobile.png', heading: 'Torque Fitness', services: ['Contract Designer', 'Web Designer', 'Production Designer'] }
  ];
  const routesToUse = routes.filter(route => route.href !== pathname);
  return <nav aria-label={ariaLabel}>
    <ul className={styles['projects-menu']}>
      {routesToUse.map(route => <li key={route.href}>
        <a href={route.href}>
          <Image className="desktop-only" src={route.src} width={600} height={310} alt="" />
          <Image className="tablet-only" src={route.srcTablet} width={600} height={310} alt="" />
          <Image className="mobile-only" src={route.srcMobile} width={600} height={310} alt="" />
          <div className={styles['text-container']}>
            <div className={styles['project-name']}>{route.heading}</div>
            <div className={styles['services-container']}>
              {route.services.map(service => <span key={service} className={styles['project-service']}>{service}</span>)}
            </div>
          </div>
        </a>
      </li>)}
    </ul>
  </nav>
}