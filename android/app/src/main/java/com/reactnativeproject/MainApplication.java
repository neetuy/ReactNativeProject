package com.reactnativeproject;

import org.pgsqlite.SQLitePluginPackage;

import com.oblador.vectoricons.VectorIconsPackage;

import android.app.Application;

import com.wix.reactnativenotifications.RNNotificationsPackage;

import com.rt2zz.reactnativecontacts.ReactNativeContacts; 

import com.lwansbrough.RCTCamera.RCTCameraPackage;

import com.imagepicker.ImagePickerPackage;

import com.zmxv.RNSound.RNSoundPackage;

import com.facebook.react.ReactApplication;
import com.smixx.reactnativeicons.ReactNativeIcons;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new SQLitePluginPackage(), 
          new ReactNativeIcons(),
          new RNNotificationsPackage(MainApplication.this),
          new ReactNativeContacts(),
          new RCTCameraPackage(),
          new ImagePickerPackage(),
          new RNSoundPackage(),
          new VectorIconsPackage()

      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
