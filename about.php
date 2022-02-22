<?php
/**
 * Template Name: about
 *
 * @package WordPress
 * @subpackage matheusFonseca
 * @since matheusFonseca
 */
get_header(); ?>

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

      <a href="<?=$button_link?>" class="cta">
        <?=$button_name?>
      </a>
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

<?php if( have_rows('mission') ):
while( have_rows('mission') ): the_row(); 
$mission_title = get_sub_field('mission_title');
$mission_text = get_sub_field('mission_text');
$vision_title = get_sub_field('vision_title');
$vision_text = get_sub_field('vision_text');
$values_title = get_sub_field('values_title');
$values_text = get_sub_field('values_text');
?>
<section class="mission">
  <div class="container">
    <div class="mission-card">
      <h3><?=$mission_title?></h3>
      <p><?=$mission_text?></p>
    </div>
    
    <div class="mission-card">
      <h3><?=$vision_title?></h3>
      <p><?=$vision_text?></p>
    </div>
    
    <div class="mission-card">
      <h3><?=$values_title?></h3>
      <p><?=$values_text?></p>
    </div>
  </div>
</section>
<?php endwhile; ?>
<?php endif; ?>


<?php if( have_rows('projects') ):
while( have_rows('projects') ): the_row(); 
$title = get_sub_field('title');
$button_name = get_sub_field('button_name');
$button_link = get_sub_field('button_link');
?>
<style>
.about-projects {
  background-image: url('<?=get_template_directory_URI()?>/img/src/');
}
</style>

<section class="about-projects">
  <img
    src="<?=get_template_directory_URI()?>/img/src/pattern_light.svg" 
    alt="Drumonds Cleaning"
    class="inside-banner-img-pattern"
  />
  
  <div class="container">
    <h2><?=$title?></h2>
    <a href="<?=$button_link?>" class="cta cta-white">
      <?=$button_name?>
    </a>

    <img
      src="<?=get_template_directory_URI()?>/img/src/brand_purple.svg" 
      alt="Drumonds Cleaning"
      class="inside-banner-img-pattern"
    />
  </div>
</section>
<?php endwhile; ?>
<?php endif; ?>

<?php get_footer();