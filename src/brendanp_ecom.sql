-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 06, 2023 at 09:44 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `brendanp_ecom`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `name`, `description`, `price`, `quantity`) VALUES
(1, 'Intel Core i9-9900K Processor', 'High-performance gaming processor', 399.99, 10),
(2, 'AMD Ryzen 9 5900X Processor', 'Powerful gaming CPU with 12 cores', 549.99, 8),
(3, 'Intel Core i7-10700K Processor', 'Great gaming CPU with high clock speeds', 329.99, 12),
(4, 'AMD Ryzen 5 5600X Processor', 'Excellent gaming processor with 6 cores', 299.99, 15),
(5, 'Intel Core i5-10600K Processor', 'Solid gaming CPU for mid-range systems', 249.99, 20),
(6, 'AMD Ryzen 7 5800X Processor', 'High-performance CPU for gaming and multitasking', 449.99, 6),
(7, 'Intel Core i9-11900K Processor', 'Top-tier gaming CPU with 8 cores', 599.99, 10),
(8, 'AMD Ryzen 9 5950X Processor', 'Extreme gaming CPU with 16 cores', 799.99, 4),
(9, 'Intel Core i5-11600K Processor', 'Solid gaming CPU with 6 cores', 269.99, 18),
(10, 'AMD Ryzen 7 3700X Processor', 'Excellent value CPU for gaming and productivity', 299.99, 15),
(11, 'ASUS ROG Zephyrus G14', '14-inch gaming laptop with AMD Ryzen 9 processor', 1499.99, 5),
(12, 'Acer Predator Helios 300', '15.6-inch gaming laptop with Intel Core i7 processor', 1299.99, 8),
(13, 'MSI GS66 Stealth', '15.6-inch gaming laptop with NVIDIA GeForce RTX 3080 graphics', 1999.99, 3),
(14, 'Razer Blade 15', '15.6-inch gaming laptop with Intel Core i9 processor', 2499.99, 4),
(15, 'Alienware m15 R4', '15.6-inch gaming laptop with NVIDIA GeForce RTX 3070 graphics', 1799.99, 7),
(16, 'Lenovo Legion 7', '15.6-inch gaming laptop with AMD Ryzen 7 processor', 1599.99, 6),
(17, 'HP Omen 15', '15.6-inch gaming laptop with NVIDIA GeForce RTX 3060 graphics', 1399.99, 10),
(18, 'Dell G5 15 SE', '15.6-inch gaming laptop with AMD Ryzen 5 processor', 999.99, 12),
(19, 'ASUS TUF Gaming A15', '15.6-inch gaming laptop with AMD Ryzen 7 processor', 1199.99, 9),
(20, 'MSI GE66 Raider', '15.6-inch gaming laptop with NVIDIA GeForce RTX 2070 graphics', 1799.99, 5),
(21, 'CyberPowerPC Gamer Xtreme VR Gaming Desktop', 'Powerful gaming desktop with Intel Core i7 processor', 1499.99, 5),
(22, 'Alienware Aurora R12 Gaming Desktop', 'High-performance gaming desktop with NVIDIA GeForce RTX 3080 graphics', 1999.99, 8),
(23, 'HP OMEN 30L Gaming Desktop', 'Gaming desktop with AMD Ryzen 9 processor', 1799.99, 3),
(24, 'MSI Trident X Plus Gaming Desktop', 'Compact gaming desktop with Intel Core i9 processor', 2499.99, 4),
(25, 'Corsair Vengeance i7200 Series Gaming Desktop', 'Powerful gaming desktop with NVIDIA GeForce RTX 3070 graphics', 1799.99, 7),
(26, 'Lenovo Legion Tower 5i Gaming Desktop', 'High-performance gaming desktop with Intel Core i7 processor', 1599.99, 6),
(27, 'ASUS ROG Strix GL12 Gaming Desktop', 'Gaming desktop with NVIDIA GeForce RTX 3060 graphics', 1399.99, 10),
(28, 'Dell Alienware Aurora R10 Gaming Desktop', 'Gaming desktop with AMD Ryzen 7 processor', 1299.99, 12),
(29, 'MSI MEG Trident X Gaming Desktop', 'Compact gaming desktop with Intel Core i7 processor', 1199.99, 9),
(30, 'HP Pavilion Gaming Desktop', 'Budget-friendly gaming desktop with AMD Ryzen 5 processor', 999.99, 5),
(31, 'NVIDIA GeForce RTX 3080', 'High-performance graphics card for gaming', 799.99, 10),
(32, 'AMD Radeon RX 6800 XT', 'Powerful graphics card for gaming and content creation', 999.99, 8),
(33, 'NVIDIA GeForce RTX 3070', 'Great value graphics card for gaming', 599.99, 12),
(34, 'AMD Radeon RX 6700 XT', 'Mid-range graphics card for gaming at 1440p', 499.99, 15),
(35, 'NVIDIA GeForce RTX 3060 Ti', 'Excellent graphics card for 1440p gaming', 399.99, 20),
(36, 'AMD Radeon RX 6600 XT', 'Entry-level graphics card for 1080p gaming', 299.99, 6),
(37, 'NVIDIA GeForce GTX 1660 Super', 'Budget-friendly graphics card for gaming', 249.99, 15),
(38, 'AMD Radeon RX 6900 XT', 'High-end graphics card for 4K gaming and content creation', 1499.99, 4),
(39, 'NVIDIA GeForce RTX 3090', 'Top-tier graphics card for extreme gaming and professional workloads', 1499.99, 10),
(40, 'AMD Radeon RX 6800', 'Performance graphics card for gaming and productivity', 649.99, 6),
(41, 'Samsung 970 EVO Plus SSD (1TB)', 'High-speed NVMe SSD for gaming and data storage', 199.99, 5),
(42, 'Corsair Vengeance RGB PRO RAM (16GB)', 'RGB memory module for gaming PCs', 129.99, 8),
(43, 'Seagate BarraCuda HDD (2TB)', 'Large capacity hard drive for gaming and file storage', 79.99, 3),
(44, 'G.Skill Trident Z RGB RAM (32GB)', 'High-performance RGB memory for gaming enthusiasts', 229.99, 4),
(45, 'Western Digital Black SN750 SSD (500GB)', 'NVMe SSD with fast read/write speeds for gaming', 119.99, 7),
(46, 'Crucial Ballistix RGB RAM (16GB)', 'RGB DDR4 memory module for gaming and multitasking', 99.99, 6),
(47, 'Corsair MP600 Pro Gen4 SSD (1TB)', 'High-speed PCIe 4.0 SSD for next-gen gaming', 249.99, 10),
(48, 'HyperX Fury RGB RAM (16GB)', 'RGB DDR4 memory module for gaming performance and style', 89.99, 12),
(49, 'Samsung 870 QVO SSD (4TB)', 'Large capacity SATA SSD for gaming and storage needs', 399.99, 9),
(50, 'TeamGroup T-Force Delta RGB RAM (32GB)', 'RGB DDR4 memory module for high-performance gaming', 189.99, 5),
(51, 'Logitech G502 HERO Gaming Mouse', 'High-precision gaming mouse with customizable features', 79.99, 10),
(52, 'Razer BlackWidow Elite Mechanical Keyboard', 'Mechanical gaming keyboard with RGB lighting and programmable keys', 169.99, 8),
(53, 'SteelSeries Arctis Pro Wireless Headset', 'Wireless gaming headset with high-fidelity audio and ClearCast microphone', 329.99, 6),
(54, 'ASUS ROG Swift PG279Q Gaming Monitor', '27-inch gaming monitor with WQHD resolution and high refresh rate', 699.99, 4),
(55, 'Corsair K70 RGB Mechanical Keyboard', 'Premium mechanical gaming keyboard with customizable RGB lighting', 159.99, 7),
(56, 'Logitech G Pro X Gaming Headset', 'Professional-grade gaming headset with detachable microphone and Blue Voice technology', 149.99, 10),
(57, 'HyperX Cloud Alpha S Gaming Headset', 'Wired gaming headset with virtual 7.1 surround sound and adjustable bass', 129.99, 12),
(58, 'BenQ EX2780Q Gaming Monitor', '27-inch gaming monitor with QHD resolution and HDRi technology', 499.99, 9),
(59, 'Razer DeathAdder V2 Gaming Mouse', 'Ergonomic gaming mouse with high-precision 20K DPI optical sensor', 69.99, 15),
(60, 'Logitech G915 TKL Wireless Mechanical Keyboard', 'Wireless mechanical gaming keyboard with low-profile switches and LIGHTSYNC RGB', 229.99, 5),
(61, 'ASUS ROG Strix Z590-E Gaming', 'ATX motherboard with Intel Z590 chipset and support for 11th generation Intel Core processors', 399.99, 5),
(62, 'GIGABYTE X570 AORUS Elite', 'ATX motherboard with AMD X570 chipset and support for AMD Ryzen processors', 249.99, 8),
(63, 'MSI MPG B550 GAMING PLUS', 'ATX motherboard with AMD B550 chipset and support for AMD Ryzen processors', 179.99, 3),
(64, 'ASRock B560 Steel Legend', 'ATX motherboard with Intel B560 chipset and support for 10th and 11th generation Intel Core processors', 159.99, 4),
(65, 'ASUS TUF Gaming X570-PLUS', 'ATX motherboard with AMD X570 chipset and support for AMD Ryzen processors', 199.99, 7),
(66, 'MSI MAG B550 TOMAHAWK', 'ATX motherboard with AMD B550 chipset and support for AMD Ryzen processors', 169.99, 6),
(67, 'GIGABYTE Z590 AORUS PRO AX', 'ATX motherboard with Intel Z590 chipset and support for 11th generation Intel Core processors', 329.99, 10),
(68, 'ASRock X570 Phantom Gaming 4', 'ATX motherboard with AMD X570 chipset and support for AMD Ryzen processors', 149.99, 12),
(69, 'MSI MAG B560M MORTAR', 'Micro-ATX motherboard with Intel B560 chipset and support for 10th and 11th generation Intel Core processors', 139.99, 9),
(70, 'ASUS ROG Crosshair VIII Hero', 'ATX motherboard with AMD X570 chipset and support for AMD Ryzen processors', 449.99, 6);

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE `purchases` (
  `purchase_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `purchase_date` date NOT NULL,
  `quantity` int(11) NOT NULL,
  `delivery_date` date NOT NULL,
  `delivery_status` int(11) NOT NULL,
  `address` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `purchases`
--

INSERT INTO `purchases` (`purchase_id`, `user_id`, `product_id`, `purchase_date`, `quantity`, `delivery_date`, `delivery_status`, `address`) VALUES
(20389284, 1, 52, '2023-06-06', 1, '2023-06-06', 0, 0),
(40390112, 1, 11, '2023-06-06', 1, '2023-06-06', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(256) NOT NULL,
  `email` varchar(100) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `email`, `first_name`, `last_name`) VALUES
(1, '123', '$2b$10$yw5SJJUlI5BT/aTK.TW91.AMHtJldErp.1k3Tp6DzikMf78r1aKIC', '123@gmail.com', '123', '123'),
(2, '123', '$2b$10$raGJjOyoPbr7wigErC8TjOGwedCadhvCXWG9VP8w8KXcDYFGi8cPK', '1234@gmail.com', '123', '123'),
(3, '123', '$2b$10$wZQh1qBAp4JolpCGJsxYHuJhj39UkgUGjBLtT63yFB9PEBRMMTAZe', '1235@gmail.com', '123', '123'),
(4, 'Crispy', '$2b$10$MgMHxd.EVc0scc750l3K3Ouj81IdpMndJ9tlkzQrg2TQOuKb.F7s6', 'kristapseisaks03@gmail.com', 'Kriss', 'Eisaks'),
(5, 'Crispy', '$2b$10$g1isZnywG06Q8sn94GEGk.neO9EaMVs3KbfEarTjMWUv/r5S7d/jy', 'kristapseisaks03@gmail.com', 'Kriss', 'Eisaks');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`purchase_id`),
  ADD UNIQUE KEY `user_id` (`user_id`,`product_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `purchases`
--
ALTER TABLE `purchases`
  ADD CONSTRAINT `Purchases_ibfk_3` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  ADD CONSTRAINT `purchases_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
