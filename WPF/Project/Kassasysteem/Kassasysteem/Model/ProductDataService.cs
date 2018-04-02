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
    class ProductDataService
    {
        //connectionstring
        private static string connectionString = ConfigurationManager.ConnectionStrings["azure"].ConnectionString;
        private static IDbConnection db = new SqlConnection(connectionString);

        //actions

        public List<Product> GetProducten()
        {
            string sql = "Select * from Product";

            return (List<Product>)db.Query<Product>(sql);

        }

        public List<Product> GetSnelkeuzes()
        {
            string sql = "Select * from Product where isSnelkeuze=1";
            return (List<Product>)db.Query<Product>(sql);
        }

        public void SetSnelkeuze(Product product, bool isSnelkeuze)
        {
            string sql = "Update Product set isSnelkeuze=@isSnelkeuze where ID=@id";
            if(product != null)           
            {
                db.Execute(sql, new
                {
                    isSnelkeuze,
                    product.Id
                });
            }
            


            


        }

        public void VerwijderProduct(Product product)
        {
            if(product != null)
            {
                string sql = "Delete Product where id= @id";
                db.Execute(sql, new { product.Id });
            }
            
        }

        public void InsertProduct(Product product)
        {

            if(product != null)
            {
                string sql = "Insert into Product (naam, barcode, prijs, btwID) values (@naam, @barcode, @prijs, @btwID)";
                db.Execute(sql, new
                {
                    product.Naam,
                    product.Barcode,
                    product.Prijs,
                    product.BtwID
                });
            }
            
            
        }


    }
}
