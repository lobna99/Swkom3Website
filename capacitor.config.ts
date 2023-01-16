import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.parceltracker',
  appName: 'parceltracker',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    PushNotifications:{
      presentationOptions: ['badge','sound','alert'],
    },
  },
};

export default config;
