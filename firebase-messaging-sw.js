// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyArfXVNLQhYAspd2xmZuwLb7bxLaY8sQqY",
    projectId: "jaap-fdd80",
    messagingSenderId: "375289521394",
    appId: "1:375289521394:web:ced2cafa4d1743d5ab9c6b"
});

const messaging = firebase.messaging();

// Jab app band ho tab notification dikhane ke liye
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://ui-avatars.com/api/?name=Jaap&background=f38630&color=fff'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
