const express = require('express');
const mongoose = require("mongoose");
const institut = require('./models.js');

function getPath() {
    institut.model.findOne( {id: 'ИРИТ-РТФ'}, (err, inst) => {
        if (err) return handleError(err);

        console.log(inst);
    });
}

module.exports = getPath;