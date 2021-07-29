using Remmory.Models;
using System.Collections.Generic;

namespace Remmory.Repositories
{
    public interface IParentChildRelationshipRepository
    {
        void Add(ParentChildRelationship relationship);
        void Delete(int id);
        List<ParentChildRelationship> GetAllParentChildRelationships();
        ParentChildRelationship GetByParentChildRelationshipId(int id);
        void Update(ParentChildRelationship relationship);
    }
}