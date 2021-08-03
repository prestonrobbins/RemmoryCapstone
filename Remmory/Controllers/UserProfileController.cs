using Microsoft.AspNetCore.Mvc;
using System;
using Remmory.Models;
using Remmory.Repositories;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace Remmory.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _userProfileRepository;
        public UserProfileController(IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
        }

        [Authorize]
        [HttpGet("children")]
        public ActionResult GetAllChildrenByParentId()
        {
            var user = GetCurrentUserProfile();
            return Ok(_userProfileRepository.GetAllChildrenByParentId(user.Id));
        }


        [Authorize]
        [HttpGet("parents")]
        public ActionResult GetAllParentsByChildId()
        {
            var user = GetCurrentUserProfile();
            return Ok(_userProfileRepository.GetAllParentsByChildId(user.Id));
        }

        //[HttpGet("GetAdminUsers")]
        //public IActionResult GetAllAdminUsers()
        //{
        //    return Ok(_userProfileRepository.GetAdminUsers());
        //}

        [Authorize]
        [HttpGet("getuser/{id}")]
        public IActionResult GetByUserId(int id)
        {
            return Ok(_userProfileRepository.GetByUserId(id));
        }

        [HttpGet("{firebaseUserId}")]
        public IActionResult GetUserByFirebaseUserId(string firebaseUserId)
        {
            return Ok(_userProfileRepository.GetUserByFirebaseUserId(firebaseUserId));
        }

        [Authorize]
        [HttpGet("GetAllUsers")]
        public IActionResult GetAllUserProfiles()
        {
            return Ok(_userProfileRepository.GetAllUserProfiles());
        }

        [HttpGet("DoesUserExist/{firebaseUserId}")]
        public IActionResult DoesUserExist(string firebaseUserId)
        {
            var userProfile = _userProfileRepository.GetUserByFirebaseUserId(firebaseUserId);
            if (userProfile == null)
            {
                return NotFound();
            }
            return Ok();
        }
        [Authorize]
        [HttpPut("{id}")]
        public IActionResult UpdateUser(int id, UserProfile user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }
            _userProfileRepository.UpdateUser(user);
            return NoContent();
        }

        [Authorize]
        [HttpPost]
        public IActionResult AddUser(UserProfile user)
        {
            _userProfileRepository.AddUser(user);
            return CreatedAtAction(nameof(GetByUserId), new { id = user.Id }, user);
        }

        [Authorize]
        [HttpDelete("{id}")]
        public IActionResult DeleteUserById(int id)
        {
            _userProfileRepository.DeleteUserById(id);
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

        [HttpGet("SearchForUsersByName")]
        public IActionResult SearchForUsersByName(string q)
        {
            var user = GetCurrentUserProfile();
            var users = _userProfileRepository.SearchForUsersByName(q, user.Id);
            if (users == null)
            {
                return NotFound();
            }
            return Ok(users);
        }
        //[HttpPost]
        //public IActionResult Post(UserProfile userProfile)
        //{
        //    userProfile.CreateDateTime = DateTime.Now;
        //    userProfile.UserTypeId = UserType.AUTHOR_ID;
        //    _userProfileRepository.Add(userProfile);
        //    return CreatedAtAction(
        //        nameof(GetUserProfile),
        //        new { firebaseUserId = userProfile.FirebaseUserId },
        //        userProfile);
        //}
    }
}
