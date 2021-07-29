using Remmory.Models;
using System.Collections.Generic;

namespace Remmory.Repositories
{
    public interface IUserProfileRepository
    {
        void AddUser(UserProfile userProfile);
        void DeleteUserById(int id);
        List<UserProfile> GetAllUserProfiles();
        UserProfile GetByFirebaseUserId(string firebaseUserId);
        UserProfile GetByUserId(int id);
        void UpdateUser(UserProfile user);
    }
}