<?php if( have_rows('projects', 20) ):
while( have_rows('projects', 20) ): the_row(); 

$subtitle = get_sub_field('subtitle');
$title = get_sub_field('title');
$text = get_sub_field('text');
$button_name = get_sub_field('button_name');
$button_link = get_sub_field('button_link');
?>
<section class="projects">
  <div class="container">
    <div class="projects-description">
      <div class="projects-text">
        <img 
          src="<?=get_template_directory_URI()?>/img/src/brand_horizontal.svg" 
          alt="Drumonds Cleaning" 
        />

        <h4><?=$subtitle?></h4>
        <h1><?=$title?></h1>

        <div><?=$text?></div>

        <?php if (is_front_page()) { ?> 
          <a href="<?=$button_link?>"><?=$button_name?></a>
        <?php } ?>
      </div>

      <div class="projects-img">
        <img 
          src="<?=get_template_directory_URI()?>/img/src/brand_projects.png" 
          alt="Drumonds Cleaning - Social Projects"
          class="projects-img-featured" 
        />

        <img 
          src="<?=get_template_directory_URI()?>/img/src/pattern_white.svg" 
          alt="Pattern Drumonds Cleaning"
          class="project-img-pattern"
        />
      </div>
    </div>

    <div class="projects-cards">
      <?php query_posts( array( 'post_type' => 'projects', 'posts_per_page' => '6' ) );  ?>
      <?php if ( have_posts() ) : ?>
      <?php while ( have_posts() ) : the_post(); ?>
        <div class="project-card">
          <div class="project-card-img">
            <img src="<?=catch_that_image(2)?>" alt="<?=the_title()?>" />
          </div>

          <div class="project-card-text">
            <?=the_content(get_the_ID())?>
            <img 
              src="<?=get_template_directory_URI()?>/img/src/quote.svg" 
              alt="Drumonds Cleaning - Social projects quote"
            />
          </div>
        </div>
      <?php endwhile; ?>
      <?php endif; ?>
    </div>

    <?php wp_reset_query();
    if (!is_front_page()) { ?>
      <div class="projects-carousel">
        <div data-carousel="wrapper"></div>
        <div data-carousel="thumbnails"></div>
      </div>
    <?php } ?>
  </div>
</section>
<?php endwhile; ?>
<?php endif; ?>
