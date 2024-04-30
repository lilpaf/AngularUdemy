import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription, map } from 'rxjs';
import { PostModel } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  isFetching = false;
  loadedPosts: PostModel[] = [];
  errorMessage: string | null = null;
  subscription!: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.subscription = this.postService.error.subscribe((errorMessage) => {
      this.errorMessage = errorMessage;
    });
    this.onFetchPosts();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onCreatePost(postData: PostModel) {
    // Send Http request
    this.postService.createAndStorePost(postData.title, postData.content);
    //this.postService
    //  .createAndStorePost(postData.title, postData.content)
    //  .subscribe({
    //    next: () => this.onFetchPosts(),
    //    error: (error: HttpErrorResponse) => (this.error = error.message),
    //  });
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postService.fetchPosts().subscribe({
      next: (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = error.message;
        console.log(error);
      },
    });
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }
}
