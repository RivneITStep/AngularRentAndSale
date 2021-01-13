using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Project_P34.DataAccess.Entity
{
    [Table("tblUserMoreInfo")]
    public class UserMoreInfo
    {
        [Key]
        public string Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        public string Phone { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }

        [Required]
        public string Promocode { get; set; }

        [Required]
        public string Image { get; set; }
        //id user
        public virtual User User { get; set; }

        //id comment   1user - 8 comment +
        public ICollection<Commentaries> Commentariess {get;set;}
        //id wishlist           1user - 1 wishlist +
        public virtual WishList WishLists { get; set; }
        //id cart            1user - 1 cart +
        public virtual Cart Carts { get; set; }
        //id viewedProduct      1user - 1 viewedProduct +
        public virtual ViewedProducts ViewedProducts { get; set; }




        //id zhaloba   1user - 8 zhaloba  ?
        //public ICollection<Commentaries> Zhaloba { get; set; }
    }
}
