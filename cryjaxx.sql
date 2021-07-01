-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 01, 2021 at 01:46 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cryjaxx`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `date_time` date NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `profile_pic` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `date_time`, `first_name`, `username`, `password`, `email`, `profile_pic`) VALUES
(7, '2020-11-13', 'Mexhit', 'xhiti_admin', '59cce8245083b5ddf2cef452ef0be4f4', 'mexhitkurti10@gmail.com', 'bfc34ef3-3be6-47e4-a8d9-e9c1b43e2481.jpg'),
(8, '2020-11-14', 'Serafin', 'fini_admin', '6f423d0e60855896c7d991f6fbb4263e', '', ''),
(9, '2020-11-14', 'Mario', 'mario_admin', '25be8c690c735f69d2bc8ae0bb90b0f5', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `emails`
--

CREATE TABLE `emails` (
  `id` int(11) NOT NULL,
  `email` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int(11) NOT NULL,
  `date_time` date NOT NULL,
  `photo_title` varchar(100) NOT NULL,
  `photo_image` varchar(300) NOT NULL,
  `category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `date_time`, `photo_title`, `photo_image`, `category`) VALUES
(4, '2020-11-13', 'colorday-1', 'cryjaxx_colorday8.jpg', 'country'),
(5, '2020-11-13', 'rage-of-the-rampage-1', 'cryjaxx_rgr6.jpg', 'nature'),
(6, '2020-11-13', 'colorday-2', 'cryjaxx_colorday9.jpg', 'country'),
(7, '2020-11-13', 'colorday-3', 'cryjaxx_colorday7.jpg', 'country'),
(8, '2020-11-13', 'colorday-4', 'cryjaxx_colorday5.jpg', 'country'),
(9, '2020-11-13', 'rage-of-the-rampage-2', 'cryjaxx_rgr5.jpg', 'nature'),
(10, '2020-11-13', 'china-1', 'cryjaxx_china2.jpg', 'human'),
(11, '2020-11-13', 'colorday-5', 'cryjaxx_colorday6.jpg', 'country'),
(12, '2020-11-13', 'colorday-6', 'cryjaxx_colorday4.jpg', 'country'),
(13, '2020-11-13', 'rage-of-the-rampage-3', 'cryjaxx_rgr4.jpg', 'nature'),
(14, '2020-11-13', 'china-2', 'cryjaxx_china4.jpg', 'human'),
(15, '2020-11-13', 'china-3', 'cryjaxx_china3.jpg', 'human'),
(16, '2020-11-13', 'rage-of-the-rampage-4', 'cryjaxx_rgr3.jpg', 'nature'),
(17, '2020-11-13', 'colorday-7', 'cryjaxx_colorday3.jpg', 'country'),
(18, '2020-11-13', 'china-4', 'cryjaxx_china5.jpg', 'human'),
(19, '2020-11-13', 'colorday-7', 'cryjaxx_colorday1.jpg', 'country'),
(20, '2020-11-13', 'china-5', 'cryjaxx_china1.jpg', 'human'),
(21, '2020-11-13', 'rage-of-the-rampage-5', 'cryjaxx_rgr1.jpg', 'nature');

-- --------------------------------------------------------

--
-- Table structure for table `musics`
--

