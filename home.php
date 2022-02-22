<?php
/**
 * Template Name: home
 *
 * @package WordPress
 * @subpackage matheusFonseca
 * @since matheusFonseca
 */
get_header(); ?>

<?php 
include 'components/home/banner.php'; 
include 'components/reviews/index.php'; 
include 'components/home/about.php';
include 'components/home/services.php';

wp_reset_query();
include 'components/projects/index.php';
wp_reset_query();

include 'components/home/blog.php';
?>

<?php get_footer();