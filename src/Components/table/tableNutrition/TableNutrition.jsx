import ("./css/TableaNutritionPc.css");

export const TableNutrition = ({header, data}) => {
    return (
            <table className="tableNutrition">
                <thead>
                <tr>
                    {header.map((header, i) =>
                        <th key={i}>{header}</th>)}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>énergie</th>
                    <th>{data.energy} {data.energy_unit} / {data[`energy-kcal_100g`]} {data[`energy-kcal_unit`]}</th>
                    <th>{data.energy * 2} {data.energy_unit} / {data[`energy-kcal_100g`] * 2} {data[`energy-kcal_unit`]}</th>
                </tr>
                <tr>
                    <th>Matièrers grasses</th>
                    <th>{data.fat_100g} {data.fat_unit}</th>
                    <th>{data.fat_100g * 2} {data.fat_unit}</th>
                </tr>
                <tr>
                    <th>Acides gras saturés</th>
                    <th>{data.carbohydrates_100g} {data.carbohydrates_unit}</th>
                    <th>{data.carbohydrates_100g * 2} {data.carbohydrates_unit}</th>
                </tr>
                <tr>
                    <th>Acides gras saturés dont sucres</th>
                    <th>{data.sugars_100g} {data.sugars_unit}</th>
                    <th>{data.sugars_100g * 2} {data.sugars_unit}</th>
                </tr>
                <tr>
                    <th>Glucides</th>
                    <th>{data.fat_serving} {data.fat_unit}</th>
                    <th>{data.fat_serving * 2} {data.fat_unit}</th>
                </tr>
                <tr>
                    <th>Sel</th>
                    <th>{data.salt_100g} {data.salt_unit}</th>
                    <th>{data.salt_100g * 2} {data.salt_unit}</th>
                </tr>
                <tr>
                    <th>calcium</th>
                    <th>{data.calcium_100g} {data.calcium_unit}</th>
                    <th>{data.calcium_100g * 2} {data.calcium_unit}</th>
                </tr>
                <tr>
                    <th>protéines</th>
                    <th>{data.proteins_100g} {data.proteins_unit}</th>
                    <th>{data.proteins_100g * 2} {data.proteins_unit}</th>
                </tr>
                <tr>
                    <th>Fibres alimentaires</th>
                    <th>{data.fiber_100g} {data.fiber_unit}</th>
                    <th>{data.fiber_100g * 2} {data.fiber_unit}</th>
                </tr>
                <tr>
                    <th>Vitamine B2:</th>
                    <th>{data[`vitamin-b2_value`]}{data[`vitamin-b2_unit`]}</th>
                    <th>{data[`vitamin-b2_value`] * 2}{data[`vitamin-b2_unit`]}</th>
                </tr>
                <tr>
                    <th>Vitamine B12:</th>
                    <th>{data[`vitamin-b12_value`]}{data[`vitamin-b12_unit`]}</th>
                    <th>{data[`vitamin-b12_value`] * 2}{data[`vitamin-b12_unit`]}</th>
                </tr>
                <tr>
                    <th>Vitamine D:</th>
                    <th>{data[`vitamin-d_value`]}{data[`vitamin-d_unit`]}</th>
                    <th>{data[`vitamin-d_value`] * 2}{data[`vitamin-d_unit`]}</th>
                </tr>
                </tbody>
            </table>
    )
}