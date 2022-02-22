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

	<div class="blog-card-text">
		<span><?=the_date()?></span>

		<h3><?=the_title()?></h3>
		<p><?=the_field('resume')?></p>

		<div>
			<strong>read more</strong> 
			<img src="<?=get_template_directory_URI()?>/img/src/arrow.svg" />
		</div>
	</div>
</a>

<?php } ?>