using Kassasysteem.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace Kassasysteem.Model
{
    class Product : BaseModel
    {
        //attributes
        private int id;
        private string naam;
        private string barcode;
        private double prijs;
        private int btwID;
        private bool isSnelkeuze;

       

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

        public bool IsSnelkeuze
        {
            get { return isSnelkeuze; }
            set
            {
                isSnelkeuze = value;
                NotifyPropertyChanged();
            }
        }



    }
}
