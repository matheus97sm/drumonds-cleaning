<?php
/**
 * Template Name: home
 *
 * @package WordPress
 * @subpackage matheusFonseca
 * @since matheusFonseca
 */
get_header(); ?>

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
        class="home-banner-img-pattern" 
        alt="Drumonds Cleaning Brand"
      />
    </div>

    <div class="home-banner-img">
      <img 
        src="<?=get_template_directory_URI()?>/img/src/banner.svg"
        class="home-banner-img-featured" 
        alt="Drumonds Cleaning"
      />

      <img 
        src="<?=get_template_directory_URI()?>/img/src/pattern_heavy.svg"
        class="home-banner-img-pattern" 
        alt="Drumonds Cleaning Pattern"
      />
    </div>
  </div>
</section>
<?php endwhile; ?>
<?php endif; ?>

<?php if( have_rows('reviews') ):
while( have_rows('reviews') ): the_row(); 

$subtitle = get_sub_field('subtitle');
$title = get_sub_field('title');
$text = get_sub_field('text');
$first_button_name = get_sub_field('first_button_name');
$first_button_link = get_sub_field('first_button_link');
?>
<section class="reviews">
  <div class="container">
    <div class="reviews-wrapper">
      <?php query_posts( array( 'post_type' => 'reviews', 'posts_per_page' => '9' ) );  ?>
      <?php if ( have_posts() ) : ?>
      <?php while ( have_posts() ) : the_post(); ?>

      <div class="review" data-stars="<?=the_field('stars')?>">
        <div>
          <h4><?=the_title()?></h4>
          <div class="review-stars"></div>
        </div>

        <p><?=the_content()?></p>        
      </div>

      <?php endwhile; ?>
      <?php endif; ?>
    </div>

    <div class="reviews-text">
      <h5>
        <img 
          src="<?=get_template_directory_URI()?>/img/src/brand_green.svg" 
          alt="Drumonds Cleaning" 
        />
        <span><?=$subtitle?></span>
      </h5>
      <h2><?=$title?></h2>

      <div class="normal-text"><?=$text?></div>

      <a href="<?=$first_button_link?>" class="cta">
        <?=$first_button_name?>
      </a>
    </div>
  </div>
</section>
<?php endwhile; ?>
<?php endif; ?>

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
      <h5>
        <img 
          src="<?=get_template_directory_URI()?>/img/src/brand_green.svg" 
          alt="Drumonds Cleaning" 
        />
        <span><?=$subtitle?></span>
      </h5>
      <h2><?=$title?></h2>

      <div class="normal-text"><?=$text?></div>

      <a href="<?=$button_link?>" class="cta">
        <?=$button_name?>
      </a>
    </div>

    <div class="home-about-buttons">
      <a href="<?=$social_link?>">
        <img 
          src="<?=get_template_directory_URI()?>/img/src/social.png" 
          alt="Know more about our social projects - Drumonds Cleaning" 
        />

        <h3><?=$social_title?></h3>
        <div><?=$social_text?></div>
      </a>

      <a href="<?=$history_link?>">
        <img 
          src="<?=get_template_directory_URI()?>/img/src/history.png" 
          alt="Know more about our history - Drumonds Cleaning" 
        />

        <h3><?=$history_title?></h3>
        <div><?=$history_text?></div>
      </a>

      <a href="<?=$mission_link?>">
        <img 
          src="<?=get_template_directory_URI()?>/img/src/mission.png" 
          alt="Know more about our mission - Drumonds Cleaning" 
        />

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
      <h5>
        <img 
          src="<?=get_template_directory_URI()?>/img/src/brand_green.svg" 
          alt="Drumonds Cleaning" 
        />
        <span><?=$subtitle?></span>
      </h5>
      <h2><?=$title?></h2>

      <div class="normal-text"><?=$text?></div>

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
    </div>
  </div>
</section>
<?php endwhile; ?>
<?php endif; ?>

<?php wp_reset_query();
include 'projects-content.php';
wp_reset_query(); ?>

<?php if( have_rows('blog') ):
while( have_rows('blog') ): the_row(); 

$subtitle = get_sub_field('subtitle');
$title = get_sub_field('title');
$text = get_sub_field('text');
$first_button_name = get_sub_field('first_button_name');
$first_button_link = get_sub_field('first_button_link');
$second_button_name = get_sub_field('second_button_name');
$second_button_link = get_sub_field('second_button_link');
?>
<section class="home-blog">
  <div class="container">
    <div class="home-blog-text">
      <h5>
        <img 
          src="<?=get_template_directory_URI()?>/img/src/brand_green.svg" 
          alt="Drumonds Cleaning" 
        />
        <span><?=$subtitle?></span>
      </h5>
      <h2><?=$title?></h2>

      <div class="normal-text"><?=$text?></div>

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
    </div>

    <div class="home-blog-wrapper">
      <img 
        src="<?=get_template_directory_URI()?>/img/src/pattern_light.svg" 
        alt="Drumonds Cleaning blog posts" 
        class="home-blog-pattern"
      />

      <div class="home-blog-carousel">
        <?php query_posts( array( 'post_type' => 'post', 'posts_per_page' => '6', 'cat' => '1' ) );  ?>
        <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post(); ?>

        <?php get_template_part( 'content', get_post_format() ); ?>
        
        <?php endwhile; ?>
        <?php endif; ?>
      </div>
    </div>
  </div>
</section>
<?php endwhile; ?>
<?php endif; ?>

<?php get_footer();