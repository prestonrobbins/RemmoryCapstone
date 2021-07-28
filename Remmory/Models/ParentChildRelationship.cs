using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Remmory.Models
{
    public class ParentChildRelationship
    {
        public int Id { get; set; }
        [Required]
        public int ParentId { get; set; }
        [Required]
        public int ChildId { get; set; }

    }
}
