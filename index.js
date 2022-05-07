const { queryToFetchAllProducts } =  require("./queries/index.js")


const fetchAllProducts = async  () => {
    const products = await queryToFetchAllProducts()
    console.log('DEM PRODUCTS ====>', products)
}

fetchAllProducts()