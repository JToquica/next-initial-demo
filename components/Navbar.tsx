import { ActiveLink } from './ActiveLink';
import styles from './navbar.module.css'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navbar = () => {
    return (
        <nav className={styles['menu-container']}>
            {menuItems.map(({text, href},idx) => (
                <ActiveLink key={idx} text={text} href={href} />
            ))}
        </nav>
    );
}