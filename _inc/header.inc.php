<?php
$directory = $_SERVER['PHP_SELF'] == '/index.php' ? 'home' : 'interior '.str_replace('/', '', dirname($_SERVER['SCRIPT_NAME'])).'-pg';
$current_page = str_replace('.php', '', basename($_SERVER['SCRIPT_NAME']));
$page_class = $directory == '' ? $current_page : $directory.' '.$current_page;
?><!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="cleartype" content="on">
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="viewport" content="width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1">
  <link rel="shortcut icon" href="/favicon.ico">
  <link rel="stylesheet" href="/_assets/css/styles.css">
</head>
<body class="<?php echo $page_class; ?>">
  <section class="site-wrapper">