<?php
/**
 * The Header template for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
?>
<!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) & !(IE 8)]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->

<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

  <title><?php wp_title( '|', true, 'right' ); ?></title>

  <link rel="icon" type="image/png" href="<?=get_template_directory_URI()?>/img/favicon.png" />
  <link rel="profile" href="http://gmpg.org/xfn/11">
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="<?=get_template_directory_URI()?>/style.css" />

  <script>
    var base_URL = '<?=site_url()?>';
    var template_URL = '<?=get_template_directory_URI()?>';
  </script>

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

  <header class="header">
    <div class="header-right">
      <a class="header-img" href="<?=site_url()?>">
        <img 
          src="<?=get_template_directory_URI()?>/img/src/brand_header.svg" 
          alt="Drumonds Cleaning" 
        />
      </a>

      <div class="menu-button" data-menu="button">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="header-social">
        <?php if( have_rows('info', 29) ):
        while( have_rows('info', 29) ): the_row(); 

        $facebook = get_sub_field('facebook');
        $instagram = get_sub_field('instagram');
        ?>
        <?php if ($instagram) { ?> 
          <a href="<?=$instagram?>" target="_blank">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <use xlink:href="#instagram"></use>
            </svg> 
          </a>  
        <?php } ?>

        <?php if ($facebook) { ?> 
          <a href="<?=$facebook?>" target="_blank">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <use xlink:href="#facebook"></use>
            </svg> 
          </a>
        <?php } ?>
        <?php endwhile; ?>
        <?php endif; ?>
      </div>
    </div>
  </header>
  
  <nav class="menu" data-menu="menu">
    <?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu' => 'MenuTopo', 'menu_class' => 'nav-menu', 'menu_id' => 'primary-menu' ) ); ?>
  </nav>

  <?php if (!is_front_page() && get_the_ID() != 20) { ?>
    <section class="inside-banner">
      <div class="container">
        <div class="inside-banner-text">
          <h1><?=the_title()?></h1>
          <div><?=the_field('resume')?></div>
        </div>

        <div class="inside-banner-img">
          <img 
            src="<?=get_template_directory_URI()?>/img/src/brand_white.svg" 
            alt="Drumonds Cleaning"
            class="inside-banner-img-brand"
          />

          <img 
            src="<?=get_template_directory_URI()?>/img/src/pattern_heavy.svg" 
            alt="Drumonds Cleaning"
            class="inside-banner-img-pattern"
          />
        </div>
      </div>
    </section>
  <?php } ?>
