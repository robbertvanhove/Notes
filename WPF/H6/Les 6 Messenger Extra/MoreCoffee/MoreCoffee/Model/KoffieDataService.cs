using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Dapper;
using System.Configuration;
using System.Collections.ObjectModel;
using MoreCoffee.Extensions;

namespace MoreCoffee.Model
{
    class KoffieDataService
    {
        private static string connectionString = 
            ConfigurationManager.ConnectionStrings["local"].ConnectionString;

        private static IDbConnection db = new SqlConnection(connectionString);
        
        public ObservableCollection<Koffie> GetKoffies()
        {
            string sql = "Select * from Coffee_Product order by Prijs";
 
            return db.Query<Koffie>(sql).ToObservableCollection();
        }

        public void UpdateKoffie(Koffie koffie)
        {
            string sql = "Update Coffee_Product set naam = @naam, beschrijving = @beschrijving, prijs=@prijs where id = @id";

            db.Execute(sql, new { naam = koffie.Naam,
                                    beschrijving = koffie.Beschrijving,
                                    prijs = koffie.Prijs,id = koffie.Id  });
        }
        
    }
}
