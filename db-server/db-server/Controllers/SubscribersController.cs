using db_server.Models;
using db_server.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace db_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscribersController : ControllerBase
    {
        [HttpGet]
        public List<Subscriber> Get([FromServices] DatabaseService dbSrv)
        {
            return dbSrv.GetSubscribers();
        }
    }
}
