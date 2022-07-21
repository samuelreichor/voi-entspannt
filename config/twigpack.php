<?php
/**
 * Twigpack plugin for Craft CMS 3.x
 *
 * Twigpack is the conduit between Twig and webpack, with manifest.json &
 * webpack-dev-server HMR support
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2018 nystudio107
 */
return [
    '*' => [
        // Enforce Absolute URLs on includes
        'useAbsoluteUrl' => false,

        // The JavaScript entry from the manifest.json to inject on Twig error pages
        // This can be a string or an array of strings
        'errorEntry' => 'app.js',

        // Public server config
        'server' => [
            'manifestPath' => '@webroot/dist/',
            'publicPath' => '/',
        ],
    ],

    'production' => [
    ],

    'staging' => [
    ],

    'dev' => [
    ],
];
