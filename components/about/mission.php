<?php if( have_rows('mission') ):
while( have_rows('mission') ): the_row(); 
$mission_title = get_sub_field('mission_title');
$mission_text = get_sub_field('mission_text');
$vision_title = get_sub_field('vision_title');
$vision_text = get_sub_field('vision_text');
$values_title = get_sub_field('values_title');
$values_text = get_sub_field('values_text');
?>
<section class="mission">
  <div class="container">
    <div class="mission-card">
      <h3><?=$mission_title?></h3>
      <p><?=$mission_text?></p>
    </div>
    
    <div class="mission-card">
      <h3><?=$vision_title?></h3>
      <p><?=$vision_text?></p>
    </div>
    
    <div class="mission-card">
      <h3><?=$values_title?></h3>
      <p><?=$values_text?></p>
    </div>
  </div>
</section>
<?php endwhile; ?>
<?php endif; ?>
