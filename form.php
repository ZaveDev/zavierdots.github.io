<?php 

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = 'zguadalupe@mail.valenciacollege.edu';
    $header = "From: ".$email;
    $txt "Email from ".$name.".\n\n".$message;

    mail($mailTo, $txt, $header);
    header("location: index.php?mailsend"); 

    
}

?>