using System.Collections.Generic;
using Remmory.Models;

namespace Remmory.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        UserProfile GetByUserId(int id);
        void DeleteUserById(int id);
        UserProfile GetByFirebaseUserId(string firebaseUserId);
        List<UserProfile> GetAllUserProfiles();

        //public List<UserProfile> GetAdminUsers();
    }
}