using Remmory.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Remmory.Repositories
{
    public class ParentChildRelationshipRepository : BaseRepository, 
    {
        public List<ParentChildRelationshipRepository> GetAllParentChildRelationships()
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

                    var ParentChildRelationships = new List<ParentChildRelationshipRepository>();
                    while (reader.Read())
                    {
                        ParentChildRelationships.Add(new ParentChildRelationshipRepository()
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
    }
}
