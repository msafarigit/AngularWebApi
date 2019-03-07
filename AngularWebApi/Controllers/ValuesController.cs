using AngularWebApi.Models;
using System.Collections.Generic;
using System.Web;
using System.Web.Http;

namespace AngularWebApi.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<Klass> Get()
        {
            HttpContext.Current.Session.Add("Client", Request);

            return new Klass[] {
                new Klass { ID = 1, Name = this.GetType().ToString(), IsActive = true, Value = 12.11  },
                new Klass { ID = 2, Name = typeof(Klass).ToString(), IsActive = false, Value = 15  }
            };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
