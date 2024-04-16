<?php

//get data from form  
$name = $_POST['text'];
$email= $_POST['email'];
$message= $_POST['message'];
$subject = "Test d'e-mail avec PHP";


 // Affichage des données soumises par le formulaire
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
}
?>

    <script>
    
    alert('Votre message à bien été envoyé.')
    window.history.back();
    
    </script>
  


