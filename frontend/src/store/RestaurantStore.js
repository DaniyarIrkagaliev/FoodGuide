import {makeAutoObservable} from "mobx";

export default class RestaurantStore {
    constructor() {

        this._restaurants = []
        this._page = 1
        this._limit = 10
        makeAutoObservable(this)
    }


    setRestaurant(restaurants) {
        this._restaurants = restaurants
    }


    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    addToDefaultFav = async (id) => {
        const {data} = []
        return data
    }

    addToAnotherFav = async (id) => {
        const {data} = []
        return data
    }

    get restaurants() {
        return this._restaurants
    }

    get totalCount() {
        return this._totalCount
    }

    get page() {
        return this._page
    }

    get limit() {
        return this._limit
    }
}
