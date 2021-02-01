using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Project_P34.DataAccess.Entity
{
    [Table("tblCart")]
   public class Cart
    {
        [Key]
        public string Id { get; set; }
        //Id product 1-8
        public ICollection<Product> Products { get; set; }
        //id userMoreinfo 1-1
        public virtual UserMoreInfo UserMoreInfo { get; set; }
    }
}
