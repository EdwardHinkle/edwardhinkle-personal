<?php

header('Content-Type: text/javascript');

$dir = dirname(__FILE__) . '/js/custom/templates';
$files = scandir($dir);

$js = array(
		'templates' => array(),
		//'partials' => array(),
);

foreach ($files as $file_name) {
		//foreach (array('handlebars', 'partial') as $file_type) {
    foreach (array('handlebars') as $file_type) {
				if (strpos($file_name, '.' . $file_type) === false) {
						continue;
				}

				$template_name = basename($file_name, '.' . $file_type);
				$template = file_get_contents($dir . '/' . $file_name);
				$template = preg_replace('/\s+/', ' ', $template); // Remove whitespace

				if ($file_type == 'handlebars') {
						$js['templates'][$template_name] = $template;
				//} else {
						//$js['partials'][$template_name] = $template;
				}
		}
}

$output = 'var EHTemplates = ' . json_encode($js);

print $output;

?>