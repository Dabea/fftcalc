'use strict';

var CALC = window.CALC || {};


CALC.CalculatorView = (function($) {

    function CalculatorView($rootElement)
    {
        // Construction should be small, and it should validate parameters
        // This technique is used to tell yourself when you misuse your objects
        // Doing this forces your object to only function when the main dependencies are valid
        // This prevents many issues from occurring later
        if (!($rootElement instanceof $) && $rootElement.length !== 1) {
            throw new TypeError('The root element provided wasn\'t properly prepared');
        }

        this.init($rootElement);
    }





    return CalculatorView;

}(window.jQuery));