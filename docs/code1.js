gdjs.LevelSelectCode = {};
gdjs.LevelSelectCode.GDBackgroundObjects1= [];
gdjs.LevelSelectCode.GDBackgroundObjects2= [];
gdjs.LevelSelectCode.GDTallBuildingOrangeObjects1= [];
gdjs.LevelSelectCode.GDTallBuildingOrangeObjects2= [];
gdjs.LevelSelectCode.GDInfoObjects1= [];
gdjs.LevelSelectCode.GDInfoObjects2= [];
gdjs.LevelSelectCode.GDArrowLeftObjects1= [];
gdjs.LevelSelectCode.GDArrowLeftObjects2= [];
gdjs.LevelSelectCode.GDLevelNameTextObjects1= [];
gdjs.LevelSelectCode.GDLevelNameTextObjects2= [];
gdjs.LevelSelectCode.GDLevelDescriptionObjects1= [];
gdjs.LevelSelectCode.GDLevelDescriptionObjects2= [];
gdjs.LevelSelectCode.GDArrowRightObjects1= [];
gdjs.LevelSelectCode.GDArrowRightObjects2= [];
gdjs.LevelSelectCode.GDSquareWhiteToggleObjects1= [];
gdjs.LevelSelectCode.GDSquareWhiteToggleObjects2= [];
gdjs.LevelSelectCode.GDPlayButtonObjects1= [];
gdjs.LevelSelectCode.GDPlayButtonObjects2= [];


gdjs.LevelSelectCode.mapOfGDgdjs_46LevelSelectCode_46GDArrowLeftObjects1Objects = Hashtable.newFrom({"ArrowLeft": gdjs.LevelSelectCode.GDArrowLeftObjects1});
gdjs.LevelSelectCode.mapOfGDgdjs_46LevelSelectCode_46GDArrowRightObjects1Objects = Hashtable.newFrom({"ArrowRight": gdjs.LevelSelectCode.GDArrowRightObjects1});
gdjs.LevelSelectCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelNameText"), gdjs.LevelSelectCode.GDLevelNameTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.LevelSelectCode.GDPlayButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TallBuildingOrange"), gdjs.LevelSelectCode.GDTallBuildingOrangeObjects1);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "InfoLayer");
}{gdjs.evtTools.sound.playMusic(runtimeScene, "476548__mrthenoronha__platform-game-theme-loop-4.wav", true, 100, 1);
}{for(var i = 0, len = gdjs.LevelSelectCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDPlayButtonObjects1[i].setCenterPositionInScene(540,(gdjs.LevelSelectCode.GDPlayButtonObjects1[i].getY()));
}
}{for(var i = 0, len = gdjs.LevelSelectCode.GDTallBuildingOrangeObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDTallBuildingOrangeObjects1[i].setCenterPositionInScene(540,(gdjs.LevelSelectCode.GDTallBuildingOrangeObjects1[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.LevelSelectCode.GDLevelNameTextObjects1.length ;i < len;++i) {
    gdjs.LevelSelectCode.GDLevelNameTextObjects1[i].setCenterPositionInScene(540,(gdjs.LevelSelectCode.GDLevelNameTextObjects1[i].getY()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowLeft"), gdjs.LevelSelectCode.GDArrowLeftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LevelSelectCode.mapOfGDgdjs_46LevelSelectCode_46GDArrowLeftObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10857876);
}
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowRight"), gdjs.LevelSelectCode.GDArrowRightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LevelSelectCode.mapOfGDgdjs_46LevelSelectCode_46GDArrowRightObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10858860);
}
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs.LevelSelectCode.GDSquareWhiteToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDSquareWhiteToggleObjects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDSquareWhiteToggleObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDSquareWhiteToggleObjects1[k] = gdjs.LevelSelectCode.GDSquareWhiteToggleObjects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDSquareWhiteToggleObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "InfoLayer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs.LevelSelectCode.GDSquareWhiteToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDSquareWhiteToggleObjects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDSquareWhiteToggleObjects1[i].HasJustBeenUnchecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDSquareWhiteToggleObjects1[k] = gdjs.LevelSelectCode.GDSquareWhiteToggleObjects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDSquareWhiteToggleObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "InfoLayer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.LevelSelectCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDPlayButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDPlayButtonObjects1[k] = gdjs.LevelSelectCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game");
}}

}


};

gdjs.LevelSelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelSelectCode.GDBackgroundObjects1.length = 0;
gdjs.LevelSelectCode.GDBackgroundObjects2.length = 0;
gdjs.LevelSelectCode.GDTallBuildingOrangeObjects1.length = 0;
gdjs.LevelSelectCode.GDTallBuildingOrangeObjects2.length = 0;
gdjs.LevelSelectCode.GDInfoObjects1.length = 0;
gdjs.LevelSelectCode.GDInfoObjects2.length = 0;
gdjs.LevelSelectCode.GDArrowLeftObjects1.length = 0;
gdjs.LevelSelectCode.GDArrowLeftObjects2.length = 0;
gdjs.LevelSelectCode.GDLevelNameTextObjects1.length = 0;
gdjs.LevelSelectCode.GDLevelNameTextObjects2.length = 0;
gdjs.LevelSelectCode.GDLevelDescriptionObjects1.length = 0;
gdjs.LevelSelectCode.GDLevelDescriptionObjects2.length = 0;
gdjs.LevelSelectCode.GDArrowRightObjects1.length = 0;
gdjs.LevelSelectCode.GDArrowRightObjects2.length = 0;
gdjs.LevelSelectCode.GDSquareWhiteToggleObjects1.length = 0;
gdjs.LevelSelectCode.GDSquareWhiteToggleObjects2.length = 0;
gdjs.LevelSelectCode.GDPlayButtonObjects1.length = 0;
gdjs.LevelSelectCode.GDPlayButtonObjects2.length = 0;

gdjs.LevelSelectCode.eventsList0(runtimeScene);

return;

}

gdjs['LevelSelectCode'] = gdjs.LevelSelectCode;
