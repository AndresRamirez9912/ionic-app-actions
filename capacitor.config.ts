import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.appaction.test',
  appName: 'appActionTest',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
};

export default config;
