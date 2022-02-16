<?php
/**
 * Template Name: faq
 *
 * @package WordPress
 * @subpackage matheusFonseca
 * @since matheusFonseca
 */
get_header(); ?>

<section class="faq">
  <ul class="container">
  <?php query_posts( array( 'post_type' => 'questions', 'posts_per_page' => '-1' ) );  ?>
  <?php if ( have_posts() ) : ?>
  <?php while ( have_posts() ) : the_post(); ?>
    <li class="faq-card">
      <div class="faq-card-title">
        <strong><?=the_title()?></strong>

        <span></span>
      </div>

      <div class="faq-card-text"><?=the_content()?></div>
    </li>
  <?php endwhile; ?>
  <?php endif; ?>
  </ul>
</section>

<?php get_footer();