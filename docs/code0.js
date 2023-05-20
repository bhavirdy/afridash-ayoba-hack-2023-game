gdjs.GameCode = {};
gdjs.GameCode.GDRoad2Objects1_1final = [];

gdjs.GameCode.GDRoadObjects1_1final = [];

gdjs.GameCode.GDGrassObjects1= [];
gdjs.GameCode.GDGrassObjects2= [];
gdjs.GameCode.GDRoadObjects1= [];
gdjs.GameCode.GDRoadObjects2= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDSportsCarRedObjects1= [];
gdjs.GameCode.GDSportsCarRedObjects2= [];
gdjs.GameCode.GDRoad2Objects1= [];
gdjs.GameCode.GDRoad2Objects2= [];


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSportsCarRedObjects1Objects = Hashtable.newFrom({"SportsCarRed": gdjs.GameCode.GDSportsCarRedObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSportsCarRedObjects1Objects = Hashtable.newFrom({"SportsCarRed": gdjs.GameCode.GDSportsCarRedObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSportsCarRedObjects1Objects = Hashtable.newFrom({"SportsCarRed": gdjs.GameCode.GDSportsCarRedObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSportsCarRedObjects1Objects = Hashtable.newFrom({"SportsCarRed": gdjs.GameCode.GDSportsCarRedObjects1});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Road", 0, 0);
}{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Road2", 0, 0);
}}

}


{

gdjs.GameCode.GDRoadObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDRoadObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Road"), gdjs.GameCode.GDRoadObjects2);
for (var i = 0, k = 0, l = gdjs.GameCode.GDRoadObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDRoadObjects2[i].getVariableNumber(gdjs.GameCode.GDRoadObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDRoadObjects2[k] = gdjs.GameCode.GDRoadObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDRoadObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDRoadObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDRoadObjects1_1final.indexOf(gdjs.GameCode.GDRoadObjects2[j]) === -1 )
            gdjs.GameCode.GDRoadObjects1_1final.push(gdjs.GameCode.GDRoadObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Road"), gdjs.GameCode.GDRoadObjects2);
for (var i = 0, k = 0, l = gdjs.GameCode.GDRoadObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDRoadObjects2[i].getTimerElapsedTimeInSecondsOrNaN("ObstacleDelay") > (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDRoadObjects2[i].getVariables().getFromIndex(0))) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDRoadObjects2[k] = gdjs.GameCode.GDRoadObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDRoadObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDRoadObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDRoadObjects1_1final.indexOf(gdjs.GameCode.GDRoadObjects2[j]) === -1 )
            gdjs.GameCode.GDRoadObjects1_1final.push(gdjs.GameCode.GDRoadObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDRoadObjects1_1final, gdjs.GameCode.GDRoadObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDRoadObjects1 */
gdjs.GameCode.GDSportsCarRedObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSportsCarRedObjects1Objects, -(150), (( gdjs.GameCode.GDRoadObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDRoadObjects1[0].getY()) + 70, "");
}{for(var i = 0, len = gdjs.GameCode.GDSportsCarRedObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSportsCarRedObjects1[i].setScale(gdjs.GameCode.GDSportsCarRedObjects1[i].getScale() * (8));
}
}{for(var i = 0, len = gdjs.GameCode.GDSportsCarRedObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSportsCarRedObjects1[i].addForce(250, 0, 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDRoadObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRoadObjects1[i].resetTimer("ObstacleDelay");
}
}{for(var i = 0, len = gdjs.GameCode.GDRoadObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRoadObjects1[i].returnVariable(gdjs.GameCode.GDRoadObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(5, 10));
}
}}

}


{

gdjs.GameCode.GDRoadObjects1.length = 0;

gdjs.GameCode.GDRoad2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDRoadObjects1_1final.length = 0;
gdjs.GameCode.GDRoad2Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Road2"), gdjs.GameCode.GDRoad2Objects2);
for (var i = 0, k = 0, l = gdjs.GameCode.GDRoad2Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDRoad2Objects2[i].getVariableNumber(gdjs.GameCode.GDRoad2Objects2[i].getVariables().get("SpawnDelay")) == 0 ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDRoad2Objects2[k] = gdjs.GameCode.GDRoad2Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDRoad2Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDRoad2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDRoad2Objects1_1final.indexOf(gdjs.GameCode.GDRoad2Objects2[j]) === -1 )
            gdjs.GameCode.GDRoad2Objects1_1final.push(gdjs.GameCode.GDRoad2Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Road"), gdjs.GameCode.GDRoadObjects2);
gdjs.copyArray(runtimeScene.getObjects("Road2"), gdjs.GameCode.GDRoad2Objects2);
for (var i = 0, k = 0, l = gdjs.GameCode.GDRoad2Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDRoad2Objects2[i].getTimerElapsedTimeInSecondsOrNaN("ObstacleDelay") > (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDRoadObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDRoadObjects2[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDRoad2Objects2[k] = gdjs.GameCode.GDRoad2Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDRoad2Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDRoadObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDRoadObjects1_1final.indexOf(gdjs.GameCode.GDRoadObjects2[j]) === -1 )
            gdjs.GameCode.GDRoadObjects1_1final.push(gdjs.GameCode.GDRoadObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDRoad2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDRoad2Objects1_1final.indexOf(gdjs.GameCode.GDRoad2Objects2[j]) === -1 )
            gdjs.GameCode.GDRoad2Objects1_1final.push(gdjs.GameCode.GDRoad2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDRoadObjects1_1final, gdjs.GameCode.GDRoadObjects1);
gdjs.copyArray(gdjs.GameCode.GDRoad2Objects1_1final, gdjs.GameCode.GDRoad2Objects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDRoad2Objects1 */
gdjs.GameCode.GDSportsCarRedObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSportsCarRedObjects1Objects, -(150), (( gdjs.GameCode.GDRoad2Objects1.length === 0 ) ? 0 :gdjs.GameCode.GDRoad2Objects1[0].getY()) + 70, "");
}{for(var i = 0, len = gdjs.GameCode.GDSportsCarRedObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSportsCarRedObjects1[i].setScale(gdjs.GameCode.GDSportsCarRedObjects1[i].getScale() * (8));
}
}{for(var i = 0, len = gdjs.GameCode.GDSportsCarRedObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSportsCarRedObjects1[i].addForce(250, 0, 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDRoad2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDRoad2Objects1[i].resetTimer("ObstacleDelay");
}
}{for(var i = 0, len = gdjs.GameCode.GDRoad2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDRoad2Objects1[i].returnVariable(gdjs.GameCode.GDRoad2Objects1[i].getVariables().get("SpawnDelay")).setNumber(gdjs.randomInRange(5, 10));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SportsCarRed"), gdjs.GameCode.GDSportsCarRedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSportsCarRedObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
/* Reuse gdjs.GameCode.GDSportsCarRedObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSportsCarRedObjects1Objects, false);
}
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDGrassObjects1.length = 0;
gdjs.GameCode.GDGrassObjects2.length = 0;
gdjs.GameCode.GDRoadObjects1.length = 0;
gdjs.GameCode.GDRoadObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDSportsCarRedObjects1.length = 0;
gdjs.GameCode.GDSportsCarRedObjects2.length = 0;
gdjs.GameCode.GDRoad2Objects1.length = 0;
gdjs.GameCode.GDRoad2Objects2.length = 0;

gdjs.GameCode.eventsList0(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
