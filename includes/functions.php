<?php
    $connectingDB = mysqli_connect("localhost","xhiti", "", "cryjaxx");
    if(mysqli_connect_errno()){
        echo "Failed to connect".mysqli_connect_errno();
    }

    function confirmLogin(){
        if (isset($_SESSION['username'])){
            return true;
        }
        else{
            $_SESSION['ErrorMessage'] = "Login Required!";
            header("Location: login.php");
            $_SESSION['ErrorMessage'] = "Login Required!";
        }
    }
?>
