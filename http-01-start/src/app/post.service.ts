import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from './post.model';
import { Subject, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url =
    'https://ng-complete-guide-c1849-default-rtdb.europe-west1.firebasedatabase.app/posts.json';
  error = new Subject<string>();

  constructor(private httpClient: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: PostModel = { title: title, content: content };

    //return this.httpClient.post<{ name: string }>(this.url, postData);

    this.httpClient.post<{ name: string }>(this.url, postData).subscribe({
      next: (responseData) => console.log(responseData),
      error: (error: HttpErrorResponse) => this.error.next(error.message),
    });
  }

  fetchPosts() {
    return this.httpClient.get<{ [key: string]: PostModel }>(this.url).pipe(
      map((responseData) => {
        const postArray: PostModel[] = [];

        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({ ...responseData[key], id: key });
          }
        }

        return postArray;
      }),
      catchError((errorRes) => {
        // Send to analytics server
        return throwError(errorRes);
      })
    );
  }

  deletePosts() {
    return this.httpClient.delete(this.url);
  }
}
