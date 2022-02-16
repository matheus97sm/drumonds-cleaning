<?php
/**
 * The default template for displaying content
 *
 * Used for both single and index/archive/search.
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
?>

<?php if (is_single() || wp_get_post_parent_id() == 17) { ?>

<section class="inside-content">
	<div class="inside-content-featured-img">
		<img src="<?=catch_that_image(1)?>" alt="<?=the_title()?>" />
	</div>

	<div class="container">
		<?=the_content()?>
	</div>
</section>

<?php } else { ?>

<a href="<?=the_permalink()?>" class="blog-card">
	<div class="blog-card-img">
		<img src="<?=catch_that_image(2)?>" alt="<?=the_title()?>" />
	</div>

	<div class="home-blog-text">
		<span><?=the_date()?></span>

		<h4><?=the_title()?></h4>
		<p><?=the_field('resume')?></p>

		<strong>read more</strong>
	</div>
</a>

<?php } ?>