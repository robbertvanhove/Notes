using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.CompilerServices;

namespace MoreCoffee.Model
{
    public class Koffie : BaseModel
    {

        private int id;
        private string naam;
        private double prijs;
        private string beschrijving;

        public int Id
        {
            get
            {
                return id;
            }
            set
            {
                id = value;
                NotifyPropertyChanged();
            }
        }

        public string Naam
        {
            get
            {
                return naam;
            }
            set
            {
                naam = value;
                NotifyPropertyChanged();
            }
        }

        public double Prijs
        {
            get
            {
                return prijs;
            }
            set
            {
                prijs = value;
                NotifyPropertyChanged();
            }
        }

        public string Beschrijving
        {
            get
            {
                return beschrijving;
            }

            set
            {
                beschrijving = value;
                NotifyPropertyChanged();
            }
        }

    }
}
