# A New beatiful Massage Website made with Craft CMS

## 🗄️ Create Locale DB
Create a new empty MySQL database for the project using your favourite database management tool (TablePlus, Sequel Pro etc.).

- Default Character Set: `utf8`
- Default Collation: `utf8_unicode_ci`


## 👫  Install Dependencies
Install all dependencies locally with Composer and NPM (in current directory):
```
composer install
npm install
```

## 🔥 Install Craft
Follow the next step to install Craft locally:
- First, create a *.env* file from *.env.example*
- Setup and install craft (say **yes** when Craft asks you to install):
```
./craft setup
```
Afterwords:
- Set SITE_NAME in *.env* file
- **Check your git changes** and revert or commit them

## ✨ Link Valet
To view the project create a [Valet](https://laravel.com/docs/8.x/valet) link to the root directory:
```
valet link test-project
```

## 🚀 Project-specific Configuration
Now it's time to start individualizing the project. Have Fun! 🎉

## ☝️ One Last Thing!
Delete everything above this line for your project's README 😉