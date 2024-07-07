// Queries related to Products
const PRODUCTS_QUERY = {
    all_products : "SELECT * FROM `products` WHERE `products`.`is_deleted` = 0",
}

// const users
const USERS_QUERY = {
    login : "SELECT * FROM users WHERE email = ? OR username = ?",
    create : "INSERT INTO `users` (`username`, `email`, `password`) VALUES (?, ?, ?)",
}

// menus
const MENUS_QUERY = {
    all_menus : "SELECT * FROM `menus` WHERE `menus`.`is_deleted` = 0"
}

// wishlist
const WISHLIST_QUERY = {
    add : "INSERT INTO `wishlist` (`user_id`, `product_id`) VALUES (?, ?)",
    remove : "DELETE FROM `wishlist` WHERE `wishlist`.`id` = ?"
}

// cart
const CART_QUERY = {
    add : "INSERT INTO `cart` (`user_id`, `product_id`) VALUES (?, ?)",
    remove : "DELETE FROM `cart` WHERE `wishlist`.`id` = ?"
}







module.exports = {
    PRODUCTS_QUERY,
    USERS_QUERY,
    MENUS_QUERY,
    WISHLIST_QUERY,
    CART_QUERY
}