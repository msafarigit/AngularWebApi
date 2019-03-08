using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

namespace AngularClient
{
    public class Global : System.Web.HttpApplication
    {
        private const string Root_Client = "~/Scripts/Client/index.html";

        protected void Application_Start(object sender, EventArgs e)
        {

        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            string Url = Request.Url.LocalPath;

            if (Url.ToLower().Contains("api"))
                return;

            //if(!System.IO.File.Exists(Context.Server.MapPath(Url)))

            Context.RewritePath(Root_Client);
        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {

        }

        protected void Application_PostAuthorizeRequest(object sender, EventArgs e)
        {
            //HttpContext.Current.SetSessionStateBehavior(SessionStateBehavior.Required);
        }

    }
}