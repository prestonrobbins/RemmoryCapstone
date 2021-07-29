using Remmory.Models;
using System.Collections.Generic;

namespace Remmory.Repositories
{
    public interface IUserProfileRepository
    {
        void AddUser(UserProfile userProfile);
        void DeleteUserById(int id);
        List<UserProfile> GetAllChildrenByParentId(int parentId);
        List<UserProfile> GetAllParentsByChildId();
        List<UserProfile> GetAllUserProfiles();
        UserProfile GetByUserId(int id);
        UserProfile GetUserByFirebaseUserId(string firebaseUserId);
        void UpdateUser(UserProfile user);
    }
}