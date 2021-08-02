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
    public class ParentChildRelationshipController : Controller
    {
        private readonly IParentChildRelationshipRepository _parentChildRelationshipRepository;
        private readonly IUserProfileRepository _userProfileRepository;


        public ParentChildRelationshipController(IParentChildRelationshipRepository parentChildRelationshipRepository, IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
            _parentChildRelationshipRepository = parentChildRelationshipRepository;
        }

        [HttpGet("relid/{id}")]
        public ActionResult GetByParentChildRelationshipId(int id)
        {
            return Ok(_parentChildRelationshipRepository.GetByParentChildRelationshipId(id));
        }

        [HttpGet("currentandparentid/{parentId}")]
        public ActionResult GetByCurrentUserAndParentId(int parentId)
        {
            var user = GetCurrentUserProfile();
            return Ok(_parentChildRelationshipRepository.GetByCurrentUserAndParentId(user.Id, parentId));
        }

        [HttpGet("currentandchildid/{childId}")]
        public ActionResult GetByCurrentUserAndChildId(int childId)
        {
            var user = GetCurrentUserProfile();
            return Ok(_parentChildRelationshipRepository.GetByCurrentUserAndChildId(childId, user.Id));
        }


        [HttpGet("allrels")]
        public ActionResult GetAllParentChildRelationships()
        {
            return Ok(_parentChildRelationshipRepository.GetAllParentChildRelationships());
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _parentChildRelationshipRepository.Delete(id);
            return NoContent();
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, ParentChildRelationship relationship)
        {
            if (id != relationship.Id)
            {
                return BadRequest();
            }
            _parentChildRelationshipRepository.Update(relationship);
            return NoContent();
        }

        [HttpPost]
        public IActionResult Add(ParentChildRelationship relationship)
        {
            _parentChildRelationshipRepository.Add(relationship);
            return CreatedAtAction(nameof(GetByParentChildRelationshipId), new { id = relationship.Id }, relationship);
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
