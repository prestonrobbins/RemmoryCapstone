using Remmory.Models;
using System.Collections.Generic;

namespace Remmory.Repositories
{
    public interface IPostRepository
    {
        void AddPost(Post post);
        void DeletePostById(int id);
        List<Post> GetAllPosts();
        List<Post> GetAllPostsByParentIdAndChildId(int parentId, int childId);
        List<Post> GetAllPostsByParentIdAndChildIdAndDate(int parentId, int childId);
        Post GetPostById(int id);
        void UpdatePost(Post post);
    }
}