import { Controller } from '../../../controller/Controller';

export function Authenticated(): Function {
    return function (target: Controller<any, any, any, any>, propertyKey: string, descriptor: PropertyDescriptor) {
        if (!target.authenticatedActions) {
            target.authenticatedActions = new Set<string>();
        }
        target.authenticatedActions.add(propertyKey);
    };
}
