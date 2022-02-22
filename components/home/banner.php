<?php if( have_rows('banner') ):
while( have_rows('banner') ): the_row(); 

$title = get_sub_field('title');
$first_button_name = get_sub_field('first_button_name');
$first_button_link = get_sub_field('first_button_link');
$second_button_name = get_sub_field('second_button_name');
$second_button_link = get_sub_field('second_button_link');
?>
<section class="home-banner">
  <div class="container">
    <div class="home-banner-text">
      <h1><?=$title?></h1>
      
      <div>
        <a href="<?=$first_button_link?>" class="cta">
          <?=$first_button_name?>
        </a>

        <?php if ($second_button_name) { ?> 
          <a href="<?=$second_button_link?>" class="cta-alt">
            <?=$second_button_name?>
          </a>  
        <? } ?>
      </div>

      <img 
        src="<?=get_template_directory_URI()?>/img/src/brand_white.svg"
        alt="Drumonds Cleaning Brand"
      />
    </div>

    <div class="home-banner-img">
      <img 
        src="<?=get_template_directory_URI()?>/img/src/banner.svg"
        alt="Drumonds Cleaning"
      />
    </div>
  </div>

  <img 
    src="<?=get_template_directory_URI()?>/img/src/pattern_heavy.svg"
    class="home-banner-pattern" 
    alt="Drumonds Cleaning Pattern"
  />
</section>
<?php endwhile; ?>
<?php endif; ?>
