const routes = require('express').Router();


routes.use('/api/productcategory',require('../Controllers/ProductCategoryContollers'));
routes.use('/api/product',require('../Controllers/ProductControllers'));
routes.use('/api/operators',require('../Controllers/OperatorsControllers'));
routes.use('/api/services',require('../Controllers/ServicesControllers'));
routes.use('/api/servicescategory',require('../Controllers/ServicesCategoryControllers'));
routes.use('/api/servicesunit',require('../Controllers/UnitControllers'));
routes.use('/api/order',require('../Controllers/Order_listControllers'));
routes.use('/api/brandproduct', require('../Controllers/BrandProductControllers'));

module.exports = routes