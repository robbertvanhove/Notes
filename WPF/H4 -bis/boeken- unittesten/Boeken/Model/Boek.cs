using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel;
using System.Runtime.CompilerServices;
namespace Boeken.Model
{
    public class Boek : BaseModel

    {
        private string auteur;
        private string titel;
        private string cover;
        private string samenvatting;

        public string Auteur
        {
            get
            {
                return cover;
            }

            set
            {
                auteur = value;
                NotifyPropertyChanged(); ;
            }
        }

        public string Titel
        {
            get
            {
                return titel;
            }

            set
            {
                cover = value;
                NotifyPropertyChanged();
            }
        }

        public string Cover
        {
            get
            {
                return cover;
            }

            set
            {
                cover = value;
                NotifyPropertyChanged();
            }
        }

        public string Samenvatting
        {
            get
            {
                return samenvatting;
            }

            set
            {
                samenvatting = value;
                NotifyPropertyChanged();

            }
        }
        
        public Boek(string auteur, string titel, string cover, string samenvatting)
        {
            Auteur = auteur;
            Titel = titel;
            Cover = cover;
            Samenvatting = samenvatting;

        }

    }
}
