using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project_IDA.DTO.Models.Result;
using Project_P34.DataAccess;
using Project_P34.DataAccess.Entity;
using Project_P34.DTO.Models;

namespace Project_P34.API_Angular.Controllers
{
    [Route("api/Product")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly EFContext _context;

        public ProductController(EFContext context)
        {
            _context = context;
        }

        [HttpGet("getProducts")]
        public IEnumerable<ProductDTO> getProducts()
        {
            List<ProductDTO> data = new List<ProductDTO>();

            var dataFromDB = _context.products.ToList();

            foreach (var item in dataFromDB)
            {
                ProductDTO temp = new ProductDTO();

                temp.Id = item.Id;
                temp.Name = item.Name;
                temp.Image = item.Image;
                temp.Price = item.Price;
                temp.Size = item.Size;
                temp.CountryMade = item.CountryMade;
                temp.Description = item.Description;
                temp.Rating = item.Rating;
                temp.Count = item.Count;

                data.Add(temp);
            }
            return data;
        }



        [HttpGet("getProduct/{id}")]
        public IEnumerable<ProductDTO> getProductyId([FromRoute] string id)
        {
            List<ProductDTO> data = new List<ProductDTO>();

            
            var product = _context.products.FirstOrDefault(t => t.Id == id);

            var images = _context.images.Where(t => t.ProductId == id);


            ProductDTO temp = new ProductDTO();

                temp.Id = product.Id;
                temp.Name = product.Name;
                temp.Image = product.Image;
                temp.Price = product.Price;
                temp.Size = product.Size;
                temp.CountryMade = product.CountryMade;
                temp.Description = product.Description;
                temp.Rating = product.Rating;
                temp.Count = product.Count;
            foreach (var item in images)
            {
                temp.Images.Add(item.Image);
            }
                

                data.Add(temp);
            
            return data;
        }



        [HttpPost("addProduct")]
        public ResultDto addProduct([FromBody] ProductDTO model)
        {
            Product products = new Product();

            products.Id = Guid.NewGuid().ToString();
          
            products.Name = model.Name;
            products.Image = model.Image;
            products.Price = model.Price;
            products.Size = model.Size;
            products.CountryMade = model.CountryMade;
            products.Description = model.Description;
            products.Rating = model.Rating;
            products.Count = model.Count;

            _context.products.Add(products);

            _context.SaveChanges();

            return new ResultDto
            {
                Status = 200,
                Message = "OK"
            };

        }


        [HttpPost("editProduct/{id}")]
        public ResultDto editProduct([FromRoute] string id, [FromBody] ProductDTO model)
        {
            var products = _context.products.FirstOrDefault(t => t.Id == id);

            products.Name = model.Name;
            products.Image = model.Image;
            products.Price = model.Price;
            products.Size = model.Size;
            products.CountryMade = model.CountryMade;
            products.Description = model.Description;
            products.Rating = model.Rating;
            products.Count = model.Count;


            _context.SaveChanges();

            return new ResultDto
            {
                Status = 200,
                Message = "OK"
            };

        }


        [HttpPost("removeProduct/{id}")]
        public ResultDto removeCategory([FromRoute] string id)
        {
            try
            {
                var product = _context.products.FirstOrDefault(t => t.Id == id);


                _context.products.Remove(product);

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



        [HttpPost("searchProduct/{search}")]
        public Task<IEnumerable<ProductDTO>> searchByProduct([FromRoute] string searchString)
        {
            var product = from m in _context.products
                       select m;

            if (!String.IsNullOrEmpty(searchString))
            {
                product = product.Where(s => s.Name.Contains(searchString));
            }
            return (Task<IEnumerable<ProductDTO>>) product;
        }



    }
}
