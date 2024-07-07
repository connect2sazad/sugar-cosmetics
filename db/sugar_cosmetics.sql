-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 07, 2024 at 11:00 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sugar_cosmetics`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `link` varchar(255) NOT NULL,
  `is_active` int(11) NOT NULL DEFAULT 0,
  `is_deleted` int(11) NOT NULL DEFAULT 0,
  `created_by` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `name`, `link`, `is_active`, `is_deleted`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 'Sugar Play', 'sugar-play', 0, 0, '', '2024-07-05 19:54:43', '2024-07-05 19:54:43'),
(2, 'Lips', 'lips', 0, 0, '', '2024-07-05 19:59:27', '2024-07-05 19:59:27'),
(3, 'Lips', 'lips', 0, 0, '', '2024-07-05 20:03:46', '2024-07-05 20:03:46'),
(4, 'Eyes', 'eyes', 0, 0, '', '2024-07-05 20:03:46', '2024-07-05 20:03:46'),
(5, 'Face', 'face', 0, 0, '', '2024-07-05 20:03:46', '2024-07-05 20:03:46'),
(6, 'Nails', 'nails', 0, 0, '', '2024-07-05 20:03:46', '2024-07-05 20:03:46'),
(7, 'Skincare', 'skincare', 0, 0, '', '2024-07-05 20:03:46', '2024-07-05 20:03:46'),
(8, 'Accessories', 'accessories', 0, 0, '', '2024-07-05 20:03:46', '2024-07-05 20:03:46'),
(9, 'Best Sellers', 'best-sellers', 0, 0, '', '2024-07-05 20:03:46', '2024-07-05 20:03:46'),
(10, 'New Launches', 'new-launches', 0, 0, '', '2024-07-05 20:03:46', '2024-07-05 20:03:46'),
(11, 'Offers', 'offers', 0, 0, '', '2024-07-05 20:03:46', '2024-07-05 20:03:46'),
(12, 'Blog', 'blog', 0, 0, '', '2024-07-05 20:03:46', '2024-07-05 20:03:46');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `display_image` varchar(255) DEFAULT NULL,
  `display_text` varchar(255) DEFAULT NULL,
  `offer_price` int(11) NOT NULL,
  `full_price` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `is_active` int(11) NOT NULL DEFAULT 0,
  `is_deleted` int(11) NOT NULL DEFAULT 0,
  `updated_by` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_name`, `display_image`, `display_text`, `offer_price`, `full_price`, `created_at`, `updated_at`, `is_active`, `is_deleted`, `updated_by`) VALUES
(1, 'SUGAR Play Mega Hype Colour Changing Lip Oil', 'http://localhost:3000/static/media/lip-gloss.754a4a112a362a369a95.webp', '6 Shades', 479, 599, '2024-06-18 09:36:54', '2024-06-18 09:36:54', 0, 0, ''),
(2, 'SUGAR Play Mega Hype Colour Changing Lip Oil', 'http://localhost:3000/static/media/lip-gloss.754a4a112a362a369a95.webp', '6 Shades', 479, 599, '2024-06-18 09:39:17', '2024-06-18 09:39:17', 0, 0, ''),
(3, 'SUGAR Play Mega Hype Colour Changing Lip Oil', 'http://localhost:3000/static/media/lip-gloss.754a4a112a362a369a95.webp', '6 Shades', 479, 599, '2024-06-18 09:39:18', '2024-06-18 09:39:18', 0, 0, ''),
(4, 'SUGAR Play Mega Hype Colour Changing Lip Oil', 'http://localhost:3000/static/media/lip-gloss.754a4a112a362a369a95.webp', '6 Shades', 479, 599, '2024-06-18 09:39:19', '2024-06-18 09:39:19', 0, 0, ''),
(5, 'SUGAR Play Mega Hype Colour Changing Lip Oil', 'http://localhost:3000/static/media/lip-gloss.754a4a112a362a369a95.webp', '6 Shades', 479, 599, '2024-06-18 09:39:20', '2024-06-18 09:39:20', 0, 0, ''),
(6, 'SUGAR Play Mega Hype Colour Changing Lip Oil', 'http://localhost:3000/static/media/lip-gloss.754a4a112a362a369a95.webp', '6 Shades', 479, 599, '2024-06-18 09:39:20', '2024-06-18 09:39:20', 0, 0, ''),
(7, 'SUGAR Play Mega Hype Colour Changing Lip Oil', 'http://localhost:3000/static/media/lip-gloss.754a4a112a362a369a95.webp', '6 Shades', 479, 599, '2024-06-18 09:39:21', '2024-06-18 09:39:21', 0, 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`, `updated_at`) VALUES
(5, 'connect2sazad', 'mail2sazad@gmail.com', '$2b$10$G5p3yNE/sTnXspyXDUTq2OoeMNTlo7Xsbd4bNxBCpXukSLqna8yRi', '2024-07-05 18:18:07', '2024-07-05 18:18:07');

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wishlist`
--

INSERT INTO `wishlist` (`id`, `user_id`, `product_id`, `created_at`, `updated_at`) VALUES
(2, 5, 2, '2024-07-05 21:14:04', '2024-07-05 21:14:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD CONSTRAINT `wishlist_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `wishlist_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
