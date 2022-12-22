<?php
require 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

ini_set('display_errors', 'off');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

function valid_data($donnees){
    $donnees = trim($donnees);
    $donnees = stripslashes($donnees);
    $donnees = htmlspecialchars($donnees);
    return $donnees;
}

$emailRecipient = valid_data($_POST['email']);
$name = valid_data($_POST['name']);
$message = valid_data($_POST['message']);

if (!empty($name)
&& strlen($name) <= 20
&& !empty($emailRecipient)
&& filter_var($emailRecipient, FILTER_VALIDATE_EMAIL)){

    $mail = new PHPMailer(true);
    try {
        //SMTP DEBUG FOR DEVELOPMENT : SMTP::DEBUG_SERVER AND COMMENT init-set function
        $mail->SMTPDebug = 0;                 
        $mail->isSMTP();                                         
        $mail->Host       = $_ENV['HOST_SMTP'];                   
        $mail->SMTPAuth   = true;                                 
        $mail->Username   = $_ENV['EMAIL_HOST'];                   
        $mail->Password   = $_ENV['PASS_EMAIL_HOST'];                              
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;          
        $mail->Port       = $_ENV['PORT_SMTP'];                                    
        $mail->setFrom($_ENV['EMAIL_HOST'], 'Tony-host');
        $mail->addAddress($_ENV['EMAIL_PERSO'], 'Tony-perso');    
        $mail->isHTML(false);                                 
        $mail->Subject = 'Contact via portfolio';
        $mail->Body    = $message.' ######send by '.$name.' : '.$emailRecipient;
        $mail->send();
        echo 'Votre message à bien été envoyé. Je vous répondrai dans les meilleurs délais.';
    } catch (Exception $e) {
        http_response_code(500);
        echo "Désolé ce formulaire a rencontré un problème. Veuillez utiliser un autre moyen de contact.";
    }
    
}else{
    http_response_code(400);
    echo "Merci de rentrer des caractères valides.";
}












