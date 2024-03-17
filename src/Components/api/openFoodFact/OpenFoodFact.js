//
// fonction updateDataFood = async () => {
//
//     const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${codeBare}.json`);
//     const data = await response.json();
//     if (data.status_verbose === 'product not found') {
//         console.log("code 404")
//     } else {
//         console.log("code 200")
//     }
//
// }

export async function getOpenFoodFact({code}) {
    const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`);
    const data = await response.json();
    if (data.status_verbose === 'product not found') {
        console.log("code 404")
        return {
            code: 404,
            data: data
        }
    } else {
        console.log("code 200")
        return {
            code: 200,
            data: data
        }
    }
}