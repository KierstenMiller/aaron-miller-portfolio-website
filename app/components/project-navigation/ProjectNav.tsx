import Image from "next/image";
import { usePathname } from "next/navigation";

export const ProjectNav = ({ariaLabel}: {ariaLabel: string}) => {
  const pathname = usePathname();
  const routes = [
    {href: '/work/sleep-number', src: '/static/images/sleep-number-work-thumbnail.png', srText: 'Sleep Number Work'},
    {href: '/work/space150', src: '/static/images/space150-website-thumbnail.png', srText: 'Space150 Website'},
    {href: '/work/music-analytics-app', src: '/static/images/music-analytics-app-thumbnail.png', srText: 'Music Analytics App'},
    {href: '/work/medtronic-project', src: '/static/images/medtronic-project-thumbnail.png', srText: 'Medtronic Project'}
  ];
  const routesToUse = routes.filter(route => route.href !== pathname);
    return <nav aria-label={ariaLabel}>
    <ul className="projects-menu">
      {routesToUse.map(route => <li key={route.href}>
        <a href={route.href}>
          <span className="sr-only">{route.srText}</span>
          <Image src={route.src} width={600} height={310} alt="" />
        </a>
      </li>)}
    </ul>
  </nav>
}