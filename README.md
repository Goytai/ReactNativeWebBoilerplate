# React Native Web Boilerplate

A complete **React Native** boilerplate that runs on **iOS**, **Android**, and **Web**, bootstrapped with [`@react-native-community/cli`](https://github.com/react-native-community/cli) and configured for web using [React Native Web](https://necolas.github.io/react-native-web/) + [Vite](https://vitejs.dev/).

> **Note**: This is a **React Native CLI** project, not an Expo project. It provides full access to native code and modules while maintaining web compatibility.

> **Credits**:
>
> - This boilerplate was created following the excellent guide by [@insertish](https://gist.github.com/insertish): [React Native Web + Vite Setup Guide](https://gist.github.com/insertish/9cca9b6aa75a7cf34d050368d067ecf5)
> - Web integration made easy thanks to [`vite-plugin-react-native-web`](https://github.com/Bram-dc/vite-plugin-react-native-web) by [@Bram-dc](https://github.com/Bram-dc)

## 📁 Project Structure

```
ReactNativeWebBoilerplate/
├── App.tsx                    # Main application component
├── index.js                   # Entry point for mobile platforms
├── package.json              # Dependencies and scripts
├── web/
│   ├── index.jsx             # Entry point for web
│   ├── vite.config.ts        # Vite configuration
│   └── public/               # Static assets for web
├── android/                  # Android native code
├── ios/                      # iOS native code
└── __tests__/                # Test files
```

## 🛠️ Available Scripts

- `npm start` - Start Metro bundler for mobile development
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Start web development server
- `npm run build:web` - Build for web production
- `npm run preview:web` - Preview web production build
- `npm test` - Run tests
- `npm run lint` - Run ESLint[`@react-native-community/cli`](https://github.com/react-native-community/cli) and configured for web using [React Native Web](https://necolas.github.io/react-native-web/) + [Vite](https://vitejs.dev/).

## ✨ Features

- 📱 **React Native CLI** (not Expo) for full native access
- 🌐 **React Native Web** for web applications
- ⚡ **Vite** for fast web development
- 🧭 **React Navigation** with static navigation
- 🔧 **TypeScript** pre-configured
- 🎨 **ESLint** and **Prettier** for code quality
- 🧪 **Jest** for testing
- 🔥 **Fast Refresh** for development
- 📦 **Node.js 18+** support
- 🔄 **Full native module support** (no Expo limitations)

## 🚀 Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

> **Prerequisites**: This project requires the React Native CLI development environment, not Expo. Make sure you have Android Studio and/or Xcode properly configured for native development.

## Step 1: Start the Development Server

Choose the appropriate development server for your target platform:

### For Mobile Development (iOS/Android)

Start **Metro**, the JavaScript build tool for React Native:

```sh
# Using npm
npm start
```

### For Web Development

Start the **Vite** development server for web:

```sh
# Using npm
npm run web
```

The web server will be available at `http://localhost:5173`

## Step 2: Run Your Application

### 📱 Android

With Metro running, open a new terminal and run:

```sh
# Using npm
npm run android
```

### 🍎 iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios
```

### 🌐 Web

To run the web version of your application:

```sh
# Using npm
npm run web
```

The application will be available at `http://localhost:5173`

### 🏗️ Build for Production (Web)

To create a production build for web:

```sh
# Using npm
npm run build:web
```

To preview the production build:

```sh
# Using npm
npm run preview:web
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, your connected device, or in your web browser.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

### Force Reload

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.
- **Web**: Use <kbd>Ctrl</kbd> + <kbd>R</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> (macOS) to reload in the browser, or use browser dev tools.

## Congratulations! 🎉

You've successfully run and modified your React Native Web Boilerplate! 🚀

### What's Next?

- If you want to add this React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [documentation](https://reactnative.dev/docs/getting-started).
- To learn more about React Native Web, visit the [official documentation](https://necolas.github.io/react-native-web/).

## 🔧 Tech Stack

This boilerplate includes:

- **React Native 0.80.1** - Mobile app framework
- **React Native Web 0.20.0** - Run React Native components in browsers
- **React Navigation 7.x** - Navigation library with static navigation
- **Vite 7.x** - Fast build tool for web development
- **vite-plugin-react-native-web** - Seamless React Native Web integration with Vite
- **TypeScript 5.x** - Static type checking
- **Jest** - JavaScript testing framework
- **ESLint & Prettier** - Code quality and formatting

## 🔧 Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

### Common Web-specific Issues

- **Dependencies Error**: Make sure all dependencies are installed with `npm install`
- **Port Already in Use**: If port 5173 is occupied, Vite will automatically use the next available port
- **Component Compatibility**: Not all React Native components are supported on web. Check the [React Native Web compatibility guide](https://necolas.github.io/react-native-web/docs/compatibility/)
- **Build Issues**: Ensure TypeScript compilation passes before building for web
- **Native Module Issues**: Remember this is a React Native CLI project, not Expo. Native modules require proper linking and may need platform-specific configuration

## 📚 Learn More

To learn more about React Native and the technologies used in this boilerplate:

### React Native

- [React Native Website](https://reactnative.dev) - Learn more about React Native
- [Getting Started](https://reactnative.dev/docs/environment-setup) - **Overview** of React Native and environment setup
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - **Guided tour** of React Native **fundamentals**
- [Blog](https://reactnative.dev/blog) - Latest official React Native **blog posts**
- [`@facebook/react-native`](https://github.com/facebook/react-native) - Open source GitHub **repository**

### React Native Web

- [React Native Web](https://necolas.github.io/react-native-web/) - Official documentation
- [Compatibility Guide](https://necolas.github.io/react-native-web/docs/compatibility/) - Supported components and APIs
- [Styling Guide](https://necolas.github.io/react-native-web/docs/styling/) - How to style components for web

### Vite

- [Vite Documentation](https://vitejs.dev/) - Fast build tool for web development
- [Configuration Guide](https://vitejs.dev/config/) - Vite configuration options
- [vite-plugin-react-native-web](https://github.com/Bram-dc/vite-plugin-react-native-web) - Plugin that enables React Native Web with Vite

### React Navigation

- [React Navigation](https://reactnavigation.org/) - Navigation library for React Native
- [Static Navigation](https://reactnavigation.org/docs/static-navigation/) - Type-safe navigation configuration

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## 📄 License

This project is licensed under the MIT License.
