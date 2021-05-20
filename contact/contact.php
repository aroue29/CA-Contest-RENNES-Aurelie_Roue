<?php
  if( file_exists($php_mail_form_library = '../libraries/php-mail-form' )) {
    include( $php_mail_form_library );
  } else {
    die( 'Impossible de charger cette librairie !');
  }
  $contactform = new PHP_Mail_Form;
  $contactform->ajax = true;

  $contactform->to = 'contact@example.com';
  $contactform->from_name = $_POST['name'];
  $contactform->from_email = $_POST['email'];
  $contactform->subject = $_POST['subject'];

  $contactform->add_message( $_POST['name'], 'From');
  $contactform->add_message( $_POST['email'], 'Email');
  $contactform->add_message( $_POST['message'], 'Message', 10);

  echo $contactform->send();
?>