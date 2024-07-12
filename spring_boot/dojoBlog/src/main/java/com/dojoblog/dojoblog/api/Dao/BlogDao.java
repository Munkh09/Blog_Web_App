package com.dojoblog.dojoblog.api.Dao;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import com.dojoblog.dojoblog.api.model.Blog;
import org.springframework.stereotype.Repository;

@Repository
public class BlogDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public Blog getBlog(int id){
        try{
            String query = "SELECT * FROM blog WHERE id=?";
            return jdbcTemplate.queryForObject(query, new Object[]{id}, (rs, rowNum) ->
                    new Blog(
                            rs.getInt("id"),
                            rs.getString("title"),
                            rs.getString("author"),
                            rs.getString("body")
                    ));
        }catch(Exception e){
            System.out.println("Error Getting Blog With Id " + id + ": " + e.getMessage());
            return null;
        }
    }

    public List<Blog> getAllBlogs() {
        try{
            String query = "SELECT * FROM blog;";
            return jdbcTemplate.query(query, (rs, rowNum) ->
                    new Blog(
                            rs.getInt("id"),
                            rs.getString("title"),
                            rs.getString("author"),
                            rs.getString("body")
                    ));
        } catch(Exception e){
            System.out.println("Error Getting All Blogs: " + e.getMessage());
            return null;
        }
    }

    public void postBlog(Blog blog){
        try{
            String sql = "INSERT INTO blog (author, title, body) VALUES (?,?,?);";
            jdbcTemplate.update(sql, blog.getAuthor(), blog.getTitle(), blog.getBody());
        }catch(Exception e){
            System.out.println("Post Blog Error: " + e.getMessage());
        }
    }

    public void deleteBlog(int id){
        String sql = "DELETE FROM blog WHERE id=?";
        jdbcTemplate.update(sql, id);
    }

}
