<?php require_once("includes/database.php"); ?>
<?php require_once("includes/functions.php"); ?>
<?php require_once("includes/sessions.php"); ?>
<?php confirmLogin(); ?>

<?php
    if (isset($_POST["publish_image"])){
        $username = $_SESSION['username'];
        $sql      = "select * from admins where username = '$username'";
        $result   = mysqli_query($connectingDB, $sql);
        $row      = mysqli_fetch_array($result);
        $user_id  = $row[0];

        $title     = $_POST["title"];
        $image     = $_FILES["image"]["name"];
        $target    = "upload/".basename($_FILES["image"]["name"]);
        $category  = $_POST["category"];

        $dateTime = date('y-m-d');

        if (!isset($image)){
            $_SESSION["ErrorMessage"] = "Image can't be empty!";
        }

        if (empty($title)){
            $_SESSION["ErrorMessage"] = "Title can't be empty!";
        }
        elseif (strlen($title) < 6){
            $_SESSION["ErrorMessage"] = "Music Title should be greater than 6 characters!";
        }
        else{
            $query = "insert into gallery(date_time, photo_title, photo_image, category) values (?, ?, ?, ?)";
            $result = mysqli_prepare($connectingDB, $query);
            move_uploaded_file($_FILES["image"]["tmp_name"], $target);

            if ($result){
                mysqli_stmt_bind_param($result, "ssss", $dateTime, $title, $image, $category);
                mysqli_stmt_execute($result);
                $last_id = mysqli_insert_id($connectingDB);
                $_SESSION["SuccessMessage"] = "Photo ".$title." added successfully";
            }
            else{
                $_SESSION["ErrorMessage"] = "Something went wrong! Try again!";
            }
        }
    }
?>

<!doctype html>
<html class="no-js" lang="zxx">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Cryjaxx Admin | Gallery </title>
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
                                        <li><a href="dashboard.php">Dashboard</a></li>
                                        <li><a href="admin-musics.php">Musics</a></li>
                                        <li><a href="admin-tours.php">Tours</a></li>
                                        <li><a href="admin-posts.php">Posts</a></li>
                                        <li><a href="admin-gallery.php">Gallery</a></li>
                                        <li><a href="index.php">Cryjaxx</a></li>
                                        <li><a href="logout.php">LogOut</a></li>
                                        <li><a href="admin.php" style="color: #27aae1;">Admin <i class="fas fa-user-circle"></i></a></li>
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
    <!-- Header End -->
</header>
<main>
    <!-- slider Area Start-->
    <section class="razo-music-charts-area section-padding-80 jarallax">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <article class="blog_item" style="padding: 20px; background-color: #f6faff">
                        <div class="blog-details">
                            <form role="form" action="admin-gallery.php" method="post" enctype="multipart/form-data">
                                <h3 style="font-weight: bold">Add New <span style="color: #27aae1">Photo</span></h3>
                                <hr class="colorgraph" style="margin: 16px">
                                <?php echo errorMessage(); echo successMessage(); ?>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="form-group">
                                            <b>Photo Title:</b>
                                            <input type="text" id="first_name" name="title" class="form-control input-lg" placeholder="Post title" tabindex="1">
                                        </div>
                                    </div>
                                </div>
                                <b>Image:</b>
                                <div class="row" style="padding-left: 15px; padding-right: 15px;">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="form-group">
                                            <input type="file" class="custom-file-input" name="image" id="imageSelect">
                                            <label for="imageSelect" class="custom-file-label">Select Image</label>
                                        </div>
                                    </div>
                                </div>
                                <b>Category:</b>
                                <div class="row" style="padding-left: 15px; padding-right: 15px;">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="form-group">
                                            <select style="width:200px;" name="category">
                                                <option value="0">Choose category</option>
                                                <option value="All">All</option>
                                                <option value="nature">Rage of the Rampage</option>
                                                <option value="human">China Tour 2019</option>
                                                <option value="country">Colorday Festival</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div style="height: 20px"></div>
                                <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit" name="publish_image">Publish</button>
                            </form>
                        </div>
                    </article>
                </div>
                <div class="col-lg-4">
                    <div class="trending-news-area mb-50">
                        <!-- Section Heading -->
                        <div class="section-heading" style="margin-bottom: 20px">
                            <h2 style="font-size: 24px">Latest Releases</h2>
                        </div>
                        <?php
                        global $connectingDB;
                        $sql= "SELECT * FROM musics m ORDER BY m.id desc limit 0, 2;";
                        $result = mysqli_query($connectingDB, $sql);
                        while ($DataRows = mysqli_fetch_array($result)) {
                            $id        = $DataRows[0];
                            $title     = $DataRows['music_title'];
                            $producers = $DataRows['music_producers'];
                            $image     = $DataRows['music_image'];
                            ?>
                            <!-- Featured Post Area -->
                            <div class="featured-post-area small-featured-post bg-img bg-overlay mb-30" style="background-image: url(upload<?php echo '/'.$image; ?>);">
                                <!-- Post Overlay -->
                                <div class="post-overlay">
                                    <div class="post-meta">
                                        <a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> <?php echo $producers; ?></a>
                                        <a href="#"><i class="fa fa-music" aria-hidden="true"></i> Music</a>
                                    </div>
                                    <a href="admin-musics.php" class="post-title"><?php echo $title; ?></a>
                                </div>
                            </div>
                            <?php
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </section>
            <div class="alime-portfolio-area clearfix">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <!-- Projects Menu -->
                            <div class="alime-projects-menu">
                                <div class="portfolio-menu text-center">
                                    <button class="btn active" data-filter="*">All</button>
                                    <button class="btn" data-filter=".human">Cryjaxx China Tour</button>
                                    <button class="btn" data-filter=".nature">Rage of the Rampage</button>
                                    <button class="btn" data-filter=".country">Colorday Festival</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row alime-portfolio">

                        <?php
                            global $connectingDB;

                            $sql= "SELECT * FROM gallery g ORDER BY g.id desc;";
                            $result = mysqli_query($connectingDB, $sql);

                            while ($DataRows = mysqli_fetch_array($result)) {
                            $id        = $DataRows[0];
                            $category  = $DataRows['category'];
                            $image     = $DataRows['photo_image'];
                        ?>

                        <!-- Single Gallery Item -->
                        <div class="col-12 col-sm-6 col-lg-3 single_gallery_item <?php echo $category; ?> mb-30 wow fadeInUp" data-wow-delay="100ms">
                            <div class="single-portfolio-content">
                                <img src="upload/<?php echo $image; ?>" alt="">
                                <div class="hover-content">
                                    <div class="row">
                                        <div class="col-12 text-center" style="padding-top: 40%;">
                                            <a href="deleteImage.php?id=<?php echo $id;?>"><button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn1" type="submit">Delete</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Music Charts Area End -->
</main>
<section class="follow-area clearfix">
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