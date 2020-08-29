import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from 'src/app/shared/interfaces';
import { PostService } from '../../../app/shared/post.service';
import { AlertService } from '../../../app/admin/shared/services/alert.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  form: FormGroup;
  constructor(
    private postService: PostService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      text: new FormControl(null),
      author: new FormControl(null, [Validators.required])
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const post: Post = {
      title: this.form.value.title,
      text: this.form.value.text,
      author: this.form.value.author,
      date: new Date()
    };

    console.log(post);
    this.postService.create(post).subscribe(res => {
      console.log('Success:', res);
      this.form.reset();
      this.alert.success('Post was created');
    },
      (err) => {
        console.log('Error:', err);
      }
    );
  }

}
