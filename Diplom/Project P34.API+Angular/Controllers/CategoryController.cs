using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Project_IDA.DTO.Models.Result;
using Project_P34.DataAccess;
using Project_P34.DataAccess.Entity;
using Project_P34.DTO.Models;

namespace Project_P34.API_Angular.Controllers
{
    [Route("api/Category")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly EFContext _context;

        public CategoryController(EFContext context)
        {
            _context = context;

        }
        //***

        [HttpGet("getCategories")]
        public IEnumerable<CategoryDTO> getCategories()
        {
            List<CategoryDTO> data = new List<CategoryDTO>();

            var dataFromDB = _context.categories.ToList();

            foreach (var item in dataFromDB)
            {
                CategoryDTO temp = new CategoryDTO();

                temp.Id = item.Id;
                temp.Name = item.Name;

                data.Add(temp);
            }
            return data;
        }


        [HttpPost("addCategory")]
        public ResultDto addCategory([FromBody] CategoryDTO model)
        {
            Category categories = new Category();

            categories.Id = Guid.NewGuid().ToString();
            categories.Name = model.Name;

            _context.categories.Add(categories);

            _context.SaveChanges();

            return new ResultDto
            {
                Status = 200,
                Message = "OK"
            };

        }


        [HttpPost("editCategory/{id}")]
        public ResultDto editCategory([FromRoute] string id, [FromBody] CategoryDTO model)
        {
            var categories = _context.categories.FirstOrDefault(t => t.Id == id);

            categories.Name = model.Name;
            categories.Id = model.Id;


            _context.SaveChanges();

            return new ResultDto
            {
                Status = 200,
                Message = "OK"
            };

        }


        [HttpPost("removeCategory/{id}")]
        public ResultDto removeCategory([FromRoute] string id)
        {
            try
            {
                var category = _context.categories.FirstOrDefault(t => t.Id == id);

                var subcategory = _context.subCategories.Where(e => e.CategoryId == id).ToList();


                if (subcategory.Count != 0)
                {
                    foreach (var itemSub in subcategory)
                    {

                var products = _context.products.Where(t => t.SubcategoryId == itemSub.Id).ToList();
                        foreach (var item in products)
                        {
                            var images = _context.images.Where(t => t.ProductId == item.Id).ToList();
                            if (images.Count != 0)
                            {
                                foreach (var itemImage in images)
                                {
                                    _context.images.Remove(itemImage);
                                }
                            }
                            _context.products.Remove(item);
                        }
                _context.subCategories.Remove(itemSub);
                    }
                }
                _context.categories.Remove(category);

                _context.SaveChanges();




                return new ResultDto
                {
                    Status = 200,
                    Message = "Ok"
                };

            }
            catch (Exception e)
            {
                List<string> temp = new List<string>();
                temp.Add(e.Message);

                return new ResultDto
                {
                    Status = 500,
                    Message = "Error",
                    Errors = temp
                };

            }
        }



        [HttpPost("searchCategory/{search}")]
        public Task<IEnumerable<CategoryDTO>> searchByCategory([FromRoute] string searchString)
        {
            var cats = from m in _context.categories
                       select m;

            if (!String.IsNullOrEmpty(searchString))
            {
                cats = cats.Where(s => s.Name.Contains(searchString));
            }
            return (Task<IEnumerable<CategoryDTO>>)cats;
        }

    }
}
