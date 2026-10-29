gdjs.Level6Code = {};
gdjs.Level6Code.localVariables = [];
gdjs.Level6Code.idToCallbackMap = new Map();
gdjs.Level6Code.GDBackgroundObjects1= [];
gdjs.Level6Code.GDBackgroundObjects2= [];
gdjs.Level6Code.GDPlatform_9595GroundObjects1= [];
gdjs.Level6Code.GDPlatform_9595GroundObjects2= [];
gdjs.Level6Code.GDxqwObjects1= [];
gdjs.Level6Code.GDxqwObjects2= [];
gdjs.Level6Code.GDBoundaryObjects1= [];
gdjs.Level6Code.GDBoundaryObjects2= [];
gdjs.Level6Code.GDBouncy_9595TileObjects1= [];
gdjs.Level6Code.GDBouncy_9595TileObjects2= [];
gdjs.Level6Code.GDNormal_9595TileObjects1= [];
gdjs.Level6Code.GDNormal_9595TileObjects2= [];
gdjs.Level6Code.GDRotating_9595TileObjects1= [];
gdjs.Level6Code.GDRotating_9595TileObjects2= [];
gdjs.Level6Code.GDFalling_9595TileObjects1= [];
gdjs.Level6Code.GDFalling_9595TileObjects2= [];
gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1= [];
gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects2= [];
gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1= [];
gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects2= [];
gdjs.Level6Code.GDTimerTextObjects1= [];
gdjs.Level6Code.GDTimerTextObjects2= [];
gdjs.Level6Code.GDLevelTextObjects1= [];
gdjs.Level6Code.GDLevelTextObjects2= [];
gdjs.Level6Code.GDPlayerObjects1= [];
gdjs.Level6Code.GDPlayerObjects2= [];
gdjs.Level6Code.GDBouncy_9595TileObjects1= [];
gdjs.Level6Code.GDBouncy_9595TileObjects2= [];
gdjs.Level6Code.GDRotating_9595TileObjects1= [];
gdjs.Level6Code.GDRotating_9595TileObjects2= [];
gdjs.Level6Code.GDPlatform_9595GroundObjects1= [];
gdjs.Level6Code.GDPlatform_9595GroundObjects2= [];
gdjs.Level6Code.GDBoundaryObjects1= [];
gdjs.Level6Code.GDBoundaryObjects2= [];
gdjs.Level6Code.GDEnemy_9595BoundaryObjects1= [];
gdjs.Level6Code.GDEnemy_9595BoundaryObjects2= [];
gdjs.Level6Code.GDNormal_9595TileObjects1= [];
gdjs.Level6Code.GDNormal_9595TileObjects2= [];
gdjs.Level6Code.GDFalling_9595TileObjects1= [];
gdjs.Level6Code.GDFalling_9595TileObjects2= [];
gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1= [];
gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects2= [];
gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1= [];
gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects2= [];
gdjs.Level6Code.GDFinishTriggerObjects1= [];
gdjs.Level6Code.GDFinishTriggerObjects2= [];
gdjs.Level6Code.GDBlueFairyObjects1= [];
gdjs.Level6Code.GDBlueFairyObjects2= [];
gdjs.Level6Code.GDWhiteFairyObjects1= [];
gdjs.Level6Code.GDWhiteFairyObjects2= [];
gdjs.Level6Code.GDGreenFairyObjects1= [];
gdjs.Level6Code.GDGreenFairyObjects2= [];


