"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/mensajes', (req, res) => {
    res.json({
        msg: 'Peticion Get'
    });
});
router.post('/mensajes', (req, res) => {
    res.json({
        msg: 'Peticion Post'
    });
});
exports.default = router;
