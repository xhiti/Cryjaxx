<?php
    global $connectingDB;

    if (isset($_POST['login'])){
        $username = $_POST['username'];
        $password = $_POST["password"];

        if (empty($username) || empty($password)){
            $_SESSION["ErrorMessage"] = "All fields must be filled out!";
        }
        elseif (strlen($password) < 5){
            $_SESSION["ErrorMessage"] = "Password should be greater than 5 characters!";
        }
        elseif (preg_match('/[^A-Za-z0-9]/', $password)){
            $_SESSION["ErrorMessage"] = "Your password can contain only english characters and numbers!";
        }
        else{
            $password = md5($_POST["password"]);
            $check_database_query = mysqli_query($connectingDB, "select * from admins where username = '$username' AND password = '$password'");
            $check_login_query = mysqli_num_rows($check_database_query);

            if($check_login_query == 1){
                $row = mysqli_fetch_array($check_database_query);
                $username = $row['username'];
                $user_id  = $row[0];

                //Session Informations
                $_SESSION['username'] = $username;
                $_SESSION['id']  = $user_id;

                header("location: dashboard.php");
                }
            else{
                $_SESSION["ErrorMessage"] = "Incorrect username or password!";
            }
        }
    }
?>