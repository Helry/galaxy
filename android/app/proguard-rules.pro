# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}
#}

# 忽略warn和note，防止打包正式包失败，加快打包速度 #
-ignorewarnings

-dontnote okhttp3.**, okio.**, retrofit2.**, pl.droidsonroids.**, com.facebook.**, cn.jiguang.imui.**, com.bumptech.glide.**, org.apache.http.**, android.net.http.**, sun.misc.Unsafe, com.google.**, pub.devrel.easypermissions.EasyPermissions, org.reactnative.camera.**, com.lwansbrough.RCTCamera.**, com.reactnative.ivpusic.imagepicker.PickerModule, com.yalantis.ucrop.view.**, com.brentvatne.exoplayer.**, com.microsoft.codepush.**, com.masteratul.exceptionhandler.ReactNativeExceptionHandlerModule, com.horcrux.svg.**, com.alibaba.fastjson.**, com.avos.avoscloud.**

-dontwarn okhttp3.**, java.nio.file.*, org.codehaus.mojo.animal_sniffer.IgnoreJRERequirement, okio.**, com.facebook.react.**, android.text.StaticLayout, sun.misc.Unsafe, com.google.android.gms.flags.**, com.alibaba.fastjson.**

# 便于日志收集与处理 #
# Disabling obfuscation is useful if you collect stack traces from production crashes
# (unless you are using a system that supports de-obfuscate the stack traces).
-dontobfuscate
# 混淆前后的映射-printmapping mapping.txt 列出了源代码与混淆后的类，方法和属性名字之间的映射。这个文件对于在构建之后得到的bug报告是有用的，因为它把混淆的堆栈跟踪信息反翻译为源代码中的类，方法和成员名字。
-printmapping mapping.txt
# 未混淆的类和成员-printseeds seeds.txt
# 描述.apk包中所有class文件的内部结构。 dump.txt
# usage.txt
#保持源码的行号、源文件信息不被混淆 方便在崩溃日志中查看
-renamesourcefileattribute SourceFile
-keepattributes SourceFile,LineNumberTable
