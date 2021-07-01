<?php require_once("includes/database.php"); ?>
<?php require_once("includes/functions.php"); ?>
<?php require_once("includes/sessions.php"); ?>

<?php
/*    if (isset($_POST["contact_button"])) {

        $contact_name    = $_POST['contact_name'];
        $contact_email   = $_POST['contact_email'];
        $contact_message = $_POST['contact_message'];

        if (empty($contact_name)) {
            $errors[] = "Name can't be empty";
        }

        if (empty($contact_email)) {
            $errors[] = "Email can't be empty";
        } else if (!filter_var($contact_email, FILTER_VALIDATE_EMAIL)) {
            $errors[] = 'Email is invalid';
        }

        if (empty($contact_message)) {
            $errors[] = "Message can't be empty";
        }

        $to = "mexhitkurti10@gmail.com";
        $subject = "Message from CRYJAXX Web";

        $header = "From:".$contact_email."\r\n";

        $retval = mail($to, $subject, $contact_message, $header);
        var_dump($retval);

        if ($retval == true) {
            $_SESSION["SuccessMessage"] = "Message sent successfully!";
        } else {
            $_SESSION["ErrorMessage"] = "Message could not be sent! Please try again!";
        }
    }

*/?>

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
    <section class="razo-latest-news-area bg-overlay bg-img jarallax" style="background-image: url(assets/img/cryjaxx_headphones.jpg);">
        <div class="razo-latest-news-slide owl-carousel">
            <div class="razo-single-latest-news-area bg-overlay bg-img" style="background-image: url(assets/img/cryjaxx_contact.jpg); height: 500px"></div>
        </div>
    </section>
    <div class="wantToWork-area w-padding" style="padding-top: 0!important;">
        <section class="uza-news-area section-padding-80 contact-page-section">
            <div class="container">
                <div class="sec-title">
                    <div class="title">Contact Us</div>
                    <h2>Let's Get in Touch.</h2>
                </div>
                <div class="inner-container">
                    <div class="row clearfix">
                        <!--Form Column-->
                        <div class="form-column col-md-8 col-sm-12 col-xs-12">
                            <div class="inner-column">
                                <!--Contact Form-->
                                <div class="contact-form">
                                    <h4>Contact Cryjaxx</h4><br>
                                    <?php /*echo errorMessage(); echo successMessage(); */?>
                                    <form method="post" action="contact.php" id="contact-form">
                                        <div class="row clearfix">
                                            <div class="form-group col-md-6 col-sm-6 co-xs-12">
                                                <input type="text" name="contact_name" value="" placeholder="Name" required>
                                            </div>
                                            <div class="form-group col-md-6 col-sm-6 co-xs-12">
                                                <input type="email" name="contact_email" value="" placeholder="Email" required>
                                            </div>
                                            <div class="form-group col-md-12 col-sm-12 co-xs-12">
                                                <textarea name="contact_message" placeholder="Message"></textarea>
                                            </div>
                                            <div class="form-group col-md-12 col-sm-12 co-xs-12">
                                                <button type="submit" class="newsletter_button" name="contact_button" style="position: unset"><span>Send Now</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <!--End Contact Form-->
                            </div>
                        </div>
                        <!--Info Column-->
                        <div class="info-column col-md-4 col-sm-12 col-xs-12" style="background-color: #0C0613;">
                            <div class="inner-column" style="background-color: #0C0613; text-align: center">
                                <h3 style="color: white">Contact Info</h3>
                                <div style="height: 50px"></div>
                                <ul class="list-info">
                                    <li style="padding-left: 0!important;"><img src="img/cryjaxx_white_logo.png" style="width: 70%; height: 70%" alt="Cryjaxx Logo"></li>
                                </ul>
                                <h3 style="color: white">Follow & Join Us</h3><br><br>
                                <div class="flex-center">
                                    <i class="fab fa-spotify fa-3x icon-3d"></i>
                                    <i class="fab fa-soundcloud fa-3x icon-3d"></i>
                                    <i class="fab fa-youtube fa-3x icon-3d"></i>
                                </div>
                                <div class="flex-center">
                                    <i class="fab fa-twitter fa-3x icon-3d"></i>
                                    <i class="fab fa-facebook fa-3x icon-3d"></i>
                                    <i class="fab fa-instagram fa-3x icon-3d"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
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
    <!-- Instagram Feed Area -->
    <div class="instragram-feed-area owl-carousel">
        <?php
        global $connectingDB;
        $sql= "SELECT * FROM musics m ORDER BY m.id desc limit 0, 6;";
        $result = mysqli_query($connectingDB, $sql);
        while ($DataRows = mysqli_fetch_array($result)) {
            $id        = $DataRows[0];
            $image     = $DataRows['music_image'];
            ?>
            <!-- Single Instagram Item -->
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
<!-- JS -->
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