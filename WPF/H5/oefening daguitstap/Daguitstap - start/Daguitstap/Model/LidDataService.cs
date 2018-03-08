using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using Dapper;
using System;
using System.Windows;

namespace Daguitstap.Model
{
    class LidDataService
    {
        private static string connectionString = ConfigurationManager.ConnectionStrings["local"].ConnectionString;
        private static IDbConnection db = new SqlConnection(connectionString);


        public List<Lid> GetDeelnemers(bool neemtDeel=true)
        {
            string sql = "select * from lid where gaatMee=@neemtDeel order by Naam";
            return (List<Lid>)db.Query<Lid>(sql, new { neemtDeel});
        }

        public void Inschrijven(Lid lid, int neemtDeel)
        {
            lid.GaatMee =neemtDeel;
            string sql = "update Lid set gaatMee = @gaatMee where id=@id";

            db.Execute(sql, new
            {
                lid.GaatMee,
                lid.Id
            });
        }


    }
}
