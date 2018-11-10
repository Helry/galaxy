// ToastModule.java

package com.yang;

import android.widget.Toast;

//import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
//import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

public class ToastModule extends ReactContextBaseJavaModule {

  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";

  public ToastModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }
  /**
   * ReactContextBaseJavaModule要求派生类实现getName方法。
   * 这个函数用于返回一个字符串名字，这个名字在 JavaScript 端标记这个模块。
   * 这里我们把这个模块叫做ToastExample，这样就可以在 JavaScript 中通过NativeModules.ToastExample访问到这个模块。
   * 译注：RN 已经内置了一个名为 ToastAndroid 的模块，所以在练习时请勿使用 ToastAndroid 的名字，否则运行时会报错名字冲突！
   */
  @Override
  public String getName() {
    return "ToastExample";
  }

  @Override
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = new HashMap<>();
    constants.put("SHORT", Toast.LENGTH_SHORT);
    constants.put("LONG", Toast.LENGTH_LONG);
    return constants;
  }

  /**
   * 要导出一个方法给 JavaScript 使用，Java 方法需要使用注解@ReactMethod。方法的返回类型必须为void。
   * React Native 的跨语言访问是异步进行的，所以想要给 JavaScript
   * 返回一个值的唯一办法是使用回调函数或者发送事件（参见下文的描述）。
   */
  @ReactMethod
  public void show(String message, int duration) {
    Toast.makeText(getReactApplicationContext(), message, duration).show();
  }
}
