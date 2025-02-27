import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const httpCoreInterceptor: HttpInterceptorFn = (req, next) => {

  const headers = req.clone({
    setHeaders: {
      'Content-Type': 'application/json, text/plain',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    }
  });

  return next(headers).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {        
        if (err.status === 401) {        
          console.error('Unauthorized request:', err);
        } 
        else {
          console.error('HTTP error:', err);
        }
      } 
      else {
        console.error('An error occurred:', err);
      }

      return throwError(() => err); 
    })
  );
};