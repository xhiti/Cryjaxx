<?php require_once("includes/database.php"); ?>
<?php require_once("includes/functions.php"); ?>
<?php require_once("includes/sessions.php"); ?>
<?php $_SESSION['TrackingURL'] = $_SERVER["PHP_SELF"]; ?>
<?php
    global $user_id;
    confirmLogin();
?>

<?php
    if (isset($_POST["publish_tour"])){
        $username = $_SESSION['username'];
        $sql      = "select * from admins where username = '$username'";
        $result   = mysqli_query($connectingDB, $sql);
        $row      = mysqli_fetch_array($result);
        $user_id  = $row[0];

        $tour        = $_POST['tour'];
        $location    = $_POST["location"];
        $image       = $_FILES["image"]["name"];
        $target      = "upload/".basename($_FILES["image"]["name"]);
        $description = $_POST["description"];

        $dateTime = date('y-m-d');

        if (!isset($image)){
            $_SESSION["ErrorMessage"] = "Image can't be empty!";
        }

        if (empty($tour)){
            $_SESSION["ErrorMessage"] = "Tour Name can't be empty!";
        }
        elseif (strlen($tour) < 6){
            $_SESSION["ErrorMessage"] = "Tour Name should be greater than 6 characters!";
        }
        elseif (empty($description)){
            $_SESSION["ErrorMessage"] = "Description can't be empty!";
        }
        else{
            $query = "insert into tours(date_time, tour_name, tour_location, tour_image, tour_description) values (?, ?, ?, ?, ?)";
            $result = mysqli_prepare($connectingDB, $query);
            move_uploaded_file($_FILES["image"]["tmp_name"], $target);

            if ($result){
                mysqli_stmt_bind_param($result, "sssss", $dateTime, $tour, $location, $image, $description);
                mysqli_stmt_execute($result);
                $_SESSION["SuccessMessage"] = "Music ".$tour." added successfully";
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
    <title>Cryjaxx Admin | Tours </title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/cryjaxx_page_logo.png">
    <!-- CSS here -->
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
<!-- Preloader Start -->
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
                            <form role="form" action="admin-tours.php" method="post" enctype="multipart/form-data">
                                <h3 style="font-weight: bold">Add New <span style="color: #27aae1">Tour</span></h3>
                                <hr class="colorgraph" style="margin: 16px">
                                <?php echo errorMessage(); echo successMessage(); ?>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="form-group">
                                            <b>Tour Name:</b>
                                            <input type="text" id="first_name" name="tour" class="form-control input-lg" placeholder="Tour name" tabindex="1">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="form-group">
                                            <b>Location:</b>
                                            <input type="text" id="first_name" name="location" class="form-control input-lg" placeholder="Location" tabindex="1">
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
                                <b>Description:</b>
                                <div class="row" style="padding-left: 15px; padding-right: 15px;">
                                    <textarea name="description" id="bio" class="form-control input-lg" placeholder="Tour description" tabindex="10"></textarea>
                                </div>
                                <div style="height: 20px"></div>
                                <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit" name="publish_tour">Publish</button>
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
                        $sql= "SELECT * FROM musics m ORDER BY m.id desc limit 0, 3;";
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
            <div class="row">
                <div class="col-lg-8 posts-list">
                    <div class="single-post">
                        <h2 style="font-weight: bold">All <span style="color: #27aae1">Cryjaxx</span> Tours</h2>
                        <p><i class="fas fa-exclamation-circle"></i> <strong style="color: #27aae1">Note: </strong><br>Here are all tours of Cryjaxx. <br><strong>Administrator</strong> can see all tours and has the power to delete a tour if it's needed for privacy or content reasons!</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="blog_right_sidebar">
                        <aside class="single_sidebar_widget search_widget">
                            <form action="admin-tours.php">
                                <div class="form-group">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Search Keyword" name="Search" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Keyword'">
                                        <div class="input-group-append">
                                            <button class="btns" type="button"><i class="ti-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit" name="SearchButton">Search</button>
                            </form>
                        </aside>
                    </div>
                </div>
            </div>
            <section class="tours spad">
                <div class="container">
                    <div class="row">
                        <?php
                            global $connectingDB;
                            $no_tours = 0;

                            // SQL query when Searh button is active
                            if(isset($_GET["SearchButton"])){
                                $Search = $_GET["Search"];
                                $sql = "SELECT * FROM tours WHERE tour_name LIKE '%{$Search}%' OR tour_location LIKE '%{$Search}%'; ";
                                $result = mysqli_query($connectingDB, $sql);
                            }
                            else{
                                $sql= "SELECT * FROM tours t ORDER BY t.id desc;";
                                $result = mysqli_query($connectingDB, $sql);
                            }

                            while ($DataRows = mysqli_fetch_array($result)) {
                            $id             = $DataRows[0];
                            $name           = $DataRows['tour_name'];
                            $location       = $DataRows['tour_location'];
                            $description    = $DataRows['tour_description'];
                            $image          = $DataRows['tour_image'];
                            $no_tours++;
                        ?>

                                <div class="col-lg-6 order-lg-<?php echo $no_tours; ?>">
                                    <div class="tours__item__text">
                                        <h2><?php echo $name; ?></h2>
                                        <div class="tours__text__widget">
                                            <ul>
                                                <li>
                                                    <i class="fa fa-map-marker"></i>
                                                    <?php echo $location; ?>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tours__text__desc">
                                            <p><?php echo $description; ?></p>
                                        </div>
                                        <div class="row">
                                            <div class="col-12 text-center">
                                                <a href="deleteTour.php?id=<?php echo $id;?>"><button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn1" type="submit">Delete</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 order-lg-<?php echo $no_tours + 1; ?>">
                                    <div class="tours__item__pic">
                                        <img src="upload<?php echo '/'.$image; ?>" alt="">
                                    </div>
                                </div>
                            <?php } ?>
                    </div>
                </div>
            </section>
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
<div class="footer-area">
    <div class="container">
        <div class="footer-top footer-padding">
            <div class="row justify-content-between">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div class="single-footer-caption mb-50">
                        <div class="single-footer-caption mb-30">
                            <!-- logo -->
                            <a href="#" class="footer-logo"><img src="assets/img/cryjaxx_black.png" alt=""></a>
                            <!-- Footer Content -->
                            <div class="footer-content">
                                <!-- Single Contact Info -->
                                <!-- Single Contact Info -->
                                <div class="single-footer-caption mt-20 ml-20">
                                    <div class="footer-tittle">
                                        <ul>
                                            <li><a href="#"> DJ/Producer Duo 🇦🇱 Albania </a></li>
                                            <li><a href="#">contact@cryjaxx.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <h4 style="padding-left: 20px">Follow & Join Us</h4><br>
                                <div class="single-contact-info d-flex" style="padding-left: 20px">
                                    <div class="row">
                                        <ul class="social-network social-circle">
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
                                <li><a href="#">News & Articles</a></li>
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
<!-- Footer End-->
</footer>

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