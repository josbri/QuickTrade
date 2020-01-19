// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //Codigo configuracion firebase
  firebaseConfig : {
    apiKey: "AIzaSyDtTHrKzMnxVkbWSeQx2pKer9uK2zoVRXQ",
    authDomain: "quicktrade-5cd15.firebaseapp.com",
    databaseURL: "https://quicktrade-5cd15.firebaseio.com/",
    projectId: "quicktrade-5cd15",
    storageBucket: "quicktrade-5cd15.appspot.com",
    messagingSenderId: "411578969846",
    appId: "1:411578969846:web:46b6b2cfdd82c28bac46d7",
    measurementId: "G-ZWDX2FEZ9X"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
