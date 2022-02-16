<?php
/**
 * Template Name: blog
 *
 * @package WordPress
 * @subpackage matheusFonseca
 * @since matheusFonseca
 */
get_header(); ?>

<section class="home-blog">
  <div class="container">
    <?php query_posts( array( 'post_type' => 'post', 'posts_per_page' => '9', 'cat' => '1' ) );  ?>
    <?php if ( have_posts() ) : ?>
    <?php while ( have_posts() ) : the_post(); ?>

    <?php get_template_part( 'content', get_post_format() ); ?>
    
    <?php endwhile; ?>
    <?php endif; ?>
  </div>
</section>

<?php get_footer();