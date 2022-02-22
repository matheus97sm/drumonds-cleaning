<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
?>

<footer class="footer">
  <div class="container">
    <div class="title">
      <h4 class="subtitle">
        <img 
          src="<?=get_template_directory_URI()?>/img/src/brand_green.svg" 
          alt="Drumonds Cleaning" 
        />
        <span>Everything you need to contact us</span>
      </h4>
      
      <h2>Contact</br> Us</h2>
    </div>

    <div class="footer-wrapper">
      <div class="footer-form">
        <?php echo do_shortcode('[contact-form-7 id="5" title="Form Footer"]'); ?>
      </div>

      <div class="footer-sitemap">
        <h3>Sitemap</h3>

        <?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu' => 'MenuTopo', 'menu_class' => 'nav-menu', 'menu_id' => 'primary-menu' ) ); ?>
      </div>

      <div class="footer-info">
        <h3>Contacts</h3>

        <?php if( have_rows('info', 29) ):
        while( have_rows('info', 29) ): the_row(); 

        $phone = get_sub_field('phone');
        $email = get_sub_field('email');
        $facebook = get_sub_field('facebook');
        $instagram = get_sub_field('instagram');
        ?>
        <div class="footer-info-contacts">
          <a href="tel:<?=$phone?>" target="_blank">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <use xlink:href="#tel"></use>
            </svg> 

            <span><?=$phone?></span>
          </a>
          
          <a href="tel:<?=$email?>" target="_blank">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <use xlink:href="#mail"></use>
            </svg> 

            <span><?=$email?></span>
          </a> 
        </div>

        <div class="footer-info-social">
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
        </div>
        <?php endwhile; ?>
        <?php endif; ?>
      </div>
    </div>
  </div>
</footer>

<div style="display: none;">
  <?php include 'svg.php'; ?>
</div>

<script src="<?=get_template_directory_URI()?>/app/app.js"></script>

<?php wp_footer(); ?>

</body>
</html>
