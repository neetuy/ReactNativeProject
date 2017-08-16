package com.reactnativeproject;
import android.os.Bundle;
import android.content.Intent;

import com.cboy.rn.splashscreen.SplashScreen;
import com.facebook.react.ReactActivity;



public class MainActivity extends ReactActivity {
	 
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    }


    @Override
    
    protected String getMainComponentName() {
        return "ReactNativeProject";
        // activity = this; 
       
    }
    @Override

    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }

}
