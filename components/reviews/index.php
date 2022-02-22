<?php if( have_rows('reviews') ):
while( have_rows('reviews') ): the_row(); 

$subtitle = get_sub_field('subtitle');
$title = get_sub_field('title');
$text = get_sub_field('text');
$button_name = get_sub_field('button_name');
$button_link = get_sub_field('button_link');
?>
<section class="reviews">
  <div class="container">
    <div class="reviews-wrapper">
      <?php query_posts( array( 'post_type' => 'reviews', 'posts_per_page' => '9' ) );  ?>
      <?php if ( have_posts() ) : ?>
      <?php while ( have_posts() ) : the_post(); ?>

      <div class="review" data-stars="<?=the_field('stars')?>">
        <div class="review-header">
          <strong><?=the_title()?></strong>

          <div>
            <img src="<?=get_template_directory_URI()?>/img/src/star.svg" alt="Drumonds Cleaning reviews" />
            <img src="<?=get_template_directory_URI()?>/img/src/star.svg" alt="Drumonds Cleaning reviews" />
            <img src="<?=get_template_directory_URI()?>/img/src/star.svg" alt="Drumonds Cleaning reviews" />
            <img src="<?=get_template_directory_URI()?>/img/src/star.svg" alt="Drumonds Cleaning reviews" />
            <img src="<?=get_template_directory_URI()?>/img/src/star.svg" alt="Drumonds Cleaning reviews" />
          </div>
        </div>

        <div><?=the_content()?></div>        
      </div>

      <?php endwhile; ?>
      <?php endif; ?>
    </div>

    <div class="reviews-text">
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
  </div>
</section>
<?php endwhile; ?>
<?php endif; ?>