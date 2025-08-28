const JsonData = require("./data/restaurant.json");
const db = require("./db/db");

let coordinates, rest_id, rest_name, address, url, phones, categories, hours;

async function addToDB() {
    try {
        for (let key in JsonData.features) {
            // Общий
            coordinates = ''
            coordinates = JsonData.features[key].geometry.coordinates[1].toString()
            coordinates += " " + JsonData.features[key].geometry.coordinates[0].toString()

            rest_id = JsonData.features[key].properties.CompanyMetaData.id.toString()
            rest_name = JsonData.features[key].properties.CompanyMetaData.name
            address = JsonData.features[key].properties.CompanyMetaData.address

            if (JsonData.features[key].properties.CompanyMetaData.url) {
                url = JsonData.features[key].properties.CompanyMetaData.url
            } else {
                url = ''
            }
            // телефоны
            phones = ''
            if (JsonData.features[key].properties.CompanyMetaData.Phones) {
                for (let phone in JsonData.features[key].properties.CompanyMetaData.Phones) {
                    phones += " " + JsonData.features[key].properties.CompanyMetaData.Phones[phone].formatted.toString()
                }
            }
            // категории ресторана
            categories = ''
            if (JsonData.features[key].properties.CompanyMetaData.Categories) {
                for (let cat in JsonData.features[key].properties.CompanyMetaData.Categories) {
                    categories += " " + JsonData.features[key].properties.CompanyMetaData.Categories[cat].name.toString()
                }
            }
            // часы
            if (JsonData.features[key].properties.CompanyMetaData.Hours) {
                hours = JsonData.features[key].properties.CompanyMetaData.Hours.text.toString()
            } else {
                hours = ''
            }

            const rest = await db.query(
                'INSERT INTO "restaurant" (ya_id, coordinates, name, adress, url, phones, categories, hours) values  ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
                [rest_id, coordinates,  rest_name, address, url, phones, categories, hours])
        }
    } catch (e) {
        console.log(e);
    }
}