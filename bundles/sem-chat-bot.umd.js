(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('sem-chat-bot', ['exports', '@angular/core'], factory) :
    (factory((global['sem-chat-bot'] = {}),global.ng.core));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtLWNoYXQtYm90LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vc2VtLWNoYXQtYm90L2xpYi9zZW0tY2hhdC1ib3Quc2VydmljZS50cyIsIm5nOi8vc2VtLWNoYXQtYm90L2xpYi9zZW0tY2hhdC1ib3QuY29tcG9uZW50LnRzIiwibmc6Ly9zZW0tY2hhdC1ib3QvbGliL3NlbS1jaGF0LWJvdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZW1DaGF0Qm90U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zZW0tY2hhdC1ib3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgc2VtLWNoYXQtYm90IHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTZW1DaGF0Qm90Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZW1DaGF0Qm90Q29tcG9uZW50IH0gZnJvbSAnLi9zZW0tY2hhdC1ib3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTZW1DaGF0Qm90Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NlbUNoYXRCb3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbUNoYXRCb3RNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OztnQ0FKRDs7Ozs7OztBQ0FBO1FBYUU7U0FBaUI7Ozs7UUFFakIsc0NBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsUUFBUSxFQUFFLG9EQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7O2tDQVZEOzs7Ozs7O0FDQUE7Ozs7b0JBR0NDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFDUjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7cUJBQy9COzsrQkFSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==