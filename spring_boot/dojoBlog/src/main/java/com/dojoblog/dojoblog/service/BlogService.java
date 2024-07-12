package com.dojoblog.dojoblog.service;

import com.dojoblog.dojoblog.api.Dao.BlogDao;
import com.dojoblog.dojoblog.api.model.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BlogService {

    //automatically creates a BlogDao instance
    @Autowired
    private BlogDao blogDao;

    public Blog getBlog(Integer id){
        return blogDao.getBlog(id);
    }

    public List<Blog> getAllBlogs(){
        return blogDao.getAllBlogs();
    }

    public void postBlog(Blog blog){
        blogDao.postBlog(blog);
    }

    public void deleteBlog(Integer id){
        blogDao.deleteBlog(id);
    }
}
