using AngularWebApi.Models;
using System.Collections.Generic;
using System.Web;
using System.Web.Http;

namespace AngularWebApi.Controllers
{
    public class UserInfoController : ApiController
    {
        // GET api/UserInfo
        public IEnumerable<UserInfo> Get()
        {
            HttpContext.Current.Session.Add("Client", Request);

            return new UserInfo[] {
                new UserInfo { ID = 1, Name = "Hassan", Username = "HS", Password = "12345@" },
                new UserInfo { ID = 2, Name = "Mohammad", Username = "MHD", Password = "98765@" }
            };
        }

        // GET api/UserInfo/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/UserInfo
        public void Post([FromBody]string value)
        {
        }

        // PUT api/UserInfo/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/UserInfo/5
        public void Delete(int id)
        {
        }
    }
}
