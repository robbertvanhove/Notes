using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Kassa.Extensions;
using Dapper;

namespace Kassa.Model
{
    class BtwDataService
    {
        //connectionstring
        private static string connectionString = ConfigurationManager.ConnectionStrings["azure"].ConnectionString;
        private static IDbConnection db = new SqlConnection(connectionString);

        //actions
        public static ObservableCollection<Btw> GetProducten()
        {
            string sql = "Select * from Btw";
            return db.Query<Btw>(sql).ToObservableCollection();
        }

       
    }
}