<?php
sleep(3);

$filename ='../data.json';
$error = '';

$name = trim($_POST['name']);
$phone = trim($_POST['phone']);
if (!preg_match('/[а-яА-ЯёЁ]/', $name)) {  
  $error = 'Имя должно быть записанно кириллицей.';
} else if (!preg_match('/^\+{1}7{1}9{1}[0-9]{9}$/', $phone)) {
  $error = 'Номер записан неверно.';
}

if ($error === '') {
  $data = [
    'timestamp' => time(),
    'name' => $name,
    'phone' => $phone
  ];
  $json = json_encode($data, JSON_UNESCAPED_UNICODE);
  $payload = file_exists($filename) ? ",{$json}]" : "[{$json}]"; 
  $fileHandler = fopen($filename, "c");
  fseek($fileHandler, -1, SEEK_END);
  fwrite($fileHandler, $payload);
  fclose($fileHandler);
}

echo $error;