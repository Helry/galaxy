package com.yang;

import com.facebook.react.BuildConfig;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * 原生模块
 * 一个原生模块是一个继承了ReactContextBaseJavaModule的 Java 类，它可以实现一些 JavaScript 所需的功能。
 */
public class IsDebug extends ReactContextBaseJavaModule {
  public IsDebug(ReactApplicationContext reactContext) {
    super(reactContext);
  }
  /**
   * getName()
   * ReactContextBaseJavaModule要求派生类实现getName方法。
   * 这个函数用于返回一个字符串名字，这个名字在 JavaScript 端标记这个模块。
   */
  @Override
  public String getName() {
    return "IsDebug";
  }

  @ReactMethod
  public void show(Promise promise) {
    promise.resolve(BuildConfig.DEBUG);
  }
}
