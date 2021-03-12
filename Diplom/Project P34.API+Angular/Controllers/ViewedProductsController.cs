using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Project_IDA.DTO.Models.Result;
using Project_P34.DataAccess;
using Project_P34.DataAccess.Entity;
using Project_P34.DTO.Models;
using Microsoft.EntityFrameworkCore;

namespace Project_P34.API_Angular.Controllers
{
    [Route("api/ViewedProducts")]
    [ApiController]
    public class ViewedProductsController : ControllerBase
    {
        private readonly EFContext _context;

        public ViewedProductsController(EFContext context)
        {
            _context = context;
        }



        [HttpGet("getViewedProducts")]/*ID FROM TOKEN*/
        public IEnumerable<ViewedProductsDTO> getViewedProducts()
        {

            List<ViewedProductsDTO> data = new List<ViewedProductsDTO>();

            //var user = _context.Users.SingleOrDefault(t => t.Id == id);


            var viewItem = _context.viewedProducts.ToList();


            foreach (var item in viewItem)
            {
            ViewedProductsDTO temp = new ViewedProductsDTO();
                temp.Id = item.Id;
                temp.UserId = item.UserId;

                temp.products=item.Products.ToList();
                
               
            data.Add(temp);
            }
            return data;
        }


        [HttpPost("addViewedProduct")]
        public ResultDto addViewedProduct([FromBody] ViewedProductsDTO model)
        {
            ViewedProducts viewproducts = new ViewedProducts();

            var product =  _context.products.FirstOrDefault(t => t.Id == model.SearchProductId);
            var prod = _context.products.Include(t => t.ViewedProducts).FirstOrDefault(t => t.Id == model.SearchProductId);
            var view = _context.viewedProducts.FirstOrDefault(t => t.UserId == model.UserId);

            if (view == null)
            {
                viewproducts.Id = Guid.NewGuid().ToString();

                var user = _context.Users.FirstOrDefault(t => t.Id == model.UserId);
                viewproducts.UserId = model.UserId;

                viewproducts.Products.Add(prod);

                _context.viewedProducts.Add(viewproducts);
            }
            else
            {
                foreach (var item in view.Products)
                {
                    if (item.Id != model.SearchProductId)
                    {
                        view.Products.Add(prod);
                        _context.viewedProducts.Add(view);
                    }
                }
            }

            _context.SaveChanges();

            return new ResultDto
            {
                Status = 200,
                Message = "OK"
            };

        }

    }
}