CREATE TABLE `musics` (
  `id` int(11) NOT NULL,
  `date_time` date NOT NULL,
  `music_producers` varchar(100) NOT NULL,
  `music_title` varchar(100) NOT NULL,
  `viewers` int(11) NOT NULL,
  `music_image` varchar(300) NOT NULL,
  `music_audio` varchar(300) NOT NULL,
  `spotify` varchar(500) NOT NULL,
  `soundcloud` varchar(500) NOT NULL,
  `youtube` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `musics`
--

INSERT INTO `musics` (`id`, `date_time`, `music_producers`, `music_title`, `viewers`, `music_image`, `music_audio`, `spotify`, `soundcloud`, `youtube`) VALUES
(1, '2020-11-13', 'CryJaxx', 'Ponder [Magic Free Release]', 1, 'instagram2.jpg', 'CryJaxx - Ponder [Magic Free Release].mp3', '', '', ''),
(2, '2020-11-13', 'CryJaxx', 'You Need You (feat. Rosendale)', 0, 'you-need-you.jpg', 'CryJaxx - You Need You (feat. Rosendale) (Despotem Remix).mp3', '', '', ''),
(4, '2020-11-13', 'CryJaxx ', 'Surface (feat. Dubskie) [Official Audio]', 0, 't462874096-b1470239573_s400play.jpg', 'CryJaxx - Surface (feat. Dubskie) [Official Audio].mp3', '', '', ''),
(5, '2020-11-13', 'CryJaxx', 'Ready To Die (ft M.O.J.O & Benja) [Magic Free Release]', 0, 't522024758-b1513991591_s400.jpg', 'CryJaxx - Ready To Die (ft M.O.J.O & Benja) [Magic Free Release].mp3', '', '', ''),
(7, '2020-11-13', 'CryJaxx & Shkspr', 'Trash Talk (Magic Free Release)', 0, '91sH27KAieL._SS500_.jpg', 'CryJaxx & Shkspr - Trash Talk (Magic Free Release).mp3', '', '', ''),
(8, '2020-11-16', 'CryJaxx & Drama B', 'Stephanie', 2703, 'stephanie.jpg', 'CryJaxx & Drama B - Stephanie (Music Video).mp3', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `date_time` date NOT NULL,
  `post_title` varchar(100) NOT NULL,
  `post_image` varchar(300) NOT NULL,
  `post_description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `date_time`, `post_title`, `post_image`, `post_description`) VALUES
(4, '2020-11-13', 'Cryjaxx for more...!', 'cryjaxx_more.jpg', 'We are about to take over. #CryJaxxFamily'),
(5, '2020-11-13', 'First of the year!', 'cryjaxx_year.jpg', 'We just dropped our first track for this year and its a remix for “Redline” by @lookas. Head over to our YouTube channel and SoundCloud profile to listen. This one is pretty damn hard and we’ve got a few others lined up just like this, but this year expect different projects from us. Some of them might make you Cry👀!\r\n\r\n'),
(6, '2020-11-13', 'First EP. Get ready for this!', 'cryjaxx_firstEP.jpg', 'Are you ready for our first EP? It’s a bit different from our usual stuff but it’s a special project that we really enjoyed working with. More info coming soon 🙏🏻. Meanwhile enjoy some pics from CryJaxx shows! The bigger picture, the higher meaning, the larger plan. Gotta keep believin’, ain’t no fucking holding back.'),
(7, '2020-11-13', 'What is coming??', 'cryjaxx_coming.jpg', 'We are gettin’ ready for what’s coming.'),
(8, '2020-11-13', 'Ready for the summer?!', 'cryjaxx_summer.jpg', 'Everyone please take care of yourself and your loved ones. #staysafe & #stayinside and let’s #savethesummer ❤️!'),
(9, '2020-11-13', 'Cryjaxx for you!', 'cryjaxx_for_you.jpg', 'Y’all want some new fucking music?'),
(10, '2020-11-13', 'Our new release G.F.D.R', 'cryjaxx_gfdr.jpg', '“It’s going down for real!” Our cover of G.D.F.R is out now everywhere! Make sure to listen on Spotify and save it to your playlist. In these days, all we need is some distraction and some good music. Experimenting with different sounds did the trick for us. Hope y’all enjoy and please stay safe.'),
(11, '2020-11-13', 'Cryjaxx is a family!', 'cryjaxx_family.jpg', '#CryJaxxFamily has always been there for us. Grateful ❤️! What are y’all doing these days?'),
(12, '2020-11-13', 'Cryjaxx ft Rosendale - You need you', 'cryjaxx8.jpg', 'You Need You - The Remix EP is now out everywhere! Make sure to listen and tell us which one was your favorite version.');

-- --------------------------------------------------------

--
-- Table structure for table `tours`
--

CREATE TABLE `tours` (
  `id` int(11) NOT NULL,
  `date_time` date NOT NULL,
  `tour_name` varchar(100) NOT NULL,
  `tour_location` varchar(100) NOT NULL,
  `tour_image` varchar(300) NOT NULL,
  `tour_description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tours`
--

INSERT INTO `tours` (`id`, `date_time`, `tour_name`, `tour_location`, `tour_image`, `tour_description`) VALUES
(2, '2020-11-13', 'COLOR DAY FESTIVAL TIRANA', 'Tirana, Albania', 'cryjaxx_colorday1.jpg', 'Color Day Festival returns to Albania and is ready to transform Mother Teresa Square into a large canvas with people of color. The festival is getting bigger and bigger. If last year was fantastic, this year will be even more wonderful!\r\n\r\nSave the day, because on May 18 we will live an experience that will change our perception of life!'),
(4, '2020-11-13', 'RAGE OF THE RAMPAGE', 'Tirana, Albania', 'cryjaxx_rgr1.jpg', 'Let us introduce you to “Rage of the Rampage”, an electrifying concert which will shake Tirana on December 20TH 2019. Rage of the Rampage is an invitation to always be pumped, full of energy and adrenaline, ready to feel the rhythm and enjoy every second.\r\n\r\nRage of the Rampage is the new “Carpe Diem”.'),
(5, '2020-11-13', 'CRYJAXX CHINA TOUR 2019', 'China', 'cryjax_china_tour_img.jpg', 'Haven’t had the chance to post earlier, but we are now in China 🇨🇳. Announcing “CryJaxx - China Tour 2019” 🤘🏻🎉. You can watch our video from our first show in Zhenjiang and much more. Hope you enjoy and follow our tour♥️!');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `emails`
--
ALTER TABLE `emails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `musics`
--
ALTER TABLE `musics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tours`
--
ALTER TABLE `tours`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `emails`
--
ALTER TABLE `emails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `musics`
--
ALTER TABLE `musics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tours`
--
ALTER TABLE `tours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
