import { Injectable } from '@angular/core';
import{ Post } from './post.model';

@Injectable({ providedIn: 'root'})
export class PostService{
    listofPosts: Post[]=[
        new Post("Tech Crunch", "https://www.allthingsdogs.com/wp-content/uploads/2019/10/Long-Haired-Dachshund-What-To-Know-About-This-Stunning-Dachshund-Cover.jpg",
        "California is the world’s breadbasket, which means we collect, transport and store as much water as possible. About 12% of the energy produced in the state is used to pump water."
        , "Cidddd", new Date())
    ];

    getPost(){
        return this.listofPosts;
    }
    deleteButton(index: number){
        this.listofPosts.splice(index, 1);
    }
    addPost(post: Post){
        this.listofPosts.push(post);
    }
    updatePost(index: number, post: Post ){
        this.listofPosts[index] = post;
    }
    getSpecPost(index: number){
        return this.listofPosts[index];
    }
}