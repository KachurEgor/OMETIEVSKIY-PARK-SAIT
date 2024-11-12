<?php



if($_POST)
    {
    $to = "darjakruglova0@gmail.com"; //КУДА ОТПРАВЛЯТЬ ПИСЬМО
    $subject = "Заказ консультации"; //ТЕМА
    $message = 'Данные с формы обратной связи
    Имя:'.$_POST['username'].
    '
    Телефон: ' .$_POST['userphone'];
   
    $headers .= "From: <vely.dum@gmail.com>\r\n"; // ОТ КОГО, ПРИДУМАЙТЕ ЯЩИК ИЛИ УКАЖИТЕ ПОЧТУ СВОЕГО САЙТА.
    $result = mail($to, $subject, $message);
  alert(result);
    if ($result){
        echo "<p>Сообщение успешно отправлено. Скоро Вам перезвонят</p>";
    }
    }
    