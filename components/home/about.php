<?php wp_reset_query();
if( have_rows('about') ):
while( have_rows('about') ): the_row(); 

$subtitle = get_sub_field('subtitle');
$title = get_sub_field('title');
$text = get_sub_field('text');
$button_name = get_sub_field('button_name');
$button_link = get_sub_field('button_link');
$social_title = get_sub_field('social_title');
$social_text = get_sub_field('social_text');
$social_link = get_sub_field('social_link');
$history_title = get_sub_field('history_title');
$history_text = get_sub_field('history_text');
$history_link = get_sub_field('history_link');
$mission_title = get_sub_field('mission_title');
$mission_text = get_sub_field('mission_text');
$mission_link = get_sub_field('mission_link');
?>
<section class="home-about">
  <div class="container">
    <div class="home-about-text">
      <h4 class="subtitle">
        <img 
          src="<?=get_template_directory_URI()?>/img/src/brand_green.svg" 
          alt="Drumonds Cleaning" 
        />
        <span><?=$subtitle?></span>
      </h4>
      <h2><?=$title?></h2>

      <div class="normal-text"><?=$text?></div>

      <a href="<?=$button_link?>" class="cta">
        <?=$button_name?>
      </a>
    </div>

    <div class="home-about-buttons">
      <a href="<?=$social_link?>">
        <span>
          <img 
            src="<?=get_template_directory_URI()?>/img/src/social.png" 
            alt="Know more about our social projects - Drumonds Cleaning" 
          />
        </span>

        <h3><?=$social_title?></h3>
        <div><?=$social_text?></div>
      </a>

      <a href="<?=$history_link?>">
        <span>
          <img 
            src="<?=get_template_directory_URI()?>/img/src/history.png" 
            alt="Know more about our history - Drumonds Cleaning" 
          />
        </span>

        <h3><?=$history_title?></h3>
        <div><?=$history_text?></div>
      </a>

      <a href="<?=$mission_link?>">
        <span>
          <img 
            src="<?=get_template_directory_URI()?>/img/src/mission.png" 
            alt="Know more about our mission - Drumonds Cleaning" 
          />
        </span>

        <h3><?=$mission_title?></h3>
        <div><?=$mission_text?></div>
      </a>

      <img 
        src="<?=get_template_directory_URI()?>/img/src/brand_vertical.svg" 
        alt="Drumonds Cleaning" 
      />
    </div>
  </div>
</section>
<?php endwhile; ?>
<?php endif; ?>
