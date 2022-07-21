<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\helpers\App;

return [
    '*' => [
        'aliases' => [
            '@web' => getenv('PRIMARY_SITE_URL'),
        ],

        'allowAdminChanges' => false,
        'allowedFileExtensions' => ['jpg', 'png', 'jpeg', 'gif', 'svg', 'mp4', 'pdf', 'zip', 'csv'],
        'allowUpdates' => false,
        'cacheDuration' => false,

        'custom' => [
            'craftEnv' => getenv('ENVIRONMENT'),
            'dominantColor' => null,
        ],

        'defaultTokenDuration' => 'P2W',
        'defaultSearchTermOptions' => [
            'subLeft' => true,
            'subRight' => true,
        ],
        'devMode' => true,
        'disallowRobots' => true,
        'errorTemplatePrefix' => '_pages/errors/',
        'generateTransformsBeforePageLoad' => true,
        'limitAutoSlugsToAscii' => true,
        'maxRevisions' => 5,
        'omitScriptNameInUrls' => true,
        'securityKey' => App::env('SECURITY_KEY'),
    ],

    'production'  => [
        'devMode' => false,
        'disallowRobots' => false,
        'disabledPlugins' => [

        ],
    ],

    'staging'  => [
        'testToEmailAddress' => getenv('TEST_EMAIL_ADDRESS') ?: null,
    ],

    'dev'  => [
        'allowAdminChanges' => true,
        'allowUpdates' => true,
        'enableTemplateCaching' => false,
        'testToEmailAddress' => getenv('TEST_EMAIL_ADDRESS') ?: null,
        'disabledPlugins' => [
            'seomatic', // for better performance measuring
        ],
    ],
];