gdjs.Level6Code.mapOfGDgdjs_9546Level6Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level6Code.GDPlayerObjects1});
gdjs.Level6Code.mapOfGDgdjs_9546Level6Code_9546GDBoundaryObjects1Objects = Hashtable.newFrom({"Boundary": gdjs.Level6Code.GDBoundaryObjects1});
gdjs.Level6Code.mapOfGDgdjs_9546Level6Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level6Code.GDPlayerObjects1});
gdjs.Level6Code.mapOfGDgdjs_9546Level6Code_9546GDWhiteFairyObjects1Objects = Hashtable.newFrom({"WhiteFairy": gdjs.Level6Code.GDWhiteFairyObjects1});
gdjs.Level6Code.asyncCallback18844492 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level6Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}
gdjs.Level6Code.localVariables.length = 0;
}
gdjs.Level6Code.idToCallbackMap.set(18844492, gdjs.Level6Code.asyncCallback18844492);
gdjs.Level6Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.Level6Code.asyncCallback18844492(runtimeScene, asyncObjectsList)), 18844492, asyncObjectsList);
}
}

}


};gdjs.Level6Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy_Boundary"), gdjs.Level6Code.GDEnemy_9595BoundaryObjects1);
/* Reuse gdjs.Level6Code.GDWhiteFairyObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level6Code.GDEnemy_9595BoundaryObjects1.length;i<l;++i) {
    if ( gdjs.Level6Code.GDEnemy_9595BoundaryObjects1[i].isCollidingWithPoint((( gdjs.Level6Code.GDWhiteFairyObjects1.length === 0 ) ? 0 :gdjs.Level6Code.GDWhiteFairyObjects1[0].getPointX("Checker")), (( gdjs.Level6Code.GDWhiteFairyObjects1.length === 0 ) ? 0 :gdjs.Level6Code.GDWhiteFairyObjects1[0].getPointY("Checker"))) ) {
        isConditionTrue_0 = true;
        gdjs.Level6Code.GDEnemy_9595BoundaryObjects1[k] = gdjs.Level6Code.GDEnemy_9595BoundaryObjects1[i];
        ++k;
    }
}
gdjs.Level6Code.GDEnemy_9595BoundaryObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level6Code.GDWhiteFairyObjects1 */
{for(var i = 0, len = gdjs.Level6Code.GDWhiteFairyObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDWhiteFairyObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


};gdjs.Level6Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy_Boundary"), gdjs.Level6Code.GDEnemy_9595BoundaryObjects1);
/* Reuse gdjs.Level6Code.GDWhiteFairyObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level6Code.GDEnemy_9595BoundaryObjects1.length;i<l;++i) {
    if ( gdjs.Level6Code.GDEnemy_9595BoundaryObjects1[i].isCollidingWithPoint((( gdjs.Level6Code.GDWhiteFairyObjects1.length === 0 ) ? 0 :gdjs.Level6Code.GDWhiteFairyObjects1[0].getPointX("Checker")), (( gdjs.Level6Code.GDWhiteFairyObjects1.length === 0 ) ? 0 :gdjs.Level6Code.GDWhiteFairyObjects1[0].getPointY("Checker"))) ) {
        isConditionTrue_0 = true;
        gdjs.Level6Code.GDEnemy_9595BoundaryObjects1[k] = gdjs.Level6Code.GDEnemy_9595BoundaryObjects1[i];
        ++k;
    }
}
gdjs.Level6Code.GDEnemy_9595BoundaryObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level6Code.GDWhiteFairyObjects1 */
{for(var i = 0, len = gdjs.Level6Code.GDWhiteFairyObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDWhiteFairyObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


};gdjs.Level6Code.mapOfGDgdjs_9546Level6Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level6Code.GDPlayerObjects1});
gdjs.Level6Code.mapOfGDgdjs_9546Level6Code_9546GDFalling_95959595TileObjects1Objects = Hashtable.newFrom({"Falling_Tile": gdjs.Level6Code.GDFalling_9595TileObjects1});
gdjs.Level6Code.mapOfGDgdjs_9546Level6Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level6Code.GDPlayerObjects1});
gdjs.Level6Code.mapOfGDgdjs_9546Level6Code_9546GDFinishTriggerObjects1Objects = Hashtable.newFrom({"FinishTrigger": gdjs.Level6Code.GDFinishTriggerObjects1});
gdjs.Level6Code.asyncCallback18854484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level6Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End Screen", false);
}
gdjs.Level6Code.localVariables.length = 0;
}
gdjs.Level6Code.idToCallbackMap.set(18854484, gdjs.Level6Code.asyncCallback18854484);
gdjs.Level6Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Level6Code.asyncCallback18854484(runtimeScene, asyncObjectsList)), 18854484, asyncObjectsList);
}
}

}


};gdjs.Level6Code.mapOfGDgdjs_9546Level6Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level6Code.GDPlayerObjects1});
gdjs.Level6Code.mapOfGDgdjs_9546Level6Code_9546GDBouncy_95959595TileObjects1Objects = Hashtable.newFrom({"Bouncy_Tile": gdjs.Level6Code.GDBouncy_9595TileObjects1});
gdjs.Level6Code.asyncCallback18856252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level6Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.Level6Code.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Level6Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level6Code.GDPlayerObjects2[i].addPolarForce(90, 1000, 1);
}
}
gdjs.Level6Code.localVariables.length = 0;
}
gdjs.Level6Code.idToCallbackMap.set(18856252, gdjs.Level6Code.asyncCallback18856252);
gdjs.Level6Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level6Code.localVariables);
for (const obj of gdjs.Level6Code.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.Level6Code.asyncCallback18856252(runtimeScene, asyncObjectsList)), 18856252, asyncObjectsList);
}
}

}


};gdjs.Level6Code.asyncCallback18857204 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level6Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End Screen", false);
}
gdjs.Level6Code.localVariables.length = 0;
}
gdjs.Level6Code.idToCallbackMap.set(18857204, gdjs.Level6Code.asyncCallback18857204);
gdjs.Level6Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.Level6Code.asyncCallback18857204(runtimeScene, asyncObjectsList)), 18857204, asyncObjectsList);
}
}

}


};gdjs.Level6Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Horizontal_Moving_Tile"), gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1);
gdjs.copyArray(runtimeScene.getObjects("Vertical_Moving_Tile"), gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1);
{for(var i = 0, len = gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1[i].returnVariable(gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(0)).setNumber((gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1[i].getX()));
}
}
{for(var i = 0, len = gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1[i].returnVariable(gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(1)).setNumber((gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1[i].getY()));
}
}
{for(var i = 0, len = gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1[i].returnVariable(gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(0)).setNumber((gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1[i].getX()));
}
}
{for(var i = 0, len = gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1[i].returnVariable(gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(1)).setNumber((gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1[i].getY()));
}
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "10 - 少女が見た日本の原風景 (Stage 5 Music).mp3", 6, true, 30, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level6Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level6Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boundary"), gdjs.Level6Code.GDBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level6Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level6Code.mapOfGDgdjs_9546Level6Code_9546GDPlayerObjects1Objects, gdjs.Level6Code.mapOfGDgdjs_9546Level6Code_9546GDBoundaryObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level6Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level6Code.GDPlayerObjects1[i].getY() > (( gdjs.Level6Code.GDBoundaryObjects1.length === 0 ) ? 0 :gdjs.Level6Code.GDBoundaryObjects1[0].getY()) ) {
        isConditionTrue_0 = true;
        gdjs.Level6Code.GDPlayerObjects1[k] = gdjs.Level6Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level6Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level6Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level6Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Death");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level6Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteFairy"), gdjs.Level6Code.GDWhiteFairyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level6Code.mapOfGDgdjs_9546Level6Code_9546GDPlayerObjects1Objects, gdjs.Level6Code.mapOfGDgdjs_9546Level6Code_9546GDWhiteFairyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level6Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level6Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Death");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level6Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level6Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level6Code.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "Death" ) {
        isConditionTrue_0 = true;
        gdjs.Level6Code.GDPlayerObjects1[k] = gdjs.Level6Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level6Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18838916);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level6Code.GDPlayerObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "touhou-death-sound-effect.mp3", false, 25, 1);
}
{for(var i = 0, len = gdjs.Level6Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}

{ //Subevents
gdjs.Level6Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteFairy"), gdjs.Level6Code.GDWhiteFairyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level6Code.GDWhiteFairyObjects1.length;i<l;++i) {
    if ( gdjs.Level6Code.GDWhiteFairyObjects1[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.Level6Code.GDWhiteFairyObjects1[k] = gdjs.Level6Code.GDWhiteFairyObjects1[i];
        ++k;
    }
}
gdjs.Level6Code.GDWhiteFairyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level6Code.GDWhiteFairyObjects1 */
{for(var i = 0, len = gdjs.Level6Code.GDWhiteFairyObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDWhiteFairyObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}

{ //Subevents
gdjs.Level6Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteFairy"), gdjs.Level6Code.GDWhiteFairyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level6Code.GDWhiteFairyObjects1.length;i<l;++i) {
    if ( !(gdjs.Level6Code.GDWhiteFairyObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.Level6Code.GDWhiteFairyObjects1[k] = gdjs.Level6Code.GDWhiteFairyObjects1[i];
        ++k;
    }
}
gdjs.Level6Code.GDWhiteFairyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level6Code.GDWhiteFairyObjects1 */
{for(var i = 0, len = gdjs.Level6Code.GDWhiteFairyObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDWhiteFairyObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}

{ //Subevents
gdjs.Level6Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Rotating_Tile"), gdjs.Level6Code.GDRotating_9595TileObjects1);
{for(var i = 0, len = gdjs.Level6Code.GDRotating_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDRotating_9595TileObjects1[i].setAngle(gdjs.Level6Code.GDRotating_9595TileObjects1[i].getAngle() + (90 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Falling_Tile"), gdjs.Level6Code.GDFalling_9595TileObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level6Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level6Code.mapOfGDgdjs_9546Level6Code_9546GDPlayerObjects1Objects, gdjs.Level6Code.mapOfGDgdjs_9546Level6Code_9546GDFalling_95959595TileObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level6Code.GDFalling_9595TileObjects1 */
{for(var i = 0, len = gdjs.Level6Code.GDFalling_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDFalling_9595TileObjects1[i].returnVariable(gdjs.Level6Code.GDFalling_9595TileObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Falling_Tile"), gdjs.Level6Code.GDFalling_9595TileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level6Code.GDFalling_9595TileObjects1.length;i<l;++i) {
    if ( gdjs.Level6Code.GDFalling_9595TileObjects1[i].getVariableNumber(gdjs.Level6Code.GDFalling_9595TileObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Level6Code.GDFalling_9595TileObjects1[k] = gdjs.Level6Code.GDFalling_9595TileObjects1[i];
        ++k;
    }
}
gdjs.Level6Code.GDFalling_9595TileObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level6Code.GDFalling_9595TileObjects1 */
{for(var i = 0, len = gdjs.Level6Code.GDFalling_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDFalling_9595TileObjects1[i].addPolarForce(90, 300, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boundary"), gdjs.Level6Code.GDBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Falling_Tile"), gdjs.Level6Code.GDFalling_9595TileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level6Code.GDFalling_9595TileObjects1.length;i<l;++i) {
    if ( gdjs.Level6Code.GDFalling_9595TileObjects1[i].getY() >= (( gdjs.Level6Code.GDBoundaryObjects1.length === 0 ) ? 0 :gdjs.Level6Code.GDBoundaryObjects1[0].getY()) ) {
        isConditionTrue_0 = true;
        gdjs.Level6Code.GDFalling_9595TileObjects1[k] = gdjs.Level6Code.GDFalling_9595TileObjects1[i];
        ++k;
    }
}
gdjs.Level6Code.GDFalling_9595TileObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level6Code.GDFalling_9595TileObjects1 */
{for(var i = 0, len = gdjs.Level6Code.GDFalling_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDFalling_9595TileObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Horizontal_Moving_Tile"), gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1);
{for(var i = 0, len = gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1[i].setX(gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(0).getAsNumber() + Math.cos(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(4).getAsNumber() / 100) * gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(2).getAsNumber());
}
}
{for(var i = 0, len = gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1[i].setY(gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(1).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Vertical_Moving_Tile"), gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1);
{for(var i = 0, len = gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1[i].setX(gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1[i].setY(gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(1).getAsNumber() + Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(4).getAsNumber() / 100) * gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(3).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() - gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TimerText"), gdjs.Level6Code.GDTimerTextObjects1);
{for(var i = 0, len = gdjs.Level6Code.GDTimerTextObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDTimerTextObjects1[i].getBehavior("Text").setText("Seconds left: " + gdjs.evtTools.common.toString(Math.floor(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber())));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FinishTrigger"), gdjs.Level6Code.GDFinishTriggerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level6Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level6Code.mapOfGDgdjs_9546Level6Code_9546GDPlayerObjects1Objects, gdjs.Level6Code.mapOfGDgdjs_9546Level6Code_9546GDFinishTriggerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level6Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bouncy_Tile"), gdjs.Level6Code.GDBouncy_9595TileObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level6Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level6Code.mapOfGDgdjs_9546Level6Code_9546GDPlayerObjects1Objects, gdjs.Level6Code.mapOfGDgdjs_9546Level6Code_9546GDBouncy_95959595TileObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level6Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level6Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level6Code.GDPlayerObjects1[k] = gdjs.Level6Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level6Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level6Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level6Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDPlayerObjects1[i].addPolarForce(270, 1000, 1);
}
}

{ //Subevents
gdjs.Level6Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() > 6);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level6Code.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.Level6Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level6Code.GDBackgroundObjects1.length = 0;
gdjs.Level6Code.GDBackgroundObjects2.length = 0;
gdjs.Level6Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Level6Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Level6Code.GDxqwObjects1.length = 0;
gdjs.Level6Code.GDxqwObjects2.length = 0;
gdjs.Level6Code.GDBoundaryObjects1.length = 0;
gdjs.Level6Code.GDBoundaryObjects2.length = 0;
gdjs.Level6Code.GDBouncy_9595TileObjects1.length = 0;
gdjs.Level6Code.GDBouncy_9595TileObjects2.length = 0;
gdjs.Level6Code.GDNormal_9595TileObjects1.length = 0;
gdjs.Level6Code.GDNormal_9595TileObjects2.length = 0;
gdjs.Level6Code.GDRotating_9595TileObjects1.length = 0;
gdjs.Level6Code.GDRotating_9595TileObjects2.length = 0;
gdjs.Level6Code.GDFalling_9595TileObjects1.length = 0;
gdjs.Level6Code.GDFalling_9595TileObjects2.length = 0;
gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1.length = 0;
gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects2.length = 0;
gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1.length = 0;
gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects2.length = 0;
gdjs.Level6Code.GDTimerTextObjects1.length = 0;
gdjs.Level6Code.GDTimerTextObjects2.length = 0;
gdjs.Level6Code.GDLevelTextObjects1.length = 0;
gdjs.Level6Code.GDLevelTextObjects2.length = 0;
gdjs.Level6Code.GDPlayerObjects1.length = 0;
gdjs.Level6Code.GDPlayerObjects2.length = 0;
gdjs.Level6Code.GDBouncy_9595TileObjects1.length = 0;
gdjs.Level6Code.GDBouncy_9595TileObjects2.length = 0;
gdjs.Level6Code.GDRotating_9595TileObjects1.length = 0;
gdjs.Level6Code.GDRotating_9595TileObjects2.length = 0;
gdjs.Level6Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Level6Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Level6Code.GDBoundaryObjects1.length = 0;
gdjs.Level6Code.GDBoundaryObjects2.length = 0;
gdjs.Level6Code.GDEnemy_9595BoundaryObjects1.length = 0;
gdjs.Level6Code.GDEnemy_9595BoundaryObjects2.length = 0;
gdjs.Level6Code.GDNormal_9595TileObjects1.length = 0;
gdjs.Level6Code.GDNormal_9595TileObjects2.length = 0;
gdjs.Level6Code.GDFalling_9595TileObjects1.length = 0;
gdjs.Level6Code.GDFalling_9595TileObjects2.length = 0;
gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1.length = 0;
gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects2.length = 0;
gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1.length = 0;
gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects2.length = 0;
gdjs.Level6Code.GDFinishTriggerObjects1.length = 0;
gdjs.Level6Code.GDFinishTriggerObjects2.length = 0;
gdjs.Level6Code.GDBlueFairyObjects1.length = 0;
gdjs.Level6Code.GDBlueFairyObjects2.length = 0;
gdjs.Level6Code.GDWhiteFairyObjects1.length = 0;
gdjs.Level6Code.GDWhiteFairyObjects2.length = 0;
gdjs.Level6Code.GDGreenFairyObjects1.length = 0;
gdjs.Level6Code.GDGreenFairyObjects2.length = 0;

gdjs.Level6Code.eventsList6(runtimeScene);
gdjs.Level6Code.GDBackgroundObjects1.length = 0;
gdjs.Level6Code.GDBackgroundObjects2.length = 0;
gdjs.Level6Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Level6Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Level6Code.GDxqwObjects1.length = 0;
gdjs.Level6Code.GDxqwObjects2.length = 0;
gdjs.Level6Code.GDBoundaryObjects1.length = 0;
gdjs.Level6Code.GDBoundaryObjects2.length = 0;
gdjs.Level6Code.GDBouncy_9595TileObjects1.length = 0;
gdjs.Level6Code.GDBouncy_9595TileObjects2.length = 0;
gdjs.Level6Code.GDNormal_9595TileObjects1.length = 0;
gdjs.Level6Code.GDNormal_9595TileObjects2.length = 0;
gdjs.Level6Code.GDRotating_9595TileObjects1.length = 0;
gdjs.Level6Code.GDRotating_9595TileObjects2.length = 0;
gdjs.Level6Code.GDFalling_9595TileObjects1.length = 0;
gdjs.Level6Code.GDFalling_9595TileObjects2.length = 0;
gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1.length = 0;
gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects2.length = 0;
gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1.length = 0;
gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects2.length = 0;
gdjs.Level6Code.GDTimerTextObjects1.length = 0;
gdjs.Level6Code.GDTimerTextObjects2.length = 0;
gdjs.Level6Code.GDLevelTextObjects1.length = 0;
gdjs.Level6Code.GDLevelTextObjects2.length = 0;
gdjs.Level6Code.GDPlayerObjects1.length = 0;
gdjs.Level6Code.GDPlayerObjects2.length = 0;
gdjs.Level6Code.GDBouncy_9595TileObjects1.length = 0;
gdjs.Level6Code.GDBouncy_9595TileObjects2.length = 0;
gdjs.Level6Code.GDRotating_9595TileObjects1.length = 0;
gdjs.Level6Code.GDRotating_9595TileObjects2.length = 0;
gdjs.Level6Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Level6Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Level6Code.GDBoundaryObjects1.length = 0;
gdjs.Level6Code.GDBoundaryObjects2.length = 0;
gdjs.Level6Code.GDEnemy_9595BoundaryObjects1.length = 0;
gdjs.Level6Code.GDEnemy_9595BoundaryObjects2.length = 0;
gdjs.Level6Code.GDNormal_9595TileObjects1.length = 0;
gdjs.Level6Code.GDNormal_9595TileObjects2.length = 0;
gdjs.Level6Code.GDFalling_9595TileObjects1.length = 0;
gdjs.Level6Code.GDFalling_9595TileObjects2.length = 0;
gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects1.length = 0;
gdjs.Level6Code.GDHorizontal_9595Moving_9595TileObjects2.length = 0;
gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects1.length = 0;
gdjs.Level6Code.GDVertical_9595Moving_9595TileObjects2.length = 0;
gdjs.Level6Code.GDFinishTriggerObjects1.length = 0;
gdjs.Level6Code.GDFinishTriggerObjects2.length = 0;
gdjs.Level6Code.GDBlueFairyObjects1.length = 0;
gdjs.Level6Code.GDBlueFairyObjects2.length = 0;
gdjs.Level6Code.GDWhiteFairyObjects1.length = 0;
gdjs.Level6Code.GDWhiteFairyObjects2.length = 0;
gdjs.Level6Code.GDGreenFairyObjects1.length = 0;
gdjs.Level6Code.GDGreenFairyObjects2.length = 0;


return;

}

gdjs['Level6Code'] = gdjs.Level6Code;
