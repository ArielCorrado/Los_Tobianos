<?php 
    
    $to = "jarielc2012@yahoo.com.ar";
    $name = utf8_decode($_POST["name"]);
    $msg = utf8_decode($_POST["msg"]);
    $email = $_POST["email"];
    
    
    $cabecera = "From: " . $name . " <$email>";
    // igual a poner $cabecera = "From: nombre <email@example.com>";
            
    $mail = mail($to, $name . " dejo un mensaje en biweb.com.ar", $msg, $cabecera);

    if ($mail) {
        header("Location: enviado.html");
    }

?>



