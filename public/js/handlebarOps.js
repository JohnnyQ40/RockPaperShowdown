define(function(require) {
    'use strict';
    var Handlebars = require('handlebars');
    
    var cmpOps = {
      '&&': function(val1, val2) {
        return val1 && val2;
      },
      '||': function(val1, val2) {
        return val1 || val2;
      },
      '^': function(val1, val2) {
        return val1 ^ val2;
      },
      '==': function(val1, val2) {
        return val1 == val2;
      },
      '===': function(val1, val2) {
        return val1 === val2;
      },
      '!=': function(val1, val2) {
        return val1 != val2;
      },
      '!==': function(val1, val2) {
        return val1 !== val2;
      },
      '<': function(val1, val2) {
        return val1 < val2;
      },
      '<=': function(val1, val2) {
        return val1 <= val2;
      },
      '>': function(val1, val2) {
        return val1 > val2;
      },
      '>=': function(val1, val2) {
        return val1 >= val2;
      },
      '+': function(val1, val2) {
        return val1 + val2;
      },
      '/': function(val1, val2) {
        return val1 / val2;
      },
      '-': function(val1, val2) {
        return val1 - val2;
      }
    };
    function cmp(val1, op, val2) {
        var evaluateExp,
          result,
          options,
          blockResult,
          hash;
    
        if (arguments.length < 3 || typeof (evaluateExp = cmpOps[op]) !== 'function') {
          return '';
        }
    
        options = arguments[arguments.length - 1];
        hash = options.hash;
    
        evaluateExp = evaluateExp(val1, val2);
    
        if (evaluateExp) {
          result = hash.pass;
          blockResult = options.fn;
        } else {
          result = hash.fail;
          blockResult = options.inverse;
        }
    
        if (typeof blockResult === 'function') {
          return blockResult(this);
        }
    
        if (typeof result !== 'undefined') {
          return result;
        }
    
        return evaluateExp;
      };
      
      Handlebars.registerHelper('cmp', cmp);
      
      return cmp;
    });