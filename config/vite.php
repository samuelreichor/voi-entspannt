<?php

use craft\helpers\App;

return [
    '*' => [
        'useDevServer' => false,
        'manifestPath' => '@webroot/dist/manifest.json',
        'serverPublic' => App::env('PRIMARY_SITE_URL') . '/dist/',
        'errorEntry' => 'app.js',
        'cacheKeySuffix' => '',
        'devServerInternal' => '',
        'checkDevServer' => false,
        'includeReactRefreshShim' => false,
        'includeModulePreloadShim' => true,
        'criticalPath' => '@webroot/dist/criticalcss',
        'criticalSuffix' =>'_critical.min.css',
    ],

    'production'  => [
    ],

    'staging'  => [
    ],

    'dev'  => [
        'useDevServer' => true,
        'devServerPublic' => 'http://localhost:3000/',
    ],
];