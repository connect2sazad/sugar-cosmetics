// Queries related to Products
const PRODUCTS_QUERY = {
    all_products : "SELECT * FROM `products` WHERE `products`.`is_deleted` = 0",
}

// const users
const USERS_QUERY = {
    login : "SELECT * FROM users WHERE email = ? OR username = ?",
    create : "INSERT INTO `users` (`username`, `email`, `password`) VALUES (?, ?, ?)",
}







module.exports = {
    PRODUCTS_QUERY,
    USERS_QUERY
}