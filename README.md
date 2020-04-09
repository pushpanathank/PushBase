# Updated version is <a href="https://github.com/pushpanathank/react-native-starter">here</a>

# React native + Expo startup 
A simple react native starter/boilerplate developed using React native + Expo + React Navigation + Nativebase + Redux + Redux Thunk + Redux Persist + Redux Form + Redux Helpers

This project was bootstrapped with <a href="https://expo.io/">Expo</a>.

# Screen Shots

<img src="https://github.com/pushpanathank/PushBase/blob/master/app/assets/screenshot/signin.png" alt="Signin" width="150" />  <img src="https://github.com/pushpanathank/PushBase/blob/master/app/assets/screenshot/signup.png" alt="signup" width="150" />  <img src="https://github.com/pushpanathank/PushBase/blob/master/app/assets/screenshot/forgot.png" alt="forgot" width="150" />  <img src="https://github.com/pushpanathank/PushBase/blob/master/app/assets/screenshot/home.png" alt="home" width="150" />  <img src="https://github.com/pushpanathank/PushBase/blob/master/app/assets/screenshot/drawer.png" alt="drawer" width="150" />  <img src="https://github.com/pushpanathank/PushBase/blob/master/app/assets/screenshot/switch-language.png" alt="switch-language" width="150" />  <img src="https://github.com/pushpanathank/PushBase/blob/master/app/assets/screenshot/multilingual.png" alt="multilingual" width="150" />

# Instalation
Clone or download the repository and install the dependencies

<pre> # Clone the repository
git clone https://github.com/pushpanathank/PushBase.git

# Go to the project location
cd PushBase

# Install dependecies
npm install

# Start the project with Expo
npm start
</pre>

# Available Scripts

<pre># npm start</pre>
Runs the app in development mode.

Open it in the Expo app on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the --reset-cache flag to the start script:

<pre>npm start -- --reset-cache<br>
or<br>
yarn start -- --reset-cache</pre>
<pre># npm run ios</pre>
Like npm start, but also attempts to open the app in the iOS Simulator if you're on a Mac and have it installed.

<pre># npm run android</pre>
Like npm start, but also attempts to open the app on a connected Android device or emulator. Requires an installation of Android build tools (see React Native docs for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of adb available to Create React Native App:

# Using Android Studio's adb
Make sure that you can run adb from your terminal.
Open Genymotion and navigate to Settings -> ADB. Select “Use custom Android SDK tools” and update with your Android SDK directory.
Using Genymotion's adb
Find Genymotion’s copy of adb. On macOS for example, this is normally /Applications/Genymotion.app/Contents/MacOS/tools/.
Add the Genymotion tools directory to your path (instructions for Mac, Linux, and Windows).
Make sure that you can run adb from your terminal.
npm run eject
This will start the process of "ejecting" from Create React Native App's build scripts. You will be asked a couple of questions about how you'd like to build your project.

Warning: Running eject is a permanent action (aside from whatever version control system you use). An ejected app will require you to have an Xcode and/or Android Studio environment set up.

