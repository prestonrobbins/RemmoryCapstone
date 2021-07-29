using Microsoft.Extensions.Configuration;
using Remmory.Models;
using Remmory.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Remmory.Repositories
{
    public class ParentChildRelationshipRepository : BaseRepository, IParentChildRelationshipRepository
    {
        public ParentChildRelationshipRepository(IConfiguration configuration) : base(configuration) { }

        public List<ParentChildRelationship> GetAllParentChildRelationships()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
               SELECT Id, ParentId, ChildId
                      
                FROM ParentChildRelationship 
                ";

                    var reader = cmd.ExecuteReader();

                    var ParentChildRelationships = new List<ParentChildRelationship>();
                    while (reader.Read())
                    {
                        ParentChildRelationships.Add(new ParentChildRelationship()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            ParentId = DbUtils.GetInt(reader, "ParentId"),
                            ChildId = DbUtils.GetInt(reader, "ChildId")
                        });
                    }

                    reader.Close();

                    return ParentChildRelationships;
                }
            }
        }

        public ParentChildRelationship GetByParentChildRelationshipId(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, ParentId, ChildId
                          FROM ParentChildRelationship
                         WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    ParentChildRelationship parentChildRelationship = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        parentChildRelationship = new ParentChildRelationship()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            ChildId = DbUtils.GetInt(reader, "ChildId"),
                            ParentId = DbUtils.GetInt(reader, "ParentId")
                        };
                    }
                    reader.Close();

                    return parentChildRelationship;
                }
            }
        }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"DELETE FROM ParentChildRelationship 
                                        where id = @id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Update(ParentChildRelationship relationship)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE ParentChildRelationship
                           SET ParentId = @ParentId,
                               ChildId = @ChildId
                         WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@ParentId", relationship.ParentId);
                    DbUtils.AddParameter(cmd, "@ChildId", relationship.ChildId);
                    DbUtils.AddParameter(cmd, "@Id", relationship.Id);


                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Add(ParentChildRelationship relationship)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO ParentChildRelationship (ParentId, ChildId)
                                        OUTPUT INSERTED.ID
                                        VALUES (@ParentId, @ChildId)";
                    DbUtils.AddParameter(cmd, "@ParentId", relationship.ParentId);
                    DbUtils.AddParameter(cmd, "@ChildId", relationship.ChildId);

                    relationship.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
    }
}
