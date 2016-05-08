var cbid ={};
//alert(navigator.userAgent);
if (/(android)/i.test(navigator.userAgent)) {
//  alert('android');
  cbid={
    appid:"572d7ffa04b0165b745a6796",
    appSignature:"6064b3f3e24fde4f15719470015957ace607edea"
  };
}
else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
//  alert('iOS');
  cbid={
    appid:"572d7fc804b0165b7d33a228",
    appSignature:"302df09d4526653d561e51f574519c4eba4619d9"
  };
}

var loadedLocations = new Array();

function cb_init()
{
  window.chartboost.setUp(cbid.appid,cbid.appSignature);
  window.chartboost.onInterstitialAdPreloaded = cb_OnIntersitialPreload;
  window.chartboost.onInterstitialAdShown = cb_OnIntersitialShown;
  cb_preloadIntersitial('Default');
  cb_preloadIntersitial('Menu');
  cb_preloadIntersitial('Pause');
  window.chartboost.preloadMoreAppsAd('Default');
  //window.chartboost.onInterstitialAdPreloaded = function(location){alert(location)};
  //alert('init chartboost');
}

function cb_preloadIntersitial(location)
{
  loadedLocations[location] = 0;
  window.chartboost.preloadInterstitialAd(location);
}

function cb_OnIntersitialShown(location)
{
  console.log("intersitial shown " + location);
  cb_preloadIntersitial(location);
}

function cb_OnIntersitialPreload(location)
{
  loadedLocations[location] = 1;
  console.log("intersitial preload " + location);
}

function cb_show(location)
{
  if(loadedLocations[location])
  {
    window.chartboost.showInterstitialAd(location);
    return !0;
  }
  return 0;
}

function cb_showMoreApp()
{
  window.chartboost.showMoreAppsAd('Default');
}
