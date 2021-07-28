using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Remmory.Models
{
    public class Post
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string TextContent { get; set; }
        [Required]
        public string MediaUrl { get; set; }
        [Required]
        public DateTime DateTimeCreated { get; set; }
        [Required]
        public DateTime DateTimeToPost { get; set; }
        [Required]
        public int ParentChildRelId { get; set; }
    }
}
