using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Security.Claims;
using Remmory.Models;
using Remmory.Utils;
using Microsoft.Data.SqlClient;

namespace Remmory.Repositories
{
    public class UserProfileRepository : BaseRepository, IUserProfileRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

        public List<UserProfile> GetAllUserProfiles()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
               SELECT up.Id, up.FirebaseUserId, up.FirstName, up.LastName, 
                      up.Email, up.DateOfBirth
                      
                FROM UserProfile up 
                ";

                    var reader = cmd.ExecuteReader();

                    var UserProfiles = new List<UserProfile>();
                    while (reader.Read())
                    {
                        UserProfiles.Add(new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                            FirstName = DbUtils.GetString(reader, "FirstName"),
                            LastName = DbUtils.GetString(reader, "LastName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            DateOfBirth = DbUtils.GetDateTime(reader, "DateOfBirth")
                        });
                    }

                    reader.Close();

                    return UserProfiles;
                }
            }
        }

        public List<UserProfile> GetAllChildrenByParentId(int parentId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                SELECT 
                    up.Id, 
                    up.FirebaseUserId, 
                    up.FirstName, 
                    up.LastName, 
                    up.Email, 
                    up.DateOfBirth
                      
                FROM ParentChildRelationship pc 
                JOIN UserProfile up ON pc.ChildId = up.Id
                WHERE pc.ParentId = @ParentId
                ";
                    DbUtils.AddParameter(cmd, "@ParentId", parentId);

                    var reader = cmd.ExecuteReader();

                    var UserProfiles = new List<UserProfile>();
                    while (reader.Read())
                    {
                        UserProfiles.Add(new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                            FirstName = DbUtils.GetString(reader, "FirstName"),
                            LastName = DbUtils.GetString(reader, "LastName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            DateOfBirth = DbUtils.GetDateTime(reader, "DateOfBirth")
                        });
                    }


                    reader.Close();

                    return UserProfiles;
                }
            }
        }

        public List<UserProfile> GetAllParentsByChildId(int childId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                SELECT 
                    up.Id, 
                    up.FirebaseUserId, 
                    up.FirstName, 
                    up.LastName, 
                    up.Email, 
                    up.DateOfBirth
                      
                FROM ParentChildRelationship pc 
                JOIN UserProfile up ON pc.ParentId = up.Id
                WHERE pc.ChildId = @ChildId
                ";
                    DbUtils.AddParameter(cmd, "@ChildId", childId);

                    var reader = cmd.ExecuteReader();

                    var UserProfiles = new List<UserProfile>();
                    while (reader.Read())
                    {
                        UserProfiles.Add(new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                            FirstName = DbUtils.GetString(reader, "FirstName"),
                            LastName = DbUtils.GetString(reader, "LastName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            DateOfBirth = DbUtils.GetDateTime(reader, "DateOfBirth")
                        });
                    }


                    reader.Close();

                    return UserProfiles;
                }
            }
        }

        public UserProfile GetByUserId(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT up.Id, Up.FireBaseUserId, up.FirstName, up.LastName, 
                               up.Email, up.DateOfBirth
                          FROM UserProfile up
                         WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    UserProfile userProfile = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        userProfile = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            FirebaseUserId = DbUtils.GetString(reader, "FireBaseUserId"),
                            FirstName = DbUtils.GetString(reader, "FirstName"),
                            LastName = DbUtils.GetString(reader, "LastName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            DateOfBirth = DbUtils.GetDateTime(reader, "DateOFBirth"),

                        };
                    }
                    reader.Close();

                    return userProfile;
                }
            }
        }

        public UserProfile GetUserByFirebaseUserId(string firebaseUserId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT up.Id, Up.FireBaseUserId, up.FirstName, up.LastName, 
                               up.Email, up.DateOfBirth
                          FROM UserProfile up
                         WHERE FireBaseUserId = @FireBaseuserId";

                    DbUtils.AddParameter(cmd, "@FireBaseUserId", firebaseUserId);

                    UserProfile userProfile = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        userProfile = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            FirebaseUserId = DbUtils.GetString(reader, "FireBaseUserId"),
                            FirstName = DbUtils.GetString(reader, "FirstName"),
                            LastName = DbUtils.GetString(reader, "LastName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            DateOfBirth = DbUtils.GetDateTime(reader, "DateOFBirth"),

                        };
                    }
                    reader.Close();

                    return userProfile;
                }
            }
        }


        public void DeleteUserById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"DELETE FROM UserProfile 
                                        where id = @id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }


        public List<UserProfile> SearchForUsersByName(string criterion, int currentUserId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT DISTINCT up.Id, 
                                    Up.FireBaseUserId, 
                                    up.FirstName, 
                                    up.LastName,                 
                                    up.Email, 
                                    up.DateOfBirth
                    From UserProfile up
                    LEFT JOIN ParentChildRelationship pc ON pc.ParentId = up.Id 
                    OR pc.ChildId = up.Id
                    WHERE up.[firstName] LIKE @Criterion AND NOT up.Id = @currentUserId 
                    AND (up.Id NOT IN 
                    (SELECT up.id From UserProfile up
                    JOIN ParentChildRelationship pc ON pc.ParentId = up.Id 
                    OR pc.ChildId = up.Id
                    WHERE pc.ParentId = @currentUserId OR pc.ChildId = @currentUserId ) OR pc.ChildId IS NULL)
                    ORDER BY up.[firstName] DESC";

                    DbUtils.AddParameter(cmd, "@Criterion", $"%{criterion}%");
                    DbUtils.AddParameter(cmd, "@currentUserId", currentUserId);
                    var reader = cmd.ExecuteReader();

                    var expenses = new List<UserProfile>();

                    while (reader.Read())
                    {
                        expenses.Add(NewUserProfileFromReader(reader));
                    }

                    reader.Close();

                    return expenses;
                }
            }
        }

        private UserProfile NewUserProfileFromReader(SqlDataReader reader)
        {
            return new UserProfile()
            {
                Id = DbUtils.GetInt(reader, "Id"),
                FirebaseUserId = DbUtils.GetString(reader, "FireBaseUserId"),
                FirstName = DbUtils.GetString(reader, "FirstName"),
                LastName = DbUtils.GetString(reader, "LastName"),
                Email = DbUtils.GetString(reader, "Email"),
                DateOfBirth = DbUtils.GetDateTime(reader, "DateOFBirth"),
            };
        }


        //public List<UserProfile> GetAdminUsers()
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using(var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"select id, usertypeid, displayname from UserProfile where usertypeid =1";

        //            var reader = cmd.ExecuteReader();

        //            var profiles = new List<UserProfile>();
        //            while(reader.Read())
        //            {
        //                profiles.Add(new UserProfile()
        //                {
        //                    Id = DbUtils.GetInt(reader, "id"),
        //                    UserTypeId = DbUtils.GetInt(reader, "usertypeid"),
        //                    DisplayName=DbUtils.GetString(reader, "displayname")


        //                });
        //            }

        //            reader.Close();
        //            return profiles;
        //        }
        //    }
        //}

        public void UpdateUser(UserProfile user)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE UserProfile
                           SET FirebaseUserId = @FireBaseUserId,
                               FirstName = @FirstName,
                               LastName = @LastName,
                               Email = @Email,
                               DateOfBirth = @DateOfBirth
                         WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@FireBaseUserId", user.FirebaseUserId);
                    DbUtils.AddParameter(cmd, "@FirstName", user.FirstName);
                    DbUtils.AddParameter(cmd, "@LastName", user.LastName);
                    DbUtils.AddParameter(cmd, "@Email", user.Email);
                    DbUtils.AddParameter(cmd, "@DateOfBirth", user.DateOfBirth);
                    DbUtils.AddParameter(cmd, "@Id", user.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }


        public void AddUser(UserProfile userProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO UserProfile (FirebaseUserId, FirstName, LastName, 
                                                                 Email, DateOfBirth)
                                        OUTPUT INSERTED.ID
                                        VALUES (@FirebaseUserId, @FirstName, @LastName, 
                                                @Email, @DateOfBirth)";
                    DbUtils.AddParameter(cmd, "@FirebaseUserId", userProfile.FirebaseUserId);
                    DbUtils.AddParameter(cmd, "@FirstName", userProfile.FirstName);
                    DbUtils.AddParameter(cmd, "@LastName", userProfile.LastName);
                    DbUtils.AddParameter(cmd, "@Email", userProfile.Email);
                    DbUtils.AddParameter(cmd, "@DateOfBirth", userProfile.DateOfBirth);

                    userProfile.Id = (int)cmd.ExecuteScalar();
                }
            }
        }






        /*
        public UserProfile GetByFirebaseUserId(string firebaseUserId)
        {
            return _context.UserProfile
                       .Include(up => up.UserType) 
                       .FirstOrDefault(up => up.FirebaseUserId == firebaseUserId);
        }

        public void Add(UserProfile userProfile)
        {
            _context.Add(userProfile);
            _context.SaveChanges();
        }
        */
    }
}


