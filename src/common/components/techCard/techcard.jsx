import text from "../../../config/text.json";
import Styles from "./techcard.module.css";
import { Row } from "react-bootstrap";
import introStyle from "../../../pages/homepage/intro-section/intro.module.css";


export default function TechCard(props) {
	const { skillName, techCardLogo, techCardLogosize, mode, fontClass, nth } = props;

	return (
		<div className={`${Styles["tech_card_align"]} ${Styles[mode]}  ${introStyle["tech_card_align"]} `} data-position={nth}>
			<div className={`tech-img`}>
				<img src={techCardLogo} alt="" width={techCardLogosize} />
			</div>
			<div>
				<p className={fontClass}>{skillName}</p>
			</div>
		</div>
	)

}