import dragDrop from "./dragDrop.js";
import observer from "./mutationObserver.js";
import isEmptyFirsItem from "./isEmptyFirsItem.js";
import buttonAddNewCard from "./buttonAddNewCard.js";
import addLabel from "./addLabel.js";
import buttonCancel from "./buttonCancel.js";
import windowOnLoad from "./windowOnLoad.js";
import removeTask from "./removeTask.js";
import addPriority from "./addPriority.js";
import keyPressInput from "./keyPressInput.js";
import action from "./action.js";
import closeModalWindow from "./closeModalWindow.js";
import coutTask from "./coutTask.js";
import load from "./load.js";

load();
//main action
action();

dragDrop();
observer();
isEmptyFirsItem();
buttonAddNewCard();
addLabel();
buttonCancel();
windowOnLoad();
removeTask();
addPriority();
keyPressInput();
closeModalWindow();

coutTask();


// mobileAction();
