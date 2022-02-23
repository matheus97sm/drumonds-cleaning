<?php wp_reset_query();
if( have_rows('about') ):
while( have_rows('about') ): the_row(); 

$subtitle = get_sub_field('subtitle');
$title = get_sub_field('title');
$text = get_sub_field('text');
?>
<section class="about">
  <div class="container">
    <div class="about-text">
      <h4 class="subtitle">
        <img 
          src="<?=get_template_directory_URI()?>/img/src/brand_green.svg" 
          alt="Drumonds Cleaning" 
        />
        <span><?=$subtitle?></span>
      </h4>
      <h2><?=$title?></h2>

      <div class="normal-text"><?=$text?></div>
    </div>

    <div class="about-img">
      <img 
        src="<?=get_template_directory_URI()?>/img/src/brand_vertical.svg" 
        alt="Drumonds Cleaning" 
      />
    </div>
  </div>
</section>
<?php endwhile; ?>
<?php endif; ?>
