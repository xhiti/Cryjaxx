<?php
    $connectingDB = mysqli_connect("localhost","xhiti", "", "cryjaxx");
    if(mysqli_connect_errno()){
        echo "Failed to connect".mysqli_connect_errno();
        //problem connecting database cryjaxx
    }
?>
