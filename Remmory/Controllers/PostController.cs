using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Remmory.Models;
using Remmory.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Remmory.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;

        public PostController(IPostRepository postRepository)
        {
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

        [HttpGet("parentchildid/{parentId}/{childId}")]
        public ActionResult GetAllPostsByParentIdAndChildId(int parentId, int childId)
        {
            return Ok(_postRepository.GetAllPostsByParentIdAndChildId(parentId, childId));
        }

        [HttpGet("parentchildiddate/{parentId}/{childId}")]
        public ActionResult GetAllPostsByParentIdAndChildIdAndDate(int parentId, int childId)
        {
            return Ok(_postRepository.GetAllPostsByParentIdAndChildIdAndDate(parentId, childId));
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
    }
}
