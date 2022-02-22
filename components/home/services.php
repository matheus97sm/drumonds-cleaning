<?php if( have_rows('services') ):
while( have_rows('services') ): the_row(); 

$subtitle = get_sub_field('subtitle');
$title = get_sub_field('title');
$text = get_sub_field('text');
$first_button_name = get_sub_field('first_button_name');
$first_button_link = get_sub_field('first_button_link');
$second_button_name = get_sub_field('second_button_name');
$second_button_link = get_sub_field('second_button_link');
?>
<section class="home-services">
  <div class="container">
    <div class="home-services-wrapper">
      <?php
        $args = array(
          'post_parent' => 17,
          'post_type' => 'page',
          'orderby' => 'menu_order',
          'posts_per_page' => '4'
        );

        $child_query = new WP_Query( $args );
      ?>
      <?php while ( $child_query->have_posts() ) : $child_query->the_post(); ?>

      <a href="<?=the_permalink()?>" class="services-item">
        <img 
          src="<?=get_template_directory_URI()?>/img/src/housecleaning.png" 
          alt="Drumonds Cleaning" 
        />
        <h5><?=the_title()?></h5>
        <p><?=the_field('resume')?></p>
      </a>

      <?php endwhile; ?>
    </div>

    <div class="home-services-text">
      <h4 class="subtitle">
        <img 
          src="<?=get_template_directory_URI()?>/img/src/brand_green.svg" 
          alt="Drumonds Cleaning" 
        />
        <span><?=$subtitle?></span>
      </h4>
      <h2><?=$title?></h2>

      <div class="normal-text"><?=$text?></div>

      <div class="home-services-buttons">
        <a href="<?=$first_button_link?>" class="cta">
          <?=$first_button_name?>
        </a>

        <?php if ($second_button_name) { ?> 
          <a href="<?=$second_button_link?>" class="cta-alt">
            <?=$second_button_name?>
          </a>  
        <? } ?>
      </div>
    </div>
  </div>
</section>
<?php endwhile; ?>
<?php endif; ?>
