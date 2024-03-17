import ecoA from "../../assets/svg/ecoScore/EcoScore-A.svg";
import ecoB from "../../assets/svg/ecoScore/EcoScore-B.svg";
import ecoC from "../../assets/svg/ecoScore/EcoScore-C.svg";
import ecoD from "../../assets/svg/ecoScore/EcoScore-D.svg";
import ecoE from "../../assets/svg/ecoScore/EcoScore-E.svg";
import ecoNeutre from "../../assets/svg/ecoScore/EcoScore-Neutre.svg";

/**
 *
 * @param ecoScore {String} ne niveau eco score, par defaut il renvera un niveau neutre
 * @param alt {String} texte alternative si l'image n'ai pas disponible ou pour les personne mal voyante
 * @param props
 * @returns {JSX.Element} return une image d'un ecoScore
 * @constructor
 */
export const EcoScore = ({ecoScore = "neutre", alt = "text alternative", ...props}) => {
    const ecoImg = (eco_group) => {
        switch (eco_group) {
            case "a":
                return ecoA;
            case "b":
                return ecoB;
            case "c":
                return ecoC;
            case "d":
                return ecoD;
            case "e":
                return ecoE;
            default:
                return ecoNeutre;
        }
    }
    return (
        <img
            src={ecoImg(ecoScore)}
            alt={alt}/>
    )
}