<?php
/**
 * Template Name: services
 *
 * @package WordPress
 * @subpackage matheusFonseca
 * @since matheusFonseca
 */
get_header(); ?>

<section class="services">
  <div class="container">
    <?php
      $args = array(
        'post_parent' => 17,
        'post_type' => 'page',
        'orderby' => 'menu_order',
        'posts_per_page' => '-1'
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
</section>

<?php get_footer();