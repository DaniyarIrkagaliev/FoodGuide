import $api from "../http";


export const fetchTypes = async () => {
    const {data} = await $api.get('/type')
    return data
}

export const fetchRestaurants = async (page, limit = 10) => {
    const {data} = await $api.get('/restaurants', {
        params: {
            page, limit
        }
    })
    return data
}


export const addToDefaultFav = async (id) => {
    const {data} = ''
    return data
}

export const fetchAllRestaurants = async () => {
    const {data} = await $api.get('/restaurants2')
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $api.get('api/device/' + id)
    return data
}