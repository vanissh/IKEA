'use strict';

import './storage.js';
import generateCatalog from './generateCatalog.js';
import generateFooter from './generateFooter.js';
import generateHeader from './generateHeader.js';
import generateGoodsPage from './generateGoodsPage.js';
import generateItemPage from './generateItemPage.js';
import generateCartPage from './generateCartPage.js';



//HTML
generateHeader();

generateFooter();

generateCatalog();

generateGoodsPage();

generateItemPage();

generateCartPage();

