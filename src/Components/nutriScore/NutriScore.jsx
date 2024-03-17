// import "./css/nutriScorePc.css";
import nutriA from "../../assets/svg/nutriScore/nutriscore-a.svg";
import nutriB from "../../assets/svg/nutriScore/nutriscore-b.svg";
import nutriC from "../../assets/svg/nutriScore/nutriscore-c.svg";
import nutriD from "../../assets/svg/nutriScore/nutriscore-d.svg";
import nutriE from "../../assets/svg/nutriScore/nutriscore-e.svg";

/**
 *
 * @param nutri_score {string} le nutri score avec une lettre simple en minuscule
 * @param alt
 * @returns {JSX.Element} return un composent qui donne un badge avec un niveau nutriScore avec les codes couleur officiel
 * @constructor
 */
export const NutriScore = ({nutri_score , alt, ...props}) => {
    const nutriImg = (nutriScore) => {
        switch (nutriScore) {
            case "a":
                return nutriA;
            case "b":
                return nutriB;
            case "c":
                return nutriC;
            case "d":
                return nutriD;
            default:
                return nutriE;
        }
    };

    return (
        <img
            src={nutriImg(nutri_score)}
            alt={alt}
            // className="nova-image"
            {...props}
        />
    )
}