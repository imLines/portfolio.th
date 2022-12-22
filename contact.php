<?php
require 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();


//NEED TO FILTER ALL VAR OF POST FOR PROTECT

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


$mail = new PHPMailer(true);
$emailRecipient = $_POST['email'];
$name = $_POST['name'];
$message = $_POST['message'];

try {
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                     
    $mail->isSMTP();                                         
    $mail->Host       = $_ENV['HOST'];                   
    $mail->SMTPAuth   = true;                                 
    $mail->Username   = $_ENV['EMAIL_HOST'];                   
    $mail->Password   = $_ENV['PASS_EMAIL'];                              
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;          
    $mail->Port       = $_ENV['HOST_SMTP'];                                    
    $mail->setFrom($_ENV['EMAIL_HOST'], 'Tony-host');
    $mail->addAddress($_ENV['PASS_EMAIL_PERSO'], 'Tony-perso');    
    $mail->isHTML(false);                                 
    $mail->Subject = 'Contact via portfolio';
    $mail->Body    = $message.' ######send by '.$name.' : '.$emailRecipient;
    // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Votre message à bien été envoyé. Je vous répondrai dans les meilleurs délais.';
} catch (Exception $e) {
    echo "Le message ne peut pas être envoyer. Mailer Error: {$mail->ErrorInfo}";
}






