<?php require_once("includes/database.php"); ?>
<?php require_once("includes/functions.php"); ?>
<?php require_once("includes/sessions.php"); ?>

<!doctype html>
<html class="no-js" lang="zxx">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Cryjaxx | Official Page </title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/cryjaxx_page_logo.png">
    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/owl.carousel.min.css">
    <link rel="stylesheet" href="assets/css/flaticon.css">
    <link rel="stylesheet" href="assets/css/animate.min.css">
    <link rel="stylesheet" href="assets/css/magnific-popup.css">
    <link rel="stylesheet" href="assets/css/fontawesome-all.min.css">
    <link rel="stylesheet" href="assets/css/themify-icons.css">
    <link rel="stylesheet" href="assets/css/nice-select.css">
    <link rel="stylesheet" href="assets/css/slick.css">
    <link rel="stylesheet" href="assets/css/slicknav.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="gallery/style.css">
</head>
<body>
<!-- Preloader Start -->
<div id="preloader-active">
    <div class="preloader d-flex align-items-center justify-content-center">
        <div class="preloader-inner position-relative">
            <div class="preloader-circle"></div>
            <div class="preloader-img pere-text">
                <img src="assets/img/cryjaxx_black.png" alt="">
            </div>
        </div>
    </div>
</div>
<header>
    <!-- Header Start -->
    <div class="header-area header_area">
        <div class="main-header">
            <div class="header-bottom  header-sticky" style="background-color: #010E21!important; color: #FFFFFF!important;">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <!-- Logo -->
                        <div class="col-xl-2 col-lg-1 col-md-1">
                            <div class="logo">
                                <a href="index.php"><img src="assets/img/cryjaxx_white_logo.png" width="150px" height="30px" alt=""></a>
                            </div>
                        </div>
                        <div class="col-xl-10 col-lg-10 col-md-10">
                            <!-- Main-menu -->
                            <div class="main-menu f-right d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li><a href="index.php">Home</a></li>
                                        <li><a href="blog.php">Blog</a></li>
                                        <li><a href="music.php">Music</a></li>
                                        <li><a href="tour.php">Tour</a></li>
                                        <li><a href="gallery.php">Gallery</a></li>
                                        <li><a href="https://teespring.com/stores/cryjaxxapparel">Shop</a></li>
                                        <li><a href="about.php">About</a></li>
                                        <li><a href="contact.php">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <!-- Mobile Menu -->
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<main>
    <!-- Slider Area Start-->
    <section class="razo-latest-news-area bg-overlay bg-img jarallax" style="background-image: url(assets/img/cryjaxx_headphones.jpg);">
        <div class="razo-latest-news-slide owl-carousel">
            <?php
                global $connectingDB;
                $sql= "SELECT * FROM musics m ORDER BY m.id desc limit 0, 3;";
                $result = mysqli_query($connectingDB, $sql);
                while ($DataRows = mysqli_fetch_array($result)) {
                    $id        = $DataRows[0];
                    $title     = $DataRows['music_title'];
                    $producers = $DataRows['music_producers'];
                    $image     = $DataRows['music_image'];
                    $date      = $DataRows['date_time'];
            ?>
            <div class="razo-single-latest-news-area bg-overlay bg-img" style="background-image: url(upload<?php echo '/'.$image; ?>);">
                <!-- Post Content -->
                <div class="post-content">
                    <a href="#" class="post-title"><?php echo $producers; ?> - <?php echo $title; ?></a>
                </div>
                <!-- Post Date -->
                <div class="post-date">
                    <h2>
                        <?php
                            $split_date = explode('-', $date);
                            echo $split_date[2];
                        ?>
                    </h2>
                    <p>
                        <?php
                            $month_num = $split_date[1];
                            $month_name = date("F", mktime(0, 0, 0, $month_num, 10));
                            echo $month_name;
                        ?>
                    </p>
                </div>
                <div class="read-more-btn">
                    <a href="music.php" class="btn">Show More <i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                </div>
            </div>
            <?php } ?>
        </div>
    </section>
    <section class="uza-news-area section-padding-80">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-heading text-center">
                        <h2>Latest News</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row razo-blog-masonary">
                <?php
                    global $connectingDB;
                    $no_posts = 0;
                    $sql= "SELECT * FROM posts p ORDER BY p.id desc;";
                    $result = mysqli_query($connectingDB, $sql);
                    while ($DataRows = mysqli_fetch_array($result)) {
                        $id           = $DataRows[0];
                        $dateTime     = $DataRows['date_time'];
                        $title        = $DataRows['post_title'];
                        $description  = $DataRows['post_description'];
                        $image        = $DataRows['post_image'];
                        $no_posts++;
                    ?>
                    <!-- Single Blog Item -->
                    <div class="col-12 col-sm-6 col-lg-4 razo-blog-masonary-item mb-30">
                        <div class="razo-blog-masonary-single-item">
                            <div class="post-thumbnail">
                                <a href="#"><img src="upload<?php echo '/'.$image; ?>" alt=""></a>
                            </div>
                            <div class="post-content">
                                <div class="post-date"><i class="fa fa-calendar" aria-hidden="true"></i> <?php echo $dateTime; ?></div>
                                <a href="#" class="post-title"><?php echo $title; ?></a>
                                <p><?php echo $description; ?></p>
                            </div>
                        </div>
                    </div>
                <?php } ?>
            </div>
        </div>
    </section>
