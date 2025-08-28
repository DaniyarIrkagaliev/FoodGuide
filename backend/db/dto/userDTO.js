module.exports = class UserDTO {
    username;
    email;


    constructor(username, email) {
        this.email = email;
        this.username = username;
    }

}