<?php
/**
 * Template Name: about
 *
 * @package WordPress
 * @subpackage matheusFonseca
 * @since matheusFonseca
 */
get_header(); ?>

<?php
include 'components/about/history.php';
include 'components/about/mission.php';
include 'components/about/projects.php';
include 'components/reviews/index.php';
?>

<?php get_footer();