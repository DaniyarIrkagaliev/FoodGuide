import {makeAutoObservable} from "mobx";

export default class ReviewStore {
    constructor() {

        this._fav = []
        makeAutoObservable(this)
    }


    setToFav(_fav) {
        this._fav = _fav
    }


}
