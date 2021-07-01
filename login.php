<?php require_once("includes/database.php"); ?>
<?php require_once("includes/sessions.php"); ?>
<?php require_once("includes/login_handler.php"); ?>

<!DOCTYPE html>
<html lang="en">
<head>
	<title>Cryjaxx Admin | LogIn </title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" type="image/x-icon" href="assets/img/cryjaxx_page_logo.png">
	<link rel="stylesheet" type="text/css" href="login/vendor/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="login/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="login/fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
	<link rel="stylesheet" type="text/css" href="login/vendor/animate/animate.css">
	<link rel="stylesheet" type="text/css" href="login/vendor/css-hamburgers/hamburgers.min.css">
	<link rel="stylesheet" type="text/css" href="login/vendor/select2/select2.min.css">
	<link rel="stylesheet" type="text/css" href="login/css/util.css">
	<link rel="stylesheet" type="text/css" href="login/css/main.css">
    <link rel="stylesheet" href="assets/css/slick.css">
    <link rel="stylesheet" href="assets/css/slicknav.css">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/css/owl.carousel.min.css">
	<link rel="stylesheet" href="assets/css/flaticon.css">
	<link rel="stylesheet" href="assets/css/animate.min.css">
	<link rel="stylesheet" href="assets/css/magnific-popup.css">
	<link rel="stylesheet" href="assets/css/fontawesome-all.min.css">
	<link rel="stylesheet" href="assets/css/themify-icons.css">
	<link rel="stylesheet" href="assets/css/nice-select.css">
	<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
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
<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
				<form class="login100-form validate-form" action="login.php" method="post">
					<span class="login100-form-title p-b-55">
						Login
					</span>
                    <?php
                        echo errorMessage();
                        echo successMessage();
                    ?>
					<div class="wrap-input100 validate-input m-b-16" data-validate = "Username is required!">
						<input class="input100" style="padding: 0px 60px!important;" type="text" name="username" placeholder="Username">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<span class="lnr lnr-user"></span>
						</span>
					</div>
					<div class="wrap-input100 validate-input m-b-16" data-validate = "Password is required!">
						<input class="input100" style="padding: 0px 60px!important;" type="password" name="password" placeholder="Password">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<span class="lnr lnr-lock"></span>
						</span>
					</div>
					<div class="container-login100-form-btn p-t-25">
						<button class="login100-form-btn" name="login">
							Login
						</button>
					</div>
					<div class="container-login100-form-btn p-t-25">
						<img src="assets/img/cryjaxx_black.png" style="width: 250px; height: 75px">
					</div>
					<div class="text-center w-full p-t-115" style="padding-top: 50px!important;">
						<span class="txt1" style="color: #010E21; font-weight: bold">Cryjaxx <span style="color: #27aae1">Admin</span></span>
					</div>
				</form>
			</div>
		</div>
	</div>
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
<script src="./assets/js/plugins.js"></script>
<script src="./assets/js/main.js"></script>
<script src="login/vendor/jquery/jquery-3.2.1.min.js"></script>
<script src="login/vendor/bootstrap/js/popper.js"></script>
<script src="login/vendor/bootstrap/js/bootstrap.min.js"></script>
<script src="login/vendor/select2/select2.min.js"></script>
<script src="assets/js/slick.min.js"></script>
<script src="login/js/main.js"></script>
</body>
</html>