import { webview } from '@kit.ArkWeb';

@Entry
@Component
struct Index {
  private controller: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      Web({ src: $rawfile('index.html'), controller: this.controller })
        .width('100%')
        .height('100%')
        .javaScriptAccess(true)
        .fileAccess(true)
        .domStorageAccess(true)
        .mixedMode(1)
        .zoomAccess(false)
        .overviewModeAccess(true)
        .onConsole((event) => {
          console.info('[WebView] ' + event?.message?.getMessage());
          return true;
        })
        .onErrorReceive((event) => {
          console.error('[WebView Error] ' + JSON.stringify(event));
          return true;
        })
        .onPageEnd(() => {
          this.controller.runJavaScript(
            'window.onerror=function(m,s,l,c,e){document.body.innerHTML=' +
            '"<pre style=color:red;padding:20px>JS ERROR: "+m+" File: "+s+" Line: "+l+" "+' +
            '(e&&e.stack||"")+"</pre>"};' +
            'window.onunhandledrejection=function(e){document.body.innerHTML=' +
            '"<pre style=color:red;padding:20px>REJECTION: "+e.reason+" "+' +
            '(e.reason&&e.reason.stack||"")+"</pre>"};'
          );
        })
    }
    .width('100%')
    .height('100%')
  }
}
