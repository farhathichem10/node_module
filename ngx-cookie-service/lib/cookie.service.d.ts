import { InjectionToken } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class CookieService {
    private document;
    private platformId;
    private readonly documentIsAccessible;
    constructor(document: any, platformId: InjectionToken<object>);
    /**
     * @param name Cookie name
     * @returns boolean - whether cookie with specified name exists
     */
    check(name: string): boolean;
    /**
     * @param name Cookie name
     * @returns property value
     */
    get(name: string): string;
    /**
     * @returns all the cookies in json
     */
    getAll(): {
        [key: string]: string;
    };
    /**
     * @param name     Cookie name
     * @param value    Cookie value
     * @param expires  Number of days until the cookies expires or an actual `Date`
     * @param path     Cookie path
     * @param domain   Cookie domain
     * @param secure   Secure flag
     * @param sameSite OWASP samesite token `Lax`, `None`, or `Strict`. Defaults to `Lax`
     */
    set(name: string, value: string, expires?: number | Date, path?: string, domain?: string, secure?: boolean, sameSite?: 'Lax' | 'None' | 'Strict'): void;
    /**
     * Cookie's parameters:
     * <pre>
     * expires  Number of days until the cookies expires or an actual `Date`
     * path     Cookie path
     * domain   Cookie domain
     * secure   Secure flag
     * sameSite OWASP samesite token `Lax`, `None`, or `Strict`. Defaults to `Lax`
     * </pre>
     * @param name     Cookie name
     * @param value    Cookie value
     * @param options  Body with cookie's params
     */
    set(name: string, value: string, options?: {
        expires?: number | Date;
        path?: string;
        domain?: string;
        secure?: boolean;
        sameSite?: 'Lax' | 'None' | 'Strict';
    }): void;
    /**
     * @param name   Cookie name
     * @param path   Cookie path
     * @param domain Cookie domain
     */
    delete(name: string, path?: string, domain?: string, secure?: boolean, sameSite?: 'Lax' | 'None' | 'Strict'): void;
    /**
     * @param path   Cookie path
     * @param domain Cookie domain
     */
    deleteAll(path?: string, domain?: string, secure?: boolean, sameSite?: 'Lax' | 'None' | 'Strict'): void;
    /**
     * @param name Cookie name
     * @returns property RegExp
     */
    private getCookieRegExp;
    private safeDecodeURIComponent;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<CookieService, never>;
}

//# sourceMappingURL=cookie.service.d.ts.map