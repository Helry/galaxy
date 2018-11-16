package com.galaxy;

import android.app.Application;
import android.content.res.Configuration;
import android.content.res.Resources;

import com.yang.YangPackage; // <-- 引入你自己的包
import com.facebook.react.ReactApplication;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.reactlibrary.RNNativeInfoPackage;
import com.microsoft.codepush.react.CodePush;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

        @Override
        protected String getJSBundleFile() {
        return CodePush.getJSBundleFile();
        }

    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ReactNativeConfigPackage(),
            new RNNativeInfoPackage(),
            new YangPackage(), // <-- 添加这一行，类名替换成你的Package类的名字.
            // new CodePush(getResources().getString(R.string.reactNativeCodePush_androidDeploymentKey), getApplicationContext(), BuildConfig.DEBUG)
            new CodePush(BuildConfig.CODEPUSH_KEY, MainApplication.this, BuildConfig.DEBUG)
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
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

  // 让文字不随系统文字变化：http://t.cn/Rs26Veb
  @Override
  public void onConfigurationChanged(Configuration newConfig) {
    if (newConfig.fontScale != 1)//非默认值
      getResources();
    super.onConfigurationChanged(newConfig);
  }

  @Override
  public Resources getResources() {
    Resources res = super.getResources();
    if (res.getConfiguration().fontScale != 1) {//非默认值
      Configuration newConfig = new Configuration();
      newConfig.setToDefaults();//设置默认
      res.updateConfiguration(newConfig, res.getDisplayMetrics());
    }
    return res;
  }
}
