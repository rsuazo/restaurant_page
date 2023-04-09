import { pageLoad } from './pageLoad.js';
import { menuLoad } from './menuLoad.js';
import { homeLoad } from './homeLoad.js';
import { contactLoad } from './contactLoad.js';

pageLoad();

homeBtn.onclick = function () { homeLoad(); };
menuBtn.onclick = function () { menuLoad(); };
contactBtn.onclick = function () { contactLoad(); };
