using Microsoft.AspNetCore.Mvc;
using System;
using Remmory.Models;
using Remmory.Repositories;

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

        
        [HttpGet("children/{parentId}")]
        public ActionResult GetAllChildrenByParentId(int parentId)
        {
            return Ok(_userProfileRepository.GetAllChildrenByParentId(parentId));
        }

        [HttpGet("parents/{childId}")]
        public ActionResult GetAllParentsByChildId(int childId)
        {
            return Ok(_userProfileRepository.GetAllParentsByChildId(childId));
        }

        //[HttpGet("GetAdminUsers")]
        //public IActionResult GetAllAdminUsers()
        //{
        //    return Ok(_userProfileRepository.GetAdminUsers());
        //}


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

        [HttpPost]
        public IActionResult AddUser(UserProfile user)
        {
            _userProfileRepository.AddUser(user);
            return CreatedAtAction(nameof(GetByUserId), new { id = user.Id }, user);
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteUserById(int id)
        {
            _userProfileRepository.DeleteUserById(id);
            return NoContent();
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
