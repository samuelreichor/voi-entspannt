# Starting a new Craft CMS Project at Fredmansky

## 🗄️ Create Locale DB
Create a new empty MySQL database for the project using your favourite database management tool (TablePlus, Sequel Pro etc.).

- Default Character Set: `utf8`
- Default Collation: `utf8_unicode_ci`

## 😼 Create Git Repo
Go to [Github](https://github.com/) and create a new **private** repo using the *FREDMANSKY_project-template* template.
Go to settings and adjust the following settings:
- Uncheck *Allow merge commits*
- Uncheck *Allow squash merging*
- Check *Automatically delete head branches*

Then clone your new repo locally.

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
___

# Cool Fredmansky Project 🚀🔥✨🎉

## Setup:
### 🗄️ Create Locale DB
Create a new empty MySQL database for the project using your favourite database management tool (TablePlus, Sequel Pro etc.).

- Default Character Set: `utf8`
- Default Collation: `utf8_unicode_ci`

**OPTIONAL: Import data from live or stage server..**

## 😼 Clone Git Repo

Clone the Git repo locally at a location of your choosing:
```
git clone ...
```

## 👫  Install Dependencies
Install all dependencies locally with Composer and NPM (in current directory):
```
composer install
npm install
```

## 🔥 Setup Craft
Follow the next step to setup (and install) Craft locally:
- First, create a *.env* file from *.env.example*
- Setup (and install) craft (say **yes** when Craft asks you to install):
```
./craft setup
```
⚠️️ CRAFT will ask you if you want to install CRAFT!️
Say **YES** if you want to start with a clean database (no content).
Say **NO** if you have imported an existing database.
Depending on your choice you might want to re-apply the project config after importing the database:
```
./craft project-config/apply --force
```

Afterwords:
- Set SITE_NAME in *.env* file
- **Check your git changes** and revert or commit them

## ✨ Link Valet
To view the project create a [Valet](https://laravel.com/docs/8.x/valet) link to the root directory:
```
valet link ...
```


## 🚀 Start working
Now it's time to start doing the heavy lifting. Have Fun! 🎉