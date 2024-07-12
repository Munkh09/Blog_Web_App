package com.dojoblog.dojoblog.api.controller;

import com.dojoblog.dojoblog.api.model.Blog;
import com.dojoblog.dojoblog.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BlogController {

    @Autowired
    private BlogService blogService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/blogs")
    public Blog getBlog(@RequestParam Integer id){
        return blogService.getBlog(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/blogs/all")
    public List<Blog> getBlogs(){
        return blogService.getAllBlogs();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/blogs/post")
    public void postBlog(@RequestBody Blog blog){
        blogService.postBlog(blog);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/delete/blog")
    public void deleteBlog(@RequestParam Integer id){
        blogService.deleteBlog(id);
    }
}
