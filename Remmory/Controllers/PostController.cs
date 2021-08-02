using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Remmory.Models;
using Remmory.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Remmory.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;
        private readonly IUserProfileRepository _userProfileRepository;
        public PostController(IPostRepository postRepository, IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
            _postRepository = postRepository;
        }

        [HttpGet]
        public IActionResult GetAllPosts()
        {
            return Ok(_postRepository.GetAllPosts());
        }

        [HttpGet("postid/{id}")]
        public ActionResult GetPostById(int id)
        {
            return Ok(_postRepository.GetPostById(id));
        }

        [HttpGet("parentchildid/{childId}")]
        public ActionResult GetAllPostsByParentIdAndChildId(int childId)
        {
            var user = GetCurrentUserProfile();
            return Ok(_postRepository.GetAllPostsByParentIdAndChildId(user.Id, childId));
        }

        [HttpGet("Parentchildiddate/{parentId}")]
        public ActionResult GetAllPostsByParentIdAndChildIdAndDate(int parentId)
        {
            var user = GetCurrentUserProfile();
            return Ok(_postRepository.GetAllPostsByParentIdAndChildIdAndDate(parentId, user.Id));
        }

        [HttpPost]
        public IActionResult AddPost(Post post)
        {
            post.DateTimeCreated = DateTime.Now;
            _postRepository.AddPost(post);
            return CreatedAtAction(nameof(GetPostById), new { id = post.Id }, post);
        }

        [HttpPut("{id}")]
        public IActionResult UpdatePost(int id, Post post)
        {
            if (id != post.Id)
            {
                return BadRequest();
            }
            _postRepository.UpdatePost(post);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeletePostById(int id)
        {
            _postRepository.DeletePostById(id);
            return NoContent();
        }

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            if (firebaseUserId != null)
            {
                return _userProfileRepository.GetUserByFirebaseUserId(firebaseUserId);
            }
            else
            {
                return null;
            }
        }
    }
}
