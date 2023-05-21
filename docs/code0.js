gdjs.MenuCode = {};
gdjs.MenuCode.GDBackgroundObjects1= [];
gdjs.MenuCode.GDBackgroundObjects2= [];
gdjs.MenuCode.GDStartButtonObjects1= [];
gdjs.MenuCode.GDStartButtonObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MenuCode.GDStartButtonObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "476548__mrthenoronha__platform-game-theme-loop-4.wav", true, 100, 1);
}{for(var i = 0, len = gdjs.MenuCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDStartButtonObjects1[i].setCenterPositionInScene(540,960);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MenuCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDStartButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDStartButtonObjects1[k] = gdjs.MenuCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "LevelSelect");
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDStartButtonObjects1.length = 0;
gdjs.MenuCode.GDStartButtonObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
