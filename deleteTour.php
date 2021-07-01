<?php require_once("includes/database.php"); ?>
<?php require_once("includes/functions.php"); ?>
<?php require_once("includes/sessions.php"); ?>

<?php confirmLogin(); ?>

<?php
    if (isset($_GET['id'])){
        $search_query_parameter = $_GET['id'];
        $user = $_SESSION['username'];
        $sql = "delete from tours where id = '$search_query_parameter'";
        $result = mysqli_query($connectingDB, $sql);

        if ($result){
            $_SESSION["SuccessMessage"] = "Tour deleted successfully!";
            header("Location: admin-tours.php");
        }
        else{
            $_SESSION["ErrorMessage"] = "Something went wrong! Try again!";
            header("Location: admin-tours.php");
        }
    }
?>