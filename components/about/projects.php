<?php if( have_rows('projects') ):
while( have_rows('projects') ): the_row(); 
$title = get_sub_field('title');
$button_name = get_sub_field('button_name');
$button_link = get_sub_field('button_link');
?>
<style>
.about-projects {
  background-image: url('<?=get_template_directory_URI()?>/img/src/about_social.jpg');
}
</style>

<section class="about-projects">
  <img
    src="<?=get_template_directory_URI()?>/img/src/pattern_light.svg" 
    alt="Drumonds Cleaning"
    class="about-projects-pattern"
  />
  
  <div class="container">
    <h2><?=$title?></h2>
    <a href="<?=$button_link?>" class="cta cta-white">
      <?=$button_name?>
    </a>

    <img
      src="<?=get_template_directory_URI()?>/img/src/brand_purple.svg" 
      alt="Drumonds Cleaning"
      class="about-projects-brand"
    />
  </div>
</section>
<?php endwhile; ?>
<?php endif; ?>
