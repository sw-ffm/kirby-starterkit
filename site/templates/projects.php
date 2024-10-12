<?php snippet('header') ?>

<h1><?= $page->title() ?></h1>
<?= $page->text() ?>
<br><br>
<?= $site->url() ?>
<?php if($file = $page->image('image.webp')): ?>
  <img src="<?= $file->url() ?>" alt="<?= $file->alt() ?>">
<?php endif ?>
<br><br>
<?= $message ?>
<br><br>
<?php var_dump($notes); ?>
<br><br>
<ul>
  <?php foreach($page->children() as $item): ?>
    <li><a href="<?= $item->url() ?>"><?= $item->title() ?></a></li>
  <?php endforeach ?>
</ul>
<?php snippet('footer') ?>
