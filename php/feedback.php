<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$uname = $_POST['uname'];
$email = $_POST['email'];
$msg = $_POST['msg'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';                                                                                            // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'tut_budet_tank@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '19734655643791a'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('tut_budet_tank@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('xander11rgn-cool@yandex.ru');     // Кому будет уходить письмо
//$mail->addAddress('ellen@example.com');               // еще адресаты
$mail->addReplyTo($email, $uname);                      // добавить возможность ответа
//$mail->addCC('cc@example.com');                       // для копий
//$mail->addBCC('bcc@example.com');                     // для скрытых копий
//$mail->addAttachment('/var/tmp/file.tar.gz');         // добавить вложения
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка через обратную связь сайта';
$mail->Body =  "<p style='color:tomato; font-size: 18px'>$uname оставил/-а заявку на проведение мероприятия!<br>" .
    "<b>Текст заявки:</b><br><br>" .
    "<q><i>$msg</i></q><br><br>" .
    "Свяжитесь с клиентом в кратчайшие сроки по адресу $email.</p>";
$mail->AltBody = '';
//$mail->send();
if (!$mail->send()) {
    echo 'Error';
} else {

    feedbackDB($uname, $email, $msg);

    echo 'Success';
}

function feedbackDB($uname, $email, $msg)
{
    $servername = "localhost";
    $username = "root";
    $password = "root";
    //PDO
    try {
        $conn = new PDO("mysql:host=$servername; dbname=whitepalace", $username, $password);
        // echo "Connection successful";
        $query = "INSERT INTO feedback (username, email, message) VALUES (:uname, :email, :msg)";
        $stmt =$conn->prepare($query);
        $stmt->execute(['uname' => $uname, 'email' => $email, 'msg' => $msg]);
        $conn = null;
        $stmt = null;
    } catch (PDOException $e) {
        echo "Connection failed " . $e->getMessage();
    }
};
