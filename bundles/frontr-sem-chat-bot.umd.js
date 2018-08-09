(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@frontr/sem-chat-bot', ['exports', '@angular/core'], factory) :
    (factory((global.frontr = global.frontr || {}, global.frontr['sem-chat-bot'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemChatBotService = (function () {
        function SemChatBotService() {
        }
        SemChatBotService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        SemChatBotService.ctorParameters = function () { return []; };
        /** @nocollapse */ SemChatBotService.ngInjectableDef = i0.defineInjectable({ factory: function SemChatBotService_Factory() { return new SemChatBotService(); }, token: SemChatBotService, providedIn: "root" });
        return SemChatBotService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemChatBotComponent = (function () {
        function SemChatBotComponent() {
        }
        /**
         * @return {?}
         */
        SemChatBotComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SemChatBotComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-sem-chat-bot',
                        template: "\n    <p>\n      sem-chat-bot works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        SemChatBotComponent.ctorParameters = function () { return []; };
        return SemChatBotComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemChatBotModule = (function () {
        function SemChatBotModule() {
        }
        SemChatBotModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [SemChatBotComponent],
                        exports: [SemChatBotComponent]
                    },] },
        ];
        return SemChatBotModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.SemChatBotService = SemChatBotService;
    exports.SemChatBotComponent = SemChatBotComponent;
    exports.SemChatBotModule = SemChatBotModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRyLXNlbS1jaGF0LWJvdC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bmcm9udHIvc2VtLWNoYXQtYm90L2xpYi9zZW0tY2hhdC1ib3Quc2VydmljZS50cyIsIm5nOi8vQGZyb250ci9zZW0tY2hhdC1ib3QvbGliL3NlbS1jaGF0LWJvdC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNoYXQtYm90L2xpYi9zZW0tY2hhdC1ib3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VtQ2hhdEJvdFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2VtLWNoYXQtYm90JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHNlbS1jaGF0LWJvdCB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgU2VtQ2hhdEJvdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VtQ2hhdEJvdENvbXBvbmVudCB9IGZyb20gJy4vc2VtLWNoYXQtYm90LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU2VtQ2hhdEJvdENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTZW1DaGF0Qm90Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTZW1DaGF0Qm90TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7Z0NBSkQ7Ozs7Ozs7QUNBQTtRQWFFO1NBQWlCOzs7O1FBRWpCLHNDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLFFBQVEsRUFBRSxvREFJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7OztrQ0FWRDs7Ozs7OztBQ0FBOzs7O29CQUdDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQ1I7d0JBQ0QsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7d0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO3FCQUMvQjs7K0JBUkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=