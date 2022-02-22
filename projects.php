<?php
/**
 * Template Name: projects
 *
 * @package WordPress
 * @subpackage matheusFonseca
 * @since matheusFonseca
 */
get_header(); ?>

<?php wp_reset_query();
include 'components/projects/index.php';
?>

<?php get_footer();