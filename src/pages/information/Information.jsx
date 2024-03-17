// importation css
import './css/informationPc.css';

//importation Conposent
import {VignetteSimple} from "../../Components/vignette/VignetteSimple";
import {TableNutrition} from "../../Components/table/tableNutrition/TableNutrition";
import {SimpleSearch} from "../../Components/search/simpleSearch/SimpleSearch";
import {Nova} from "../../Components/nova/Nova";
import {EcoScore} from "../../Components/ecoScore/EcoScore";
import {NutriScore} from "../../Components/nutriScore/NutriScore";

// importation module react
import {useState} from "react";


export const Information = ({title}) => {
    document.title = title;
    const [codeBare, setCodeBare] = useState("5411188110835");
    const [dataFood, setDataFood] = useState({});
    const [language, setLanguage] = useState("fr");
    const [etatSearch, setEtatSearch] = useState(false);
    const enteteTableau = ["Tableau nutritionnel", "Tel que vendu pour 100 g / 100 ml", "Tel que vendu pour 200 g / 200 ml"];

    const switchLanguage = () => {
        setLanguage(language === "fr" ? "en" : "fr");
    }
    const choseCodeBare = (event) => {
        setCodeBare(event.target.value);
    }

    const updateDataFood = async () => {

        const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${codeBare}.json`);

        const data = await response.json();
        if (data.status_verbose === 'product not found') {
            setEtatSearch(false);
        } else {
            setEtatSearch(true);
            setDataFood(data.product);
        }


    }


    return (
        <div className="information">
            <div className="informationSearch">
                <SimpleSearch value={codeBare} onChange={choseCodeBare} onClick={updateDataFood}/>
            </div>

            {(Object.keys(dataFood).length > 0) && etatSearch ? dataFood && (
                <section className="informationContenu">
                    <div className="informationVignette">
                        <VignetteSimple
                            nameProduct={dataFood.product_name}
                            linkImg={dataFood.image_front_url}
                            altImg={""}
                            groupeProduct={" "}
                            codeProduct={dataFood.code}
                        />
                    </div>
                    <div className="informationEtiquette">
                        <div className="informationEtiquetteVisuelle">
                            <div className="informationEtiquetteIngredient">
                                <button className="informationEtiquetteSwitch" onClick={switchLanguage}>Switch
                                    Language
                                </button>
                                <p className="informationEtiquetteIngredientText">ingredient {language}: {dataFood[`ingredients_text_${language}`] !== "" ? dataFood[`ingredients_text_${language}`] : "version indisponible "}</p>
                            </div>
                            <div className="informationEtiquetteScore">
                                <div className="informationEtiquetteScoreNutri">
                                    <NutriScore nutri_score={dataFood.nutriscore_data.grade}/>
                                </div>
                                <div className="informationEtiquetteScoreEco">
                                    <EcoScore ecoScore={dataFood.ecoscore_grade}
                                              alt={`image eco score de niveau ${dataFood.ecoscore_grade}`}/>
                                    <Nova novaScore={dataFood.nova_group} alt={`Nova niveau ${dataFood.nova_group}`}/>
                                </div>
                            </div>
                        </div>
                        <div className="informationTableau">
                            <TableNutrition header={enteteTableau} data={dataFood.nutriments}/>
                        </div>

                    </div>

                </section>
            ) : (
                <p>Entré un code barre valide</p>
            )}

        </div>
    );
}