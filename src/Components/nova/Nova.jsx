import nova1 from "../../assets/svg/nova/nova-group-1.svg";
import nova2 from "../../assets/svg/nova/nova-group-2.svg";
import nova3 from "../../assets/svg/nova/nova-group-3.svg";
import nova4 from "../../assets/svg/nova/nova-group-4.svg";
import novaN from "../../assets/svg/nova/nova-group-unknown.svg";
import "./css/NovaPc.css";
/**
 * Composant Nova - affiche une image en fonction du score Nova fourni.
 * @param {number} novaScore - Le score Nova à afficher (1, 2, 3 ou 4).
 * @param {string} alt - Texte alternatif pour l'image.
 * @param {object} props - Autres propriétés React.
 * @returns {JSX.Element} Composant d'image Nova.
 * @constructor
 */
export const Nova = ({ novaScore, alt, ...props }) => {
    /**
     * Renvoie l'URL de l'image Nova en fonction du score Nova.
     * @param {number} nova_group - Le score Nova pour choisir l'image.
     * @returns {string} URL de l'image correspondante.
     */
    const novaImg = (nova_group) => {
        switch (nova_group) {
            case 1:
                return nova1;
            case 2:
                return nova2;
            case 3:
                return nova3;
            case 4:
                return nova4;
            default:
                return novaN;
        }
    };

    return (
        <img
            src={novaImg(novaScore)}
            alt={alt}
            // className="nova-image"
            {...props}
        />
    );
};
