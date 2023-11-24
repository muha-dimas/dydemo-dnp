# DyDemo
 Dynatrace React native Demo

Refernces Used
--------------
* [Dynatrace Dashborad](https://hxo02299.live.dynatrace.com/#mobileappoverview;appId=MOBILE_APPLICATION-ACA5D87BF9334656;gtf=-7d%20to%20now;gf=all) 

* Doc [https://community.dynatrace.com/t5/Extensions/React-Native-plugin-has-not-been-started-yet-in-React-Native-App/td-p/166299](https://community.dynatrace.com/t5/Extensions/React-Native-plugin-has-not-been-started-yet-in-React-Native-App/td-p/166299)

* Doc [https://community.dynatrace.com/t5/Dynatrace-Open-Q-A/Monitor-React-native-Mobile-App/td-p/125359](https://community.dynatrace.com/t5/Dynatrace-Open-Q-A/Monitor-React-native-Mobile-App/td-p/125359)

* Doc [https://www.dynatrace.com/support/help/how-to-use-dynatrace/real-user-monitoring/setup-and-configuration/web-applications/additional-configuration/configure-real-user-monitoring-according-to-gdpr/#enable-user-opt-in-mode-for-your-mobile-app](https://www.dynatrace.com/support/help/how-to-use-dynatrace/real-user-monitoring/setup-and-configuration/web-applications/additional-configuration/configure-real-user-monitoring-according-to-gdpr/#enable-user-opt-in-mode-for-your-mobile-app)

* [npm i @dynatrace/react-native-plugin](https://www.npmjs.com/package/@dynatrace/react-native-plugin#transformer)


Steps
--------------

```sh
react-native install @dynatrace/react-native-plugin
or
npm run dylink

npm run instrumentDynatrace 
```

Rebuild and run your app using react-native 
```sh
npm run android or npm run ios.
```

Steps (Terbaru)
--------------
Siapkan environment development sesuai: https://reactnative.dev/docs/environment-setup
pastikan sudah ada npm, openjdk-11

-----------------------
setelah install selesai 
npm install --legacy-peer-deps
npm run instrumentDynatrace
npm run android
