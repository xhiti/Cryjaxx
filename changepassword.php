<?php require_once("includes/database.php"); ?>
<?php require_once("includes/functions.php"); ?>
<?php require_once("includes/sessions.php"); ?>
<?php
    global $connectingDB;
    global $password;

    $username = $_SESSION['username'];
    $sql = "select * from admins where username = '$username'";
    $result = mysqli_query($connectingDB, $sql);
    $row = mysqli_fetch_array($result);

    if (isset($_POST["change_pass"])) {

        $new_password = strip_tags($_POST["new_password"]);
        $new_confirm_password = strip_tags($_POST["new_confirm_password"]);

        $dateTime = date('y-m-d');

        if (empty($new_password) || empty($new_confirm_password)){
            $_SESSION["ErrorMessage"] = "All fields must be filled out!";
        }
        elseif (strlen($new_password) < 5){
            $_SESSION["ErrorMessage"] = "New password should be greater than 5 characters!";
        }
        elseif ($new_password !== $new_confirm_password){
            $_SESSION["ErrorMessage"] = "New password and Confirm password should match!";
        }
        elseif (preg_match('/[^A-Za-z0-9]/', $new_password)){
            $_SESSION["ErrorMessage"] = "Your password can contain only english characters and numbers!";
        }
        else{
            $new_password = md5($new_password);

            $sql = "UPDATE admins SET password  = '$new_password' WHERE username= '$username'";
            $result = mysqli_query($connectingDB, $sql);

            if ($result){
                $_SESSION["SuccessMessage"] = "Password changed successfully!";
                header("location: login.php");
            }
            else{
                $_SESSION["ErrorMessage"] = "Something went wrong! Try again!";
            }
            mysqli_stmt_close($result);
            mysqli_close($connectingDB);
        }
    }
?>

<!doctype html>
<html class="no-js" lang="zxx">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Cryjaxx Admin | Change Password </title>
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
    <style>
        #box {
            width: 400px;
            margin: 10% auto;
            text-align: center;
            background:rgba(255,255,255,1);
            padding:20px 50px;
            box-sizing:border-box;
            box-shadow:0 3px 12px rgba(0,0,0,0.9);
            border-radius:2%
        }
        #box h1 {
            margin-bottom: 1.5em;
            font-size: 30px;
            color: #484548;
            font-weight: 100;
        }
        #box h1 span, small {
            display:block;
            font-size: 14px;
            color: #989598;
        }
        #box small{ font-style: italic; font-size: 11px;}
        #box form p { position: relative; }

        #box .password {
            width: 90%;
            padding: 15px 12px;
            margin-bottom: 5px;
            border: 1px solid #e5e5e5;
            border-bottom: 2px solid #ddd;
            background: rgba(255,255,255,0.2) !important;
            color: #555;
        }
        #box .password + .unmask {
            position: absolute;
            right: 8%;
            top: 15px;
            width: 25px;
            height: 25px;
            background: transparent;
            border-radius: 50%;
            cursor: pointer;
            border: none;
            font-family: 'fontawesome';
            font-size: 14px;
            line-height: 24px;
            -webkit-appearance: none;
            outline: none;
        }
        #box .password + .unmask:before {
            content: "\f06e";
            position:absolute;
            top:0; left:0;
            width: 25px;
            height: 25px;
            background: rgba(205,205,205,0.2);
            z-index:1;
            color:#aaa;
            border:2px solid;
            border-radius: 50%;
        }
        #box .password[type="text"] + .unmask:before {
            content:"\f070";
            background: rgba(105,205,255,0.2);
            color:#06a
        }
        #valid{
            font-size:12px;
            color:#daa;
            height:15px
        }
        #strong{
            height:20px;
            font-size:12px;
            color:#daa;
            text-transform:capitalize;
            background:rgba(205,205,205,0.1);
            border-radius:5px;
            overflow:hidden
        }

        #strong span{
            display:block;
            box-shadow:0 0 0 #fff inset;
            height:100%;
            transition:all 0.8s
        }
        #strong .weak{
            box-shadow:5em 0 0 #daa inset;
        }
        #strong .medium{
            color:#da6;
            box-shadow:10em 0 0 #da6 inset
        }
        #strong .strong{
            color:#595;
            box-shadow:50em 0 0 #ada inset
        }
    </style>
</head>
<body style="background-image: url('assets/img/cryjaxx_home3.jpg')">
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
<main>
    <section class="contact-section" style="padding: 0!important;">
        <div class="container-contact100" style="background-image: url('assets/img/cryjaxx_home3.jpg')">
            <div class="wrap-contact100" style="background-image: url('assets/img/cryjaxx_home3.jpg')">
                <div id="box">
                    <form id="myform-search" action="changepassword.php" method="post" autocomplete="off" >
                        <h1 style="font-weight: bold">Change Password <span style="font-weight: bold">choose a good one!</span></h1>
                        <?php echo errorMessage(); echo successMessage(); ?>
                        <div class="wrap-input100 validate-input" data-validate="New Password is required">
                            <label class="label-input100" for="name">New Password</label>
                            <input id="name" style="font-size: 16px!important;" class="input100" type="password" name="new_password" placeholder="Enter your new password...">
                            <span class="focus-input100"></span>
                        </div>
                        <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                            <label class="label-input100" for="email">Confirm New Password</label>
                            <input id="email" style="font-size: 16px!important;" class="input100" type="password" name="new_confirm_password" placeholder="Enter confirmation password...">
                            <span class="focus-input100"></span>
                        </div>
                        <div class=" row col-md-12" style="padding: 0!important; margin: 0!important;">
                            <div class="col-xs-5 col-sm-5 col-md-5" style="padding: 0!important; margin-right: 0px!important;">
                                <a href="admin.php">
                                    <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit" style="padding: 18px 24px;">Cancel</button>
                                </a>
                            </div>
                            <div class="col-xs-2 col-sm-2 col-md-2"></div>
                            <div class="col-xs-5 col-sm-5 col-md-5" style="padding: 0!important; margin-left: 0px!important;">
                                <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit" style="padding: 18px 24px;" name="change_pass">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</main>
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