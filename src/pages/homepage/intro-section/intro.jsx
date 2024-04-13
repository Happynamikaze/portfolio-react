import { Col, Container, Row } from 'react-bootstrap';
import text from '../../../config/text.json';
import styles from './intro.module.css';
import { FaFileArrowDown, FaUserTie } from 'react-icons/fa6'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TechCard from '../../../common/components/techCard/techcard';
import adobePS from '../../../assets/img/tech-images/photoshop.svg';
import adobeIll from '../../../assets/img/tech-images/illustrator.svg';
import Tailwind from '../../../assets/img/tech-images/tailwind.svg'
import Angular from '../../../assets/img/tech-images/angular.svg'
import React from '../../../assets/img/tech-images/react.svg'
import sass from '../../../assets/img/tech-images/sass.svg'

import heroPic from '../../../assets/img/logo/logo_main.png';

export default function Intro() {

	useEffect(() => {
		document.querySelector('.age').innerText = calculateAge('2002-08-24');
	})

	function calculateAge(birthDate) {
		const now = new Date();
		const birth = new Date(birthDate);

		let age = now.getFullYear() - birth.getFullYear();
		const months = now.getMonth() - birth.getMonth();
		if (months < 0 || (months === 0 && now.getDate() < birth.getDate())) {
			age--;
		}

		return age;
	}

	return (
		<section >
			<Container>
				<Row className='align-items-center'>
					<Col lg={6}>
						<h1 dangerouslySetInnerHTML={{ __html: text.titles.intro }} className='f-space-mono fw-600 mb-4'></h1>
						<h6 dangerouslySetInnerHTML={{ __html: text.subtext.introSub }} className='f-space-mono fw-500 mb-4'></h6>
						<div className='site_btn_set_line'>
							<button type="button" className={`${styles['btn-space_set']} site_btn_custm f-space-mono fw-500 `}  >:hireMe() <FaUserTie /> </button>
							<Link href='#' className={`${styles['btn-space_set']} site_btn_custm f-space-mono fw-500 `}>:resume() <FaFileArrowDown /> </Link>
						</div>
					</Col>
					<Col lg={6}>
						<div className={`${styles["hero_maindiv_side"]}`}>
							<TechCard skillName={"Adobe Photoshop"} techCardLogo={adobePS} techCardLogosize={30} mode={"sm"} fontClass={"f-promt-text f-13 fw-400"} nth={1} />
							<TechCard skillName={"Tailwind CSS"} techCardLogo={Tailwind} techCardLogosize={30} mode={"sm"} fontClass={"f-promt-text f-13 fw-400"} nth={2} />
							
							<TechCard skillName={"Adobe Illustrator"} techCardLogo={adobeIll} techCardLogosize={30} mode={"sm"} fontClass={"f-promt-text f-13 fw-400"} nth={3} />

							<TechCard skillName={"Angular"} techCardLogo={Angular} techCardLogosize={30} mode={"sm"} fontClass={"f-promt-text f-13 fw-400"} nth={4} />
							
							<TechCard skillName={"React"} techCardLogo={React} techCardLogosize={30} mode={"sm"} fontClass={"f-promt-text f-13 fw-400"} nth={5} />
									
							<TechCard skillName={"Sass"} techCardLogo={sass} techCardLogosize={30} mode={"sm"} fontClass={"f-promt-text f-13 fw-400"} nth={6} />
							
							<div className={`${[styles.heroSectionPic]}`}>
								<img src={heroPic} alt="" width={"100%"} />
							</div>
						</div>

					</Col>
				</Row>
			</Container>


		</section>
	)
}

