using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using System.Web.SessionState;

namespace AngularWebApi
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        private const string Root_Client = "~/Scripts/Client/index.html";

        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            string url = Request.Url.LocalPath;
            if (url.ToLower().Contains("api"))
                return;

            if (!System.IO.File.Exists(Context.Server.MapPath(url)))
                Context.RewritePath(Root_Client);
        }

        protected void Application_PostAuthorizeRequest(object sender, EventArgs e)
        {
            HttpContext.Current.SetSessionStateBehavior(SessionStateBehavior.Required);
        }
    }
}
