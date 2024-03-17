import './css/VignetteSimpleMobile.css';
import './css/VignetteSimplePc.css';

/**
 *  return a simple vignette with name picture groupe product name and code product
 * @param {string} nameProduct  name of product
 * @param {string} linkImg  link image for product
 * @param {string} altImg  text alternative product
 * @param {string} GroupeProduct  nome of the groupe producting
 * @param {string} codeProduct  code EAN-13 product code
 * @returns {JSX.Element}
 */
export const VignetteSimple = (
    {
        nameProduct = "nameProduct",
        linkImg = "https://picsum.photos/200/300",
        altImg = "image decription",
        groupeProduct = "groupe product inconnu",
        codeProduct = "XXXXXXXXXXXXX",
        orderColumn = true
    }
) => {
    let groupe = groupeProduct.trim() !== "" ? groupeProduct : "groupe product inconnu";
    return (
        <div className="vignetteSimple">
            <h1 className="vignetteSimpleName">{nameProduct}</h1>
            <img className="vignetteSimpleImg" src={linkImg} alt={altImg}/>
            <div className="vignetteSimpleInfo">
                <p className={`vignetteSimpleInfoGroupe ${orderColumn ? "orderColumn" : "orderRow"}`}>{groupe}</p>
                <p className="vignetteSimpleInfoCode">{codeProduct}</p>
            </div>
        </div>
    )
}

