gdjs.OverworldCode = {};
gdjs.OverworldCode.GDTransitionObjects1= [];
gdjs.OverworldCode.GDTransitionObjects2= [];
gdjs.OverworldCode.GDTransitionObjects3= [];
gdjs.OverworldCode.GDTextBorderObjects1= [];
gdjs.OverworldCode.GDTextBorderObjects2= [];
gdjs.OverworldCode.GDTextBorderObjects3= [];
gdjs.OverworldCode.GDSchoolBusObjects1= [];
gdjs.OverworldCode.GDSchoolBusObjects2= [];
gdjs.OverworldCode.GDSchoolBusObjects3= [];
gdjs.OverworldCode.GDPlayerObjects1= [];
gdjs.OverworldCode.GDPlayerObjects2= [];
gdjs.OverworldCode.GDPlayerObjects3= [];
gdjs.OverworldCode.GDNPCObjects1= [];
gdjs.OverworldCode.GDNPCObjects2= [];
gdjs.OverworldCode.GDNPCObjects3= [];
gdjs.OverworldCode.GDDock1Objects1= [];
gdjs.OverworldCode.GDDock1Objects2= [];
gdjs.OverworldCode.GDDock1Objects3= [];
gdjs.OverworldCode.GDTree1Objects1= [];
gdjs.OverworldCode.GDTree1Objects2= [];
gdjs.OverworldCode.GDTree1Objects3= [];
gdjs.OverworldCode.GDTree2Objects1= [];
gdjs.OverworldCode.GDTree2Objects2= [];
gdjs.OverworldCode.GDTree2Objects3= [];
gdjs.OverworldCode.GDBush1Objects1= [];
gdjs.OverworldCode.GDBush1Objects2= [];
gdjs.OverworldCode.GDBush1Objects3= [];
gdjs.OverworldCode.GDCornerWaterObjects1= [];
gdjs.OverworldCode.GDCornerWaterObjects2= [];
gdjs.OverworldCode.GDCornerWaterObjects3= [];
gdjs.OverworldCode.GDWaterCorner2Objects1= [];
gdjs.OverworldCode.GDWaterCorner2Objects2= [];
gdjs.OverworldCode.GDWaterCorner2Objects3= [];
gdjs.OverworldCode.GDGrassObjects1= [];
gdjs.OverworldCode.GDGrassObjects2= [];
gdjs.OverworldCode.GDGrassObjects3= [];
gdjs.OverworldCode.GDWaterEdgeRightObjects1= [];
gdjs.OverworldCode.GDWaterEdgeRightObjects2= [];
gdjs.OverworldCode.GDWaterEdgeRightObjects3= [];
gdjs.OverworldCode.GDNewTiledSpriteObjects1= [];
gdjs.OverworldCode.GDNewTiledSpriteObjects2= [];
gdjs.OverworldCode.GDNewTiledSpriteObjects3= [];
gdjs.OverworldCode.GDWater1Objects1= [];
gdjs.OverworldCode.GDWater1Objects2= [];
gdjs.OverworldCode.GDWater1Objects3= [];
gdjs.OverworldCode.GDRoad1Objects1= [];
gdjs.OverworldCode.GDRoad1Objects2= [];
gdjs.OverworldCode.GDRoad1Objects3= [];
gdjs.OverworldCode.GDRoadEdge1Objects1= [];
gdjs.OverworldCode.GDRoadEdge1Objects2= [];
gdjs.OverworldCode.GDRoadEdge1Objects3= [];
gdjs.OverworldCode.GDCollisionDetectObjects1= [];
gdjs.OverworldCode.GDCollisionDetectObjects2= [];
gdjs.OverworldCode.GDCollisionDetectObjects3= [];
gdjs.OverworldCode.GDCollisionDetect2Objects1= [];
gdjs.OverworldCode.GDCollisionDetect2Objects2= [];
gdjs.OverworldCode.GDCollisionDetect2Objects3= [];
gdjs.OverworldCode.GDDialogueObjects1= [];
gdjs.OverworldCode.GDDialogueObjects2= [];
gdjs.OverworldCode.GDDialogueObjects3= [];
gdjs.OverworldCode.GDEObjects1= [];
gdjs.OverworldCode.GDEObjects2= [];
gdjs.OverworldCode.GDEObjects3= [];
gdjs.OverworldCode.GDE2Objects1= [];
gdjs.OverworldCode.GDE2Objects2= [];
gdjs.OverworldCode.GDE2Objects3= [];
gdjs.OverworldCode.GDYesButtonObjects1= [];
gdjs.OverworldCode.GDYesButtonObjects2= [];
gdjs.OverworldCode.GDYesButtonObjects3= [];
gdjs.OverworldCode.GDNoButtonObjects1= [];
gdjs.OverworldCode.GDNoButtonObjects2= [];
gdjs.OverworldCode.GDNoButtonObjects3= [];
gdjs.OverworldCode.GDShadedDarkJoystickObjects1= [];
gdjs.OverworldCode.GDShadedDarkJoystickObjects2= [];
gdjs.OverworldCode.GDShadedDarkJoystickObjects3= [];
gdjs.OverworldCode.GDTargetRoundButtonObjects1= [];
gdjs.OverworldCode.GDTargetRoundButtonObjects2= [];
gdjs.OverworldCode.GDTargetRoundButtonObjects3= [];
gdjs.OverworldCode.GDCarPeachObjects1= [];
gdjs.OverworldCode.GDCarPeachObjects2= [];
gdjs.OverworldCode.GDCarPeachObjects3= [];


