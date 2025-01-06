# E-commerce App

An intuitive and visually appealing E-commerce application built with **React Native**. This app provides users with the ability to browse products, view product details, and select various attributes like color while maintaining seamless navigation across screens.

## 📺 Project Demo

[![E-Commerce App Demo](https://youtu.be/q6kceaIq1kI?si=Cidq8MPmN15Bf-Ao)

Click the image above to watch the full demo on YouTube!

## Features

- **Product Carousel**: High-quality image carousel for showcasing product images.
- **Dynamic Color Selection**: Users can select from multiple available colors for each product.
- **Details and Review Tabs**: Switch between detailed product information and customer reviews.
- **Interactive UI**: Smooth scrolling and touch-friendly components.
- **Reusable Components**: Modular components such as `Header`, `ProductCarousel`, and `CardButton`.
- **Firebase Authentication**:
  - Login Screen: Allows users to sign in using email and password.
  - Register Screen: Enables users to create an account with email and password.
  - Persistent session management after login.

## Screens

1. **Home Screen**
   - Displays a list of products.
2. **Detail Screen**
   - Shows detailed product information, color selection, and review options.
3. **Login Screen**
   - Allows users to sign in to their account.
4. **Register Screen**
   - Enables users to create a new account.

## Technology Stack

- **React Native**: For building the cross-platform application.
- **React Navigation**: Navigation and routing between screens.
- **FontAwesome Icons**: Used for displaying star ratings.
- **Firebase Authentication**: For user login and registration functionality.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ecommerce-app.git
   cd ecommerce-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Add Firebase configuration:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project or use an existing one.
   - Add your app (Android/iOS), download the `google-services.json` (for Android) or `GoogleService-Info.plist` (for iOS), and place it in the correct directory:
     - Android: `android/app/google-services.json`
     - iOS: Add `GoogleService-Info.plist` to the root of your iOS project in Xcode.

4. Install Firebase SDKs:
   ```bash
   npm install @react-native-firebase/app @react-native-firebase/auth
   ```

5. Configure Firebase:
   - Follow the [React Native Firebase setup guide](https://rnfirebase.io/) to link Firebase with your app.

6. Start the application:

   ```bash
   npm start
   ```

7. Run the app on your device or emulator:
   - For Android:
     ```bash
     npm run android
     ```
   - For iOS:
     ```bash
     npm run ios
     ```

## Project Structure

```
.
├── components
│   ├── CardComponent.js
│   ├── Category.js
│   ├── Header.js
│   ├── ProductCarousel.js
│   ├── smartwatch.js
├── constants
│   ├── color.js
│   ├── dimensions.js
│   ├── fonts.js
├── data
│   ├── Apple.js
│   ├── category.js
│   ├── Samsung.js
│   ├── Xiaomi.js
├── screen
│   ├── DetailScreen.js
│   ├── HomeScreen.js
│   ├── LoginScreen.js
│   ├── RegisterScreen.js
├── App.js
├── package.json
└── README.md
```

## Constants

### Colors

Define reusable color values in `constants/color.js`:

```javascript
export const colors = {
  background: '#FFFFFF',
  purple: '#6A0DAD',
  yellow: '#FFD700',
  gray: '#808080',
  lavander: '#E6E6FA',
};
```

### Dimensions

Define spacing and font sizes in `constants/dimensions.js`:

```javascript
export const spacing = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const fontSize = {
  sm: 12,
  md: 16,
  lg: 20,
};
```

## Components

### Header

The `Header` component renders the top navigation bar for the app.

### ProductCarousel

Displays a carousel of product images using React Native components.

### CardButton

Displays a sticky action button (e.g., "Add to Cart").

## Issues and Contributions

- For issues, please open a [GitHub issue](https://github.com/S.Aravindhan/Ecommerce_app/issues).
- Contributions are welcome! Fork the repo, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

## Author

Developed by [**S.Aravindhan**](https://github.com/Aravindhan-Senthilkumar).

author S.Aravindhan

