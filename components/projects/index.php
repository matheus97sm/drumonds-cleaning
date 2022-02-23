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

        <h3><?=$subtitle?></h3>
        <?php if (is_front_page()) { ?> 
        <h2><?=$title?></h2>
        <?php } else { ?> 
        <h1><?=$title?></h1>
        <?php } ?>

        <div class="normal-text"><?=$text?></div>

        <?php if (is_front_page()) { ?> 
          <a href="<?=$button_link?>" class="cta cta-white"><?=$button_name?></a>
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
          class="projects-img-pattern"
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
      <div class="projects-gallery">
        <h2>Some photos of <strong>our projects</strong></h2>

        <img 
          src="<?=get_template_directory_URI()?>/img/src/brand_white.svg" 
          alt="Drumonds Cleaning"
          class="projects-gallery-brand"
        />

        <div class="projects-gallery-wrapper">
          <div data-gallery="wrapper"></div>

          <div class="thumbnail-wrapper">
            <div data-gallery="thumbnails"></div>
          </div>

          <div class="projects-gallery-buttons">
            <button class="left"><img src="<?=get_template_directory_URI()?>/img/src/arrow.svg" alt="left" /></button>
            <button class="right"><img src="<?=get_template_directory_URI()?>/img/src/arrow.svg" alt="left" /></button>
          </div>
        </div>
      </div>
    <?php } ?>
  </div>
</section>
<?php endwhile; ?>
<?php endif; ?>
