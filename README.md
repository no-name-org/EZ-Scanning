# EZ Scanning
Grocery app with QR code and barcode scanning.

## Prerequisites
- You have followed the [instructions](https://facebook.github.io/react-native/docs/getting-started.html) for building projects with native code.
- [Genymotion](https://www.genymotion.com/fun-zone) and [VirtualBox]( https://www.virtualbox.org/wiki/Downloads) if you have no Android phone.
- `%ANDROID_HOME%/tools` and `%ANDROID_HOME%/platform-tools` in your path variable.

## Running the Application
1. Make sure the requirements are available on your machine.
2. Run `npm install` to install dependencies.
3. Run `cd android && gradlew clean`. (on first run or after linking dependencies to Android)
4. Make sure an Android phone is connected or a simulator is running.
5. Run `react-native run-android` to run the app.

## Folder Structure
```
  /android                  Android specific files
  /app
      components            Contains reusable components that are used by the entire app
      config                Contains routes for navigating the app and global styles
      lib                   Contains useful functions used by the entire app
      screens               Screens shown in the app
  /ios                      IOS specific files
```
