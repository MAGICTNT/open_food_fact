import {useEffect, useMemo, useState} from "react";
import {getOpenFoodFact} from "../../Components/api/openFoodFact/OpenFoodFact";
import "./css/ComparatifPc.css"
import {VignetteSimple} from "../../Components/vignette/VignetteSimple";

export const Comparatif = ({title}) => {
    document.title = title;

    const [codesComparatif, setCodesComparatif] = useState({
        productLeft: "3270190128717", // Boisson au soja nature
        productRight: " 3250391318353 ", // Boisson au soja nature BIO
    });
    const filtreVitamine = ['vitamin-d', 'vitamin-b2', 'vitamin-b12', 'vitamin-e', 'vitamin-c'];

    const [datasComparatif, setDatasComparatif] = useState({
        // datasLeft: {},
        datasLeft: {
            name: "",
            picture: "",
            groupe: "",
            energieKjValue: "",
            energieKjUnit: "",
            energieKcalValue: "",
            energieKcalUnit: "",
            calciumValue: "",
            calciumUnit: "",

            magnesiumValue: "",
            magnesiumUnit: "",
            nitrateValue: "",
            nitrateUnit: "",
            potassiumValue: "",
            potassiumUnit: "",
            sodiumValue: "",
            sodiumUnit: "",
            sugarsValue: "",
            sugarsUnit: "",

            fiberValue: "",
            fiberUnit: "",
            selValue: "",
            selUnit: "",
            proteinsValue: "",
            proteinsUnit: "",
            caloriesValue: "",
            caloriesUnit: "",
            carbohydratesValue: "",
            carbohydratesUnit: "",
            vitamineDValue: "",
            vitamineDUnit: "",
            vitamineB2Value: "",
            vitamineB2Unit: "",
            vitamineB12Value: "",
            vitamineB12Unit: "",
            vitamineEValue: "",
            vitamineEUnit: "",
            vitamineCValue: "",
            vitamineCUnit: "",
        },
        datasRight: {
            name: "",
            groupe: "",
            picture: "",
            energieKjValue: "",
            energieKjUnit: "",
            energieKcalValue: "",
            energieKcalUnit: "",
            calciumValue: "",
            calciumUnit: "",

            magnesiumValue: "",
            magnesiumUnit: "",
            nitrateValue: "",
            nitrateUnit: "",
            potassiumValue: "",
            potassiumUnit: "",
            sodiumValue: "",
            sodiumUnit: "",
            sugarsValue: "",
            sugarsUnit: "",

            fiberValue: "",
            fiberUnit: "",
            selValue: "",
            selUnit: "",
            proteinsValue: "",
            proteinsUnit: "",
            caloriesValue: "",
            caloriesUnit: "",
            carbohydratesValue: "",
            carbohydratesUnit: "",
            vitamineDValue: "",
            vitamineDUnit: "",
            vitamineB2Value: "",
            vitamineB2Unit: "",
            vitamineB12Value: "",
            vitamineB12Unit: "",
            vitamineEValue: "",
            vitamineEUnit: "",
            vitamineCValue: "",
            vitamineCUnit: "",
        },
    });

    // Removed unnecessary useEffects

    // Combined handler for product updates (assuming similar logic)
    const handleProductChange = (side, event) => {
        setCodesComparatif((prevState) => ({
            ...prevState,
            [side]: event.target.value,
        }));
    };

    const choseProductLeft = useMemo(() => handleProductChange.bind(null, "productLeft"), []);
    const choseProductRight = useMemo(() => handleProductChange.bind(null, "productRight"), []);

    const updateData = async (side) => {
        try {
            switch (side) {
                case "left": {
                    const callOpenFoodFact = await getOpenFoodFact({
                        code: codesComparatif.productLeft, // Assuming code is stored here
                    });
                    if (callOpenFoodFact.code === 200) {
                        console.log(callOpenFoodFact.data.product.nutriments_estimated)
                        console.log("produit gauche trouvé");
                        setDatasComparatif((prevState) => ({
                                ...prevState,
                                datasLeft: {
                                    name: callOpenFoodFact.data.product.product_name_fr || callOpenFoodFact.data.product.product_name_en,
                                    groupe: callOpenFoodFact.data.product.brands || "",
                                    picture: callOpenFoodFact.data.product.image_front_small_url || "",
                                    energieKjValue: callOpenFoodFact.data.product.nutriments["energy-kj_100g"] || "",
                                    energieKjUnit: callOpenFoodFact.data.product.nutriments["energy-kj_unit"] || "",
                                    energieKcalValue: callOpenFoodFact.data.product.nutriments["energy-kcal_100g"] || "",
                                    energieKcalUnit: callOpenFoodFact.data.product.nutriments["energy-kcal_unit"] || "",
                                    calciumValue: callOpenFoodFact.data.product.nutriments["calcium_100g"] || "",
                                    calciumUnit: callOpenFoodFact.data.product.nutriments["calcium_unit"] || "",

                                    magnesiumValue: callOpenFoodFact.data.product.nutriments["magnesium_100g"] || "",
                                    magnesiumUnit: callOpenFoodFact.data.product.nutriments["magnesium_unit"] || "",
                                    nitrateValue: callOpenFoodFact.data.product.nutriments["nitrate_100g"] || "",
                                    nitrateUnit: callOpenFoodFact.data.product.nutriments["nitrate_unit"] || "",
                                    potassiumValue: callOpenFoodFact.data.product.nutriments["potassium_100g"] || "",
                                    potassiumUnit: callOpenFoodFact.data.product.nutriments["potassium_unit"] || "",
                                    sodiumValue: callOpenFoodFact.data.product.nutriments["sodium_100g"] || "",
                                    sodiumUnit: callOpenFoodFact.data.product.nutriments["sodium_unit"] || "",
                                    sugarsValue: callOpenFoodFact.data.product.nutriments["sugars_100g"] || "",
                                    sugarsUnit: callOpenFoodFact.data.product.nutriments["sugars_unit"] || "",

                                    fiberValue: callOpenFoodFact.data.product.nutriments["fiber_100g"] || "",
                                    fiberUnit: callOpenFoodFact.data.product.nutriments["fiber_unit"] || "",
                                    selValue: callOpenFoodFact.data.product.nutriments["salt_100g"] || "",
                                    selUnit: callOpenFoodFact.data.product.nutriments["salt_unit"] || "",
                                    proteinsValue: callOpenFoodFact.data.product.nutriments["proteins_100g"] || "",
                                    proteinsUnit: callOpenFoodFact.data.product.nutriments["proteins_unit"] || "",
                                    caloriesValue: callOpenFoodFact.data.product.nutriments["energy-kcal_100g"] || "",
                                    caloriesUnit: callOpenFoodFact.data.product.nutriments["energy-kcal_unit"] || "",
                                    carbohydratesValue: callOpenFoodFact.data.product.nutriments["carbohydrates_100g"] || "",
                                    carbohydratesUnit: callOpenFoodFact.data.product.nutriments["carbohydrates_unit"] || "",
                                    vitamineDValue: callOpenFoodFact.data.product.nutriments["vitamin-d_value"] || "",
                                    vitamineDUnit: callOpenFoodFact.data.product.nutriments["vitamin-d_unit"] || "",
                                    vitamineB2Value: callOpenFoodFact.data.product.nutriments["vitamin-b2_value"] || "",
                                    vitamineB2Unit: callOpenFoodFact.data.product.nutriments["vitamin-b2_unit"] || "",
                                    vitamineB12Value: callOpenFoodFact.data.product.nutriments["vitamin-b12_value"] || "",
                                    vitamineB12Unit: callOpenFoodFact.data.product.nutriments["vitamin-b12_unit"] || "",
                                    vitamineEValue: callOpenFoodFact.data.product.nutriments["vitamin-e_value"] || "",
                                    vitamineEUnit: callOpenFoodFact.data.product.nutriments["vitamin-e_unit"] || "",
                                    vitamineCValue: callOpenFoodFact.data.product.nutriments["vitamin-c_value"] || "",
                                    vitamineCUnit: callOpenFoodFact.data.product.nutriments["vitamin-c_unit"] || "",
                                }

                            }
                        ));
                    } else {
                        console.log("produit gauche non trouvé");
                    }
                    break;
                }
                case "right": {
                    const callOpenFoodFact = await getOpenFoodFact({
                        code: codesComparatif.productRight, // Assuming code is stored here
                    });
                    if (callOpenFoodFact.code === 200) {
                        console.log(callOpenFoodFact.data.product.nutriments_estimated)
                        console.log("produit droit trouvé");
                        setDatasComparatif((prevState) => ({
                            ...prevState,
                            datasRight: {
                                name: callOpenFoodFact.data.product.product_name_fr || callOpenFoodFact.data.product.product_name_en,
                                groupe: callOpenFoodFact.data.product.brands || "",
                                picture: callOpenFoodFact.data.product.image_front_small_url || "",
                                energieKjValue: callOpenFoodFact.data.product.nutriments["energy-kj_100g"] || "",
                                energieKjUnit: callOpenFoodFact.data.product.nutriments["energy-kj_unit"] || "",
                                energieKcalValue: callOpenFoodFact.data.product.nutriments["energy-kcal_100g"] || "",
                                energieKcalUnit: callOpenFoodFact.data.product.nutriments["energy-kcal_unit"] || "",
                                calciumValue: callOpenFoodFact.data.product.nutriments["calcium_100g"] || "",
                                calciumUnit: callOpenFoodFact.data.product.nutriments["calcium_unit"] || "",

                                magnesiumValue: callOpenFoodFact.data.product.nutriments["magnesium_100g"] || "",
                                magnesiumUnit: callOpenFoodFact.data.product.nutriments["magnesium_unit"] || "",
                                nitrateValue: callOpenFoodFact.data.product.nutriments["nitrate_100g"] || "",
                                nitrateUnit: callOpenFoodFact.data.product.nutriments["nitrate_unit"] || "",
                                potassiumValue: callOpenFoodFact.data.product.nutriments["potassium_100g"] || "",
                                potassiumUnit: callOpenFoodFact.data.product.nutriments["potassium_unit"] || "",
                                sodiumValue: callOpenFoodFact.data.product.nutriments["sodium_100g"] || "",
                                sodiumUnit: callOpenFoodFact.data.product.nutriments["sodium_unit"] || "",
                                sugarsValue: callOpenFoodFact.data.product.nutriments["sugars_100g"] || "",
                                sugarsUnit: callOpenFoodFact.data.product.nutriments["sugars_unit"] || "",

                                fiberValue: callOpenFoodFact.data.product.nutriments["fiber_100g"] || "",
                                fiberUnit: callOpenFoodFact.data.product.nutriments["fiber_unit"] || "",
                                selValue: callOpenFoodFact.data.product.nutriments["salt_100g"] || "",
                                selUnit: callOpenFoodFact.data.product.nutriments["salt_unit"] || "",
                                proteinsValue: callOpenFoodFact.data.product.nutriments["proteins_100g"] || "",
                                proteinsUnit: callOpenFoodFact.data.product.nutriments["proteins_unit"] || "",
                                caloriesValue: callOpenFoodFact.data.product.nutriments["energy-kcal_100g"] || "",
                                caloriesUnit: callOpenFoodFact.data.product.nutriments["energy-kcal_unit"] || "",
                                carbohydratesValue: callOpenFoodFact.data.product.nutriments["carbohydrates_100g"] || "",
                                carbohydratesUnit: callOpenFoodFact.data.product.nutriments["carbohydrates_unit"] || "",
                                vitamineDValue: callOpenFoodFact.data.product.nutriments["vitamin-d_value"] || "",
                                vitamineDUnit: callOpenFoodFact.data.product.nutriments["vitamin-d_unit"] || "",
                                vitamineB2Value: callOpenFoodFact.data.product.nutriments["vitamin-b2_value"] || "",
                                vitamineB2Unit: callOpenFoodFact.data.product.nutriments["vitamin-b2_unit"] || "",
                                vitamineB12Value: callOpenFoodFact.data.product.nutriments["vitamin-b12_value"] || "",
                                vitamineB12Unit: callOpenFoodFact.data.product.nutriments["vitamin-b12_unit"] || "",
                                vitamineEValue: callOpenFoodFact.data.product.nutriments["vitamin-e_value"] || "",
                                vitamineEUnit: callOpenFoodFact.data.product.nutriments["vitamin-e_unit"] || "",
                                vitamineCValue: callOpenFoodFact.data.product.nutriments["vitamin-c_value"] || "",
                                vitamineCUnit: callOpenFoodFact.data.product.nutriments["vitamin-c_unit"] || "",
                            }
                        }));
                    } else {
                        console.log("produit droit non trouvé");
                    }
                    break;
                }
                default:
                    console.error("Côté invalide fourni à updateData:", side);
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des données:", error);
        }
    };

    const colorText = (dataPrincipal,dataComparatif) => {
        return dataPrincipal > dataComparatif ? "textGreen" : dataPrincipal < dataComparatif ? "textRed" : "textBlack";
    }

    const newLine = (label, dataLeftValue, dataLeftUnit, dataRightValue, dataRightUnit) => {
        return (dataLeftValue && dataRightValue) !== "" ?
            <tr>
                <th className={``}>{label}</th>
                <th className={colorText(dataLeftValue, dataRightValue)}>{dataLeftValue}{dataLeftUnit}</th>
                <th className={``}>{fleche(dataLeftValue, dataRightValue)}</th>
                <th className={colorText(dataRightValue, dataLeftValue)}>{dataLeftValue}{dataRightUnit}</th>

            </tr>
            :
            null
    }

    const fleche = (productLeft, productRight) => {
        return productLeft > productRight ? "<-" : productLeft < productRight ? "->" : "=";
    }

    const controleContenu = (data) => {
        return (data.name && data.img) !== ""
    }

    const controleInfoAport = (data) => {
        if (data.proteinsValue !== "") {
            if (data.caloriesValue !== "") {
                if (data.carbohydratesValue !== "") {
                    if (data.vitamineDValue !== "") {
                        if (data.vitamineB2Value !== "") {
                            if (data.vitamineB12Value !== "") {
                                if (data.vitamineEValue !== "") {
                                    if (data.vitamineCValue !== "") {
                                        return false;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return true;
    }

    return (
        <section>
            <div className="comparatifRecherche">
                <div className="">
                    <label>Gauche</label>
                    <input
                        type="text"
                        value={codesComparatif.productLeft}
                        onChange={choseProductLeft}
                        name="testLeft"
                    />
                    <button onClick={() => updateData("left")}>Mettre à jour le gauche</button>
                </div>
                <div className="">
                    <label>Droite</label>
                    <input
                        type="text"
                        value={codesComparatif.productRight}
                        onChange={choseProductRight}
                        name="testRight"
                    />
                    <button onClick={() => updateData("right")}>Mettre à jour le droit</button>
                </div>
            </div>

            <div className="comparatifImage">
                {controleContenu(datasComparatif.datasLeft) ?
                    <section>
                        <VignetteSimple
                            nameProduct={datasComparatif.datasLeft.name}
                            linkImg={datasComparatif.datasLeft.picture}
                            altImg={`image ${datasComparatif.datasLeft.name}`}
                            groupeProduct={datasComparatif.datasLeft.groupe}
                            codeProduct={codesComparatif.productLeft} />
                    </section>
                    :
                    <p>data left {JSON.stringify(controleContenu(datasComparatif.datasLeft))} </p>
                }
                {controleContenu(datasComparatif.datasRight) ?
                    <section>
                        <VignetteSimple
                            nameProduct={datasComparatif.datasRight.name}
                            linkImg={datasComparatif.datasRight.picture}
                            altImg={`image ${datasComparatif.datasRight.name}`}
                            groupeProduct={datasComparatif.datasRight.groupe}
                            codeProduct={codesComparatif.productRight} />
                    </section>
                    :
                    <p>data right {JSON.stringify(controleContenu(datasComparatif.datasRight))} </p>
                }

            </div>
            {controleContenu(datasComparatif.datasLeft) && controleContenu(datasComparatif.datasRight) ?
                <article className="comparatifTableau">
                    <table>
                        <thead>
                        <tr>
                            <th>information</th>
                            <th>{datasComparatif.datasLeft.name}</th>
                            <th>avis</th>
                            <th>{datasComparatif.datasRight.name}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {(datasComparatif.datasLeft.energieKcalValue && datasComparatif.datasRight.energieKcalValue) !== "" ?
                            <tr>
                                <th>Énergie</th>
                                <th>{datasComparatif.datasLeft.energieKcalValue} {datasComparatif.datasLeft.energieKcalUnit}({datasComparatif.datasLeft.energieKjValue} {datasComparatif.datasLeft.energieKjUnit})</th>
                                <th>{fleche(datasComparatif.datasLeft.energieKcalValue, datasComparatif.datasRight.energieKcalValue)}</th>
                                <th>{datasComparatif.datasLeft.energieKcalValue} {datasComparatif.datasLeft.energieKcalUnit}({datasComparatif.datasLeft.energieKjValue} {datasComparatif.datasLeft.energieKjUnit})</th>
                            </tr> : null
                        }
                        {newLine(
                            "sel 100g",
                            datasComparatif.datasLeft.selValue,
                            datasComparatif.datasLeft.selUnit,
                            datasComparatif.datasRight.selValue,
                            datasComparatif.datasRight.selUnit,
                        )}
                        {newLine(
                            "Sucre 100g",
                            datasComparatif.datasLeft.sugarsValue,
                            datasComparatif.datasLeft.sugarsUnit,
                            datasComparatif.datasRight.sugarsValue,
                            datasComparatif.datasRight.sugarsUnit
                        )}
                        {newLine(
                            "fibre 100g",
                            datasComparatif.datasLeft.fiberValue,
                            datasComparatif.datasLeft.fiberUnit,
                            datasComparatif.datasRight.fiberValue,
                            datasComparatif.datasRight.fiberUnit,
                        )}
                        {newLine(
                            "calcium 100g",
                            datasComparatif.datasLeft.calciumValue,
                            datasComparatif.datasLeft.calciumUnit,
                            datasComparatif.datasRight.calciumValue,
                            datasComparatif.datasRight.calciumUnit,
                        )}
                        {/*----------------*/}
                        {newLine(
                            "Sucre 100g",
                            datasComparatif.datasLeft.sugarsValue,
                            datasComparatif.datasLeft.sugarsUnit,
                            datasComparatif.datasRight.sugarsValue,
                            datasComparatif.datasRight.sugarsUnit
                        )}
                        {newLine(
                            "Sodium 100g",
                            datasComparatif.datasLeft.sodiumValue,
                            datasComparatif.datasLeft.sodiumUnit,
                            datasComparatif.datasRight.sodiumValue,
                            datasComparatif.datasRight.sodiumUnit
                        )}
                        {newLine(
                            "potassium 100g",
                            datasComparatif.datasLeft.potassiumValue,
                            datasComparatif.datasLeft.potassiumUnit,
                            datasComparatif.datasRight.potassiumValue,
                            datasComparatif.datasRight.potassiumUnit
                        )}
                        {newLine(
                            "Nitrate 100g",
                            datasComparatif.datasLeft.nitrateValue,
                            datasComparatif.datasLeft.nitrateUnit,
                            datasComparatif.datasRight.nitrateValue,
                            datasComparatif.datasRight.nitrateUnit
                        )}
                        {newLine(
                            "Magnesium 100g",
                            datasComparatif.datasLeft.magnesiumValue,
                            datasComparatif.datasLeft.magnesiumUnit,
                            datasComparatif.datasRight.magnesiumValue,
                            datasComparatif.datasRight.magnesiumUnit
                        )}
                        {/*---------------*/}
                        {newLine(
                            "Proteins 100g",
                            datasComparatif.datasLeft.proteinsValue,
                            datasComparatif.datasLeft.proteinsUnit,
                            datasComparatif.datasRight.proteinsValue,
                            datasComparatif.datasRight.proteinsUnit,
                        )}
                        {newLine(
                            "calorie 100g",
                            datasComparatif.datasLeft.proteinsValue,
                            datasComparatif.datasLeft.proteinsUnit,
                            datasComparatif.datasRight.proteinsValue,
                            datasComparatif.datasRight.proteinsUnit,
                        )}
                        {newLine(
                            "Matiere grâce 100g",
                            datasComparatif.datasLeft.carbohydratesValue,
                            datasComparatif.datasLeft.carbohydratesUnit,
                            datasComparatif.datasRight.carbohydratesValue,
                            datasComparatif.datasRight.carbohydratesUnit,
                        )}
                        {newLine(
                            "Vitamine D",
                            datasComparatif.datasLeft.vitamineDValue,
                            datasComparatif.datasLeft.vitamineDUnit,
                            datasComparatif.datasRight.vitamineDValue,
                            datasComparatif.datasRight.vitamineDUnit,
                        )}
                        {newLine(
                            "Vitamine B2",
                            datasComparatif.datasLeft.vitamineB2Value,
                            datasComparatif.datasLeft.vitamineB2Unit,
                            datasComparatif.datasRight.vitamineB2Value,
                            datasComparatif.datasRight.vitamineB2Unit,
                        )}
                        {newLine(
                            "Vitamine B12",
                            datasComparatif.datasLeft.vitamineB12Value,
                            datasComparatif.datasLeft.vitamineB12Unit,
                            datasComparatif.datasRight.vitamineB12Value,
                            datasComparatif.datasRight.vitamineB12Unit,
                        )}
                        {newLine(
                            "Vitamine C",
                            datasComparatif.datasLeft.vitamineCValue,
                            datasComparatif.datasLeft.vitamineCUnit,
                            datasComparatif.datasRight.vitamineCValue,
                            datasComparatif.datasRight.vitamineCUnit,
                        )}
                        {newLine(
                            "Vitamine E",
                            datasComparatif.datasLeft.vitamineEValue,
                            datasComparatif.datasLeft.vitamineEUnit,
                            datasComparatif.datasRight.vitamineEValue,
                            datasComparatif.datasRight.vitamineEUnit,
                        )}

                        </tbody>
                    </table>
                </article> : null}


        </section>
    );

};
