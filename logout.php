<?php require_once("includes/database.php"); ?>
<?php require_once("includes/functions.php"); ?>
<?php require_once("includes/sessions.php"); ?>

<?php
    session_set_cookie_params(0);
    $_SESSION['user_id'] = '';
    $_SESSION['username'] = '';
    session_reset();
    session_unset();
    session_destroy();
    header("Location: login.php");
    //http_redirect("login.php");
?>