gdjs.OverworldCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShadedDarkJoystick"), gdjs.OverworldCode.GDShadedDarkJoystickObjects2);
gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton"), gdjs.OverworldCode.GDTargetRoundButtonObjects2);
{for(var i = 0, len = gdjs.OverworldCode.GDShadedDarkJoystickObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDShadedDarkJoystickObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.OverworldCode.GDTargetRoundButtonObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDTargetRoundButtonObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CollisionDetect2"), gdjs.OverworldCode.GDCollisionDetect2Objects1);
gdjs.copyArray(runtimeScene.getObjects("SchoolBus"), gdjs.OverworldCode.GDSchoolBusObjects1);
{for(var i = 0, len = gdjs.OverworldCode.GDSchoolBusObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDSchoolBusObjects1[i].getBehavior("Tween").addObjectPositionXTween("MovingBus", (gdjs.OverworldCode.GDSchoolBusObjects1[i].getPointX("")) + 600, "linear", 500, false);
}
}{for(var i = 0, len = gdjs.OverworldCode.GDCollisionDetect2Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDCollisionDetect2Objects1[i].getBehavior("Tween").addObjectPositionXTween("housebarrier", (gdjs.OverworldCode.GDCollisionDetect2Objects1[i].getPointX("")) + 600, "Linear", 500, false);
}
}}

}


};gdjs.OverworldCode.mapOfGDgdjs_46OverworldCode_46GDCollisionDetectObjects1Objects = Hashtable.newFrom({"CollisionDetect": gdjs.OverworldCode.GDCollisionDetectObjects1});
gdjs.OverworldCode.mapOfGDgdjs_46OverworldCode_46GDCollisionDetect2Objects1Objects = Hashtable.newFrom({"CollisionDetect2": gdjs.OverworldCode.GDCollisionDetect2Objects1});
gdjs.OverworldCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10872308);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("E"), gdjs.OverworldCode.GDEObjects2);
gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.OverworldCode.GDNoButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.OverworldCode.GDYesButtonObjects2);
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].activateBehavior("TopDownMovement", true);
}
}{for(var i = 0, len = gdjs.OverworldCode.GDEObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDEObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.OverworldCode.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDYesButtonObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.OverworldCode.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDNoButtonObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isUsingControl("Up") ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].setAnimationName("Up");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isUsingControl("Down") ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].setAnimationName("Down");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].setAnimationName("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].setAnimationName("Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].setAnimationFrame(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects1[k] = gdjs.OverworldCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects1[i].playAnimation();
}
}}

}


};gdjs.OverworldCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Dialogue"));
if (isConditionTrue_0) {

{ //Subevents
gdjs.OverworldCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.OverworldCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bush1"), gdjs.OverworldCode.GDBush1Objects1);
gdjs.copyArray(runtimeScene.getObjects("E"), gdjs.OverworldCode.GDEObjects1);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.OverworldCode.GDNPCObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tree1"), gdjs.OverworldCode.GDTree1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tree2"), gdjs.OverworldCode.GDTree2Objects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "", 0);
}{for(var i = 0, len = gdjs.OverworldCode.GDTree1Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDTree1Objects1[i].setZOrder((gdjs.OverworldCode.GDTree1Objects1[i].getPointY("")));
}
for(var i = 0, len = gdjs.OverworldCode.GDBush1Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDBush1Objects1[i].setZOrder((gdjs.OverworldCode.GDBush1Objects1[i].getPointY("")));
}
for(var i = 0, len = gdjs.OverworldCode.GDTree2Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDTree2Objects1[i].setZOrder((gdjs.OverworldCode.GDTree2Objects1[i].getPointY("")));
}
for(var i = 0, len = gdjs.OverworldCode.GDNPCObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDNPCObjects1[i].setZOrder((gdjs.OverworldCode.GDNPCObjects1[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.OverworldCode.GDEObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDEObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 0, 1, 10, 1, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "Transition", 0);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Collision");
}
{ //Subevents
gdjs.OverworldCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CollisionDetect"), gdjs.OverworldCode.GDCollisionDetectObjects1);
gdjs.copyArray(runtimeScene.getObjects("CollisionDetect2"), gdjs.OverworldCode.GDCollisionDetect2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.OverworldCode.mapOfGDgdjs_46OverworldCode_46GDCollisionDetectObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects1[i].setZOrder((gdjs.OverworldCode.GDPlayerObjects1[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.OverworldCode.mapOfGDgdjs_46OverworldCode_46GDCollisionDetect2Objects1Objects, false);
}
}}

}


{


gdjs.OverworldCode.eventsList2(runtimeScene);
}


};

gdjs.OverworldCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OverworldCode.GDTransitionObjects1.length = 0;
gdjs.OverworldCode.GDTransitionObjects2.length = 0;
gdjs.OverworldCode.GDTransitionObjects3.length = 0;
gdjs.OverworldCode.GDTextBorderObjects1.length = 0;
gdjs.OverworldCode.GDTextBorderObjects2.length = 0;
gdjs.OverworldCode.GDTextBorderObjects3.length = 0;
gdjs.OverworldCode.GDSchoolBusObjects1.length = 0;
gdjs.OverworldCode.GDSchoolBusObjects2.length = 0;
gdjs.OverworldCode.GDSchoolBusObjects3.length = 0;
gdjs.OverworldCode.GDPlayerObjects1.length = 0;
gdjs.OverworldCode.GDPlayerObjects2.length = 0;
gdjs.OverworldCode.GDPlayerObjects3.length = 0;
gdjs.OverworldCode.GDNPCObjects1.length = 0;
gdjs.OverworldCode.GDNPCObjects2.length = 0;
gdjs.OverworldCode.GDNPCObjects3.length = 0;
gdjs.OverworldCode.GDDock1Objects1.length = 0;
gdjs.OverworldCode.GDDock1Objects2.length = 0;
gdjs.OverworldCode.GDDock1Objects3.length = 0;
gdjs.OverworldCode.GDTree1Objects1.length = 0;
gdjs.OverworldCode.GDTree1Objects2.length = 0;
gdjs.OverworldCode.GDTree1Objects3.length = 0;
gdjs.OverworldCode.GDTree2Objects1.length = 0;
gdjs.OverworldCode.GDTree2Objects2.length = 0;
gdjs.OverworldCode.GDTree2Objects3.length = 0;
gdjs.OverworldCode.GDBush1Objects1.length = 0;
gdjs.OverworldCode.GDBush1Objects2.length = 0;
gdjs.OverworldCode.GDBush1Objects3.length = 0;
gdjs.OverworldCode.GDCornerWaterObjects1.length = 0;
gdjs.OverworldCode.GDCornerWaterObjects2.length = 0;
gdjs.OverworldCode.GDCornerWaterObjects3.length = 0;
gdjs.OverworldCode.GDWaterCorner2Objects1.length = 0;
gdjs.OverworldCode.GDWaterCorner2Objects2.length = 0;
gdjs.OverworldCode.GDWaterCorner2Objects3.length = 0;
gdjs.OverworldCode.GDGrassObjects1.length = 0;
gdjs.OverworldCode.GDGrassObjects2.length = 0;
gdjs.OverworldCode.GDGrassObjects3.length = 0;
gdjs.OverworldCode.GDWaterEdgeRightObjects1.length = 0;
gdjs.OverworldCode.GDWaterEdgeRightObjects2.length = 0;
gdjs.OverworldCode.GDWaterEdgeRightObjects3.length = 0;
gdjs.OverworldCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.OverworldCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.OverworldCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.OverworldCode.GDWater1Objects1.length = 0;
gdjs.OverworldCode.GDWater1Objects2.length = 0;
gdjs.OverworldCode.GDWater1Objects3.length = 0;
gdjs.OverworldCode.GDRoad1Objects1.length = 0;
gdjs.OverworldCode.GDRoad1Objects2.length = 0;
gdjs.OverworldCode.GDRoad1Objects3.length = 0;
gdjs.OverworldCode.GDRoadEdge1Objects1.length = 0;
gdjs.OverworldCode.GDRoadEdge1Objects2.length = 0;
gdjs.OverworldCode.GDRoadEdge1Objects3.length = 0;
gdjs.OverworldCode.GDCollisionDetectObjects1.length = 0;
gdjs.OverworldCode.GDCollisionDetectObjects2.length = 0;
gdjs.OverworldCode.GDCollisionDetectObjects3.length = 0;
gdjs.OverworldCode.GDCollisionDetect2Objects1.length = 0;
gdjs.OverworldCode.GDCollisionDetect2Objects2.length = 0;
gdjs.OverworldCode.GDCollisionDetect2Objects3.length = 0;
gdjs.OverworldCode.GDDialogueObjects1.length = 0;
gdjs.OverworldCode.GDDialogueObjects2.length = 0;
gdjs.OverworldCode.GDDialogueObjects3.length = 0;
gdjs.OverworldCode.GDEObjects1.length = 0;
gdjs.OverworldCode.GDEObjects2.length = 0;
gdjs.OverworldCode.GDEObjects3.length = 0;
gdjs.OverworldCode.GDE2Objects1.length = 0;
gdjs.OverworldCode.GDE2Objects2.length = 0;
gdjs.OverworldCode.GDE2Objects3.length = 0;
gdjs.OverworldCode.GDYesButtonObjects1.length = 0;
gdjs.OverworldCode.GDYesButtonObjects2.length = 0;
gdjs.OverworldCode.GDYesButtonObjects3.length = 0;
gdjs.OverworldCode.GDNoButtonObjects1.length = 0;
gdjs.OverworldCode.GDNoButtonObjects2.length = 0;
gdjs.OverworldCode.GDNoButtonObjects3.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects1.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects2.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects3.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects1.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects2.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects3.length = 0;
gdjs.OverworldCode.GDCarPeachObjects1.length = 0;
gdjs.OverworldCode.GDCarPeachObjects2.length = 0;
gdjs.OverworldCode.GDCarPeachObjects3.length = 0;

gdjs.OverworldCode.eventsList3(runtimeScene);

return;

}

gdjs['OverworldCode'] = gdjs.OverworldCode;
