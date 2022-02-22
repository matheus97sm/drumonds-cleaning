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
      <h4 class="subtitle">
        <img 
          src="<?=get_template_directory_URI()?>/img/src/brand_green.svg" 
          alt="Drumonds Cleaning" 
        />
        <span><?=$subtitle?></span>
      </h4>
      <h2><?=$title?></h2>

      <div class="normal-text"><?=$text?></div>

      <div class="home-blog-buttons">
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