</main>
<section class="follow-area clearfix">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-heading text-center">
                    <h2>Follow Instagram</h2>
                    <p>@cryjaxx</p>
                </div>
            </div>
        </div>
    </div>
    <div class="instragram-feed-area owl-carousel">
        <?php
        global $connectingDB;
        $sql= "SELECT * FROM musics m ORDER BY m.id desc limit 0, 6;";
        $result = mysqli_query($connectingDB, $sql);
        while ($DataRows = mysqli_fetch_array($result)) {
            $id        = $DataRows[0];
            $image     = $DataRows['music_image'];
            ?>
            <div class="single-instagram-item">
                <img src="upload/<?php echo $image; ?>" alt="">
                <div class="instagram-hover-content text-center d-flex align-items-center justify-content-center">
                    <a href="#">
                        <i class="ti-instagram" aria-hidden="true"></i>
                        <span>@cryjaxx</span>
                    </a>
                </div>
            </div>
        <?php } ?>
    </div>
</section>
<div style="width: 100%; padding-bottom: 20px">
    <div style="height: 2px; background-color: #27aae1;"></div>
</div>
<footer>
    <!-- Footer Start-->
    <div class="footer-area">
        <div class="container">
            <div class="footer-top footer-padding">
                <div class="newsletter">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5">
                                <div class="newsletter_content" style="text-align: left">
                                    <div class="section_title_container">
                                        <div class="section_subtitle">Cryjaxx</div>
                                        <div class="section_title"><h2>Our Newsletter</h2></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="newsletter_form_container">
                                    <?php echo errorMessage(); echo successMessage(); ?>
                                    <form action="index.php" method="post" id="newsletter_form" class="newsletter_form">
                                        <input type="email" class="newsletter_input" name="newsletter_email" placeholder="Your e-mail" required="required">
                                        <button class="newsletter_button" name="newsletter_button"><span>Subscribe</span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="newsletter_border_container"><div class="container"><div class="row border_row"><div class="col"><div class="newsetter_border"></div></div></div></div></div>
                </div>
                <div class="row justify-content-between">
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                        <div class="single-footer-caption mb-50">
                            <div class="single-footer-caption mb-30">
                                <!-- Logo -->
                                <a href="index.php" class="footer-logo" style="text-align: center!important;"><img src="assets/img/cryjaxx_black.png" style="width: 70%; height: 70%" alt=""></a>
                                <!-- Footer Content -->
                                <div class="footer-content">
                                    <!-- Single Contact Info -->
                                    <div class="single-footer-caption mt-20 ml-20">
                                        <div class="footer-tittle">
                                            <ul>
                                                <li><a href="#"> DJ/Producer Duo 🇦🇱 Albania </a></li>
                                                <li><a href="mailto:contact@cryjaxx.com">contact@cryjaxx.com</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h4 style="padding-left: 20px">Follow & Join Us</h4><br>
                                    <div class="single-contact-info d-flex" style="text-align: center!important;">
                                        <div class="row" style="width: 100%; text-align: center!important; margin-left: 5px">
                                            <ul class="social-network social-circle" style="width: 100%; text-align: center!important;">
                                                <li><a href="https://www.facebook.com/CryJaxx" target="_blank" class="icoFacebook" title="Facebook"><i class="fab fa-facebook"></i></a></li>
                                                <li><a href="https://twitter.com/CryJaxx" target="_blank" class="icoLinkedin" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                                                <li><a href="https://open.spotify.com/artist/4FidvjA9dxE6bhpHGC6ns9" target="_blank" class="icoSpotify" title="Spotify"><i class="fab fa-spotify"></i></a></li>
                                                <li><a href="https://soundcloud.com/CryJaxx" target="_blank" class="icoSoundcloud" title="Soundcloud"><i class="fab fa-soundcloud"></i></a></li>
                                                <li><a href="https://www.youtube.com/c/CryJaxx" target="_blank" class="icoYoutube" title="Youtube"><i class="fab fa-youtube"></i></a></li>
                                                <li><a href="https://www.instagram.com/CryJaxx" target="_blank" class="icoInstagram" title="Instagram"><i class="fab fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><a href="index.php">Home</a></li>
                                    <li><a href="blog.php">Blog</a></li>
                                    <li><a href="music.php">Music</a></li>
                                    <li><a href="tour.php">Tour</a></li>
                                    <li><a href="gallery.php">Gallery</a></li>
                                    <li><a href="https://teespring.com/stores/cryjaxxapparel">Shop</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4>Customer Care</h4>
                                <ul>
                                    <li><a href="contact.php">Contact Us</a></li>
                                    <li><a href="about.php">About Us</a></li>
                                    <li><a href="blog.php">News & Articles</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#"> Terms of Use</a></li>
                                    <li><a href="#">All rights</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="single-footer-caption mb-20">
                            <div class="footer-tittle">
                                <h4>Instagram</h4>
                            </div>
                            <!-- footer social -->
                            <div class="razo-instagram-area d-flex flex-wrap">
                                <!-- Single Instagram Feed -->
                                <div class="single-instagram-feed">
                                    <a href="#"><img src="assets/instagram/instagram1.jpg" alt=""></a>
                                </div>
                                <!-- Single Instagram Feed -->
                                <div class="single-instagram-feed">
                                    <a href="#"><img src="assets/instagram/instagram2.jpg" alt=""></a>
                                </div>
                                <!-- Single Instagram Feed -->
                                <div class="single-instagram-feed">
                                    <a href="#"><img src="assets/instagram/instagram3.jpg" alt=""></a>
                                </div>
                                <!-- Single Instagram Feed -->
                                <div class="single-instagram-feed">
                                    <a href="#"><img src="assets/instagram/instagram4.jpg" alt=""></a>
                                </div>
                                <!-- Single Instagram Feed -->
                                <div class="single-instagram-feed">
                                    <a href="#"><img src="assets/instagram/instagram5.jpg" alt=""></a>
                                </div>
                                <!-- Single Instagram Feed -->
                                <div class="single-instagram-feed">
                                    <a href="#"><img src="assets/instagram/instagram6.jpg" alt=""></a>
                                </div>
                                <!-- Single Instagram Feed -->
                                <div class="single-instagram-feed">
                                    <a href="#"><img src="assets/instagram/instagram8.jpg" alt=""></a>
                                </div>
                                <!-- Single Instagram Feed -->
                                <div class="single-instagram-feed">
                                    <a href="#"><img src="assets/instagram/instagram7.jpg" alt=""></a>
                                </div>
                                <!-- Single Instagram Feed -->
                                <div class="single-instagram-feed">
                                    <a href="#"><img src="assets/instagram/instagram9.jpg" alt=""></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copywrite-area" style="padding-top: 50px">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <!-- Copywrite Text -->
                            <div class="copywrite-text">
                                <p style="font-family: 'Open Sans', sans-serif;">Copyright © <script>document.write(new Date().getFullYear());</script> All rights reserved | This website is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://mexhitkurti.netlify.app/" target="_blank" style="font-weight: bold; color: #007bff">Xhiti</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- JS here -->
<script src="./assets/js/vendor/modernizr-3.5.0.min.js"></script>
<script src="./assets/js/vendor/jquery-1.12.4.min.js"></script>
<script src="./assets/js/popper.min.js"></script>
<script src="./assets/js/bootstrap.min.js"></script>
<script src="./assets/js/jquery.slicknav.min.js"></script>
<script src="./assets/js/owl.carousel.min.js"></script>
<script src="./assets/js/slick.min.js"></script>
<script src="./assets/js/wow.min.js"></script>
<script src="./assets/js/animated.headline.js"></script>
<script src="./assets/js/jquery.magnific-popup.js"></script>
<script src="./assets/js/jquery.nice-select.min.js"></script>
<script src="./assets/js/jquery.form.js"></script>
<script src="./assets/js/jquery.validate.min.js"></script>
<script src="./assets/js/mail-script.js"></script>
<script src="./assets/js/jquery.ajaxchimp.min.js"></script>
<script src="./assets/js/plugins.js"></script>
<script src="./assets/js/main.js"></script>
<script src="assets/js/razo.bundle.js"></script>
<script src="assets/js/slick.min.js"></script>
<script src="assets/js/default-assets/active.js"></script>
<script src="gallery/js/default-assets/active.js"></script>
</body>
</html>