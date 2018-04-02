using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Kassasysteem.Extensions;
using Dapper;
using System.Windows;

namespace Kassasysteem.Model
{
    class BtwDataService
    {
        //connectionstring
        private static string connectionString = ConfigurationManager.ConnectionStrings["azure"].ConnectionString;
        private static IDbConnection db = new SqlConnection(connectionString);

        public List<Btw> GetBtwTypes()
        {
            string sql = "Select * from Btw";
            return (List<Btw>)db.Query<Btw>(sql);
        }
    }
}
