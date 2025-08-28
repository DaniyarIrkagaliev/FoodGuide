const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('users', {
    user_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    image: {type: DataTypes.STRING},
    status: {type: DataTypes.INTEGER, defaultValue: 1},
    account_info: {type: DataTypes.STRING},
}, {
    createdAt: false,
    updatedAt: false,
})

const Tokens = sequelize.define('tokens', {
    token_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING},
    refreshToken: {type: DataTypes.STRING},
}, {
    createdAt: false,
    updatedAt: false,
})

const Restaurant = sequelize.define('restaurants', {
    rest_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    ya_id: {type: DataTypes.STRING},
    coordinates: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    adress: {type: DataTypes.STRING},
    url: {type: DataTypes.STRING},
    phones: {type: DataTypes.STRING},
    categories: {type: DataTypes.STRING},
    hours: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING}
}, {
    createdAt: false,
    updatedAt: false,
})


// const Review = sequelize.define('review', {
//     review_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     review_text: {type: DataTypes.STRING},
// })
//
// const FavoriteList = sequelize.define('favoriteList', {
//     favoriteList_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     favoriteList_name: {type: DataTypes.STRING},
// })
//
// const FavoriteRest = sequelize.define('favoriteRest', {
//     favoriteRest_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })
//
// User.hasMany(FavoriteList)
// FavoriteList.belongsTo(User)
//
// User.hasMany(Review)
// Review.belongsTo(User)
//
// FavoriteList.hasMany(FavoriteRest)
// FavoriteRest.belongsTo(FavoriteList)
//
// Restaurant.hasMany(FavoriteRest)
// FavoriteRest.belongsTo(Restaurant)

module.exports = {
    User,
    Tokens,
    Restaurant,
    // FavoriteList,
    // Review,
    // FavoriteRest
}