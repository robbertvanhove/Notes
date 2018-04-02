using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kassa.Model
{
    class Product: BaseModel
    {
        //attributes
        private int id;
        private string naam;
        private string barcode;
        private double prijs;
        private int btwID;

        //constructor
        public Product(int id, string naam, string barcode, double prijs, int btwID)
        {
            Id = id;
            Naam = naam;
            Barcode = barcode;
            Prijs = prijs;
            BtwID = btwID;
        }

        //Getters en setters
        public int Id
        {
            get { return id; }
            set
            {
                id = value;
                NotifyPropertyChanged();
            }
        }

        public string Naam
        {
            get { return naam; }
            set
            {
                naam = value;
                NotifyPropertyChanged();
            }
        }

        public string Barcode
        {
            get { return barcode; }
            set
            {
                barcode = value;
                NotifyPropertyChanged();
            }
        }

        public double Prijs
        {
            get { return prijs; }
            set
            {
                prijs = value;
                NotifyPropertyChanged();
            }
        }

        public int BtwID
        {
            get { return btwID; }
            set
            {
                btwID = value;
                NotifyPropertyChanged();
            }
        }


        
    }
}
