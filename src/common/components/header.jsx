import { Col, Container, Row } from 'react-bootstrap';
import styles from './header.module.css';
import logo_dark from '../../assets/img/logo/logo_black.svg';
import logo_white from '../../assets/img/logo/logo_white.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function useMediaQuery(query) {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches);
		}

		const listener = () => {
			setMatches(media.matches);
		};

		if (typeof media.addEventListener === "function") {
			media.addEventListener("change", listener);
		} else {
			media.addListener(listener);
		}

		return () => {
			if (typeof media.removeEventListener === "function") {
				media.removeEventListener("change", listener);
			} else {
				media.removeListener(listener);
			}
	
	};
 }, [matches, query]);
	return matches;

}



function Header() {

	const [open, setOpen] = useState(false);
	const hadlerSetOpen = () => setOpen(!open);

	useEffect(() => {
		const constTrigger = document.querySelectorAll('.contact-toggler');
		if (constTrigger) {
			constTrigger.forEach(e => {
				e.addEventListener('click', hadlerSetOpen)
			});
		}
	}, []);

	const isSmall = useMediaQuery("(max-width: 767px)");

	const [navOpen, setNavOpen] = useState(false);

	const variants = isSmall ? {
		open: { opacity: 1, x: 0, transition: { ease: "linear" } },
		closed: { opacity: 0, x: "-100" }
	} : {
		closed: { opacity: 1, x: 0, transition: { ease: "linear" } },
	}

	useEffect(() => {
		const size = {
			width: window.innerWidth
		}
		window.addEventListener("resize", () => {
			size.width = window.innerWidth;
			if (window.innerWidth >= 768) {
				navHandler();
			} else {
				setNavOpen(false);
			}

		})
		function navHandler() {
			setNavOpen(true);
		}
		if (size.width >= 768) {
			navHandler();
		} else {
			setNavOpen(false);
		}
	}, [])


	return (
		<header className={`${styles['header']} ${styles['glass']}`}>
			<Container className={styles['nav_width_set']}>
				<nav className={styles['nav-bar']}>
					<div className={styles['item_left']} >
						<Link to="/">
							<div className={styles['logo']}>
								<img src={logo_white} alt="logo" height={40} width={40} />
								<span className='fw-500 text-color-purple'>War<span className='last-text text-color-white'>Clouser</span></span>
							</div>
						</Link>
					</div>
					<div className={styles['item_right']}>
						<ul className={`${styles['menu_li_set']} list-unstyled mb-0 ${navOpen ? styles['open'] : ''} `} >
							<li><Link className='link f-space-mono ' to="/">.home()</Link></li>
							<li><Link className='link f-space-mono ' to="/work">.work()</Link></li>
							<li><Link className='link f-space-mono ' to="/about">.tech()</Link></li>
							<li><Link className='link f-space-mono ' to="/">Contact</Link></li>
						</ul>
						<div id={styles['hamburger']} className={`d-block d-md-none ${navOpen ? styles['open'] : ''}`} onClick={() => setNavOpen(!navOpen)}>
							<svg width="30" height="30" viewBox="0 0 100 100">
								<path className={`${styles['line']} ${styles['line1']}`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
								<path className={`${styles['line']} ${styles['line2']}`} d="M 20,50 H 80" />
								<path className={`${styles['line']} ${styles['line3']}`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
							</svg>
						</div>
					</div>
				</nav>

			</Container>
		</header>



	);
}

export default Header;