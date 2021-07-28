using Microsoft.Extensions.Configuration;
using Remmory.Models;
using Remmory.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Remmory.Repositories
{
    public class PostRepository : BaseRepository, IPostRepository
    {
        public PostRepository(IConfiguration configuration) : base(configuration) { }

        public Post GetPostById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT
                    p.Id,
                    p.Title,
                    p.TextContent,
                    p.MediaUrl,
                    p.DateTimeCreated,
                    p.DateTimeToPost,
                    p.ParentChildRelId

                    FROM Post p
                    ";

                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();

                    Post post = null;
                    while (reader.Read())
                    {
                        if (post == null)
                        {
                            post = new Post()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Title = DbUtils.GetString(reader, "Title"),
                                TextContent = DbUtils.GetString(reader, "Content"),
                                MediaUrl = DbUtils.GetString(reader, "ImageLocation"),
                                DateTimeCreated = DbUtils.GetDateTime(reader, "CreateDateTime"),
                                DateTimeToPost = DbUtils.GetDateTime(reader, "PublishDateTime"),
                                ParentChildRelId = DbUtils.GetInt(reader, "ParentChildRelId")

                            };
                        }

                    }
                    reader.Close();
                    return post;
                }
            }
        }

        public List<Post> GetAllPostsByParentIdAndChildId(int parentId, int childId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
               SELECT p.Id, p.Title, p.Textcontent, p.MediaUrl, 
                      p.DateTimeCreated, p.DateTimeToPost, p.ParentChildRelId
                      
                FROM UserProfile up
                    JOIN ParentChildRelationship pc ON pc.ParentId = up.Id
                    JOIN Post p ON p.ParentChildRelId = pc.Id
                    WHERE pc.ParentId = @ParentId AND pc.ChildId = @ChildId
                ";
                    DbUtils.AddParameter(cmd, "@ChildId", childId);
                    DbUtils.AddParameter(cmd, "@ParentId", parentId);


                    var reader = cmd.ExecuteReader();
                    var posts = new List<Post>();
                    while (reader.Read())
                    {
                        posts.Add(new Post()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Title = DbUtils.GetString(reader, "Title"),
                            TextContent = DbUtils.GetString(reader, "TextContent"),
                            MediaUrl = DbUtils.GetString(reader, "MediaUrl"),
                            DateTimeCreated = DbUtils.GetDateTime(reader, "DateTimeCreated"),
                            DateTimeToPost = DbUtils.GetDateTime(reader, "DateTimeToPost"),
                            ParentChildRelId = DbUtils.GetInt(reader, "ParentChildRelId")
                        });
                    }
                    reader.Close();
                    return posts;
                }
            }
        }


        public List<Post> GetAllPostsByParentIdAndChildIdAndDate(int parentId, int childId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
               SELECT p.Id, p.Title, p.Textcontent, p.MediaUrl, 
                      p.DateTimeCreated, p.DateTimeToPost, p.ParentChildRelId
                      
                FROM UserProfile up
                    JOIN ParentChildRelationship pc ON pc.ParentId = up.Id
                    JOIN Post p ON p.ParentChildRelId = pc.Id
                    WHERE pc.ParentId = @ParentId AND pc.ChildId = @ChildId AND DateTimeToPost <= GETDATE()
                    ";
                    DbUtils.AddParameter(cmd, "@ChildId", childId);
                    DbUtils.AddParameter(cmd, "@ParentId", parentId);


                    var reader = cmd.ExecuteReader();
                    var posts = new List<Post>();
                    while (reader.Read())
                    {
                        posts.Add(new Post()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Title = DbUtils.GetString(reader, "Title"),
                            TextContent = DbUtils.GetString(reader, "TextContent"),
                            MediaUrl = DbUtils.GetString(reader, "MediaUrl"),
                            DateTimeCreated = DbUtils.GetDateTime(reader, "DateTimeCreated"),
                            DateTimeToPost = DbUtils.GetDateTime(reader, "DateTimeToPost"),
                            ParentChildRelId = DbUtils.GetInt(reader, "ParentChildRelId")
                        });
                    }
                    reader.Close();
                    return posts;
                }
            }
        }

        public void AddPost(Post post)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            INSERT INTO POST (Title, TextContent, MediaUrl, DateTimeCreated, DateTimeToPost, ParentChildRelId)
                            OUTPUT INSERTED.ID
                            VALUES(
                                @Title, @TextContent, @MediaUrl, @DateTimeCreated, @DateTimeToPost, @ParentChildRelId)";

                    DbUtils.AddParameter(cmd, @"Title", post.Title);
                    DbUtils.AddParameter(cmd, "@TextContent", post.TextContent);
                    DbUtils.AddParameter(cmd, "@MediaUrl", post.MediaUrl);
                    DbUtils.AddParameter(cmd, "@DateTimeCreated", post.DateTimeCreated);
                    DbUtils.AddParameter(cmd, "@DateTimeToPost", post.DateTimeToPost);
                    DbUtils.AddParameter(cmd, "@ParentChildRelId", post.ParentChildRelId);

                    post.Id = (int)cmd.ExecuteScalar();

                }
            }
        }

        public void UpdatePost(Post post)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Post
                           SET Title = @Title,
                               TextContent = @TextContent,
                               MediaUrl = @MediaUrl,
                               DateTimeCreated = @DateTimeCreated,
                               DateTimeToPost = @DateTimeToPost,
                               ParentChildRelId = @ParentChildRelId
                         WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Title", post.Title);
                    DbUtils.AddParameter(cmd, "@TextContent", post.TextContent);
                    DbUtils.AddParameter(cmd, "@MediaUrl", post.MediaUrl);
                    DbUtils.AddParameter(cmd, "@DateTimeCreated", post.DateTimeCreated);
                    DbUtils.AddParameter(cmd, "@DatetimeToPost", post.DateTimeToPost);
                    DbUtils.AddParameter(cmd, "@ParentChildRelId", post.ParentChildRelId);
                    DbUtils.AddParameter(cmd, "@Id", post.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeletePostById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"DELETE FROM Post 
                                        where id = @id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }



    }
}
