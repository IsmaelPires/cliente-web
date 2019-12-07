import { IGenericResource } from "./igeneric-resource";
import { Observable } from "rxjs";

export interface IGenericOperations<T,N> {
    post(data : T);
    put(id? : N, data? : T);
    patch(id? : N, data?: T);
    get(): Observable<IGenericResource<T>>; //Array<T>;
    getById(id? : N) : Observable<T>;
    delete(id? : N);
}